import Image from "next/image";
import Link from "next/link";
import { ArrowRight, Languages, Network, ServerCog } from "lucide-react";
import {
  ACTION_CARDS,
  DIFFERENTIATORS,
} from "@/components/home/premium-landing-content";
import { Container } from "@/components/ui/Container";

const DIFFERENTIATOR_ICONS = [Languages, Network, ServerCog];

export function PremiumWhySection() {
  return (
    <>
      <section id="why-umai" className="relative bg-[#F9FAFF] py-20 md:py-28">
        <Container>
          <div className="grid gap-10 md:grid-cols-[1.15fr_1fr] md:items-end md:gap-16">
            <div>
              <p className="text-[11px] font-semibold uppercase tracking-[0.22em] text-[#0E68BC]">
                Why UMAI
              </p>
              <h2 className="mt-5 text-[44px] font-black leading-[1.02] tracking-[-0.04em] text-[#15202B] md:text-[64px]">
                Enterprise AI governance
              </h2>
            </div>
            <p className="text-base leading-relaxed text-[#4B5563] md:text-lg">
              Three capabilities that separate governed AI deployment from ad hoc controls — built for regulated enterprises where <span className="text-[#0056F9]">depth</span> matters more than decoration.
            </p>
          </div>

          <div className="mt-16 grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
            {DIFFERENTIATORS.map((item, index) => {
              const Icon = DIFFERENTIATOR_ICONS[index];
              return (
                <Link
                  key={index}
                  href="#products"
                  className="group relative flex min-h-[260px] flex-col rounded-[4px] border border-[#E5E7EB] bg-white p-7 transition-all hover:border-[#0056F9]/40 hover:shadow-[0_20px_48px_rgba(0,86,249,0.08)]"
                >
                  <h3 className="text-[22px] font-medium leading-snug text-[#15202B]">
                    {item.card.badge}
                  </h3>
                  <p className="mt-3 text-[13px] leading-relaxed text-[#6B7280]">
                    {item.card.stat}
                  </p>
                  <div className="mt-auto flex items-end justify-between pt-8">
                    <Icon
                      className="h-10 w-10 text-[#0056F9]"
                      strokeWidth={1.25}
                    />
                    <ArrowRight className="h-6 w-6 text-[#0056F9] transition-transform duration-200 group-hover:translate-x-1" />
                  </div>
                </Link>
              );
            })}
          </div>
        </Container>
      </section>

      <section className="relative py-20 md:py-28">
        <Container>
          <div className="mx-auto max-w-3xl text-center">
            <p className="text-[11px] font-semibold uppercase tracking-[0.22em] text-[#d4c8ff]">
              Next step
            </p>
            <h2 className="mt-4 text-[40px] font-black leading-[1.04] tracking-[-0.04em] text-white md:text-[56px]">
              Move from evaluation to governed deployment.
            </h2>
          </div>
          <div className="mt-14 grid gap-5 md:grid-cols-3">
            {ACTION_CARDS.map((card) => (
              <div key={card.label} className="group overflow-hidden rounded-[30px] border border-white/7 bg-[linear-gradient(180deg,rgba(13,19,28,0.76)_0%,rgba(8,12,18,0.92)_100%)] shadow-[0_14px_48px_rgba(0,0,0,0.28)]">
                <div className="relative h-48 overflow-hidden border-b border-white/8">
                  <Image
                    src={card.image}
                    alt={card.label}
                    fill
                    sizes="(max-width: 768px) 100vw, 400px"
                    className="object-cover object-left-top transition-transform duration-500 group-hover:scale-[1.03]"
                  />
                  <div className="pointer-events-none absolute inset-0 bg-[linear-gradient(180deg,rgba(3,5,8,0.08)_0%,rgba(3,5,8,0.42)_100%)]" />
                  <div className="pointer-events-none absolute right-6 top-6 h-16 w-16 rounded-full bg-[#6D4AFF]/12 blur-[48px]" />
                </div>
                <div className="p-7">
                  <p className="text-[10px] font-bold uppercase tracking-[0.2em] text-white/30">
                    {card.label}
                  </p>
                  <p className="mt-4 min-h-[96px] text-base leading-relaxed text-white/56">
                    {card.body}
                  </p>
                  <Link
                    href={card.href}
                    className="mt-5 inline-flex items-center gap-2 text-sm font-semibold umai-link"
                  >
                    {card.link} <ArrowRight className="h-4 w-4" />
                  </Link>
                </div>
              </div>
            ))}
          </div>
        </Container>
      </section>
    </>
  );
}
