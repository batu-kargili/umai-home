import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { notFound } from "next/navigation";
import { ArrowLeft, ArrowRight, CheckCircle2, Star } from "lucide-react";

import { DocsHeader } from "@/components/docs/DocsHeader";
import { JsonLd } from "@/components/seo/JsonLd";
import { buildPageMetadata } from "@/lib/seo";
import { buildBreadcrumbJsonLd } from "@/lib/structured-data";
import {
  getPolicyFramework,
  POLICY_FRAMEWORKS,
  type PolicyItem,
} from "@/lib/policy-library-data";

interface PageProps {
  params: Promise<{ framework: string }>;
}

export function generateStaticParams() {
  return POLICY_FRAMEWORKS.map((framework) => ({ framework: framework.slug }));
}

export async function generateMetadata({
  params,
}: PageProps): Promise<Metadata> {
  const { framework: slug } = await params;
  const framework = getPolicyFramework(slug);

  if (!framework) {
    return buildPageMetadata({
      path: "/docs/policy-library",
      title: "Policy Library",
    });
  }

  return buildPageMetadata({
    path: `/docs/policy-library/${framework.slug}`,
    title: `${framework.name} Policy Package`,
    description: `${framework.policies.length} UMAI runtime guardrail policies for ${framework.fullName} (${framework.regulation}). ${framework.summary}`,
  });
}

function MetaBadge({ label, value }: { label: string; value: string }) {
  return (
    <div className="flex flex-col gap-1 rounded-lg border border-white/8 bg-white/[0.02] px-3 py-2.5">
      <span className="text-[10px] font-semibold uppercase tracking-[0.16em] text-white/35">
        {label}
      </span>
      <span className="text-[12.5px] font-medium leading-5 text-white/75">
        {value}
      </span>
    </div>
  );
}

function PolicyCard({
  policy,
  accent,
}: {
  policy: PolicyItem;
  accent: string;
}) {
  return (
    <article
      id={policy.code}
      className="scroll-mt-24 rounded-2xl border border-white/10 bg-white/[0.03] p-6"
    >
      <div className="flex flex-wrap items-center gap-3">
        <span
          className="rounded-md px-2.5 py-1 font-mono text-[12px] font-semibold"
          style={{ color: accent, backgroundColor: `${accent}1a` }}
        >
          {policy.code}
        </span>
        {policy.highRisk ? (
          <span className="inline-flex items-center gap-1 rounded-md bg-amber-400/15 px-2.5 py-1 text-[11px] font-semibold text-amber-300">
            <Star className="h-3 w-3 fill-amber-300" />
            High-risk / Critical infrastructure
          </span>
        ) : null}
      </div>

      <h3 className="mt-4 text-lg font-semibold tracking-[-0.01em] text-white">
        {policy.title}
      </h3>
      <p className="mt-3 text-[0.95rem] leading-7 text-white/60">
        {policy.description}
      </p>

      <div className="mt-5 grid gap-2.5 sm:grid-cols-2 lg:grid-cols-4">
        <MetaBadge label="Type" value={policy.type} />
        <MetaBadge label="Phase" value={policy.phase} />
        <MetaBadge label="Action" value={policy.action} />
        <MetaBadge label="Basis" value={policy.basis} />
      </div>
    </article>
  );
}

