import type { ReactNode } from "react";
import Image from "next/image";
import Link from "next/link";
import {
  ArrowLeft,
  ArrowRight,
  ChevronRight,
  ChevronDown,
} from "lucide-react";
import { MarketingHeader } from "@/components/layout/MarketingHeader";
import { BlogCover } from "@/components/blog/BlogCover";

import {
  type BlogPost,
} from "@/lib/blog-data";
const CONTACT_URL = "/contact";

function extractHeadings(content: string) {
  const headings: { id: string; title: string }[] = [];

  for (const line of content.split("\n")) {
    if (!line.startsWith("## ")) {
      continue;
    }

    const title = line.slice(3).trim();
    const id = title
      .toLowerCase()
      .replace(/[^a-z0-9\s-]/g, "")
      .replace(/\s+/g, "-");

    headings.push({ id, title });
  }

  return headings;
}

function inlineFormat(text: string): string {
  return text
    .replace(
      /\*\*(.+?)\*\*/g,
      '<strong class="text-black font-semibold">$1</strong>',
    )
    .replace(
      /`([^`]+)`/g,
      '<code class="rounded bg-black/[0.04] px-1.5 py-0.5 text-[14px] font-mono text-landing-blue">$1</code>',
    )
    .replace(
      /\[([^\]]+)\]\(([^)]+)\)/g,
      '<a href="$2" class="text-landing-blue hover:text-landing-blue-surface underline underline-offset-2 decoration-landing-blue/30">$1</a>',
    );
}

function renderMarkdown(content: string) {
  const lines = content.split("\n");
  const elements: ReactNode[] = [];
  let listItems: string[] = [];

  const flushList = (keySeed: number) => {
    if (listItems.length === 0) {
      return;
    }

    elements.push(
      <ul key={`list-${keySeed}`} className="space-y-2.5 my-5 pl-6">
        {listItems.map((item, index) => (
          <li
            key={`${keySeed}-${index}`}
            className="text-[#2a2a2a] text-[16px] leading-[1.75] list-disc marker:text-black/25"
          >
            <span dangerouslySetInnerHTML={{ __html: inlineFormat(item) }} />
          </li>
        ))}
      </ul>,
    );

    listItems = [];
  };

  lines.forEach((line, index) => {
    if (line.startsWith("### ")) {
      flushList(index);
      const title = line.slice(4);
      const id = title
        .toLowerCase()
        .replace(/[^a-z0-9\s-]/g, "")
        .replace(/\s+/g, "-");

      elements.push(
        <h3
          key={`h3-${index}`}
          id={id}
          className="text-[20px] font-bold text-black mt-10 mb-3 leading-snug scroll-mt-24"
        >
          <span dangerouslySetInnerHTML={{ __html: inlineFormat(title) }} />
        </h3>,
      );
      return;
    }

    if (line.startsWith("## ")) {
      flushList(index);
      const title = line.slice(3);
      const id = title
        .toLowerCase()
        .replace(/[^a-z0-9\s-]/g, "")
        .replace(/\s+/g, "-");

      elements.push(
        <h2
          key={`h2-${index}`}
          id={id}
          className="text-[26px] font-bold text-black mt-14 mb-4 leading-tight scroll-mt-24"
        >
          <span dangerouslySetInnerHTML={{ __html: inlineFormat(title) }} />
        </h2>,
      );
      return;
    }

    if (/^[-*] /.test(line)) {
      listItems.push(line.slice(2));
      return;
    }

    if (/^\d+\. /.test(line)) {
      listItems.push(line.replace(/^\d+\.\s*/, ""));
      return;
    }

    if (line.trim() === "") {
      flushList(index);
      return;
    }

    flushList(index);
    elements.push(
      <p key={`p-${index}`} className="text-[#2a2a2a] text-[16px] leading-[1.85] my-5">
        <span dangerouslySetInnerHTML={{ __html: inlineFormat(line) }} />
      </p>,
    );
  });

  flushList(lines.length);

  return elements;
}

function formatDate(dateValue: string) {
  return new Date(dateValue)
    .toLocaleDateString("en-US", {
      month: "short",
      day: "numeric",
      year: "numeric",
    })
    .toUpperCase();
}

interface BlogPostPageClientProps {
  post: BlogPost;
  recommended: BlogPost[];
}

export function BlogPostPageClient({
  post,
  recommended,
}: BlogPostPageClientProps) {
  const headings = extractHeadings(post.content);

  return (
    <div className="min-h-screen bg-white text-black">
      <MarketingHeader accent="blue" theme="light" />

      <main className="bg-white">
        <div className="max-w-[1120px] mx-auto px-6 pt-12 pb-20">
          <Link
            href="/blog"
            className="mb-8 inline-flex items-center gap-1 text-sm text-landing-blue transition-colors hover:text-landing-blue-surface"
          >
            <ArrowLeft className="h-4 w-4" />
            Back to blog
          </Link>

          <h1 className="mb-6 max-w-[720px] text-[32px] font-bold leading-[1.12] tracking-[-0.02em] text-landing-blue md:text-[42px] lg:text-[48px]">
            {post.title}
          </h1>

          <div className="flex flex-wrap items-center gap-x-2 gap-y-1 mb-8 text-sm">
            <Link
              href="/blog"
              className="font-medium text-landing-blue transition-colors hover:text-landing-blue-surface"
            >
              {post.category}
            </Link>
            <ChevronRight className="h-3.5 w-3.5 text-black/25" />
            <span className="text-black/50">UMAI</span>
            <span className="ml-6 text-black/40 uppercase tracking-wide text-xs">
              {formatDate(post.publishedAt)}
            </span>
            <span className="ml-2 text-black/40 uppercase tracking-wide text-xs">
              READ TIME: {post.readingTime.replace(" read", "").toUpperCase()}
            </span>
          </div>

          <BlogCover
            theme={post.coverTheme}
            category={post.category}
            size="featured"
            className="mb-10 h-48 rounded-2xl md:h-64 lg:h-72"
          />

          <div className="mb-12 flex items-center gap-3 border-b border-black/10 pb-8">
            <div className="flex h-10 w-10 items-center justify-center rounded-full bg-landing-blue/10 text-[12px] font-bold text-landing-blue">
              {post.author.avatar}
            </div>
            <div>
              <p className="text-sm font-semibold text-black">
                {post.author.name}
              </p>
              <p className="text-xs text-black/50">{post.author.role}</p>
            </div>
          </div>

          <div className="flex gap-16 items-start">
            <article className="min-w-0 flex-1 max-w-[680px]">
              {renderMarkdown(post.content)}
            </article>

            <aside className="hidden lg:block w-[300px] flex-shrink-0 sticky top-[92px]">
              {headings.length > 0 && (
                <div className="mb-8">
                  <details open>
                    <summary className="mb-4 flex w-full cursor-pointer list-none items-center justify-between [&::-webkit-details-marker]:hidden">
                      <h2 className="text-[22px] font-bold text-black">
                        Table of Contents
                      </h2>
                      <ChevronDown className="h-5 w-5 text-black/40" />
                    </summary>
                    <ol className="space-y-2.5">
                      {headings.map((heading, index) => (
                        <li key={heading.id}>
                          <a
                            href={`#${heading.id}`}
                            className="flex gap-2 text-[14px] leading-snug text-landing-blue transition-colors hover:text-landing-blue-surface"
                          >
                            <span className="text-black/30 flex-shrink-0">
                              {index + 1}.
                            </span>
                            <span className="underline underline-offset-2 decoration-landing-blue/30">
                              {heading.title}
                            </span>
                          </a>
                        </li>
                      ))}
                    </ol>
                  </details>
                </div>
              )}

              <div className="border border-black/10 rounded-xl p-6">
                <h3 className="text-[18px] font-bold text-black mb-2 leading-snug">
                  Explore UMAI Platform
                </h3>
                <p className="text-[14px] text-black/50 leading-relaxed mb-4">
                  Govern every AI decision across your enterprise.
                </p>
                <Link
                  href={CONTACT_URL}
                  className="inline-flex items-center gap-1.5 text-sm font-medium text-landing-blue transition-colors hover:text-landing-blue-surface"
                >
                  Learn More <ArrowRight className="h-4 w-4" />
                </Link>
              </div>
            </aside>
          </div>
        </div>

        {recommended.length > 0 && (
          <section className="bg-black py-20">
            <div className="max-w-[1120px] mx-auto px-6">
              <h2 className="text-[22px] font-bold text-white mb-8">
                Recommended Reading
              </h2>
              <div className="grid md:grid-cols-3 gap-5">
                {recommended.map((article) => (
                  <Link
                    key={article.slug}
                    href={`/blog/${article.slug}`}
                    className="group flex flex-col overflow-hidden rounded-2xl border border-white/8 bg-[#0f0f0f] transition-all duration-200 hover:border-landing-blue/25"
                  >
                    <BlogCover
                      theme={article.coverTheme}
                      category={article.category}
                      size="compact"
                      className="h-32"
                    />
                    <div className="p-5 flex flex-col flex-1">
                      <span className="mb-3 text-[10px] font-semibold uppercase tracking-wider text-landing-blue-light">
                        {article.category}
                      </span>
                      <h3 className="mb-3 flex-1 text-[15px] font-semibold leading-snug text-white transition-colors group-hover:text-landing-blue-light">
                        {article.title}
                      </h3>
                      <p className="text-xs text-white/30">
                        {formatDate(article.publishedAt)} | {article.readingTime}
                      </p>
                    </div>
                  </Link>
                ))}
              </div>
            </div>
          </section>
        )}
      </main>

      <footer className="bg-black border-t border-white/8">
        <div className="max-w-[1280px] mx-auto px-6 py-16">
          <div className="grid grid-cols-2 md:grid-cols-[1fr_repeat(4,auto)] gap-10 md:gap-12">
            <div className="col-span-2 md:col-span-1">
              <div className="mb-5">
                <Image
                  src="/assets/umailogo_white.png"
                  alt="UMAI"
                  width={120}
                  height={36}
                  className="h-8 w-auto"
                  style={{ width: "auto" }}
                />
              </div>
              <p className="text-white/35 text-sm leading-relaxed max-w-[240px]">
                Enterprise AI governance platform. Runtime enforcement, browser
                governance, and tamper-evident audit evidence.
              </p>
            </div>

            {[
              {
                heading: "Product",
                links: [
                  { label: "Platform", href: "/platform" },
                  { label: "Docs", href: "/docs" },
                  { label: "Blog", href: "/blog" },
                ],
              },
              {
                heading: "Use Cases",
                links: [
                  { label: "Apps & Copilots", href: "/#products" },
                  { label: "AI Agents", href: "/#products" },
                  { label: "Browser AI", href: "/#products" },
                  { label: "Any Environment", href: "/#products" },
                ],
              },
              {
                heading: "Industries",
                links: [
                  { label: "Financial Services", href: "/#solutions" },
                  { label: "Healthcare", href: "/#solutions" },
                  { label: "Insurance", href: "/#solutions" },
                  { label: "Public Sector", href: "/#solutions" },
                  { label: "Manufacturing", href: "/#solutions" },
                ],
              },
              {
                heading: "Company",
                links: [
                  { label: "Contact", href: CONTACT_URL },
                  { label: "Privacy", href: "/privacy" },
                  { label: "Terms", href: "/terms" },
                ],
              },
            ].map((column) => (
              <div key={column.heading}>
                <p className="text-[11px] font-bold uppercase tracking-[0.18em] text-white/25 mb-5">
                  {column.heading}
                </p>
                <ul className="space-y-3">
                  {column.links.map((link) => (
                    <li key={link.label}>
                      <Link
                        href={link.href}
                        className="text-white/45 hover:text-white text-sm transition-colors"
                      >
                        {link.label}
                      </Link>
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>

          <div className="mt-14 pt-6 border-t border-white/8 flex flex-col md:flex-row md:items-center md:justify-between gap-3 text-xs text-white/25">
            <p>(c) 2026 UMAI. Enterprise AI governance for governed deployment.</p>
            <div className="flex gap-6">
              <Link
                href="/privacy"
                className="hover:text-white/50 transition-colors"
              >
                Privacy
              </Link>
              <Link
                href="/terms"
                className="hover:text-white/50 transition-colors"
              >
                Terms
              </Link>
              <Link
                href={CONTACT_URL}
                className="hover:text-white/50 transition-colors"
              >
                Contact
              </Link>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
}
