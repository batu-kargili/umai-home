import Link from "next/link";
import { ArrowLeft, ArrowRight } from "lucide-react";

import type { DetailSection, UmaiFeature } from "@/content/umai-content-types";
import { Container } from "@/components/ui/Container";

function SectionCard({ section }: { section: DetailSection }) {
  return (
    <div className="rounded-[1.75rem] border border-white/10 bg-[#0b0d12] p-7">
      <p className="text-[11px] font-semibold uppercase tracking-[0.24em] text-white/38">
        {section.title}
      </p>
      <p className="mt-4 text-[1rem] leading-7 text-white/62">{section.intro}</p>
      <ul className="mt-6 space-y-3">
        {section.bullets.map((bullet) => (
          <li key={bullet} className="flex gap-3 text-sm leading-6 text-white/68">
            <span className="mt-2 h-1.5 w-1.5 shrink-0 rounded-full bg-[#ff7c85]" />
            <span>{bullet}</span>
          </li>
        ))}
      </ul>
    </div>
  );
}

export function FeatureDetailSections({
  sections,
  relatedFeatures,
  backHref = "/platform#platform",
  backLabel = "Back to Platform Diagram",
}: {
  sections: DetailSection[];
  relatedFeatures: UmaiFeature[];
  backHref?: string;
  backLabel?: string;
}) {
  const ctaSection = sections.find((section) => section.id === "cta");
  const bodySections = sections.filter((section) => section.id !== "cta");

  return (
    <>
      <section className="border-b border-white/10 py-16 md:py-20">
        <Container>
          <div className="grid gap-5 lg:grid-cols-2">
            {bodySections.map((section) => (
              <SectionCard key={section.id} section={section} />
            ))}
          </div>
        </Container>
      </section>

      {ctaSection ? (
        <section className="border-b border-white/10 py-16 md:py-20">
          <Container>
            <div className="overflow-hidden rounded-[2rem] border border-white/10 bg-[linear-gradient(135deg,#11182b_0%,#0a0c12_100%)] p-8 md:p-10">
              <p className="text-[11px] font-semibold uppercase tracking-[0.28em] text-white/38">
                {ctaSection.title}
              </p>
              <h2 className="mt-4 text-[2rem] font-semibold tracking-[-0.05em] text-white md:text-[2.6rem]">
                Move from policy intent to governed rollout.
              </h2>
              <p className="mt-5 max-w-[42rem] text-[1rem] leading-8 text-white/62">
                {ctaSection.intro}
              </p>
              <div className="mt-8 grid gap-4 md:grid-cols-3">
                {ctaSection.bullets.map((bullet) => (
                  <div
                    key={bullet}
                    className="rounded-[1.4rem] border border-white/10 bg-black/20 px-5 py-5 text-sm leading-6 text-white/68"
                  >
                    {bullet}
                  </div>
                ))}
              </div>
              <div className="mt-8 flex flex-col gap-3 sm:flex-row">
                <Link
                  href="/contact"
                  className="inline-flex items-center justify-center gap-2 rounded-full bg-white px-6 py-4 text-sm font-semibold text-black"
                >
                  Start a pilot
                  <ArrowRight className="h-4 w-4" />
                </Link>
                <Link
                  href={backHref}
                  className="inline-flex items-center justify-center gap-2 rounded-full border border-white/10 bg-white/[0.03] px-6 py-4 text-sm font-semibold text-white"
                >
                  <ArrowLeft className="h-4 w-4" />
                  {backLabel}
                </Link>
              </div>
            </div>
          </Container>
        </section>
      ) : null}

      <section className="py-16 md:py-20">
        <Container>
          <div className="flex flex-col gap-4 md:flex-row md:items-end md:justify-between">
            <div>
              <p className="text-[11px] font-semibold uppercase tracking-[0.28em] text-white/38">
                Related features
              </p>
              <h2 className="mt-3 text-[2rem] font-semibold tracking-[-0.05em] text-white md:text-[2.5rem]">
                Continue through the platform story.
              </h2>
            </div>
            <Link
              href={backHref}
              className="inline-flex items-center gap-2 text-sm font-semibold text-white/60 transition-colors duration-200 hover:text-white"
            >
              {backLabel}
              <ArrowRight className="h-4 w-4" />
            </Link>
          </div>

          <div className="mt-8 grid gap-5 lg:grid-cols-3">
            {relatedFeatures.map((feature) => {
              const Icon = feature.icon;

              return (
                <Link
                  key={feature.slug}
                  href={feature.href}
                  className="group rounded-[1.8rem] border border-white/10 bg-[#0b0d12] p-7 transition-transform duration-300 hover:-translate-y-1 hover:border-white/16"
                >
                  <div className="flex h-11 w-11 items-center justify-center rounded-[1rem] border border-white/10 bg-white/[0.04] text-[#ffb2b9]">
                    <Icon className="h-5 w-5" />
                  </div>
                  <h3 className="mt-6 text-[1.28rem] font-semibold tracking-[-0.03em] text-white">
                    {feature.title}
                  </h3>
                  <p className="mt-3 text-sm leading-6 text-white/58">
                    {feature.shortDescription}
                  </p>
                  <div className="mt-6 inline-flex items-center gap-2 text-sm font-semibold text-white">
                    View feature
                    <ArrowRight className="h-4 w-4 transition-transform duration-300 group-hover:translate-x-1" />
                  </div>
                </Link>
              );
            })}
          </div>
        </Container>
      </section>
    </>
  );
}
