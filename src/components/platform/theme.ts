import type { CapabilityTheme } from "@/content/umai-content-types";

export const capabilityThemes: Record<
  CapabilityTheme,
  {
    border: string;
    accentText: string;
    iconBg: string;
    iconText: string;
    glow: string;
    stroke: string;
    softSurface: string;
    pillBorder: string;
  }
> = {
  cobalt: {
    border: "border-white/10",
    accentText: "text-white/72",
    iconBg: "bg-white/[0.04]",
    iconText: "text-white/72",
    glow: "shadow-[0_18px_52px_rgba(0,0,0,0.36)]",
    stroke: "#d64a57",
    softSurface: "from-[#0b0b0d] to-[#050506]",
    pillBorder: "border-white/10",
  },
  azure: {
    border: "border-white/10",
    accentText: "text-white/72",
    iconBg: "bg-white/[0.04]",
    iconText: "text-white/72",
    glow: "shadow-[0_18px_52px_rgba(0,0,0,0.36)]",
    stroke: "#d64a57",
    softSurface: "from-[#0b0b0d] to-[#050506]",
    pillBorder: "border-white/10",
  },
  cyan: {
    border: "border-white/10",
    accentText: "text-white/72",
    iconBg: "bg-white/[0.04]",
    iconText: "text-white/72",
    glow: "shadow-[0_18px_52px_rgba(0,0,0,0.36)]",
    stroke: "#d64a57",
    softSurface: "from-[#0b0b0d] to-[#050506]",
    pillBorder: "border-white/10",
  },
};
