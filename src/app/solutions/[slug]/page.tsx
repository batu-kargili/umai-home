import type { Metadata } from "next";
import { notFound } from "next/navigation";

import { SolutionDetailPage } from "@/components/solutions/SolutionDetailPage";
import { JsonLd } from "@/components/seo/JsonLd";
import { getSolutionBySlug, umaiSolutions } from "@/content/umai-solutions";
import { buildPageMetadata } from "@/lib/seo";
import { buildBreadcrumbJsonLd } from "@/lib/structured-data";

export function generateStaticParams() {
  return umaiSolutions.map((solution) => ({ slug: solution.slug }));
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ slug: string }>;
}): Promise<Metadata> {
  const { slug } = await params;
  const solution = getSolutionBySlug(slug);

  if (!solution) {
    return {
      title: "Solution",
    };
  }

  return buildPageMetadata({
    path: `/solutions/${solution.slug}`,
    title: solution.seoTitle,
    description: solution.seoDescription,
  });
}

export default async function SolutionPage({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  const solution = getSolutionBySlug(slug);

  if (!solution) {
    notFound();
  }

  return (
    <>
      <JsonLd
        id={`solution-breadcrumb-jsonld-${solution.slug}`}
        data={buildBreadcrumbJsonLd([
          { name: "Home", path: "/" },
          { name: solution.title, path: `/solutions/${solution.slug}` },
        ])}
      />
      <SolutionDetailPage solution={solution} />
    </>
  );
}
