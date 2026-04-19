type BadgeColor = "cyan" | "ocean" | "teal" | "gray";

const colors: Record<BadgeColor, string> = {
  cyan:  "bg-island-cyan/15 text-island-cyan border-island-cyan/30",
  ocean: "bg-ocean/15 text-ocean border-ocean/30",
  teal:  "bg-meadow-teal/15 text-meadow-teal border-meadow-teal/30",
  gray:  "bg-white/10 text-white/70 border-white/20",
};

export function Badge({
  children,
  color = "cyan",
}: {
  children: React.ReactNode;
  color?: BadgeColor;
}) {
  return (
    <span
      className={`inline-flex items-center rounded-full border px-2.5 py-0.5 text-[11px] font-semibold uppercase tracking-wider ${colors[color]}`}
    >
      {children}
    </span>
  );
}
