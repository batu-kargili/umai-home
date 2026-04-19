import Image from "next/image";
import Link from "next/link";
import {
  ArrowRight,
  CheckCircle2,
  FileCheck2,
  ShieldCheck,
} from "lucide-react";
import {
  CONTACT_URL,
  PRIMARY_CTA_CLASS,
  TRUST_ASSURANCE_POINTS,
  TRUST_BLOG_CARDS,
  TRUST_COMPLIANCE_FRAMEWORKS,
  TRUST_SECURITY_FRAMEWORKS,
} from "@/components/home/premium-landing-content";
import { Container } from "@/components/ui/Container";

const COMPLIANCE_META: Record<string, { accent: string }> = {
  "eu-ai-act": { accent: "EU" },
  "nist-ai-rmf": { accent: "US" },
  gdpr: { accent: "EU" },
  kvkk: { accent: "TR" },
};

export function PremiumTrustFrameworkSection() {
  return (
    <div id="trust-frameworks">
      <TrustRegulationsSection />
      <TrustSecurityFrameworksSection />
      <TrustAssuranceModelSection />
      <TrustResourcesSection />
    </div>
  );
}

function TrustRegulationsSection() {
  return (
    <section className="relative border-y border-black/6 bg-white py-20 md:py-24">
      <Container className="relative">
        <div className="mx-auto max-w-3xl text-center">
          <p className="inline-flex items-center gap-2 text-[11px] font-semibold uppercase tracking-[0.22em] text-[#0E68BC]">
            <span className="rounded-full bg-[#EDF4FF] px-2.5 py-1 text-[10px] text-[#0056F9]">
              01
            </span>
            Regulatory alignment
          </p>
          <h3 className="mt-4 text-[30px] font-bold tracking-[-0.02em] text-[#15202B] md:text-[40px]">
            Regulations we map to.
          </h3>
          <p className="mx-auto mt-4 max-w-[620px] text-[15px] leading-relaxed text-[#4B5563]">
            Every control surface is traceable to the obligations your auditors
            and regulators review.
          </p>
        </div>

        <div className="mt-12 grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
          {TRUST_COMPLIANCE_FRAMEWORKS.map((framework) => {
            const meta =
              COMPLIANCE_META[framework.id] ?? COMPLIANCE_META["eu-ai-act"];
            return (
              <div
                key={framework.id}
                className="group relative rounded-2xl border border-black/8 bg-[#FAFBFF] p-6 transition-all duration-200 hover:-translate-y-0.5 hover:border-[#0056F9]/20 hover:bg-white hover:shadow-[0_14px_36px_rgba(21,32,43,0.08)]"
              >
                <div className="flex items-start justify-between">
                  <div className="relative flex h-14 w-14 items-center justify-center rounded-xl border border-black/6 bg-white p-2.5">
                    <Image
                      src={framework.logo}
                      alt={`${framework.label} logo`}
                      fill
                      sizes="56px"
                      className="object-contain p-2.5"
                    />
                  </div>
                  <span className="rounded-full border border-black/8 bg-white px-2.5 py-1 text-[9px] font-bold uppercase tracking-[0.14em] text-[#6B7280]">
                    {meta.accent}
                  </span>
                </div>
                <h4 className="mt-6 text-[17px] font-semibold tracking-[-0.01em] text-[#15202B]">
                  {framework.label}
                </h4>
                <p className="mt-2 text-base leading-relaxed text-[#4B5563]">
                  {framework.detail}
                </p>
              </div>
            );
          })}
        </div>
      </Container>
    </section>
  );
}

