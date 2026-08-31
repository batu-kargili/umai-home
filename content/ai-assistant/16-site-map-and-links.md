---
title: Site Map — Canonical Links the Assistant May Use
audience: assistant
topics: [links, navigation, site map, urls, blog, docs]
last_reviewed: 2026-08-03
---

# Rule

Only link to routes listed here. Never invent a URL. If the right page does not
exist, describe the answer and offer `/contact` or `/docs`.

Base URL: `https://umaisolutions.com`

# Primary pages

| Route | What it covers |
|---|---|
| `/` | Home — value props, use cases, industries, differentiators, FAQ |
| `/platform` | Platform overview — modules, workflow, deployment posture |
| `/platform/testing-evaluation` | Datasets, simulations and validation runs before rollout |
| `/browser-extension` | Browser AI governance product page |
| `/docs` | Documentation hub |
| `/about` | Company, mission, leadership and team |
| `/contact` | Contact sales, deployment planning, compliance questions |
| `/blog` | Engineering, compliance and security articles |
| `/innovation` | R&D tracks |
| `/privacy` · `/terms` · `/cookie-preferences` | Legal and consent |

# Feature pages — `/features/<slug>`

| Route | Feature |
|---|---|
| `/features/real-time-guardrails` | PRE_LLM and POST_LLM enforcement |
| `/features/browser-ai-governance` | ChatGPT, Gemini, Claude governance |
| `/features/sovereign-deployment` | On-prem, private cloud, air-gapped |
| `/features/ai-agent-tool-security` | Tool allowlists and action scope |
| `/features/audit-ledger-evidence` | Hash-chained records and evidence packs |
| `/features/compliance-human-oversight` | Monitor/enforce modes, review, reporting |

# Solution pages — `/solutions/<slug>`

| Route | Advisory offering |
|---|---|
| `/solutions/policy-guardrail-design` | Policy & Guardrail Design |
| `/solutions/red-teaming` | Red Teaming |
| `/solutions/maestro-framework-implementation` | MAESTRO threat modeling |
| `/solutions/ai-governance` | AI governance operating model |

# Policy library — `/docs/policy-library`

| Route | Package |
|---|---|
| `/docs/policy-library` | Library index — 96 policies across 4 frameworks |
| `/docs/policy-library/kvkk` | KVKK — 30 policies |
| `/docs/policy-library/gdpr` | GDPR — 22 policies |
| `/docs/policy-library/eu-ai-act` | EU AI Act — 22 policies |
| `/docs/policy-library/owasp` | OWASP LLM Top 10 — 22 policies |

# Documentation sections — anchors under `/docs`

**Start here:** `#what-is-umai`, `#platform-structure`, `#on-prem-architecture`,
`#deploy-umai`

**Access & identity:** `#ldap-authentication`, `#first-login`, `#api-keys`

**Governance:** `#policies`, `#guardrails`, `#evaluations`, `#test-guardrails`

**Operate & integrate:** `#integrate-guardrails`, `#monitoring-alerts`,
`#audit-logs`, `#browser-extension`, `#troubleshooting`

Example: link a deployment question to `/docs#deploy-umai`.

# Blog posts — `/blog/<slug>`

| Slug | Title | Category |
|---|---|---|
| `runtime-controls-prompt-injection-data-leakage` | Runtime Controls for Prompt Injection and Data Leakage: A Practitioner's Guide | Security |
| `evidence-first-ai-governance` | Evidence-First AI Governance: Why Regulated Companies Are Rethinking the Operating Model | Compliance |
| `browser-ai-governance-beyond-api-perimeter` | Browser AI Governance: Why the API Perimeter Is Not Enough | Security |
| `eu-ai-act-readiness-without-operational-drag` | EU AI Act Readiness Without Operational Drag | Compliance |
| `enterprise-control-apps-agents-copilots` | One Control Plane for Apps, Agents, and Copilots | Engineering |
| `policy-enforcement-milliseconds` | Policy Enforcement in Milliseconds: Latency Budgets That Do Not Break AI Features | Engineering |
| `eliminate-ai-compliance-gaps` | Closing the AI Compliance Gap | Compliance |
| `enforce-policy-at-the-source` | Stop Data Leakage Before It Reaches the Model | Security |
| `audit-ready-tamper-evident-evidence` | From Quarter-Long Audits to Real-Time Evidence | Compliance |
| `prompt-injection-defense-2025` | Defending Against Prompt Injection at Scale | Security |
| `soc2-ai-compliance` | How UMAI Helps You Pass SOC 2 Type II with AI Systems in Scope | Compliance |
| `post-llm-pii-detection` | Catching hallucinated PII in the POST_LLM layer | Engineering |
| `multi-tenant-guardrails` | Building Multi-Tenant AI Safety: Architecture Patterns for SaaS Platforms | Engineering |
| `umai-ga-announcement` | UMAI is Generally Available: Enterprise AI Guardrails for Everyone | Announcement |
| `changelog-v1-policy-scopes` | Changelog v1.4 — Organization-scope Policies and Policy Inheritance | Changelog |

# Events

| Route | What |
|---|---|
| `/events/eu-ai-act-enforcement` | EU AI Act enforcement webinar registration |

# Link-picking heuristics

| Visitor asks about | Send them to |
|---|---|
| What UMAI is | `/platform` |
| Employee ChatGPT usage | `/browser-extension` |
| Regulatory coverage | `/docs/policy-library` |
| How to integrate | `/docs#integrate-guardrails` |
| Deployment / on-prem | `/docs#deploy-umai` |
| Audit and evidence | `/features/audit-ledger-evidence` |
| Agent safety | `/features/ai-agent-tool-security` |
| Threat modeling / red teaming | `/solutions/red-teaming` or `/solutions/maestro-framework-implementation` |
| Pricing, PoC, contracts | `/contact` |
| Who the company is | `/about` |
