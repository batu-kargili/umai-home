import { Bot, FileCheck2, Monitor, Scale, Server, ShieldCheck } from "lucide-react";

import type { UmaiFeature } from "@/content/umai-content-types";

export const umaiFeatures: UmaiFeature[] = [
  {
    title: "Real-Time Guardrails",
    slug: "real-time-guardrails",
    href: "/features/real-time-guardrails",
    shortDescription: "PRE_LLM and POST_LLM policy enforcement",
    icon: ShieldCheck,
    position: "left-top",
    theme: "cobalt",
    detailPage: "/features/real-time-guardrails",
    seoTitle: "Real-Time Guardrails for Enterprise AI",
    seoDescription:
      "Inline PRE_LLM and POST_LLM guardrails for prompt injection defense, jailbreak prevention, and sensitive data control.",
    heroLabel: "Inline runtime enforcement",
    heroValueProp:
      "Stop unsafe prompts and unsafe model output in the same request path before they become incidents.",
    capabilityHighlights: [
      "PRE_LLM policy gating",
      "POST_LLM response review",
      "Prompt injection defense",
      "Data leakage control",
    ],
    relatedSlugs: [
      "ai-agent-tool-security",
      "audit-ledger-evidence",
      "compliance-human-oversight",
    ],
    sections: [
      {
        id: "what-it-does",
        title: "What it does",
        intro:
          "Real-Time Guardrails place UMAI directly between the calling system and the model runtime.",
        bullets: [
          "Evaluate prompts before the model sees adversarial, out-of-scope, or sensitive input.",
          "Inspect responses before users, agents, or downstream systems consume model output.",
          "Apply deterministic and context-aware policies in the same control point.",
        ],
      },
      {
        id: "why-it-matters",
        title: "Why it matters",
        intro:
          "Enterprise AI failures usually happen in live traffic, not in static policy documents.",
        bullets: [
          "Reduce exposure to jailbreaks, prompt injection, and unsafe instructions at runtime.",
          "Prevent accidental disclosure of regulated or confidential data before it leaves the system.",
          "Give security and platform teams one enforcement point instead of fragmented controls.",
        ],
      },
      {
        id: "key-capabilities",
        title: "Key capabilities",
        intro:
          "The control layer is built for low-latency enforcement without forcing application rewrites.",
        bullets: [
          "Heuristic and context-aware evaluations for PRE_LLM and POST_LLM phases.",
          "Policy actions such as allow, warn, redact, block, and escalate.",
          "Versioned guardrails with draft, publish, and rollback workflows.",
          "Inline policy telemetry written to the UMAI evidence trail by default.",
        ],
      },
      {
        id: "use-cases",
        title: "Example enterprise use cases",
        intro:
          "Teams use Real-Time Guardrails where model behavior must stay inside clear operational boundaries.",
        bullets: [
          "Customer support assistants that must avoid account leakage and prohibited advice.",
          "Internal copilots that need role-aware controls for source access and output exposure.",
          "Workflow automation that must detect prompt injection before actions are triggered.",
        ],
      },
      {
        id: "compliance-value",
        title: "Related compliance or governance value",
        intro:
          "Runtime evidence is what turns policy intent into defensible control coverage.",
        bullets: [
          "Maps guardrail decisions to EU AI Act, GDPR, KVKK, and internal control requirements.",
          "Supports monitor-first rollouts before hard enforcement for policy tuning.",
          "Provides structured records that can be reviewed by compliance, legal, and audit teams.",
        ],
      },
      {
        id: "integrations",
        title: "Related integrations",
        intro:
          "The runtime path is designed to sit in front of common enterprise AI stacks.",
        bullets: [
          "LLM endpoints such as OpenAI, Azure OpenAI, Anthropic, and Vertex AI.",
          "Application backends, agent runtimes, and service APIs.",
          "Downstream SIEM, data warehouse, and governance reporting systems.",
        ],
      },
      {
        id: "cta",
        title: "CTA section",
        intro:
          "Start with one critical AI flow and move from monitor mode to enforce mode with evidence.",
        bullets: [
          "Map the prompt and response path for one production workflow.",
          "Define the initial guardrail pack and escalation rules.",
          "Run the first pilot with measurable latency and policy outcomes.",
        ],
      },
    ],
  },
  {
    title: "Browser AI Governance",
    slug: "browser-ai-governance",
    href: "/features/browser-ai-governance",
    shortDescription: "ChatGPT, Gemini and Claude usage governance",
    icon: Monitor,
    position: "left-middle",
    theme: "azure",
    detailPage: "/features/browser-ai-governance",
    seoTitle: "Browser AI Governance for Managed Enterprises",
    seoDescription:
      "Govern ChatGPT, Gemini, and Claude usage with local DLP scanning, warn or block actions, and managed rollout controls.",
    heroLabel: "Managed browser control",
    heroValueProp:
      "Make employee AI usage visible, enforceable, and auditable without changing the target apps.",
    capabilityHighlights: [
      "Managed browser rollout",
      "Local DLP scanning",
      "Warn, block, and redact flows",
      "Zero app code changes",
    ],
    relatedSlugs: [
      "compliance-human-oversight",
      "audit-ledger-evidence",
      "sovereign-deployment",
    ],
    sections: [
      {
        id: "what-it-does",
        title: "What it does",
        intro:
          "Browser AI Governance extends UMAI controls to employee interactions with browser-based AI tools.",
        bullets: [
          "Monitor usage across services such as ChatGPT, Gemini, and Claude.",
          "Evaluate outbound content locally before sensitive text leaves the browser.",
          "Apply actions including warn, block, redact, or require justification.",
        ],
      },
      {
        id: "why-it-matters",
        title: "Why it matters",
        intro:
          "Shadow AI usage grows faster than most enterprise policy programs can react.",
        bullets: [
          "Create visibility into employee AI behavior without banning productive tools outright.",
          "Reduce leakage of confidential, regulated, or customer data through consumer AI interfaces.",
          "Give security and compliance teams a managed rollout path instead of ad hoc controls.",
        ],
      },
      {
        id: "key-capabilities",
        title: "Key capabilities",
        intro:
          "The browser layer focuses on practical enterprise enforcement with low rollout friction.",
        bullets: [
          "Local inspection before transmission for stronger privacy handling.",
          "Per-site policy actions and operator review paths.",
          "Managed deployment through enterprise browser and endpoint tooling.",
          "Unified event records in the same audit system as runtime guardrails.",
        ],
      },
      {
        id: "use-cases",
        title: "Example enterprise use cases",
        intro:
          "Browser governance is strongest where employee AI usage crosses sensitive operational boundaries.",
        bullets: [
          "Claims teams using AI drafting tools with customer data exposure limits.",
          "Legal and HR teams that need justification or redaction workflows before submission.",
          "Engineering organizations that need visibility into code or design data sent to public AI services.",
        ],
      },
      {
        id: "compliance-value",
        title: "Related compliance or governance value",
        intro:
          "Employee AI controls matter when governance scope extends beyond first-party applications.",
        bullets: [
          "Support internal policy controls for acceptable use and restricted data handling.",
          "Generate evidence for operator review, incident response, and audit readiness.",
          "Align user-facing interventions with EU AI Act and privacy program expectations.",
        ],
      },
      {
        id: "integrations",
        title: "Related integrations",
        intro:
          "Rollout and reporting work best when browser control fits existing enterprise management systems.",
        bullets: [
          "Chrome enterprise management and managed endpoint environments.",
          "Centralized alerting and SIEM destinations.",
          "UMAI audit and policy administration workflows.",
        ],
      },
      {
        id: "cta",
        title: "CTA section",
        intro:
          "Start by governing a small set of browser surfaces used by high-sensitivity teams.",
        bullets: [
          "Select the browser AI services to monitor or enforce first.",
          "Define warn, redact, block, and justification rules by data class.",
          "Roll out through managed browsers and review early evidence with policy owners.",
        ],
      },
    ],
  },
  {
    title: "Sovereign Deployment",
    slug: "sovereign-deployment",
    href: "/features/sovereign-deployment",
    shortDescription: "On-prem, private cloud and enterprise isolation",
    icon: Server,
    position: "left-bottom",
    theme: "cyan",
    detailPage: "/features/sovereign-deployment",
    seoTitle: "Sovereign Deployment for Regulated AI Environments",
    seoDescription:
      "Deploy UMAI on-premises or in private cloud environments with enterprise isolation, data residency, and customer-controlled infrastructure.",
    heroLabel: "Customer-controlled infrastructure",
    heroValueProp:
      "Run the governance plane where your residency, isolation, and sector requirements demand it.",
    capabilityHighlights: [
      "On-prem and private cloud",
      "Tenant isolation",
      "Data residency control",
      "Regulated sector fit",
    ],
    relatedSlugs: [
      "real-time-guardrails",
      "audit-ledger-evidence",
      "browser-ai-governance",
    ],
    sections: [
      {
        id: "what-it-does",
        title: "What it does",
        intro:
          "Sovereign Deployment gives enterprises control over where UMAI runs and where governance data remains.",
        bullets: [
          "Deploy the control plane in on-premises or private cloud environments.",
          "Keep policy execution, evidence, and administrative workflows inside customer-controlled infrastructure.",
          "Support environments where SaaS delivery is not acceptable for security or residency reasons.",
        ],
      },
      {
        id: "why-it-matters",
        title: "Why it matters",
        intro:
          "Many regulated programs fail because the control product itself does not meet deployment constraints.",
        bullets: [
          "Address data residency, sovereignty, and customer ownership requirements early.",
          "Fit AI governance into existing security architecture instead of creating exception paths.",
          "Support regulated sectors that require stronger separation from shared control planes.",
        ],
      },
      {
        id: "key-capabilities",
        title: "Key capabilities",
        intro:
          "Deployment flexibility must preserve the same control semantics across delivery models.",
        bullets: [
          "On-premises and private cloud options with consistent policy behavior.",
          "Enterprise isolation for multi-team or multi-tenant operating models.",
          "Support for customer-managed infrastructure boundaries and approval workflows.",
          "Audit and reporting retained within the chosen trust boundary.",
        ],
      },
      {
        id: "use-cases",
        title: "Example enterprise use cases",
        intro:
          "Sovereign deployment is typically required where regulation and internal policy are both strict.",
        bullets: [
          "Banks and insurers with residency and infrastructure ownership constraints.",
          "Public sector or defense-adjacent programs with restricted connectivity requirements.",
          "Healthcare and critical infrastructure operators that cannot route evidence through shared SaaS systems.",
        ],
      },
      {
        id: "compliance-value",
        title: "Related compliance or governance value",
        intro:
          "Deployment posture is often inseparable from the compliance posture of the AI program itself.",
        bullets: [
          "Support residency and sovereignty obligations attached to regulated data classes.",
          "Reduce audit friction by keeping control evidence in a customer-governed environment.",
          "Preserve traceability without forcing exceptions to enterprise hosting standards.",
        ],
      },
      {
        id: "integrations",
        title: "Related integrations",
        intro:
          "The sovereign model is designed to connect with existing enterprise runtime and security systems.",
        bullets: [
          "Kubernetes, private cloud services, and customer-managed infrastructure.",
          "Internal identity, logging, and alerting systems.",
          "Enterprise storage and export pipelines for audit and reporting.",
        ],
      },
      {
        id: "cta",
        title: "CTA section",
        intro:
          "Choose the governance boundary first, then align the rollout with production constraints.",
        bullets: [
          "Select the residency and isolation model required by the AI program.",
          "Map control-plane placement to existing security and platform architecture.",
          "Run the first governed flow without moving evidence outside the approved environment.",
        ],
      },
    ],
  },
  {
    title: "AI Agent & Tool Security",
    slug: "ai-agent-tool-security",
    href: "/features/ai-agent-tool-security",
    shortDescription: "Tool whitelisting, action scope, runtime control",
    icon: Bot,
    position: "right-top",
    theme: "azure",
    detailPage: "/features/ai-agent-tool-security",
    seoTitle: "AI Agent and Tool Security Controls",
    seoDescription:
      "Secure AI agents with runtime protection, tool whitelisting, action scope policies, and visibility into agent decisions.",
    heroLabel: "Controlled autonomy",
    heroValueProp:
      "Let agents act only within approved tool scope, policy context, and operator-defined boundaries.",
    capabilityHighlights: [
      "Tool allowlists",
      "Action scope enforcement",
      "Indirect injection defense",
      "Tool-call visibility",
    ],
    relatedSlugs: [
      "real-time-guardrails",
      "audit-ledger-evidence",
      "compliance-human-oversight",
    ],
    sections: [
      {
        id: "what-it-does",
        title: "What it does",
        intro:
          "AI Agent and Tool Security governs what an agent can invoke, how far it can act, and what evidence is captured along the way.",
        bullets: [
          "Restrict tool usage to approved destinations, methods, and operational scopes.",
          "Inspect agent instructions and downstream tool calls before execution.",
          "Record intent, decision, and action context for later review.",
        ],
      },
      {
        id: "why-it-matters",
        title: "Why it matters",
        intro:
          "Agent systems fail when unrestricted autonomy turns model output into real-world action.",
        bullets: [
          "Reduce the risk of indirect prompt injection reaching privileged tools.",
          "Limit agent blast radius with explicit action scopes and approval boundaries.",
          "Make runtime behavior visible to platform, security, and policy owners.",
        ],
      },
      {
        id: "key-capabilities",
        title: "Key capabilities",
        intro:
          "The focus is on runtime containment and operator confidence rather than unrestricted autonomy.",
        bullets: [
          "Tool whitelisting and route-aware action controls.",
          "Execution scope policies tied to user, system, or workflow context.",
          "Visibility into tool-call intent, arguments, decisions, and outcomes.",
          "Operator hold points for sensitive or ambiguous actions.",
        ],
      },
      {
        id: "use-cases",
        title: "Example enterprise use cases",
        intro:
          "The strongest use cases involve agents touching systems that can change state or move data.",
        bullets: [
          "Support agents with access to ticketing, CRM, or internal knowledge systems.",
          "Workflow agents that must create tasks or retrieve restricted records under policy.",
          "Developer or operations agents that need bounded access to automation tools.",
        ],
      },
      {
        id: "compliance-value",
        title: "Related compliance or governance value",
        intro:
          "Agent oversight is increasingly a governance requirement, not just an engineering preference.",
        bullets: [
          "Provide evidence of approved tool scope and operator review points.",
          "Support accountability for automated actions taken on behalf of users or teams.",
          "Strengthen governance narratives for high-impact or high-risk automation.",
        ],
      },
      {
        id: "integrations",
        title: "Related integrations",
        intro:
          "Agent security works best when it can sit between the orchestrator and the tools it can reach.",
        bullets: [
          "Agent frameworks, orchestration runtimes, and workflow engines.",
          "HTTP APIs, internal services, and enterprise tools exposed to agents.",
          "UMAI evidence exports and governance reporting flows.",
        ],
      },
      {
        id: "cta",
        title: "CTA section",
        intro:
          "Start with the tools that can change state, then expand control as agent maturity grows.",
        bullets: [
          "Define the approved tool inventory and action boundaries.",
          "Place UMAI in the agent execution path and capture the first evidence trail.",
          "Move sensitive actions behind review or stronger policy thresholds.",
        ],
      },
    ],
  },
  {
    title: "Audit Ledger & Evidence",
    slug: "audit-ledger-evidence",
    href: "/features/audit-ledger-evidence",
    shortDescription: "Tamper-evident AI records and evidence packs",
    icon: FileCheck2,
    position: "right-middle",
    theme: "cobalt",
    detailPage: "/features/audit-ledger-evidence",
    seoTitle: "Tamper-Evident Audit Ledger and Evidence Packs",
    seoDescription:
      "Capture hash-chained AI event records, evidence packs, and traceability needed for regulatory audits and incident review.",
    heroLabel: "Forensic-grade traceability",
    heroValueProp:
      "Turn every policy decision into tamper-evident evidence that stands up to regulators, auditors, and incident review.",
    capabilityHighlights: [
      "Hash-chained records",
      "Evidence pack exports",
      "Traceability by design",
      "Audit-ready reporting",
    ],
    relatedSlugs: [
      "real-time-guardrails",
      "compliance-human-oversight",
      "sovereign-deployment",
    ],
    sections: [
      {
        id: "what-it-does",
        title: "What it does",
        intro:
          "Audit Ledger and Evidence capture the full decision history behind governed AI operations.",
        bullets: [
          "Write structured runtime events into a tamper-evident chain.",
          "Package evidence for audits, reviews, and investigations.",
          "Preserve traceability across prompts, responses, tool actions, and operator decisions.",
        ],
      },
      {
        id: "why-it-matters",
        title: "Why it matters",
        intro:
          "If governance decisions cannot be reconstructed later, they are difficult to defend when it counts.",
        bullets: [
          "Support forensic review after incidents, escalations, or regulatory inquiries.",
          "Reduce dependence on fragmented logs spread across teams and systems.",
          "Give legal, audit, and GRC teams a consistent evidence model for AI operations.",
        ],
      },
      {
        id: "key-capabilities",
        title: "Key capabilities",
        intro:
          "Evidence quality matters as much as policy quality in enterprise AI programs.",
        bullets: [
          "Hash-chained event records with integrity checks.",
          "Exportable evidence packs for internal and external review.",
          "Linked policy, operator, and action history for each governed event.",
          "Searchable traceability across projects, users, and environments.",
        ],
      },
      {
        id: "use-cases",
        title: "Example enterprise use cases",
        intro:
          "The ledger is most valuable where reviewability must persist long after a workflow completes.",
        bullets: [
          "Regulated customer interactions requiring full policy reconstruction.",
          "Internal investigations of agent behavior or user-submitted content.",
          "Audit preparation for compliance programs tied to AI usage and control evidence.",
        ],
      },
      {
        id: "compliance-value",
        title: "Related compliance or governance value",
        intro:
          "Evidence becomes the backbone of governance once programs scale beyond pilots.",
        bullets: [
          "Support audit readiness for EU AI Act, GDPR, KVKK, and internal risk programs.",
          "Strengthen accountability for model behavior, operator review, and policy changes.",
          "Provide exportable records for compliance, legal, and board-level reporting.",
        ],
      },
      {
        id: "integrations",
        title: "Related integrations",
        intro:
          "Audit evidence needs to move cleanly into the systems teams already use for oversight.",
        bullets: [
          "SIEM, case management, and governance reporting destinations.",
          "Security analytics and incident workflows.",
          "Customer-managed storage and reporting pipelines when sovereignty matters.",
        ],
      },
      {
        id: "cta",
        title: "CTA section",
        intro:
          "Start by defining the evidence questions your organization cannot answer today.",
        bullets: [
          "Identify the AI workflows that require defensible reconstruction.",
          "Capture the first governed event chain and export an evidence pack.",
          "Align the ledger schema with audit, legal, and security stakeholders early.",
        ],
      },
    ],
  },
  {
    title: "Compliance & Human Oversight",
    slug: "compliance-human-oversight",
    href: "/features/compliance-human-oversight",
    shortDescription: "EU AI Act, GDPR, KVKK and operator control",
    icon: Scale,
    position: "right-bottom",
    theme: "cyan",
    detailPage: "/features/compliance-human-oversight",
    seoTitle: "Compliance and Human Oversight for Enterprise AI",
    seoDescription:
      "Govern AI systems with monitor and enforce modes, justification workflows, operator review, and reporting aligned to major regulations.",
    heroLabel: "Governance operating model",
    heroValueProp:
      "Move from policy statements to operational oversight with review queues, justifications, and evidence-backed control modes.",
    capabilityHighlights: [
      "Monitor and enforce modes",
      "Justification workflows",
      "Operator review",
      "Governance reporting",
    ],
    relatedSlugs: [
      "audit-ledger-evidence",
      "real-time-guardrails",
      "browser-ai-governance",
    ],
    sections: [
      {
        id: "what-it-does",
        title: "What it does",
        intro:
          "Compliance and Human Oversight give enterprises an operating model for governed intervention, review, and reporting.",
        bullets: [
          "Switch between monitor and enforce modes as policies mature.",
          "Route sensitive events into human review and justification workflows.",
          "Track operator actions alongside policy outcomes in the same system of record.",
        ],
      },
      {
        id: "why-it-matters",
        title: "Why it matters",
        intro:
          "Most high-risk AI programs need human accountability even when automation remains the default path.",
        bullets: [
          "Support phased rollouts where enforcement confidence must be earned.",
          "Preserve operator control for high-impact or ambiguous cases.",
          "Create reporting that connects technical controls to governance obligations.",
        ],
      },
      {
        id: "key-capabilities",
        title: "Key capabilities",
        intro:
          "The goal is controlled deployment with clear review authority and visible policy outcomes.",
        bullets: [
          "Monitor-first deployment and graduated enforcement thresholds.",
          "Justification capture for users or operators when exceptions are allowed.",
          "Operator review queues for sensitive events and edge cases.",
          "Reporting views aligned to governance and regulatory stakeholders.",
        ],
      },
      {
        id: "use-cases",
        title: "Example enterprise use cases",
        intro:
          "Human oversight is essential where AI output can affect customers, regulated decisions, or sensitive data.",
        bullets: [
          "Approval paths for blocked browser submissions involving business-critical context.",
          "Review queues for customer-facing assistants in regulated industries.",
          "Oversight workflows for internal copilots that touch restricted information or privileged tools.",
        ],
      },
      {
        id: "compliance-value",
        title: "Related compliance or governance value",
        intro:
          "Oversight controls are how organizations prove that governance is active rather than aspirational.",
        bullets: [
          "Support EU AI Act expectations around oversight, accountability, and controlled operation.",
          "Strengthen GDPR and KVKK narratives where sensitive or personal data may be involved.",
          "Provide auditable evidence of review, exception handling, and operator intervention.",
        ],
      },
      {
        id: "integrations",
        title: "Related integrations",
        intro:
          "Oversight workflows should fit operational review systems rather than creating parallel processes.",
        bullets: [
          "Governance dashboards and evidence exports.",
          "Case management, approval, and notification tools.",
          "Security, legal, and compliance review processes tied to governed events.",
        ],
      },
      {
        id: "cta",
        title: "CTA section",
        intro:
          "Begin with monitor mode, review the outliers, and tighten policy where the evidence is clear.",
        bullets: [
          "Select the workflows that need operator review from day one.",
          "Define exception, escalation, and justification paths by risk level.",
          "Use evidence from early traffic to move the highest-confidence policies into enforcement.",
        ],
      },
    ],
  },
];

export function getFeatureBySlug(slug: string) {
  return umaiFeatures.find((feature) => feature.slug === slug);
}

export function getRelatedFeatures(slugs: string[]) {
  return slugs
    .map((slug) => getFeatureBySlug(slug))
    .filter((feature): feature is UmaiFeature => Boolean(feature));
}