function TrustSecurityFrameworksSection() {
  return (
    <section className="relative overflow-hidden bg-[#F6F4FF] py-20 md:py-24">
      <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(circle_at_88%_8%,rgba(109,74,255,0.10),transparent_28%),radial-gradient(circle_at_10%_90%,rgba(0,86,249,0.06),transparent_28%)]" />

      <Container className="relative">
        <div className="mx-auto max-w-3xl text-center">
          <p className="inline-flex items-center gap-2 text-[11px] font-semibold uppercase tracking-[0.22em] text-[#7C3AED]">
            <span className="rounded-full bg-white px-2.5 py-1 text-[10px] text-[#7C3AED]">
              02
            </span>
            Applied frameworks
          </p>
          <h3 className="mt-4 text-[30px] font-bold tracking-[-0.02em] text-[#15202B] md:text-[40px]">
            Security and governance frameworks we apply.
          </h3>
          <p className="mx-auto mt-4 max-w-[640px] text-[15px] leading-relaxed text-[#4B5563]">
            Industry-standard threat models and governance toolkits wired
            directly into the runtime control plane.
          </p>
        </div>

        <div className="mt-12 grid gap-4 lg:grid-cols-3">
          {TRUST_SECURITY_FRAMEWORKS.map((framework) => (
            <div
              key={framework.id}
              className="group relative rounded-2xl border border-black/6 bg-white p-6 shadow-[0_8px_24px_rgba(21,32,43,0.04)] transition-all duration-200 hover:-translate-y-0.5 hover:border-[#7C3AED]/22 hover:shadow-[0_16px_40px_rgba(109,74,255,0.12)]"
            >
              <div className="relative flex h-14 w-14 items-center justify-center rounded-2xl border border-[#E5E7EB] bg-[#F9FBFF] p-2">
                {framework.logo ? (
                  <Image
                    src={framework.logo}
                    alt={`${framework.label} logo`}
                    fill
                    sizes="56px"
                    className="object-contain p-2"
                  />
                ) : (
                  <span className="bg-gradient-to-br from-[#0056F9] to-[#7C3AED] bg-clip-text text-2xl font-black text-transparent">
                    {framework.badge}
                  </span>
                )}
              </div>
              <h4 className="mt-5 text-[17px] font-semibold tracking-[-0.01em] text-[#15202B]">
                {framework.label}
              </h4>
              <p className="mt-2.5 text-base leading-relaxed text-[#4B5563]">
                {framework.detail}
              </p>
            </div>
            ))}
          </div>
      </Container>
    </section>
  );
}

function TrustAssuranceModelSection() {
  return (
    <section className="relative overflow-hidden bg-[#0A0F1A] py-20 md:py-28">
      <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(circle_at_20%_20%,rgba(0,86,249,0.22),transparent_32%),radial-gradient(circle_at_80%_80%,rgba(109,74,255,0.18),transparent_28%)]" />
      <div className="pointer-events-none absolute inset-0 opacity-[0.12] umai-grid-overlay" />

      <Container className="relative">
        <div className="grid gap-12 lg:grid-cols-[0.9fr_1.1fr] lg:items-start lg:gap-16">
          <div>
            <p className="inline-flex items-center gap-2 text-[11px] font-semibold uppercase tracking-[0.22em] text-[#8FB3FF]">
              <span className="rounded-full bg-white/8 px-2.5 py-1 text-[10px] text-[#8FB3FF]">
                03
              </span>
              Assurance model
            </p>
            <h3 className="mt-4 text-[32px] font-bold leading-[1.12] tracking-[-0.02em] text-white md:text-[44px]">
              From regulatory mapping to attack-surface control in one runtime
              layer.
            </h3>
            <p className="mt-5 max-w-[520px] text-[15px] leading-relaxed text-white/64">
              UMAI translates policy intent into runtime evaluation, approval
              enforcement, and exportable evidence instead of relying on static
              documentation alone.
            </p>

            <div className="mt-8 inline-flex items-center gap-2 rounded-full border border-white/12 bg-white/[0.04] px-4 py-2 backdrop-blur">
              <ShieldCheck className="h-4 w-4 text-[#8FB3FF]" />
              <span className="text-[11px] font-semibold uppercase tracking-[0.18em] text-white/76">
                Runtime control plane
              </span>
            </div>
          </div>

          <ul className="grid gap-3">
            {TRUST_ASSURANCE_POINTS.map((point, index) => (
              <li
                key={point}
                className="flex items-start gap-4 rounded-2xl border border-white/8 bg-white/[0.04] p-5 backdrop-blur-sm transition-colors hover:border-white/14 hover:bg-white/[0.06]"
              >
                <div className="mt-0.5 flex h-8 w-8 flex-shrink-0 items-center justify-center rounded-full bg-[linear-gradient(135deg,#0056F9_0%,#7C3AED_100%)] shadow-[0_8px_20px_rgba(0,86,249,0.32)]">
                  <CheckCircle2 className="h-4 w-4 text-white" />
                </div>
                <div>
                  <p className="text-[10px] font-semibold uppercase tracking-[0.18em] text-[#8FB3FF]">
                    {String(index + 1).padStart(2, "0")}
                  </p>
                  <span className="mt-1.5 block text-[15px] leading-relaxed text-white/88">
                    {point}
                  </span>
                </div>
              </li>
            ))}
          </ul>
        </div>
      </Container>
    </section>
  );
}

