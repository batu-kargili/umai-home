import Link from "next/link";
import { ArrowUpRight } from "lucide-react";

import type { UmaiInnovation } from "@/content/umai-content-types";
import { capabilityThemes } from "@/components/platform/theme";

export function InnovationPill({
  innovation,
  active = false,
}: {
  innovation: UmaiInnovation;
  active?: boolean;
}) {
  const theme = capabilityThemes[innovation.theme];
  const Icon = innovation.icon;

  return (
    <Link
      href={innovation.href}
      aria-label={innovation.title}
      className={`group inline-flex min-h-[3.75rem] items-center gap-3 rounded-full border bg-white/[0.03] px-4 py-3 text-left backdrop-blur transition-all duration-300 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-white/70 focus-visible:ring-offset-2 focus-visible:ring-offset-[#06070b] motion-reduce:transform-none ${
        active
          ? `${theme.pillBorder} ${theme.glow}`
          : "border-white/10 hover:-translate-y-0.5 hover:border-white/16 hover:bg-white/[0.05] hover:shadow-[0_14px_42px_rgba(0,0,0,0.28)]"
      }`}
    >
      <div
        className={`flex h-9 w-9 items-center justify-center rounded-full border border-white/10 ${theme.iconBg} ${theme.iconText}`}
      >
        <Icon className="h-4 w-4" />
      </div>
      <div>
        <p className="text-sm font-medium text-white">{innovation.title}</p>
        <p className="text-xs text-white/46">{innovation.shortDescription}</p>
      </div>
      <ArrowUpRight className="ml-auto h-4 w-4 text-white/32 transition-transform duration-300 group-hover:translate-x-0.5 group-hover:-translate-y-0.5 group-hover:text-white/60" />
    </Link>
  );
}
