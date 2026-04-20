import type { Metadata } from "next";

import {
  SITE_DEFAULT_OG_IMAGE,
  SITE_DEFAULT_OG_IMAGE_HEIGHT,
  SITE_DEFAULT_OG_IMAGE_ALT,
  SITE_DEFAULT_OG_IMAGE_TYPE,
  SITE_DEFAULT_OG_IMAGE_WIDTH,
  SITE_DEFAULT_TITLE,
  SITE_DESCRIPTION,
  SITE_NAME,
  SITE_TWITTER_HANDLE,
  toAbsoluteUrl,
} from "@/lib/site";

type MetadataTitle = NonNullable<Metadata["title"]>;
type MetadataRobots = Metadata["robots"];

type PageMetadataOptions = {
  path: string;
  title?: MetadataTitle;
  ogTitle?: string;
  description?: string;
  image?: string;
  imageAlt?: string;
  keywords?: string[];
  robots?: MetadataRobots;
  type?: "website" | "article";
  publishedTime?: string;
  modifiedTime?: string;
};

function resolveOgTitle(title?: MetadataTitle, fallback?: string) {
  if (fallback) {
    return fallback;
  }

  if (typeof title === "string") {
    return `${title} | ${SITE_NAME}`;
  }

  if (title && "absolute" in title) {
    return title.absolute;
  }

  return SITE_DEFAULT_TITLE;
}

export function buildPageMetadata({
  path,
  title,
  ogTitle,
  description = SITE_DESCRIPTION,
  image = SITE_DEFAULT_OG_IMAGE,
  imageAlt,
  keywords,
  robots,
  type = "website",
  publishedTime,
  modifiedTime,
}: PageMetadataOptions): Metadata {
  const resolvedOgTitle = resolveOgTitle(title, ogTitle);
  const resolvedImageAlt = imageAlt ?? SITE_DEFAULT_OG_IMAGE_ALT;
  const resolvedImageUrl = toAbsoluteUrl(image);

  return {
    title,
    description,
    keywords,
    robots,
    alternates: {
      canonical: path,
    },
    openGraph: {
      type,
      url: toAbsoluteUrl(path),
      title: resolvedOgTitle,
      description,
      siteName: SITE_NAME,
      images: [
        {
          url: resolvedImageUrl,
          alt: resolvedImageAlt,
          width: SITE_DEFAULT_OG_IMAGE_WIDTH,
          height: SITE_DEFAULT_OG_IMAGE_HEIGHT,
          type: SITE_DEFAULT_OG_IMAGE_TYPE,
        },
      ],
      ...(publishedTime ? { publishedTime } : {}),
      ...(modifiedTime ? { modifiedTime } : {}),
    },
    twitter: {
      card: "summary_large_image",
      site: SITE_TWITTER_HANDLE,
      title: resolvedOgTitle,
      description,
      images: [
        {
          url: resolvedImageUrl,
          alt: resolvedImageAlt,
        },
      ],
    },
  };
}
