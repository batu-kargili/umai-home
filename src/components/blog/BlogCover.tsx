import {
  EyeOff,
  FileCheck2,
  GitBranch,
  Layers3,
  Rocket,
  ShieldAlert,
  type LucideIcon,
} from "lucide-react";

import type { BlogCoverTheme } from "@/lib/blog-data";

type CoverSize = "featured" | "card" | "compact";

type ThemeSpec = {
  icon: LucideIcon;
  label: string;
  gradient: string;
  orb: string;
  accent: string;
  pattern: "grid" | "lines" | "scan" | "tiles" | "rays" | "code";
};

const THEMES: Record<BlogCoverTheme, ThemeSpec> = {
  "injection-defense": {
    icon: ShieldAlert,
    label: "Runtime Defense",
    gradient: "from-[#041a36] via-[#072757] to-[#0b3a82]",
    orb: "rgba(16,108,236,0.45)",
    accent: "text-landing-blue-light",
    pattern: "grid",
  },
  "compliance-audit": {
    icon: FileCheck2,
    label: "Audit Evidence",
    gradient: "from-[#061427] via-[#0c2a52] to-[#1a4b8c]",
    orb: "rgba(147,197,253,0.35)",
    accent: "text-landing-blue-soft",
    pattern: "lines",
  },
  "pii-detection": {
    icon: EyeOff,
    label: "POST_LLM Scan",
    gradient: "from-[#02101f] via-[#0a2346] to-[#123a75]",
    orb: "rgba(16,108,236,0.55)",
    accent: "text-landing-blue-light",
    pattern: "scan",
  },
  "multi-tenant": {
    icon: Layers3,
    label: "Tenant Isolation",
    gradient: "from-[#0a1b3a] via-[#15306b] to-[#2651a8]",
    orb: "rgba(96,165,250,0.4)",
    accent: "text-landing-blue-light",
    pattern: "tiles",
  },
  "ga-launch": {
    icon: Rocket,
    label: "Generally Available",
    gradient: "from-[#052560] via-[#106CEC] to-[#4c9cff]",
    orb: "rgba(255,255,255,0.35)",
    accent: "text-white",
    pattern: "rays",
  },
  changelog: {
    icon: GitBranch,
    label: "Release Notes",
    gradient: "from-[#0a0f1a] via-[#131a2a] to-[#1f2b45]",
    orb: "rgba(16,108,236,0.3)",
    accent: "text-landing-blue-soft",
    pattern: "code",
  },
};

interface BlogCoverProps {
  theme: BlogCoverTheme;
  category: string;
  size?: CoverSize;
  className?: string;
}

export function BlogCover({
  theme,
  category,
  size = "card",
  className = "",
}: BlogCoverProps) {
  const spec = THEMES[theme];
  const Icon = spec.icon;

  const iconSize =
    size === "featured" ? "h-14 w-14" : size === "card" ? "h-9 w-9" : "h-7 w-7";
  const badgeSize =
    size === "featured"
      ? "text-[11px] px-3 py-1"
      : size === "compact"
        ? "text-[9px] px-2 py-0.5"
        : "text-[10px] px-2.5 py-0.5";
  const iconBox =
    size === "featured"
      ? "h-24 w-24"
      : size === "card"
        ? "h-16 w-16"
        : "h-12 w-12";

  return (
    <div
      className={`relative overflow-hidden bg-gradient-to-br ${spec.gradient} ${className}`}
    >
      <Pattern pattern={spec.pattern} />

      <div
        className="pointer-events-none absolute -right-16 -top-16 h-48 w-48 rounded-full blur-3xl"
        style={{
          background: `radial-gradient(circle, ${spec.orb}, transparent 70%)`,
        }}
      />
      <div
        className="pointer-events-none absolute -bottom-24 -left-20 h-56 w-56 rounded-full opacity-60 blur-3xl"
        style={{
          background: `radial-gradient(circle, ${spec.orb}, transparent 70%)`,
        }}
      />

      <div className="relative flex h-full w-full items-center justify-between p-6 md:p-8">
        <div className="flex flex-col gap-3">
          <span
            className={`inline-flex w-fit items-center gap-1.5 rounded-full border border-white/15 bg-white/5 font-semibold uppercase tracking-[0.18em] text-white/75 backdrop-blur-sm ${badgeSize}`}
          >
            <span className="h-1 w-1 rounded-full bg-landing-blue-light" />
            {spec.label}
          </span>
          {size === "featured" && (
            <p className="max-w-[260px] text-[13px] leading-relaxed text-white/55">
              {category} · UMAI Blog
            </p>
          )}
        </div>

        <div
          className={`flex ${iconBox} items-center justify-center rounded-2xl border border-white/15 bg-white/[0.06] backdrop-blur-sm`}
        >
          <Icon
            className={`${iconSize} ${spec.accent}`}
            strokeWidth={1.5}
          />
        </div>
      </div>

      <div className="pointer-events-none absolute inset-x-0 bottom-0 h-px bg-gradient-to-r from-transparent via-white/20 to-transparent" />
    </div>
  );
}

