import Image from "next/image";
import Link from "next/link";
import { ArrowRight } from "lucide-react";

import { ContactSalesForm } from "@/components/contact/ContactSalesForm";
import { MarketingFooter } from "@/components/layout/MarketingFooter";
import { MarketingHeader } from "@/components/layout/MarketingHeader";
import { MaestroSevenLayerDiagram } from "@/components/solutions/MaestroSevenLayerDiagram";
import { Container } from "@/components/ui/Container";
import {
  getOtherSolutions,
  type UmaiSolution,
} from "@/content/umai-solutions";

const eyebrow = "text-[11px] font-semibold uppercase tracking-[0.2em] text-[#6f6f6f]";
const accentEyebrow = "text-[11px] font-semibold uppercase tracking-[0.2em] text-[#0056F9]";
const sectionHeading =
  "mt-4 text-[32px] font-bold leading-[1.08] tracking-[-0.02em] text-[#161616] md:text-[42px]";
const bodyText = "mt-5 text-base leading-relaxed text-[#525252] md:text-[17px]";
const chip =
  "rounded-full border border-[#e0e0e0] bg-white px-3 py-1.5 text-[11px] font-medium uppercase tracking-[0.14em] text-[#525252]";
const darkChip =
  "rounded-full border border-white/10 bg-white/[0.04] px-3 py-1.5 text-[11px] font-medium uppercase tracking-[0.14em] text-white/70";

type SolutionImagery = { hero: string; secondary: string };

const solutionImagery: Record<string, SolutionImagery> = {
  "policy-guardrail-design": {
    hero: "/assets/enterprise-3.png",
    secondary: "/assets/enterprise-1.png",
  },
  "red-teaming": {
    hero: "/assets/enterprise-2.png",
    secondary: "/assets/enterprise-3.png",
  },
  "maestro-framework-implementation": {
    hero: "/assets/enterprise-4.png",
    secondary: "/assets/enterprise-1.png",
  },
  "ai-governance": {
    hero: "/assets/enterprise-1.png",
    secondary: "/assets/enterprise-4.png",
  },
};

const defaultImagery: SolutionImagery = {
  hero: "/assets/enterprise-1.png",
  secondary: "/assets/enterprise-3.png",
};

