---
title: Glossary
audience: assistant
topics: [glossary, terminology, definitions]
last_reviewed: 2026-08-03
---

# UMAI platform terms

**Organization** — the top-level governance boundary. Owns the license, the
top-level audit scope, the operator workspace, and the identity binding. One per
legal or operating boundary.

**Environment** — a runtime boundary such as `prod`, `staging`, `prod-eu`, or a
cluster. Separates deployment context, visibility and rollout stage.

**Project** — the working unit for application integration. API keys,
dashboards, alerts, evaluations and guardrail publishing are project-scoped.

**Policy** — the smallest rule unit. Defines what is checked, in which phase,
how the decision is made, and what action is returned. Reusable.

**Guardrail** — the deployable runtime package an application actually calls. It
groups policies with preflight checks, runtime mode and versioning.

**Guardrail version** — an immutable numbered revision of a guardrail. Publishing
a version is what makes a change take effect at runtime.

**Snapshot** — the published, distributable form of a guardrail version, read by
the Engine at evaluation time.

**Preflight** — checks that define *what content is inspected* before policy
execution, e.g. the last user message or broader conversation context.

**Phase focus** — which part of the conversation the evaluation targets, e.g.
`LAST_USER_MESSAGE`.

**PRE_LLM** — the phase before the user input reaches the model. Where you stop
unsafe, out-of-scope or sensitive input.

**POST_LLM** — the phase before the model output returns to the user or a
downstream system. Where you stop unsafe or disclosing output.

**MONITOR mode** — the guardrail observes and records but does not block.
Recommended for initial rollout and false-positive tuning.

**ENFORCE mode** — the guardrail actively blocks or modifies traffic based on
policy outcomes.

**Decision** — what the Engine returns: the action, severity, reason and the
triggering policy.

**Action** — `ALLOW`, `WARN`, `REDACT`, `BLOCK`, `FLAG`, or escalate/approve.

**Heuristic policy** — pattern-based control. Fast, deterministic. For
identifiers, injection indicators, forbidden phrases, known data classes.

**Context-aware policy** — model-reasoned control. For decisions that genuinely
depend on semantics and intent. Requires an inference endpoint.

**Audit ledger** — the tamper-evident, hash-chained record of governed events.

**Event hash / prev event hash** — the chaining fields that make the ledger
tamper-evident.

**Evidence pack** — an exportable bundle of audit evidence scoped to a
regulatory regime and time window (EU AI Act, GDPR, CPRA ADMT, SEC Cyber, or
custom).

**Evaluation run** — a measured replay of a dataset through a guardrail,
producing grade, action accuracy, block/allow rate, confusion data and sample
results.

**Step-up approval** — a human-approval request raised for a sensitive or
high-impact action before it proceeds.

**Justification** — user- or operator-supplied reasoning captured when an
exception is allowed.

**API key** — a project-scoped runtime credential. Shown once at creation.
Header: `X-Umai-Api-Key`, or bearer token.

**Request ID** — the correlation identifier returned with a decision. Log it
application-side to tie your logs to UMAI dashboards and audit records.

**Device token** — a short-lived JWT issued to a browser extension device so it
can send telemetry to UMAI Service.

**Guard endpoint** — `POST /api/v1/guardrails/{guardrail_id}/guard`, the runtime
evaluation call.

**Async guard job** — the deferred variant of the guard call, for long-running
agent flows; polled or waited on via the jobs endpoints.

**Agent run** — a tracked execution of an agent, reported step by step so agent
behavior is reviewable alongside guard decisions.

# Component names

**UMAI Control Center** — the operator web application.
**UMAI Service** — the control plane and public runtime API; the system of record.
**UMAI Engine** — the internal policy evaluation runtime.
**UMAI Browser Extension** — the managed browser control for public AI surfaces.

# Industry and regulatory terms

**Shadow AI** — employee use of AI tools outside sanctioned, governed channels.

**Prompt injection** — an input crafted to override system instructions. Direct
(from the user) or indirect (from retrieved content or a tool result).

**Excessive agency** — an agent having more permission or autonomy than the task
requires; an OWASP LLM Top 10 category.

**Insecure output handling** — downstream systems consuming model output without
sanitization (code, links, markdown).

**DLP** — Data Loss Prevention.

**SWG** — Secure Web Gateway.

**SIEM** — Security Information and Event Management.

**KVKK** — Türkiye's Personal Data Protection Law, No. 6698 (amended by Law No.
7499).

**TCKN** — Turkish national identification number.

**GDPR** — Regulation (EU) 2016/679.

**EU AI Act** — Regulation (EU) 2024/1689.

**FRIA** — Fundamental Rights Impact Assessment, required for certain high-risk
systems under the EU AI Act.

**Annex III** — the EU AI Act annex listing high-risk use cases, including
critical infrastructure such as energy and utilities.

**NIST AI RMF** — NIST AI Risk Management Framework; functions are Govern, Map,
Measure, Manage.

**OWASP LLM Top 10** — OWASP's top-ten risk list for LLM applications; the 2025
edition is the version UMAI's policies map to (LLM01–LLM10).

**MAESTRO** — Cloud Security Alliance's seven-layer agentic-AI threat modeling
framework: Multi-Agent Environment, Security, Threat, Risk, and Outcome.

**Microsoft AGT** — Microsoft AI Governance Toolkit.

**DSAR** — Data Subject Access Request.

**ROPA** — Record of Processing Activities (GDPR Article 30).

**PHI** — Protected Health Information.
