import {
  BrainCircuit,
  Building2,
  Factory,
  FileCheck2,
  HeartPulse,
  Landmark,
  LayoutDashboard,
  Monitor,
  Scale,
  Server,
  Workflow,
} from "lucide-react";

export const PILOT_URL = "/contact";
export const CONTACT_URL = "/contact";
export const WEBINAR_URL = "/events/eu-ai-act-enforcement";

export const NAV_LINKS = [
  { label: "Why UMAI", href: "#why-umai" },
  { label: "Products", href: "#products" },
  { label: "Solutions", href: "#solutions" },
  { label: "About", href: "/about" },
  { label: "Resources", href: "/docs" },
  { label: "Contact", href: "/contact" },
];

export const VALUE_PROPS = [
  {
    title: "Eliminate AI compliance gaps",
    body: "Replace ad hoc policy reviews with one inline enforcement platform across every AI surface.",
    link: "See how regulated enterprises close compliance gaps",
    href: "/blog/eliminate-ai-compliance-gaps",
  },
  {
    title: "Enforce policy at the source",
    body: "Stop data leakage and prompt injection before they reach the model, not after damage is done.",
    link: "See how healthcare teams maintain AI governance",
    href: "/blog/enforce-policy-at-the-source",
  },
  {
    title: "Be audit-ready for AI now",
    body: "Give regulators, auditors, and compliance teams tamper-evident evidence in real time.",
    link: "See how governance teams compress audit cycles",
    href: "/blog/audit-ready-tamper-evident-evidence",
  },
];

export const HERO_RESEARCH = {
  eyebrow: "AI under attack",
  sourceLabel: "IBM IBV report",
  sourceTitle: "Elusive threats, elastic defense: Securing AI at scale",
  sourceHref:
    "https://www.ibm.com/thought-leadership/institute-business-value/en-us/report/agentic-ai-cybersecurity",
  publishedLabel: "Published 22 March 2026",
  stats: [
    {
      value: "61%",
      body: "of organizations have seen their AI-related models, assets, services, or data attacked within the last 12 months.",
    },
    {
      value: "25%",
      body: "of AI initiatives have been cancelled, postponed, or failed to scale because of security concerns over the same period.",
    },
  ],
};

export const TICKER_ITEMS = [
  {
    text: "Runtime controls for prompt injection and data leakage",
    href: "/blog/runtime-controls-prompt-injection-data-leakage",
  },
  {
    text: "Evidence-first AI governance for regulated companies",
    href: "/blog/evidence-first-ai-governance",
  },
  {
    text: "Browser AI governance beyond the API perimeter",
    href: "/blog/browser-ai-governance-beyond-api-perimeter",
  },
  {
    text: "EU AI Act readiness without operational drag",
    href: "/blog/eu-ai-act-readiness-without-operational-drag",
  },
  {
    text: "Enterprise control for apps, agents, and copilots",
    href: "/blog/enterprise-control-apps-agents-copilots",
  },
  {
    text: "Policy enforcement in milliseconds, not minutes",
    href: "/blog/policy-enforcement-milliseconds",
  },
];

