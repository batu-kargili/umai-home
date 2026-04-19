export function SectionLabel({
  children,
  light = false,
}: {
  children: React.ReactNode;
  light?: boolean;
}) {
  return (
    <p
      className={`inline-flex items-center gap-2 text-[11px] font-semibold uppercase tracking-[0.18em] mb-4 ${
        light ? "text-island-cyan" : "text-academy-blue"
      }`}
    >
      <span className={`h-px w-6 ${light ? "bg-island-cyan" : "bg-academy-blue"}`} />
      {children}
      <span className={`h-px w-6 ${light ? "bg-island-cyan" : "bg-academy-blue"}`} />
    </p>
  );
}
