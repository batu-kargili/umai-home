import { Container } from "@/components/ui/Container";
import { SectionLabel } from "@/components/ui/SectionLabel";

const TESTIMONIALS = [
  {
    quote:
      "We evaluated five AI safety vendors and Umai was the only one that could enforce per-tenant policies at sub-2ms latency without a proxy architecture. It's now the security layer every LLM feature in our platform depends on.",
    name: "Priya Nair",
    title: "VP of Platform Engineering",
    company: "Meridian AI",
    avatar: "PN",
    avatarColor: "bg-ocean",
  },
  {
    quote:
      "After a prompt injection incident in our customer-facing chatbot, we deployed Umai in 48 hours. PRE_LLM guardrails caught 100% of subsequent injection attempts in pen testing. The audit logs made our SOC 2 audit effortless.",
    name: "James Holbrook",
    title: "Chief Information Security Officer",
    company: "Vault Insurance",
    avatar: "JH",
    avatarColor: "bg-meadow-teal",
  },
  {
    quote:
      "Umai's multi-tenant control center maps perfectly to our SaaS hierarchy. Each of our enterprise customers gets their own guardrail namespace — their policies, their logs, their compliance reports. This was a deal-breaker requirement we couldn't find anywhere else.",
    name: "Sofia Benedetti",
    title: "Head of AI Product",
    company: "Axis Fintech",
    avatar: "SB",
    avatarColor: "bg-denim",
  },
];

export function TestimonialsSection() {
  return (
    <section className="bg-off-white section-padding">
      <Container>
        <div className="text-center max-w-xl mx-auto mb-14">
          <SectionLabel>Customer stories</SectionLabel>
          <h2 className="text-4xl font-bold text-dark-text tracking-tight">
            Security teams choose Umai
          </h2>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
          {TESTIMONIALS.map((t) => (
            <div
              key={t.name}
              className="bg-white border border-light-gray rounded-[12px] p-8 flex flex-col gap-6 hover:shadow-card-hover transition-all duration-200"
            >
              <div className="text-[52px] leading-none font-serif text-island-cyan/30 -mb-4">
                &ldquo;
              </div>
              <p className="text-[15px] text-dark-text/80 leading-relaxed flex-1">
                {t.quote}
              </p>
              <div className="flex items-center gap-3 pt-4 border-t border-light-gray">
                <div
                  className={`h-10 w-10 rounded-full ${t.avatarColor} flex items-center justify-center text-white text-xs font-bold flex-shrink-0`}
                >
                  {t.avatar}
                </div>
                <div>
                  <p className="text-sm font-semibold text-dark-text">{t.name}</p>
                  <p className="text-xs text-mid-gray">
                    {t.title} · {t.company}
                  </p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </Container>
    </section>
  );
}
