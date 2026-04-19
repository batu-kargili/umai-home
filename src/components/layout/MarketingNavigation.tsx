"use client";

import { useEffect, useRef, useState, type ReactNode } from "react";
import Image from "next/image";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { ArrowRight, ChevronDown, Menu } from "lucide-react";

import {
  CONTACT_URL,
  MARKETING_NAV_ITEMS,
  type MarketingNavDropdown,
  type MarketingNavLink,
  type MarketingNavSection,
} from "@/components/layout/marketing-nav-data";
import { SiteLogo } from "@/components/layout/SiteLogo";
import { Container } from "@/components/ui/Container";

type MarketingNavigationAccent = "red" | "blue";
type MarketingNavigationTheme = "dark" | "light";

const ctaClasses: Record<MarketingNavigationAccent, string> = {
  red: "inline-flex items-center justify-center rounded-md bg-[#b91c1c] px-5 py-2.5 text-sm font-semibold text-white transition-colors hover:bg-[#991b1b]",
  blue: "inline-flex items-center justify-center rounded-md bg-landing-blue px-5 py-2.5 text-sm font-semibold text-white transition-colors hover:bg-landing-blue/90",
};

const mobileCtaClasses: Record<MarketingNavigationAccent, string> = {
  red: "inline-flex items-center justify-center rounded-md bg-[#b91c1c] px-5 py-3 text-sm font-semibold text-white",
  blue: "inline-flex items-center justify-center rounded-md bg-landing-blue px-5 py-3 text-sm font-semibold text-white",
};

interface MarketingNavigationProps {
  accent?: MarketingNavigationAccent;
  theme?: MarketingNavigationTheme;
  ctaHref?: string;
  ctaLabel?: string;
  desktopUtilitySlot?: ReactNode;
  navHeightClassName?: string;
}

