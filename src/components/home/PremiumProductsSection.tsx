"use client";

import { useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { ArrowRight, CheckCircle2 } from "lucide-react";

import { USE_CASES } from "@/components/home/premium-landing-content";
import { Container } from "@/components/ui/Container";

export function PremiumProductsSection() {
  const [activeTab, setActiveTab] = useState(0);

  return (
    <section id="products" className="relative bg-[#F9FAFF] py-20 md:py-28">
      <Container>
        <div className="mx-auto max-w-3xl text-center">
          <p className="text-[11px] font-semibold uppercase tracking-[0.22em] text-[#0E68BC]">
            Product surfaces
          </p>
          <h2 className="mt-4 text-[40px] font-black leading-[1.04] tracking-[-0.04em] text-[#15202B] md:text-[56px]">
            Govern AI where regulated work actually happens.
          </h2>
          <p className="mx-auto mt-5 max-w-2xl text-lg leading-relaxed text-[#4B5563]">
            Replace flat point controls with one layered platform that governs apps,
            copilots, browser AI, agentic workflows, and evidence collection in one
            enterprise-safe system.
          </p>
        </div>

        <div className="mt-14 overflow-hidden rounded-[34px] border border-black/8 bg-white shadow-[0_24px_80px_rgba(21,32,43,0.08)]">
          <div className="overflow-x-auto border-b border-black/10 scrollbar-hide">
            <div className="flex min-w-max gap-2 p-4">
              {USE_CASES.map((useCase, index) => (
                <button
                  key={useCase.id}
                  type="button"
                  onClick={() => setActiveTab(index)}
                  role="tab"
                  id={`product-tab-${useCase.id}`}
                  aria-controls={`product-panel-${useCase.id}`}
                  aria-selected={activeTab === index}
                  className={`rounded-full border px-5 py-3 text-[13px] font-semibold transition-all ${
                    activeTab === index
                      ? "border-[#0056F9]/20 bg-[#0056F9]/8 text-[#15202B] shadow-[0_10px_24px_rgba(0,86,249,0.10)]"
                      : "border-[#E5E7EB] bg-transparent text-[#6B7280] hover:border-[#D1D5DB] hover:text-[#374151]"
                  }`}
                >
                  {useCase.label}
                </button>
              ))}
            </div>
          </div>

          {USE_CASES.map((useCase, index) => {
            const UseCaseIcon = useCase.Icon;
            const isActive = activeTab === index;

            return (
              <div
                key={useCase.id}
                id={`product-panel-${useCase.id}`}
                role="tabpanel"
                aria-labelledby={`product-tab-${useCase.id}`}
                className={`grid items-center gap-10 p-6 md:grid-cols-[1.02fr_1fr] md:p-10 lg:gap-14 ${
                  isActive ? "" : "hidden"
                }`}
              >
                <div>
                  <div className="inline-flex items-center gap-2 rounded-full border border-[#0E68BC]/12 bg-[#F4F7FF] px-4 py-2">
                    <UseCaseIcon className="h-4 w-4 text-[#0056F9]" />
                    <span className="text-[11px] font-semibold uppercase tracking-[0.18em] text-[#0E68BC]">
                      {useCase.label}
                    </span>
                  </div>
                  <h3 className="mt-6 text-3xl font-bold leading-tight text-[#15202B] md:text-[2rem]">
                    {useCase.heading}
                  </h3>
                  <p className="mt-5 text-base leading-relaxed text-[#4B5563]">
                    {useCase.body}
                  </p>
                  <ul className="mt-8 space-y-4">
                    {useCase.bullets.map((bullet) => (
                      <li key={bullet} className="flex items-start gap-3">
                        <CheckCircle2 className="mt-0.5 h-5 w-5 flex-shrink-0 text-[#0E68BC]" />
                        <span className="text-base leading-relaxed text-[#374151]">
                          {bullet}
                        </span>
                      </li>
                    ))}
                  </ul>
                  <div className="mt-9">
                    <Link
                      href={useCase.ctaHref}
                      className="inline-flex items-center gap-2 rounded-xl bg-[#0056F9] px-5 py-3 text-sm font-semibold text-white shadow-[0_12px_28px_rgba(0,86,249,0.18)] transition-all hover:-translate-y-0.5 hover:bg-[#0B5BEA]"
                    >
                      {useCase.cta} <ArrowRight className="h-4 w-4" />
                    </Link>
                  </div>
                </div>

                <div className="relative aspect-[1.18/1] overflow-hidden rounded-[30px] bg-[linear-gradient(160deg,#1e0a4a_0%,#2d1060_45%,#1a0840_100%)]">
                  <div className="pointer-events-none absolute left-10 top-10 h-32 w-32 rounded-full bg-[#7C3AED]/30 blur-[80px]" />
                  <div className="pointer-events-none absolute right-6 top-8 h-28 w-28 rounded-full bg-[#0056F9]/20 blur-[70px]" />
                  <div className="pointer-events-none absolute bottom-10 left-1/2 h-24 w-24 -translate-x-1/2 rounded-full bg-[#6D4AFF]/25 blur-[60px]" />
                  {useCase.image ? (
                    <div className="absolute inset-x-5 top-5 bottom-[72px] overflow-hidden rounded-2xl shadow-[0_16px_48px_rgba(0,0,0,0.50)]">
                      <Image
                        src={useCase.image}
                        alt={useCase.label}
                        fill
                        sizes="(max-width: 768px) 100vw, 600px"
                        className="object-cover object-left-top"
                      />
                    </div>
                  ) : (
                    <div className="relative z-10 flex h-full flex-col items-center justify-center gap-5">
                      <div className="flex h-24 w-24 items-center justify-center rounded-[26px] border border-[#0056F9]/30 bg-[#0056F9]/10 shadow-[0_18px_48px_rgba(0,86,249,0.20)]">
                        <UseCaseIcon className="h-10 w-10 text-[#8ebcff]" />
                      </div>
                      <p className="max-w-[240px] text-center text-sm leading-relaxed text-white/38">
                        {useCase.label} powered by UMAI runtime enforcement and
                        control.
                      </p>
                    </div>
                  )}
                  <div className="absolute inset-x-5 bottom-5 rounded-2xl border border-white/10 bg-[rgba(6,10,16,0.78)] px-4 py-3 backdrop-blur-xl">
                    <div className="flex items-center justify-between gap-4">
                      <div>
                        <p className="text-[10px] font-semibold uppercase tracking-[0.18em] text-white/34">
                          Control mode
                        </p>
                        <p className="mt-1 text-sm font-medium text-white/84">
                          Policy in path
                        </p>
                      </div>
                      <div className="text-right">
                        <p className="text-[10px] font-semibold uppercase tracking-[0.18em] text-[#cfc4ff]">
                          Enforcement
                        </p>
                        <p className="mt-1 text-sm font-medium text-white/68">
                          Active | blocking
                        </p>
                      </div>
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
