import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { ArrowLeft, ArrowRight, ShieldCheck } from "lucide-react";

import { DocsHeader } from "@/components/docs/DocsHeader";
import { JsonLd } from "@/components/seo/JsonLd";
import { buildPageMetadata } from "@/lib/seo";
import { buildBreadcrumbJsonLd } from "@/lib/structured-data";
import {
  POLICY_FRAMEWORKS,
  POLICY_LIBRARY_TOTAL,
} from "@/lib/policy-library-data";

export const metadata: Metadata = buildPageMetadata({
  path: "/docs/policy-library",
  title: "Policy Library",
  description:
    "UMAI's ready-made guardrail policy packages for KVKK, GDPR, EU AI Act, and the OWASP LLM Top 10. Explore all 96 runtime policies mapped to each regulatory and security framework.",
});

const PHASES = [
  {
    label: "PRE_LLM",
    body: "The user input is evaluated before it ever reaches the model.",
  },
  {
    label: "POST_LLM",
    body: "The model output is evaluated before it returns to the user.",
  },
];

const POLICY_TYPES = [
  {
    label: "Heuristic",
    body: "Deterministic pattern matching — Regex, Exact Match, DLP, Max Length. Sub-millisecond latency.",
  },
  {
    label: "Context-Aware",
    body: "Semantic classification evaluated by an LLM for intent-based decisions. Sub-50 ms p95 target.",
  },
];

const ACTIONS = [
  { label: "BLOCK", body: "Stop the request or response." },
  { label: "ALLOW_WITH_WARNINGS", body: "Pass through with a warning." },
  { label: "FLAG", body: "Monitor and log for review." },
  { label: "Redaction", body: "Mask the sensitive content." },
];