export function MarketingNavigation({
  accent = "blue",
  theme = "dark",
  ctaHref = CONTACT_URL,
  ctaLabel = "Try UMAI",
  desktopUtilitySlot,
  navHeightClassName = "h-[68px]",
}: MarketingNavigationProps) {
  const isLight = theme === "light";
  const pathname = usePathname();
  const desktopNavRef = useRef<HTMLDivElement>(null);
  const [openDropdownLabel, setOpenDropdownLabel] = useState<string | null>(null);

  const triggerClasses = isLight
    ? "text-slate-700 hover:bg-slate-100 hover:text-slate-950"
    : "text-white/68 hover:bg-white/5 hover:text-white";

  const mobileThemeClasses = isLight
    ? {
        panel: "border-slate-200 bg-white",
        card: "border-slate-200 bg-slate-50/70",
        sectionBorder: "border-slate-200",
        heading: "text-slate-500",
        text: "text-slate-900",
        body: "text-slate-600",
      }
    : {
        panel: "border-white/10 bg-black",
        card: "border-white/10 bg-white/[0.03]",
        sectionBorder: "border-white/10",
        heading: "text-white/34",
        text: "text-white",
        body: "text-white/56",
      };

  useEffect(() => {
    setOpenDropdownLabel(null);
  }, [pathname]);

  useEffect(() => {
    if (!openDropdownLabel) {
      return;
    }

    const handlePointerDown = (event: PointerEvent) => {
      if (!desktopNavRef.current?.contains(event.target as Node)) {
        setOpenDropdownLabel(null);
      }
    };

    const handleKeyDown = (event: KeyboardEvent) => {
      if (event.key === "Escape") {
        setOpenDropdownLabel(null);
      }
    };

    document.addEventListener("pointerdown", handlePointerDown);
    document.addEventListener("keydown", handleKeyDown);

    return () => {
      document.removeEventListener("pointerdown", handlePointerDown);
      document.removeEventListener("keydown", handleKeyDown);
    };
  }, [openDropdownLabel]);

  return (
    <div>
      <Container>
        <nav className={`flex ${navHeightClassName} items-center justify-between gap-6`}>
          <SiteLogo tone={isLight ? "dark" : "light"} />

          <div ref={desktopNavRef} className="hidden items-center gap-1 lg:flex">
            {MARKETING_NAV_ITEMS.map((item) => (
              <div key={item.label} className="relative">
                <button
                  type="button"
                  aria-expanded={openDropdownLabel === item.label}
                  aria-controls={`marketing-nav-${item.label.toLowerCase().replace(/\s+/g, "-")}`}
                  className={`rounded-md px-4 py-2 text-sm font-medium transition-colors ${
                    openDropdownLabel === item.label
                      ? isLight
                        ? "bg-slate-100 text-slate-950"
                        : "bg-white/5 text-white"
                      : triggerClasses
                  }`}
                  onClick={() =>
                    setOpenDropdownLabel((current) =>
                      current === item.label ? null : item.label,
                    )
                  }
                >
                  <span className="inline-flex items-center gap-1">
                    {item.label}
                    <ChevronDown
                      className={`h-4 w-4 transition-transform ${
                        openDropdownLabel === item.label ? "rotate-180" : ""
                      }`}
                    />
                  </span>
                </button>
                {openDropdownLabel === item.label ? (
                  <DesktopDropdownPanel
                    id={`marketing-nav-${item.label.toLowerCase().replace(/\s+/g, "-")}`}
                    item={item}
                    onNavigate={() => setOpenDropdownLabel(null)}
                  />
                ) : null}
              </div>
            ))}
          </div>

          <div className="hidden items-center gap-3 lg:flex">
            {desktopUtilitySlot}
            <Link href={ctaHref} className={ctaClasses[accent]}>
              {ctaLabel}
            </Link>
          </div>

          <details className="relative lg:hidden">
            <summary
              className={`list-none cursor-pointer rounded-md p-2 transition-colors [&::-webkit-details-marker]:hidden ${
                isLight
                  ? "text-slate-700 hover:bg-slate-100 hover:text-slate-950"
                  : "text-white/70 hover:bg-white/5 hover:text-white"
              }`}
            >
              <span className="sr-only">Toggle menu</span>
              <Menu className="h-5 w-5" />
            </summary>

            <div
              className={`absolute right-0 top-full z-50 mt-3 w-[min(92vw,420px)] rounded-[24px] border shadow-[0_24px_70px_rgba(15,23,42,0.14)] ${mobileThemeClasses.panel}`}
            >
              <div className="max-h-[75vh] overflow-y-auto p-4">
                <div className="flex flex-col gap-4">
                  {MARKETING_NAV_ITEMS.map((item) => (
                    <section
                      key={item.label}
                      className={`rounded-2xl border p-4 ${mobileThemeClasses.card}`}
                    >
                      <p
                        className={`text-[11px] font-semibold uppercase tracking-[0.18em] ${mobileThemeClasses.heading}`}
                      >
                        {item.label}
                      </p>

                      <div className="mt-4 space-y-4">
                        {item.sections.map((section, sectionIndex) => (
                          <div
                            key={`${item.label}-${section.heading}`}
                            className={
                              sectionIndex === 0
                                ? ""
                                : `border-t pt-4 ${mobileThemeClasses.sectionBorder}`
                            }
                          >
                            <p
                              className={`text-[11px] font-semibold uppercase tracking-[0.16em] ${mobileThemeClasses.heading}`}
                            >
                              {section.heading}
                            </p>
                            <div className="mt-3 space-y-1.5">
                              {section.items.map((link) => (
                                <Link
                                  key={link.label}
                                  href={link.href}
                                  className="block rounded-xl px-3 py-3 transition-colors hover:bg-white/5"
                                >
                                  <span
                                    className={`block text-sm font-semibold ${mobileThemeClasses.text}`}
                                  >
                                    {link.label}
                                  </span>
                                  <span
                                    className={`mt-1 block text-xs leading-5 ${mobileThemeClasses.body}`}
                                  >
                                    {link.description}
                                  </span>
                                </Link>
                              ))}
                            </div>
                          </div>
                        ))}
                      </div>
                    </section>
                  ))}

                  <Link href={ctaHref} className={mobileCtaClasses[accent]}>
                    {ctaLabel}
                  </Link>
                </div>
              </div>
            </div>
          </details>
        </nav>
      </Container>
    </div>
  );
}

