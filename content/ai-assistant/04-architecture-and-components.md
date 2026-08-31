---
title: Architecture, Components and the Governance Model
audience: assistant
topics: [architecture, components, control center, service, engine, hierarchy, dependencies]
priority: high
last_reviewed: 2026-08-03
---

# The three platform services

A UMAI deployment is three services plus external enterprise dependencies.

## UMAI Control Center

The operator-facing web application. This is where humans work.

- Onboarding, organizations, environments, projects
- Policy authoring, guardrail composition, versioning and publishing
- Guardrail testing playground and evaluation runs
- API key management
- Monitoring dashboards, alert review, audit ledger, evidence packs
- Implementation guides for integrating applications
- Authenticates operators against **LDAP or Active Directory**
- Proxies operator actions to UMAI Service through same-origin routes

Primary users: platform admins, tenant admins, auditors, security and
compliance teams.

## UMAI Service

The control plane and the public runtime API. This is the system of record.

- Stores organizations, environments, projects, policies, guardrails, API keys,
  evaluations, alerts, approvals, evidence packs and audit records
- Validates the signed license
- Authenticates runtime traffic by API key / bearer token
- Resolves which guardrail version should execute
- Publishes guardrail snapshots for runtime distribution
- Records audit events and generates evidence
- Receives browser extension telemetry

Primary callers: customer applications, Control Center, the browser extension,
and operators/auditors via admin APIs.

## UMAI Engine

The internal policy evaluation runtime. Never exposed to operators or the
internet.

- Loads the published guardrail snapshot
- Runs preflight checks
- Runs the applicable policies for the requested phase
- Returns a deterministic decision payload
- Calls the approved inference endpoint when a context-aware policy needs model
  reasoning

Only UMAI Service calls the Engine.

## Division of responsibility, in one line each

- **Control Center defines and visualizes governance.**
- **Service operationalizes governance.**
- **Engine enforces governance.**

# External dependencies

UMAI is designed for enterprise environments and consumes infrastructure the
customer already runs. The customer provides:

| Dependency | Purpose | Supported |
|---|---|---|
| Relational database | System of record | PostgreSQL, SQL Server, Oracle |
| Redis | Published guardrail snapshot distribution | Required |
| LDAP / Active Directory | Control Center operator sign-in | Required |
| OpenAI-compatible inference endpoint | Context-aware policy evaluation | Required when context-aware policies are used |
| SIEM destination | Forwarding governance events | Optional |

UMAI does not bundle the database, Redis, or the directory. A deployment
consumes connection details for the customer's existing systems.

# The governance object model

The platform is hierarchical by design. Getting this model right before
integration matters more than any single setting.

```
Organization          top-level governance boundary
   └── Environment    deployment boundary (prod, staging, prod-eu, a cluster)
         └── Project  runtime boundary (API keys, monitoring, alerts, evaluations)
               ├── Policies    individual rules — reusable building blocks
               └── Guardrails  deployable runtime packages that group policies
```

**Organization** — the highest governance boundary. Owns the license, the
top-level audit scope, the operator workspace, and the identity binding used by
Control Center. Use one organization per legal or operating boundary. Directory
access and audit evidence roll up here.

**Environment** — a runtime boundary such as production, staging, a region, or a
cluster. Separates deployment context, operational visibility and rollout
stages. Common IDs: `prod`, `staging`, `prod-eu`. Keep IDs stable — they appear
in logs and audit records.

**Project** — the working unit for application integration. API keys, project
dashboards, alerts, evaluations and guardrail publishing are all project-scoped.
Use one project per governed application surface or owning team.

**Policy** — the smallest rule unit. Defines what is checked, in which phase,
how the decision is made, and what action is returned.

**Guardrail** — the deployable runtime package. Groups policies with preflight
checks, runtime mode and versioning. This is what an application actually calls.

Practical warning to pass on: a weak project boundary creates API key sprawl and
noisy dashboards; a weak environment boundary makes rollout and audit harder.
Decide both before applications start integrating.

# Where state lives

- **SQL database** — the system of record: tenants, licenses, environments,
  projects, API keys, policies, guardrails and versions, audit events,
  approvals, evidence packs, extension events, evaluation runs, model and agent
  registry entries.
- **Redis** — published guardrail snapshots, keyed by version. The Engine reads
  Redis and does not need direct SQL access for policy execution. Redis is the
  bridge between authored governance and enforced runtime behavior.
- **Control Center** — operator session (HTTP-only cookie) and the operator's
  workspace selection. A convenience layer, not the authoritative store.

# Trust boundaries

1. **Browser → Control Center.** The operator is authenticated by Control
   Center against the directory; the session lives in an HTTP-only cookie. The
   browser does not call the Service directly in the normal UI flow.
2. **Control Center → Service.** Admin traffic is proxied same-origin.
3. **Application → Service.** Runtime traffic authenticates with an API key or
   bearer token; the Service checks license and scope before calling the Engine.
4. **Service → Engine.** The Engine is internal-only. The Service sends
   normalized internal requests and receives deterministic decisions.

# Recommended network exposure

- Expose **one HTTPS hostname for Control Center** (operators).
- Expose **one HTTPS hostname for runtime API traffic**, reachable only from
  approved application networks or a controlled reverse proxy.
- Keep **UMAI Engine private**. Operators should never call it from a browser.

Default container ports in the sample deployment package: Control Center `3000`,
Service `8080`, Engine `9000` in-container (loopback-mapped to `8081` on the
host in the sample). These are deployment defaults, not fixed requirements.

# Runtime request flow, end to end

1. The application sends a runtime request to UMAI Service.
2. The Service authenticates the API key.
3. The Service validates the tenant license.
4. The Service resolves organization, environment, project and the current
   guardrail version.
5. The Service builds an internal engine request.
6. The Engine loads the published snapshot from Redis.
7. The Engine runs preflight rules.
8. The Engine runs the applicable policies for the requested phase.
9. The Engine returns a decision.
10. The Service records audit data and returns the public response.

An **async** variant exists for higher-latency or workflow-oriented
integrations: the app submits a guard job, the Service stores it, background
execution processes it, the result is stored and optionally posted to a webhook,
and the client polls or waits on the job endpoint.
