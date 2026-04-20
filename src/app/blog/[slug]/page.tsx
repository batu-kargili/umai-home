import type { Metadata } from "next";
import { notFound, redirect } from "next/navigation";

import { BlogPostPageClient } from "@/components/blog/BlogPostPageClient";
import { JsonLd } from "@/components/seo/JsonLd";
import {
  BLOG_POSTS,
  getCanonicalBlogPostSlug,
  getBlogPostBySlug,
  getRelatedBlogPosts,
} from "@/lib/blog-data";
import { buildPageMetadata } from "@/lib/seo";
import {
  buildArticleJsonLd,
  buildBreadcrumbJsonLd,
} from "@/lib/structured-data";

export function generateStaticParams() {
  return BLOG_POSTS.map((post) => ({ slug: post.slug }));
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ slug: string }>;
}): Promise<Metadata> {
  const { slug } = await params;
  const canonicalSlug = getCanonicalBlogPostSlug(slug);
  const post = getBlogPostBySlug(slug);

  if (!post) {
    return buildPageMetadata({
      path: "/blog",
      title: "Blog",
      description:
        "Deep dives from the UMAI engineering, compliance, and security teams.",
    });
  }

  return buildPageMetadata({
    path: `/blog/${canonicalSlug}`,
    title: post.title,
    description: post.excerpt,
    type: "article",
    publishedTime: post.publishedAt,
    modifiedTime: post.publishedAt,
  });
}

export default async function BlogPostPage({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  const canonicalSlug = getCanonicalBlogPostSlug(slug);

  if (canonicalSlug !== slug) {
    redirect(`/blog/${canonicalSlug}`);
  }

  const post = getBlogPostBySlug(slug);

  if (!post) {
    notFound();
  }

  return (
    <>
      <JsonLd
        id={`article-jsonld-${post.slug}`}
        data={buildArticleJsonLd({
          path: `/blog/${post.slug}`,
          title: post.title,
          description: post.excerpt,
          publishedTime: post.publishedAt,
          author: post.author,
          section: post.category,
        })}
      />
      <JsonLd
        id={`breadcrumb-jsonld-${post.slug}`}
        data={buildBreadcrumbJsonLd([
          { name: "Home", path: "/" },
          { name: "Blog", path: "/blog" },
          { name: post.title, path: `/blog/${post.slug}` },
        ])}
      />
      <BlogPostPageClient
        post={post}
        recommended={getRelatedBlogPosts(post)}
      />
    </>
  );
}
