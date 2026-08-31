---
title: Advisory Services and Solutions
audience: assistant
topics: [services, advisory, red teaming, maestro, policy design, ai governance, consulting]
last_reviewed: 2026-08-03
---

# Product vs. service — keep these separate

UMAI sells a **platform** (guardrails, browser governance, audit ledger,
evaluations) and offers **advisory engagements** that help an organization use
it well. When a visitor asks "do you do X", be clear which side of the line the
answer is on.

Four advisory offerings are published, each at `/solutions/<slug>`.

---

## 1. Policy & Guardrail Design — `/solutions/policy-guardrail-design`

*Turn policy intent into runtime boundaries.*

The discipline of translating governance requirements, legal obligations and
risk appetite into enforceable controls across prompts, retrieved context, tool
use, memory, approvals and model outputs. The work is not just writing rules —
it is deciding what an AI system may do, what it may see, when it must stop, and
how those decisions stay reviewable over time.

Focus areas:
- **Risk-to-control mapping**
- **Define what agents may access** — scope prompts, retrieved data, tools,
  identities and destinations before rollout
- **Decide when humans stay in the loop** — attach approvals, justifications or
  escalations where action risk is high
- **Keep evidence attached to the control** — make guardrails measurable and
  reviewable instead of relying on policy text

---

## 2. Red Teaming — `/solutions/red-teaming`

*Pressure-test agent behavior before attackers do.*

Structured adversarial testing that emulates realistic misuse, attacker behavior
and system failure modes before production incidents do. For AI agents it goes
beyond jailbreak prompts to test tool misuse, privilege escalation, long-term
memory abuse, unsafe plans, policy bypass, and failures that only appear across
multi-step workflows.

Assessment design principles:
- **Expand the failure scope** — prompt injection, harmful outputs, leakage,
  policy bypass and unsafe action paths tested together
- **Exercise realistic personas** — attackers, normal users and edge-case
  workflows against the same control surface
- **Test for variability** — generative systems are probabilistic, so scenarios
  are run repeatedly rather than treated as one-time checks
- **Retest after mitigation** — results improve guardrails, approvals and
  monitoring, then the change is validated

---

## 3. MAESTRO Framework Implementation — `/solutions/maestro-framework-implementation`

*Threat-model agentic systems with MAESTRO.*

MAESTRO is the Cloud Security Alliance's agentic-AI threat-modeling framework —
**M**ulti-**A**gent **E**nvironment, **S**ecurity, **T**hreat, **R**isk, and
**O**utcome — a structured, layer-by-layer way to identify, assess and mitigate
risk across the AI lifecycle, for systems where autonomy, tool use and
multi-agent interaction make older application-focused methods too narrow.

How it is applied:
- **Layer-specific analysis first** — threat model each layer, from foundation
  models up to the agent ecosystem, instead of collapsing everything into one box
- **Then cross-layer risk** — CSA highlights supply-chain compromise, lateral
  movement, privilege escalation and data leakage as cross-layer failure paths
- **Risk-based and adaptive** — likelihood, impact, continuous monitoring, and
  updates as the system and threat landscape evolve

CSA positions MAESTRO as a **seven-layer** threat model for agentic AI.

---

## 4. AI Governance — `/solutions/ai-governance`

*Build the operating model for governed enterprise AI.*

AI governance is the operating model that assigns accountability, defines
acceptable use, sets review authority, measures control effectiveness and
preserves evidence across the AI lifecycle. NIST AI RMF places governance at the
foundation because technical safeguards do not stay reliable without roles,
policies, monitoring, escalation paths and documentation around them.

Governance priorities:
- **Assign decision rights** — who owns risk, approves changes and handles
  exceptions for each AI workflow
- **Measure control performance** — where policies work, where they are noisy,
  where oversight is missing
- **Preserve reviewable evidence** — a defensible record for audit, legal and
  security

Reference sources cited: NIST AI RMF and its Govern function, OWASP Agentic
Security.

---

# R&D tracks (Innovation)

Published as forward-looking research directions at `/innovation`. Describe
these as **R&D tracks**, never as shipped features, and never with a delivery
date.

| Track | What it explores |
|---|---|
| **Federated Guardrail Learning** | Distributed policy improvement without centralizing sensitive traffic |
| **Regulation-to-Policy Synthesis** | Translating regulatory text into operational control drafts |
| **Cross-Lingual Governance** | Consistent policy behavior across multilingual AI traffic |
| **Formal Verification** | Reasoning about policy completeness and control invariants |

If a visitor asks when one of these ships: say it is an R&D track without a
published timeline, and offer to connect them with the team if it matters to
their evaluation.

# Engagement entry points

The site offers three concrete next steps:

1. **Evaluate your AI integrations** — assess existing AI integrations; UMAI
   maps apps, agents and browser tools against policy and compliance
   expectations.
2. **Contact a specialist** — plan an AI governance rollout that aligns
   architecture, controls and compliance requirements before production
   deployment.
3. **Start your PoC** — deploy UMAI with policies tuned to the environment and
   see runtime enforcement on real AI traffic in days.

All three route to `/contact`.