export function SolutionDetailPage({ solution }: { solution: UmaiSolution }) {
  const otherSolutions = getOtherSolutions(solution.slug);
  const imagery = solutionImagery[solution.slug] ?? defaultImagery;

  return (
    <div className="min-h-screen bg-white text-[#161616]">
      <MarketingHeader accent="blue" theme="light" />

      <main>
        {/* Hero */}
        <section className="border-b border-[#e8e8e8] bg-white">
          <Container className="grid gap-12 pb-16 pt-12 md:pb-20 md:pt-16 lg:grid-cols-[minmax(0,0.95fr)_minmax(0,1fr)] lg:items-center">
            <div className="max-w-[36rem]">
              <p className="text-sm text-[#6f6f6f]">
                <Link href="/" className="text-[#0056F9] transition-colors hover:underline">
                  Home
                </Link>
                <span className="mx-2">/</span>
                <span className="text-[#161616]">{solution.title}</span>
              </p>

              <p className={`${accentEyebrow} mt-8`}>{solution.hero.eyebrow}</p>
              <h1 className="mt-4 text-[38px] font-bold leading-[1.02] tracking-[-0.03em] text-[#161616] md:text-[54px]">
                {solution.hero.title}
                <br />
                <span className="text-[#0056F9]">{solution.hero.accent}</span>
              </h1>
              <p className="mt-5 text-base leading-relaxed text-[#525252] md:text-lg">
                {solution.hero.body}
              </p>

              <div className="mt-8 flex flex-wrap gap-3">
                <Link
                  href={solution.hero.primaryCtaHref}
                  className="inline-flex items-center justify-center gap-2 rounded-xl bg-[#0056F9] px-5 py-3 text-sm font-semibold text-white transition-all duration-200 hover:-translate-y-0.5 hover:bg-[#0B5BEA]"
                >
                  {solution.hero.primaryCtaLabel}
                  <ArrowRight className="h-4 w-4" />
                </Link>
                <Link
                  href={solution.hero.secondaryCtaHref}
                  className="inline-flex items-center justify-center gap-2 rounded-xl border border-[#e0e0e0] bg-white px-5 py-3 text-sm font-medium text-[#161616] transition-colors duration-200 hover:border-[#0056F9] hover:text-[#0056F9]"
                >
                  {solution.hero.secondaryCtaLabel}
                </Link>
              </div>

              <div className="mt-8 flex flex-wrap gap-2">
                {solution.hero.chips.map((c) => (
                  <span key={c} className={chip}>
                    {c}
                  </span>
                ))}
              </div>
            </div>

            <div className="overflow-hidden rounded-[8px] border border-[#e0e0e0] bg-white">
              <div className="relative aspect-[5/4] w-full overflow-hidden bg-[#0A0A0F]">
                <Image
                  src={imagery.hero}
                  alt={`${solution.title} service overview illustration`}
                  fill
                  priority
                  quality={95}
                  sizes="(max-width: 1024px) 100vw, 560px"
                  className="object-cover object-[center_18%]"
                />
                <div className="pointer-events-none absolute inset-0 bg-gradient-to-t from-black/55 via-black/10 to-transparent" />
                <div className="absolute left-5 top-5 inline-flex items-center gap-1.5 rounded-full border border-white/25 bg-black/35 px-3 py-1 backdrop-blur-sm">
                  <span className="h-1.5 w-1.5 rounded-full bg-[#8FB3FF]" />
                  <span className="text-[10px] font-semibold uppercase tracking-[0.14em] text-white">
                    {solution.hero.panelEyebrow}
                  </span>
                </div>
                <p className="absolute inset-x-5 bottom-5 max-w-[30rem] text-[1rem] font-semibold leading-snug tracking-[-0.01em] text-white md:text-[1.1rem]">
                  {solution.hero.panelTitle}
                </p>
              </div>

              <div className="p-6 md:p-7">
                <div className="divide-y divide-[#eeeeee]">
                  {solution.hero.panelItems.map((item, idx) => (
                    <div key={item.title} className="flex gap-4 py-3.5 first:pt-0 last:pb-0">
                      <span className="mt-0.5 w-6 shrink-0 text-[11px] font-semibold text-[#6f6f6f]">
                        {String(idx + 1).padStart(2, "0")}
                      </span>
                      <div>
                        <p className="text-sm font-semibold text-[#161616]">{item.title}</p>
                        <p className="mt-1 text-sm leading-relaxed text-[#525252]">
                          {item.body}
                        </p>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </Container>
        </section>

        {/* Concept */}
        <section className="bg-white py-16 md:py-24">
          <Container>
            <div className="max-w-3xl">
              <p className={accentEyebrow}>{solution.concept.eyebrow}</p>
              <h2 className={sectionHeading}>{solution.concept.title}</h2>
              <p className={bodyText}>{solution.concept.body}</p>
              <div className="mt-6 flex flex-wrap gap-2">
                {solution.concept.sourceChips.map((c) => (
                  <span key={c} className={chip}>
                    {c}
                  </span>
                ))}
              </div>
            </div>

            <div className="mt-12 grid gap-4 md:grid-cols-3">
              {solution.concept.cards.map((item, idx) => {
                const Icon = item.icon;

                return (
                  <div
                    key={item.title}
                    className="rounded-[8px] border border-[#e0e0e0] bg-white p-7 transition-colors hover:border-[#0056F9]/40"
                  >
                    <div className="flex items-center justify-between">
                      <div className="flex h-10 w-10 items-center justify-center rounded-[8px] border border-[#e0e0e0] bg-[#F7F9FF] text-[#0056F9]">
                        <Icon className="h-[18px] w-[18px]" />
                      </div>
                      <span className="text-[11px] font-semibold text-[#6f6f6f]">
                        {String(idx + 1).padStart(2, "0")}
                      </span>
                    </div>
                    <h3 className="mt-6 text-[1.12rem] font-bold leading-snug text-[#161616]">
                      {item.title}
                    </h3>
                    <p className="mt-3 text-sm leading-relaxed text-[#525252]">
                      {item.body}
                    </p>
                  </div>
                );
              })}
            </div>
          </Container>
        </section>

        {/* Context */}
        {solution.context ? (
          <section className="border-t border-[#e8e8e8] bg-[#FAFAFA] py-16 md:py-24">
            <Container>
              <div className="grid gap-12 lg:grid-cols-[minmax(0,0.85fr)_minmax(0,1.15fr)] lg:items-start">
                <div className="max-w-[32rem]">
                  <p className={accentEyebrow}>{solution.context.eyebrow}</p>
                  <h2 className={sectionHeading}>{solution.context.title}</h2>
                  <p className={bodyText}>{solution.context.body}</p>
                  <div className="mt-6 flex flex-wrap gap-2">
                    {solution.context.sourceChips.map((c) => (
                      <span key={c} className={chip}>
                        {c}
                      </span>
                    ))}
                  </div>

                  <div className="mt-8 rounded-[8px] border border-[#e0e0e0] bg-white p-6 md:p-7">
                    <p className={accentEyebrow}>{solution.context.footerEyebrow}</p>
                    <h3 className="mt-3 text-[1.25rem] font-bold leading-tight tracking-[-0.02em] text-[#161616] md:text-[1.4rem]">
                      {solution.context.footerTitle}
                    </h3>
                    <p className="mt-4 text-sm leading-relaxed text-[#525252]">
                      {solution.context.footerBody}
                    </p>
                    <div className="mt-5 flex flex-wrap gap-2">
                      {solution.context.footerPoints.map((item) => (
                        <span key={item} className={chip}>
                          {item}
                        </span>
                      ))}
                    </div>
                  </div>
                </div>

                <div className="grid gap-4 md:grid-cols-2">
                  {solution.context.items.map((item, index) => {
                    const isLastOddItem =
                      solution.context!.items.length % 2 === 1 &&
                      index === solution.context!.items.length - 1;

                    return (
                      <div
                        key={item.title}
                        className={`rounded-[8px] border border-[#e0e0e0] bg-white p-6 ${
                          isLastOddItem ? "md:col-span-2" : ""
                        }`}
                      >
                        <p className={eyebrow}>
                          {String(index + 1).padStart(2, "0")} — Key learning
                        </p>
                        <h3 className="mt-4 text-[1.05rem] font-bold leading-snug text-[#161616]">
                          {item.title}
                        </h3>
                        <p className="mt-3 text-sm leading-relaxed text-[#525252]">
                          {item.body}
                        </p>
                      </div>
                    );
                  })}
                </div>
              </div>
            </Container>
          </section>
        ) : null}

        {/* Diagram */}
        {solution.diagram ? (
          <section className="bg-white py-16 md:py-24">
            <Container>
              <div className="grid gap-12 lg:grid-cols-[minmax(0,0.75fr)_minmax(0,1.25fr)] lg:items-start">
                <div className="max-w-[30rem]">
                  <p className={accentEyebrow}>{solution.diagram.eyebrow}</p>
                  <h2 className={sectionHeading}>{solution.diagram.title}</h2>
                  <p className={bodyText}>{solution.diagram.body}</p>
                  <div className="mt-6 flex flex-wrap gap-2">
                    {solution.diagram.notes.map((item) => (
                      <span key={item} className={chip}>
                        {item}
                      </span>
                    ))}
                  </div>
                </div>

                <div>
                  {solution.diagram.type === "maestro-seven-layer" ? (
                    <MaestroSevenLayerDiagram />
                  ) : null}
                </div>
              </div>
            </Container>
          </section>
        ) : null}

        {/* Vital */}
        <section className="bg-[#0A0A0F] py-16 text-white md:py-24">
          <Container className="grid gap-12 lg:grid-cols-[minmax(0,0.9fr)_minmax(0,1.1fr)] lg:items-start">
            <div className="max-w-[34rem]">
              <p className="text-[11px] font-semibold uppercase tracking-[0.2em] text-[#8FB3FF]">
                {solution.vital.eyebrow}
              </p>
              <h2 className="mt-4 text-[32px] font-bold leading-[1.08] tracking-[-0.02em] text-white md:text-[44px]">
                {solution.vital.title}
              </h2>
              <p className="mt-5 text-base leading-relaxed text-white/64 md:text-[17px]">
                {solution.vital.body}
              </p>

              <div className="mt-8 flex flex-wrap gap-2">
                {solution.vital.checkpoints.map((checkpoint) => (
                  <span key={checkpoint} className={darkChip}>
                    {checkpoint}
                  </span>
                ))}
              </div>
            </div>

            <div className="grid gap-4 md:grid-cols-3 lg:grid-cols-1">
              {solution.vital.cards.map((item, idx) => {
                const Icon = item.icon;

                return (
                  <div
                    key={item.title}
                    className="rounded-[8px] border border-white/10 bg-white/[0.03] p-6"
                  >
                    <div className="flex items-center justify-between">
                      <div className="flex h-10 w-10 items-center justify-center rounded-[8px] border border-white/10 bg-white/[0.04] text-[#8FB3FF]">
                        <Icon className="h-[18px] w-[18px]" />
                      </div>
                      <span className="text-[11px] font-semibold text-white/40">
                        {String(idx + 1).padStart(2, "0")}
                      </span>
                    </div>
                    <h3 className="mt-6 text-[1.08rem] font-bold leading-snug text-white">
                      {item.title}
                    </h3>
                    <p className="mt-3 text-sm leading-relaxed text-white/64">
                      {item.body}
                    </p>
                  </div>
                );
              })}
            </div>
          </Container>
        </section>

        {/* Help */}
        <section className="bg-white py-16 md:py-24">
          <Container>
            <div className="grid gap-12 lg:grid-cols-[minmax(0,0.75fr)_minmax(0,1.25fr)] lg:items-start">
              <div className="max-w-[30rem]">
                <div className="relative mb-8 aspect-[5/4] overflow-hidden rounded-[8px] border border-[#e0e0e0] bg-[#0A0A0F]">
                  <Image
                    src={imagery.secondary}
                    alt={`${solution.title} implementation illustration`}
                    fill
                    quality={90}
                    sizes="(max-width: 1024px) 100vw, 420px"
                    className="object-cover object-[center_18%]"
                  />
                  <div className="pointer-events-none absolute inset-0 bg-gradient-to-t from-black/45 via-transparent to-transparent" />
                  <div className="absolute left-4 bottom-4 inline-flex items-center gap-1.5 rounded-full border border-white/25 bg-black/35 px-3 py-1 backdrop-blur-sm">
                    <span className="h-1.5 w-1.5 rounded-full bg-[#8FB3FF]" />
                    <span className="text-[10px] font-semibold uppercase tracking-[0.14em] text-white">
                      Delivered with your team
                    </span>
                  </div>
                </div>
                <p className={accentEyebrow}>{solution.help.eyebrow}</p>
                <h2 className={sectionHeading}>{solution.help.title}</h2>
                <p className={bodyText}>{solution.help.body}</p>
                <div className="mt-6 flex flex-wrap gap-2">
                  {solution.help.outcomes.map((item) => (
                    <span key={item} className={chip}>
                      {item}
                    </span>
                  ))}
                </div>
              </div>

              <div className="grid gap-4 md:grid-cols-2">
                {solution.help.cards.map((item, idx) => {
                  const Icon = item.icon;

                  return (
                    <div
                      key={item.title}
                      className="rounded-[8px] border border-[#e0e0e0] bg-white p-6 transition-colors hover:border-[#0056F9]/40"
                    >
                      <div className="flex items-center justify-between">
                        <div className="flex h-9 w-9 items-center justify-center rounded-[8px] border border-[#e0e0e0] bg-[#F7F9FF] text-[#0056F9]">
                          <Icon className="h-4 w-4" />
                        </div>
                        <span className="text-[11px] font-semibold text-[#6f6f6f]">
                          {String(idx + 1).padStart(2, "0")}
                        </span>
                      </div>
                      <h3 className="mt-6 text-[1.05rem] font-bold leading-snug text-[#161616]">
                        {item.title}
                      </h3>
                      <p className="mt-3 text-sm leading-relaxed text-[#525252]">
                        {item.body}
                      </p>
                    </div>
                  );
                })}
              </div>
            </div>
          </Container>
        </section>

        {/* Other solutions */}
        <section className="border-t border-[#e8e8e8] bg-[#FAFAFA] py-16 md:py-20">
          <Container>
            <div className="flex flex-col gap-4 md:flex-row md:items-end md:justify-between">
              <div>
                <p className={accentEyebrow}>More advisory services</p>
                <h2 className="mt-3 text-[28px] font-bold leading-[1.08] tracking-[-0.02em] text-[#161616] md:text-[36px]">
                  Continue through the advisory story.
                </h2>
              </div>
              <Link
                href="/contact"
                className="inline-flex items-center gap-2 text-sm font-semibold text-[#0056F9] transition-colors hover:text-[#0B5BEA]"
              >
                Contact us <ArrowRight className="h-4 w-4" />
              </Link>
            </div>

            <div className="mt-10 grid gap-4 lg:grid-cols-3">
              {otherSolutions.map((otherSolution) => (
                <Link
                  key={otherSolution.slug}
                  href={`/solutions/${otherSolution.slug}`}
                  className="group rounded-[8px] border border-[#e0e0e0] bg-white p-6 transition-colors hover:border-[#0056F9]/40"
                >
                  <p className={eyebrow}>Advisory service</p>
                  <h3 className="mt-4 text-[1.1rem] font-bold leading-snug text-[#161616]">
                    {otherSolution.title}
                  </h3>
                  <p className="mt-3 text-sm leading-relaxed text-[#525252]">
                    {otherSolution.seoDescription}
                  </p>
                  <div className="mt-6 inline-flex items-center gap-1.5 text-sm font-medium text-[#0056F9]">
                    View page
                    <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-0.5" />
                  </div>
                </Link>
              ))}
            </div>
          </Container>
        </section>

        {/* Contact */}
        <section className="bg-[#07070b] text-white">
          <Container className="grid gap-14 py-16 md:py-24 lg:grid-cols-[minmax(0,0.84fr)_minmax(420px,0.96fr)] lg:items-center">
            <div className="max-w-[34rem]">
              <p className="text-[11px] font-semibold uppercase tracking-[0.2em] text-[#8FB3FF]">
                {solution.contact.eyebrow}
              </p>
              <h2 className="mt-5 text-[44px] font-bold leading-[1.02] tracking-[-0.04em] text-white md:text-[64px]">
                {solution.contact.title}
              </h2>

              <p className="mt-8 text-base leading-relaxed text-white/64 md:text-[17px]">
                {solution.contact.body}
              </p>

              <p className="mt-6 text-[15px] leading-7 text-white/56">
                Prefer email? Reach us at{" "}
                <Link
                  href="mailto:contact@umaisolutions.com"
                  className="font-semibold text-[#8FB3FF] underline underline-offset-4"
                >
                  contact@umaisolutions.com
                </Link>
                .
              </p>

              <div className="mt-8 flex flex-wrap gap-2">
                {solution.contact.topics.map((item) => (
                  <span key={item} className={darkChip}>
                    {item}
                  </span>
                ))}
              </div>
            </div>

            <ContactSalesForm />
          </Container>
        </section>
      </main>

      <MarketingFooter />
    </div>
  );
}
