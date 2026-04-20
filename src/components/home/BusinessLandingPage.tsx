"use client";

import { useState, useEffect } from "react";
import Image from "next/image";
import Link from "next/link";
import {
  ArrowRight,
  ChevronDown,
  Menu,
  X,
  CheckCircle2,
  LayoutDashboard,
  Workflow,
  Monitor,
  FileCheck2,
  Server,
  Building2,
  Landmark,
  HeartPulse,
  Scale,
  Factory,
  Database,
  MessageSquare,
  Zap,
  Wrench,
  Globe,
  Eye,
  Bot,
  BrainCircuit,
} from "lucide-react";

// ── URLs ──────────────────────────────────────────────────────────────────────
const PILOT_URL = "/contact";
const CONTACT_URL = "/contact";
const WEBINAR_URL = "/events/eu-ai-act-enforcement";

// ── Data ──────────────────────────────────────────────────────────────────────

const NAV_LINKS = [
  { label: "Why UMAI", href: "#why-umai" },
  { label: "Products", href: "#products" },
  { label: "Solutions", href: "#solutions" },
  { label: "Resources", href: "/docs" },
  { label: "Contact", href: "/contact" },
];

const VALUE_PROPS = [
  {
    title: "Eliminate AI compliance gaps",
    body: "Replace ad-hoc policy documents and fragmented reviews with one inline enforcement platform across every AI surface.",
    link: "See how regulated enterprises close compliance gaps",
    href: "/blog/evidence-first-ai-governance",
  },
  {
    title: "Enforce policy at the source",
    body: "Stop data leakage and prompt injection before they reach the model -not after the damage is done.",
    link: "See how healthcare teams maintain HIPAA compliance",
    href: "/blog/runtime-controls-prompt-injection-data-leakage",
  },
  {
    title: "Be audit-ready for AI now",
    body: "Ensure regulators, auditors, and compliance teams have tamper-evident, hash-chained evidence in real time.",
    link: "See 14x faster audit cycles at regulated enterprises",
    href: "/blog/evidence-first-ai-governance",
  },
];

const TICKER_ITEMS = [
  { text: "Defending Against Prompt Injection at Scale: Lessons from 500M Evaluations" },
  { text: "How UMAI Helps You Pass SOC 2 Type II with AI Systems in Scope" },
  { text: "Post-LLM PII Detection: Why Response-Side Enforcement Matters" },
  { text: "EU AI Act Article 9: What Risk Management Systems Must Include" },
  { text: "Federated Guardrail Learning: Privacy-Preserving Policy Improvement" },
  { text: "New in UMAI: Browser AI Governance for ChatGPT, Gemini, and Claude" },
  { text: "Introducing UMAI Sovereign Cloud: Enterprise-Level Agility for Private Infra" },
];

const USE_CASES = [
  {
    id: "apps-copilots",
    label: "Apps & Copilots",
    heading: "Power Resilient AI Apps with Inline Policy Enforcement",
    body: "With UMAI, you can build fault-tolerant AI apps and copilots that enforce enterprise policies in real time -responding to business events before damage is done.",
    bullets: [
      "Intercept every prompt and response in the request path",
      "Connect enterprise apps and AI models with pre-built integrations",
      "Govern and process AI interactions so your apps act on trusted data",
    ],
    cta: "Get a Practical Guide",
    ctaHref: "/docs",
    Icon: LayoutDashboard,
    image: "/assets/home/Policies.png",
  },
  {
    id: "ai-agents",
    label: "AI Agents",
    heading: "Control What AI Agents Can Do -Before They Do It",
    body: "UMAI enforces tool-level scope control for AI agents operating autonomously -blocking unsafe actions before they reach external APIs or cause real-world damage.",
    bullets: [
      "Whitelist and restrict all tool calls made by AI agents",
      "Deny unsafe or out-of-scope actions at the policy layer",
      "Audit every agentic decision with full forensic evidence",
    ],
    cta: "Explore Agent Security",
    ctaHref: "/platform",
    Icon: Workflow,
    image: "/assets/home/RealTimeAlerts.png",
  },
  {
    id: "browser-ai",
    label: "Browser AI Governance",
    heading: "Govern Employee Use of ChatGPT, Gemini, and Claude",
    body: "A managed Chrome extension enforces policy on employee use of public AI tools -without application changes or infrastructure complexity.",
    bullets: [
      "Apply enterprise policies across all browser-based AI tools",
      "Block unauthorized data submissions before they leave the browser",
      "Capture tamper-evident evidence for every browser AI interaction",
    ],
    cta: "Learn About Browser Governance",
    ctaHref: "/platform",
    Icon: Monitor,
    image: "/assets/home/BrowserExtentionMonitoring.png",
  },
  {
    id: "compliance",
    label: "Compliance & Evidence",
    heading: "From AI Usage to Audit-Ready Evidence -Automatically",
    body: "Every runtime decision generates a hash-chained event. UMAI produces evidence packs mapped to KVKK, GDPR, and EU AI Act controls -exportable for audit and GRC workflows.",
    bullets: [
      "KVKK and GDPR-aligned controls built into every policy workflow",
      "Hash-chained audit ledger -tamper-evident and forensically defensible",
      "Export evidence packs as PDF, CSV, or JSON on demand",
    ],
    cta: "Explore Compliance Features",
    ctaHref: "/platform",
    Icon: FileCheck2,
    image: "/assets/home/Evaluation.png",
  },
  {
    id: "any-environment",
    label: "Any Environment",
    heading: "Deploy UMAI Where Your Data Must Stay",
    body: "UMAI supports strict data residency, sovereignty, and internal security requirements across any deployment model -SaaS through air-gapped.",
    bullets: [
      "SaaS, private cloud, customer VPC, and on-prem Kubernetes",
      "Air-gapped environments for maximum data sovereignty",
      "On-prem is a core product path -not an enterprise upsell",
    ],
    cta: "See Deployment Options",
    ctaHref: "/platform",
    Icon: Server,
  },
];

const INDUSTRIES = [
  {
    id: "financial",
    label: "Financial Services",
    heading: "Financial Services",
    body: "Transform your AI risk posture with real-time controls that drive agility, security, and compliance for financial institutions.",
    outcomes: [
      "Detect prompt injection and data exfiltration in milliseconds",
      "Analyze AI risk in real time for smarter compliance decisions",
      "Power compliant AI interactions with speed and reliability",
      "Deliver regulatory reporting with trusted, hash-chained evidence",
    ],
    cta: "Explore FinServ Resources",
    ctaHref: "/docs",
    Icon: Landmark,
  },
  {
    id: "healthcare",
    label: "Healthcare",
    heading: "Healthcare",
    body: "Maintain HIPAA compliance and ensure human oversight for every AI interaction in clinical and administrative workflows.",
    outcomes: [
      "Block PHI from reaching external AI models in real time",
      "Enforce human-in-the-loop controls for high-risk clinical decisions",
      "Generate audit trails for every AI-assisted patient interaction",
      "Meet EU AI Act high-risk AI system requirements",
    ],
    cta: "Explore Healthcare Resources",
    ctaHref: "/docs",
    Icon: HeartPulse,
  },
  {
    id: "insurance",
    label: "Insurance",
    heading: "Insurance",
    body: "Build AI-powered underwriting and claims processes with full auditability, tamper-evident evidence, and sovereign deployment.",
    outcomes: [
      "Enforce policy on AI-assisted underwriting and claims decisions",
      "Produce forensic evidence for every AI interaction at scale",
      "Maintain multi-jurisdiction regulatory compliance automatically",
      "Deploy AI without sacrificing governance or oversight",
    ],
    cta: "Explore Insurance Resources",
    ctaHref: "/docs",
    Icon: Building2,
  },
  {
    id: "public-sector",
    label: "Public Sector",
    heading: "Public Sector",
    body: "Meet local compliance requirements and deploy AI within sovereign boundaries for government institutions and public services.",
    outcomes: [
      "KVKK and GDPR-aligned AI governance out of the box",
      "On-prem and air-gapped deployment for data sovereignty",
      "Turkish-sensitive data patterns recognized and protected natively",
      "Certified evidence packs for public audit requirements",
    ],
    cta: "Explore Public Sector Resources",
    ctaHref: "/docs",
    Icon: Scale,
  },
  {
    id: "manufacturing",
    label: "Manufacturing & Industrial",
    heading: "Manufacturing & Industrial",
    body: "Gain full visibility into shadow AI usage and enforce policy across engineering, operations, and supply chain teams.",
    outcomes: [
      "Discover all AI tools in use across the entire organization",
      "Enforce acceptable use policies without blocking productivity",
      "Monitor for IP and trade secret exfiltration via AI prompts",
      "Maintain governance as industrial AI adoption accelerates",
    ],
    cta: "Explore Industrial Resources",
    ctaHref: "/docs",
    Icon: Factory,
  },
];

