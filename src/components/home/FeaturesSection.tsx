import { Container } from "@/components/ui/Container";
import { SectionLabel } from "@/components/ui/SectionLabel";
import { Shield, Zap, Eye, Lock, BarChart3, GitBranch } from "lucide-react";

const FEATURES = [
  {
    icon: Shield,
    title: "PRE_LLM Policy Gates",
    description:
      "Block malicious prompts, PII leakage, and off-topic requests before they ever reach your model. Configurable heuristic and context-aware rules evaluated synchronously in under 2 ms.",
    accent: "ocean",
  },
  {
    icon: Zap,
    title: "POST_LLM Response Guardrails",
    description:
      "Inspect model outputs for hallucination patterns, toxic content, brand violations, and regulatory non-compliance before responses are delivered to end users.",
    accent: "cyan",
  },
  {
    icon: Eye,
    title: "Real-Time Monitoring",
    description:
      "Stream every request and response through a live event bus. Filter by environment, project, risk score, or policy verdict. Correlate anomalies across your entire LLM fleet.",
    accent: "teal",
  },
  {
    icon: Lock,
    title: "Compliance Audit Trail",
    description:
      "Immutable, timestamped logs for every guardrail evaluation. Export to SIEM, Splunk, or your data warehouse. Built for GDPR, HIPAA, and SOC 2 Type II requirements.",
    accent: "ocean",
  },
  {
    icon: BarChart3,
    title: "Risk Scoring Engine",
    description:
      "Dynamic risk scores per message based on content, context, user role, and session history. Route high-risk traffic to human review queues automatically.",
    accent: "cyan",
  },
  {
    icon: GitBranch,
    title: "Multi-Environment Control",
    description:
      "Separate Development, Staging, and Production guardrail configurations. Promote policy sets between environments with a single API call. Zero-downtime policy updates.",
    accent: "teal",
  },
];

const accentClasses: Record<string, string> = {
  ocean: "text-ocean bg-ocean/10",
  cyan:  "text-island-cyan bg-island-cyan/10",
  teal:  "text-meadow-teal bg-meadow-teal/10",
};

export function FeaturesSection() {
  return (
    <section id="features" className="bg-off-white section-padding">
      <Container>
        <div className="text-center max-w-2xl mx-auto mb-16">
          <SectionLabel>Platform capabilities</SectionLabel>
          <h2 className="text-4xl font-bold text-dark-text mb-4 tracking-tight">
            Everything you need to ship{" "}
            <span className="text-gradient-ocean">AI responsibly</span>
          </h2>
          <p className="text-mid-gray text-base leading-relaxed">
            From prompt sanitization to post-response filtering, Umai covers every
            layer of your LLM pipeline with millisecond-latency policy enforcement.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {FEATURES.map((feature) => {
            const iconClass = accentClasses[feature.accent] ?? accentClasses.ocean;
            return (
              <div
                key={feature.title}
                className="bg-white border border-light-gray rounded-[12px] p-7 hover:shadow-card-hover hover:-translate-y-0.5 transition-all duration-200"
              >
                <div
                  className={`h-11 w-11 rounded-lg ${iconClass} flex items-center justify-center mb-5`}
                >
                  <feature.icon className="w-5 h-5" />
                </div>
                <h3 className="text-[17px] font-semibold text-dark-text mb-2">
                  {feature.title}
                </h3>
                <p className="text-sm text-mid-gray leading-relaxed">
                  {feature.description}
                </p>
              </div>
            );
          })}
        </div>
      </Container>
    </section>
  );
}