export default function PolicyLibraryPage() {
  return (
    <div className="min-h-screen bg-[#1a1a1a] text-white">
      <JsonLd
        id="policy-library-breadcrumb-jsonld"
        data={buildBreadcrumbJsonLd([
          { name: "Home", path: "/" },
          { name: "Platform Docs", path: "/docs" },
          { name: "Policy Library", path: "/docs/policy-library" },
        ])}
      />
      <DocsHeader />

      <main className="mx-auto max-w-[1040px] px-6 py-12 lg:px-10 lg:py-16">
        <Link
          href="/docs#policies"
          className="inline-flex items-center gap-2 text-sm font-medium text-white/55 transition-colors hover:text-white"
        >
          <ArrowLeft className="h-4 w-4" />
          Back to Docs
        </Link>

        <header className="mt-8 max-w-[52rem]">
          <div className="inline-flex items-center gap-2 rounded-full border border-[#6aaeff]/30 bg-[#0056F9]/10 px-3 py-1 text-[11px] font-semibold uppercase tracking-[0.2em] text-[#6aaeff]">
            <ShieldCheck className="h-3.5 w-3.5" />
            Policy Library
          </div>
          <h1 className="mt-5 text-[2.8rem] font-semibold leading-[1.02] tracking-[-0.05em] text-white md:text-[3.4rem]">
            Ready-made guardrail policy packages
          </h1>
          <p className="mt-5 text-[1.05rem] leading-8 text-white/60">
            UMAI ships curated policy packages that map directly onto the
            regulatory and security frameworks enterprises are held to. Each
            package is a set of runtime guardrail policies — {POLICY_LIBRARY_TOTAL}{" "}
            in total — that run on the UMAI AI Engine and can be deployed,
            customized, and versioned without changing application code.
          </p>
        </header>

        {/* How the policies work */}
        <section className="mt-14 grid gap-4 md:grid-cols-3">
          <div className="rounded-xl border border-white/10 bg-white/[0.03] p-6">
            <p className="text-[11px] font-semibold uppercase tracking-[0.2em] text-[#6aaeff]">
              Two evaluation phases
            </p>
            <ul className="mt-4 space-y-3">
              {PHASES.map((phase) => (
                <li key={phase.label}>
                  <p className="font-mono text-[13px] font-semibold text-white">
                    {phase.label}
                  </p>
                  <p className="mt-1 text-sm leading-6 text-white/55">
                    {phase.body}
                  </p>
                </li>
              ))}
            </ul>
          </div>

          <div className="rounded-xl border border-white/10 bg-white/[0.03] p-6">
            <p className="text-[11px] font-semibold uppercase tracking-[0.2em] text-[#6aaeff]">
              Two policy types
            </p>
            <ul className="mt-4 space-y-3">
              {POLICY_TYPES.map((type) => (
                <li key={type.label}>
                  <p className="text-[13px] font-semibold text-white">
                    {type.label}
                  </p>
                  <p className="mt-1 text-sm leading-6 text-white/55">
                    {type.body}
                  </p>
                </li>
              ))}
            </ul>
          </div>

          <div className="rounded-xl border border-white/10 bg-white/[0.03] p-6">
            <p className="text-[11px] font-semibold uppercase tracking-[0.2em] text-[#6aaeff]">
              Decision actions
            </p>
            <ul className="mt-4 space-y-2.5">
              {ACTIONS.map((action) => (
                <li key={action.label} className="flex flex-col">
                  <span className="font-mono text-[12px] font-semibold text-white">
                    {action.label}
                  </span>
                  <span className="text-sm leading-6 text-white/55">
                    {action.body}
                  </span>
                </li>
              ))}
            </ul>
          </div>
        </section>

        <p className="mt-6 rounded-xl border border-white/10 bg-white/[0.02] px-6 py-5 text-sm leading-7 text-white/55">
          Every decision is written to a hash-chained audit ledger and can be
          exported as compliance evidence. Policies are rolled out in{" "}
          <span className="font-semibold text-white/80">MONITOR</span> mode first
          to measure false positives, then promoted to{" "}
          <span className="font-semibold text-white/80">ENFORCE</span>. Policies
          are versioned and managed through a draft, publish, and rollback
          workflow in Control Center.
        </p>

        {/* Framework cards */}
        <section className="mt-16">
          <div className="flex items-end justify-between">
            <div>
              <p className="text-[11px] font-semibold uppercase tracking-[0.24em] text-[#6aaeff]">
                Choose a framework
              </p>
              <h2 className="mt-3 text-2xl font-semibold tracking-[-0.03em] text-white">
                Explore each policy package
              </h2>
            </div>
          </div>

          <div className="mt-8 grid gap-6 sm:grid-cols-2">
            {POLICY_FRAMEWORKS.map((framework) => (
              <Link
                key={framework.slug}
                href={`/docs/policy-library/${framework.slug}`}
                className="group relative flex flex-col overflow-hidden rounded-2xl border border-white/10 bg-white/[0.03] p-7 transition-all duration-200 hover:-translate-y-1 hover:border-white/20 hover:bg-white/[0.05]"
              >
                <span
                  className="absolute inset-x-0 top-0 h-1"
                  style={{ backgroundColor: framework.accent }}
                />

                <div className="flex items-center justify-between">
                  <div className="flex h-16 w-40 items-center justify-start rounded-lg bg-white px-4 py-3">
                    <Image
                      src={framework.logo}
                      alt={`${framework.name} logo`}
                      width={framework.logoWidth}
                      height={framework.logoHeight}
                      className="h-auto max-h-10 w-auto"
                    />
                  </div>
                  <span
                    className="rounded-full px-3 py-1 text-xs font-semibold"
                    style={{
                      color: framework.accent,
                      backgroundColor: `${framework.accent}1a`,
                    }}
                  >
                    {framework.policies.length} policies
                  </span>
                </div>

                <h3 className="mt-6 text-xl font-semibold tracking-[-0.02em] text-white">
                  {framework.fullName}
                </h3>
                <p className="mt-1 text-[13px] font-medium text-white/40">
                  {framework.regulation}
                </p>
                <p className="mt-4 flex-1 text-sm leading-7 text-white/58">
                  {framework.summary}
                </p>

                <span
                  className="mt-6 inline-flex items-center gap-1.5 text-sm font-semibold transition-colors"
                  style={{ color: framework.accent }}
                >
                  View policies
                  <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-1" />
                </span>
              </Link>
            ))}
          </div>
        </section>

        {/* Contact CTA */}
        <section className="mt-16 rounded-2xl border border-[#6aaeff]/20 bg-[#0056F9]/10 p-8">
          <h2 className="text-xl font-semibold text-white">
            Need a package tailored to your organization?
          </h2>
          <p className="mt-3 max-w-[46rem] text-sm leading-7 text-white/60">
            Every package is customized to your project structure, confidential
            term glossary, and approved model list, then rolled out through a
            shadow-mode, staged-enforcement, and full-production plan. Work with
            UMAI on policy mapping and rollout readiness.
          </p>
          <Link
            href="/contact"
            className="mt-6 inline-flex items-center gap-2 rounded-lg bg-[#0056F9] px-5 py-3 text-sm font-semibold text-white transition-all hover:-translate-y-0.5 hover:bg-[#0B5BEA]"
          >
            Contact UMAI
            <ArrowRight className="h-4 w-4" />
          </Link>
        </section>
      </main>
    </div>
  );
}
