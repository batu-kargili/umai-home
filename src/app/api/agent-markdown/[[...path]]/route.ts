import { NextRequest, NextResponse } from "next/server";

import { convertHtmlToMarkdown } from "@/lib/markdown-for-agents";
import { HOME_DISCOVERY_LINKS } from "@/lib/site";

const INTERNAL_FETCH_HEADER = "x-agent-markdown-bypass";

function buildCandidateUrl(base: string, pathname: string, search: string) {
  const url = new URL(base);
  url.pathname = pathname;
  url.search = search;
  return url.toString();
}

function getHtmlFetchCandidates(request: NextRequest, pathname: string, search: string) {
  const candidates: string[] = [];
  const loopbackPort = process.env.PORT || request.nextUrl.port;
  const forwardedHost =
    request.headers.get("x-forwarded-host") ?? request.headers.get("host");
  const forwardedProto =
    request.headers.get("x-forwarded-proto") ??
    request.nextUrl.protocol.replace(/:$/, "");

  if (loopbackPort) {
    candidates.push(buildCandidateUrl(`http://127.0.0.1:${loopbackPort}`, pathname, search));
  }

  if (forwardedHost && forwardedProto) {
    candidates.push(buildCandidateUrl(`${forwardedProto}://${forwardedHost}`, pathname, search));
  }

  candidates.push(buildCandidateUrl(request.nextUrl.origin, pathname, search));

  return Array.from(new Set(candidates));
}

async function fetchHtmlResponse(candidates: string[]) {
  let lastError: unknown;

  for (const candidate of candidates) {
    try {
      return await fetch(candidate, {
        headers: {
          Accept: "text/html",
          [INTERNAL_FETCH_HEADER]: "1",
        },
        cache: "no-store",
        redirect: "follow",
      });
    } catch (error) {
      lastError = error;
    }
  }

  throw lastError;
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
    getHtmlFetchCandidates(request, targetUrl.pathname, targetUrl.search),
  );

  if (!htmlResponse.ok) {
    const response = new NextResponse(htmlResponse.body, {
      status: htmlResponse.status,
      headers: {
        "Content-Type":
          htmlResponse.headers.get("Content-Type") || "text/plain; charset=utf-8",
      },
    });

    appendVaryHeader(response, "Accept");

    return response;
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
