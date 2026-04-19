import type { LucideIcon } from "lucide-react";
import {
  BadgeCheck,
  Bot,
  ClipboardCheck,
  Database,
  Eye,
  FileCheck2,
  FileSearch,
  FlaskConical,
  GitBranch,
  KeyRound,
  Network,
  Scale,
  Search,
  ShieldCheck,
  TriangleAlert,
  Users,
  Waypoints,
  Workflow,
} from "lucide-react";

export type UmaiSolutionCard = {
  title: string;
  body: string;
  icon: LucideIcon;
};

export type UmaiSolutionItem = {
  title: string;
  body: string;
};

export type UmaiSolution = {
  slug: string;
  title: string;
  seoTitle: string;
  seoDescription: string;
  hero: {
    eyebrow: string;
    title: string;
    accent: string;
    body: string;
    chips: string[];
    panelEyebrow: string;
    panelTitle: string;
    panelItems: UmaiSolutionItem[];
    primaryCtaLabel: string;
    primaryCtaHref: string;
    secondaryCtaLabel: string;
    secondaryCtaHref: string;
  };
  concept: {
    eyebrow: string;
    title: string;
    body: string;
    sourceChips: string[];
    cards: UmaiSolutionCard[];
  };
  context?: {
    eyebrow: string;
    title: string;
    body: string;
    sourceChips: string[];
    items: UmaiSolutionItem[];
    footerEyebrow: string;
    footerTitle: string;
    footerBody: string;
    footerPoints: string[];
  };
  diagram?: {
    eyebrow: string;
    title: string;
    body: string;
    notes: string[];
    type: "maestro-seven-layer";
  };
  vital: {
    eyebrow: string;
    title: string;
    body: string;
    cards: UmaiSolutionCard[];
    checkpoints: string[];
  };
  help: {
    eyebrow: string;
    title: string;
    body: string;
    cards: UmaiSolutionCard[];
    outcomes: string[];
  };
  contact: {
    eyebrow: string;
    title: string;
    body: string;
    topics: string[];
  };
};

