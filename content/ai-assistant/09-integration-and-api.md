---
title: Integration, API Keys and the Runtime API
audience: assistant
topics: [integration, api, api keys, sdk, langchain, openai agents, guard endpoint, developers]
priority: high
last_reviewed: 2026-08-03
---

# The integration model in four steps

1. Publish a guardrail from Control Center.
2. Create a project API key and store it in server-side secrets management.
3. Call the UMAI runtime API with the correct guardrail ID and phase, from
   trusted server-side code, before or after the model step you want to govern.
4. Honor the returned decision — allow, block, redact, or re-route — and log the
   `request_id` so operators can correlate runtime behavior with UMAI dashboards.

Applications never call Control Center. They call the runtime API on UMAI
Service.

# API keys

API keys are **project-scoped runtime credentials**.

- **Scope.** Create the key inside the project that will own the runtime
  traffic. This keeps usage, alerts and audit evidence tied to the right
  application boundary.
- **Handling.** The full secret is shown **once**, at creation time. After that
  operators see only a preview and revocation status.
- **Security posture.** Store keys only in server-side secrets management. Never
  place them in browser code, mobile clients or shared frontend bundles.

Creating a key: open the project in Control Center → **API Keys** → create a new
secret key with a recognizable name → copy the value immediately into a secret
manager. Use one key per runtime or service so revocation is clean.

Rotation and revocation, in order:
1. Create the replacement key.
2. Roll the new key out through deployment secrets.
3. Verify live runtime traffic with the new key.
4. Revoke the old key from the project key list.

The public API key header is `X-Umai-Api-Key`; bearer-token authorization is
also supported.

# The guard endpoint

```
POST /api/v1/guardrails/{guardrail_id}/guard
```

Example with curl:

```bash
curl https://umai-api.internal.example/api/v1/guardrails/claims-main/guard \
  -H "Authorization: Bearer UMAI_LIVE_REPLACE_ME" \
  -H "Content-Type: application/json" \
  -d '{
        "phase": "PRE_LLM",
        "input": {
          "messages": [{ "role": "user", "content": "Hello" }],
          "phase_focus": "LAST_USER_MESSAGE",
          "content_type": "text"
        }
      }'
```

Server-side TypeScript:

```ts
const response = await fetch(
  "https://umai-api.internal.example/api/v1/guardrails/claims-main/guard",
  {
    method: "POST",
    headers: {
      Authorization: `Bearer ${process.env.UMAI_API_KEY}`,
      "Content-Type": "application/json",
    },
    body: JSON.stringify({
      conversation_id: "conv-1001",
      phase: "PRE_LLM",
      input: {
        messages: [
          {
            role: "user",
            content: "Please summarize this claim and include the IBAN in the result.",
          },
        ],
        phase_focus: "LAST_USER_MESSAGE",
        content_type: "text",
        language: "tr",
        artifacts: [],
      },
      timeout_ms: 1500,
    }),
  }
);

const result = await response.json();

if (!result.decision.allowed) {
  throw new Error(result.decision.reason);
}
```

## Request fields worth knowing

| Field | Meaning |
|---|---|
| `phase` | `PRE_LLM` or `POST_LLM` — two different control points |
| `input.messages` | The conversation turns being evaluated |
| `input.phase_focus` | What to inspect, e.g. `LAST_USER_MESSAGE` |
| `input.content_type` | e.g. `text` |
| `input.language` | Language hint, e.g. `tr` — relevant to localized evaluation |
| `input.artifacts` | Additional content attached to the request |
| `conversation_id` | Correlates turns of the same conversation |
| `timeout_ms` | Client-side evaluation budget |
| `allow_llm_calls` | Whether context-aware policies may call the inference endpoint |

# Async guard jobs

For longer-running agent flows or tool chains that should continue while a
guardrail is evaluated:

```
POST   /api/v1/guardrails/{guardrail_id}/guard/async
GET    /api/v1/guardrails/jobs/{job_id}
POST   /api/v1/guardrails/jobs/{job_id}/wait
POST   /api/v1/guardrails/jobs/{job_id}/cancel
```

The Service stores a guardrail job, background execution processes it, the
result is stored and optionally posted to a webhook, and the client polls or
waits on the job endpoint.

# Agent-oriented endpoints

For agent workloads, the runtime API also exposes agent identity registration
and run tracking:

```
POST   /api/v1/agent-identities/register
POST   /api/v1/agent-runs
POST   /api/v1/agent-runs/{run_id}/steps
PATCH  /api/v1/agent-runs/{run_id}
```

These let an agent register itself, open a run, report steps, and close out —
so agent behavior is visible and reviewable alongside guard decisions.

# SDKs and framework guides

Control Center includes implementation guides for:

- UMAI Browser Extension
- OpenAI Agents SDK
- Google ADK
- Claude
- xAI
- LangChain

A Python SDK is available for application integration. For a framework not in
this list, the integration is a plain HTTPS call — route specifics to the team.

# Integration rules to recommend

- Keep API keys off the frontend, always.
- Use one guardrail ID per governed workflow where possible.
- Treat PRE_LLM and POST_LLM as **different control points**, not one setting.
- Fail safely when the workflow depends on a hard enforcement boundary — decide
  in advance what happens if the guard call itself fails.
- Do not reimplement policy logic in application code. The guardrail is the
  runtime contract; publish the logic there and let the app call UMAI.
- Log the `request_id` on your side so support and audit conversations can be
  correlated.

# Sync vs async, when to choose which

- **Sync** — inline chat, agent prompts, anything where a single decision must
  return before the workflow continues.
- **Async** — longer-running agent flows and tool chains that should proceed
  while evaluation happens.

# One gotcha worth volunteering

Editing a policy alone does **not** change runtime behavior. A new guardrail
version has to be created and published before the Engine evaluates the change.
This is the single most common source of "I changed the policy but nothing
happened."
