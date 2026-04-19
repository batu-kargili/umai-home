"use client";

import { useState } from "react";
import Image from "next/image";
import Link from "next/link";

import { BlogCover } from "@/components/blog/BlogCover";
import { MarketingHeader } from "@/components/layout/MarketingHeader";
import { CONTACT_URL } from "@/components/layout/marketing-nav-data";
import {
  BLOG_CATEGORIES,
  type BlogCategory,
  type BlogPostPreview,
} from "@/lib/blog-data";

const categoryColors: Record<string, string> = {
  Engineering: "bg-landing-blue/15 text-landing-blue-light border-landing-blue/30",
  Security: "bg-white/8 text-white/70 border-white/15",
  Compliance: "bg-amber-500/10 text-amber-400 border-amber-500/25",
  Product: "bg-green-500/10 text-green-400 border-green-500/25",
  Changelog: "bg-white/5 text-white/50 border-white/10",
};

interface BlogIndexPageClientProps {
  initialCategory: BlogCategory;
  posts: BlogPostPreview[];
}

export function BlogIndexPageClient({
  initialCategory,
  posts,
}: BlogIndexPageClientProps) {
  const [activeCategory, setActiveCategory] = useState<BlogCategory>(initialCategory);
  const filteredPosts =
    activeCategory === "All"
      ? posts
      : posts.filter((post) => post.category === activeCategory);
  const featuredPost =
    activeCategory === "All"
      ? filteredPosts.find((post) => post.featured) ?? null
      : null;
  const restPosts = featuredPost
    ? filteredPosts.filter((post) => post.slug !== featuredPost.slug)
    : filteredPosts;

  return (
    <div className="min-h-screen bg-black text-white">
      <MarketingHeader accent="blue" theme="dark" />

      <main>
        <section className="bg-black pt-16 pb-12">
          <div className="mx-auto max-w-[1280px] px-6">
            <p className="mb-4 text-[11px] font-bold uppercase tracking-[0.22em] text-landing-blue-light">
              Blog
            </p>
            <h1 className="mb-4 text-[36px] font-black leading-[1.08] tracking-[-0.03em] text-white md:text-[48px]">
              AI Security, Compliance,
              <br />
              and Engineering
            </h1>
            <p className="max-w-xl text-lg leading-relaxed text-white/45">
              Deep dives from the UMAI engineering and security teams on building
              responsible AI systems at scale.
            </p>
          </div>
        </section>

        <div className="sticky top-[68px] z-40 border-b border-white/8 bg-black/95 backdrop-blur-md">
          <div className="mx-auto max-w-[1280px] px-6">
            <div className="-mx-1 flex items-center gap-1.5 overflow-x-auto py-3">
              {BLOG_CATEGORIES.map((category) => (
                <button
                  key={category}
                  type="button"
                  role="tab"
                  id={`blog-category-tab-${category.toLowerCase().replace(/\s+/g, "-")}`}
                  aria-controls="blog-post-grid"
                  aria-selected={activeCategory === category}
                  onClick={() => setActiveCategory(category)}
                  className={`flex-shrink-0 rounded-full px-4 py-1.5 text-sm font-medium transition-all duration-150 ${
                    activeCategory === category
                      ? "bg-landing-blue text-white"
                      : "text-white/40 hover:bg-white/8 hover:text-white"
                  }`}
                >
                  {category}
                </button>
              ))}
            </div>
          </div>
        </div>

        <section
          id="blog-post-grid"
          role="tabpanel"
          aria-labelledby={`blog-category-tab-${activeCategory.toLowerCase().replace(/\s+/g, "-")}`}
          className="bg-black py-14"
        >
          <div className="mx-auto max-w-[1280px] px-6">
            <div className="grid grid-cols-1 gap-5 md:grid-cols-2 lg:grid-cols-3">
              {featuredPost && (
                <Link
                  href={`/blog/${featuredPost.slug}`}
                  className="group col-span-full grid gap-0 overflow-hidden rounded-2xl border border-white/8 bg-[#0f0f0f] transition-all duration-200 hover:border-landing-blue/30 lg:grid-cols-2"
                >
                  <BlogCover
                    theme={featuredPost.coverTheme}
                    category={featuredPost.category}
                    size="featured"
                    className="min-h-[260px] lg:min-h-[320px]"
                  />
                  <div className="flex flex-col justify-center p-8 lg:p-10">
                    <span
                      className={`mb-4 inline-flex items-center self-start rounded-full border px-2.5 py-0.5 text-[11px] font-semibold uppercase tracking-wider ${
                        categoryColors[featuredPost.category] ??
                        "border-white/10 bg-white/5 text-white/50"
                      }`}
                    >
                      {featuredPost.category}
                    </span>
                    <h2 className="mb-3 text-[22px] font-bold leading-tight text-white transition-colors group-hover:text-landing-blue-light lg:text-[26px]">
                      {featuredPost.title}
                    </h2>
                    <p className="mb-6 line-clamp-3 text-sm leading-relaxed text-white/45">
                      {featuredPost.excerpt}
                    </p>
                    <div className="flex items-center gap-3">
                      <div className="flex h-8 w-8 items-center justify-center rounded-full bg-white/8 text-xs font-bold text-white/60">
                        {featuredPost.author.avatar}
                      </div>
                      <div>
                        <p className="text-sm font-medium text-white/80">
                          {featuredPost.author.name}
                        </p>
                        <p className="text-xs text-white/35">
                          {featuredPost.publishedAt} | {featuredPost.readingTime}
                        </p>
                      </div>
                    </div>
                  </div>
                </Link>
              )}

              {restPosts.map((post) => (
                <Link
                  key={post.slug}
                  href={`/blog/${post.slug}`}
                  className="group flex flex-col overflow-hidden rounded-2xl border border-white/8 bg-[#0f0f0f] transition-all duration-200 hover:border-landing-blue/25"
                >
                  <BlogCover
                    theme={post.coverTheme}
                    category={post.category}
                    size="card"
                    className="h-44"
                  />
                  <div className="flex flex-1 flex-col p-6">
                    <span
                      className={`mb-3 inline-flex items-center self-start rounded-full border px-2.5 py-0.5 text-[11px] font-semibold uppercase tracking-wider ${
                        categoryColors[post.category] ??
                        "border-white/10 bg-white/5 text-white/50"
                      }`}
                    >
                      {post.category}
                    </span>
                    <h2 className="mb-2 flex-1 text-[16px] font-semibold leading-snug text-white transition-colors group-hover:text-landing-blue-light">
                      {post.title}
                    </h2>
                    <p className="mb-5 line-clamp-3 text-sm leading-relaxed text-white/40">
                      {post.excerpt}
                    </p>
                    <div className="mt-auto flex items-center gap-2.5 border-t border-white/8 pt-4">
                      <div className="flex h-7 w-7 items-center justify-center rounded-full bg-white/8 text-[10px] font-bold text-white/50">
                        {post.author.avatar}
                      </div>
                      <div>
                        <p className="text-xs font-medium text-white/65">
                          {post.author.name}
                        </p>
                        <p className="text-[11px] text-white/30">
                          {post.publishedAt} | {post.readingTime}
                        </p>
                      </div>
                    </div>
                  </div>
                </Link>
              ))}

              {filteredPosts.length === 0 && (
                <div className="col-span-full py-20 text-center text-white/30">
                  No articles in this category yet.
                </div>
              )}
            </div>
          </div>
        </section>
      </main>

      <footer className="border-t border-white/8 bg-black">
        <div className="mx-auto max-w-[1280px] px-6 py-16">
          <div className="grid grid-cols-2 gap-10 md:grid-cols-[1fr_repeat(4,auto)] md:gap-12">
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
              <p className="max-w-[240px] text-sm leading-relaxed text-white/35">
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
                heading: "Company",
                links: [
                  { label: "About", href: "/about" },
                  { label: "Contact", href: CONTACT_URL },
                  { label: "Privacy", href: "/privacy" },
                  { label: "Cookie preferences", href: "/cookie-preferences" },
                  { label: "Terms", href: "/terms" },
                ],
              },
            ].map((column) => (
              <div key={column.heading}>
                <p className="text-xs font-semibold uppercase tracking-[0.22em] text-white/48">
                  {column.heading}
                </p>
                <ul className="mt-5 space-y-3">
                  {column.links.map((link) => (
                    <li key={link.label}>
                      <Link
                        href={link.href}
                        className="text-sm text-white/78 transition-colors duration-200 hover:text-white"
                      >
                        {link.label}
                      </Link>
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>
      </footer>
    </div>
  );
}
