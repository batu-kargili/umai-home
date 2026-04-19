import type { Metadata } from "next";
import Link from "next/link";
import { ArrowRight } from "lucide-react";

import { WebinarRegistrationForm } from "@/components/events/WebinarRegistrationForm";
import { MarketingFooter } from "@/components/layout/MarketingFooter";
import { MarketingHeader } from "@/components/layout/MarketingHeader";
import { JsonLd } from "@/components/seo/JsonLd";
import { Container } from "@/components/ui/Container";
import { buildPageMetadata } from "@/lib/seo";
import {
  buildBreadcrumbJsonLd,
  buildEventJsonLd,
} from "@/lib/structured-data";

export const metadata: Metadata = buildPageMetadata({
  path: "/events/eu-ai-act-enforcement",
  title: "EU AI Act Enforcement Webinar",
  description:
    "Register for UMAI's virtual webinar on EU AI Act enforcement for regulated enterprises.",
});

const AUDIENCE = [
  "Financial Services",
  "Healthcare",
  "Insurance",
  "Public Sector",
];

const HIGHLIGHTS = [
  "Which EU AI Act requirements matter first for regulated enterprise teams",
  "How to turn policy obligations into runtime guardrails, oversight, and evidence",
  "What to prepare for audits, incident response, and vendor governance reviews",
];

const SESSIONS = [
  {
    time: "10:00 CET",
    title: "Regulatory overview",
    body: "What regulated enterprises need to operationalize now across risk controls, oversight, and documentation.",
  },
  {
    time: "10:25 CET",
    title: "Live UMAI demo",
    body: "See how runtime policy enforcement, browser governance, and evidence capture support EU AI Act readiness.",
  },
  {
    time: "10:50 CET",
    title: "Q&A for operators",
    body: "Deployment, compliance, and architecture questions for teams shipping AI in regulated environments.",
  },
];

