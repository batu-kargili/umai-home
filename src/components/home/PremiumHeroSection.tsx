import Link from "next/link";
import { ArrowRight } from "lucide-react";
import { PremiumHeroDiagram } from "@/components/home/PremiumHeroDiagram";
import {
  CONTACT_URL,
  HERO_RESEARCH,
  TICKER_ITEMS,
  VALUE_PROPS,
} from "@/components/home/premium-landing-content";
import { Container } from "@/components/ui/Container";

export function PremiumHeroSection() {
  return (
    <div className="relative z-10 bg-white">
      <section className="relative">
        <Container className="grid items-center gap-10 pb-16 pt-14 md:pb-20 md:pt-16 lg:grid-cols-[minmax(0,420px)_minmax(0,1fr)] lg:gap-10">
          <div className="text-left lg:max-w-[460px]">
            <div className="inline-flex items-center gap-1.5 rounded-full border border-[#e0e0e0] bg-white px-3 py-1">
              <span className="h-1.5 w-1.5 rounded-full bg-[#0056F9]" />
              <span
                className="whitespace-nowrap font-semibold uppercase text-[#525252]"
                style={{ fontSize: "10px", letterSpacing: "0.12em", lineHeight: 1.2 }}
              >
                Enterprise AI governance control plane
              </span>
            </div>
            <h1 className="mt-6 text-[34px] font-black leading-[1.02] tracking-[-0.03em] text-[#161616] md:text-[40px] lg:text-[44px] xl:text-[50px]">
              Every AI decision,
              <br />
              <span className="text-[#0056F9]">governed with authority.</span>
            </h1>
            <p className="mt-5 max-w-lg text-base leading-relaxed text-[#525252] md:text-lg">
              The enterprise control plane that governs every AI request across apps,
              agents, and browser AI with runtime policy enforcement, evidence, and
              clear operational control.
            </p>
            <div className="mt-7 flex flex-wrap items-center gap-3">
              <Link
                href={CONTACT_URL}
                className="inline-flex items-center justify-center gap-2 rounded-xl bg-[#0056F9] px-5 py-3 text-sm font-semibold text-white shadow-[0_8px_20px_rgba(0,86,249,0.28)] transition-all duration-200 hover:-translate-y-0.5 hover:bg-[#0B5BEA]"
              >
                Try UMAI
              </Link>
              <Link
                href="#products"
                className="inline-flex items-center justify-center gap-2 rounded-xl border border-[#e0e0e0] bg-white px-5 py-3 text-sm font-medium text-[#161616] transition-colors duration-200 hover:border-[#0056F9] hover:text-[#0056F9]"
              >
                Explore the platform <ArrowRight className="h-4 w-4" />
              </Link>
            </div>
          </div>

          <div className="relative w-full overflow-hidden rounded-[8px] bg-white">
            <div className="pointer-events-none absolute inset-0 opacity-[0.6]" style={{ backgroundImage: "linear-gradient(rgba(22,22,22,0.025) 1px, transparent 1px), linear-gradient(90deg, rgba(22,22,22,0.025) 1px, transparent 1px)", backgroundSize: "36px 36px" }} />
            <div className="pointer-events-none absolute left-1/2 top-1/3 h-[260px] w-[260px] -translate-x-1/2 -translate-y-1/2 rounded-full bg-[#0056F9]/10 blur-[120px]" />
            <div className="pointer-events-none absolute left-[58%] top-1/2 h-[220px] w-[220px] -translate-x-1/2 -translate-y-1/2 rounded-full bg-[#6D4AFF]/8 blur-[140px]" />
            <div className="relative px-1 py-5 sm:px-3 md:px-5 md:py-8">
              <PremiumHeroDiagram variant="light" />
            </div>
          </div>
        </Container>

        <Container className="pb-10 md:pb-12">
          <div className="overflow-hidden rounded-[8px] border border-[#e0e0e0] bg-[linear-gradient(180deg,#ffffff_0%,#f7f9ff_100%)]">
            <div className="grid gap-8 px-5 py-6 md:px-8 md:py-8 lg:grid-cols-[220px_minmax(0,1fr)] lg:gap-10">
              <div>
                <p className="text-[11px] font-semibold uppercase tracking-[0.22em] text-[#7C3AED]">
                  {HERO_RESEARCH.eyebrow}
                </p>
                <div className="mt-6 hidden h-px w-full bg-[linear-gradient(90deg,rgba(124,58,237,0.35),rgba(0,86,249,0.35))] lg:block" />
                <p className="mt-6 text-xs font-medium uppercase tracking-[0.18em] text-[#6f6f6f]">
                  {HERO_RESEARCH.sourceLabel}
                </p>
                <Link
                  href={HERO_RESEARCH.sourceHref}
                  target="_blank"
                  rel="noreferrer"
                  className="mt-3 inline-flex items-center gap-1.5 text-sm font-medium text-[#0056F9] transition-colors hover:text-[#0B5BEA]"
                >
                  {HERO_RESEARCH.sourceTitle}
                  <ArrowRight className="h-3.5 w-3.5 flex-shrink-0" />
                </Link>
                <p className="mt-3 text-sm text-[#6f6f6f]">{HERO_RESEARCH.publishedLabel}</p>
              </div>

              <div className="grid gap-5 md:grid-cols-2">
                {HERO_RESEARCH.stats.map((stat) => (
                  <div
                    key={stat.value}
                    className="rounded-[8px] border border-[#e7ebf3] bg-white p-6 shadow-[0_12px_32px_rgba(21,32,43,0.04)]"
                  >
                    <p className="text-[56px] font-thin leading-none tracking-[-0.05em] text-[#7C3AED] md:text-[64px]">
                      {stat.value}
                    </p>
                    <p className="mt-4 max-w-[340px] text-base leading-relaxed text-[#161616]">
                      {stat.body}
                    </p>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </Container>

        <Container className="pb-16 md:pb-20">
          <div className="grid gap-4 md:grid-cols-3">
            {VALUE_PROPS.map((prop, index) => (
              <div
                key={prop.title}
                className="relative overflow-hidden rounded-[8px] border border-[#e0e0e0] bg-white p-8 transition-colors hover:border-[#0056F9]/40"
              >
                <p className="text-[11px] font-semibold uppercase tracking-[0.2em] text-[#6f6f6f]">
                  0{index + 1}
                </p>
                <h3 className="mt-4 text-[1.18rem] font-bold leading-snug text-[#161616]">
                  {prop.title}
                </h3>
                <p className="mt-3 text-sm leading-relaxed text-[#525252]">{prop.body}</p>
                <Link
                  href={prop.href}
                  className="mt-6 inline-flex items-center gap-1.5 text-sm font-medium umai-link"
                >
                  {prop.link} <ArrowRight className="h-3.5 w-3.5 flex-shrink-0" />
                </Link>
              </div>
            ))}
          </div>
        </Container>
      </section>

      <section className="relative pb-10">
        <Container>
          <div className="overflow-hidden rounded-[8px] border border-[#e0e0e0] bg-white">
          <div className="flex umai-ticker">
            {[...TICKER_ITEMS, ...TICKER_ITEMS, ...TICKER_ITEMS].map((item, index) => (
              <Link
                key={`${item.text}-${index}`}
                href={item.href}
                className="group flex flex-shrink-0 items-center gap-4 border-r border-[#e0e0e0] px-8 py-4 transition-colors hover:bg-[#f4f4f4]"
              >
                <ArrowRight className="h-3.5 w-3.5 flex-shrink-0 text-[#0056F9]" />
                <span className="whitespace-nowrap text-sm text-[#525252] transition-colors group-hover:text-[#161616]">
                  {item.text}
                </span>
                <span className="rounded-full border border-[#0056F9]/25 bg-[#0056F9]/8 px-2.5 py-0.5 text-[10px] font-bold uppercase tracking-[0.16em] text-[#0056F9]">
                  Insight
                </span>
              </Link>
            ))}
          </div>
          </div>
        </Container>
      </section>
    </div>
  );
}
