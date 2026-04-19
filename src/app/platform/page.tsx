import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import type { LucideIcon } from "lucide-react";
import {
  ArrowRight,
  BellRing,
  BrainCircuit,
  Database,
  FileCheck2,
  GitBranch,
  LayoutDashboard,
  LayoutTemplate,
  Monitor,
  PlugZap,
  Server,
  ShieldCheck,
  SlidersHorizontal,
  Sparkles,
  Workflow,
} from "lucide-react";

import { MarketingFooter } from "@/components/layout/MarketingFooter";
import { MarketingHeader } from "@/components/layout/MarketingHeader";
import { JsonLd } from "@/components/seo/JsonLd";
import { Container } from "@/components/ui/Container";
import { buildPageMetadata } from "@/lib/seo";
import { buildBreadcrumbJsonLd } from "@/lib/structured-data";

export const metadata: Metadata = buildPageMetadata({
  path: "/platform",
  title: "Platform",
  description:
    "Customer-hosted AI governance and guardrail platform for apps, agents, and browser AI usage.",
});

type FocusKey =
  | "control-center"
  | "testing-evaluation"
  | "monitoring-ledger"
  | "browser-extension"
  | "architecture";

type PlatformModule = {
  id: Exclude<FocusKey, "architecture">;
  title: string;
  body: string;
  href: string;
  cta: string;
  icon: LucideIcon;
  bullets: string[];
};

const platformOverviewScreens = [
  {
    title: "UMAI Control Center",
    body: "Guardrail design, policy management, and release workflows.",
    src: "/assets/home/Policies.png",
    width: 1901,
    height: 1008,
  },
  {
    title: "Testing & Evaluation",
    body: "Datasets, simulations, and validation runs before rollout.",
    src: "/assets/home/Evaluation.png",
    width: 1897,
    height: 1015,
  },
  {
    title: "Monitoring & Audit",
    body: "Operational alerts, policy outcomes, and review context.",
    src: "/assets/home/RealTimeAlerts.png",
    width: 1910,
    height: 983,
  },
  {
    title: "Browser Governance",
    body: "Govern ChatGPT, Gemini, and Claude usage in managed browsers.",
    src: "/assets/home/BrowserExtentionMonitoring.png",
    width: 1905,
    height: 981,
  },
];

const platformModules: PlatformModule[] = [
  {
    id: "control-center",
    title: "UMAI Control Center",
    body: "Build policies, manage guardrails, publish versions, and control projects and environments from one operational surface.",
    href: "#control-center",
    cta: "See the control layer",
    icon: LayoutDashboard,
    bullets: ["Policy builder", "Versioning", "Projects and environments"],
  },
  {
    id: "testing-evaluation",
    title: "Testing & Evaluation",
    body: "Run datasets, simulations, red-team style checks, and performance validation before policies hit live traffic.",
    href: "/platform/testing-evaluation",
    cta: "See evaluation flow",
    icon: BrainCircuit,
    bullets: ["Regression suites", "Red-team checks", "Performance validation"],
  },
  {
    id: "monitoring-ledger",
    title: "Monitoring & Audit Ledger",
    body: "Track alerts, decisions, approval workflows, tamper-evident records, and evidence packs across governed AI operations.",
    href: "/features/audit-ledger-evidence",
    cta: "Explore audit ledger",
    icon: FileCheck2,
    bullets: ["Alerts", "Evidence packs", "Approval workflows"],
  },
  {
    id: "browser-extension",
    title: "Browser Extension",
    body: "Govern ChatGPT, Gemini, and Claude usage directly in the browser without rewriting the target AI applications.",
    href: "/browser-extension",
    cta: "See browser extension",
    icon: Monitor,
    bullets: ["ChatGPT / Gemini / Claude", "Local checks", "Browser telemetry"],
  },
];

