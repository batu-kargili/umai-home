import type { MetadataRoute } from "next";

import { umaiFeatures } from "@/content/umai-features";
import { umaiInnovations } from "@/content/umai-innovations";
import { umaiSolutions } from "@/content/umai-solutions";
import { BLOG_POSTS } from "@/lib/blog-data";
import { STATIC_SITEMAP_ROUTES, toAbsoluteUrl } from "@/lib/site";
import { getSourceLastModified } from "@/lib/site-source";

export default function sitemap(): MetadataRoute.Sitemap {
  const featureLastModified = getSourceLastModified("src/content/umai-features.ts");
  const innovationLastModified = getSourceLastModified("src/content/umai-innovations.ts");
  const solutionLastModified = getSourceLastModified("src/content/umai-solutions.ts");
  const blogSourceLastModified = getSourceLastModified("src/lib/blog-data.ts");

  const staticEntries: MetadataRoute.Sitemap = STATIC_SITEMAP_ROUTES.map(
    ({ path, sourceFile, changeFrequency, priority }) => ({
      url: toAbsoluteUrl(path),
      lastModified: getSourceLastModified(sourceFile),
      changeFrequency,
      priority,
    }),
  );

  const featureEntries: MetadataRoute.Sitemap = umaiFeatures.map((feature) => ({
    url: toAbsoluteUrl(feature.href),
    lastModified: featureLastModified,
    changeFrequency: "monthly",
    priority: 0.8,
  }));

  const innovationEntries: MetadataRoute.Sitemap = umaiInnovations.map(
    (innovation) => ({
      url: toAbsoluteUrl(innovation.href),
      lastModified: innovationLastModified,
      changeFrequency: "monthly",
      priority: 0.7,
    }),
  );

  const solutionEntries: MetadataRoute.Sitemap = umaiSolutions.map((solution) => ({
    url: toAbsoluteUrl(`/solutions/${solution.slug}`),
    lastModified: solutionLastModified,
    changeFrequency: "monthly",
    priority: 0.8,
  }));

  const blogEntries: MetadataRoute.Sitemap = BLOG_POSTS.map((post) => ({
    url: toAbsoluteUrl(`/blog/${post.slug}`),
    lastModified:
      blogSourceLastModified > new Date(post.publishedAt)
        ? blogSourceLastModified
        : new Date(post.publishedAt),
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
