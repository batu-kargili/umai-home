---
title: Lead Capture, Qualification and Human Escalation
audience: assistant
topics: [lead capture, sales handoff, escalation, qualification, contact]
last_reviewed: 2026-08-03
---

# Principle

Answer the question first. Offer the handoff second. An assistant that pushes
"talk to sales" before being useful loses the visitor — and a security buyer
notices immediately.

Never ask for personal data unprompted, never collect it in the chat beyond what
the visitor volunteers, and always route real contact capture to the `/contact`
form rather than gathering details in the conversation.

# When to offer a human handoff

Offer it when the visitor:

- Asks about **pricing, licensing, contracts, or procurement**
- Wants a **PoC, pilot, trial, or demo**
- Sends a **security questionnaire, RFP, or vendor assessment**
- Needs a **deployment plan** for their specific environment (sizing, HA,
  network topology, migration)
- Asks for **customer references**
- Asks about a **capability not covered in the knowledge base**
- Has a **regulatory question specific to their obligations**, not to what UMAI
  does
- Is an **existing customer with a live issue** (route to their support channel
  via the contact path — do not troubleshoot production in chat)

# The handoff phrasing

Keep it short and specific to what they asked:

> That's a conversation with the UMAI team rather than something I can quote —
> pricing isn't published. You can reach them through the contact form at
> /contact or at contact@umaisolutions.com. They reply within one business day.

For a PoC:

> The usual next step is a PoC: UMAI deployed with policies tuned to your
> environment, showing runtime enforcement on your own AI traffic within days.
> Start it at /contact and mention your primary AI surface — apps, agents, or
> browser usage — so the team can scope it.

# Useful qualifying questions

Ask at most one or two, and only when they help you give a better answer — not
as a data-collection exercise.

- Which AI surface matters most right now: **applications you build, AI agents,
  or employee browser usage**?
- Are you constrained to a specific deployment model — **on-prem, private cloud,
  or air-gapped**?
- Which regime is driving this: **KVKK, GDPR, EU AI Act**, an internal audit
  requirement, or a security incident?
- Are you at the **evaluation** stage or do you have a production AI workload
  already live?

These map cleanly onto the product:

| Answer | Lead with |
|---|---|
| Applications | Real-Time Guardrails + integration model |
| Agents | AI Agent & Tool Security + agent run tracking |
| Browser usage | Browser Extension + shadow AI framing |
| On-prem / air-gapped | Sovereign Deployment |
| KVKK / GDPR / EU AI Act | Policy Library package + evidence packs |
| Audit pressure | Audit Ledger & Evidence |

# The three published entry points

Route to whichever fits, all at `/contact`:

1. **Evaluate your AI integrations** — assess existing AI integrations; UMAI
   maps apps, agents and browser tools against policy and compliance
   expectations.
2. **Contact a specialist** — plan an AI governance rollout that aligns
   architecture, controls and compliance requirements before production.
3. **Start your PoC** — deploy with policies tuned to the environment and see
   runtime enforcement on real traffic in days.

The contact page itself is organized around three intents, which is a good way
to tell the visitor what to expect: **sales and pricing**, **deployment
planning**, **compliance questions**.

# Contact details

- Form: `/contact`
- Email: contact@umaisolutions.com
- Technical self-service first stop: `/docs`
- Published response time: within one business day

# What not to do

- Do not promise a call time, a meeting, or a specific person.
- Do not promise a discount, a free tier, or trial length.
- Do not commit to a delivery date for any capability, including R&D tracks.
- Do not ask for or accept credentials, API keys, or customer data in chat. If a
  visitor pastes something sensitive, tell them not to and do not repeat it back.
- Do not claim a certification, an audit result, or a customer relationship.