function DesktopDropdownPanel({
  id,
  item,
  onNavigate,
}: {
  id: string;
  item: MarketingNavDropdown;
  onNavigate: () => void;
}) {
  if (item.variant === "compact") {
    return (
      <div
        id={id}
        className="absolute right-0 top-full z-50 mt-3 w-[320px] rounded-[22px] border border-slate-200 bg-[linear-gradient(180deg,#ffffff_0%,#f6f8fc_100%)] p-2.5 shadow-[0_24px_70px_rgba(15,23,42,0.14)]"
      >
        {item.sections.map((section) => (
          <DesktopListSection
            key={section.heading}
            section={section}
            padded={false}
            onNavigate={onNavigate}
          />
        ))}
      </div>
    );
  }

  const positionClasses =
    item.align === "right"
      ? "right-0 left-auto translate-x-0"
      : "left-1/2 -translate-x-1/2";

  if (item.variant === "split") {
    return (
      <div
        id={id}
        className={`absolute top-full z-50 mt-3 w-[950px] max-w-[calc(100vw-64px)] overflow-hidden rounded-[24px] border border-slate-200 bg-[linear-gradient(180deg,#ffffff_0%,#f6f8fc_100%)] shadow-[0_24px_70px_rgba(15,23,42,0.14)] ${positionClasses}`}
      >
        <div className="grid grid-cols-[minmax(0,0.92fr)_minmax(0,1.08fr)]">
          <DesktopListSection section={item.sections[0]} onNavigate={onNavigate} />
          <div className="grid grid-cols-[minmax(0,1fr)_190px] items-start gap-3 border-l border-slate-200 bg-slate-50/80 p-5">
            <DesktopSection
              section={item.sections[1]}
              density="compact"
              onNavigate={onNavigate}
            />
            {item.feature ? (
              <DesktopFeatureCard feature={item.feature} onNavigate={onNavigate} />
            ) : null}
          </div>
        </div>
      </div>
    );
  }

  return (
    <div
      id={id}
      className={`absolute top-full z-50 mt-3 w-[980px] max-w-[calc(100vw-64px)] overflow-hidden rounded-[24px] border border-slate-200 bg-[linear-gradient(180deg,#ffffff_0%,#f6f8fc_100%)] shadow-[0_24px_70px_rgba(15,23,42,0.14)] ${positionClasses}`}
    >
      <div className="grid grid-cols-[1.02fr_0.98fr_230px]">
        <DesktopListSection section={item.sections[0]} onNavigate={onNavigate} />
        <DesktopSection
          section={item.sections[1]}
          className="border-l border-slate-200"
          onNavigate={onNavigate}
        />
        {item.feature ? (
          <DesktopFeatureCard
            feature={item.feature}
            className="border-l border-slate-200 bg-slate-50/80"
            onNavigate={onNavigate}
          />
        ) : null}
      </div>
    </div>
  );
}

function DesktopSection({
  section,
  className = "",
  density = "default",
  onNavigate,
}: {
  section: MarketingNavSection;
  className?: string;
  density?: "default" | "compact";
  onNavigate?: () => void;
}) {
  if (section.style === "tiles") {
    return (
      <DesktopTilesSection
        section={section}
        className={className}
        onNavigate={onNavigate}
      />
    );
  }

  return (
    <DesktopListSection
      section={section}
      className={className}
      density={density}
      onNavigate={onNavigate}
    />
  );
}

function DesktopListSection({
  section,
  padded = true,
  className = "",
  density = "default",
  onNavigate,
}: {
  section: MarketingNavSection;
  padded?: boolean;
  className?: string;
  density?: "default" | "compact";
  onNavigate?: () => void;
}) {
  return (
    <div className={`${padded ? "p-5" : ""} ${className}`.trim()}>
      <p className="text-[10px] font-semibold uppercase tracking-[0.2em] text-slate-400">
        {section.heading}
      </p>

      <div className={density === "compact" ? "mt-3 space-y-0.5" : "mt-3.5 space-y-1"}>
        {section.items.map((link) => (
          <DesktopListLink
            key={link.label}
            link={link}
            density={density}
            onNavigate={onNavigate}
          />
        ))}
      </div>
    </div>
  );
}

function DesktopTilesSection({
  section,
  className = "",
  onNavigate,
}: {
  section: MarketingNavSection;
  className?: string;
  onNavigate?: () => void;
}) {
  return (
    <div className={`p-5 ${className}`.trim()}>
      <p className="text-[10px] font-semibold uppercase tracking-[0.2em] text-slate-400">
        {section.heading}
      </p>

      <div className="mt-3.5 grid grid-cols-2 gap-2.5">
        {section.items.map((link) => (
          <DesktopTileLink key={link.label} link={link} onNavigate={onNavigate} />
        ))}
      </div>
    </div>
  );
}

