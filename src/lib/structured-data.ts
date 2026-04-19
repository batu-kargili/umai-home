import {
  SITE_DEFAULT_OG_IMAGE,
  SITE_DESCRIPTION,
  SITE_PRIMARY_LINKS,
  SITE_NAME,
  SITE_URL,
  toAbsoluteUrl,
} from "@/lib/site";

export type BreadcrumbItem = {
  name: string;
  path: string;
};

export function buildOrganizationJsonLd() {
  return {
    "@context": "https://schema.org",
    "@type": "Organization",
    "@id": toAbsoluteUrl("/#organization"),
    name: SITE_NAME,
    url: SITE_URL,
    description: SITE_DESCRIPTION,
    logo: {
      "@type": "ImageObject",
      url: toAbsoluteUrl("/assets/umailogo_dark.png"),
    },
    contactPoint: [
      {
        "@type": "ContactPoint",
        contactType: "sales",
        url: toAbsoluteUrl("/contact"),
        availableLanguage: ["en", "tr"],
      },
    ],
  };
}

export function buildWebSiteJsonLd() {
  return {
    "@context": "https://schema.org",
    "@type": "WebSite",
    "@id": toAbsoluteUrl("/#website"),
    name: SITE_NAME,
    alternateName: "Umai",
    url: SITE_URL,
    description: SITE_DESCRIPTION,
    inLanguage: "en",
    publisher: {
      "@id": toAbsoluteUrl("/#organization"),
    },
  };
}

export function buildSiteNavigationJsonLd() {
  return {
    "@context": "https://schema.org",
    "@graph": SITE_PRIMARY_LINKS.map((link) => ({
      "@type": "SiteNavigationElement",
      name: link.label,
      description: link.description,
      url: toAbsoluteUrl(link.path),
    })),
  };
}

export function buildBreadcrumbJsonLd(items: BreadcrumbItem[]) {
  return {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    itemListElement: items.map((item, index) => ({
      "@type": "ListItem",
      position: index + 1,
      name: item.name,
      item: toAbsoluteUrl(item.path),
    })),
  };
}

type ArticleAuthor = {
  name: string;
};

type ArticleJsonLdOptions = {
  path: string;
  title: string;
  description: string;
  publishedTime: string;
  author: ArticleAuthor;
  section?: string;
};

export function buildArticleJsonLd({
  path,
  title,
  description,
  publishedTime,
  author,
  section,
}: ArticleJsonLdOptions) {
  return {
    "@context": "https://schema.org",
    "@type": "Article",
    headline: title,
    description,
    datePublished: publishedTime,
    dateModified: publishedTime,
    mainEntityOfPage: toAbsoluteUrl(path),
    articleSection: section,
    image: [toAbsoluteUrl(SITE_DEFAULT_OG_IMAGE)],
    author: {
      "@type": "Person",
      name: author.name,
    },
    publisher: {
      "@type": "Organization",
      name: SITE_NAME,
      logo: {
        "@type": "ImageObject",
        url: toAbsoluteUrl("/assets/umailogo_dark.png"),
      },
    },
  };
}

export function buildFaqJsonLd(items: Array<{ q: string; a: string }>) {
  return {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    mainEntity: items.map((item) => ({
      "@type": "Question",
      name: item.q,
      acceptedAnswer: {
        "@type": "Answer",
        text: item.a,
      },
    })),
  };
}

export function buildEventJsonLd() {
  return {
    "@context": "https://schema.org",
    "@type": "Event",
    name: "EU AI Act Enforcement for Regulated Enterprises",
    description:
      "A virtual UMAI webinar on operationalizing EU AI Act requirements with runtime guardrails, oversight patterns, and audit-ready evidence.",
    eventAttendanceMode: "https://schema.org/OnlineEventAttendanceMode",
    eventStatus: "https://schema.org/EventScheduled",
    startDate: "2026-06-16T10:00:00+02:00",
    endDate: "2026-06-16T11:00:00+02:00",
    image: [toAbsoluteUrl(SITE_DEFAULT_OG_IMAGE)],
    location: {
      "@type": "VirtualLocation",
      url: toAbsoluteUrl("/events/eu-ai-act-enforcement#register"),
    },
    organizer: {
      "@type": "Organization",
      name: SITE_NAME,
      url: SITE_URL,
    },
  };
}
