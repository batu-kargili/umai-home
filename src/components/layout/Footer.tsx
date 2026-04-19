import Link from "next/link";
import { Container } from "@/components/ui/Container";

const FOOTER_COLUMNS = [
  {
    heading: "Product",
    links: [
      { label: "Features",   href: "/#features" },
      { label: "Use Cases",  href: "/#use-cases" },
      { label: "Contact",    href: "/contact" },
      { label: "Changelog",  href: "/blog?category=changelog" },
      { label: "Roadmap",    href: "/blog?category=roadmap" },
    ],
  },
  {
    heading: "Developers",
    links: [
      { label: "Documentation", href: "/docs" },
      { label: "Quick Start",   href: "/docs#quickstart" },
      { label: "SDK Reference", href: "/docs#sdk-install" },
      { label: "API Reference", href: "/docs#api-auth" },
      { label: "GitHub",        href: "https://github.com/duvarai" },
    ],
  },
  {
    heading: "Company",
    links: [
      { label: "About",    href: "/about" },
      { label: "Blog",     href: "/blog" },
      { label: "Careers",  href: "/careers" },
      { label: "Security", href: "/security" },
      { label: "Contact",  href: "/contact" },
    ],
  },
  {
    heading: "Legal",
    links: [
      { label: "Privacy Policy",   href: "/privacy" },
      { label: "Terms of Service", href: "/terms" },
      { label: "Cookie Policy",    href: "/cookies" },
      { label: "DPA",              href: "/dpa" },
    ],
  },
];

export function Footer() {
  return (
    <footer className="bg-midnight border-t border-white/5 pt-16 pb-8">
      <Container>
        {/* Top grid */}
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-8 lg:gap-12 pb-12 border-b border-white/5">
          {/* Brand column */}
          <div className="col-span-2 md:col-span-1">
            <div className="flex items-center gap-2 mb-4">
              <div className="h-8 w-8 rounded-md bg-gradient-to-br from-island-cyan to-ocean flex items-center justify-center">
                <span className="text-white font-black text-sm">U</span>
              </div>
              <span className="text-white font-bold text-lg">Umai</span>
            </div>
            <p className="text-sm text-white/50 leading-relaxed mb-6 max-w-[200px]">
              Enterprise AI guardrails for compliant, secure LLM deployments.
            </p>
            <div className="flex gap-3">
              {(["X", "Li", "Gh"] as const).map((icon) => (
                <a
                  key={icon}
                  href="#"
                  className="h-8 w-8 rounded-md border border-white/10 flex items-center justify-center text-white/50 hover:text-white hover:border-white/30 transition-colors text-xs font-bold"
                >
                  {icon}
                </a>
              ))}
            </div>
          </div>

          {/* Link columns */}
          {FOOTER_COLUMNS.map((col) => (
            <div key={col.heading}>
              <h4 className="text-xs font-semibold uppercase tracking-[0.15em] text-white/40 mb-4">
                {col.heading}
              </h4>
              <ul className="space-y-3">
                {col.links.map((link) => (
                  <li key={link.label}>
                    <Link
                      href={link.href}
                      className="text-sm text-white/60 hover:text-white transition-colors"
                    >
                      {link.label}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        {/* Bottom bar */}
        <div className="pt-8 flex flex-col sm:flex-row items-center justify-between gap-4">
          <p className="text-xs text-white/30">
            &copy; {new Date().getFullYear()} DuvarAI, Inc. All rights reserved.
          </p>
          <p className="text-xs text-white/30">
            Built on{" "}
            <span className="text-island-cyan/70">DuvarAI Engine</span>
          </p>
        </div>
      </Container>
    </footer>
  );
}
