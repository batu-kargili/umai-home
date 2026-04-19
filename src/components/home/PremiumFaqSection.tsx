"use client";

import { useState } from "react";
import { ChevronDown } from "lucide-react";
import { FAQ_ITEMS } from "@/components/home/premium-landing-content";
import { Container } from "@/components/ui/Container";

export function PremiumFaqSection() {
  const [openFaq, setOpenFaq] = useState<number | null>(null);

  return (
    <section className="relative bg-white pb-24 pt-20 md:pb-28 md:pt-24">
      <Container>
        <div className="overflow-hidden rounded-[36px] border border-black/8 bg-[#F9FAFF] shadow-[0_24px_90px_rgba(21,32,43,0.08)]">
          <div className="grid md:grid-cols-[320px_1fr]">
            <div className="border-b border-black/8 bg-[linear-gradient(180deg,#ffffff_0%,#F4F7FF_100%)] p-8 md:border-b-0 md:border-r md:p-10">
              <p className="text-[11px] font-semibold uppercase tracking-[0.22em] text-[#0E68BC]">
                FAQ
              </p>
              <h2 className="mt-4 text-3xl font-black leading-tight text-[#15202B] md:text-4xl">
                Frequently asked questions
              </h2>
              <p className="mt-4 text-base leading-relaxed text-[#4B5563]">
                Clear answers for security, compliance, deployment, and enterprise AI
                governance teams evaluating UMAI.
              </p>
            </div>
            <div className="divide-y divide-black/8 p-4 md:p-8">
              {FAQ_ITEMS.map((item, index) => (
                <div key={item.q} className="py-4 md:py-5">
                  <button
                    onClick={() => setOpenFaq(openFaq === index ? null : index)}
                    aria-expanded={openFaq === index}
                    className="flex w-full items-center justify-between gap-4 text-left text-base font-medium text-[#15202B] transition-colors hover:text-[#0D1520]"
                  >
                    <span className="leading-snug">{item.q}</span>
                    <ChevronDown
                      className={`h-4 w-4 flex-shrink-0 text-[#0E68BC] transition-transform duration-200 ${
                        openFaq === index ? "rotate-180" : ""
                      }`}
                    />
                  </button>
                  {openFaq === index && (
                    <p className="mt-4 pr-6 text-base leading-relaxed text-[#4B5563]">
                      {item.a}
                    </p>
                  )}
                </div>
              ))}
            </div>
          </div>
        </div>
      </Container>
    </section>
  );
}
