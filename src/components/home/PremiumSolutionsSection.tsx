"use client";

import { useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { ArrowRight } from "lucide-react";

import { INDUSTRIES } from "@/components/home/premium-landing-content";
import { Container } from "@/components/ui/Container";

export function PremiumSolutionsSection() {
  const [activeIndustry, setActiveIndustry] = useState(0);

  return (
    <section id="solutions" className="relative py-20 md:py-28">
      <Container>
        <div className="mx-auto max-w-3xl text-center">
          <p className="text-[11px] font-semibold uppercase tracking-[0.22em] text-[#d4c8ff]">
            Industry solutions
          </p>
          <h2 className="mt-4 text-[40px] font-black leading-[1.05] tracking-[-0.04em] text-white md:text-[56px]">
            AI security and governance tailored to your industry.
          </h2>
          <p className="mt-5 text-base leading-relaxed text-white/56 md:text-lg">
            UMAI delivers customized AI security and governance based on the
            operational, regulatory, and data risks unique to each industry.
            Policies, evidence, and approval controls are adapted to the way your
            teams actually use AI.
          </p>
        </div>

        <div className="mt-14 grid gap-8 xl:grid-cols-[250px_1fr]">
          <div className="rounded-[28px] border border-white/7 bg-[linear-gradient(180deg,rgba(13,19,28,0.76)_0%,rgba(8,12,18,0.92)_100%)] p-3 shadow-[0_14px_48px_rgba(0,0,0,0.28)]">
            <div className="flex flex-col gap-2">
              {INDUSTRIES.map((industry, index) => (
                <button
                  key={industry.id}
                  type="button"
                  onClick={() => setActiveIndustry(index)}
                  role="tab"
                  id={`industry-tab-${industry.id}`}
                  aria-controls={`industry-panel-${industry.id}`}
                  aria-selected={activeIndustry === index}
                  className={`flex items-center justify-between rounded-[22px] border px-4 py-4 text-left text-sm font-semibold transition-all ${
                    activeIndustry === index
                      ? "border-[#0056F9]/28 bg-white/[0.05] text-white"
                      : "border-transparent text-white/42 hover:border-white/10 hover:bg-white/[0.02] hover:text-white/74"
                  }`}
                >
                  <span>{industry.label}</span>
                  <span
                    className={`h-2.5 w-2.5 rounded-full ${
                      activeIndustry === index ? "bg-[#7C3AED]" : "bg-white/10"
                    }`}
                  />
                </button>
              ))}
            </div>
          </div>

          {INDUSTRIES.map((industry, index) => {
            const isActive = activeIndustry === index;

            return (
              <div
                key={industry.id}
                id={`industry-panel-${industry.id}`}
                role="tabpanel"
                aria-labelledby={`industry-tab-${industry.id}`}
                className={`overflow-hidden rounded-[34px] border border-white/8 bg-[linear-gradient(180deg,rgba(17,26,39,0.88)_0%,rgba(10,16,24,0.94)_100%)] shadow-[0_20px_60px_rgba(0,0,0,0.35)] ${
                  isActive ? "block" : "hidden"
                }`}
              >
                <div className="grid lg:grid-cols-[320px_1fr]">
                  <div className="relative min-h-[340px] overflow-hidden border-b border-white/8 lg:border-b-0 lg:border-r lg:border-white/8">
                    <Image
                      src={industry.image}
                      alt={industry.label}
                      fill
                      sizes="(min-width: 1024px) 320px, 100vw"
                      className="object-cover"
                    />
                    <div className="pointer-events-none absolute inset-0 bg-[linear-gradient(180deg,rgba(7,12,20,0.35)_0%,rgba(3,6,10,0.85)_100%)]" />
                    <div className="absolute inset-x-0 bottom-0 p-6 text-center">
                      <p className="text-sm font-semibold text-white">
                        {industry.label}
                      </p>
                    </div>
                  </div>

                  <div className="p-8 md:p-10">
                    <p className="text-[11px] font-semibold uppercase tracking-[0.18em] text-white/32">
                      Industry playbook
                    </p>
                    <h3 className="mt-4 text-3xl font-bold leading-tight text-white">
                      {industry.heading}
                    </h3>
                    <p className="mt-4 text-base leading-relaxed text-white/56">
                      {industry.body}
                    </p>
                    <div className="mt-8">
                      <div className="rounded-[24px] border border-white/8 bg-white/[0.03] p-6">
                        <p className="text-[11px] font-semibold uppercase tracking-[0.18em] text-[#bfd3ff]">
                          Security outcomes
                        </p>
                        <ul className="mt-5 space-y-3.5">
                          {industry.outcomes.map((outcome) => (
                            <li key={outcome} className="flex items-start gap-3">
                              <span className="mt-[7px] h-1.5 w-1.5 flex-shrink-0 rounded-full bg-[#8ebcff]" />
                              <span className="text-base leading-relaxed text-white/66">
                                {outcome}
                              </span>
                            </li>
                          ))}
                        </ul>
                      </div>
                    </div>
                    <div className="mt-8">
                      <Link
                        href={industry.ctaHref}
                        className="inline-flex items-center gap-2 text-sm font-semibold umai-link"
                      >
                        {industry.cta} <ArrowRight className="h-4 w-4" />
                      </Link>
                    </div>
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </Container>
    </section>
  );
}
