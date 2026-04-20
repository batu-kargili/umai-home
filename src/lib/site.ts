export const SITE_NAME = "UMAI";

const DEFAULT_SITE_URL = "https://umaisolutions.com";

export const SITE_URL = (process.env.NEXT_PUBLIC_SITE_URL ?? DEFAULT_SITE_URL).replace(
  /\/$/,
  "",
);

export const SITE_TWITTER_HANDLE = "@umaiAI";

export const SITE_DEFAULT_TITLE = "UMAI | Control Plane for Enterprise AI";

export const SITE_DESCRIPTION =
  "UMAI is the control plane for enterprise AI: an inline runtime layer for real-time enforcement, browser governance, tamper-evident audit evidence, and sovereign deployment.";

export const SITE_DEFAULT_OG_IMAGE = "/og";

export const SITE_DEFAULT_OG_IMAGE_WIDTH = 1200;

export const SITE_DEFAULT_OG_IMAGE_HEIGHT = 630;

export const SITE_DEFAULT_OG_IMAGE_TYPE = "image/png";

export const SITE_DEFAULT_OG_IMAGE_ALT =
  "UMAI enterprise AI control plane preview";

export const SITE_PRIMARY_LINKS = [
  {
    label: "Platform",
    path: "/platform",
    description:
      "Customer-hosted runtime governance, guardrails, and evidence workflows.",
  },
  {
    label: "Browser Extension",
    path: "/browser-extension",
    description:
      "Govern ChatGPT, Claude, Gemini, and other browser AI surfaces.",
  },
  {
    label: "Platform Docs",
    path: "/docs",
    description:
      "Deployment, policies, evaluations, monitoring, and integration guidance.",
  },
  {
    label: "Contact Sales",
    path: "/contact",
    description:
      "Discuss rollout, deployment planning, pricing, and compliance questions.",
  },
  {
    label: "About UMAI",
    path: "/about",
    description:
      "Company background, product direction, and enterprise AI governance focus.",
  },
  {
    label: "Blog",
    path: "/blog",
    description:
      "Engineering, compliance, and security perspectives from the UMAI team.",
  },
] as const;

export const HOME_DISCOVERY_LINKS = [
  '</.well-known/service-desc.json>; rel="service-desc"; type="application/json"',
  '</docs>; rel="service-doc"; type="text/html"',
  '</.well-known/service-desc.json>; rel="describedby"; type="application/json"',
  '</sitemap.xml>; rel="describedby"; type="application/xml"',
] as const;

export const STATIC_SITEMAP_ROUTES = [
  { path: "/", sourceFile: "src/app/page.tsx", changeFrequency: "weekly" as const, priority: 1 },
  {
    path: "/about",
    sourceFile: "src/app/about/page.tsx",
    changeFrequency: "monthly" as const,
    priority: 0.8,
  },
  {
    path: "/platform",
    sourceFile: "src/app/platform/page.tsx",
    changeFrequency: "weekly" as const,
    priority: 0.9,
  },
  {
    path: "/platform/testing-evaluation",
    sourceFile: "src/app/platform/testing-evaluation/page.tsx",
    changeFrequency: "monthly" as const,
    priority: 0.8,
  },
  {
    path: "/browser-extension",
    sourceFile: "src/app/browser-extension/page.tsx",
    changeFrequency: "weekly" as const,
    priority: 0.8,
  },
  {
    path: "/docs",
    sourceFile: "src/app/docs/page.tsx",
    changeFrequency: "weekly" as const,
    priority: 0.9,
  },
  {
    path: "/blog",
    sourceFile: "src/app/blog/page.tsx",
    changeFrequency: "weekly" as const,
    priority: 0.8,
  },
  {
    path: "/contact",
    sourceFile: "src/app/contact/page.tsx",
    changeFrequency: "monthly" as const,
    priority: 0.7,
  },
  {
    path: "/events/eu-ai-act-enforcement",
    sourceFile: "src/app/events/eu-ai-act-enforcement/page.tsx",
    changeFrequency: "monthly" as const,
    priority: 0.7,
  },
  {
    path: "/privacy",
    sourceFile: "src/app/privacy/page.tsx",
    changeFrequency: "yearly" as const,
    priority: 0.4,
  },
  {
    path: "/terms",
    sourceFile: "src/app/terms/page.tsx",
    changeFrequency: "yearly" as const,
    priority: 0.4,
  },
] as const;

export function toAbsoluteUrl(path: string) {
  return new URL(path, SITE_URL).toString();
}
