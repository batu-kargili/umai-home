import type { Metadata } from "next";

import { BlogIndexPageClient } from "@/components/blog/BlogIndexPageClient";
import { BLOG_POST_PREVIEWS } from "@/lib/blog-data";
import { buildPageMetadata } from "@/lib/seo";

export const metadata: Metadata = buildPageMetadata({
  path: "/blog",
  title: "Blog",
  description:
    "Deep dives from the UMAI engineering, compliance, and security teams.",
});

export default function BlogPage() {
  return (
    <BlogIndexPageClient
      initialCategory="All"
      posts={BLOG_POST_PREVIEWS}
    />
  );
}
