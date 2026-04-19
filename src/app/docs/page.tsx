import type { Metadata } from "next";
import { DocsContent } from "@/components/docs/DocsContent";
import { DocsSidebar } from "@/components/docs/DocsSidebar";
import { DocsOnThisPage } from "@/components/docs/DocsOnThisPage";
import { DocsHeader } from "@/components/docs/DocsHeader";
import { JsonLd } from "@/components/seo/JsonLd";
import { buildPageMetadata } from "@/lib/seo";
import { buildBreadcrumbJsonLd } from "@/lib/structured-data";

export const metadata: Metadata = buildPageMetadata({
  path: "/docs",
  title: "Platform Docs",
  description:
    "UMAI Platform documentation covering on-prem deployment, platform structure, LDAP access, API keys, policies, guardrails, evaluations, monitoring, audit logs, browser governance, and runtime integration.",
});

export default function DocsPage() {
  return (
    <div className="min-h-screen bg-[#1a1a1a] text-white">
      <JsonLd
        id="docs-breadcrumb-jsonld"
        data={buildBreadcrumbJsonLd([
          { name: "Home", path: "/" },
          { name: "Platform Docs", path: "/docs" },
        ])}
      />
      <DocsHeader />
      <div className="flex">
        <DocsSidebar />
        <main className="min-w-0 flex-1 px-10 py-10 lg:px-14">
          <header className="mx-auto max-w-[820px] pb-10">
            <p className="text-[11px] font-semibold uppercase tracking-[0.24em] text-[#6aaeff]">
              Documentation
            </p>
            <h1 className="mt-4 text-[2.8rem] font-semibold leading-[1.02] tracking-[-0.05em] text-white md:text-[3.4rem]">
              UMAI Platform documentation
            </h1>
            <p className="mt-4 max-w-[46rem] text-[1rem] leading-7 text-white/58">
              Deployment, policy authoring, guardrails, evaluation, monitoring,
              audit evidence, browser governance, and runtime integration
              guidance for enterprise UMAI environments.
            </p>
          </header>
          <DocsContent />
        </main>
        <DocsOnThisPage />
      </div>
    </div>
  );
}