export const USE_CASES = [
  {
    id: "apps-copilots",
    label: "Apps and Copilots",
    heading: "Power resilient AI apps with inline policy enforcement",
    body: "UMAI gives AI apps and copilots a runtime governance layer that can inspect requests, responses, and tool calls before they become production risk.",
    bullets: [
      "Intercept every prompt and response in the request path",
      "Connect enterprise apps and AI models with pre-built integrations",
      "Govern AI interactions so downstream systems receive trusted output",
    ],
    cta: "Get a practical guide",
    ctaHref: "/docs",
    Icon: LayoutDashboard,
    image: "/assets/home/Policies.png",
  },
  {
    id: "ai-agents",
    label: "AI Agents",
    heading: "Control what AI agents can do before they do it",
    body: "UMAI enforces tool-level scope control for autonomous agents, blocking unsafe or out-of-policy actions before they reach external APIs or internal systems.",
    bullets: [
      "Whitelist and restrict all tool calls made by AI agents",
      "Deny unsafe or out-of-scope actions at the policy layer",
      "Audit every agentic decision with full forensic evidence",
    ],
    cta: "Explore agent security",
    ctaHref: "/platform",
    Icon: Workflow,
    image: "/assets/home/RealTimeAlerts.png",
  },
  {
    id: "browser-ai",
    label: "Browser AI Governance",
    heading: "Govern employee use of ChatGPT, Gemini, and Claude",
    body: "A managed browser control layer enforces policy on public AI tools without app rewrites or infrastructure changes.",
    bullets: [
      "Apply enterprise policies across browser-based AI tools",
      "Block unauthorized data submissions before they leave the browser",
      "Capture evidence for every browser AI interaction",
    ],
    cta: "See browser extension",
    ctaHref: "/browser-extension",
    Icon: Monitor,
    image: "/assets/home/BrowserExtentionMonitoring.png",
  },
  {
    id: "compliance",
    label: "Compliance and Evidence",
    heading: "From AI usage to audit-ready evidence automatically",
    body: "Every runtime decision becomes a governance event. UMAI maps evidence to enterprise compliance requirements so audit and GRC teams work from the same source of truth.",
    bullets: [
      "Policy workflows aligned to enterprise compliance requirements",
      "Hash-chained audit ledger with tamper-evident evidence",
      "Exportable evidence packs for audit and governance review",
    ],
    cta: "Explore compliance features",
    ctaHref: "/platform",
    Icon: FileCheck2,
    image: "/assets/home/Evaluation.png",
  },
  {
    id: "any-environment",
    label: "Any Environment",
    heading: "Deploy UMAI where your data must stay",
    body: "UMAI supports strict sovereignty, internal security requirements, and enterprise deployment models from SaaS to private cloud to on-prem and air-gapped environments.",
    bullets: [
      "SaaS, private cloud, customer VPC, and on-prem Kubernetes",
      "Air-gapped deployment for maximum sovereignty",
      "Deployment flexibility as a core capability, not an upsell",
    ],
    cta: "See deployment options",
    ctaHref: "/platform",
    Icon: Server,
    image: "",
  },
];

