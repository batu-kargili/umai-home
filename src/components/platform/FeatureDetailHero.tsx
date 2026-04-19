import Link from "next/link";
import { ArrowLeft, ArrowRight } from "lucide-react";

import type { LucideIcon } from "lucide-react";
import { Container } from "@/components/ui/Container";

export function FeatureDetailHero({
  eyebrow,
  title,
  valueProp,
  highlights,
  icon: Icon,
  backHref = "/platform#platform",
  backLabel = "Back to Platform Diagram",
}: {
  eyebrow: string;
  title: string;
  valueProp: string;
  highlights: string[];
  icon: LucideIcon;
  backHref?: string;
  backLabel?: string;
}) {
  return (
    <section className="border-b border-white/10">
      <Container className="grid gap-10 py-14 md:py-16 lg:grid-cols-[minmax(0,0.95fr)_minmax(0,0.9fr)] lg:items-center lg:py-20">
        <div className="max-w-[40rem]">
          <Link
            href={backHref}
            className="inline-flex items-center gap-2 text-sm font-medium text-white/52 transition-colors duration-200 hover:text-white"
          >
            <ArrowLeft className="h-4 w-4" />
            {backLabel}
          </Link>
          <p className="mt-7 text-[11px] font-semibold uppercase tracking-[0.32em] text-white/42">
            {eyebrow}
          </p>
          <h1 className="mt-4 text-[2.85rem] font-semibold leading-[0.98] tracking-[-0.07em] text-white md:text-[4rem] lg:text-[4.5rem]">
            {title}
          </h1>
          <p className="mt-6 max-w-[38rem] text-[1.05rem] leading-8 text-white/64 md:text-[1.12rem]">
            {valueProp}
          </p>
          <div className="mt-8 flex flex-wrap gap-3">
            {highlights.map((item) => (
              <span
                key={item}
                className="rounded-full border border-white/10 bg-white/[0.03] px-4 py-2 text-[11px] font-semibold uppercase tracking-[0.18em] text-white/58"
              >
                {item}
              </span>
            ))}
          </div>
          <div className="mt-10 flex flex-col gap-3 sm:flex-row">
            <Link
              href="/contact"
              className="inline-flex items-center justify-center gap-2 rounded-full bg-white px-6 py-4 text-sm font-semibold text-black"
            >
              Start a pilot
              <ArrowRight className="h-4 w-4" />
            </Link>
            <Link
              href={backHref}
              className="inline-flex items-center justify-center rounded-full border border-white/10 bg-white/[0.03] px-6 py-4 text-sm font-semibold text-white"
            >
              {backLabel}
            </Link>
          </div>
        </div>

        <div className="relative overflow-hidden rounded-[2rem] border border-white/10 bg-[linear-gradient(180deg,#180d10_0%,#0c090a_100%)] p-8 shadow-[0_24px_90px_rgba(0,0,0,0.42)]">
          <div className="absolute inset-0 bg-[radial-gradient(circle_at_top_right,rgba(255,115,123,0.2),transparent_40%),radial-gradient(circle_at_bottom_left,rgba(255,136,98,0.12),transparent_40%)]" />
          <div className="relative">
            <div className="flex h-14 w-14 items-center justify-center rounded-[1.2rem] border border-white/10 bg-white/[0.05] text-[#ffb6bc]">
              <Icon className="h-6 w-6" />
            </div>
            <div className="mt-8 space-y-4">
              {[
                "Designed for enterprise rollout, not lab demos.",
                "Maps product behavior to policy, evidence, and operator control.",
                "Keeps the control path readable for security, platform, and compliance teams.",
              ].map((item) => (
                <div
                  key={item}
                  className="rounded-[1.2rem] border border-white/10 bg-black/20 px-4 py-4 text-sm leading-6 text-white/62"
                >
                  {item}
                </div>
              ))}
            </div>
          </div>
        </div>
      </Container>
    </section>
  );
}
