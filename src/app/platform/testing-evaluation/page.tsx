import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { ArrowLeft, ArrowRight, BrainCircuit, FileCheck2, FlaskConical } from "lucide-react";

import { MarketingFooter } from "@/components/layout/MarketingFooter";
import { MarketingHeader } from "@/components/layout/MarketingHeader";
import { JsonLd } from "@/components/seo/JsonLd";
import { Container } from "@/components/ui/Container";
import { buildPageMetadata } from "@/lib/seo";
import { buildBreadcrumbJsonLd } from "@/lib/structured-data";

export const metadata: Metadata = buildPageMetadata({
  path: "/platform/testing-evaluation",
  title: "Testing & Evaluation",
  description:
    "Run datasets, simulations, and red-team checks to validate guardrails before enterprise rollout.",
});

const validationCards = [
  {
    title: "Datasets",
    body: "Run repeatable test cases against policy logic and model behavior.",
    icon: BrainCircuit,
  },
  {
    title: "Simulations",
    body: "Model real usage flows before shipping enforcement into production paths.",
    icon: FlaskConical,
  },
  {
    title: "Evidence",
    body: "Keep test outputs tied to decisions teams can review and approve.",
    icon: FileCheck2,
  },
];

const complianceLogos = [
  {
    label: "KVKK",
    src: "/assets/kvkk-logo.png",
    width: 1486,
    height: 400,
  },
  {
    label: "GDPR",
    src: "/assets/gdpr-logo.png",
    width: 900,
    height: 500,
  },
  {
    label: "EU AI Act",
    src: "/assets/EU_AI_Act_logo.png",
    width: 846,
    height: 215,
  },
];

