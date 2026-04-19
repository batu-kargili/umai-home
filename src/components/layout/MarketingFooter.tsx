import Link from "next/link";

import { SiteLogo } from "@/components/layout/SiteLogo";
import { Container } from "@/components/ui/Container";

const FOOTER_COLUMNS = [
  {
    heading: "Platform",
    links: [
      { label: "Platform overview", href: "/platform" },
      { label: "Real-Time Guardrails", href: "/features/real-time-guardrails" },
      { label: "Browser Extension", href: "/browser-extension" },
    ],
  },
  {
    heading: "Resources",
    links: [
      { label: "Docs", href: "/docs" },
      { label: "Contact", href: "/contact" },
      { label: "Blog", href: "/blog" },
    ],
  },
  {
    heading: "Company",
    links: [
      { label: "About", href: "/about" },
      { label: "Privacy", href: "/privacy" },
      { label: "Cookie preferences", href: "/cookie-preferences" },
      { label: "Terms", href: "/terms" },
      { label: "Start a pilot", href: "/contact" },
    ],
  },
];

export function MarketingFooter() {
  return (
    <footer className="border-t border-white/10 bg-black text-white">
      <Container className="py-14">
        <div className="grid gap-12 lg:grid-cols-[minmax(0,1.2fr)_repeat(3,minmax(0,1fr))]">
          <div className="max-w-[320px]">
            <SiteLogo
              className="w-[176px] sm:w-[192px]"
              sizes="(min-width: 640px) 192px, 176px"
            />
            <p className="mt-6 text-[0.98rem] leading-7 text-white/64">
              UMAI is the control layer for enterprise AI teams that need runtime
              guardrails, browser governance, and audit-ready evidence without
              re-architecting the stack.
            </p>
          </div>

          {FOOTER_COLUMNS.map((column) => (
            <div key={column.heading}>
              <p className="text-xs font-semibold uppercase tracking-[0.22em] text-white/48">
                {column.heading}
              </p>
              <ul className="mt-5 space-y-3">
                {column.links.map((link) => (
                  <li key={link.label}>
                    <Link
                      href={link.href}
                      className="text-sm text-white/78 transition-colors duration-200 hover:text-white"
                    >
                      {link.label}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        <div className="mt-14 flex flex-col gap-3 border-t border-white/10 pt-6 text-sm text-white/56 md:flex-row md:items-center md:justify-between">
          <p>&copy; 2026 UMAI. Enterprise AI governance for governed deployment.</p>
          <div className="flex flex-wrap gap-5">
            <Link href="/privacy" className="text-white/72 transition-colors hover:text-white">
              Privacy
            </Link>
            <Link
              href="/cookie-preferences"
              className="text-white/72 transition-colors hover:text-white"
            >
              Cookie preferences
            </Link>
            <Link href="/terms" className="text-white/72 transition-colors hover:text-white">
              Terms
            </Link>
          </div>
        </div>
      </Container>
    </footer>
  );
}
