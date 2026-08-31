---
title: Compliance Regimes and Security Frameworks
audience: assistant
topics: [compliance, eu ai act, gdpr, kvkk, nist ai rmf, owasp, maestro, microsoft agt, soc2, evidence]
priority: high
last_reviewed: 2026-08-03
---

# How UMAI relates to regulation

UMAI is a **control and evidence** product. It enforces policy at runtime and
produces a defensible record. It does not certify compliance, and it does not
replace legal judgment. The honest framing to use with visitors:

> UMAI gives you the runtime control, the mapping from that control to a
> regulatory clause, and the tamper-evident evidence that the control ran. Your
> legal and compliance function makes the compliance determination.

# Compliance regimes with mapped policy coverage

These four have concrete, shipped policy packages — see `07-policy-library.md`
for details and counts.

| Regime | Instrument | Coverage in UMAI |
|---|---|---|
| **KVKK** | Law No. 6698, amended by Law No. 7499 | 30 runtime policies; Türkiye-aligned policy routing; Board AI guidance reflected |
| **GDPR** | Regulation (EU) 2016/679 | 22 runtime policies; data and privacy enforcement |
| **EU AI Act** | Regulation (EU) 2024/1689 | 22 runtime policies; risk and control mapping |
| **NIST AI RMF** | NIST AI Risk Management Framework | Govern, Map, Measure, Manage — used as the operating-model reference |

Additional regimes supported at the **evidence pack** level: evidence packs can
be generated for EU AI Act, GDPR, CPRA ADMT, SEC Cyber, and custom frameworks.

The site's trust statement: *"Map enterprise controls to EU AI Act, GDPR, KVKK,
and NIST AI RMF obligations. Enforce runtime guardrails across prompts,
responses, tool calls, and approvals. Produce tamper-evident evidence for
internal governance review and external audit workflows."*

# Security frameworks UMAI aligns to

**OWASP Top 10 for LLM Applications (2025).** Runtime checks aligned to prompt
injection, sensitive-data exposure, insecure output handling, excessive agency,
supply-chain integrity and unbounded consumption. 22 shipped policies mapped to
LLM01–LLM10.

**MAESTRO (Cloud Security Alliance).** *Multi-Agent Environment, Security,
Threat, Risk, and Outcome* — CSA's agentic-AI threat-modeling framework,
presented as a seven-layer reference architecture for identifying, assessing and
mitigating risk across the AI lifecycle. UMAI uses it for threat modeling and
control design across prompts, tools, memory and agent action boundaries, and
offers it as an advisory engagement (see `11-services-and-solutions.md`).
Read more: `/solutions/maestro-framework-implementation`.

**Microsoft AI Governance Toolkit (AGT).** Governance workflows, reviews and
evidence handling organized for enterprise control owners. UMAI's governance
workflows are designed to align with this model.
Read more: `/solutions/ai-governance`.

# What UMAI contributes to an audit

- **Reconstruction.** Which guardrail version was active, which policy fired,
  what action was returned, whether content was redacted, when, and under which
  request ID.
- **Integrity.** Events are hash-chained, so tampering is detectable.
- **Export.** JSONL audit streams for raw review; evidence packs scoped to a
  regime and a time window for external review.
- **Human oversight record.** Approval requests, justifications and operator
  interventions are recorded alongside the automated decisions.
- **Control effectiveness.** Evaluation runs show measured guardrail behavior on
  representative datasets, before and after policy changes.

Recommended audit operating model:
1. Review recent events in the Audit Ledger.
2. Export JSONL when incident response or external review needs the raw stream.
3. Generate evidence packs on a predictable cadence.
4. Keep project, environment and organization IDs consistent — they shape the
   evidence trail.

# Frequently asked compliance questions

**"Does UMAI make us EU AI Act compliant?"**
No product does. UMAI enforces controls that map to specific Articles —
prohibited practices under Article 5, high-risk obligations, transparency and
record-keeping duties — and produces the evidence that those controls ran. The
classification of your system, your conformity assessment, and your FRIA remain
your organization's responsibility.

**"Is UMAI SOC 2 certified?"**
Do not claim any certification. UMAI publishes guidance on operating AI systems
that are *in scope* for SOC 2 Type II (see the blog post
`/blog/soc2-ai-compliance`), which is a different statement. For UMAI's own
certification status, route the question to the team.

**"Where does our data go?"**
In a sovereign deployment, governance data stays in the customer's
infrastructure: the customer's database, the customer's Redis, the customer's
inference endpoint. UMAI Control Center, Service and Engine run as customer-
hosted containers. See `10-deployment-and-operations.md`.

**"Can you support data residency in Türkiye / the EU?"**
Yes — that is the purpose of sovereign deployment. The control plane runs where
the customer places it, including on-prem and air-gapped environments. Specific
residency architecture should be planned with the team.

**"Do you use our data to train models?"**
UMAI does not position itself as a model trainer. Policy evaluation calls the
customer's own approved, OpenAI-compatible inference endpoint. For contractual
data-use language, route the question to the team rather than answering
definitively.

**"Which regulation do you cover for Türkiye specifically?"**
KVKK (Law No. 6698, as amended by Law No. 7499), with 30 policies covering
Turkish identifiers (TCKN, IBAN), Article 6 special categories, cross-border
transfer, 72-hour breach notification and retention/erasure — and reflecting the
Board's AI Recommendations (2025), Generative AI Guide (Nov 2025), workplace
generative-AI announcement (Mar 2026) and Agentic AI document (2026).
