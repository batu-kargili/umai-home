import { CapabilityCard } from "@/components/platform/CapabilityCard";
import { CapabilityCenterNode } from "@/components/platform/CapabilityCenterNode";
import { CapabilityConnectorSvg } from "@/components/platform/CapabilityConnectorSvg";
import { Container } from "@/components/ui/Container";
import type { UmaiFeature } from "@/content/umai-content-types";
import { umaiFeatures } from "@/content/umai-features";

function requireFeature(position: UmaiFeature["position"]) {
  const feature = umaiFeatures.find((item) => item.position === position);

  if (!feature) {
    throw new Error(`Missing UMAI feature for position: ${position}`);
  }

  return feature;
}

const leftFeatures = [
  requireFeature("left-top"),
  requireFeature("left-middle"),
  requireFeature("left-bottom"),
];

const rightFeatures = [
  requireFeature("right-top"),
  requireFeature("right-middle"),
  requireFeature("right-bottom"),
];

const connectorVariants = ["top", "middle", "bottom"] as const;

export function UmaiCapabilityDiagram({
  activeFeatureSlug,
  centerActive = false,
  className = "",
}: {
  activeFeatureSlug?: string;
  centerActive?: boolean;
  className?: string;
}) {
  return (
    <section id="platform" className={`relative scroll-mt-28 ${className}`}>
      <Container>
        <div className="relative overflow-hidden rounded-[2.5rem] border border-white/10 bg-[#070506] shadow-[0_24px_100px_rgba(0,0,0,0.42)]">
          <div className="absolute inset-0 bg-[radial-gradient(circle_at_50%_28%,rgba(255,255,255,0.03),transparent_30%),linear-gradient(180deg,#090909_0%,#040404_100%)]" />
          <div className="absolute inset-0 opacity-[0.08] [background-image:radial-gradient(rgba(255,255,255,0.45)_0.75px,transparent_0.75px)] [background-size:24px_24px]" />
          <div className="absolute inset-x-0 top-0 h-px bg-gradient-to-r from-transparent via-white/10 to-transparent" />

          <div className="relative px-5 py-6 sm:px-6 sm:py-7 md:px-8 md:py-8 lg:px-10 lg:py-10">
            <div className="hidden lg:grid lg:grid-cols-[15.75rem_minmax(3.15rem,4vw,4.6rem)_15rem_minmax(3.15rem,4vw,4.6rem)_15.75rem] lg:grid-rows-[9.6rem_9.6rem_9.6rem] lg:items-center lg:justify-center">
              <div className="row-start-1">
                <CapabilityCard
                  feature={leftFeatures[0]}
                  active={leftFeatures[0].slug === activeFeatureSlug}
                />
              </div>
              <div className="row-start-2">
                <CapabilityCard
                  feature={leftFeatures[1]}
                  active={leftFeatures[1].slug === activeFeatureSlug}
                />
              </div>
              <div className="row-start-3">
                <CapabilityCard
                  feature={leftFeatures[2]}
                  active={leftFeatures[2].slug === activeFeatureSlug}
                />
              </div>

              <div className="col-start-2 row-start-1 row-span-2 -mr-px self-stretch">
                <CapabilityConnectorSvg
                  side="left"
                  variant={connectorVariants[0]}
                  theme={leftFeatures[0].theme}
                  active={leftFeatures[0].slug === activeFeatureSlug}
                />
              </div>
              <div className="col-start-2 row-start-2 -mr-px h-full">
                <CapabilityConnectorSvg
                  side="left"
                  variant={connectorVariants[1]}
                  theme={leftFeatures[1].theme}
                  active={leftFeatures[1].slug === activeFeatureSlug}
                />
              </div>
              <div className="col-start-2 row-start-2 row-span-2 -mr-px self-stretch">
                <CapabilityConnectorSvg
                  side="left"
                  variant={connectorVariants[2]}
                  theme={leftFeatures[2].theme}
                  active={leftFeatures[2].slug === activeFeatureSlug}
                />
              </div>

              <div className="col-start-3 row-start-2 z-20 flex justify-center">
                <CapabilityCenterNode active={centerActive} />
              </div>

              <div className="col-start-4 row-start-1 row-span-2 -ml-px self-stretch">
                <CapabilityConnectorSvg
                  side="right"
                  variant={connectorVariants[0]}
                  theme={rightFeatures[0].theme}
                  active={rightFeatures[0].slug === activeFeatureSlug}
                />
              </div>
              <div className="col-start-4 row-start-2 -ml-px h-full">
                <CapabilityConnectorSvg
                  side="right"
                  variant={connectorVariants[1]}
                  theme={rightFeatures[1].theme}
                  active={rightFeatures[1].slug === activeFeatureSlug}
                />
              </div>
              <div className="col-start-4 row-start-2 row-span-2 -ml-px self-stretch">
                <CapabilityConnectorSvg
                  side="right"
                  variant={connectorVariants[2]}
                  theme={rightFeatures[2].theme}
                  active={rightFeatures[2].slug === activeFeatureSlug}
                />
              </div>

              <div className="col-start-5 row-start-1">
                <CapabilityCard
                  feature={rightFeatures[0]}
                  active={rightFeatures[0].slug === activeFeatureSlug}
                />
              </div>
              <div className="col-start-5 row-start-2">
                <CapabilityCard
                  feature={rightFeatures[1]}
                  active={rightFeatures[1].slug === activeFeatureSlug}
                />
              </div>
              <div className="col-start-5 row-start-3">
                <CapabilityCard
                  feature={rightFeatures[2]}
                  active={rightFeatures[2].slug === activeFeatureSlug}
                />
              </div>
            </div>

            <div className="lg:hidden">
              <div className="mx-auto max-w-[20rem]">
                <CapabilityCenterNode active={centerActive} />
              </div>
              <div className="mt-6 grid gap-4 sm:grid-cols-2">
                {umaiFeatures.map((feature) => (
                  <CapabilityCard
                    key={feature.slug}
                    feature={feature}
                    active={feature.slug === activeFeatureSlug}
                  />
                ))}
              </div>
            </div>
          </div>
        </div>
      </Container>
    </section>
  );
}
