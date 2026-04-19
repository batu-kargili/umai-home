import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { ArrowRight, FileCheck2, Globe, ShieldCheck } from "lucide-react";

import { MarketingFooter } from "@/components/layout/MarketingFooter";
import { MarketingHeader } from "@/components/layout/MarketingHeader";
import { JsonLd } from "@/components/seo/JsonLd";
import { Container } from "@/components/ui/Container";
import { buildPageMetadata } from "@/lib/seo";
import { buildBreadcrumbJsonLd } from "@/lib/structured-data";

const EXTENSION_HIGHLIGHTS = [
  {
    title: "Managed rollout",
    body: "Deploy the extension through enterprise browser controls and keep policy coverage consistent by team, browser, or environment.",
    icon: Globe,
  },
  {
    title: "Policy in the tab",
    body: "Warn, redact, or block sensitive submissions before content leaves ChatGPT, Claude, Gemini, and similar browser AI surfaces.",
    icon: ShieldCheck,
  },
  {
    title: "Evidence in UMAI",
    body: "Send governed browser events into UMAI for monitoring, review, and audit-ready traceability alongside the rest of your AI estate.",
    icon: FileCheck2,
  },
] as const;

const EXTENSION_CHIPS = [
  "ChatGPT",
  "Claude",
  "Gemini",
  "Warn / block / redact",
  "Local policy checks",
  "Unified telemetry",
] as const;

export const metadata: Metadata = buildPageMetadata({
  path: "/browser-extension",
  title: "Browser Extension",
  description:
    "A concise overview of the UMAI Browser Extension for governed employee use of ChatGPT, Claude, Gemini, and other browser AI tools.",
});

export default function BrowserExtensionPage() {
  return (
    <div className="min-h-screen bg-white text-[#15202B]">
      <JsonLd
        id="browser-extension-breadcrumb-jsonld"
        data={buildBreadcrumbJsonLd([
          { name: "Home", path: "/" },
          { name: "Browser Extension", path: "/browser-extension" },
        ])}
      />
      <MarketingHeader accent="blue" theme="light" />

      <main>
        <section className="relative overflow-hidden border-b border-slate-200 bg-white">
          <div className="pointer-events-none absolute inset-x-0 top-0 h-[640px] bg-[radial-gradient(circle_at_78%_18%,rgba(0,86,249,0.18),transparent_24%),radial-gradient(circle_at_24%_24%,rgba(109,74,255,0.08),transparent_18%)]" />

          <Container className="relative grid gap-12 pb-16 pt-14 md:pb-20 md:pt-16 lg:grid-cols-[minmax(0,0.82fr)_minmax(0,1.18fr)] lg:items-center">
            <div className="max-w-[34rem]">
              <p className="text-sm text-[#6B7280]">
                <Link href="/" className="text-[#0E68BC] transition-colors hover:text-[#0056F9]">
                  Home
                </Link>{" "}
                / <span className="text-[#15202B]">Browser Extension</span>
              </p>

              <p className="mt-8 text-[11px] font-semibold uppercase tracking-[0.22em] text-[#0E68BC]">
                Browser-native governance
              </p>
              <h1 className="mt-4 text-[38px] font-black leading-[1.02] tracking-[-0.04em] text-[#15202B] md:text-[52px]">
                Govern public AI use
                <br />
                <span className="text-[#0056F9]">inside the browser tab.</span>
              </h1>
              <p className="mt-5 text-base leading-relaxed text-[#4B5563] md:text-lg">
                The UMAI Browser Extension gives enterprises a short path to govern
                employee use of ChatGPT, Claude, Gemini, and other browser AI tools
                without rewriting the target applications.
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
                  href="/docs#browser-extension"
                  className="inline-flex items-center justify-center gap-2 rounded-xl border border-[#D7DFEA] bg-white px-5 py-3 text-sm font-semibold text-[#15202B] transition-colors hover:border-[#0056F9] hover:text-[#0056F9]"
                >
                  Read docs
                </Link>
              </div>

              <div className="mt-8 flex flex-wrap gap-2.5">
                {EXTENSION_CHIPS.map((chip) => (
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
              <div className="absolute -right-8 top-10 hidden h-28 w-28 rounded-full bg-[#0056F9]/12 blur-[60px] lg:block" />
              <div className="absolute left-8 top-0 hidden h-24 w-24 rounded-full bg-[#6D4AFF]/12 blur-[60px] lg:block" />

              <div className="overflow-hidden rounded-[30px] border border-black/8 bg-[linear-gradient(180deg,#ffffff_0%,#f4f7ff_100%)] p-4 shadow-[0_24px_70px_rgba(15,23,42,0.12)]">
                <div className="overflow-hidden rounded-[22px] border border-black/8 bg-white shadow-[0_16px_40px_rgba(15,23,42,0.08)]">
                  <Image
                    src="/assets/home/BrowserExtentionMonitoring.png"
                    alt="UMAI browser extension monitoring view"
                    width={1905}
                    height={981}
                    className="h-auto w-full"
                    priority
                  />
                </div>

                <div className="mt-4 rounded-[22px] border border-[#D7E5FF] bg-white px-5 py-4">
                  <p className="text-[10px] font-semibold uppercase tracking-[0.18em] text-[#0E68BC]">
                    Extension signal
                  </p>
                  <p className="mt-2 text-sm leading-relaxed text-[#4B5563]">
                    Policy decisions, browser events, and review context flow back
                    into UMAI Control Center for monitoring and evidence.
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
                What teams get
              </p>
              <h2 className="mt-4 text-[34px] font-black leading-[1.04] tracking-[-0.04em] text-[#15202B] md:text-[46px]">
                A very short path from unmanaged AI use to governed behavior.
              </h2>
            </div>

            <div className="mt-10 grid gap-4 md:grid-cols-3">
              {EXTENSION_HIGHLIGHTS.map((item) => {
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

          <Container className="relative">
            <div className="grid gap-8 lg:grid-cols-[minmax(0,1fr)_auto] lg:items-center">
              <div className="max-w-[42rem]">
                <p className="text-[11px] font-semibold uppercase tracking-[0.18em] text-[#bfd3ff]">
                  Rollout
                </p>
                <h2 className="mt-4 text-[2.2rem] font-black leading-tight tracking-[-0.04em] text-white md:text-[3rem]">
                  Add browser governance without banning the tools teams already use.
                </h2>
                <p className="mt-4 text-base leading-relaxed text-white/62 md:text-lg">
                  Start with visibility, move into warn or block modes, and keep the
                  evidence tied to the same UMAI governance workflow.
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
                  href="/platform"
                  className="inline-flex items-center justify-center gap-2 rounded-xl border border-white/14 bg-white/[0.04] px-5 py-3 text-sm font-semibold text-white transition-colors hover:bg-white/[0.08]"
                >
                  See platform
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
