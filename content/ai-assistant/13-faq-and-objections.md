---
title: FAQ and Objection Handling
audience: assistant
topics: [faq, objections, pricing, latency, build vs buy, comparison, common questions]
priority: high
last_reviewed: 2026-08-03
---

# Published FAQ (use these answers close to verbatim)

**"We already use our cloud provider's built-in guardrails. Why do we need
UMAI?"**
Provider-native filters do not give you a governance layer you own, evidence
designed for audits, or policy coverage across browser AI usage and multi-model
environments.

**"There are already tools that detect prompt injection. Isn't that enough?"**
Prompt injection is only one risk. Regulated organizations also need browser
governance, audit evidence, policy versioning, model-agnostic control, and
localized evaluation.

**"Can't our engineering team build guardrails into application code?"**
App-specific checks do not create a centralized governance plane. You still miss
consistent evidence, browser coverage, reusable policies, and shared operational
visibility.

**"What about latency impact?"**
Runtime governance has to be practical. UMAI is designed so policy evaluation
remains small relative to LLM response time, preserving product usability.
*(Do not quote a millisecond figure. There is no published latency SLA. If
pressed, note that heuristic policies are pattern-based and fast, context-aware
policies call an inference endpoint and cost more, and the actual budget depends
on the policy mix — then offer the team for a real measurement.)*

**"We need our data to stay on-premises. Can UMAI support that?"**
Yes. UMAI supports on-prem, private cloud, and controlled deployment models so
regulated organizations can keep data and model interaction paths inside
approved boundaries.

**"How is UMAI different from traditional WAF or DLP tools?"**
Traditional perimeter and DLP tools were not built for conversational AI flows,
prompt semantics, model outputs, or agentic tool use. UMAI is designed for AI
interaction governance.

---

# Additional questions and how to handle them

## Commercial

**"How much does it cost?"**
Pricing is not published. Say so directly and route to `/contact` or
contact@umaisolutions.com. Do not estimate, do not describe pricing *models*
(per-seat, per-call, tiered) — none of that is published.

**"Is there a free trial / free tier?"**
Do not promise one. The published entry point is a PoC arranged with the team:
"Deploy UMAI with policies tuned to your environment and see runtime enforcement
on your own AI traffic in days." Route to `/contact`.

**"How long does a PoC take?"**
The site says a PoC can show runtime enforcement on the customer's own AI
traffic "in days." Do not commit to a specific number of days or a scope — that
is a conversation with the team.

**"Who are your customers? Can I get a reference?"**
Never name customers or prospects, and do not confirm or deny any specific
organization. Say customer references are handled by the team and offer the
contact path.

**"Do you have SOC 2 / ISO 27001 / a completed security questionnaire?"**
Do not claim any certification. Route to the team — this is a standard
procurement request they handle directly.

## Technical

**"Which LLM providers do you support?"**
UMAI sits in front of the model rather than replacing it. Named integration
targets: OpenAI, Azure OpenAI, Anthropic, Vertex AI. Context-aware policy
evaluation requires an **OpenAI-compatible inference endpoint**, which can be
the customer's own internal endpoint. UMAI is model-agnostic by design.

**"Does it work with LangChain / OpenAI Agents SDK / Google ADK?"**
Yes — Control Center includes implementation guides for the UMAI Browser
Extension, OpenAI Agents SDK, Google ADK, Claude, xAI and LangChain. For
anything else, integration is a plain server-side HTTPS call to the guard
endpoint.

**"What languages does it work in?"**
Localized PRE_LLM and POST_LLM evaluation is a stated differentiator —
language-aware detection rather than English-first detection applied to
translations. Turkish is explicitly supported (the `language` field accepts
`tr`). For a specific language, route to the team rather than asserting
coverage.

**"Can we run it fully offline / air-gapped?"**
Yes, air-gapped deployment is a published option. The dependencies still have to
exist internally: database, Redis, directory and an internal
OpenAI-compatible inference endpoint.

**"Does it block, or only monitor?"**
Both. Guardrails have a `MONITOR` mode and an `ENFORCE` mode. The recommended
rollout is monitor-first — gather evidence, tune false positives, then move the
highest-confidence policies into enforcement.

**"What happens if UMAI is down?"**
The application decides. The published guidance is "fail safely when the
workflow depends on a hard enforcement boundary" — teams choose fail-open or
fail-closed per workflow as part of integration design. Do not claim an
availability figure.

**"Do you see our prompt content?"**
In a customer-hosted deployment, evaluation happens inside the customer's
infrastructure and the audit ledger lives in the customer's database. The
browser extension evaluates outbound content **locally**, before it leaves the
browser. Audit events can be redacted. For contractual data-handling language,
route to the team.

**"How do you handle false positives?"**
Three mechanisms: start in MONITOR mode; run evaluations against representative
datasets before and after changes and review action accuracy and sample results;
use the Alerts console to see which policy triggered and adjust the policy mix.
Guardrails are versioned, so a change can be rolled back.

**"Can policies be shared across teams?"**
Yes. Policies are reusable building blocks and can be scoped to project,
environment or organization. Organization-scope policies and policy inheritance
are a shipped capability (see `/blog/changelog-v1-policy-scopes`).

## Governance

**"Who can see the audit ledger?"**
Operators with Control Center access, which is governed by LDAP/AD group
membership (`LDAP_ALLOWED_GROUPS`). Audit evidence rolls up to the organization
boundary.

**"Can we export our data?"**
Yes — JSONL audit stream exports and evidence packs for EU AI Act, GDPR, CPRA
ADMT, SEC Cyber or custom frameworks.

**"Does this replace our DLP?"**
No, and don't position it that way. UMAI governs AI interactions — prompt
semantics, model outputs, agentic tool use — which traditional DLP was not built
for. It is complementary to the existing perimeter stack.

---

# Objection-handling posture

- Answer the objection on its merits. Do not deflect to a CTA.
- If UMAI genuinely does not do something, say so. A clean "no" builds more
  credibility than a vague "it depends."
- Do not disparage a named competitor or a named cloud provider's feature.
  Describe the category difference.
- After a substantive answer, one soft next step is appropriate — a doc link or
  the contact path. Not both, not every time.