export default function EuAiActEnforcementPage() {
  return (
    <div className="min-h-screen bg-[#0a0a0d] text-white">
      <JsonLd id="event-jsonld" data={buildEventJsonLd()} />
      <JsonLd
        id="event-breadcrumb-jsonld"
        data={buildBreadcrumbJsonLd([
          { name: "Home", path: "/" },
          {
            name: "EU AI Act Enforcement Webinar",
            path: "/events/eu-ai-act-enforcement",
          },
        ])}
      />
      <div className="border-b border-white/10 bg-landing-blue text-sm text-white">
        <Container className="flex flex-wrap items-center justify-between gap-3 py-2.5">
          <p>
            <span className="font-medium">
              [Webinar] EU AI Act Enforcement for Regulated Enterprises | 
            </span>{" "}
            <Link
              href="#register"
              className="font-bold underline underline-offset-4 hover:no-underline"
            >
              Register -&gt;
            </Link>
          </p>
          <div className="hidden items-center gap-6 sm:flex">
            <Link href="/contact" className="hover:underline text-white/85 font-semibold">
              Try UMAI →
            </Link>
          </div>
        </Container>
      </div>

      <MarketingHeader accent="blue" />

      <main>
        <section className="relative overflow-hidden border-b border-white/10">
          <div className="absolute inset-0 bg-[radial-gradient(circle_at_20%_18%,rgba(16,108,236,0.22),transparent_24%),radial-gradient(circle_at_80%_12%,rgba(147,197,253,0.08),transparent_16%)]" />
          <Container className="relative py-16 text-center md:py-20 lg:py-24">
            <p className="text-[11px] font-semibold uppercase tracking-[0.32em] text-landing-blue-light">
              Virtual Webinar
            </p>

            <div className="mx-auto mt-6 max-w-[820px]">
              <h1 className="text-[3.2rem] font-semibold leading-[0.9] tracking-[-0.08em] text-white md:text-[5rem] lg:text-[6rem]">
                EU AI Act
              </h1>
              <div className="mx-auto mt-3 inline-flex rounded-[1.2rem] border border-landing-blue-light/45 px-5 py-2.5">
                <span className="text-[1.4rem] font-semibold leading-none tracking-[-0.05em] text-white md:text-[2.4rem]">
                  ENFORCEMENT FOR REGULATED ENTERPRISES
                </span>
              </div>
            </div>

            <p className="mt-6 text-[1.5rem] font-medium italic tracking-[-0.04em] text-white md:text-[2rem]">
              How governance obligations become operational controls
            </p>
            <p className="mx-auto mt-5 max-w-[44rem] text-[1rem] leading-8 text-white/62">
              A focused live session on turning EU AI Act requirements into
              runtime guardrails, human oversight patterns, audit-ready evidence,
              and deployment decisions for regulated enterprise AI systems.
            </p>

            <div className="mt-8">
              <Link
                href="#register"
                className="inline-flex items-center gap-2 rounded-full bg-landing-blue px-6 py-4 text-sm font-semibold text-white transition-colors hover:bg-landing-blue/90"
              >
                Register now
                <ArrowRight className="h-4 w-4" />
              </Link>
            </div>

            <div className="mt-10 space-y-3">
              <p className="text-[1.4rem] font-semibold tracking-[-0.04em] text-white">
                Tuesday, June 16, 2026 | Virtual
              </p>
              <p className="text-[1rem] font-medium text-white/64">
                10:00am CET | 11:00am TRT | 1:00pm GST
              </p>
            </div>

            <div className="mt-12 flex flex-wrap items-center justify-center gap-8 text-sm font-semibold text-white/54">
              {AUDIENCE.map((item) => (
                <span key={item}>{item}</span>
              ))}
            </div>
          </Container>
        </section>

        <section className="py-14 md:py-16 lg:py-20">
          <Container>
            <div className="mx-auto max-w-[42rem] text-center">
              <p className="text-[2rem] font-semibold tracking-[-0.05em] text-white md:text-[2.4rem]">
                You&apos;re invited!
              </p>
              <p className="mt-5 text-[1rem] leading-8 text-white/62">
                Join compliance, security, and platform leaders for a live webinar
                on how regulated enterprises can operationalize EU AI Act readiness
                without slowing AI adoption.
              </p>
            </div>

            <div
              id="register"
              className="mt-12 grid overflow-hidden rounded-[2rem] border border-white/10 bg-[#f5f1ea] lg:grid-cols-[minmax(0,1.05fr)_420px]"
            >
              <div className="bg-[linear-gradient(180deg,#f5f1ea_0%,#efe7dc_100%)] p-7 text-black md:p-9">
                <p className="text-sm font-semibold uppercase tracking-[0.2em] text-black/50">
                  EU AI Act Webinar
                </p>
                <h2 className="mt-4 text-[2.2rem] font-semibold leading-tight tracking-[-0.05em] text-black md:text-[2.8rem]">
                  What you&apos;ll learn
                </h2>
                <p className="mt-4 max-w-[38rem] text-[1rem] leading-8 text-black/62">
                  A compact session for regulated enterprise teams that need to
                  translate legal and policy obligations into real operational
                  controls for AI systems.
                </p>

                <div className="mt-8 space-y-4">
                  {HIGHLIGHTS.map((item) => (
                    <div
                      key={item}
                      className="rounded-[1.3rem] border border-black/8 bg-white/65 px-5 py-4 text-sm leading-7 text-black/70"
                    >
                      {item}
                    </div>
                  ))}
                </div>

                <div className="mt-8 rounded-[1.4rem] border border-black/8 bg-[#111116] p-5 text-white">
                  <p className="text-[11px] font-semibold uppercase tracking-[0.22em] text-landing-blue-light">
                    Session Flow
                  </p>
                  <div className="mt-5 space-y-4">
                    {SESSIONS.map((session) => (
                      <div
                        key={session.time}
                        className="rounded-[1rem] border border-white/10 bg-white/[0.03] px-4 py-4"
                      >
                        <p className="text-[11px] font-semibold uppercase tracking-[0.22em] text-white/42">
                          {session.time}
                        </p>
                        <p className="mt-2 text-base font-semibold text-white">
                          {session.title}
                        </p>
                        <p className="mt-2 text-sm leading-7 text-white/58">
                          {session.body}
                        </p>
                      </div>
                    ))}
                  </div>
                </div>
              </div>

              <div className="bg-[#0d0d15] p-5 md:p-7">
                <WebinarRegistrationForm />
              </div>
            </div>
          </Container>
        </section>
      </main>

      <MarketingFooter />
    </div>
  );
}
