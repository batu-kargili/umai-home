import { BrainCircuit, Languages, ScrollText, Sigma } from "lucide-react";

import type { UmaiInnovation } from "@/content/umai-content-types";

export const umaiInnovations: UmaiInnovation[] = [
  {
    title: "Federated Guardrail Learning",
    slug: "federated-guardrail-learning",
    href: "/innovation/federated-guardrail-learning",
    shortDescription: "Distributed policy improvement without centralizing sensitive traffic",
    icon: BrainCircuit,
    theme: "azure",
    detailPage: "/innovation/federated-guardrail-learning",
    seoTitle: "Federated Guardrail Learning",
    seoDescription:
      "Research direction for improving guardrail quality across environments without centralizing sensitive enterprise data.",
    heroLabel: "R&D track",
    heroValueProp:
      "Improve governance models across deployments while keeping sensitive enterprise traffic local.",
    relatedFeatureSlugs: [
      "real-time-guardrails",
      "sovereign-deployment",
      "audit-ledger-evidence",
    ],
    sections: [
      {
        id: "what-it-does",
        title: "What it does",
        intro:
          "Federated Guardrail Learning explores how policy improvements can be shared without pooling raw enterprise traffic.",
        bullets: [
          "Learn from distributed policy outcomes across isolated environments.",
          "Prioritize patterns, thresholds, and control refinements instead of copying raw prompts.",
          "Support sector-specific improvement while preserving local data boundaries.",
        ],
      },
      {
        id: "why-it-matters",
        title: "Why it matters",
        intro:
          "The best governance signals are often trapped inside environments that cannot share their underlying data.",
        bullets: [
          "Reduce the tension between control improvement and data residency constraints.",
          "Enable cross-deployment learning for regulated and sovereign environments.",
          "Create a path for safer policy evolution without weakening trust boundaries.",
        ],
      },
      {
        id: "key-capabilities",
        title: "Key capabilities",
        intro:
          "This research direction focuses on secure coordination rather than centralized training.",
        bullets: [
          "Policy update aggregation from distributed environments.",
          "Local retention of sensitive examples and decision context.",
          "Evidence-aware feedback loops for guardrail refinement.",
        ],
      },
      {
        id: "use-cases",
        title: "Example enterprise use cases",
        intro:
          "Federated learning is most relevant where many environments face similar control problems under strict data boundaries.",
        bullets: [
          "Multi-country deployments with local residency requirements.",
          "Cross-subsidiary governance improvement under separate trust boundaries.",
          "Regulated sector customers that want stronger controls without sharing traffic externally.",
        ],
      },
      {
        id: "compliance-value",
        title: "Related compliance or governance value",
        intro:
          "Research value depends on preserving sovereignty while improving policy quality.",
        bullets: [
          "Supports a governance narrative that respects data minimization and residency limits.",
          "Provides a cleaner improvement path for sovereign and private deployments.",
          "Aligns control evolution with customer-controlled evidence boundaries.",
        ],
      },
      {
        id: "integrations",
        title: "Related integrations",
        intro:
          "Any federated approach would need to work across already-isolated runtime and evidence systems.",
        bullets: [
          "Private cloud and on-prem UMAI environments.",
          "Local policy stores and evidence records.",
          "Customer-governed update approval workflows.",
        ],
      },
      {
        id: "cta",
        title: "CTA section",
        intro:
          "Engage if your program needs stronger guardrails without weakening sovereignty constraints.",
        bullets: [
          "Identify the deployments where centralized learning is not acceptable.",
          "Define what policy signals can be shared safely.",
          "Evaluate candidate feedback loops with security and compliance owners.",
        ],
      },
    ],
  },
  {
    title: "Regulation-to-Policy Synthesis",
    slug: "regulation-to-policy-synthesis",
    href: "/innovation/regulation-to-policy-synthesis",
    shortDescription: "Translate regulatory text into operational control drafts",
    icon: ScrollText,
    theme: "cobalt",
    detailPage: "/innovation/regulation-to-policy-synthesis",
    seoTitle: "Regulation-to-Policy Synthesis",
    seoDescription:
      "Research track for turning legal and policy text into draft operational controls and review-ready governance artifacts.",
    heroLabel: "R&D track",
    heroValueProp:
      "Shorten the path from regulatory language to draft operational controls that teams can review and refine.",
    relatedFeatureSlugs: [
      "compliance-human-oversight",
      "audit-ledger-evidence",
      "real-time-guardrails",
    ],
    sections: [
      {
        id: "what-it-does",
        title: "What it does",
        intro:
          "Regulation-to-Policy Synthesis explores how legal obligations can be converted into draft guardrails and oversight rules.",
        bullets: [
          "Transform regulation and internal policy text into candidate control statements.",
          "Map clauses to review questions, policy actions, and evidence expectations.",
          "Generate drafts for operator validation instead of treating compliance work as a blank page.",
        ],
      },
      {
        id: "why-it-matters",
        title: "Why it matters",
        intro:
          "Compliance teams often know the obligation but still need help translating it into runtime behavior.",
        bullets: [
          "Reduce the delay between new regulation and usable operational policy drafts.",
          "Make policy interpretation more consistent across legal, GRC, and platform teams.",
          "Create a stronger bridge between regulatory change and enforcement rollout.",
        ],
      },
      {
        id: "key-capabilities",
        title: "Key capabilities",
        intro: "The emphasis is on reviewable synthesis, not blind automation.",
        bullets: [
          "Clause extraction and obligation mapping.",
          "Draft control suggestions linked to evidence expectations.",
          "Human validation workflows before policy publication.",
        ],
      },
      {
        id: "use-cases",
        title: "Example enterprise use cases",
        intro:
          "The synthesis model is most useful where regulations move faster than implementation teams can translate them manually.",
        bullets: [
          "EU AI Act readiness programs that need policy decomposition by obligation type.",
          "Cross-border privacy programs mapping regional rules into common control templates.",
          "Internal policy refresh cycles that need faster drafting for platform teams.",
        ],
      },
      {
        id: "compliance-value",
        title: "Related compliance or governance value",
        intro:
          "This research could make compliance programs more operational and less document-bound.",
        bullets: [
          "Improve traceability from legal source text to implemented controls.",
          "Support more consistent policy authoring across jurisdictions and teams.",
          "Keep human accountability central to final policy approval.",
        ],
      },
      {
        id: "integrations",
        title: "Related integrations",
        intro:
          "Policy synthesis needs to connect the legal source, the control draft, and the evidence model.",
        bullets: [
          "Policy authoring workflows and review queues.",
          "UMAI guardrail definitions and evidence mappings.",
          "Governance reporting tied back to source obligations.",
        ],
      },
      {
        id: "cta",
        title: "CTA section",
        intro:
          "Engage if your governance team needs a faster bridge between regulation and enforceable control logic.",
        bullets: [
          "Select the regulation set that causes the most translation friction.",
          "Define which outputs should be suggested versus manually authored.",
          "Review draft control mappings with legal and platform owners together.",
        ],
      },
    ],
  },
  {
    title: "Cross-Lingual Governance",
    slug: "cross-lingual-governance",
    href: "/innovation/cross-lingual-governance",
    shortDescription: "Consistent policy behavior across multilingual AI traffic",
    icon: Languages,
    theme: "cyan",
    detailPage: "/innovation/cross-lingual-governance",
    seoTitle: "Cross-Lingual Governance",
    seoDescription:
      "Research direction for maintaining consistent AI governance behavior across multilingual prompts, responses, and policy contexts.",
    heroLabel: "R&D track",
    heroValueProp:
      "Preserve consistent governance intent even when prompts, outputs, and policy context shift across languages.",
    relatedFeatureSlugs: [
      "real-time-guardrails",
      "browser-ai-governance",
      "compliance-human-oversight",
    ],
    sections: [
      {
        id: "what-it-does",
        title: "What it does",
        intro:
          "Cross-Lingual Governance explores how UMAI can maintain policy fidelity across multilingual usage patterns.",
        bullets: [
          "Evaluate whether control intent remains stable across language shifts.",
          "Reduce blind spots caused by prompt, output, or browser usage in multiple languages.",
          "Support governance coverage for global organizations without splitting policy into isolated islands.",
        ],
      },
      {
        id: "why-it-matters",
        title: "Why it matters",
        intro:
          "Multilingual AI traffic can weaken policy consistency if governance depends too heavily on one language context.",
        bullets: [
          "Preserve control quality for global teams and customer-facing systems.",
          "Reduce inconsistent enforcement that creates governance gaps between regions.",
          "Support regulatory and internal policy expectations across local operating contexts.",
        ],
      },
      {
        id: "key-capabilities",
        title: "Key capabilities",
        intro:
          "The research goal is semantic consistency, not just direct text translation.",
        bullets: [
          "Cross-lingual policy interpretation and control scoring.",
          "Localized evidence context for review and audit workflows.",
          "Comparison of policy outcomes across languages and environments.",
        ],
      },
      {
        id: "use-cases",
        title: "Example enterprise use cases",
        intro:
          "The strongest need appears in multilingual support, compliance, and employee-AI environments.",
        bullets: [
          "Global support organizations serving customers in multiple languages.",
          "Cross-border enterprises governing employee AI usage across regional teams.",
          "Programs that need consistent policy interpretation for English and non-English AI traffic.",
        ],
      },
      {
        id: "compliance-value",
        title: "Related compliance or governance value",
        intro:
          "Governance quality suffers if policies only work cleanly in one language context.",
        bullets: [
          "Improve consistency of policy enforcement across jurisdictions and business units.",
          "Reduce audit friction caused by uneven multilingual controls.",
          "Support governance programs in regions where local language coverage is mandatory.",
        ],
      },
      {
        id: "integrations",
        title: "Related integrations",
        intro:
          "Cross-lingual governance needs to sit on the same runtime and evidence foundation as core controls.",
        bullets: [
          "Runtime guardrail evaluation paths.",
          "Browser AI governance surfaces used by multilingual teams.",
          "Audit records enriched with language-aware context.",
        ],
      },
      {
        id: "cta",
        title: "CTA section",
        intro:
          "Engage if multilingual traffic is creating policy gaps or review overhead in your AI program.",
        bullets: [
          "Identify where language switching weakens current control confidence.",
          "Define the languages and workflows that need first-class governance coverage.",
          "Evaluate semantic consistency with policy, legal, and operations teams together.",
        ],
      },
    ],
  },
  {
    title: "Formal Verification",
    slug: "formal-verification",
    href: "/innovation/formal-verification",
    shortDescription: "Reason about policy completeness and control invariants",
    icon: Sigma,
    theme: "azure",
    detailPage: "/innovation/formal-verification",
    seoTitle: "Formal Verification for AI Governance",
    seoDescription:
      "Research track focused on proving policy completeness, invariants, and control behavior for enterprise AI governance systems.",
    heroLabel: "R&D track",
    heroValueProp:
      "Explore mathematically grounded assurance for the policies that govern high-impact AI systems.",
    relatedFeatureSlugs: [
      "real-time-guardrails",
      "ai-agent-tool-security",
      "compliance-human-oversight",
    ],
    sections: [
      {
        id: "what-it-does",
        title: "What it does",
        intro:
          "Formal Verification explores whether governance policies can be checked for completeness, conflict, and invariant coverage before deployment.",
        bullets: [
          "Reason about policy contradictions and missing control paths.",
          "Model whether critical invariants hold across runtime decisions and agent actions.",
          "Support stronger assurance for systems where control gaps have outsized impact.",
        ],
      },
      {
        id: "why-it-matters",
        title: "Why it matters",
        intro:
          "Some AI programs need stronger assurance than testing and manual review alone can provide.",
        bullets: [
          "Reduce the risk of hidden policy conflicts in high-impact deployments.",
          "Strengthen confidence in guardrails that protect sensitive actions or data classes.",
          "Create a path toward more rigorous governance evidence for critical environments.",
        ],
      },
      {
        id: "key-capabilities",
        title: "Key capabilities",
        intro:
          "The focus is on proving important properties about policies rather than only observing runtime outcomes.",
        bullets: [
          "Policy graph analysis for gaps and contradictions.",
          "Invariant checking for action scope and escalation conditions.",
          "Coverage reasoning for critical governance scenarios.",
        ],
      },
      {
        id: "use-cases",
        title: "Example enterprise use cases",
        intro:
          "Formal methods matter most where AI systems interact with sensitive workflows and strong assurance is required.",
        bullets: [
          "Agent systems with state-changing tools and strict execution boundaries.",
          "Regulated decision support environments with explicit review constraints.",
          "Critical sector deployments where policy failure needs stronger pre-deployment scrutiny.",
        ],
      },
      {
        id: "compliance-value",
        title: "Related compliance or governance value",
        intro:
          "Verification research could strengthen how organizations explain control design and completeness.",
        bullets: [
          "Improve confidence that critical policies are not missing required enforcement paths.",
          "Support higher-assurance governance narratives for boards, regulators, and auditors.",
          "Complement runtime evidence with pre-deployment assurance artifacts.",
        ],
      },
      {
        id: "integrations",
        title: "Related integrations",
        intro:
          "Verification needs to connect policy definitions, runtime behavior, and evidence outputs.",
        bullets: [
          "Guardrail and agent policy definitions.",
          "Operator review rules and escalation logic.",
          "Evidence artifacts that record the verified policy version in use.",
        ],
      },
      {
        id: "cta",
        title: "CTA section",
        intro:
          "Engage if your governance program needs stronger assurance for a narrow set of critical AI controls.",
        bullets: [
          "Identify the policies that require formal assurance instead of broad simulation alone.",
          "Define the invariants that must always hold in production.",
          "Evaluate how verification artifacts should complement runtime evidence.",
        ],
      },
    ],
  },
];

export function getInnovationBySlug(slug: string) {
  return umaiInnovations.find((innovation) => innovation.slug === slug);
}