export const umaiSolutions: UmaiSolution[] = [
  {
    slug: "policy-guardrail-design",
    title: "Policy & Guardrail Design",
    seoTitle: "Policy & Guardrail Design for Enterprise AI",
    seoDescription:
      "Design runtime guardrails, approval logic, and enforceable policy patterns for AI apps and agents with UMAI.",
    hero: {
      eyebrow: "Advisory service",
      title: "Turn policy intent into",
      accent: "runtime boundaries.",
      body:
        "Policy and guardrail design is the discipline of translating governance requirements, legal obligations, and risk appetite into enforceable controls across prompts, retrieved context, tool use, memory, approvals, and model outputs. In practice, the job is not just writing rules. It is deciding what an AI system may do, what it may see, when it must stop, and how those decisions stay reviewable over time.",
      chips: [
        "Risk-to-control mapping",
        "Tool and memory boundaries",
        "Approval logic",
        "Runtime enforcement",
      ],
      panelEyebrow: "Design priorities",
      panelTitle: "Guardrails have to cover the full agent workflow.",
      panelItems: [
        {
          title: "Define what agents may access",
          body: "Scope prompts, retrieved data, tools, identities, and destinations before rollout.",
        },
        {
          title: "Decide when humans stay in the loop",
          body: "Attach approvals, justifications, or escalations where the action risk is high.",
        },
        {
          title: "Keep evidence attached to the control",
          body: "Make guardrails measurable and reviewable instead of relying on policy text alone.",
        },
      ],
      primaryCtaLabel: "Talk to UMAI",
      primaryCtaHref: "/contact",
      secondaryCtaLabel: "See platform",
      secondaryCtaHref: "/platform",
    },
    concept: {
      eyebrow: "The concept",
      title: "What policy and guardrail design means in enterprise AI.",
      body:
        "NIST AI RMF treats governance, mapping, and ongoing management as connected functions rather than separate paperwork. For AI agents, that means policy has to become operational: access boundaries, allowed actions, response handling, escalation paths, and evidence capture all need to exist in the runtime path. A design that only filters text but ignores tool execution, memory, and delegated actions is incomplete.",
      sourceChips: [
        "NIST AI RMF",
        "NIST GenAI Profile",
        "OWASP Agentic Security",
      ],
      cards: [
        {
          title: "Risk to control translation",
          body: "Convert legal, security, and business requirements into explicit runtime decisions the system can enforce.",
          icon: ShieldCheck,
        },
        {
          title: "System-wide boundaries",
          body: "Guardrails must cover the model plus tools, memory, retrieval, identities, and downstream actions.",
          icon: Waypoints,
        },
        {
          title: "Operational oversight",
          body: "Good design includes approval points, exception handling, change control, and evidence for later review.",
          icon: Workflow,
        },
      ],
    },
    vital: {
      eyebrow: "Why it matters",
      title: "Vital for AI agent security and governance because autonomy widens the control surface.",
      body:
        "Agents do not just answer. They plan, retrieve, call tools, and take actions across systems. Without well-designed guardrails, enterprises end up with unclear permissions, inconsistent approvals, and weak evidence when something goes wrong.",
      cards: [
        {
          title: "Prevent agent overreach",
          body: "Explicit scope boundaries reduce the chance that an agent acts outside the business process it was meant to support.",
          icon: Bot,
        },
        {
          title: "Reduce prompt-to-tool abuse",
          body: "Controls have to hold from the first prompt through the final tool call, not just at the model output layer.",
          icon: KeyRound,
        },
        {
          title: "Keep governance consistent",
          body: "Shared guardrail patterns help different teams apply the same review logic, risk thresholds, and evidence model.",
          icon: GitBranch,
        },
      ],
      checkpoints: [
        "Prompt and context controls",
        "Tool scope and destination rules",
        "Approval and exception logic",
        "Evidence for every governed decision",
      ],
    },
    help: {
      eyebrow: "How UMAI helps",
      title: "How UMAI helps enterprises design controls they can actually operate.",
      body:
        "UMAI works with security, platform, compliance, and product teams to move from abstract policy statements to runtime guardrail architecture. The goal is a design that can be tested, enforced, monitored, and audited across apps, agents, and browser AI usage.",
      cards: [
        {
          title: "Control design workshops",
          body: "Map business rules, regulatory obligations, and risk thresholds into concrete guardrail patterns.",
          icon: Users,
        },
        {
          title: "Agent and tool scoping",
          body: "Define which tools, destinations, and actions remain in-bounds for each workflow or role.",
          icon: Network,
        },
        {
          title: "Approval and evidence flows",
          body: "Design escalation paths, human review triggers, and the records needed for later investigation or audit.",
          icon: ClipboardCheck,
        },
        {
          title: "Pilot-ready rollout plan",
          body: "Turn the design into a first governed deployment with measurable controls and clear operating ownership.",
          icon: BadgeCheck,
        },
      ],
      outcomes: [
        "Policy architecture",
        "Guardrail patterns",
        "Approval model",
        "Pilot plan",
      ],
    },
    contact: {
      eyebrow: "Contact us",
      title: "Plan a policy and guardrail design engagement.",
      body:
        "Bring us the workflow, model stack, agent plan, or compliance pressure point you need to control. We can help structure the guardrails, approvals, and evidence model around it.",
      topics: [
        "Policy design workshops",
        "Agent control models",
        "Approval workflow planning",
        "Pilot scoping",
      ],
    },
  },
  {
    slug: "red-teaming",
    title: "Red Teaming",
    seoTitle: "AI Red Teaming for Agents and AI Applications",
    seoDescription:
      "Pressure-test prompts, outputs, tools, and multi-step agent workflows with AI red teaming designed for enterprise rollout.",
    hero: {
      eyebrow: "Advisory service",
      title: "Pressure-test agent behavior",
      accent: "before attackers do.",
      body:
        "Red teaming is structured adversarial testing that emulates realistic misuse, attacker behavior, and system failure modes before production incidents do. For AI agents, it has to go beyond jailbreak prompts to test tool misuse, privilege escalation, long-term memory abuse, unsafe plans, policy bypass, and failures that only appear across multi-step workflows.",
      chips: [
        "Adversarial scenarios",
        "Realistic personas",
        "Prompt injection",
        "Tool misuse",
        "Control validation",
      ],
      panelEyebrow: "Assessment design",
      panelTitle:
        "Enterprise AI red teaming has to test the workflow, not just the model.",
      panelItems: [
        {
          title: "Expand the failure scope",
          body: "Test prompt injection, harmful outputs, leakage, policy bypass, and unsafe action paths together.",
        },
        {
          title: "Exercise realistic personas",
          body: "Probe how attackers, normal users, and edge-case workflows interact with the same control surface.",
        },
        {
          title: "Test for variability",
          body: "Generative systems are probabilistic, so scenarios should be run repeatedly rather than treated as one-time checks.",
        },
        {
          title: "Retest after mitigation",
          body: "Use the results to improve guardrails, approvals, monitoring, and other control layers, then validate the change.",
        },
      ],
      primaryCtaLabel: "Talk to UMAI",
      primaryCtaHref: "/contact",
      secondaryCtaLabel: "See platform",
      secondaryCtaHref: "/platform/testing-evaluation",
    },
    concept: {
      eyebrow: "The concept",
      title: "What AI red teaming means in an agentic environment.",
      body:
        "AI red teaming in an agentic environment is broader than classic adversary emulation. It covers security failures, harmful outputs, benign-user failures, repeated attempts, and layered controls. In practice, that expands the test surface from a single prompt to the full operating system around the model, including memory, retrieval, tool use, identity, and approvals.",
      sourceChips: [
        "NIST AI 100-2",
        "OWASP GenAI Red Teaming",
        "OWASP Agentic Security",
      ],
      cards: [
        {
          title: "Expanded failure scope",
          body: "AI red teaming now includes model misuse, unsafe content, workflow abuse, and operational breakdowns that happen beyond the prompt itself.",
          icon: FlaskConical,
        },
        {
          title: "End-to-end workflow testing",
          body: "Exercise prompts, tool calls, memory, retrieval, and approval paths together rather than in isolation because the real risk often appears between steps.",
          icon: Search,
        },
        {
          title: "Mitigation feedback loop",
          body: "The point is not finding one bad response. It is improving controls, retesting, and proving the improvement works over repeated runs.",
          icon: FileSearch,
        },
      ],
    },
    context: {
      eyebrow: "Red-teaming principles",
      title: "Principles that make AI red teaming useful in production.",
      body:
        "Enterprise red teaming should be designed to reflect how agent systems actually behave in production, where a prompt can influence retrieval, memory, tools, approvals, and downstream actions. The goal is not only to find weaknesses, but to improve the control model around the workflow.",
      sourceChips: [
        "Adversarial testing",
        "Operational controls",
        "Agent workflows",
      ],
      items: [
        {
          title: "Broader failure scope",
          body: "The scope includes security vulnerabilities and also harmful, unsafe, or policy-breaking model behavior.",
        },
        {
          title: "Multiple persona types",
          body: "Test both hostile actors and normal users because harmful outcomes can emerge without explicit attacker intent.",
        },
        {
          title: "Continuous system change",
          body: "Prompts, retrieval settings, tool connections, and policies change quickly, so the threat picture cannot stay static.",
        },
        {
          title: "Repeated execution",
          body: "Because outputs are probabilistic, one clean run does not prove a scenario is safe.",
        },
        {
          title: "Layered mitigation",
          body: "Findings should translate into layered controls such as classifiers, metaprompts, approvals, monitoring, and runtime guardrails.",
        },
      ],
      footerEyebrow: "Why this matters",
      footerTitle: "Enterprise red teaming should drive measurable control improvement.",
      footerBody:
        "The value of AI red teaming is the disciplined loop of scenario design, repeated execution, evidence capture, mitigation tuning, and retest. That is how testing becomes part of deployment assurance rather than a one-time review exercise.",
      footerPoints: [
        "Scenario design by persona",
        "Repeated adversarial execution",
        "Evidence-backed findings",
        "Retest after mitigation",
      ],
    },
    vital: {
      eyebrow: "Why it matters",
      title: "Vital for AI agent security and governance because agent failures rarely stay isolated.",
      body:
        "Prompt injection is only one entry point. In an agentic workflow, a weak instruction boundary can become tool abuse, data leakage, unsafe actions, or audit gaps across multiple systems. That is why effective red teaming has to emphasize layered controls and repeated testing rather than one-time checks.",
      cards: [
        {
          title: "Find multi-step failure chains",
          body: "A small failure in prompts, retrieval, or memory can escalate once the agent reaches tools, identities, and external systems.",
          icon: Waypoints,
        },
        {
          title: "Test probabilistic behavior",
          body: "Repeated attempts reveal risks that deterministic testing misses, especially when outputs vary across runs.",
          icon: TriangleAlert,
        },
        {
          title: "Strengthen governance evidence",
          body: "Findings, mitigation choices, and retest results create evidence that controls were designed and validated deliberately.",
          icon: FileCheck2,
        },
      ],
      checkpoints: [
        "Security and harmful content in scope",
        "Malicious and benign personas exercised",
        "Multiple attempts per scenario",
        "Retest after control changes",
      ],
    },
    help: {
      eyebrow: "How UMAI helps",
      title: "How UMAI helps enterprises run red teaming that improves real controls.",
      body:
        "UMAI helps teams move from generic prompt testing to scenario-based adversarial exercises that target the real operating model. The work includes attack design, repeated execution, evidence capture, prioritization, and control tuning so testing directly informs rollout decisions.",
      cards: [
        {
          title: "Scenario design by persona",
          body: "Build realistic misuse cases around your agents, data boundaries, tools, and business workflows for attackers, ordinary users, and edge-case actors.",
          icon: Eye,
        },
        {
          title: "Execution against live architectures",
          body: "Run structured testing across prompts, model outputs, tool chains, approvals, and runtime policies instead of testing a prompt in isolation.",
          icon: Bot,
        },
        {
          title: "Prioritized findings and fixes",
          body: "Translate red-team outcomes into concrete guardrail, access, monitoring, and workflow changes that teams can act on.",
          icon: ClipboardCheck,
        },
        {
          title: "Validation and retest",
          body: "Confirm the updated controls behave as intended before scaling to wider deployment.",
          icon: BadgeCheck,
        },
      ],
      outcomes: [
        "Adversarial test plan",
        "Risk-ranked findings",
        "Control recommendations",
        "Retest evidence",
      ],
    },
    contact: {
      eyebrow: "Contact us",
      title: "Plan an AI red teaming engagement.",
      body:
        "If you already have an agent, pilot, or high-risk workflow in mind, we can help shape the scenarios, run the assessment, and connect the findings back to enforceable controls and retest planning.",
      topics: [
        "Prompt injection testing",
        "Agent tool abuse scenarios",
        "Adversarial evaluations",
        "Defense-in-depth tuning",
        "Retest planning",
      ],
    },
  },
  {
    slug: "maestro-framework-implementation",
    title: "MAESTRO Framework Implementation",
    seoTitle: "MAESTRO Threat Modeling for Agentic AI",
    seoDescription:
      "Apply the CSA MAESTRO framework to threat-model agentic AI systems, multi-agent workflows, tools, and trust boundaries.",
    hero: {
      eyebrow: "Advisory service",
      title: "Threat-model agentic systems",
      accent: "with MAESTRO.",
      body:
        "MAESTRO is the Cloud Security Alliance's agentic AI threat-modeling framework. In CSA's introduction, MAESTRO is defined as Multi-Agent Environment, Security, Threat, Risk, and Outcome, and presented as a structured, layer-by-layer way to identify, assess, and mitigate risk across the AI lifecycle when autonomy, tool use, and multi-agent interaction make older application-focused methods too narrow.",
      chips: [
        "Multi-Agent Environment, Security, Threat, Risk, and Outcome",
        "Seven-layer reference architecture",
        "Cross-layer threats",
        "Risk-based prioritization",
      ],
      panelEyebrow: "Modeling focus",
      panelTitle: "CSA positions MAESTRO as a seven-layer threat model for agentic AI.",
      panelItems: [
        {
          title: "Start with layer-specific analysis",
          body: "Threat model each layer from foundation models up to the agent ecosystem instead of collapsing everything into one box.",
        },
        {
          title: "Then examine cross-layer risk",
          body: "CSA highlights cross-layer failure paths such as supply-chain compromise, lateral movement, privilege escalation, and data leakage.",
        },
        {
          title: "Keep it risk-based and adaptive",
          body: "MAESTRO emphasizes likelihood, impact, continuous monitoring, and updates as the system and threat landscape evolve.",
        },
      ],
      primaryCtaLabel: "Talk to UMAI",
      primaryCtaHref: "/contact",
      secondaryCtaLabel: "See platform",
      secondaryCtaHref: "/platform",
    },
    concept: {
      eyebrow: "The concept",
      title: "What MAESTRO contributes to agent security work.",
      body:
        "In CSA's February 6, 2025 introduction, MAESTRO is presented as a response to gaps in traditional frameworks when applied to agentic AI. The article emphasizes six ideas: extend conventional categories with AI-specific concerns, focus explicitly on multi-agent and environment interactions, treat security as layered, address adversarial and autonomy-related threats, prioritize by likelihood and impact, and continuously monitor and adapt as systems change. That combination makes MAESTRO useful when the architecture includes models, data pipelines, frameworks, infrastructure, observability, compliance controls, and real-world agent ecosystems all at once.",
      sourceChips: [
        "CSA article 02/06/2025",
        "CSA MAESTRO",
        "OWASP Agentic Security",
        "NIST AI RMF",
      ],
      cards: [
        {
          title: "Multi-agent and environment focus",
          body: "CSA's introduction explicitly centers agent-to-agent and agent-to-environment interaction, not just the model in isolation.",
          icon: Scale,
        },
        {
          title: "Layered reference architecture",
          body: "MAESTRO decomposes the system into seven functional layers so teams can identify risk where it actually emerges.",
          icon: Network,
        },
        {
          title: "Risk-based and adaptive",
          body: "The framework ties threats to impact and ongoing monitoring so mitigations can evolve with the agent system.",
          icon: Database,
        },
      ],
    },
    diagram: {
      eyebrow: "Reference architecture",
      title: "CSA's seven-layer reference architecture for agentic AI.",
      body:
        "The CSA article describes MAESTRO around a seven-layer reference architecture: Foundation Models, Data Operations, Agent Frameworks, Deployment and Infrastructure, Evaluation and Observability, Security and Compliance, and the Agent Ecosystem. The point of the stack is not just labeling components. It gives teams a way to run layer-specific threat modeling, then look for cross-layer issues where compromise in one layer can cascade into another.",
      notes: [
        "Layer-specific threat modeling",
        "Cross-layer threat analysis",
        "Defense in depth",
        "Continuous monitoring and adaptation",
      ],
      type: "maestro-seven-layer",
    },
    vital: {
      eyebrow: "Why it matters",
      title: "Vital for AI agent security and governance because agent architectures create blended risks.",
      body:
        "The CSA article is especially useful here because it makes clear that agent risk does not stay inside one component. Model behavior, data pipelines, frameworks, infrastructure, observability, and the agent ecosystem can all influence one another. Without that layered view, enterprises miss the cross-layer chains that turn small weaknesses into major security or governance failures.",
      cards: [
        {
          title: "Catch cross-layer cascades",
          body: "CSA calls out risks such as supply-chain attacks, lateral movement, privilege escalation, data leakage, and goal misalignment cascades across layers.",
          icon: TriangleAlert,
        },
        {
          title: "Align security and governance teams",
          body: "A shared seven-layer model gives architects, defenders, and governance owners the same picture of the system and its trust boundaries.",
          icon: Users,
        },
        {
          title: "Improve control prioritization",
          body: "The framework helps decide where runtime guardrails, approvals, monitoring, validation, or stronger isolation matter most.",
          icon: BadgeCheck,
        },
      ],
      checkpoints: [
        "Foundation model and data layer risks",
        "Framework and infrastructure trust boundaries",
        "Evaluation, observability, and compliance surfaces",
        "Cross-layer mitigations before rollout",
      ],
    },
    help: {
      eyebrow: "How UMAI helps",
      title: "How UMAI helps enterprises operationalize MAESTRO instead of treating it as theory.",
      body:
        "UMAI helps enterprises use the MAESTRO structure as a working model for design, control selection, and rollout. We map the seven layers to the real architecture, identify cross-layer abuse paths, and connect the findings to enforceable controls, observability requirements, and governance workflows.",
      cards: [
        {
          title: "Seven-layer architecture scoping",
          body: "Map your models, data systems, frameworks, infrastructure, observability, compliance surfaces, and agent ecosystem into one shared architecture view.",
          icon: Workflow,
        },
        {
          title: "MAESTRO workshops",
          body: "Run structured sessions to identify trust boundaries, layer-specific threats, and cross-layer abuse paths.",
          icon: Scale,
        },
        {
          title: "Control mapping",
          body: "Translate findings into runtime guardrails, access policies, oversight patterns, monitoring requirements, and evidence needs.",
          icon: ShieldCheck,
        },
        {
          title: "Implementation roadmap",
          body: "Prioritize what must change before pilot, before scale-up, and before regulated production use.",
          icon: GitBranch,
        },
      ],
      outcomes: [
        "Threat model",
        "Risk map",
        "Control priorities",
        "Implementation roadmap",
      ],
    },
    contact: {
      eyebrow: "Contact us",
      title: "Plan a MAESTRO implementation workshop.",
      body:
        "If your agent architecture is already forming, we can help model it with MAESTRO, identify the highest-value controls, and connect the output to a practical rollout plan.",
      topics: [
        "Threat modeling workshops",
        "Agent architecture review",
        "Control mapping",
        "Deployment planning",
      ],
    },
  },
  {
    slug: "ai-governance",
    title: "AI Governance",
    seoTitle: "Enterprise AI Governance for Agents and AI Systems",
    seoDescription:
      "Build an enterprise AI governance operating model for oversight, evidence, runtime control, and governed deployment.",
    hero: {
      eyebrow: "Advisory service",
      title: "Build the operating model for",
      accent: "governed enterprise AI.",
      body:
        "AI governance is the operating model that assigns accountability, defines acceptable use, sets review authority, measures control effectiveness, and preserves evidence across the AI lifecycle. NIST AI RMF places governance at the foundation because technical safeguards do not stay reliable without roles, policies, monitoring, escalation paths, and documentation around them.",
      chips: [
        "Accountability",
        "Oversight",
        "Monitoring",
        "Evidence",
      ],
      panelEyebrow: "Governance priorities",
      panelTitle: "Agents need an operating model, not just security features.",
      panelItems: [
        {
          title: "Assign decision rights",
          body: "Make it clear who owns risk, approves changes, and handles exceptions for each AI workflow.",
        },
        {
          title: "Measure control performance",
          body: "Track where policies are working, where they are noisy, and where oversight is still missing.",
        },
        {
          title: "Preserve reviewable evidence",
          body: "Give audit, legal, and security teams a defensible record of what happened and why.",
        },
      ],
      primaryCtaLabel: "Talk to UMAI",
      primaryCtaHref: "/contact",
      secondaryCtaLabel: "See platform",
      secondaryCtaHref: "/features/compliance-human-oversight",
    },
    concept: {
      eyebrow: "The concept",
      title: "What AI governance means beyond policy documents.",
      body:
        "Governance is not a single framework or committee. It is the set of responsibilities, control processes, oversight mechanisms, and evidence practices that let an organization deploy AI safely at scale. NIST's Govern function emphasizes culture, policies, accountability, resources, and ongoing review because those are what keep technical controls aligned with enterprise objectives over time.",
      sourceChips: ["NIST AI RMF", "NIST Govern function", "OWASP Agentic Security"],
      cards: [
        {
          title: "Roles and decision rights",
          body: "Governance defines who sets policy, who approves changes, who reviews exceptions, and who owns ongoing risk.",
          icon: Users,
        },
        {
          title: "Lifecycle control",
          body: "Controls must persist from design through testing, deployment, monitoring, and retirement.",
          icon: GitBranch,
        },
        {
          title: "Evidence and reporting",
          body: "Governance needs metrics, records, and auditability so enterprise oversight is based on facts instead of assumptions.",
          icon: FileCheck2,
        },
      ],
    },
    vital: {
      eyebrow: "Why it matters",
      title: "Vital for AI agent security and governance because agents operate with delegated authority.",
      body:
        "When an agent can retrieve data, call tools, or trigger business actions, the question is no longer just model quality. It becomes who authorized the behavior, what controls governed it, how exceptions are handled, and how the organization proves that oversight was real.",
      cards: [
        {
          title: "Control delegated autonomy",
          body: "Agents act on behalf of teams and systems, so accountability and approval logic must be explicit.",
          icon: Bot,
        },
        {
          title: "Reduce policy drift",
          body: "Governance keeps different teams, products, and deployments aligned to one operating model instead of inventing their own rules.",
          icon: Workflow,
        },
        {
          title: "Support regulator and audit scrutiny",
          body: "Evidence-backed governance helps enterprises explain what was allowed, what was blocked, and how oversight worked.",
          icon: Eye,
        },
      ],
      checkpoints: [
        "Named owners and reviewers",
        "Control changes under versioning",
        "Metrics and escalation paths",
        "Evidence for oversight decisions",
      ],
    },
    help: {
      eyebrow: "How UMAI helps",
      title: "How UMAI helps enterprises build governance that survives real rollout pressure.",
      body:
        "UMAI helps enterprises define the operating model around their AI systems and connect that model to runtime controls. The work spans policy ownership, approval flows, control evidence, deployment stages, and reporting so governance becomes operational rather than aspirational.",
      cards: [
        {
          title: "Governance operating model design",
          body: "Clarify ownership, review authority, exception handling, and control responsibilities across teams.",
          icon: Users,
        },
        {
          title: "Oversight workflow design",
          body: "Set up monitor mode, enforce mode, escalation queues, and approval paths around real enterprise workflows.",
          icon: ClipboardCheck,
        },
        {
          title: "Evidence and reporting structure",
          body: "Define what needs to be measurable and what records must be preserved for security, audit, and risk teams.",
          icon: Database,
        },
        {
          title: "Governed rollout planning",
          body: "Sequence pilots, validation, and production expansion so governance matures with the deployment.",
          icon: BadgeCheck,
        },
      ],
      outcomes: [
        "Operating model",
        "Oversight workflows",
        "Evidence model",
        "Rollout plan",
      ],
    },
    contact: {
      eyebrow: "Contact us",
      title: "Plan an enterprise AI governance engagement.",
      body:
        "If you need to move from scattered controls to one governed operating model, we can help align the policy, oversight, runtime, and evidence pieces into a practical rollout plan.",
      topics: [
        "Governance operating model",
        "Oversight workflow design",
        "Evidence and reporting",
        "Rollout planning",
      ],
    },
  },
];

export function getSolutionBySlug(slug: string) {
  return umaiSolutions.find((solution) => solution.slug === slug);
}

export function getOtherSolutions(slug: string) {
  return umaiSolutions.filter((solution) => solution.slug !== slug);
}
