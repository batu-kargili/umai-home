import type { Metadata } from "next";
import Link from "next/link";

import { ContactSalesForm } from "@/components/contact/ContactSalesForm";
import { MarketingFooter } from "@/components/layout/MarketingFooter";
import { MarketingHeader } from "@/components/layout/MarketingHeader";
import { Container } from "@/components/ui/Container";
import { buildPageMetadata } from "@/lib/seo";

export const metadata: Metadata = buildPageMetadata({
  path: "/contact",
  title: "Contact Sales",
  description:
    "Talk to UMAI about runtime guardrails, browser AI governance, audit-ready evidence, and deployment planning.",
});

export default function ContactPage() {
  return (
    <div className="min-h-screen bg-[#07070b] text-white">
      <MarketingHeader accent="blue" />

      <main>
        <section className="relative overflow-hidden">
          <div className="absolute inset-0 bg-[radial-gradient(circle_at_18%_28%,rgba(16,108,236,0.22),transparent_30%),radial-gradient(circle_at_80%_18%,rgba(147,197,253,0.08),transparent_18%)]" />

          <Container className="relative grid gap-14 py-16 md:py-20 lg:min-h-[calc(100vh-68px)] lg:grid-cols-[minmax(0,0.9fr)_minmax(420px,0.86fr)] lg:items-center lg:py-24">
            <div className="max-w-[34rem]">
              <p className="text-[11px] font-semibold uppercase tracking-[0.3em] text-landing-blue-light">
                Contact Us
              </p>
              <h1 className="mt-5 text-[3rem] font-semibold leading-[0.95] tracking-[-0.07em] text-white md:text-[4.3rem] lg:text-[5rem]">
                Here to answer your questions.
              </h1>

              <p className="mt-8 text-[1.02rem] leading-9 text-white/64">
                Our team can help you evaluate UMAI for runtime guardrails,
                browser AI governance, sovereign deployment, and audit-ready
                evidence. Share your use case and we will get back to you within
                one business day.
              </p>

              <p className="mt-8 text-[1rem] leading-8 text-white/56">
                For technical implementation questions, start with the{" "}
                <Link
                  href="/docs"
                  className="font-semibold text-white underline underline-offset-4"
                >
                  resource hub
                </Link>
                . You can also email{" "}
                <Link
                  href="mailto:contact@umaisolutions.com"
                  className="font-semibold text-landing-blue-light underline underline-offset-4"
                >
                  contact@umaisolutions.com
                </Link>
                .
              </p>

              <div className="mt-10 flex flex-wrap gap-3">
                {[
                  "Sales and pricing",
                  "Deployment planning",
                  "Compliance questions",
                ].map((item) => (
                  <span
                    key={item}
                    className="rounded-full border border-white/10 bg-white/[0.03] px-4 py-2 text-[11px] font-semibold uppercase tracking-[0.18em] text-white/54"
                  >
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