export const INDUSTRIES = [
  {
    id: "public-sector",
    label: "Public Sector",
    heading: "AI security for the public sector",
    body: "Customized AI security and governance for government agencies, municipalities, and public institutions that need sovereign deployment, strict policy enforcement, and defensible operational oversight.",
    outcomes: [
      "Enforce approved AI usage policies across staff, contractors, and public-facing services",
      "Keep sensitive citizen, case, and internal operational data within approved boundaries",
      "Support audit, procurement, and regulatory review with clear evidence trails",
    ],
    examples: [
      "Citizen service assistants: block personal identifiers, case records, or benefit data from being submitted to unapproved models.",
      "Internal policy copilots: enforce source restrictions so AI answers cite approved internal regulations and procedural documents.",
      "Public safety and case management workflows: require human review before AI-generated summaries influence enforcement, eligibility, or resource decisions.",
    ],
    cta: "Discuss public sector controls",
    ctaHref: CONTACT_URL,
    Icon: Scale,
    image: "/assets/enterprise-4.png",
  },
  {
    id: "financial",
    label: "Financial Services",
    heading: "AI security for financial services",
    body: "Customized AI security and governance for banks, payment providers, and fintech teams that need to protect customer data, control AI-assisted decisions, and prove oversight to risk, compliance, and audit functions.",
    outcomes: [
      "Prevent account data, transaction history, and internal risk models from leaking into external LLMs",
      "Apply approval and human-review policies to high-impact customer, fraud, and trading workflows",
      "Produce tamper-evident evidence for model usage, policy decisions, and regulatory review",
    ],
    examples: [
      "Retail banking copilots: block prompts containing account numbers, card data, or suspicious transfer instructions before they reach the model.",
      "Fraud operations assistants: require human sign-off when AI recommendations could freeze an account, decline a payment, or escalate a fraud case.",
      "Wealth and trading research tools: restrict use of proprietary research, portfolio positions, and material non-public information in prompts and responses.",
    ],
    cta: "Discuss financial services controls",
    ctaHref: CONTACT_URL,
    Icon: Landmark,
    image: "/assets/enterprise-2.png",
  },
  {
    id: "healthcare",
    label: "Healthcare",
    heading: "AI security for healthcare",
    body: "Customized AI security and governance for providers, payers, digital health platforms, and healthcare operations teams handling PHI, clinical workflows, and regulated patient communications.",
    outcomes: [
      "Keep PHI, diagnosis details, and care notes out of unauthorized AI systems",
      "Apply workflow-specific policies for clinical support, patient engagement, and administrative automation",
      "Maintain evidence for privacy, patient safety, and internal governance review",
    ],
    examples: [
      "Clinical documentation assistants: redact PHI and block unsupported treatment suggestions before model output reaches clinicians.",
      "Patient support chatbots: prevent disclosure of medical records, prescription data, or triage decisions to public AI services.",
      "Revenue cycle automation: monitor claims summaries, prior authorization drafts, and payer correspondence for privacy and compliance risks.",
    ],
    cta: "Discuss healthcare controls",
    ctaHref: CONTACT_URL,
    Icon: HeartPulse,
    image: "/assets/enterprise-health.png",
  },
  {
    id: "insurance",
    label: "Insurance",
    heading: "AI security for insurance",
    body: "Customized AI security and governance for carriers, brokers, MGAs, and claims teams using AI across underwriting, FNOL, claims handling, and customer operations.",
    outcomes: [
      "Protect policyholder data, claim files, and underwriting models across AI-assisted workflows",
      "Control when AI can draft, recommend, or classify decisions in underwriting and claims",
      "Create auditable evidence for regulators, internal risk teams, and dispute reviews",
    ],
    examples: [
      "Claims copilots: block leakage of claimant medical details, settlement strategy, or legal correspondence into unapproved AI tools.",
      "Underwriting assistants: require review when AI recommendations affect pricing, coverage terms, or rejection decisions.",
      "Broker servicing workflows: govern AI-generated customer emails and policy summaries so they stay within approved language and compliance boundaries.",
    ],
    cta: "Discuss insurance controls",
    ctaHref: CONTACT_URL,
    Icon: Building2,
    image: "/assets/enterprise-1.png",
  },
  {
    id: "manufacturing",
    label: "Manufacturing",
    heading: "AI security for manufacturing and industrial teams",
    body: "Customized AI security and governance for manufacturers, industrial operators, and supply chain teams using AI in engineering, operations, procurement, and service environments.",
    outcomes: [
      "Protect designs, process data, supplier terms, and trade secrets from AI-driven leakage",
      "Apply guardrails to engineering copilots, factory operations, and procurement workflows",
      "Give security and operations teams visibility into shadow AI use across plants and offices",
    ],
    examples: [
      "Engineering assistants: stop CAD specifications, BOM data, and process recipes from being pasted into external copilots.",
      "Maintenance and plant operations copilots: block unsafe instructions and require review for outputs that could affect equipment safety or production continuity.",
      "Supply chain workflows: monitor AI-generated supplier communications, sourcing analysis, and forecast summaries for confidential data exposure.",
    ],
    cta: "Discuss manufacturing controls",
    ctaHref: CONTACT_URL,
    Icon: Factory,
    image: "/assets/enterprise-3.png",
  },
];

