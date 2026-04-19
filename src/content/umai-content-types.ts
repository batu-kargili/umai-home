import type { LucideIcon } from "lucide-react";

export type CapabilityTheme = "cobalt" | "azure" | "cyan";

export type CapabilityPosition =
  | "left-top"
  | "left-middle"
  | "left-bottom"
  | "right-top"
  | "right-middle"
  | "right-bottom";

export interface DetailSection {
  id:
    | "what-it-does"
    | "why-it-matters"
    | "key-capabilities"
    | "use-cases"
    | "compliance-value"
    | "integrations"
    | "cta";
  title: string;
  intro: string;
  bullets: string[];
}

export interface UmaiFeature {
  title: string;
  slug: string;
  href: string;
  shortDescription: string;
  icon: LucideIcon;
  position: CapabilityPosition;
  theme: CapabilityTheme;
  detailPage: string;
  seoTitle: string;
  seoDescription: string;
  heroLabel: string;
  heroValueProp: string;
  capabilityHighlights: string[];
  relatedSlugs: string[];
  sections: DetailSection[];
}

export interface UmaiInnovation {
  title: string;
  slug: string;
  href: string;
  shortDescription: string;
  icon: LucideIcon;
  theme: CapabilityTheme;
  detailPage: string;
  seoTitle: string;
  seoDescription: string;
  heroLabel: string;
  heroValueProp: string;
  relatedFeatureSlugs: string[];
  sections: DetailSection[];
}