function Pattern({ pattern }: { pattern: ThemeSpec["pattern"] }) {
  if (pattern === "grid") {
    return (
      <svg
        className="pointer-events-none absolute inset-0 h-full w-full opacity-[0.18]"
        xmlns="http://www.w3.org/2000/svg"
      >
        <defs>
          <pattern
            id="cover-grid"
            width="24"
            height="24"
            patternUnits="userSpaceOnUse"
          >
            <path
              d="M 24 0 L 0 0 0 24"
              fill="none"
              stroke="white"
              strokeWidth="0.5"
            />
          </pattern>
        </defs>
        <rect width="100%" height="100%" fill="url(#cover-grid)" />
      </svg>
    );
  }

  if (pattern === "lines") {
    return (
      <div
        className="pointer-events-none absolute inset-0 opacity-[0.1]"
        style={{
          backgroundImage:
            "repeating-linear-gradient(0deg, rgba(255,255,255,0.5) 0 1px, transparent 1px 14px)",
        }}
      />
    );
  }

  if (pattern === "scan") {
    return (
      <>
        <div
          className="pointer-events-none absolute inset-0 opacity-[0.14]"
          style={{
            backgroundImage:
              "radial-gradient(rgba(255,255,255,0.6) 1px, transparent 1px)",
            backgroundSize: "18px 18px",
          }}
        />
        <div className="pointer-events-none absolute left-0 right-0 top-1/2 h-[2px] -translate-y-1/2 bg-gradient-to-r from-transparent via-landing-blue-light/60 to-transparent" />
      </>
    );
  }

  if (pattern === "tiles") {
    return (
      <svg
        className="pointer-events-none absolute inset-0 h-full w-full opacity-[0.12]"
        xmlns="http://www.w3.org/2000/svg"
      >
        <defs>
          <pattern
            id="cover-tiles"
            width="32"
            height="32"
            patternUnits="userSpaceOnUse"
            patternTransform="rotate(8)"
          >
            <rect
              x="0"
              y="0"
              width="14"
              height="14"
              fill="none"
              stroke="white"
              strokeWidth="0.6"
            />
            <rect
              x="16"
              y="16"
              width="14"
              height="14"
              fill="none"
              stroke="white"
              strokeWidth="0.6"
            />
          </pattern>
        </defs>
        <rect width="100%" height="100%" fill="url(#cover-tiles)" />
      </svg>
    );
  }

  if (pattern === "rays") {
    return (
      <>
        <div
          className="pointer-events-none absolute inset-0 opacity-30"
          style={{
            background:
              "radial-gradient(ellipse 70% 55% at 85% 20%, rgba(255,255,255,0.35), transparent 60%)",
          }}
        />
        <div
          className="pointer-events-none absolute inset-0 opacity-[0.12]"
          style={{
            backgroundImage:
              "repeating-linear-gradient(115deg, rgba(255,255,255,0.6) 0 1px, transparent 1px 20px)",
          }}
        />
      </>
    );
  }

  // code
  return (
    <div
      className="pointer-events-none absolute inset-0 opacity-[0.1]"
      style={{
        backgroundImage:
          "repeating-linear-gradient(90deg, rgba(255,255,255,0.5) 0 2px, transparent 2px 10px), repeating-linear-gradient(0deg, rgba(255,255,255,0.25) 0 1px, transparent 1px 22px)",
      }}
    />
  );
}