export const DIFFERENTIATORS = [
  {
    card: {
      badge: "Localized intelligence",
      stat: "Localized PRE and POST LLM evaluation.",
      quote:
        "Most platforms claim multilingual support with English-first detection. UMAI evaluates prompts and responses in native language context so governance keeps its nuance.",
    },
    text: {
      titleParts: [
        { text: "Culturally aware. ", highlight: false },
        { text: "Uniquely", highlight: true },
        { text: " UMAI.", highlight: false },
      ],
      subtitle:
        "Localized evaluation matters because a prompt injection in Turkish or another regional language is not just an English attack translated.",
      bullets: [
        "Localized PRE and POST LLM evaluation",
        "Language-aware detection for regulated environments",
      ],
    },
    flip: false,
  },
  {
    card: {
      badge: "Complete coverage",
      stat: "Browser to API. Every surface governed.",
      quote:
        "UMAI governs browser-based AI usage and production AI flows from one policy engine and one evidence plane.",
    },
    text: {
      titleParts: [
        { text: "No ", highlight: false },
        { text: "gaps", highlight: true },
        { text: " in your governance.", highlight: false },
      ],
      subtitle:
        "From browser controls to hash-chained audit trails, the platform treats AI governance as a system, not a disconnected set of filters.",
      bullets: [
        "Browser governance and runtime API enforcement",
        "Hash-chain tamper-evident audit evidence",
        "Versioned guardrails and measurable evaluations",
      ],
    },
    flip: true,
  },
  {
    card: {
      badge: "Deploy anywhere",
      stat: "Full on-prem, air-gap, and compliance in one platform.",
      quote:
        "UMAI supports strict deployment control while still delivering modern governance capabilities for regulated environments.",
    },
    text: {
      titleParts: [
        { text: "Sovereign ", highlight: false },
        { text: "deployment", highlight: true },
        { text: ", built-in compliance.", highlight: false },
      ],
      subtitle:
        "Independent deployment flexibility, enterprise-grade control, and compliance readiness belong in the same system for regulated buyers.",
      bullets: [
        "Full on-prem and air-gapped deployment paths",
        "Compliance-aligned modules for enterprise governance",
        "No platform lock-in for critical AI operations",
      ],
    },
    flip: false,
  },
];

export const ACTION_CARDS = [
  {
    label: "Evaluate your AI integrations",
    body: "Assess existing AI integrations. UMAI maps apps, agents, and browser tools against policy and compliance expectations.",
    link: "Start evaluation",
    href: CONTACT_URL,
    image: "/assets/home/evaluation_view.png",
  },
  {
    label: "Contact a specialist",
    body: "Plan an AI governance rollout that aligns architecture, controls, and compliance requirements before production deployment.",
    link: "Contact a specialist",
    href: CONTACT_URL,
    image: "/assets/home/Contact Specialist.png",
  },
  {
    label: "Start your PoC",
    body: "Deploy UMAI with policies tuned to your environment and see runtime enforcement on your own AI traffic in days.",
    link: "Start your PoC",
    href: PILOT_URL,
    image: "/assets/home/poc.png",
  },
];

export const TRUST_ASSURANCE_POINTS = [
  "Map enterprise controls to EU AI Act, GDPR, KVKK, and NIST AI RMF obligations.",
  "Enforce runtime guardrails across prompts, responses, tool calls, and approvals.",
  "Produce tamper-evident evidence for internal governance review and external audit workflows.",
];

export const AUDIT_LEDGER_EVIDENCE_ITEMS = [
  {
    id: "audit",
    label: "Audit",
    title: "Every action is reviewable",
    body: "Actor, policy, and outcome stay attached to each governed AI decision.",
  },
  {
    id: "ledger",
    label: "Ledger",
    title: "Hash-linked event trail",
    body: "Records chain together so evidence remains tamper-evident by design.",
  },
  {
    id: "evidence",
    label: "Evidence",
    title: "Audit packs on demand",
    body: "Export ready material for GRC, internal audit, and regulator review.",
  },
];

export const AUDIT_LEDGER_EVIDENCE_FLOW = [
  "Runtime event",
  "Hash-linked entry",
  "Evidence pack",
];

export const TRUST_COMPLIANCE_FRAMEWORKS = [
  {
    id: "eu-ai-act",
    shortLabel: "EU",
    label: "EU AI Act",
    detail: "Risk and control mapping",
    logo: "/assets/EU_AI_Act_logo.png",
  },
  {
    id: "nist-ai-rmf",
    shortLabel: "NIST",
    label: "NIST AI RMF",
    detail: "Govern, map, measure, manage",
    logo: "/assets/nist-logo.png",
  },
  {
    id: "gdpr",
    shortLabel: "GDPR",
    label: "GDPR",
    detail: "Data and privacy enforcement",
    logo: "/assets/gdpr-logo.png",
  },
  {
    id: "kvkk",
    shortLabel: "KVKK",
    label: "KVKK",
    detail: "Turkiye-aligned policy routing",
    logo: "/assets/kvkk-logo.png",
  },
];