export default function TestingEvaluationPage() {
  return (
    <div className="min-h-screen bg-white text-[#15202B]">
      <JsonLd
        id="testing-evaluation-breadcrumb-jsonld"
        data={buildBreadcrumbJsonLd([
          { name: "Home", path: "/" },
          { name: "Platform", path: "/platform" },
          {
            name: "Testing & Evaluation",
            path: "/platform/testing-evaluation",
          },
        ])}
      />
      <MarketingHeader accent="blue" theme="light" />

      <main>
        <section className="relative overflow-hidden border-b border-slate-200 bg-[#08101D] text-white">
          <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(circle_at_18%_18%,rgba(0,86,249,0.18),transparent_24%),radial-gradient(circle_at_82%_18%,rgba(109,74,255,0.16),transparent_22%),linear-gradient(90deg,#10151f_0%,#08101D_42%,#0B2D7A_100%)]" />
          <div className="pointer-events-none absolute inset-y-0 left-[58%] hidden w-[180px] -translate-x-1/2 opacity-80 lg:block" style={{ backgroundImage: "repeating-linear-gradient(90deg, rgba(18,28,51,0.12) 0px, rgba(18,28,51,0.12) 14px, rgba(175,84,62,0.22) 14px, rgba(175,84,62,0.22) 17px, rgba(53,62,120,0.18) 17px, rgba(53,62,120,0.18) 29px, transparent 29px, transparent 42px)" }} />

          <Container className="relative grid gap-12 py-16 lg:grid-cols-[minmax(0,0.82fr)_minmax(0,1.18fr)] lg:items-center lg:py-20">
            <div className="max-w-[34rem]">
              <Link
                href="/platform"
                className="inline-flex items-center gap-2 text-sm font-medium text-white/64 transition-colors hover:text-white"
              >
                <ArrowLeft className="h-4 w-4" />
                Back to Platform
              </Link>

              <p className="mt-8 text-[11px] font-semibold uppercase tracking-[0.22em] text-[#bfd3ff]">
                Testing &amp; Evaluation
              </p>
              <h1 className="mt-4 text-[3rem] font-light leading-[0.94] tracking-[-0.05em] text-white md:text-[4.25rem]">
                Validate guardrails before rollout.
              </h1>
              <p className="mt-6 text-[1.02rem] leading-8 text-white/72 md:text-[1.08rem]">
                Run datasets, simulations, and red-team style checks to measure how
                policies perform before they touch live enterprise traffic.
              </p>

              <div className="mt-8 flex flex-wrap gap-3">
                <Link
                  href="/contact"
                  className="inline-flex items-center justify-center gap-2 rounded-xl bg-[#0056F9] px-5 py-3 text-sm font-semibold text-white transition-all hover:-translate-y-0.5 hover:bg-[#0B5BEA]"
                >
                  Book Demo
                  <ArrowRight className="h-4 w-4" />
                </Link>
                <Link
                  href="/platform"
                  className="inline-flex items-center justify-center gap-2 rounded-xl border border-white/14 bg-white/[0.04] px-5 py-3 text-sm font-semibold text-white transition-colors hover:bg-white/[0.08]"
                >
                  See Platform
                </Link>
              </div>
            </div>

            <div className="rounded-[4px] border border-white/10 bg-white/[0.05] p-3 shadow-[0_24px_70px_rgba(0,0,0,0.28)] backdrop-blur-sm">
              <div className="overflow-hidden rounded-[4px] border border-white/10 bg-[#0f1724]">
                <Image
                  src="/assets/home/evaluation_view.png"
                  alt="UMAI testing and evaluation interface"
                  width={1536}
                  height={1024}
                  className="h-auto w-full"
                  priority
                />
              </div>
            </div>
          </Container>
        </section>

        <section className="bg-white py-16 md:py-20">
          <Container>
            <div className="grid gap-10 lg:grid-cols-[minmax(0,0.9fr)_minmax(0,1.1fr)] lg:items-start">
              <div>
                <p className="text-[11px] font-semibold uppercase tracking-[0.22em] text-[#0E68BC]">
                  What it does
                </p>
                <h2 className="mt-4 text-[2.4rem] font-black leading-[1.02] tracking-[-0.04em] text-[#15202B] md:text-[3.4rem]">
                  Test policy behavior before it becomes a production assumption.
                </h2>
              </div>

              <div>
                <p className="text-base leading-relaxed text-[#4B5563] md:text-lg">
                  UMAI Testing &amp; Evaluation helps teams pressure-test prompts,
                  outputs, and guardrail decisions with structured datasets,
                  simulations, and attack-style checks. It keeps tuning fast and
                  rollout decisions grounded in evidence.
                </p>
              </div>
            </div>

            <div className="mt-12 grid gap-4 md:grid-cols-3">
              {validationCards.map((card) => {
                const Icon = card.icon;

                return (
                  <div
                    key={card.title}
                    className="rounded-[4px] border border-black/8 bg-[#F9FAFF] p-6"
                  >
                    <div className="flex h-11 w-11 items-center justify-center rounded-[4px] bg-[#EDF4FF] text-[#0056F9]">
                      <Icon className="h-5 w-5" />
                    </div>
                    <h3 className="mt-5 text-[1.1rem] font-semibold text-[#15202B]">
                      {card.title}
                    </h3>
                    <p className="mt-3 text-sm leading-relaxed text-[#4B5563]">
                      {card.body}
                    </p>
                  </div>
                );
              })}
            </div>

            <div className="mt-12 grid gap-5 lg:grid-cols-[minmax(0,1.05fr)_minmax(0,0.95fr)]">
              <div className="rounded-[4px] border border-black/8 bg-white p-6">
                <p className="text-[11px] font-semibold uppercase tracking-[0.18em] text-[#0E68BC]">
                  Evaluate for
                </p>
                <h3 className="mt-4 text-[1.45rem] font-semibold leading-tight text-[#15202B]">
                  KVKK, GDPR, and EU AI Act readiness.
                </h3>
                <p className="mt-3 text-sm leading-relaxed text-[#4B5563]">
                  Run policy and scenario checks against privacy, governance, and
                  evidence expectations for regulated AI programs.
                </p>

                <div className="mt-6 grid gap-3 sm:grid-cols-3">
                  {complianceLogos.map((item) => (
                    <div
                      key={item.label}
                      className="flex min-h-[96px] items-center justify-center rounded-[4px] border border-black/8 bg-[#F9FAFF] px-4 py-4"
                    >
                      <Image
                        src={item.src}
                        alt={`${item.label} logo`}
                        width={item.width}
                        height={item.height}
                        className="h-auto max-h-12 w-auto"
                      />
                    </div>
                  ))}
                </div>
              </div>

              <div className="rounded-[4px] border border-black/8 bg-[#F9FAFF] p-6">
                <p className="text-[11px] font-semibold uppercase tracking-[0.18em] text-[#0E68BC]">
                  Security coverage
                </p>
                <h3 className="mt-4 text-[1.45rem] font-semibold leading-tight text-[#15202B]">
                  Test against OWASP Top 10 style AI risk paths.
                </h3>
                <p className="mt-3 text-sm leading-relaxed text-[#4B5563]">
                  Pressure-test prompt injection, sensitive data exposure, unsafe
                  outputs, and other security failure modes with structured
                  evaluation scenarios.
                </p>

                <div className="mt-6 flex min-h-[96px] items-center justify-center rounded-[4px] border border-black/8 bg-white px-4 py-4">
                  <Image
                    src="/assets/owasp_logo.png"
                    alt="OWASP logo"
                    width={1380}
                    height={465}
                    className="h-auto max-h-12 w-auto"
                  />
                </div>
              </div>
            </div>
          </Container>
        </section>

        <section className="bg-[#15202B] py-16 text-white md:py-18">
          <Container>
            <div className="grid gap-8 lg:grid-cols-[minmax(0,1fr)_auto] lg:items-center">
              <div className="max-w-[38rem]">
                <p className="text-[11px] font-semibold uppercase tracking-[0.18em] text-[#bfd3ff]">
                  Next step
                </p>
                <h2 className="mt-4 text-[2rem] font-black leading-tight tracking-[-0.04em] text-white md:text-[2.7rem]">
                  Start with one critical workflow and one evaluation pack.
                </h2>
              </div>

              <div className="flex flex-col gap-3 sm:flex-row lg:flex-col">
                <Link
                  href="/contact"
                  className="inline-flex items-center justify-center gap-2 rounded-xl bg-[#0056F9] px-5 py-3 text-sm font-semibold text-white transition-all hover:-translate-y-0.5 hover:bg-[#0B5BEA]"
                >
                  Request a PoC
                </Link>
                <Link
                  href="/platform"
                  className="inline-flex items-center justify-center gap-2 rounded-xl border border-white/14 bg-white/[0.04] px-5 py-3 text-sm font-semibold text-white transition-colors hover:bg-white/[0.08]"
                >
                  Back to Platform
                </Link>
              </div>
            </div>
          </Container>
        </section>
      </main>

      <MarketingFooter />
    </div>
  );
}
