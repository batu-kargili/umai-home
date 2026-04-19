import type { Metadata } from "next";
import { notFound } from "next/navigation";

import { MarketingFooter } from "@/components/layout/MarketingFooter";
import { MarketingHeader } from "@/components/layout/MarketingHeader";
import { FeatureDetailHero } from "@/components/platform/FeatureDetailHero";
import { FeatureDetailSections } from "@/components/platform/FeatureDetailSections";
import { JsonLd } from "@/components/seo/JsonLd";
import { getRelatedFeatures } from "@/content/umai-features";
import {
  getInnovationBySlug,
  umaiInnovations,
} from "@/content/umai-innovations";
import { buildPageMetadata } from "@/lib/seo";
import { buildBreadcrumbJsonLd } from "@/lib/structured-data";

export function generateStaticParams() {
  return umaiInnovations.map((innovation) => ({ slug: innovation.slug }));
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ slug: string }>;
}): Promise<Metadata> {
  const { slug } = await params;
  const innovation = getInnovationBySlug(slug);

  if (!innovation) {
    return {
      title: "Innovation",
    };
  }

  return buildPageMetadata({
    path: innovation.href,
    title: innovation.seoTitle,
    description: innovation.seoDescription,
  });
}

export default async function InnovationPage({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  const innovation = getInnovationBySlug(slug);

  if (!innovation) {
    notFound();
  }

  const relatedFeatures = getRelatedFeatures(innovation.relatedFeatureSlugs);

  return (
    <div className="min-h-screen bg-[#050505] text-white">
      <JsonLd
        id={`innovation-breadcrumb-jsonld-${innovation.slug}`}
        data={buildBreadcrumbJsonLd([
          { name: "Home", path: "/" },
          { name: "Platform", path: "/platform" },
          { name: innovation.title, path: innovation.href },
        ])}
      />
      <MarketingHeader />

      <main>
        <FeatureDetailHero
          eyebrow={innovation.heroLabel}
          title={innovation.title}
          valueProp={innovation.heroValueProp}
          highlights={relatedFeatures.map((feature) => feature.title)}
          icon={innovation.icon}
          backHref="/platform#platform"
        />
        <FeatureDetailSections
          sections={innovation.sections}
          relatedFeatures={relatedFeatures}
          backHref="/platform#platform"
        />
      </main>

      <MarketingFooter />
    </div>
  );
}
