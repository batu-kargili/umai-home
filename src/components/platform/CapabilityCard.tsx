import Link from "next/link";
import { ArrowUpRight } from "lucide-react";

import type { UmaiFeature } from "@/content/umai-content-types";
import { capabilityThemes } from "@/components/platform/theme";

export function CapabilityCard({
  feature,
  active = false,
}: {
  feature: UmaiFeature;
  active?: boolean;
}) {
  const theme = capabilityThemes[feature.theme];
  const Icon = feature.icon;

  return (
    <Link
      href={feature.href}
      aria-label={`${feature.title} - ${feature.shortDescription}`}
      className={`group/card relative z-10 flex min-h-[8.35rem] w-full flex-col justify-between rounded-[1.35rem] border bg-gradient-to-b ${theme.softSurface} px-4 py-3.5 backdrop-blur transition-all duration-300 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-white/70 focus-visible:ring-offset-2 focus-visible:ring-offset-[#06070b] motion-reduce:transform-none ${
        active
          ? `${theme.border} ${theme.glow} -translate-y-1`
          : "border-white/10 hover:-translate-y-1 hover:border-white/16 hover:shadow-[0_18px_52px_rgba(0,0,0,0.3)]"
      }`}
    >
      <div className="flex items-start justify-between gap-3">
        <div
          className={`flex h-[2.375rem] w-[2.375rem] items-center justify-center rounded-[0.95rem] border border-white/10 ${theme.iconBg} ${theme.iconText}`}
        >
          <Icon className="h-[1.125rem] w-[1.125rem]" />
        </div>
        <ArrowUpRight className="h-4 w-4 text-white/34 transition-transform duration-300 group-hover/card:translate-x-0.5 group-hover/card:-translate-y-0.5 group-hover/card:text-white/70" />
      </div>

      <div className="mt-3.5">
        <p className="text-[0.9rem] font-semibold tracking-[-0.03em] text-white">
          {feature.title}
        </p>
        <p className="mt-1.5 text-[0.74rem] leading-5 text-white/58">
          {feature.shortDescription}
        </p>
      </div>
    </Link>
  );
}
