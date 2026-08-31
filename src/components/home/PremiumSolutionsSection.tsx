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
    <section
      id="solutions"
      className="relative border-y border-[#E7EBF3] bg-white py-20 md:py-28"
    >
      <Container>
        <div className="mx-auto max-w-3xl text-center">
          <p className="text-[11px] font-semibold uppercase tracking-[0.22em] text-[#0E68BC]">
            Industry solutions
          </p>
          <h2 className="mt-4 text-[40px] font-black leading-[1.05] tracking-[-0.04em] text-[#15202B] md:text-[56px]">
            AI security and governance tailored to your industry.
          </h2>
          <p className="mt-5 text-base leading-relaxed text-[#4B5563] md:text-lg">
            UMAI delivers customized AI security and governance based on the
            operational, regulatory, and data risks unique to each industry.
            Policies, evidence, and approval controls are adapted to the way your
            teams actually use AI.
          </p>
        </div>

        <div className="mt-14 grid gap-8 xl:grid-cols-[250px_1fr]">
          <div className="rounded-[28px] border border-black/8 bg-[#F8FAFD] p-3 shadow-[0_14px_48px_rgba(21,32,43,0.07)]">
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
                      ? "border-[#0056F9]/20 bg-white text-[#15202B] shadow-[0_8px_22px_rgba(0,86,249,0.10)]"
                      : "border-transparent text-[#667085] hover:border-[#DCE3EE] hover:bg-white hover:text-[#15202B]"
                  }`}
                >
                  <span>{industry.label}</span>
                  <span
                    className={`h-2.5 w-2.5 rounded-full ${
                      activeIndustry === index ? "bg-[#0056F9]" : "bg-[#D5DCE7]"
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
                className={`overflow-hidden rounded-[34px] border border-black/8 bg-white shadow-[0_20px_60px_rgba(21,32,43,0.09)] ${
                  isActive ? "block" : "hidden"
                }`}
              >
                <div className="grid lg:grid-cols-[320px_1fr]">
                  <div className="relative min-h-[340px] overflow-hidden border-b border-black/8 lg:border-b-0 lg:border-r lg:border-black/8">
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
                    <p className="text-[11px] font-semibold uppercase tracking-[0.18em] text-[#0E68BC]">
                      Industry playbook
                    </p>
                    <h3 className="mt-4 text-3xl font-bold leading-tight text-[#15202B]">
                      {industry.heading}
                    </h3>
                    <p className="mt-4 text-base leading-relaxed text-[#4B5563]">
                      {industry.body}
                    </p>
                    <div className="mt-8">
                      <div className="rounded-[24px] border border-[#E1E7F0] bg-[#F8FAFD] p-6">
                        <p className="text-[11px] font-semibold uppercase tracking-[0.18em] text-[#0E68BC]">
                          Security outcomes
                        </p>
                        <ul className="mt-5 space-y-3.5">
                          {industry.outcomes.map((outcome) => (
                            <li key={outcome} className="flex items-start gap-3">
                              <span className="mt-[7px] h-1.5 w-1.5 flex-shrink-0 rounded-full bg-[#0056F9]" />
                              <span className="text-base leading-relaxed text-[#374151]">
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
                        className="inline-flex items-center gap-2 text-sm font-semibold text-[#0056F9] transition-colors hover:text-[#0B5BEA]"
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
