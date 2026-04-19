export interface DocSection {
  id: string;
  label: string;
  items: DocItem[];
}

export interface DocItem {
  id: string;
  label: string;
  anchor: string;
}

export const DOC_SECTIONS: DocSection[] = [
  {
    id: "start-here",
    label: "Start Here",
    items: [
      { id: "what-is-umai", label: "What is UMAI?", anchor: "#what-is-umai" },
      {
        id: "platform-structure",
        label: "Platform Structure",
        anchor: "#platform-structure",
      },
      {
        id: "on-prem-architecture",
        label: "On-Prem Architecture",
        anchor: "#on-prem-architecture",
      },
      { id: "deploy-umai", label: "Deploy UMAI", anchor: "#deploy-umai" },
    ],
  },
  {
    id: "access-identity",
    label: "Access & Identity",
    items: [
      {
        id: "ldap-authentication",
        label: "LDAP Authentication",
        anchor: "#ldap-authentication",
      },
      { id: "first-login", label: "First Login", anchor: "#first-login" },
      { id: "api-keys", label: "API Keys", anchor: "#api-keys" },
    ],
  },
  {
    id: "governance",
    label: "Governance",
    items: [
      { id: "policies", label: "Policies", anchor: "#policies" },
      { id: "guardrails", label: "Guardrails", anchor: "#guardrails" },
      { id: "evaluations", label: "Evaluations", anchor: "#evaluations" },
      {
        id: "test-guardrails",
        label: "Guardrail Testing",
        anchor: "#test-guardrails",
      },
    ],
  },
  {
    id: "operate-integrate",
    label: "Operate & Integrate",
    items: [
      {
        id: "integrate-guardrails",
        label: "Integrate Guardrails",
        anchor: "#integrate-guardrails",
      },
      {
        id: "monitoring-alerts",
        label: "Monitoring & Alerts",
        anchor: "#monitoring-alerts",
      },
      { id: "audit-logs", label: "Audit Logs", anchor: "#audit-logs" },
      {
        id: "browser-extension",
        label: "Browser Extension",
        anchor: "#browser-extension",
      },
      { id: "troubleshooting", label: "Troubleshooting", anchor: "#troubleshooting" },
    ],
  },
];

export const DEFAULT_DOC_ID = DOC_SECTIONS[0]?.items[0]?.id ?? "what-is-umai";
