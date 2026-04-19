import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import {
  ArrowRight,
  Database,
  FileCheck2,
  Search,
  ShieldCheck,
} from "lucide-react";

import { MarketingFooter } from "@/components/layout/MarketingFooter";
import { MarketingHeader } from "@/components/layout/MarketingHeader";
import { JsonLd } from "@/components/seo/JsonLd";
import { Container } from "@/components/ui/Container";
import { getFeatureBySlug, getRelatedFeatures } from "@/content/umai-features";
import { buildPageMetadata } from "@/lib/seo";
import { buildBreadcrumbJsonLd } from "@/lib/structured-data";

function getAuditFeature() {
  const feature = getFeatureBySlug("audit-ledger-evidence");

  if (!feature) {
    throw new Error("Missing audit-ledger-evidence feature definition.");
  }

  return feature;
}

const feature = getAuditFeature();

const FEATURE_PILLARS = [
  {
    title: "Audit",
    body: "Reconstruct the exact policy decision, operator context, and governed outcome behind each AI event.",
    icon: ShieldCheck,
  },
  {
    title: "Ledger",
    body: "Keep records hash-linked so integrity checks stay built into the operating model, not layered on later.",
    icon: Database,
  },
  {
    title: "Evidence",
    body: "Export packs that audit, legal, security, and compliance teams can review without rebuilding context from logs.",
    icon: FileCheck2,
  },
] as const;

const CAPTURE_CARDS = [
  {
    title: "Policy and version history",
    body: "Know which guardrail set, threshold, and release version shaped the final decision.",
  },
  {
    title: "Prompt and response phases",
    body: "Trace PRE_LLM and POST_LLM handling without losing the sequence between model input and model output.",
  },
  {
    title: "Operator and approval actions",
    body: "Keep justification, review, escalation, and intervention attached to the governed event chain.",
  },
  {
    title: "Searchable evidence exports",
    body: "Package the event trail for audit prep, investigations, regulator questions, and internal reporting.",
  },
] as const;

const REGIME_CARDS = [
  {
    label: "EU AI Act",
    body: "Support control reconstruction and operational oversight evidence for regulated AI workflows.",
  },
  {
    label: "GDPR / KVKK",
    body: "Tie data handling decisions back to concrete runtime behavior rather than general policy statements.",
  },
  {
    label: "Internal audit",
    body: "Give risk, legal, and board-facing stakeholders one defensible evidence model across teams and environments.",
  },
] as const;

export const metadata: Metadata = buildPageMetadata({
  path: feature.href,
  title: feature.seoTitle,
  description: feature.seoDescription,
});

