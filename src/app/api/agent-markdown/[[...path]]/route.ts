import { NextRequest, NextResponse } from "next/server";

import { convertHtmlToMarkdown } from "@/lib/markdown-for-agents";
import { HOME_DISCOVERY_LINKS } from "@/lib/site";

const INTERNAL_FETCH_HEADER = "x-agent-markdown-bypass";

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

  const htmlResponse = await fetch(targetUrl, {
    headers: {
      Accept: "text/html",
      [INTERNAL_FETCH_HEADER]: "1",
    },
    cache: "no-store",
    redirect: "manual",
  });

  if (!htmlResponse.ok) {
    return new NextResponse(htmlResponse.body, {
      status: htmlResponse.status,
      headers: {
        "Content-Type":
          htmlResponse.headers.get("Content-Type") || "text/plain; charset=utf-8",
      },
    });
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
