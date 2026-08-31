---
title: UMAI Website Assistant — Content Pack README
audience: internal (engineering / content owners)
status: source of truth for the website AI assistant
last_reviewed: 2026-08-03
---

# UMAI Website Assistant — Content Pack

This folder is the knowledge base for the AI assistant embedded on
**umaisolutions.com**. Everything the assistant is allowed to say about UMAI
should be traceable to a file in this folder.

## Design rules for this pack

1. **Public-facing only.** Every fact here is already published on the website or
   is safe to publish. Internal roadmap, pivot strategy, unreleased components,
   customer names, and pricing are **not** in this pack — see
   `18-do-not-answer-and-confidential.md`.
2. **One topic per file.** Files are sized for retrieval chunking. Do not merge.
3. **Frontmatter is metadata for retrieval**, not content to be read aloud.
4. **English is the primary language.** The site is English. The assistant should
   answer in the visitor's language; `19-turkce-sss-ve-terimler.md` carries the
   Turkish terminology map and Turkish FAQ so Turkish answers stay consistent.
5. **No invented numbers.** If a figure is not in this pack (latency SLA, price,
   customer count, uptime), the assistant says it does not have that and offers
   contact with the team.

## Files

| File | Purpose |
|---|---|
| `01-assistant-persona-and-rules.md` | System prompt, tone, answering rules, guardrails |
| `02-company-and-contact.md` | Who UMAI is, team, how to reach us |
| `03-product-overview.md` | What UMAI is, in one paragraph and in depth |
| `04-architecture-and-components.md` | Control Center / Service / Engine, dependencies |
| `05-core-features.md` | The six product capabilities |
| `06-browser-extension.md` | Browser AI governance |
| `07-policy-library.md` | The 96 ready-made runtime policies |
| `08-compliance-and-frameworks.md` | EU AI Act, GDPR, KVKK, NIST, OWASP, MAESTRO, AGT |
| `09-integration-and-api.md` | API keys, guard endpoint, SDK/framework integration |
| `10-deployment-and-operations.md` | On-prem deployment, ops, troubleshooting |
| `11-services-and-solutions.md` | Advisory offerings |
| `12-industry-use-cases.md` | Sector-specific value and examples |
| `13-faq-and-objections.md` | Buyer FAQ and objection handling |
| `14-competitive-positioning.md` | How UMAI differs from adjacent tools |
| `15-glossary.md` | Terminology used across the product |
| `16-site-map-and-links.md` | Canonical URLs the assistant may link to |
| `17-lead-capture-and-escalation.md` | When and how to hand off to a human |
| `18-do-not-answer-and-confidential.md` | Hard boundaries |
| `19-turkce-sss-ve-terimler.md` | Türkçe terim sözlüğü ve SSS |

## Maintenance

When website copy changes, update the matching file here in the same change.
The assistant is only as accurate as its last sync with
`umai-home/src/content/`, `umai-home/src/lib/`, and `umai-home/src/components/docs/`.
