import { Container } from "@/components/ui/Container";
import { SectionLabel } from "@/components/ui/SectionLabel";

const STEPS = [
  {
    phase: "PRE_LLM",
    phaseColor: "text-island-cyan bg-island-cyan/15 border-island-cyan/30",
    step: "01",
    title: "Request enters your LLM pipeline",
    description:
      "Your application forwards the user message to the Umai SDK. The SDK wraps the call transparently — no changes to your existing prompt engineering.",
    code: `import { UmaiClient } from "@umai/sdk";

const umai = new UmaiClient({
  apiKey: process.env.UMAI_KEY
});

const result = await umai.evaluate({
  phase: "PRE_LLM",
  projectId: "prod-chatbot",
  message: userInput,
  userId: session.userId,
});

if (result.verdict === "BLOCK") {
  return { error: result.reason };
}`,
    sideLabel: "Input Evaluation",
    rtl: false,
  },
  {
    phase: "POST_LLM",
    phaseColor: "text-meadow-teal bg-meadow-teal/15 border-meadow-teal/30",
    step: "02",
    title: "Response is scanned before delivery",
    description:
      "After your LLM generates a response, Umai evaluates it against POST_LLM policies — checking for hallucinations, PII in outputs, policy violations, and brand safety.",
    code: `const llmResponse = await openai.chat.completions
  .create({ model: "gpt-4o", messages });

const postCheck = await umai.evaluate({
  phase: "POST_LLM",
  projectId: "prod-chatbot",
  response: llmResponse.choices[0].message.content,
  context: { originalMessage: message },
});

return postCheck.safeContent
  ?? "[Response blocked]";`,
    sideLabel: "Output Inspection",
    rtl: true,
  },
  {
    phase: "AUDIT",
    phaseColor: "text-ocean bg-ocean/15 border-ocean/30",
    step: "03",
    title: "Every decision is logged and auditable",
    description:
      "All guardrail verdicts — ALLOW, WARN, BLOCK — are stored with full context: policy matched, risk score, user ID, tenant, timestamp. Available via dashboard and REST API.",
    code: `# Query audit logs via REST API
GET /api/v1/audit/events
  ?project_id=prod-chatbot
  &phase=POST_LLM
  &verdict=BLOCK
  &from=2025-01-01T00:00:00Z
  &limit=100

# Response includes:
# event_id, timestamp, verdict
# matched_policy_id, risk_score
# request/response hash (PII-stripped)
# user_id, session_id, environment_id`,
    sideLabel: "Full Auditability",
    rtl: false,
  },
];

export function HowItWorks() {
  return (
    <section className="bg-white section-padding">
      <Container>
        <div className="text-center max-w-2xl mx-auto mb-16">
          <SectionLabel>How it works</SectionLabel>
          <h2 className="text-4xl font-bold text-dark-text mb-4 tracking-tight">
            Three-phase enforcement,{" "}
            <span className="text-gradient-ocean">zero friction</span>
          </h2>
          <p className="text-mid-gray text-base leading-relaxed">
            Umai integrates as a thin SDK wrapper. You keep your existing LLM
            calls — Umai adds policy enforcement without changing your architecture.
          </p>
        </div>

        <div className="space-y-24">
          {STEPS.map((step) => (
            <div
              key={step.step}
              className={`grid lg:grid-cols-2 gap-12 items-center ${
                step.rtl ? "lg:[&>*:first-child]:order-2" : ""
              }`}
            >
              {/* Text side */}
              <div>
                <div className="flex items-center gap-3 mb-5">
                  <span
                    className={`text-[11px] font-semibold uppercase tracking-widest px-3 py-1 rounded-full border ${step.phaseColor}`}
                  >
                    {step.phase}
                  </span>
                  <span className="text-[40px] font-black text-light-gray leading-none">
                    {step.step}
                  </span>
                </div>
                <h3 className="text-[28px] font-semibold text-dark-text mb-4 tracking-tight">
                  {step.title}
                </h3>
                <p className="text-mid-gray leading-relaxed mb-6">
                  {step.description}
                </p>
                <p className="text-xs font-semibold uppercase tracking-widest text-ocean">
                  {step.sideLabel}
                </p>
              </div>

              {/* Code side */}
              <div className="rounded-[12px] overflow-hidden border border-white/10 bg-[#0d1117]">
                <div className="flex items-center gap-2 px-4 py-2.5 bg-[#161b22] border-b border-white/5">
                  <span className="h-3 w-3 rounded-full bg-[#ff5f57]" />
                  <span className="h-3 w-3 rounded-full bg-[#febc2e]" />
                  <span className="h-3 w-3 rounded-full bg-[#28c840]" />
                </div>
                <pre className="px-5 py-5 overflow-x-auto text-[13px] text-[#e6edf3] leading-relaxed font-mono">
                  <code>{step.code}</code>
                </pre>
              </div>
            </div>
          ))}
        </div>
      </Container>
    </section>
  );
}