const DIFFERENTIATORS = [
  {
    card: {
      stat: "The only platform with localized PRE+POST LLM evaluation.",
      quote:
        "Most platforms run English-only detection models and call it multilingual. UMAI evaluates prompts and responses in their native language—understanding cultural and linguistic nuance that generic models miss entirely.",
      badge: "LOCALIZED INTELLIGENCE",
    },
    text: {
      titleParts: [
        { text: "Culturally aware. ", highlight: false },
        { text: "Uniquely", highlight: true },
        { text: " UMAI.", highlight: false },
      ],
      subtitle:
        "The only platform that understands a Turkish-language prompt injection is fundamentally different from an English one.",
      bullets: [
        "Localized PRE+POST LLM evaluation",
        "KVKK & Turkish language support",
      ],
    },
    flip: false,
  },
  {
    card: {
      stat: "Browser to API. Every surface governed.",
      quote:
        "Employees use ChatGPT, Copilot, and Gemini in their browsers every day—outside your API perimeter. UMAI is the only platform that governs both your production AI APIs and your employees' browser-based AI tools from a single policy engine.",
      badge: "COMPLETE COVERAGE",
    },
    text: {
      titleParts: [
        { text: "No ", highlight: false },
        { text: "gaps", highlight: true },
        { text: " in your governance.", highlight: false },
      ],
      subtitle:
        "From browser extensions to hash-chained audit trails—every AI interaction is governed and evidenced.",
      bullets: [
        "Browser extension governance",
        "Hash-chain tamper-evident audit",
        "Versioned guardrails",
        "Evaluation benchmarks",
      ],
    },
    flip: true,
  },
  {
    card: {
      stat: "Full on-prem. Air-gap. EU AI Act. One platform.",
      quote:
        "Banks, healthcare, and public sector can't compromise on data sovereignty. UMAI deploys fully on-premises with zero internet dependency—while delivering EU AI Act compliance modules out of the box.",
      badge: "DEPLOY ANYWHERE",
    },
    text: {
      titleParts: [
        { text: "Sovereign ", highlight: false },
        { text: "deployment", highlight: true },
        { text: ", built-in compliance.", highlight: false },
      ],
      subtitle:
        "The only independent vendor with full on-prem or air-gapped deployment, EU AI Act modules, and no platform lock-in.",
      bullets: [
        "Full on-prem & air-gapped deployment",
        "EU AI Act compliance module",
        "Independent vendor — no platform lock-in",
      ],
    },
    flip: false,
  },
];

const FAQ_ITEMS = [
  {
    q: "We already use our cloud provider\u2019s built-in guardrails. Why do we need UMAI?",
    a: "Cloud-native content safety filters are exactly that - content filters locked to one provider. They can\u2019t produce compliance evidence for regulators, don\u2019t provide audit trails your organization owns, and can\u2019t govern employee use of browser-based AI tools. If you use multiple LLM providers, need EU AI Act or KVKK compliance, or want browser-level governance - you need a dedicated platform. UMAI works across all providers and deployment models simultaneously.",
  },
  {
    q: "There are already tools that detect prompt injection. Isn\u2019t that enough?",
    a: "Prompt injection detection is one capability of nine in the OWASP LLM Top 10. Point solutions that focus on a single attack vector lack browser-level governance, hash-chained audit trails, EU AI Act compliance modules, KVKK support, versioned guardrails, and - critically - localized cultural evaluation that understands regional linguistic context. Detection rates mean nothing if your governance doesn\u2019t understand that a Turkish-language prompt injection looks fundamentally different from an English one.",
  },
  {
    q: "We\u2019re not in a regulated industry. Do we still need AI governance?",
    a: "Every enterprise deploying AI is in a regulated environment - GDPR applies to virtually all production LLM deployments, and the EU AI Act will apply to any organization operating in the EU from August 2026. Beyond compliance, a single AI-related data breach costs $4.63M on average. UMAI\u2019s Starter tier gives your team visibility into what\u2019s happening with AI in your organization - most CISOs are surprised by what they find.",
  },
  {
    q: "Can\u2019t our engineering team just build guardrails into our application code?",
    a: "They can build basic input validation - but that gives you one application covered, with no audit trail, no compliance evidence, no browser governance, no versioned policy management, and no evaluation benchmarks to prove your detection rates. UMAI provides a centralized, application-agnostic governance layer that covers every AI interaction across your organization - including the consumer AI tools your employees are already using.",
  },
  {
    q: "What about latency impact? We can\u2019t slow down our AI applications.",
    a: "UMAI\u2019s p95 guardrail evaluation latency target is sub-50ms. Heuristic policies (regex, DLP) execute in sub-1ms. For context: the LLM itself typically takes 500ms\u20133000ms to respond. UMAI\u2019s overhead is invisible relative to model response time. And you can deploy in MONITOR mode first to measure latency impact before switching to ENFORCE.",
  },
  {
    q: "We need our data to stay on-premises. Can UMAI support that?",
    a: "Yes - UMAI is fully deployable on-premises via Kubernetes or Docker Compose with zero internet dependency after initial image pull. Your data never leaves your network. The AI Engine connects to your own on-premises LLM infrastructure. This is our recommended deployment for banks, healthcare, and public sector.",
  },
  {
    q: "How is UMAI different from a traditional WAF or DLP solution?",
    a: "Traditional WAFs and DLP tools don\u2019t understand LLM-specific attack patterns. A prompt injection doesn\u2019t look like SQL injection - it looks like natural language. DLP tools scan file transfers, not conversational AI prompts. And neither produces the compliance evidence that the EU AI Act and KVKK require. UMAI is purpose-built for AI interaction flows with culturally-aware detection logic.",
  },
  {
    q: "We\u2019re evaluating other vendors for browser AI governance. How is UMAI different?",
    a: "Most browser governance tools are features inside broader endpoint security platforms - their AI governance roadmap is driven by security priorities, not your governance needs. UMAI gives you browser governance AND hash-chained audit trails, EU AI Act compliance, KVKK support, versioned guardrails, and evaluation benchmarks - as a dedicated governance platform that won\u2019t be deprecated when the vendor changes strategy.",
  },
  {
    q: "What does \u2018culturally-aware evaluation\u2019 actually mean? Why does it matter?",
    a: "Most AI governance platforms treat multilingual support as a translation problem - they run English detection models and hope they generalize. They don\u2019t. A Turkish-language prompt injection uses completely different linguistic structures than an English one. Content that\u2019s acceptable in one cultural context may be a policy violation in another. UMAI\u2019s localized PRE_LLM + POST_LLM evaluation is designed from the ground up to understand regional linguistic nuances - not just translate English patterns.",
  },
  {
    q: "How quickly can we get started?",
    a: "SaaS: less than 1 hour from signup to first guardrail evaluation. Docker Compose (dev): 2\u20134 hours. Kubernetes (on-prem): 1\u20132 days. Our Quick Start professional services package covers architecture review, environment setup, and first guardrail configuration in 2 days.",
  },
];

