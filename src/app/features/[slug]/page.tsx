import type { Metadata } from "next";
import { notFound } from "next/navigation";

import { MarketingFooter } from "@/components/layout/MarketingFooter";
import { MarketingHeader } from "@/components/layout/MarketingHeader";
import { FeatureDetailHero } from "@/components/platform/FeatureDetailHero";
import { FeatureDetailSections } from "@/components/platform/FeatureDetailSections";
import { JsonLd } from "@/components/seo/JsonLd";
import { getFeatureBySlug, getRelatedFeatures, umaiFeatures } from "@/content/umai-features";
import { buildPageMetadata } from "@/lib/seo";
import { buildBreadcrumbJsonLd } from "@/lib/structured-data";

export function generateStaticParams() {
  return umaiFeatures.map((feature) => ({ slug: feature.slug }));
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ slug: string }>;
}): Promise<Metadata> {
  const { slug } = await params;
  const feature = getFeatureBySlug(slug);

  if (!feature) {
    return {
      title: "Feature",
    };
  }

  return buildPageMetadata({
    path: feature.href,
    title: feature.seoTitle,
    description: feature.seoDescription,
  });
}

export default async function FeaturePage({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  const feature = getFeatureBySlug(slug);

  if (!feature) {
    notFound();
  }

  return (
    <div className="min-h-screen bg-[#050505] text-white">
      <JsonLd
        id={`feature-breadcrumb-jsonld-${feature.slug}`}
        data={buildBreadcrumbJsonLd([
          { name: "Home", path: "/" },
          { name: "Platform", path: "/platform" },
          { name: feature.title, path: feature.href },
        ])}
      />
      <MarketingHeader />

      <main>
        <FeatureDetailHero
          eyebrow={feature.heroLabel}
          title={feature.title}
          valueProp={feature.heroValueProp}
          highlights={feature.capabilityHighlights}
          icon={feature.icon}
          backHref="/platform#platform"
        />
        <FeatureDetailSections
          sections={feature.sections}
          relatedFeatures={getRelatedFeatures(feature.relatedSlugs)}
          backHref="/platform#platform"
        />
      </main>

      <MarketingFooter />
    </div>
  );
}