function TrustResourcesSection() {
  return (
    <section className="relative overflow-hidden bg-[#F9FAFF] py-20 md:py-24">
      <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(circle_at_12%_90%,rgba(0,86,249,0.06),transparent_28%),radial-gradient(circle_at_88%_10%,rgba(109,74,255,0.06),transparent_24%)]" />

      <Container className="relative">
        <div className="mx-auto max-w-3xl text-center">
          <p className="inline-flex items-center gap-2 text-[11px] font-semibold uppercase tracking-[0.22em] text-[#0E68BC]">
            <span className="rounded-full bg-white px-2.5 py-1 text-[10px] text-[#0056F9]">
              04
            </span>
            Further reading
          </p>
          <h3 className="mt-4 text-[28px] font-bold tracking-[-0.02em] text-[#15202B] md:text-[36px]">
            Go deeper on how the frameworks connect.
          </h3>
        </div>

        <div className="mt-10 grid gap-4 md:grid-cols-2">
          {TRUST_BLOG_CARDS.map((card) => (
            <Link
              key={card.id}
              href={card.href}
              className="group flex items-center justify-between gap-4 rounded-2xl border border-black/8 bg-white p-5 transition-all duration-200 hover:-translate-y-0.5 hover:border-[#0056F9]/20 hover:shadow-[0_12px_32px_rgba(21,32,43,0.08)]"
            >
              <div className="flex items-start gap-4">
                <div className="flex h-11 w-11 flex-shrink-0 items-center justify-center rounded-xl bg-[#F5ECFF] text-[#7C3AED]">
                  <FileCheck2 className="h-5 w-5" />
                </div>
                <div>
                  <p className="text-[10px] font-semibold uppercase tracking-[0.18em] text-[#7C3AED]">
                    {card.label}
                  </p>
                  <h4 className="mt-1.5 text-[15px] font-semibold leading-snug text-[#15202B]">
                    {card.title}
                  </h4>
                </div>
              </div>
              <ArrowRight className="h-5 w-5 flex-shrink-0 text-[#0056F9] transition-transform group-hover:translate-x-0.5" />
            </Link>
          ))}
        </div>

        <div className="mt-10 flex flex-col gap-5 rounded-[24px] bg-[linear-gradient(135deg,#15202B_0%,#1E2A3A_100%)] p-6 shadow-[0_20px_56px_rgba(21,32,43,0.18)] md:flex-row md:items-center md:justify-between md:p-8">
          <div>
            <p className="text-[11px] font-semibold uppercase tracking-[0.18em] text-[#bfd3ff]">
              Governance rollout
            </p>
            <p className="mt-2 max-w-[540px] text-[15px] leading-relaxed text-white/72">
              Align security, GRC, and platform teams around one operational
              control plane for apps, agents, and browser AI.
            </p>
          </div>
          <Link href={CONTACT_URL} className={PRIMARY_CTA_CLASS}>
            Discuss governance rollout <ArrowRight className="h-4 w-4" />
          </Link>
        </div>
      </Container>
    </section>
  );
}