export const ACTION_CARDS = [
  {
    label: "EVALUATE YOUR AI INTEGRATIONS",
    body: "Assess the risk posture of your existing AI integrations. UMAI maps every surface -apps, agents, and browser tools -against your compliance requirements.",
    link: "Start evaluation →",
    href: CONTACT_URL,
    image: "/assets/home/evaluation_view.png",
  },
  {
    label: "CONTACT A SPECIALIST",
    body: "Let one of our experts help you plan your AI governance strategy while meeting your compliance needs every step of the way.",
    link: "Contact a specialist →",
    href: CONTACT_URL,
    image: "/assets/home/Contact Specialist.png",
  },
  {
    label: "START YOUR POC",
    body: "Go live in under a week. Deploy UMAI with pre-built policies for your industry and see real-time enforcement on your own AI traffic.",
    link: "Start your PoC →",
    href: PILOT_URL,
    image: "/assets/home/poc.png",
  },
];

export const PRIMARY_CTA_CLASS =
  "inline-flex items-center justify-center gap-2 rounded-xl bg-[#0056F9] px-6 py-3.5 text-sm font-semibold text-white shadow-[0_12px_32px_rgba(0,86,249,0.32)] transition-all duration-200 hover:-translate-y-0.5 hover:bg-[#0B5BEA] hover:shadow-[0_20px_42px_rgba(0,86,249,0.36)]";

export const SECONDARY_CTA_CLASS =
  "inline-flex items-center justify-center gap-2 rounded-xl border border-white/12 bg-white/[0.03] px-6 py-3.5 text-sm font-medium text-white/84 backdrop-blur-xl transition-colors duration-200 hover:border-white/18 hover:bg-white/[0.06] hover:text-white";

// ── Component ─────────────────────────────────────────────────────────────────

