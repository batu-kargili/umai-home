import type { LucideIcon } from "lucide-react";
import {
  BookOpen,
  Building2,
  FileCheck2,
  FileText,
  FlaskConical,
  GraduationCap,
  Mail,
  Monitor,
  Scale,
  Server,
  ShieldCheck,
} from "lucide-react";

export const CONTACT_URL = "/contact";

export type MarketingNavVariant = "split" | "stacked" | "compact";
export type MarketingNavSectionStyle = "list" | "tiles";

export interface MarketingNavLink {
  label: string;
  href: string;
  description: string;
  icon: LucideIcon;
}

export interface MarketingNavSection {
  heading: string;
  style: MarketingNavSectionStyle;
  items: MarketingNavLink[];
}

export interface MarketingNavFeature {
  eyebrow: string;
  title: string;
  body: string;
  ctaLabel: string;
  href: string;
  imageSrc: string;
  imageAlt: string;
}

export interface MarketingNavDropdown {
  label: string;
  variant: MarketingNavVariant;
  align?: "center" | "right";
  sections: MarketingNavSection[];
  feature?: MarketingNavFeature;
}

export const MARKETING_NAV_ITEMS: MarketingNavDropdown[] = [
  {
    label: "Platform",
    variant: "stacked",
    sections: [
      {
        heading: "Platform Capabilities",
        style: "list",
        items: [
          {
            label: "UMAI Platform (On-Prem)",
            href: "/platform",
            description: "Explore the control plane for sovereign and customer-managed deployment.",
            icon: Server,
          },
          {
            label: "Testing & Evaluation",
            href: "/platform/testing-evaluation",
            description: "Run benchmark suites, inspect outcomes, and tune guardrails before rollout.",
            icon: FlaskConical,
          },
          {
            label: "Monitoring & Audit Ledger",
            href: "/features/audit-ledger-evidence",
            description: "Trace governed runtime activity with tamper-evident evidence and exports.",
            icon: FileCheck2,
          },
          {
            label: "Browser Extension",
            href: "/browser-extension",
            description: "Govern ChatGPT, Claude, Gemini, and other browser AI surfaces.",
            icon: Monitor,
          },
        ],
      },
      {
        heading: "Quick Start",
        style: "tiles",
        items: [
          {
            label: "On-Prem Architecture",
            href: "/docs#on-prem-architecture",
            description: "Review the deployment topology and service boundaries.",
            icon: Server,
          },
          {
            label: "Guardrail Testing",
            href: "/docs#test-guardrails",
            description: "Validate deployed guardrails before application integration.",
            icon: FlaskConical,
          },
          {
            label: "Monitoring & Alerts",
            href: "/docs#monitoring-alerts",
            description: "Inspect detections, latency, and alert thresholds.",
            icon: FileCheck2,
          },
          {
            label: "Browser Extension Docs",
            href: "/docs#browser-extension",
            description: "See rollout guidance and managed browser coverage.",
            icon: Monitor,
          },
        ],
      },
    ],
    feature: {
      eyebrow: "Platform Overview",
      title: "One governed runtime for apps, agents, and browser AI",
      body: "See how on-prem deployment, runtime controls, and evidence workflows fit together in the UMAI platform.",
      ctaLabel: "Explore platform",
      href: "/platform",
      imageSrc: "/assets/home/TestGuardrails.png",
      imageAlt: "UMAI platform testing and evaluation view",
    },
  },
  {
    label: "Solutions",
    variant: "split",
    sections: [
      {
        heading: "Advisory Services",
        style: "list",
        items: [
          {
            label: "Policy & Guardrail Design",
            href: "/solutions/policy-guardrail-design",
            description: "Turn policy intent into runtime guardrails, approval logic, and enforceable control patterns.",
            icon: ShieldCheck,
          },
          {
            label: "Red Teaming",
            href: "/solutions/red-teaming",
            description: "Pressure-test prompts, outputs, and tool paths to surface unsafe model behavior early.",
            icon: FlaskConical,
          },
          {
            label: "MAESTRO Framework Implementation",
            href: "/solutions/maestro-framework-implementation",
            description: "Apply MAESTRO-aligned control design across prompts, tools, memory, and agent boundaries.",
            icon: Scale,
          },
          {
            label: "AI Governance",
            href: "/solutions/ai-governance",
            description: "Build operating models for oversight, evidence, and governed deployment at enterprise scale.",
            icon: FileCheck2,
          },
        ],
      },
      {
        heading: "Delivery Focus",
        style: "list",
        items: [
          {
            label: "Runtime Guardrails",
            href: "/features/real-time-guardrails",
            description: "Inline PRE_LLM and POST_LLM enforcement for live traffic.",
            icon: ShieldCheck,
          },
          {
            label: "Governance Oversight",
            href: "/features/compliance-human-oversight",
            description: "Human review, justification paths, and operator control.",
            icon: Scale,
          },
          {
            label: "Audit Evidence",
            href: "/features/audit-ledger-evidence",
            description: "Evidence packs and traceability for audit and investigations.",
            icon: FileCheck2,
          },
          {
            label: "Browser Governance",
            href: "/browser-extension",
            description: "Extend policy enforcement from APIs to browser AI usage.",
            icon: Monitor,
          },
        ],
      },
    ],
    feature: {
      eyebrow: "Engagement Design",
      title: "From policy design to production controls",
      body: "Work through guardrail scope, testing, evidence, and rollout planning with security, compliance, and platform teams.",
      ctaLabel: "Plan an engagement",
      href: CONTACT_URL,
      imageSrc: "/assets/home/Policies.png",
      imageAlt: "UMAI policy and guardrail design interface",
    },
  },
  {
    label: "Resources",
    variant: "stacked",
    sections: [
      {
        heading: "Explore Resources",
        style: "list",
        items: [
          {
            label: "Blog",
            href: "/blog",
            description: "Read engineering, security, and compliance perspectives from the UMAI team.",
            icon: BookOpen,
          },
          {
            label: "Learn",
            href: "/docs#what-is-umai",
            description: "Start with the UMAI model, platform structure, and core governance workflows.",
            icon: GraduationCap,
          },
          {
            label: "Documentation",
            href: "/docs",
            description: "Dive into deployment, integrations, monitoring, browser governance, and operations.",
            icon: FileText,
          },
        ],
      },
      {
        heading: "Start Here",
        style: "tiles",
        items: [
          {
            label: "Platform Structure",
            href: "/docs#platform-structure",
            description: "Understand the environment, project, and guardrail object model.",
            icon: Server,
          },
          {
            label: "Guardrails",
            href: "/docs#guardrails",
            description: "Learn how policies become versioned runtime guardrails.",
            icon: ShieldCheck,
          },
          {
            label: "Evaluations",
            href: "/docs#evaluations",
            description: "Measure guardrail accuracy and decision behavior on test datasets.",
            icon: FlaskConical,
          },
          {
            label: "Browser Extension",
            href: "/docs#browser-extension",
            description: "Review managed rollout guidance for browser AI governance.",
            icon: Monitor,
          },
        ],
      },
    ],
    feature: {
      eyebrow: "Featured Resource",
      title: "Learn the UMAI platform through docs and guided workflows",
      body: "Use the docs to move from platform basics into guardrail design, testing, monitoring, and browser governance.",
      ctaLabel: "Open docs",
      href: "/docs",
      imageSrc: "/assets/home/evaluation_view.png",
      imageAlt: "UMAI documentation and evaluation workspace",
    },
  },
  {
    label: "Company",
    variant: "compact",
    align: "right",
    sections: [
      {
        heading: "Company",
        style: "list",
        items: [
          {
            label: "About Us",
            href: "/about",
            description: "Learn how UMAI approaches governed enterprise AI deployment.",
            icon: Building2,
          },
          {
            label: "Contact Us",
            href: CONTACT_URL,
            description: "Talk to the team about platform rollout, controls, or commercial planning.",
            icon: Mail,
          },
        ],
      },
    ],
  },
];
