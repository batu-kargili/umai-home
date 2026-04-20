import { getCloudflareContext } from "@opennextjs/cloudflare";
import { NextRequest, NextResponse } from "next/server";

import { convertHtmlToMarkdown } from "@/lib/markdown-for-agents";
import { HOME_DISCOVERY_LINKS } from "@/lib/site";

const INTERNAL_FETCH_HEADER = "x-agent-markdown-bypass";
const HTML_CONTENT_TYPES = ["text/html", "application/xhtml+xml"];
const FETCH_TIMEOUT_MS = 8000;
const PASSTHROUGH_RESPONSE_HEADERS = [
  "cache-control",
  "content-type",
  "etag",
  "last-modified",
] as const;

function getInternalFetchHeaders(request: NextRequest) {
  const headers = new Headers({
    Accept: "text/html",
    [INTERNAL_FETCH_HEADER]: "1",
  });

  for (const headerName of ["accept-language", "cookie", "user-agent"] as const) {
    const value = request.headers.get(headerName);

    if (value) {
      headers.set(headerName, value);
    }
  }

  return headers;
}

function buildUrlForHost(host: string, pathname: string, search: string) {
  const protocol =
    host.includes("localhost") || host.includes("127.0.0.1") ? "http" : "https";
  const url = new URL(`${protocol}://${host}`);

  url.pathname = pathname;
  url.search = search;

  return url.toString();
}

function buildPassThroughResponse(upstreamResponse: Response) {
  const headers = new Headers();

  for (const headerName of PASSTHROUGH_RESPONSE_HEADERS) {
    const value = upstreamResponse.headers.get(headerName);

    if (value) {
      headers.set(headerName, value);
    }
  }

  const response = new NextResponse(upstreamResponse.body, {
    status: upstreamResponse.status,
    headers,
  });

  appendVaryHeader(response, "Accept");

  return response;
}

function isHtmlResponse(response: Response) {
  const contentType = response.headers.get("content-type");

  if (!contentType) {
    return true;
  }

  return HTML_CONTENT_TYPES.some((value) => contentType.includes(value));
}

async function fetchWithTimeout(input: string, init: RequestInit) {
  return fetch(input, {
    ...init,
    signal: AbortSignal.timeout(FETCH_TIMEOUT_MS),
  });
}

async function fetchFromWorkerSelfReference(
  request: NextRequest,
  pathname: string,
  search: string,
) {
  try {
    const { env } = await getCloudflareContext({ async: true });
    const service = env.WORKER_SELF_REFERENCE;
    const host =
      request.headers.get("x-forwarded-host") ?? request.headers.get("host");

    if (!service || !host) {
      return null;
    }

    return await service.fetch(buildUrlForHost(host, pathname, search), {
      headers: getInternalFetchHeaders(request),
      redirect: "follow",
      cache: "no-store",
      signal: AbortSignal.timeout(FETCH_TIMEOUT_MS),
    });
  } catch {
    return null;
  }
}

async function fetchHtmlResponse(request: NextRequest, pathname: string, search: string) {
  const workerResponse = await fetchFromWorkerSelfReference(request, pathname, search);

  if (workerResponse) {
    return workerResponse;
  }

  const fallbackUrl = new URL(request.nextUrl.origin);
  fallbackUrl.pathname = pathname;
  fallbackUrl.search = search;

  return fetchWithTimeout(fallbackUrl.toString(), {
    headers: getInternalFetchHeaders(request),
    cache: "no-store",
    redirect: "follow",
  });
}

function appendVaryHeader(response: NextResponse, value: string) {
  const existing = response.headers.get("Vary");

  if (!existing) {
    response.headers.set("Vary", value);
    return;
  }

  const values = new Set(
    existing
      .split(",")
      .map((item) => item.trim())
      .filter(Boolean),
  );

  values.add(value);
  response.headers.set("Vary", Array.from(values).join(", "));
}

export const runtime = "nodejs";

type RouteContext = {
  params: Promise<{
    path?: string[];
  }>;
};

export async function GET(request: NextRequest, { params }: RouteContext) {
  const resolvedParams = await params;
  const pathFromParams = resolvedParams.path?.length
    ? `/${resolvedParams.path.join("/")}`
    : "/";
  const pathParam = request.nextUrl.searchParams.get("path");
  const rawPath = pathParam ?? pathFromParams;
  // Collapse any leading slashes (incl. backslashes) to a single "/" so a value
  // like "//attacker.example/x" becomes "/attacker.example/x" and cannot be
  // interpreted as a protocol-relative URL by the WHATWG URL parser.
  const normalizedPath = `/${rawPath.replace(/^[/\\]+/, "")}`;
  const forwardedParams = new URLSearchParams(request.nextUrl.searchParams);

  forwardedParams.delete("path");

  const targetUrl = new URL(request.nextUrl.origin);
  targetUrl.pathname = normalizedPath;
  if (forwardedParams.size) {
    targetUrl.search = forwardedParams.toString();
  }

  if (targetUrl.origin !== request.nextUrl.origin) {
    return new NextResponse("Invalid path", { status: 400 });
  }

  const htmlResponse = await fetchHtmlResponse(
    request,
    targetUrl.pathname,
    targetUrl.search,
  );

  if (!htmlResponse.ok) {
    return buildPassThroughResponse(htmlResponse);
  }

  if (!isHtmlResponse(htmlResponse)) {
    return buildPassThroughResponse(htmlResponse);
  }

  const html = await htmlResponse.text();
  const { markdown, estimatedTokens } = convertHtmlToMarkdown(html);

  const response = new NextResponse(markdown, {
    headers: {
      "Content-Type": "text/markdown; charset=utf-8",
      "x-markdown-tokens": estimatedTokens.toString(),
    },
  });

  appendVaryHeader(response, "Accept");

  if (targetUrl.pathname === "/") {
    response.headers.set("Link", HOME_DISCOVERY_LINKS.join(", "));
  }

  return response;
}
