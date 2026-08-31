---
title: Product Overview — What UMAI Platform Is
audience: assistant
topics: [product, overview, what is umai, value proposition, positioning]
priority: high
last_reviewed: 2026-08-03
---

# The one-sentence answer

UMAI lets an enterprise **define AI guardrails once, publish them as versioned
runtime packages, enforce them consistently across applications, agents and
browser-based AI usage, and keep a tamper-evident record of every decision.**

# The one-paragraph answer

UMAI Platform is an enterprise AI governance and runtime enforcement platform.
Operators define **policies** (individual rules) and assemble them into
**guardrails** (deployable, versioned runtime packages). Applications call UMAI
before and/or after the model step — `PRE_LLM` and `POST_LLM` — and act on the
decision it returns: allow, warn, redact, block, or escalate. Every decision is
written to a hash-chained audit ledger that can be exported as compliance
evidence. A managed browser extension extends the same governance model to
employee use of ChatGPT, Gemini and Claude. The whole platform can run inside
the customer's own infrastructure.

# The core loop

1. An operator authors policies and composes a guardrail in **UMAI Control
   Center**.
2. Publishing the guardrail creates a **version** and distributes it as a
   runtime snapshot.
3. An application calls the **UMAI Service** runtime API with its project API
   key and a guardrail ID.
4. The **UMAI Engine** evaluates the published snapshot — preflight checks, then
   the applicable policies for that phase — and returns a decision.
5. The decision, its reason, severity, guardrail version and request ID are
   recorded in the audit ledger.
6. Operators review outcomes in Monitoring and Alerts, run evaluations, and
   export evidence packs.

# What makes it a platform, not a filter

UMAI is not a single moderation endpoint. The implemented scope covers:

- Multi-tenant control-plane modeling (organization → environment → project)
- Versioned guardrail authoring, publishing and rollback
- Runtime enforcement in both PRE_LLM and POST_LLM phases
- Step-up approval and human-oversight workflows
- Audit export and evidence pack generation
- Evaluation runs against datasets before and after policy changes
- A template and policy library to start from instead of authoring from scratch
- AI-assisted guardrail authoring
- Browser extension telemetry and governance
- Model and agent registry endpoints
- Async guard jobs for longer-running agent flows

# The three surfaces UMAI governs

| Surface | What it means | How UMAI covers it |
|---|---|---|
| **Apps and copilots** | AI features your organization builds | Runtime guard API in the request path |
| **AI agents** | Autonomous systems that call tools and act | Tool allowlists, action-scope policies, approval gates, agent run tracking |
| **Browser AI** | Employees using ChatGPT / Gemini / Claude directly | Managed browser extension with local inspection |

All three feed one policy engine and one evidence plane. That single-plane
property is the main product argument: governance without gaps between
surfaces.

# Three differentiators the site leads with

1. **Localized intelligence.** PRE_LLM and POST_LLM evaluation is
   language-aware, not English-first detection with translation bolted on. A
   prompt injection in Turkish is not simply an English attack translated.
2. **Complete coverage.** Browser-based AI usage and production AI flows are
   governed from one policy engine and one evidence plane — no separate tool for
   each surface.
3. **Sovereign deployment.** Full on-premises, private cloud, customer VPC, and
   air-gapped paths are a core capability, not a paid upsell. No platform
   lock-in for critical AI operations.

# The problem statement UMAI addresses

Enterprise AI failures happen in live traffic, not in policy documents. The
recurring failure modes are:

- Prompt injection and jailbreaks reaching production model calls
- Regulated or confidential data leaving the organization through a prompt
- Model output disclosing data it should not, or triggering unsafe downstream
  action
- Agents taking real-world actions outside approved scope
- Employees using consumer AI tools with company data (shadow AI)
- No reconstructable record when an auditor, regulator or incident review asks
  what happened

UMAI's answer is one enforcement point plus one evidence trail, deployed inside
the customer's trust boundary.

# Market context the site cites

From the IBM Institute for Business Value report *"Elusive threats, elastic
defense: Securing AI at scale"* (published 22 March 2026):

- **61%** of organizations have had AI-related models, assets, services or data
  attacked in the last 12 months.
- **25%** of AI initiatives have been cancelled, postponed, or failed to scale
  because of security concerns in the same period.

Only cite these two figures, and always attribute them to IBM IBV. Do not
generalize them into claims about UMAI's own results.
