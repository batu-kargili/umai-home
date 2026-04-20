import type { MetadataRoute } from "next";

import { umaiFeatures } from "@/content/umai-features";
import { umaiInnovations } from "@/content/umai-innovations";
import { umaiSolutions } from "@/content/umai-solutions";
import { BLOG_POSTS } from "@/lib/blog-data";
import { STATIC_SITEMAP_ROUTES, toAbsoluteUrl } from "@/lib/site";

export const dynamic = "force-static";

export default function sitemap(): MetadataRoute.Sitemap {
  const staticEntries: MetadataRoute.Sitemap = STATIC_SITEMAP_ROUTES.map(
    ({ path, changeFrequency, priority }) => ({
      url: toAbsoluteUrl(path),
      changeFrequency,
      priority,
    }),
  );

  const featureEntries: MetadataRoute.Sitemap = umaiFeatures.map((feature) => ({
    url: toAbsoluteUrl(feature.href),
    changeFrequency: "monthly",
    priority: 0.8,
  }));

  const innovationEntries: MetadataRoute.Sitemap = umaiInnovations.map(
    (innovation) => ({
      url: toAbsoluteUrl(innovation.href),
      changeFrequency: "monthly",
      priority: 0.7,
    }),
  );

  const solutionEntries: MetadataRoute.Sitemap = umaiSolutions.map((solution) => ({
    url: toAbsoluteUrl(`/solutions/${solution.slug}`),
    changeFrequency: "monthly",
    priority: 0.8,
  }));

  const blogEntries: MetadataRoute.Sitemap = BLOG_POSTS.map((post) => ({
    url: toAbsoluteUrl(`/blog/${post.slug}`),
    lastModified: new Date(post.publishedAt),
    changeFrequency: "monthly",
    priority: 0.7,
  }));

  return [
    ...staticEntries,
    ...featureEntries,
    ...innovationEntries,
    ...solutionEntries,
    ...blogEntries,
  ];
}