const platformSteps = [
  {
    step: "01",
    title: "Design policies",
    body: "Define the guardrails, approval rules, and governance thresholds that matter for your environment.",
  },
  {
    step: "02",
    title: "Publish guardrails",
    body: "Version and release approved policy packs into the right projects, teams, and environments.",
  },
  {
    step: "03",
    title: "Enforce everywhere",
    body: "Apply controls across AI apps, agents, APIs, and browser AI usage from one platform layer.",
  },
  {
    step: "04",
    title: "Monitor and prove",
    body: "Track outcomes, run evaluations, and export evidence for security, audit, and compliance review.",
  },
];

const capabilityItems = [
  {
    title: "Policy builder",
    icon: SlidersHorizontal,
  },
  {
    title: "Guardrail templates",
    icon: LayoutTemplate,
  },
  {
    title: "AI-assisted generation",
    icon: Sparkles,
  },
  {
    title: "Versioning and publishing",
    icon: GitBranch,
  },
  {
    title: "Alerting",
    icon: BellRing,
  },
  {
    title: "Evidence packs",
    icon: FileCheck2,
  },
  {
    title: "Approval workflows",
    icon: Workflow,
  },
  {
    title: "API-based enforcement",
    icon: PlugZap,
  },
  {
    title: "Browser telemetry",
    icon: Monitor,
  },
  {
    title: "Evaluation datasets",
    icon: Database,
  },
];

const deploymentItems = [
  "Customer-hosted deployment",
  "On-prem or controlled environment support",
  "Internal registry support",
  "LDAP-backed access",
  "OpenAI-compatible inference support",
  "Enterprise infrastructure compatibility",
];

const securityItems = [
  "Tamper-evident audit ledger for governed AI decisions",
  "Evidence packs for internal and external review",
  "Governance workflows with approval and review paths",
  "Traceability across prompts, outputs, tool actions, and operator events",
];

const integrationItems = [
  "APIs",
  "AI apps",
  "AI agents",
  "Browser extension rollout",
  "OpenAI Agents SDK, LangChain, Claude, and other implementation guides",
];

const featureToFocus: Record<string, FocusKey> = {
  "ai-agent-tool-security": "control-center",
  "audit-ledger-evidence": "monitoring-ledger",
  "browser-ai-governance": "browser-extension",
  "compliance-human-oversight": "monitoring-ledger",
  "real-time-guardrails": "control-center",
  "sovereign-deployment": "architecture",
};

function PlatformHeroBackdrop() {
  return (
    <>
      <div className="pointer-events-none absolute inset-0 bg-[linear-gradient(90deg,#161616_0%,#12131a_46%,#07246f_100%)]" />
      <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(circle_at_74%_50%,rgba(0,86,249,0.46),transparent_26%),linear-gradient(180deg,rgba(255,255,255,0.02),rgba(255,255,255,0))]" />
      <div
        className="pointer-events-none absolute inset-y-0 left-[56%] hidden w-[240px] -translate-x-1/2 opacity-90 lg:block"
        style={{
          backgroundImage:
            "repeating-linear-gradient(90deg, rgba(33,18,57,0.05) 0px, rgba(33,18,57,0.05) 14px, rgba(203,94,57,0.24) 14px, rgba(203,94,57,0.24) 17px, rgba(66,43,103,0.2) 17px, rgba(66,43,103,0.2) 29px, transparent 29px, transparent 42px)",
        }}
      />
      <div className="pointer-events-none absolute left-[58%] top-0 hidden h-full w-px bg-white/16 lg:block" />
    </>
  );
}