export const TRUST_SECURITY_FRAMEWORKS = [
  {
    id: "maestro",
    badge: "M",
    logo: "/assets/csa-logo.png",
    label: "MAESTRO",
    detail: "Threat modeling and control design for prompts, tools, memory, and agent action boundaries.",
  },
  {
    id: "microsoft-agt",
    logo: "/assets/microsoft-logo.png",
    label: "Microsoft AI Governance Toolkit (AGT)",
    detail: "Governance workflows, reviews, and evidence handling organized for enterprise control owners.",
  },
  {
    id: "owasp",
    logo: "/assets/owasp_logo.png",
    label: "OWASP Top 10 coverage",
    detail: "Runtime checks aligned to prompt injection, sensitive data exposure, unsafe outputs, and excessive agency risks.",
  },
];

export const TRUST_BLOG_CARDS = [
  {
    id: "maestro-brief",
    label: "Framework brief",
    title: "How UMAI applies MAESTRO to enterprise agent control",
    body: "See how the MAESTRO framework translates into runtime boundaries, tool controls, and reviewable evidence for enterprise AI agents.",
    href: "/solutions/maestro-framework-implementation",
  },
  {
    id: "microsoft-owasp-brief",
    label: "Coverage note",
    title: "How Microsoft AGT and OWASP guidance map to UMAI guardrails",
    body: "Explore how governance workflows, runtime controls, and evidence models align with practical enterprise AI governance programs.",
    href: "/solutions/ai-governance",
  },
];

export const FAQ_ITEMS = [
  {
    q: "We already use our cloud provider's built-in guardrails. Why do we need UMAI?",
    a: "Provider-native filters do not give you a governance layer you own, evidence designed for audits, or policy coverage across browser AI usage and multi-model environments.",
  },
  {
    q: "There are already tools that detect prompt injection. Isn't that enough?",
    a: "Prompt injection is only one risk. Regulated organizations also need browser governance, audit evidence, policy versioning, model-agnostic control, and localized evaluation.",
  },
  {
    q: "Can't our engineering team build guardrails into application code?",
    a: "App-specific checks do not create a centralized governance plane. You still miss consistent evidence, browser coverage, reusable policies, and shared operational visibility.",
  },
  {
    q: "What about latency impact?",
    a: "Runtime governance has to be practical. UMAI is designed so policy evaluation remains small relative to LLM response time, preserving product usability.",
  },
  {
    q: "We need our data to stay on-premises. Can UMAI support that?",
    a: "Yes. UMAI supports on-prem, private cloud, and controlled deployment models so regulated organizations can keep data and model interaction paths inside approved boundaries.",
  },
  {
    q: "How is UMAI different from traditional WAF or DLP tools?",
    a: "Traditional perimeter and DLP tools were not built for conversational AI flows, prompt semantics, model outputs, or agentic tool use. UMAI is designed for AI interaction governance.",
  },
];

export const PRIMARY_CTA_CLASS =
  "inline-flex items-center justify-center gap-2 rounded-xl bg-[#0056F9] px-6 py-4 text-base font-semibold text-white shadow-[0_12px_32px_rgba(0,86,249,0.32)] transition-all duration-200 hover:-translate-y-0.5 hover:bg-[#0B5BEA] hover:shadow-[0_20px_42px_rgba(0,86,249,0.36)]";

export const SECONDARY_CTA_CLASS =
  "inline-flex items-center justify-center gap-2 rounded-xl border border-white/12 bg-white/[0.03] px-6 py-4 text-base font-medium text-white/84 backdrop-blur-xl transition-colors duration-200 hover:border-white/18 hover:bg-white/[0.06] hover:text-white";

export const INDUSTRY_ICONS = [Scale, Landmark, HeartPulse, Building2, Factory];

export const HERO_NODE_ICONS = {
  BrainCircuit,
};
