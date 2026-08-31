---
title: UMAI Policy Library — Ready-Made Runtime Policies
audience: assistant
topics: [policy library, kvkk, gdpr, eu ai act, owasp, policies, policy packs]
priority: high
last_reviewed: 2026-08-03
---

# What the Policy Library is

UMAI ships **96 curated runtime policies** grouped into four framework packages,
so teams start from a ready-made package instead of authoring from scratch.

Every library policy runs on the UMAI Engine and uses the same **Heuristic** and
**Context-Aware** policy types operators author in Control Center. Every policy
declares its phase (`PRE_LLM`, `POST_LLM`, or both), its action, and the
regulatory or standard clause it maps to. Every decision is written to the
hash-chained audit ledger and can be exported as compliance evidence.

Browse at `/docs/policy-library`; each framework has a detail page at
`/docs/policy-library/<slug>`.

# The four packages

| Package | Policies | Instrument | Route |
|---|---:|---|---|
| KVKK | 30 | Law No. 6698 (amended by Law No. 7499) | `/docs/policy-library/kvkk` |
| GDPR | 22 | Regulation (EU) 2016/679 | `/docs/policy-library/gdpr` |
| EU AI Act | 22 | Regulation (EU) 2024/1689 | `/docs/policy-library/eu-ai-act` |
| OWASP LLM Top 10 | 22 | OWASP Top 10 for LLM Applications (2025) | `/docs/policy-library/owasp` |

Policy codes follow the pattern `KVKK-01`, `GDPR-01`, `AIACT-01`, `OWASP-01`.

---

## KVKK — Turkish Personal Data Protection Law (30 policies)

Protects personal data and special-category data in AI interactions under
Türkiye's KVKK regime. Coverage reflects the 2024 Law No. 7499 amendments
(special-category grounds, cross-border transfer, the administrative-fine
regime) and the Board's AI guidance: the AI Recommendations (2025), the
Generative AI Guide (November 2025), the workplace generative-AI announcement
(March 2026), and the Agentic AI document (2026).

Coverage focus:
- Turkish identifiers — TCKN, IBAN, phone, email, address — with validation and
  masking
- Full special-category coverage under Article 6 (health, biometric, belief and
  others)
- Cross-border transfer, standard-contract and no-training routing controls
- 72-hour breach notification, retention/erasure, and audit-trail evidence

Example: **KVKK-01 — Turkish National ID (TCKN) Protection.**

---

## GDPR — EU General Data Protection Regulation (22 policies)

Protects EU data subjects and any EU-facing activity flowing through AI
interactions, including data exchange with EU subsidiaries, suppliers and
trading partners.

Coverage focus:
- EU identifier detection across German, French, Italian and Romanian formats
- Complete Article 9 special-category coverage
- Data-subject rights: erasure, access (DSAR), and automated-decision limits
- Chapter V transfer control, ROPA evidence, and privacy-by-design proof

---

## EU AI Act — Regulation (EU) 2024/1689 (22 policies)

Enforces prohibited practices, high-risk system obligations and transparency
duties at runtime. Sectors classified as critical infrastructure under Annex III
— energy and utilities, for example — carry high-risk obligations; policies
marked with an asterisk (*) target those critical-infrastructure and high-risk
scenarios directly.

Coverage focus:
- Article 5 prohibited-practice barriers (manipulation, social scoring, and
  more)
- High-risk classification with automatic control escalation
- Critical-infrastructure and human-oversight controls
- Transparency, record-keeping, bias detection, and FRIA / risk-management
  evidence

Example: **AIACT-01 — Subliminal Manipulation Barrier.**

---

## OWASP LLM Top 10 (2025) (22 policies)

Runtime protection against the framework's attack vectors, each policy mapped to
its OWASP category (LLM01–LLM10).

Coverage focus:
- Direct, indirect, encoded and multilingual prompt-injection defense
- Credential, corporate-secret and personal-data leak prevention
- Insecure-output sanitization for code, links and markdown
- Agent tool whitelisting, action-scope limits, and human approval gates
- Supply-chain integrity and unbounded-consumption controls

Two representative policies:

**OWASP-01 — Direct Prompt Injection Detection.** Detects and blocks inputs
aimed at overriding system instructions ("ignore previous instructions",
instruction injection, role-switch commands). Known patterns are caught by a
heuristic pre-check; semantic variants are caught in the context-aware layer.
Type: Heuristic + Context-Aware. Phase: PRE_LLM. Action: BLOCK.

**Topic Boundary & Scope Drift Control.** Prevents an AI application from
drifting outside its defined purpose — a customer chatbot giving legal opinions,
recommending competitor products, or making reputationally damaging statements.
Type: Context-Aware + Exact Match. Phase: PRE_LLM + POST_LLM. Action: BLOCK /
FLAG. Basis: LLM01, LLM06 (scope control).

---

# The two policy mechanisms

**Heuristic policies** — pattern-based controls. Use where precision is
pattern-based and low latency matters: identifiers, prompt-injection indicators,
forbidden phrases, deterministic data classes.

Typical heuristic use cases:
- Block IBANs, claim IDs, account numbers, internal reference numbers
- Detect prompt-injection phrases or command-override attempts
- Flag obvious contact data or secrets before a model call

**Context-aware policies** — model-reasoned controls. Use only when the decision
truly depends on semantics.

Typical context-aware use cases:
- Detect nuanced requests for prohibited financial guidance
- Review domain-specific compliance statements that depend on context
- Distinguish legitimate support traffic from risky exfiltration attempts

# Authoring your own policies

Library packages are a starting point, not a ceiling. In Control Center an
operator can:

1. Open a project and go to **Policies**
2. Use **Create** for a new policy, **Templates** for a starter, or **Existing**
   to review what is live
3. Describe the rule in plain language and review the AI-generated draft
4. Set name, policy ID, scope, enabled state and phases
5. Review the config preview and example decisions
6. Attach the policy to a guardrail

Policies can be scoped to **project, environment, or organization**, and can run
in PRE_LLM, POST_LLM, or both.

Good authoring practice: keep each policy focused on one control objective; use
heuristics where the pattern is precise; reserve context-aware rules for genuine
semantic decisions; document examples that explain both ALLOW and BLOCK
behavior.

# Important caveat for the assistant

Mapping a policy to a regulation is **not** a compliance determination. UMAI
provides the control, the mapping and the evidence; the customer's legal and
compliance function decides whether their obligations are met. Never tell a
visitor they "will be KVKK compliant" or "will pass an EU AI Act audit."
