import { Container } from "@/components/ui/Container";
import { SectionLabel } from "@/components/ui/SectionLabel";
import { ArrowRight } from "lucide-react";

const USE_CASES = [
  {
    industry: "Financial Services",
    headline: "Prevent AI-driven data exfiltration",
    body: "Banks and trading platforms use Umai to enforce zero-tolerance policies on PII extraction and sensitive data generation — blocking account number leakage, MNPI violations, and GDPR breaches before they occur.",
    stat: "94% reduction in compliance incidents",
  },
  {
    industry: "Healthcare & Life Sciences",
    headline: "HIPAA-compliant AI assistants",
    body: "Clinical AI copilots and patient-facing chatbots run safely with Umai guardrails filtering PHI from every LLM output, enforcing consent-based disclosure rules, and flagging hallucinated medical guidance.",
    stat: "100% PHI-free in POST_LLM outputs",
  },
  {
    industry: "Enterprise SaaS",
    headline: "Multi-tenant AI safety at scale",
    body: "Product teams building AI features for thousands of enterprise customers need per-tenant guardrail configurations. Umai's multi-tenant architecture enforces customer-specific policies without cross-tenant data leakage.",
    stat: "< 2 ms per evaluation at 50K RPM",
  },
  {
    industry: "Legal & Compliance",
    headline: "Audit every AI interaction",
    body: "Law firms and compliance departments require immutable records of AI advisory outputs. Umai logs every guardrail decision with full context for discovery, review, and regulatory reporting.",
    stat: "Full chain-of-custody for AI outputs",
  },
];

export function UseCasesSection() {
  return (
    <section id="use-cases" className="bg-midnight section-padding">
      <Container>
        <div className="text-center max-w-2xl mx-auto mb-16">
          <SectionLabel light>Use cases</SectionLabel>
          <h2 className="text-4xl font-bold text-white mb-4 tracking-tight">
            Built for the industries where{" "}
            <span className="text-gradient-cyan">AI failure is not an option</span>
          </h2>
          <p className="text-white/55 text-base leading-relaxed">
            Umai&apos;s policy engine is purpose-built for regulated and
            security-conscious industries that cannot accept unpredictable AI behavior.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {USE_CASES.map((uc) => (
            <div
              key={uc.industry}
              className="group relative rounded-[12px] bg-denim/40 border-glow p-8 cursor-pointer"
            >
              <p className="text-[11px] font-semibold uppercase tracking-[0.18em] text-island-cyan mb-3">
                {uc.industry}
              </p>
              <h3 className="text-[22px] font-semibold text-white mb-3 group-hover:text-island-cyan transition-colors">
                {uc.headline}
              </h3>
              <p className="text-sm text-white/55 leading-relaxed mb-5">{uc.body}</p>
              <p className="text-xs font-bold text-meadow-teal mb-6">{uc.stat}</p>
              <span className="inline-flex items-center gap-1 text-sm font-semibold text-ocean hover:text-island-cyan transition-colors">
                Learn more <ArrowRight className="w-3.5 h-3.5" />
              </span>
            </div>
          ))}
        </div>
      </Container>
    </section>
  );
}