export default async function PolicyFrameworkPage({ params }: PageProps) {
  const { framework: slug } = await params;
  const framework = getPolicyFramework(slug);

  if (!framework) {
    notFound();
  }

  const hasHighRisk = framework.policies.some((policy) => policy.highRisk);

  return (
    <div className="min-h-screen bg-[#1a1a1a] text-white">
      <JsonLd
        id={`policy-${framework.slug}-breadcrumb-jsonld`}
        data={buildBreadcrumbJsonLd([
          { name: "Home", path: "/" },
          { name: "Platform Docs", path: "/docs" },
          { name: "Policy Library", path: "/docs/policy-library" },
          {
            name: framework.name,
            path: `/docs/policy-library/${framework.slug}`,
          },
        ])}
      />
      <DocsHeader />

      <main className="mx-auto max-w-[900px] px-6 py-12 lg:px-10 lg:py-16">
        <Link
          href="/docs/policy-library"
          className="inline-flex items-center gap-2 text-sm font-medium text-white/55 transition-colors hover:text-white"
        >
          <ArrowLeft className="h-4 w-4" />
          Policy Library
        </Link>

        {/* Framework header */}
        <header className="mt-8">
          <span
            className="block h-1 w-16 rounded-full"
            style={{ backgroundColor: framework.accent }}
          />
          <div className="mt-6 flex flex-col gap-6 sm:flex-row sm:items-center sm:justify-between">
            <div className="flex h-20 w-52 items-center justify-start rounded-xl bg-white px-5 py-4">
              <Image
                src={framework.logo}
                alt={`${framework.name} logo`}
                width={framework.logoWidth}
                height={framework.logoHeight}
                className="h-auto max-h-12 w-auto"
              />
            </div>
            <span
              className="self-start rounded-full px-4 py-1.5 text-sm font-semibold"
              style={{
                color: framework.accent,
                backgroundColor: `${framework.accent}1a`,
              }}
            >
              {framework.policies.length} policies
            </span>
          </div>

          <h1 className="mt-7 text-[2.4rem] font-semibold leading-[1.05] tracking-[-0.04em] text-white md:text-[3rem]">
            {framework.fullName}
          </h1>
          <p className="mt-2 text-sm font-medium text-white/40">
            {framework.regulation}
          </p>
          <p className="mt-5 max-w-[46rem] text-[1.02rem] leading-8 text-white/62">
            {framework.description}
          </p>
        </header>

        {/* Highlights */}
        <div className="mt-8 rounded-2xl border border-white/10 bg-white/[0.03] p-6">
          <p className="text-[11px] font-semibold uppercase tracking-[0.2em] text-[#6aaeff]">
            Coverage focus
          </p>
          <ul className="mt-4 grid gap-3 sm:grid-cols-2">
            {framework.highlights.map((highlight) => (
              <li key={highlight} className="flex gap-3">
                <CheckCircle2
                  className="mt-0.5 h-4 w-4 flex-shrink-0"
                  style={{ color: framework.accent }}
                />
                <span className="text-sm leading-6 text-white/60">
                  {highlight}
                </span>
              </li>
            ))}
          </ul>
          {hasHighRisk ? (
            <p className="mt-5 flex items-start gap-2 border-t border-white/8 pt-4 text-[13px] leading-6 text-white/50">
              <Star className="mt-0.5 h-3.5 w-3.5 flex-shrink-0 fill-amber-300 text-amber-300" />
              Policies marked with a star target critical-infrastructure and
              high-risk use scenarios under Annex III.
            </p>
          ) : null}
        </div>

        {/* Policies */}
        <section className="mt-12">
          <div className="flex items-center justify-between">
            <h2 className="text-2xl font-semibold tracking-[-0.03em] text-white">
              Policies
            </h2>
            <span className="text-sm text-white/40">
              {framework.policies.length} total
            </span>
          </div>

          <div className="mt-6 space-y-5">
            {framework.policies.map((policy) => (
              <PolicyCard
                key={policy.code}
                policy={policy}
                accent={framework.accent}
              />
            ))}
          </div>
        </section>

        {/* Footer nav */}
        <nav className="mt-14 flex flex-col gap-4 border-t border-white/8 pt-8 sm:flex-row sm:items-center sm:justify-between">
          <Link
            href="/docs/policy-library"
            className="inline-flex items-center gap-2 text-sm font-medium text-white/55 transition-colors hover:text-white"
          >
            <ArrowLeft className="h-4 w-4" />
            All frameworks
          </Link>
          <Link
            href="/contact"
            className="inline-flex items-center gap-2 rounded-lg bg-[#0056F9] px-5 py-3 text-sm font-semibold text-white transition-all hover:-translate-y-0.5 hover:bg-[#0B5BEA]"
          >
            Deploy this package with UMAI
            <ArrowRight className="h-4 w-4" />
          </Link>
        </nav>
      </main>
    </div>
  );
}
