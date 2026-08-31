---
title: UMAI Browser Extension — Browser AI Governance
audience: assistant
topics: [browser extension, shadow ai, chatgpt, gemini, claude, dlp, employee ai usage]
last_reviewed: 2026-08-03
---

# What it is

The UMAI Browser Extension is the browser-native control path for AI usage that
happens **outside** your internal applications. It governs employee interaction
with public AI surfaces — ChatGPT, Gemini, Claude and similar — without changing
those applications and without app rewrites or infrastructure changes.

Site framing: *"Make employee AI usage visible, enforceable, and auditable
without changing the target apps."*

Detail page: `/browser-extension`. Feature page:
`/features/browser-ai-governance`.

# The problem it solves

Shadow AI grows faster than most enterprise policy programs can react. The
choice organizations usually face is "ban the tools" or "hope for the best."
The extension gives a third option: visibility and graduated control on the
tools people already use.

- Create visibility into employee AI behavior without banning productive tools
- Reduce leakage of confidential, regulated or customer data through consumer
  AI interfaces
- Give security and compliance a managed rollout path instead of ad hoc controls

# What it does

- **Monitors usage** across supported browser AI services
- **Evaluates outbound content locally**, before sensitive text leaves the
  browser — local inspection before transmission is the privacy-relevant design
  choice
- **Applies per-site policy actions**: allow, warn, block, redact, or require
  justification before submit
- **Uploads governed usage events** to UMAI for central review

# Where it fits

- Use **runtime guardrails** for governed internal applications and APIs.
- Use the **Browser Extension** for browser AI usage outside those apps.
- Review both in the same UMAI governance operating model — extension activity
  feeds into UMAI monitoring and extension event views, so browser usage sits
  beside runtime governance instead of becoming a separate blind spot.

That single-plane property is the point. The site's phrasing: *"Send governed
browser events into UMAI for monitoring, review, and audit-ready traceability
alongside the rest of your AI estate."*

# Deployment

The extension is deployed through **managed browser policy**, so installation,
configuration and update control stay with IT and security teams. It is an
enterprise-managed control, not something employees install themselves.

Typical rollout sequence:

1. Force-install the extension through managed Chrome or Edge policy.
2. Push tenant and policy configuration through managed browser settings.
3. Start in metadata-only capture or warning mode for a phased rollout.
4. Move to block or redact once reviewed usage patterns are understood.

Managed configuration is delivered as browser-managed settings, for example:

```json
{
  "tenantId": "11111111-1111-1111-1111-111111111111",
  "policyUrl": "https://umai-api.internal.example/extension/policy",
  "ingestBaseUrl": "https://umai-api.internal.example/extension/events",
  "deviceToken": "replace-with-managed-device-token"
}
```

Operators can also connect an extension from Control Center, which issues a
short-lived device token for that device. The extension then sends telemetry to
UMAI Service, which validates the token and persists the events; Control Center
reads extension summaries and event streams back from the admin API.

# Example use cases

- Claims teams using AI drafting tools with customer-data exposure limits
- Legal and HR teams needing justification or redaction workflows before submit
- Engineering organizations needing visibility into code or design data sent to
  public AI services

# Governance value

- Supports internal acceptable-use and restricted-data-handling policy
- Generates evidence for operator review, incident response and audit readiness
- Aligns user-facing interventions with EU AI Act and privacy program
  expectations

# Positioning notes for the assistant

- The extension is a **visible, authorized enterprise control**. Never describe
  it as covert, silent, or hidden monitoring. It is deployed by IT with managed
  policy, the same way any enterprise browser control is.
- Local inspection before transmission is a privacy feature — sensitive content
  is evaluated on the endpoint rather than shipped somewhere first.
- Do not promise coverage of a specific AI site that is not named here. The
  named surfaces are ChatGPT, Gemini and Claude, plus "similar browser AI
  surfaces." For a specific tool, route the question to the team.