export default function AuditLedgerEvidencePage() {
  const relatedFeatures = getRelatedFeatures(feature.relatedSlugs);

  return (
    <div className="min-h-screen bg-white text-[#15202B]">
      <JsonLd
        id="audit-ledger-breadcrumb-jsonld"
        data={buildBreadcrumbJsonLd([
          { name: "Home", path: "/" },
          { name: "Platform", path: "/platform" },
          { name: feature.title, path: feature.href },
        ])}
      />
      <MarketingHeader accent="blue" theme="light" />

      <main>
        <section className="relative overflow-hidden border-b border-slate-200 bg-white">
          <div className="pointer-events-none absolute inset-x-0 top-0 h-[680px] bg-[radial-gradient(circle_at_78%_18%,rgba(0,86,249,0.18),transparent_24%),radial-gradient(circle_at_22%_24%,rgba(109,74,255,0.08),transparent_18%)]" />

          <Container className="relative grid gap-12 pb-16 pt-14 md:pb-20 md:pt-16 lg:grid-cols-[minmax(0,0.82fr)_minmax(0,1.18fr)] lg:items-center">
            <div className="max-w-[35rem]">
              <p className="text-sm text-[#6B7280]">
                <Link href="/" className="text-[#0E68BC] transition-colors hover:text-[#0056F9]">
                  Home
                </Link>{" "}
                /{" "}
                <span className="text-[#15202B]">Audit Ledger &amp; Evidence</span>
              </p>

              <p className="mt-8 text-[11px] font-semibold uppercase tracking-[0.22em] text-[#0E68BC]">
                Monitoring and audit ledger
              </p>
              <h1 className="mt-4 text-[38px] font-black leading-[1.02] tracking-[-0.04em] text-[#15202B] md:text-[52px]">
                Turn governed AI activity into
                <br />
                <span className="text-[#0056F9]">audit-ready evidence.</span>
              </h1>
              <p className="mt-5 text-base leading-relaxed text-[#4B5563] md:text-lg">
                Capture the full decision history behind runtime policy actions,
                hash-link the event trail, and export evidence packs that stand
                up to audits, investigations, and regulator review.
              </p>

              <div className="mt-8 flex flex-wrap gap-3">
                <Link
                  href="/contact"
                  className="inline-flex items-center justify-center gap-2 rounded-xl bg-[#0056F9] px-5 py-3 text-sm font-semibold text-white shadow-[0_12px_28px_rgba(0,86,249,0.18)] transition-all hover:-translate-y-0.5 hover:bg-[#0B5BEA]"
                >
                  Book demo
                  <ArrowRight className="h-4 w-4" />
                </Link>
                <Link
                  href="/platform#modules"
                  className="inline-flex items-center justify-center gap-2 rounded-xl border border-[#D7DFEA] bg-white px-5 py-3 text-sm font-semibold text-[#15202B] transition-colors hover:border-[#0056F9] hover:text-[#0056F9]"
                >
                  See platform context
                </Link>
              </div>

              <div className="mt-8 flex flex-wrap gap-2.5">
                {feature.capabilityHighlights.map((chip) => (
                  <span
                    key={chip}
                    className="rounded-full border border-[#D7DFEA] bg-[#F9FAFF] px-3.5 py-2 text-[11px] font-semibold uppercase tracking-[0.16em] text-[#4B5563]"
                  >
                    {chip}
                  </span>
                ))}
              </div>
            </div>

            <div className="relative">
              <div className="absolute -right-8 top-8 hidden h-28 w-28 rounded-full bg-[#0056F9]/12 blur-[60px] lg:block" />
              <div className="absolute left-8 top-0 hidden h-24 w-24 rounded-full bg-[#6D4AFF]/12 blur-[60px] lg:block" />

              <div className="overflow-hidden rounded-[30px] border border-black/8 bg-[linear-gradient(180deg,#ffffff_0%,#f4f7ff_100%)] p-4 shadow-[0_24px_70px_rgba(15,23,42,0.12)]">
                <div className="overflow-hidden rounded-[22px] border border-black/8 bg-[#08101D] shadow-[0_16px_40px_rgba(15,23,42,0.08)]">
                  <Image
                    src="/assets/home/audit-ledger-panel.svg"
                    alt="UMAI audit ledger and evidence panel"
                    width={1400}
                    height={980}
                    className="h-auto w-full"
                    priority
                  />
                </div>

                <div className="mt-4 rounded-[22px] border border-[#D7E5FF] bg-white px-5 py-4">
                  <p className="text-[10px] font-semibold uppercase tracking-[0.18em] text-[#0E68BC]">
                    Audit surface
                  </p>
                  <p className="mt-2 text-sm leading-relaxed text-[#4B5563]">
                    Monitor events, inspect the hash-linked chain, and export
                    regime-ready evidence from the same operator surface.
                  </p>
                </div>
              </div>
            </div>
          </Container>
        </section>

        <section className="bg-[#F9FAFF] py-16 md:py-20">
          <Container>
            <div className="max-w-2xl">
              <p className="text-[11px] font-semibold uppercase tracking-[0.22em] text-[#0E68BC]">
                Core value
              </p>
              <h2 className="mt-4 text-[34px] font-black leading-[1.04] tracking-[-0.04em] text-[#15202B] md:text-[46px]">
                Audit, ledger, and evidence designed as one workflow.
              </h2>
            </div>

            <div className="mt-10 grid gap-4 md:grid-cols-3">
              {FEATURE_PILLARS.map((item) => {
                const Icon = item.icon;

                return (
                  <div
                    key={item.title}
                    className="rounded-[24px] border border-black/8 bg-white p-6 shadow-[0_16px_36px_rgba(21,32,43,0.05)]"
                  >
                    <div className="flex h-11 w-11 items-center justify-center rounded-[14px] bg-[#EDF4FF] text-[#0056F9]">
                      <Icon className="h-5 w-5" />
                    </div>
                    <h3 className="mt-5 text-[1.15rem] font-bold leading-snug text-[#15202B]">
                      {item.title}
                    </h3>
                    <p className="mt-3 text-sm leading-relaxed text-[#4B5563]">
                      {item.body}
                    </p>
                  </div>
                );
              })}
            </div>
          </Container>
        </section>

        <section className="relative overflow-hidden bg-[#08101D] py-16 text-white md:py-20">
          <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(circle_at_18%_18%,rgba(0,86,249,0.16),transparent_24%),radial-gradient(circle_at_82%_82%,rgba(109,74,255,0.14),transparent_28%)]" />

          <Container className="relative grid gap-12 lg:grid-cols-[minmax(0,0.84fr)_minmax(0,1.16fr)] lg:items-center">
            <div className="max-w-[34rem]">
              <p className="text-[11px] font-semibold uppercase tracking-[0.18em] text-[#bfd3ff]">
                Evidence chain
              </p>
              <h2 className="mt-4 text-[2.2rem] font-black leading-tight tracking-[-0.04em] text-white md:text-[3rem]">
                From prompt to ledger write, the event trail stays intact.
              </h2>
              <p className="mt-4 text-base leading-relaxed text-white/62 md:text-lg">
                UMAI keeps prompts, policy checks, model phases, operator actions,
                and final outcomes in one reconstructable chain so audit work does
                not start from scattered logs.
              </p>

              <div className="mt-8 grid gap-3">
                {REGIME_CARDS.map((item) => (
                  <div
                    key={item.label}
                    className="rounded-[22px] border border-white/10 bg-white/[0.04] p-5 backdrop-blur-sm"
                  >
                    <p className="text-[10px] font-semibold uppercase tracking-[0.18em] text-[#8FB3FF]">
                      {item.label}
                    </p>
                    <p className="mt-2 text-sm leading-relaxed text-white/68">
                      {item.body}
                    </p>
                  </div>
                ))}
              </div>
            </div>

            <div className="overflow-hidden rounded-[30px] border border-white/10 bg-white/[0.04] p-4 shadow-[0_20px_60px_rgba(0,0,0,0.28)]">
              <Image
                src="/assets/home/audit-evidence.svg"
                alt="Audit chain from prompt receipt to ledger write"
                width={1200}
                height={900}
                className="h-auto w-full rounded-[22px]"
              />
            </div>
          </Container>
        </section>

        <section className="bg-white py-16 md:py-20">
          <Container>
            <div className="grid gap-10 lg:grid-cols-[minmax(0,0.72fr)_minmax(0,1.28fr)] lg:items-start">
              <div className="max-w-[28rem]">
                <p className="text-[11px] font-semibold uppercase tracking-[0.22em] text-[#0E68BC]">
                  What gets captured
                </p>
                <h2 className="mt-4 text-[34px] font-black leading-[1.04] tracking-[-0.04em] text-[#15202B] md:text-[46px]">
                  Evidence quality depends on what stays attached to the event.
                </h2>
                <p className="mt-5 text-base leading-relaxed text-[#4B5563]">
                  The page is not just a log viewer. It is the control record for
                  how a governed decision happened and how that decision can be
                  reviewed later.
                </p>
              </div>

              <div className="grid gap-4 md:grid-cols-2">
                {CAPTURE_CARDS.map((item) => (
                  <div
                    key={item.title}
                    className="rounded-[24px] border border-black/8 bg-[#F9FAFF] p-6"
                  >
                    <div className="flex h-10 w-10 items-center justify-center rounded-[14px] bg-white text-[#0056F9] shadow-[0_10px_24px_rgba(0,86,249,0.08)]">
                      <Search className="h-4 w-4" />
                    </div>
                    <h3 className="mt-5 text-[1.08rem] font-bold leading-snug text-[#15202B]">
                      {item.title}
                    </h3>
                    <p className="mt-3 text-sm leading-relaxed text-[#4B5563]">
                      {item.body}
                    </p>
                  </div>
                ))}
              </div>
            </div>

            <div className="mt-14">
              <div className="flex flex-col gap-4 md:flex-row md:items-end md:justify-between">
                <div>
                  <p className="text-[11px] font-semibold uppercase tracking-[0.22em] text-[#0E68BC]">
                    Related features
                  </p>
                  <h2 className="mt-4 text-[30px] font-black leading-[1.04] tracking-[-0.04em] text-[#15202B] md:text-[40px]">
                    Continue through the governance system.
                  </h2>
                </div>
                <Link
                  href="/platform"
                  className="inline-flex items-center gap-2 text-sm font-semibold text-[#0056F9] transition-colors hover:text-[#0B5BEA]"
                >
                  Explore platform <ArrowRight className="h-4 w-4" />
                </Link>
              </div>

              <div className="mt-8 grid gap-4 lg:grid-cols-3">
                {relatedFeatures.map((relatedFeature) => {
                  const Icon = relatedFeature.icon;

                  return (
                    <Link
                      key={relatedFeature.slug}
                      href={relatedFeature.href}
                      className="group rounded-[24px] border border-black/8 bg-white p-6 shadow-[0_16px_36px_rgba(21,32,43,0.05)] transition-all hover:-translate-y-0.5 hover:border-[#0056F9]/24 hover:shadow-[0_20px_42px_rgba(21,32,43,0.08)]"
                    >
                      <div className="flex h-11 w-11 items-center justify-center rounded-[14px] bg-[#EDF4FF] text-[#0056F9]">
                        <Icon className="h-5 w-5" />
                      </div>
                      <h3 className="mt-5 text-[1.15rem] font-bold leading-snug text-[#15202B]">
                        {relatedFeature.title}
                      </h3>
                      <p className="mt-3 text-sm leading-relaxed text-[#4B5563]">
                        {relatedFeature.shortDescription}
                      </p>
                      <div className="mt-6 inline-flex items-center gap-2 text-sm font-semibold text-[#0056F9]">
                        View feature
                        <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-0.5" />
                      </div>
                    </Link>
                  );
                })}
              </div>
            </div>
          </Container>
        </section>

        <section className="relative overflow-hidden bg-[#15202B] py-16 text-white md:py-20">
          <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(circle_at_20%_24%,rgba(0,86,249,0.18),transparent_28%),radial-gradient(circle_at_84%_18%,rgba(109,74,255,0.12),transparent_24%)]" />

          <Container className="relative grid gap-8 lg:grid-cols-[minmax(0,1fr)_auto] lg:items-center">
            <div className="max-w-[42rem]">
              <p className="text-[11px] font-semibold uppercase tracking-[0.18em] text-[#bfd3ff]">
                Rollout
              </p>
              <h2 className="mt-4 text-[2.2rem] font-black leading-tight tracking-[-0.04em] text-white md:text-[3rem]">
                Give auditors and operators the same source of truth.
              </h2>
              <p className="mt-4 text-base leading-relaxed text-white/62 md:text-lg">
                Start with one critical AI workflow, capture the first evidence
                chain, and align security, compliance, and platform teams around
                one reviewable record.
              </p>
            </div>

            <div className="flex flex-col gap-3 sm:flex-row lg:flex-col">
              <Link
                href="/contact"
                className="inline-flex items-center justify-center gap-2 rounded-xl bg-[#0056F9] px-5 py-3 text-sm font-semibold text-white transition-all hover:-translate-y-0.5 hover:bg-[#0B5BEA]"
              >
                Start a pilot
              </Link>
              <Link
                href="/docs#monitoring-alerts"
                className="inline-flex items-center justify-center gap-2 rounded-xl border border-white/14 bg-white/[0.04] px-5 py-3 text-sm font-semibold text-white transition-colors hover:bg-white/[0.08]"
              >
                Read docs
              </Link>
            </div>
          </Container>
        </section>
      </main>

      <MarketingFooter />
    </div>
  );
}
