---
title: Deployment, Identity and Operations
audience: assistant
topics: [deployment, on-prem, docker, kubernetes, air-gapped, ldap, licensing, troubleshooting, operations]
last_reviewed: 2026-08-03
---

# Deployment models

- SaaS
- Private cloud
- Customer VPC
- On-prem Kubernetes
- Air-gapped

Deployment flexibility is a core capability, not an upsell. The governance
boundary is chosen first; the rollout is then aligned to production constraints.

The customer package deploys three containers — `umai-control-center`,
`umai-service`, `umai-engine` — against external infrastructure the customer
already runs (database, Redis, LDAP, inference endpoint).

# On-prem deployment sequence

Deployment is not just container startup. The clean order:

1. **Receive the release package** — approved UMAI images, the signed
   `license.json`, the matching public key, and the deployment compose file.
2. **Prepare dependencies** — database, Redis, directory integration, DNS, TLS
   and the inference endpoint, before starting any platform container.
3. **Populate the deployment `.env` completely.** Do not leave image references,
   DSNs, Redis URLs, LDAP values or license values to be guessed later.
4. **Run the one-time database bootstrap SQL** for the chosen engine, then run
   `alembic upgrade head` with the UMAI Service image.
5. **Start the stack and validate** — `healthz`, `readyz`, LDAP sign-in,
   guardrail publishing, and the first runtime API request.
6. **Create the first environment, project, API key, policy and guardrail**
   before handing the runtime endpoint to application teams.

Example first-deployment commands:

```bash
docker run --rm \
  --env-file .env \
  -v /opt/umai/license:/etc/umai:ro \
  ${UMAI_SERVICE_IMAGE} \
  alembic upgrade head

docker compose --env-file .env -f umai.compose.yaml up -d

curl -fsS http://localhost:8080/healthz
curl -fsS http://localhost:8080/readyz
curl -fsS http://localhost:8081/healthz
curl -I http://localhost:3000/login
```

## Acceptance criteria

- UMAI Service `readyz` reports healthy database, Redis and Engine dependencies
- Control Center login page loads over HTTPS
- A real LDAP operator account can sign in
- A guardrail can be published without Redis or inference errors
- A project-scoped API key succeeds against the runtime guard endpoint

## Release packaging pattern

The clean enterprise pattern is vendor-controlled image distribution, internal
registry mirroring, signed local license validation, and deployment only from
approved internal infrastructure.

- Mirror images into Harbor, ECR, ACR or Artifact Registry
- Mount the signed `license.json` locally
- Keep image tags and digests aligned across environments

Keep the organization binding aligned with the license: if the deployment
prebinds Control Center to a fixed organization, the organization ID, plan and
license expiry shown in the UI must match the signed license token shipped with
the release.

# Configuration surface

Configuration is environment-variable driven, with `UMAI_*` naming. The shape of
a deployment `.env`:

```env
COMPOSE_PROJECT_NAME=umai-platform

UMAI_ENGINE_IMAGE=registry.internal.example/umai/umai-engine:2026.04.0
UMAI_SERVICE_IMAGE=registry.internal.example/umai/umai-service:2026.04.0
UMAI_CONTROLCENTER_IMAGE=registry.internal.example/umai/umai-controlcenter:2026.04.0

UMAI_DATABASE_ENGINE=postgresql
UMAI_DATABASE_URL=postgresql+asyncpg://umai_app:change-me@db-host:5432/umai

UMAI_REDIS_URL=rediss://redis-host:6379/0
UMAI_ENGINE_REDIS_URL=rediss://redis-host:6379/0

UMAI_DEFAULT_GUARDRAIL_LLM_BASE_URL=https://llm.internal.example/openai/v1
UMAI_DEFAULT_GUARDRAIL_LLM_MODEL=<model-id>
UMAI_DEFAULT_GUARDRAIL_LLM_AUTH_TYPE=header
UMAI_DEFAULT_GUARDRAIL_LLM_AUTH_SECRET_ENV=LLM_API_KEY

UMAI_LICENSE_DIR=./license
UMAI_LICENSE_PUBLIC_KEY=replace-with-public-key

CONTROL_CENTER_SESSION_SECRET=replace-with-session-secret
LDAP_URL=ldaps://directory.internal.example:636
LDAP_BIND_DN=CN=umai-svc,OU=Service Accounts,DC=example,DC=com
LDAP_USER_SEARCH_BASE=OU=Users,DC=example,DC=com
LDAP_ALLOWED_GROUPS=CN=UMAI-Operators,OU=Groups,DC=example,DC=com
```