export function BusinessLandingPage() {
  const [scrolled, setScrolled] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);
  const [activeTab, setActiveTab] = useState(0);
  const [activeIndustry, setActiveIndustry] = useState(0);
  const [openFaq, setOpenFaq] = useState<number | null>(null);

  useEffect(() => {
    const handler = () => setScrolled(window.scrollY > 10);
    window.addEventListener("scroll", handler, { passive: true });
    return () => window.removeEventListener("scroll", handler);
  }, []);

  useEffect(() => {
    document.body.style.overflow = mobileOpen ? "hidden" : "";
    return () => {
      document.body.style.overflow = "";
    };
  }, [mobileOpen]);

  const ActiveIcon = USE_CASES[activeTab].Icon;

  return (
    <div className="min-h-screen bg-black text-white">

      {/* ── Announcement Bar ──────────────────────────────────────────────── */}
      <div className="bg-[#0056F9] text-white text-sm">
        <div className="max-w-[1280px] mx-auto px-6 py-2.5 flex items-center justify-between">
          <p>
            <span className="font-medium">[Webinar] EU AI Act Enforcement for Regulated Enterprises - UMAI Live Demo &amp; Q&amp;A | </span>
            <Link href={WEBINAR_URL} className="font-bold underline hover:no-underline">
              Register →
            </Link>
          </p>
          <div className="hidden sm:flex items-center gap-6">
            <Link href={CONTACT_URL} className="hover:underline text-white/85 font-semibold">
              Try UMAI →
            </Link>
          </div>
        </div>
      </div>

      {/* ── Navbar ────────────────────────────────────────────────────────── */}
      <header
        className={`sticky top-0 z-50 transition-all duration-300 border-b ${
          scrolled
            ? "bg-black/95 backdrop-blur-md border-white/10 shadow-2xl"
            : "bg-black border-white/5"
        }`}
      >
        <div className="max-w-[1280px] mx-auto px-6">
          <nav className="flex h-[68px] items-center justify-between gap-6">
            <Link href="/" className="flex items-center flex-shrink-0">
              <Image
                src="/assets/umailogo_white.png"
                alt="UMAI"
                width={160}
                height={48}
                className="h-12 w-auto"
                priority
                style={{ width: "auto" }}
              />
            </Link>

            <ul className="hidden lg:flex items-center gap-0.5">
              {NAV_LINKS.map((link) => (
                <li key={link.label}>
                  <Link
                    href={link.href}
                    className="px-4 py-2 text-sm font-medium text-white/65 hover:text-white transition-colors rounded-md hover:bg-white/5"
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>

            <div className="hidden lg:flex items-center gap-4">
              <Link
                href={CONTACT_URL}
                className="bg-[#106CEC] hover:bg-[#0d5bbd] text-white text-sm font-semibold px-5 py-2.5 rounded-md transition-colors"
              >
                Try UMAI
              </Link>
            </div>

            <button
              onClick={() => setMobileOpen((v) => !v)}
              className="lg:hidden text-white/70 hover:text-white p-2"
              aria-label="Toggle menu"
            >
              {mobileOpen ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
            </button>
          </nav>
        </div>

        {mobileOpen && (
          <div className="lg:hidden bg-black border-t border-white/10">
            <div className="max-w-[1280px] mx-auto px-6 py-6 flex flex-col gap-3">
              {NAV_LINKS.map((link) => (
                <Link
                  key={link.label}
                  href={link.href}
                  onClick={() => setMobileOpen(false)}
                  className="text-white/70 hover:text-white text-sm font-medium py-2.5"
                >
                  {link.label}
                </Link>
              ))}
              <div className="pt-4 border-t border-white/10 flex flex-col gap-3">
                <Link
                  href={CONTACT_URL}
                  onClick={() => setMobileOpen(false)}
                  className="text-center text-sm font-semibold bg-[#106CEC] hover:bg-[#0d5bbd] text-white py-3 rounded-md transition-colors"
                >
                  Try UMAI
                </Link>
              </div>
            </div>
          </div>
        )}
      </header>

      <main>

        {/* ── Hero ──────────────────────────────────────────────────────────── */}
        <section className="bg-black relative">
          <div className="absolute inset-0 overflow-hidden pointer-events-none">
            <div className="absolute bottom-0 left-1/2 -translate-x-1/2 w-[900px] h-[500px] bg-[#106CEC]/20 blur-[160px] rounded-full" />
          </div>
          <div className="max-w-[1280px] mx-auto px-6 pt-24 pb-16 text-center relative z-10">
            <h1 className="text-[36px] md:text-[48px] lg:text-[56px] font-black leading-[1.08] tracking-[-0.03em] text-white mb-7">
              Every AI Decision,<br />Governed.
            </h1>
            <p className="text-lg md:text-xl text-white/55 max-w-2xl mx-auto mb-10 leading-relaxed">
              The enterprise control plane that governs every AI request across your apps, agents, and browsers in real time.
            </p>
            <div className="flex items-center justify-center gap-4 flex-wrap">
              <Link
                href={CONTACT_URL}
                className="bg-[#106CEC] hover:bg-[#0d5bbd] text-white font-semibold px-8 py-4 rounded-md text-sm transition-colors"
              >
                Start for Free
              </Link>
              <Link
                href="#products"
                className="text-white/65 hover:text-white font-medium text-sm flex items-center gap-2 transition-colors"
              >
                Explore the Platform <ArrowRight className="h-4 w-4" />
              </Link>
            </div>
          </div>

          {/* Hero diagram */}
          <div className="max-w-[1280px] mx-auto px-6 pb-0 relative z-10">
            <HeroDiagram />
          </div>

          {/* ── Value Props ───────────────────────────────────────────────────── */}
          <div className="max-w-[1280px] mx-auto px-6 pt-14 pb-14">
            <div className="grid md:grid-cols-3 gap-4">
              {VALUE_PROPS.map((prop) => (
                <div
                  key={prop.title}
                  className="bg-[#0f0f0f] rounded-2xl border border-white/8 p-8 flex flex-col"
                >
                  <h3 className="text-[1.15rem] font-bold text-white mb-3 leading-snug">
                    {prop.title}
                  </h3>
                  <p className="text-white/50 text-sm leading-relaxed flex-1 mb-5">{prop.body}</p>
                  <Link
                    href={prop.href}
                    className="text-[#60a5fa] hover:text-[#93c5fd] text-sm font-medium flex items-center gap-1.5 transition-colors"
                  >
                    {prop.link} <ArrowRight className="h-3.5 w-3.5 flex-shrink-0" />
                  </Link>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* ── Scrolling Ticker ──────────────────────────────────────────────── */}
        <section className="bg-[#0a0a0a] overflow-hidden">
          <div className="flex">
            <div className="flex umai-ticker">
              {[...TICKER_ITEMS, ...TICKER_ITEMS, ...TICKER_ITEMS].map((item, i) => (
                <Link
                  key={i}
                  href="/blog"
                  className="flex items-center gap-4 px-8 py-4 border-r border-white/8 hover:bg-white/5 transition-colors flex-shrink-0 group"
                >
                  <ArrowRight className="h-3.5 w-3.5 text-[#60a5fa] flex-shrink-0" />
                  <span className="text-white/65 text-sm group-hover:text-white transition-colors whitespace-nowrap">
                    {item.text}
                  </span>
                  <span className="text-[11px] font-bold text-[#60a5fa] border border-[#106CEC]/40 px-2 py-0.5 rounded flex-shrink-0">
                    Blog
                  </span>
                </Link>
              ))}
            </div>
          </div>
        </section>

        {/* ── Use Case Tabs ─────────────────────────────────────────────────── */}
        <section id="products" className="bg-white py-24">
          <div className="max-w-[1280px] mx-auto px-6">
            <h2 className="text-[40px] md:text-[52px] font-black text-black leading-[1.1] tracking-[-0.03em] text-center mb-3">
              Governing AI-First,<br />Regulated Companies
            </h2>
            <p className="text-black/50 text-center text-lg mb-14 max-w-xl mx-auto leading-relaxed">
              For every AI risk, UMAI helps you enforce policy faster and operate with full
              compliance confidence.
            </p>

            {/* Tab bar */}
            <div className="border-b border-black/10 mb-14 overflow-x-auto scrollbar-hide -mx-6 px-6">
              <div className="flex min-w-max">
                {USE_CASES.map((uc, i) => (
                  <button
                    key={uc.id}
                    onClick={() => setActiveTab(i)}
                    className={`px-6 py-4 text-[13px] font-semibold whitespace-nowrap border-b-2 transition-all -mb-px ${
                      activeTab === i
                        ? "border-[#106CEC] text-black"
                        : "border-transparent text-black/45 hover:text-black"
                    }`}
                  >
                    {uc.label}
                  </button>
                ))}
              </div>
            </div>

            {/* Tab content */}
            <div className="grid md:grid-cols-2 gap-12 md:gap-20 items-center">
              <div>
                <h3 className="text-2xl md:text-3xl font-bold text-black mb-5 leading-tight">
                  {USE_CASES[activeTab].heading}
                </h3>
                <p className="text-black/55 mb-7 leading-relaxed">{USE_CASES[activeTab].body}</p>
                <ul className="space-y-4 mb-10">
                  {USE_CASES[activeTab].bullets.map((b) => (
                    <li key={b} className="flex items-start gap-3">
                      <CheckCircle2 className="h-5 w-5 text-[#106CEC] flex-shrink-0 mt-0.5" />
                      <span className="text-black/65 text-sm leading-relaxed">{b}</span>
                    </li>
                  ))}
                </ul>
                <Link
                  href={USE_CASES[activeTab].ctaHref}
                  className="bg-[#106CEC] hover:bg-[#0d5bbd] text-white font-semibold px-6 py-3 rounded-md text-sm inline-flex items-center gap-2 transition-colors"
                >
                  {USE_CASES[activeTab].cta}
                </Link>
              </div>
              <div className="bg-black rounded-2xl aspect-video flex items-center justify-center relative overflow-hidden border border-white/5">
                {USE_CASES[activeTab].image ? (
                  <Image
                    src={USE_CASES[activeTab].image}
                    alt={USE_CASES[activeTab].label}
                    fill
                    quality={100}
                    sizes="(max-width: 768px) 100vw, 640px"
                    className="object-cover object-left-top"
                  />
                ) : (
                  <>
                    <div className="absolute inset-0 bg-[#106CEC]/15" />
                    <div className="relative z-10 flex flex-col items-center gap-4">
                      <div className="w-20 h-20 rounded-2xl bg-[#106CEC]/10 border border-[#106CEC]/30 flex items-center justify-center">
                        <ActiveIcon className="h-9 w-9 text-[#60a5fa]" />
                      </div>
                      <p className="text-white/30 text-xs text-center max-w-[200px] leading-relaxed">
                        {USE_CASES[activeTab].label} -powered by UMAI runtime enforcement
                      </p>
                    </div>
                  </>
                )}
              </div>
            </div>
          </div>
        </section>

        {/* ── Industry Solutions ────────────────────────────────────────────── */}
        <section id="solutions" className="bg-black py-24">
          <div className="max-w-[1280px] mx-auto px-6">
            <h2 className="text-[40px] md:text-[52px] font-black text-white text-center mb-16 leading-tight tracking-[-0.03em]">
              Industry Solutions That Drive Compliance
            </h2>

            <div className="grid md:grid-cols-[220px_1fr] gap-8 items-start">
              {/* Sidebar */}
              <div className="flex flex-col gap-0">
                {INDUSTRIES.map((ind, i) => (
                  <button
                    key={ind.id}
                    onClick={() => setActiveIndustry(i)}
                    className={`text-left px-4 py-4 text-sm font-semibold transition-all flex items-center gap-3 border-l-2 ${
                      activeIndustry === i
                        ? "border-[#106CEC] text-white"
                        : "border-transparent text-white/35 hover:text-white/65"
                    }`}
                  >
                    {ind.label}
                  </button>
                ))}
              </div>

              {/* Content panel */}
              <div className="bg-[#0f0f0f] rounded-2xl border border-white/8 overflow-hidden">
                <div className="grid md:grid-cols-[1fr_1.2fr]">
                  <div className="bg-black border-r border-white/8 min-h-[340px] flex items-center justify-center p-8">
                    <IndustryVisual industry={activeIndustry} />
                  </div>
                  <div className="p-8 md:p-10">
                    <h3 className="text-2xl font-bold text-white mb-4">
                      {INDUSTRIES[activeIndustry].heading}
                    </h3>
                    <p className="text-white/50 text-sm leading-relaxed mb-6">
                      {INDUSTRIES[activeIndustry].body}
                    </p>
                    <p className="text-[11px] font-bold uppercase tracking-widest text-white/25 mb-4">
                      Key Outcomes
                    </p>
                    <ul className="space-y-3 mb-8">
                      {INDUSTRIES[activeIndustry].outcomes.map((o) => (
                        <li key={o} className="flex items-start gap-3">
                          <span className="mt-[7px] h-1.5 w-1.5 rounded-full bg-[#60a5fa] flex-shrink-0" />
                          <span className="text-white/60 text-sm leading-relaxed">{o}</span>
                        </li>
                      ))}
                    </ul>
                    <Link
                      href={INDUSTRIES[activeIndustry].ctaHref}
                      className="bg-[#106CEC] hover:bg-[#0d5bbd] text-white text-sm font-semibold px-5 py-2.5 rounded-md inline-flex items-center gap-2 transition-colors"
                    >
                      {INDUSTRIES[activeIndustry].cta}
                    </Link>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* ── The UMAI Difference ───────────────────────────────────────────── */}
        <section id="why-umai" className="bg-white py-24">
          <div className="max-w-[1280px] mx-auto px-6">
            <h2 className="text-[40px] md:text-5xl font-black text-black text-center mb-6 tracking-[-0.03em]">
              Instant <span className="text-[#0056F9]">AI governance</span> impact
            </h2>
            <p className="text-black/55 text-center text-base max-w-3xl mx-auto mb-16 leading-relaxed">
              UMAI provides an inline and complete AI governance platform available wherever your
              business needs to govern AI—at a fraction of the cost of manual compliance review.
            </p>

            <div className="space-y-8">
              {DIFFERENTIATORS.map((d, i) => (
                <div key={i} className="grid md:grid-cols-2 gap-6 items-stretch">
                  {/* Blue card */}
                  <div
                    className={`${
                      d.flip ? "md:order-2" : "md:order-1"
                    } rounded-2xl p-10 flex flex-col gap-6 relative overflow-hidden`}
                    style={{
                      backgroundColor: "#0056F9",
                      backgroundImage:
                        "radial-gradient(circle, rgba(255,255,255,0.10) 1px, transparent 1px)",
                      backgroundSize: "22px 22px",
                    }}
                  >
                    <h3 className="text-[1.45rem] md:text-[1.6rem] font-black text-white leading-tight">
                      {d.card.stat}
                    </h3>
                    <blockquote className="text-white/90 text-base leading-relaxed flex-1">
                      &ldquo;{d.card.quote}&rdquo;
                    </blockquote>
                    <p className="text-[10px] font-bold uppercase tracking-[0.18em] text-white/40 mt-2">
                      {d.card.badge}
                    </p>
                  </div>

                  {/* Text section */}
                  <div
                    className={`${
                      d.flip ? "md:order-1" : "md:order-2"
                    } flex flex-col justify-center gap-5 px-4 py-8 md:px-10`}
                  >
                    <h3 className="text-xl md:text-2xl font-bold text-black leading-snug">
                      {d.text.titleParts.map((part, j) =>
                        part.highlight ? (
                          <span key={j} className="text-[#0056F9]">
                            {part.text}
                          </span>
                        ) : (
                          <span key={j}>{part.text}</span>
                        )
                      )}
                    </h3>
                    <p className="text-black/55 text-sm leading-relaxed">{d.text.subtitle}</p>
                    <ul className="space-y-2.5">
                      {d.text.bullets.map((b) => (
                        <li key={b} className="flex items-center gap-2.5 text-sm text-black/70">
                          <CheckCircle2 className="h-4 w-4 text-[#0056F9] flex-shrink-0" />
                          {b}
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>
              ))}
            </div>

          </div>
        </section>

        {/* ── See UMAI In Action ────────────────────────────────────────────── */}
        <section className="bg-black py-24">
          <div className="max-w-[1280px] mx-auto px-6">
            <h2 className="text-[40px] md:text-5xl font-black text-white text-center mb-14 tracking-[-0.03em]">
              Let&apos;s Accelerate Your AI Journey
            </h2>
            <div className="grid md:grid-cols-3 gap-5">
              {[
                {
                  label: "EVALUATE YOUR AI INTEGRATIONS",
                  body: "Assess the risk posture of your existing AI integrations. UMAI maps every surface -apps, agents, and browser tools -against your compliance requirements.",
                  link: "Start evaluation →",
                  href: CONTACT_URL,
                  image: "/assets/home/evaluation_view.png",
                },
                {
                  label: "CONTACT A SPECIALIST",
                  body: "Let one of our experts help you plan your AI governance strategy while meeting your compliance needs every step of the way.",
                  link: "Contact a specialist →",
                  href: CONTACT_URL,
                  image: "/assets/home/Contact Specialist.png",
                },
                {
                  label: "START YOUR POC",
                  body: "Go live in under a week. Deploy UMAI with pre-built policies for your industry and see real-time enforcement on your own AI traffic.",
                  link: "Start your PoC →",
                  href: PILOT_URL,
                  image: "/assets/home/poc.png",
                },
              ].map((card) => (
                <div
                  key={card.label}
                  className="bg-[#0f0f0f] rounded-2xl border border-white/8 overflow-hidden flex flex-col"
                >
                  <div className="h-44 bg-[#050505] relative overflow-hidden border-b border-white/8">
                    <Image
                      src={card.image}
                      alt={card.label}
                      fill
                      quality={100}
                      sizes="(max-width: 768px) 100vw, 400px"
                      className="object-cover object-left-top"
                    />
                  </div>
                  <div className="p-7 flex flex-col flex-1">
                    <p className="text-[10px] font-bold uppercase tracking-[0.2em] text-white/25 mb-3">
                      {card.label}
                    </p>
                    <p className="text-white/55 text-sm leading-relaxed mb-5 flex-1">{card.body}</p>
                    <Link
                      href={card.href}
                      className="text-[#60a5fa] hover:text-[#93c5fd] text-sm font-semibold transition-colors"
                    >
                      {card.link}
                    </Link>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* ── FAQ ───────────────────────────────────────────────────────────── */}
        <section className="bg-white py-24">
          <div className="max-w-[1280px] mx-auto px-6">
            <div className="grid md:grid-cols-[300px_1fr] gap-16">
              <h2 className="text-3xl md:text-4xl font-black text-black leading-tight">
                Frequently Asked Questions
              </h2>
              <div className="divide-y divide-black/8">
                {FAQ_ITEMS.map((item, i) => (
                  <div key={i} className="py-5">
                    <button
                      onClick={() => setOpenFaq(openFaq === i ? null : i)}
                      className="w-full flex items-center justify-between gap-4 text-left font-medium text-black/80 hover:text-black transition-colors text-sm"
                    >
                      <span className="leading-snug">{item.q}</span>
                      <ChevronDown
                        className={`h-4 w-4 flex-shrink-0 text-black/40 transition-transform duration-200 ${
                          openFaq === i ? "rotate-180" : ""
                        }`}
                      />
                    </button>
                    {openFaq === i && (
                      <p className="mt-4 text-black/55 text-sm leading-relaxed">{item.a}</p>
                    )}
                  </div>
                ))}
              </div>
            </div>
          </div>
        </section>

      </main>

      {/* ── Footer ────────────────────────────────────────────────────────── */}
      <footer className="bg-black border-t border-white/8">
        <div className="max-w-[1280px] mx-auto px-6 py-16">
          <div className="grid grid-cols-2 md:grid-cols-[1fr_repeat(4,auto)] gap-10 md:gap-12">
            <div className="col-span-2 md:col-span-1">
              <div className="mb-5">
                <Image
                  src="/assets/umailogo_white.png"
                  alt="UMAI"
                  width={120}
                  height={36}
                  className="h-8 w-auto"
                  style={{ width: "auto" }}
                />
              </div>
              <p className="text-white/35 text-sm leading-relaxed max-w-[240px]">
                Enterprise AI governance platform. Runtime enforcement, browser governance,
                and tamper-evident audit evidence.
              </p>
            </div>

            {[
              {
                heading: "Product",
                links: [
                  { label: "Platform", href: "/platform" },
                  { label: "Docs", href: "/docs" },
                  { label: "Blog", href: "/blog" },
                ],
              },
              {
                heading: "Use Cases",
                links: [
                  { label: "Apps & Copilots", href: "#products" },
                  { label: "AI Agents", href: "#products" },
                  { label: "Browser AI", href: "#products" },
                  { label: "Any Environment", href: "#products" },
                ],
              },
              {
                heading: "Industries",
                links: [
                  { label: "Financial Services", href: "#solutions" },
                  { label: "Healthcare", href: "#solutions" },
                  { label: "Insurance", href: "#solutions" },
                  { label: "Public Sector", href: "#solutions" },
                  { label: "Manufacturing", href: "#solutions" },
                ],
              },
              {
                heading: "Company",
                links: [
                  { label: "Contact", href: CONTACT_URL },
                  { label: "Privacy", href: "/privacy" },
                  { label: "Terms", href: "/terms" },
                ],
              },
            ].map((col) => (
              <div key={col.heading}>
                <p className="text-[11px] font-bold uppercase tracking-[0.18em] text-white/25 mb-5">
                  {col.heading}
                </p>
                <ul className="space-y-3">
                  {col.links.map((link) => (
                    <li key={link.label}>
                      <Link
                        href={link.href}
                        className="text-white/45 hover:text-white text-sm transition-colors"
                      >
                        {link.label}
                      </Link>
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>

          <div className="mt-14 pt-6 border-t border-white/8 flex flex-col md:flex-row md:items-center md:justify-between gap-3 text-xs text-white/25">
            <p>© 2026 UMAI. Enterprise AI governance for governed deployment.</p>
            <div className="flex gap-6">
              <Link href="/privacy" className="hover:text-white/50 transition-colors">
                Privacy
              </Link>
              <Link href="/terms" className="hover:text-white/50 transition-colors">
                Terms
              </Link>
              <Link href={CONTACT_URL} className="hover:text-white/50 transition-colors">
                Contact
              </Link>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
}

// ── Sub-components ────────────────────────────────────────────────────────────

function HeroDiagram() {
  // ── Coordinate system: SVG viewBox 1100×620 ──
  const CX = 550, CY = 215;
  const SHIELD = 60;

  // ── LEFT: All AI request sources ──────────────────────────────────
  const L = [
    { Icon: MessageSquare, label: "User Prompt",    x: 60,  y: 30 },
    { Icon: Bot,           label: "Copilot",         x: 160, y: 95 },
    { Icon: Workflow,       label: "Agent Request",   x: 60,  y: 160 },
    { Icon: Database,       label: "RAG Query",       x: 160, y: 225 },
    { Icon: Monitor,        label: "Browser AI",      x: 60,  y: 290 },
    { Icon: Server,         label: "API Call",         x: 160, y: 355 },
    { Icon: BrainCircuit,   label: "Custom LLM",      x: 60,  y: 420 },
  ];

  // ── RIGHT: Safe agentic system calls (approved to execute) ────────
  const R = [
    { Icon: BrainCircuit, label: "OpenAI",       x: 1040, y: 30 },
    { Icon: Scale,         label: "Anthropic",     x: 940,  y: 95 },
    { Icon: Globe,         label: "Google AI",     x: 1040, y: 160 },
    { Icon: Wrench,        label: "Tool Call",     x: 940,  y: 225 },
    { Icon: Database,      label: "DB Query",      x: 1040, y: 290 },
    { Icon: Zap,           label: "API Action",    x: 940,  y: 355 },
    { Icon: Workflow,      label: "Agent Action",  x: 1040, y: 420 },
  ];

  // ── BOTTOM CENTER: Governance layer (every request logged) ────────
  const B = [
    { Icon: FileCheck2,      label: "Audit Ledger", x: 350, y: 530 },
    { Icon: LayoutDashboard, label: "Dashboard",     x: 550, y: 555 },
    { Icon: Eye,             label: "Governance",    x: 750, y: 530 },
  ];

  // ── SVG paths ─────────────────────────────────────────────────────
  const lPaths = L.map(n =>
    `M ${n.x},${n.y} C ${n.x + 180},${n.y} ${CX - 200},${CY} ${CX - SHIELD},${CY}`
  );
  const rPaths = R.map(n =>
    `M ${CX + SHIELD},${CY} C ${CX + 200},${CY} ${n.x - 180},${n.y} ${n.x},${n.y}`
  );
  const bPaths = B.map(n =>
    `M ${CX},${CY + SHIELD} C ${CX},${CY + SHIELD + 100} ${n.x},${n.y - 70} ${n.x},${n.y}`
  );
  const fullPaths = L.map((ln, i) => {
    const rn = R[i];
    return `M ${ln.x},${ln.y} C ${ln.x + 180},${ln.y} ${CX - 200},${CY} ${CX},${CY} C ${CX + 200},${CY} ${rn.x - 180},${rn.y} ${rn.x},${rn.y}`;
  });

  // Attack definitions
  const attacks = [
    { label: "PROMPT INJECTION",  delay: 0,   dur: 5,   idx: 0 },
    { label: "DATA LEAKAGE",      delay: 2.5, dur: 4.5, idx: 2 },
    { label: "PII DETECTED",      delay: 5,   dur: 5.5, idx: 4 },
    { label: "JAILBREAK ATTEMPT", delay: 7.5, dur: 4.2, idx: 1 },
    { label: "TOXIC CONTENT",     delay: 10,  dur: 5,   idx: 6 },
  ];
  const atkYOff = [-55, -30, 15, 40, -5];

  return (
    <>
      {/* ── Desktop diagram ──────────────────────────────────────────── */}
      <div className="relative w-full mx-auto hidden md:block" style={{ maxWidth: 1100, height: 620 }}>

        {/* ── SVG layer ──────────────────────────────────────────────── */}
        <svg
          viewBox="0 0 1100 620"
          className="absolute inset-0 w-full h-full pointer-events-none"
          preserveAspectRatio="xMidYMid meet"
        >
          <defs>
            <linearGradient id="lgL" x1="0%" x2="100%">
              <stop offset="0%" stopColor="rgba(96,165,250,0.12)" />
              <stop offset="100%" stopColor="rgba(16,108,236,0.35)" />
            </linearGradient>
            <linearGradient id="lgR" x1="0%" x2="100%">
              <stop offset="0%" stopColor="rgba(16,108,236,0.35)" />
              <stop offset="100%" stopColor="rgba(255,255,255,0.18)" />
            </linearGradient>
            <linearGradient id="lgB" x1="50%" y1="0%" x2="50%" y2="100%">
              <stop offset="0%" stopColor="rgba(16,108,236,0.3)" />
              <stop offset="100%" stopColor="rgba(147,197,253,0.18)" />
            </linearGradient>
          </defs>

          {/* ── Connecting curves: left → center ─────────────────────── */}
          {lPaths.map((d, i) => (
            <path key={`lp${i}`} d={d} stroke="url(#lgL)" strokeWidth="1.2" fill="none" />
          ))}

          {/* ── Connecting curves: center → right ────────────────────── */}
          {rPaths.map((d, i) => (
            <path key={`rp${i}`} d={d} stroke="url(#lgR)" strokeWidth="1.2" fill="none" />
          ))}

          {/* ── Connecting curves: center → bottom governance ─────────── */}
          {bPaths.map((d, i) => (
            <path key={`bp${i}`} d={d} stroke="url(#lgB)" strokeWidth="1" fill="none" strokeDasharray="4 4" opacity="0.7" />
          ))}

          {/* ── Shield pulse rings ────────────────────────────────────── */}
          <circle cx={CX} cy={CY} r={SHIELD + 8} stroke="rgba(16,108,236,0.18)" strokeWidth="1" fill="none" strokeDasharray="4 6">
            <animate attributeName="r" values={`${SHIELD + 5};${SHIELD + 14};${SHIELD + 5}`} dur="3s" repeatCount="indefinite" />
            <animate attributeName="opacity" values="0.25;0.55;0.25" dur="3s" repeatCount="indefinite" />
          </circle>
          <circle cx={CX} cy={CY} r={SHIELD + 22} stroke="rgba(16,108,236,0.08)" strokeWidth="0.8" fill="none" strokeDasharray="2 10">
            <animate attributeName="r" values={`${SHIELD + 18};${SHIELD + 30};${SHIELD + 18}`} dur="4.5s" repeatCount="indefinite" />
            <animate attributeName="opacity" values="0.15;0.35;0.15" dur="4.5s" repeatCount="indefinite" />
          </circle>

          {/* ── Safe traffic particles (green, left → right) ─────────── */}
          {fullPaths.map((fp, i) => (
            <circle key={`sf${i}`} r="2.5" fill="#ffffff" opacity="0">
              <animateMotion dur={`${8 + i * 0.7}s`} begin={`${i * 1.8}s`} repeatCount="indefinite" path={fp} />
              <animate
                attributeName="opacity"
                values="0;0.55;0.85;0.55;0"
                keyTimes="0;0.06;0.5;0.94;1"
                dur={`${8 + i * 0.7}s`}
                begin={`${i * 1.8}s`}
                repeatCount="indefinite"
              />
            </circle>
          ))}

          {/* ── Governance particles (amber, center → bottom) ────────── */}
          {bPaths.map((bp, i) => (
            <circle key={`gp${i}`} r="2" fill="#93c5fd" opacity="0">
              <animateMotion dur={`${4 + i * 0.5}s`} begin={`${i * 1.2}s`} repeatCount="indefinite" path={bp} />
              <animate
                attributeName="opacity"
                values="0;0.6;0.8;0.6;0"
                keyTimes="0;0.1;0.5;0.9;1"
                dur={`${4 + i * 0.5}s`}
                begin={`${i * 1.2}s`}
                repeatCount="indefinite"
              />
            </circle>
          ))}
          {/* Second wave of governance particles (staggered) */}
          {bPaths.map((bp, i) => (
            <circle key={`gp2${i}`} r="2" fill="#93c5fd" opacity="0">
              <animateMotion dur={`${4.5 + i * 0.4}s`} begin={`${2.5 + i * 1}s`} repeatCount="indefinite" path={bp} />
              <animate
                attributeName="opacity"
                values="0;0.5;0.7;0.5;0"
                keyTimes="0;0.1;0.5;0.9;1"
                dur={`${4.5 + i * 0.4}s`}
                begin={`${2.5 + i * 1}s`}
                repeatCount="indefinite"
              />
            </circle>
          ))}

          {/* ── Attack particles (red, blocked at shield) ────────────── */}
          {attacks.map((a, i) => (
            <g key={`ag${i}`}>
              <circle r="3.5" fill="#60a5fa" opacity="0">
                <animateMotion dur={`${a.dur}s`} begin={`${a.delay}s`} repeatCount="indefinite" path={lPaths[a.idx]} />
                <animate attributeName="opacity" values="0;0.85;0.9;0" keyTimes="0;0.08;0.84;1" dur={`${a.dur}s`} begin={`${a.delay}s`} repeatCount="indefinite" />
                <animate attributeName="r" values="3.5;3.5;9;0" keyTimes="0;0.82;0.93;1" dur={`${a.dur}s`} begin={`${a.delay}s`} repeatCount="indefinite" />
              </circle>
              <circle cx={CX - SHIELD} cy={CY} r="0" fill="none" stroke="#60a5fa" strokeWidth="1.5" opacity="0">
                <animate attributeName="r" values="0;0;0;18;28;28" keyTimes="0;0.83;0.84;0.91;0.97;1" dur={`${a.dur}s`} begin={`${a.delay}s`} repeatCount="indefinite" />
                <animate attributeName="opacity" values="0;0;0;0.65;0.2;0" keyTimes="0;0.83;0.84;0.90;0.96;1" dur={`${a.dur}s`} begin={`${a.delay}s`} repeatCount="indefinite" />
              </circle>
              <text x={CX - SHIELD - 14} y={CY + atkYOff[i]} textAnchor="end" fill="#60a5fa" fontSize="9" fontWeight="700" letterSpacing="0.06em" opacity="0">
                <animate attributeName="opacity" values="0;0;0;0.9;0.9;0" keyTimes="0;0.82;0.84;0.88;0.94;1" dur={`${a.dur}s`} begin={`${a.delay}s`} repeatCount="indefinite" />
                {a.label} ✕
              </text>
            </g>
          ))}

          {/* ── Safe / Passed labels (right side) ────────────────────── */}
          <text x={CX + SHIELD + 14} y={CY - 18} textAnchor="start" fill="#ffffff" fontSize="9" fontWeight="600" opacity="0">
            <animate attributeName="opacity" values="0;0;0.7;0;0" keyTimes="0;0.44;0.50;0.58;1" dur="8s" repeatCount="indefinite" />
            SAFE ✓
          </text>
          <text x={CX + SHIELD + 14} y={CY + 28} textAnchor="start" fill="#ffffff" fontSize="9" fontWeight="600" opacity="0">
            <animate attributeName="opacity" values="0;0;0.7;0;0" keyTimes="0;0.44;0.50;0.58;1" dur="9.4s" begin="3s" repeatCount="indefinite" />
            PASSED ✓
          </text>

          {/* ── "Every request logged" label ─────────────────────────── */}
          <text x={CX} y={CY + SHIELD + 55} textAnchor="middle" fill="rgba(147,197,253,0.55)" fontSize="8" fontWeight="700" letterSpacing="0.2em">
            EVERY REQUEST LOGGED
          </text>
        </svg>

        {/* ── Column labels ──────────────────────────────────────────── */}
        <div className="absolute z-30" style={{ left: `${(110 / 1100) * 100}%`, top: "-28px", transform: "translateX(-50%)" }}>
          <span className="text-[11px] font-bold uppercase tracking-[0.18em] text-white/50">AI Requests</span>
        </div>
        <div className="absolute z-30" style={{ left: `${(990 / 1100) * 100}%`, top: "-28px", transform: "translateX(-50%)" }}>
          <span className="text-[11px] font-bold uppercase tracking-[0.18em] text-white/50">Agentic Calls</span>
        </div>

        {/* ── Left node tiles (AI request sources) ───────────────────── */}
        {L.map((node, i) => (
          <div
            key={`ln${i}`}
            className="absolute -translate-x-1/2 -translate-y-1/2 z-10"
            style={{ left: `${(node.x / 1100) * 100}%`, top: `${(node.y / 620) * 100}%` }}
          >
            <div className="bg-[#111] border border-white/[0.08] rounded-2xl w-[64px] h-[64px] flex flex-col items-center justify-center gap-1 shadow-[0_0_24px_rgba(16,108,236,0.08)] hover:border-[#106CEC]/30 transition-colors">
              <node.Icon className="h-[22px] w-[22px] text-[#60a5fa]/60" />
              <span className="text-[8px] text-white/25 leading-tight text-center px-1">{node.label}</span>
            </div>
          </div>
        ))}

        {/* ── Right node tiles (safe agentic calls) ──────────────────── */}
        {R.map((node, i) => (
          <div
            key={`rn${i}`}
            className="absolute -translate-x-1/2 -translate-y-1/2 z-10"
            style={{ left: `${(node.x / 1100) * 100}%`, top: `${(node.y / 620) * 100}%` }}
          >
            <div className="bg-[#111] border border-white/[0.08] rounded-2xl w-[64px] h-[64px] flex flex-col items-center justify-center gap-1 shadow-[0_0_24px_rgba(255,255,255,0.04)] hover:border-white/20 transition-colors">
              <node.Icon className="h-[22px] w-[22px] text-white/50" />
              <span className="text-[8px] text-white/25 leading-tight text-center px-1">{node.label}</span>
            </div>
          </div>
        ))}

        {/* ── Bottom center tiles (governance -every request) ────────── */}
        {B.map((node, i) => (
          <div
            key={`bn${i}`}
            className="absolute -translate-x-1/2 -translate-y-1/2 z-10"
            style={{ left: `${(node.x / 1100) * 100}%`, top: `${(node.y / 620) * 100}%` }}
          >
            <div className="bg-[#111] border border-[#106CEC]/20 rounded-2xl w-[68px] h-[68px] flex flex-col items-center justify-center gap-1 shadow-[0_0_20px_rgba(16,108,236,0.08)] hover:border-[#106CEC]/30 transition-colors">
              <node.Icon className="h-[22px] w-[22px] text-[#93c5fd]/55" />
              <span className="text-[8px] text-[#93c5fd]/35 leading-tight text-center px-1 font-medium">{node.label}</span>
            </div>
          </div>
        ))}

        {/* ── Center UMAI orb ────────────────────────────────────────── */}
        <div
          className="absolute -translate-x-1/2 -translate-y-1/2 z-20"
          style={{ left: "50%", top: `${(CY / 620) * 100}%` }}
        >
          <div
            className="w-[80px] h-[80px] rounded-full bg-[#106CEC] flex items-center justify-center overflow-hidden p-2.5"
            style={{ boxShadow: "0 0 100px rgba(16,108,236,0.75), 0 0 50px rgba(16,108,236,0.5), 0 0 200px rgba(16,108,236,0.25)" }}
          >
            <Image
              src="/assets/umailogo_white.png"
              alt="UMAI"
              width={60}
              height={60}
              className="w-full h-full object-contain"
            />
          </div>
        </div>
      </div>

      {/* ── Mobile fallback ──────────────────────────────────────────── */}
      <div className="md:hidden py-10">
        <div className="flex flex-col items-center gap-5">
          {/* Source label */}
          <span className="text-[9px] font-bold uppercase tracking-[0.2em] text-white/20">AI Requests</span>
          <div className="flex items-center gap-3">
            {[MessageSquare, Workflow, Monitor, Bot].map((Icon, i) => (
              <div key={i} className="bg-[#111] border border-white/[0.08] rounded-xl w-11 h-11 flex items-center justify-center">
                <Icon className="h-4 w-4 text-[#60a5fa]/50" />
              </div>
            ))}
          </div>
          <div className="flex flex-col items-center gap-1">
            <div className="w-px h-5 bg-gradient-to-b from-transparent to-[#106CEC]/40" />
            <span className="text-[9px] text-[#60a5fa]/70 font-semibold tracking-widest">GUARDRAILS</span>
            <div className="w-px h-5 bg-gradient-to-b from-[#106CEC]/40 to-transparent" />
          </div>
          <div
            className="w-16 h-16 rounded-full bg-[#106CEC] flex items-center justify-center overflow-hidden p-2"
            style={{ boxShadow: "0 0 60px rgba(16,108,236,0.6)" }}
          >
            <Image src="/assets/umailogo_white.png" alt="UMAI" width={40} height={40} className="w-full h-full object-contain" />
          </div>
          <div className="flex gap-8">
            <div className="flex flex-col items-center gap-1">
              <div className="w-px h-5 bg-gradient-to-b from-transparent to-white/40" />
              <span className="text-[8px] text-white/60 font-semibold tracking-widest">SAFE ✓</span>
              <div className="w-px h-3 bg-gradient-to-b from-white/40 to-transparent" />
            </div>
            <div className="flex flex-col items-center gap-1">
              <div className="w-px h-5 bg-gradient-to-b from-transparent to-[#60a5fa]/40" />
              <span className="text-[8px] text-[#93c5fd]/70 font-semibold tracking-widest">LOGGED</span>
              <div className="w-px h-3 bg-gradient-to-b from-[#60a5fa]/40 to-transparent" />
            </div>
          </div>
          <div className="flex items-center gap-6">
            <div className="flex flex-col items-center gap-1.5">
              <div className="flex items-center gap-2">
                {[Wrench, Globe, Zap].map((Icon, i) => (
                  <div key={i} className="bg-[#111] border border-white/[0.08] rounded-xl w-11 h-11 flex items-center justify-center">
                    <Icon className="h-4 w-4 text-white/50" />
                  </div>
                ))}
              </div>
              <span className="text-[8px] text-white/15 tracking-wider">Agentic Calls</span>
            </div>
            <div className="flex flex-col items-center gap-1.5">
              <div className="flex items-center gap-2">
                {[FileCheck2, LayoutDashboard].map((Icon, i) => (
                  <div key={i} className="bg-[#111] border border-[#106CEC]/15 rounded-xl w-11 h-11 flex items-center justify-center">
                    <Icon className="h-4 w-4 text-[#93c5fd]/50" />
                  </div>
                ))}
              </div>
              <span className="text-[8px] text-white/15 tracking-wider">Governance</span>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

function IndustryVisual({ industry }: { industry: number }) {
  const configs = [
    { Icon: Landmark, label: "Financial Services" },
    { Icon: HeartPulse, label: "Healthcare" },
    { Icon: Building2, label: "Insurance" },
    { Icon: Scale, label: "Public Sector" },
    { Icon: Factory, label: "Manufacturing" },
  ];
  const { Icon, label } = configs[industry];

  return (
    <div className="flex flex-col items-center gap-5 text-center">
      <div className="w-24 h-24 rounded-2xl bg-[#041a36] border border-[#106CEC]/35 flex items-center justify-center">
        <Icon className="h-10 w-10 text-[#60a5fa]" />
      </div>
      <p className="text-white/25 text-xs font-medium">{label}</p>
      <div className="flex items-center gap-2">
        <div className="h-1.5 w-1.5 rounded-full bg-[#106CEC] animate-pulse" />
        <p className="text-white/15 text-[10px]">UMAI Active</p>
      </div>
    </div>
  );
}
