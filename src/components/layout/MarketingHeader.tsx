import { MarketingNavigation } from "@/components/layout/MarketingNavigation";

type MarketingHeaderAccent = "red" | "blue";
type MarketingHeaderTheme = "dark" | "light";

interface MarketingHeaderProps {
  accent?: MarketingHeaderAccent;
  theme?: MarketingHeaderTheme;
}

export function MarketingHeader({
  accent = "red",
  theme = "dark",
}: MarketingHeaderProps) {
  const isLight = theme === "light";

  return (
    <header
      className={`sticky top-0 z-50 border-b ${
        isLight
          ? "border-slate-200 bg-white shadow-[0_12px_32px_rgba(15,23,42,0.08)]"
          : "border-white/10 bg-black/95 shadow-2xl backdrop-blur-md"
      }`}
    >
      <MarketingNavigation accent={accent} theme={theme} />
    </header>
  );
}