Never show a real secret value in an answer. These are placeholders.

# Identity — LDAP / Active Directory

Control Center operator access is directory-based.

Authentication flow:
1. The operator opens `/login` on Control Center.
2. Control Center posts the credentials to the login endpoint.
3. UMAI validates them against LDAP or Active Directory.
4. If group restrictions are configured, group membership is verified before a
   session is issued.
5. The operator lands in the workspace or the onboarding flow.

Recommended directory setup:
- Use a dedicated **read-only bind account** rather than anonymous search
- Prefer `ldaps://`
- Define a narrow `LDAP_USER_SEARCH_BASE`
- Set `LDAP_ALLOWED_GROUPS` to control who can reach Control Center
- Import the directory CA into the Control Center trust store when required

Validate before go-live: a valid operator can sign in; a non-member of the
allowed group is denied cleanly; a bad password returns a clear error rather
than a redirect loop; TLS trust works without manual browser exceptions.

Common LDAP failure points: incorrect search base or bind DN; directory
certificate not trusted by the container; group filter too broad or too narrow;
firewall rules blocking port 389 or 636 from Control Center.

# First login and workspace setup

If the deployment is **prebound** to an organization: the operator signs in and
lands directly inside it; name, plan and expiry match the licensed deployment;
environments and projects can be created immediately.

If the workspace is created **inside Control Center**: create the organization,
then the environment representing the deployment boundary, then the first
project the application will use. Keep IDs readable — they flow into logs, URLs
and API usage.

**A good first day:** LDAP sign-in works; the first organization, environment
and project are visible; at least one guardrail is published and testable; a
real application request succeeds through the runtime API.

# Troubleshooting

Start with the visible failure, identify the component directly behind it, and
validate that dependency before going deeper. Do not debug the whole stack at
once.

| Symptom | Where to look first |
|---|---|
| Login page loads but sign-in fails | LDAP URL, bind credentials, search base, allowed groups, certificate trust |
| Service `readyz` reports degraded | Database DSN, runtime DB user, Redis ACLs, Engine connectivity |
| Policies exist but runtime behavior doesn't change | The guardrail version was probably never created and published |
| Guardrail tests fail from Control Center | Selected phase, guardrail version, Engine availability, Redis snapshot presence, default LLM configuration |
| Application requests fail with auth errors | Project API key, guardrail ID, deployment hostname, whether the call is server-side |
| Alerts spike after a release | Compare new guardrail version, policy membership, preflight settings and evaluation results against the prior version before rolling back |

Quick operator checks:

```bash
docker compose --env-file .env -f umai.compose.yaml ps
docker compose --env-file .env -f umai.compose.yaml logs umai-service --tail 120
docker compose --env-file .env -f umai.compose.yaml logs umai-engine --tail 120
docker compose --env-file .env -f umai.compose.yaml logs umai-controlcenter --tail 120

curl -fsS http://localhost:8080/readyz
curl -fsS http://localhost:8081/healthz
curl -I http://localhost:3000/login
```

# Assistant guidance for deployment questions

Answer conceptual and documented questions directly. For anything specific to a
visitor's environment — sizing, HA topology, exact resource requirements,
network diagrams for their security review, migration planning — give the
general model and route to the team. Do not invent sizing numbers, resource
requirements, or version numbers.