function DesktopListLink({
  link,
  density = "default",
  onNavigate,
}: {
  link: MarketingNavLink;
  density?: "default" | "compact";
  onNavigate?: () => void;
}) {
  const Icon = link.icon;
  const compact = density === "compact";

  return (
    <Link
      href={link.href}
      onClick={onNavigate}
      className={`group flex items-start rounded-[18px] transition-colors hover:bg-slate-50 ${
        compact ? "gap-2.5 px-2.5 py-2" : "gap-3 px-3 py-2.5"
      }`}
    >
      <span
        className={`mt-0.5 flex flex-none items-center justify-center bg-[#edf4ff] text-[#0056F9] transition-colors group-hover:bg-[#dfeafe] ${
          compact ? "h-8 w-8 rounded-[12px]" : "h-9 w-9 rounded-[14px]"
        }`}
      >
        <Icon className="h-4 w-4" />
      </span>
      <span className="min-w-0">
        <span
          className={`block font-semibold text-slate-950 ${
            compact ? "text-[0.9rem] leading-5" : "text-[0.96rem] leading-5"
          }`}
        >
          {link.label}
        </span>
        <span
          className={`mt-1 block line-clamp-2 text-slate-600 ${
            compact ? "text-[12px] leading-[1.35rem]" : "text-[13px] leading-5"
          }`}
        >
          {link.description}
        </span>
      </span>
    </Link>
  );
}

function DesktopTileLink({
  link,
  onNavigate,
}: {
  link: MarketingNavLink;
  onNavigate?: () => void;
}) {
  const Icon = link.icon;

  return (
    <Link
      href={link.href}
      onClick={onNavigate}
      className="group block rounded-[18px] border border-slate-200 bg-white px-3.5 py-3.5 transition-all hover:border-[#cfe0ff] hover:shadow-[0_12px_28px_rgba(15,23,42,0.07)]"
    >
      <span className="mb-2.5 flex h-[34px] w-[34px] items-center justify-center rounded-[12px] bg-slate-50 text-[#0056F9] transition-colors group-hover:bg-[#edf4ff]">
        <Icon className="h-4 w-4" />
      </span>
      <span className="block text-[0.92rem] font-semibold leading-5 text-slate-950">
        {link.label}
      </span>
      <span className="mt-1.5 block line-clamp-2 text-[12.5px] leading-5 text-slate-600">
        {link.description}
      </span>
    </Link>
  );
}

function DesktopFeatureCard({
  feature,
  className = "",
  onNavigate,
}: {
  feature: NonNullable<MarketingNavDropdown["feature"]>;
  className?: string;
  onNavigate?: () => void;
}) {
  return (
    <div className={`p-5 ${className}`.trim()}>
      <Link
        href={feature.href}
        onClick={onNavigate}
        className="group flex flex-col overflow-hidden rounded-[20px] border border-slate-200 bg-white shadow-[0_14px_32px_rgba(15,23,42,0.06)]"
      >
        <div className="relative aspect-[16/8.5] overflow-hidden bg-slate-100">
          <Image
            src={feature.imageSrc}
            alt={feature.imageAlt}
            fill
            sizes="230px"
            className="object-cover transition-transform duration-500 group-hover:scale-[1.03]"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-slate-950/25 via-transparent to-transparent" />
        </div>

        <div className="flex flex-1 flex-col gap-2 p-3.5">
          <p className="text-[10px] font-semibold uppercase tracking-[0.18em] text-[#0056F9]/72">
            {feature.eyebrow}
          </p>
          <h3 className="text-[0.98rem] font-semibold leading-tight text-slate-950">
            {feature.title}
          </h3>
          <p className="line-clamp-3 text-[12px] leading-[1.35rem] text-slate-600">
            {feature.body}
          </p>
          <span className="mt-auto inline-flex items-center gap-1.5 text-[13px] font-semibold text-[#0056F9]">
            {feature.ctaLabel}
            <ArrowRight className="h-3.5 w-3.5 transition-transform group-hover:translate-x-0.5" />
          </span>
        </div>
      </Link>
    </div>
  );
}