function SectionHeading({
  eyebrow,
  title,
  body,
  tone = "light",
  align = "left",
}: {
  eyebrow: string;
  title: string;
  body?: string;
  tone?: "light" | "dark";
  align?: "left" | "center";
}) {
  const isDark = tone === "dark";
  const isCenter = align === "center";

  return (
    <div className={isCenter ? "mx-auto max-w-3xl text-center" : "max-w-3xl"}>
      <p
        className={`text-[11px] font-semibold uppercase tracking-[0.22em] ${
          isDark ? "text-[#bfd3ff]" : "text-[#0E68BC]"
        }`}
      >
        {eyebrow}
      </p>
      <h2
        className={`mt-4 font-black leading-[1.04] tracking-[-0.04em] ${
          isDark ? "text-white" : "text-[#15202B]"
        } ${isCenter ? "text-[40px] md:text-[56px]" : "text-[38px] md:text-[52px]"}`}
      >
        {title}
      </h2>
      {body ? (
        <p
          className={`mt-5 text-base leading-relaxed md:text-lg ${
            isDark ? "text-white/60" : "text-[#4B5563]"
          }`}
        >
          {body}
        </p>
      ) : null}
    </div>
  );
}

export default async function PlatformPage({
  searchParams,
}: {
  searchParams?: Promise<{ feature?: string | string[] }>;
}) {
  const resolvedSearchParams = searchParams
    ? await searchParams
    : undefined;
  const featureParam = Array.isArray(resolvedSearchParams?.feature)
    ? resolvedSearchParams.feature[0]
    : resolvedSearchParams?.feature;
  const activeFocus = featureParam ? featureToFocus[featureParam] : undefined;

  return (
    <div className="min-h-screen bg-white text-[#15202B]">
      <JsonLd
        id="platform-breadcrumb-jsonld"
        data={buildBreadcrumbJsonLd([
          { name: "Home", path: "/" },
          { name: "Platform", path: "/platform" },
        ])}
      />
      <MarketingHeader accent="blue" theme="light" />

      <main>
        <section
          id="platform"
          className="relative overflow-hidden border-b border-white/10 text-white scroll-mt-28"
        >
          <PlatformHeroBackdrop />

          <Container className="relative grid min-h-[520px] items-center gap-12 py-14 lg:grid-cols-[minmax(0,0.88fr)_minmax(0,1.12fr)] lg:py-16">
            <div className="max-w-[38rem]">
              <p className="text-sm text-white/72">
                <Link href="/" className="text-[#8fb3ff] transition-colors hover:text-white">
                  Home
                </Link>{" "}
                /{" "}
                <span className="text-white">Platform</span>
              </p>

              <h1 className="mt-8 text-[3.2rem] font-light leading-[0.94] tracking-[-0.05em] text-white md:text-[4.5rem] lg:text-[5.1rem]">
                UMAI Platform
              </h1>
              <p className="mt-7 max-w-[34rem] text-[1.05rem] leading-8 text-white/74 md:text-[1.14rem]">
                Customer-hosted AI governance and guardrail platform for apps,
                agents, and browser AI usage.
              </p>

              <div className="mt-8 flex flex-wrap gap-3">
                <Link
                  href="/contact"
                  className="inline-flex items-center justify-center gap-2 rounded-xl bg-[#0056F9] px-5 py-3 text-sm font-semibold text-white shadow-[0_12px_28px_rgba(0,86,249,0.22)] transition-all hover:-translate-y-0.5 hover:bg-[#0B5BEA]"
                >
                  Book Demo
                  <ArrowRight className="h-4 w-4" />
                </Link>
                <Link
                  href="#architecture"
                  className="inline-flex items-center justify-center gap-2 rounded-xl border border-white/18 bg-white/[0.04] px-5 py-3 text-sm font-semibold text-white transition-colors hover:bg-white/[0.08]"
                >
                  See Architecture
                </Link>
              </div>

              <div className="mt-8 flex flex-wrap gap-3">
                {["Customer-hosted", "Apps, agents, and browser AI", "Evidence-first governance"].map(
                  (item) => (
                    <span
                      key={item}
                      className="rounded-full border border-white/12 bg-white/[0.04] px-4 py-2 text-[11px] font-semibold uppercase tracking-[0.18em] text-white/72"
                    >
                      {item}
                    </span>
                  ),
                )}
              </div>
            </div>

            <div className="hidden lg:block" />
          </Container>
        </section>

        <section className="bg-white py-20 md:py-24">
          <Container>
            <div className="grid gap-12 lg:grid-cols-[minmax(0,0.78fr)_minmax(0,1.22fr)] lg:items-start">
              <div>
                <p className="text-[11px] font-semibold uppercase tracking-[0.22em] text-[#0E68BC]">
                  Platform overview
                </p>
                <h2 className="mt-4 text-[44px] font-black leading-[1.02] tracking-[-0.04em] text-[#3D5AFE] md:text-[64px]">
                  One control plane for governed AI.
                </h2>
              </div>

              <div className="space-y-6">
                <p className="text-base leading-relaxed text-[#4B5563] md:text-lg">
                  UMAI is the umbrella platform for guardrail design, runtime
                  enforcement, testing and evaluation, monitoring and audit, and
                  browser-based AI governance. It connects policy authoring,
                  runtime control, and evidence generation inside one enterprise
                  operating layer.
                </p>
                <p className="text-sm leading-relaxed text-[#6B7280]">
                  The platform brings these surfaces into one operating model so
                  design, enforcement, evaluation, and evidence stay connected.
                </p>
              </div>
            </div>

            <div className="mt-12 grid gap-4 md:grid-cols-2">
              {platformOverviewScreens.map((screen) => (
                <div
                  key={screen.title}
                  className="overflow-hidden rounded-[4px] border border-black/8 bg-white"
                >
                  <div className="border-b border-black/8 px-5 py-4">
                    <p className="text-[11px] font-semibold uppercase tracking-[0.18em] text-[#0E68BC]">
                      {screen.title}
                    </p>
                    <p className="mt-2 text-sm leading-relaxed text-[#4B5563]">
                      {screen.body}
                    </p>
                  </div>
                  <div className="bg-[#F7F9FC] p-3">
                    <div className="overflow-hidden rounded-[4px] border border-black/8 bg-white shadow-[0_14px_30px_rgba(15,23,42,0.06)]">
                      <Image
                        src={screen.src}
                        alt={screen.title}
                        width={screen.width}
                        height={screen.height}
                        className="h-auto w-full"
                      />
                    </div>
                  </div>
                </div>
              ))}
            </div>

            <div className="mt-10 grid gap-4 lg:grid-cols-2">
              <div
                id="control-center"
                className={`scroll-mt-28 rounded-[4px] border p-7 transition-colors ${
                  activeFocus === "control-center"
                    ? "border-[#0056F9]/30 bg-[#F4F8FF] shadow-[0_16px_40px_rgba(0,86,249,0.10)]"
                    : "border-black/8 bg-white"
                }`}
              >
                <p className="text-[11px] font-semibold uppercase tracking-[0.18em] text-[#0E68BC]">
                  UMAI Control Center
                </p>
                <h3 className="mt-4 text-[1.6rem] font-bold leading-tight text-[#15202B]">
                  Design, version, and publish guardrails from one control layer.
                </h3>
                <p className="mt-4 text-base leading-relaxed text-[#4B5563]">
                  The Control Center is where teams build policies, manage
                  guardrails, publish approved versions, and separate projects
                  and environments without fragmenting governance operations.
                </p>
              </div>

              <div
                id="testing-evaluation"
                className={`scroll-mt-28 rounded-[4px] border p-7 transition-colors ${
                  activeFocus === "testing-evaluation"
                    ? "border-[#0056F9]/30 bg-[#F4F8FF] shadow-[0_16px_40px_rgba(0,86,249,0.10)]"
                    : "border-black/8 bg-white"
                }`}
              >
                <p className="text-[11px] font-semibold uppercase tracking-[0.18em] text-[#0E68BC]">
                  Testing &amp; Evaluation
                </p>
                <h3 className="mt-4 text-[1.6rem] font-bold leading-tight text-[#15202B]">
                  Validate policies before they become production assumptions.
                </h3>
                <p className="mt-4 text-base leading-relaxed text-[#4B5563]">
                  Run datasets, simulations, red-team style checks, and
                  performance validation so teams can measure guardrail behavior
                  before live rollout and keep tuning it after deployment.
                </p>
              </div>
            </div>
          </Container>
        </section>

        <section id="modules" className="bg-[#F9FAFF] py-20 md:py-24">
          <Container>
            <SectionHeading
              eyebrow="Core platform modules"
              title="The main platform components."
              body="UMAI Platform is the parent product story. Each module handles a different part of governed AI deployment, then works together as one system."
              align="center"
            />

            <div className="mt-14 grid gap-4 lg:grid-cols-2 xl:grid-cols-4">
              {platformModules.map((module) => {
                const Icon = module.icon;
                const isActive = activeFocus === module.id;

                return (
                  <Link
                    key={module.title}
                    href={module.href}
                    className={`group flex h-full flex-col rounded-[4px] border p-6 transition-all ${
                      isActive
                        ? "border-[#0056F9]/32 bg-white shadow-[0_18px_42px_rgba(0,86,249,0.12)]"
                        : "border-black/8 bg-white hover:border-[#0056F9]/24 hover:shadow-[0_18px_42px_rgba(21,32,43,0.08)]"
                    }`}
                  >
                    <div className="flex h-11 w-11 items-center justify-center rounded-[4px] bg-[#EDF4FF] text-[#0056F9]">
                      <Icon className="h-5 w-5" />
                    </div>

                    <h3 className="mt-5 text-[1.2rem] font-bold leading-snug text-[#15202B]">
                      {module.title}
                    </h3>
                    <p className="mt-3 text-sm leading-relaxed text-[#4B5563]">
                      {module.body}
                    </p>

                    <div className="mt-5 flex flex-wrap gap-2">
                      {module.bullets.map((bullet) => (
                        <span
                          key={bullet}
                          className="rounded-full border border-black/8 bg-[#F9FAFF] px-3 py-1.5 text-[10px] font-semibold uppercase tracking-[0.16em] text-[#4B5563]"
                        >
                          {bullet}
                        </span>
                      ))}
                    </div>

                    <span className="mt-auto inline-flex items-center gap-2 pt-6 text-sm font-semibold text-[#0056F9]">
                      {module.cta}
                      <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-0.5" />
                    </span>
                  </Link>
                );
              })}
            </div>
          </Container>
        </section>

        <section className="relative overflow-hidden bg-[#0A0F1A] py-20 text-white md:py-24">
          <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(circle_at_18%_18%,rgba(0,86,249,0.16),transparent_24%),radial-gradient(circle_at_82%_82%,rgba(109,74,255,0.14),transparent_26%)]" />
          <div className="pointer-events-none absolute inset-0 opacity-[0.08] umai-grid-overlay" />

          <Container className="relative">
            <SectionHeading
              eyebrow="How the platform works"
              title="One governed workflow from policy design to evidence."
              body="The platform keeps policy, enforcement, evaluation, and evidence connected instead of scattering them across separate tools."
              tone="dark"
              align="center"
            />

            <div className="mt-14 grid gap-4 md:grid-cols-2 xl:grid-cols-4">
              {platformSteps.map((item) => (
                <div
                  key={item.step}
                  className="relative rounded-[4px] border border-white/10 bg-white/[0.04] p-6 backdrop-blur-sm"
                >
                  <p className="text-[11px] font-semibold uppercase tracking-[0.18em] text-[#8FB3FF]">
                    Step {item.step}
                  </p>
                  <h3 className="mt-4 text-[1.2rem] font-bold leading-snug text-white">
                    {item.title}
                  </h3>
                  <p className="mt-3 text-sm leading-relaxed text-white/62">
                    {item.body}
                  </p>
                </div>
              ))}
            </div>
          </Container>
        </section>

        <section className="bg-white py-20 md:py-24">
          <Container>
            <div className="grid gap-12 lg:grid-cols-[minmax(0,0.95fr)_minmax(0,0.88fr)] lg:items-start">
              <div>
                <p className="text-[11px] font-semibold uppercase tracking-[0.22em] text-[#0E68BC]">
                  Key capabilities
                </p>
                <h2 className="mt-4 text-[44px] font-light leading-[1.02] tracking-[-0.04em] text-[#15202B] md:text-[64px]">
                  Platform capabilities
                </h2>
              </div>

              <div>
                <p className="text-base leading-relaxed text-[#4B5563] md:text-lg">
                  UMAI keeps the platform surface concise, but covers the policy,
                  workflow, telemetry, and evidence depth enterprise AI teams need
                  to deploy governed systems cleanly.
                </p>
              </div>
            </div>

            <div className="mt-14 grid gap-4 md:grid-cols-2 xl:grid-cols-4">
              {capabilityItems.map((item) => {
                const Icon = item.icon;

                return (
                  <div
                    key={item.title}
                    className="group flex min-h-[210px] flex-col rounded-[4px] border border-black/12 bg-white p-5 transition-all hover:border-[#0056F9]/28 hover:shadow-[0_16px_36px_rgba(21,32,43,0.08)]"
                  >
                    <h3 className="max-w-[18ch] text-[1rem] font-medium leading-snug text-[#15202B]">
                      {item.title}
                    </h3>

                    <div className="mt-auto flex items-end justify-between gap-4 pt-8">
                      <div className="flex h-11 w-11 items-center justify-center text-[#4A5BFF]">
                        <Icon className="h-8 w-8 stroke-[1.5]" />
                      </div>
                      <ArrowRight className="h-5 w-5 flex-shrink-0 text-[#4A5BFF] transition-transform group-hover:translate-x-0.5" />
                    </div>
                  </div>
                );
              })}
            </div>
          </Container>
        </section>

        <section
          id="architecture"
          className="relative overflow-hidden bg-[#08101D] py-20 text-white scroll-mt-28 md:py-24"
        >
          <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(circle_at_18%_22%,rgba(0,86,249,0.22),transparent_28%),radial-gradient(circle_at_82%_18%,rgba(109,74,255,0.18),transparent_24%)]" />

          <Container className="relative">
            <div className="grid gap-12 lg:grid-cols-[minmax(0,0.86fr)_minmax(0,1.14fr)] lg:items-start">
              <div>
                <SectionHeading
                  eyebrow="Architecture and deployment"
                  title="Built for customer-hosted enterprise infrastructure."
                  body="UMAI is designed to fit controlled environments, not force enterprise programs into a tooling model that breaks governance or security requirements."
                  tone="dark"
                />

                <div className="mt-8 inline-flex items-center gap-2 rounded-full border border-white/10 bg-white/[0.04] px-4 py-2">
                  <Server className="h-4 w-4 text-[#8FB3FF]" />
                  <span className="text-[11px] font-semibold uppercase tracking-[0.18em] text-white/76">
                    Customer-hosted platform architecture
                  </span>
                </div>
              </div>

              <div
                className={`grid gap-4 sm:grid-cols-2 ${
                  activeFocus === "architecture"
                    ? "rounded-[4px] border border-[#0056F9]/32 bg-white/[0.03] p-4"
                    : ""
                }`}
              >
                {deploymentItems.map((item) => (
                  <div
                    key={item}
                    className="rounded-[4px] border border-white/10 bg-white/[0.05] p-5"
                  >
                    <p className="text-sm font-medium leading-relaxed text-white/84">
                      {item}
                    </p>
                  </div>
                ))}
              </div>
            </div>
          </Container>
        </section>

        <section className="bg-white py-20 md:py-24">
          <Container>
            <div className="grid gap-5 lg:grid-cols-2">
              <div className="rounded-[4px] border border-black/8 bg-[#F9FAFF] p-7">
                <div className="flex h-11 w-11 items-center justify-center rounded-[4px] bg-[#EDF4FF] text-[#0056F9]">
                  <ShieldCheck className="h-5 w-5" />
                </div>
                <h2 className="mt-5 text-[1.9rem] font-bold tracking-[-0.03em] text-[#15202B]">
                  Security &amp; Compliance
                </h2>
                <p className="mt-4 text-base leading-relaxed text-[#4B5563]">
                  Enterprise readiness comes from traceable controls, clear review
                  paths, and evidence that stays tied to actual runtime behavior.
                </p>
                <ul className="mt-6 space-y-3">
                  {securityItems.map((item) => (
                    <li key={item} className="flex items-start gap-3">
                      <span className="mt-[9px] h-1.5 w-1.5 flex-shrink-0 rounded-full bg-[#0056F9]" />
                      <span className="text-sm leading-relaxed text-[#4B5563]">
                        {item}
                      </span>
                    </li>
                  ))}
                </ul>
              </div>

              <div className="rounded-[4px] border border-black/8 bg-white p-7">
                <div className="flex h-11 w-11 items-center justify-center rounded-[4px] bg-[#F5ECFF] text-[#7C3AED]">
                  <Workflow className="h-5 w-5" />
                </div>
                <h2 className="mt-5 text-[1.9rem] font-bold tracking-[-0.03em] text-[#15202B]">
                  Integrations &amp; Implementation Paths
                </h2>
                <p className="mt-4 text-base leading-relaxed text-[#4B5563]">
                  UMAI supports the implementation paths enterprises already use,
                  then adds platform governance on top instead of forcing a new
                  application architecture.
                </p>
                <div className="mt-6 flex flex-wrap gap-2.5">
                  {integrationItems.map((item) => (
                    <span
                      key={item}
                      className="rounded-full border border-black/8 bg-[#F9FAFF] px-3.5 py-2 text-[11px] font-semibold uppercase tracking-[0.16em] text-[#4B5563]"
                    >
                      {item}
                    </span>
                  ))}
                </div>
                <div className="mt-7">
                  <Link
                    href="/docs"
                    className="inline-flex items-center gap-2 text-sm font-semibold text-[#0056F9]"
                  >
                    See implementation guides
                    <ArrowRight className="h-4 w-4" />
                  </Link>
                </div>
              </div>
            </div>
          </Container>
        </section>

        <section className="bg-[#15202B] py-16 text-white md:py-20">
          <Container>
            <div className="grid gap-8 lg:grid-cols-[minmax(0,1fr)_auto] lg:items-center">
              <div className="max-w-[42rem]">
                <p className="text-[11px] font-semibold uppercase tracking-[0.18em] text-[#bfd3ff]">
                  Final CTA
                </p>
                <h2 className="mt-4 text-[2.2rem] font-black leading-tight tracking-[-0.04em] text-white md:text-[3rem]">
                  Bring governed AI deployment into one enterprise platform.
                </h2>
                <p className="mt-4 text-base leading-relaxed text-white/62 md:text-lg">
                  Use UMAI Platform as the parent operating layer for policy,
                  runtime control, evaluation, monitoring, and evidence.
                </p>
              </div>

              <div className="flex flex-col gap-3 sm:flex-row lg:flex-col">
                <Link
                  href="/contact"
                  className="inline-flex items-center justify-center gap-2 rounded-xl bg-[#0056F9] px-5 py-3 text-sm font-semibold text-white transition-all hover:-translate-y-0.5 hover:bg-[#0B5BEA]"
                >
                  Request a PoC
                </Link>
                <Link
                  href="/contact"
                  className="inline-flex items-center justify-center gap-2 rounded-xl border border-white/14 bg-white/[0.04] px-5 py-3 text-sm font-semibold text-white transition-colors hover:bg-white/[0.08]"
                >
                  Talk to UMAI
                </Link>
                <Link
                  href="#architecture"
                  className="inline-flex items-center justify-center gap-2 rounded-xl border border-white/14 bg-white/[0.04] px-5 py-3 text-sm font-semibold text-white transition-colors hover:bg-white/[0.08]"
                >
                  See Deployment Options
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
