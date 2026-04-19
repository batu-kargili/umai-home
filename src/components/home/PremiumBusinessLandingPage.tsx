import Image from "next/image";
import Link from "next/link";
import { ArrowRight } from "lucide-react";
import { PremiumFaqSection } from "@/components/home/PremiumFaqSection";
import { PremiumAuditLedgerEvidenceSection } from "@/components/home/PremiumAuditLedgerEvidenceSection";
import { PremiumHeroSection } from "@/components/home/PremiumHeroSection";
import { PremiumLocalizationSection } from "@/components/home/PremiumLocalizationSection";
import { PremiumProductsSection } from "@/components/home/PremiumProductsSection";
import { PremiumSolutionsSection } from "@/components/home/PremiumSolutionsSection";
import { PremiumTrustFrameworkSection } from "@/components/home/PremiumTrustFrameworkSection";
import { PremiumWhySection } from "@/components/home/PremiumWhySection";
import { MarketingHeader } from "@/components/layout/MarketingHeader";
import {
  CONTACT_URL,
  WEBINAR_URL,
} from "@/components/home/premium-landing-content";
import { Container } from "@/components/ui/Container";

export function PremiumBusinessLandingPage() {
  return (
    <div className="min-h-screen text-white umai-page-shell">
      <div className="relative overflow-hidden">
        <div className="pointer-events-none absolute inset-x-0 top-0 h-[960px] bg-[radial-gradient(circle_at_50%_6%,rgba(0,86,249,0.16),transparent_28%),radial-gradient(circle_at_70%_14%,rgba(109,74,255,0.10),transparent_16%)]" />

        <MarketingHeader accent="blue" theme="light" />

        <div className="border-b border-slate-200 bg-[#eaf1ff]">
          <Container className="flex flex-col items-start gap-2 py-3 sm:flex-row sm:items-center sm:gap-4">
            <p className="text-base font-semibold text-[#0056F9]">
              EU AI Act enforcement is almost here
            </p>
            <Link
              href={WEBINAR_URL}
              className="group inline-flex items-center gap-2 text-base font-normal text-slate-900 transition-colors hover:text-[#0056F9]"
            >
              Join the webinar for regulated enterprises
              <ArrowRight className="h-4 w-4 text-[#0056F9] transition-transform group-hover:translate-x-0.5" />
            </Link>
          </Container>
        </div>

        <main>
          <PremiumHeroSection />
          <PremiumLocalizationSection />
          <PremiumSolutionsSection />
          <PremiumProductsSection />
          <PremiumAuditLedgerEvidenceSection />
          <PremiumTrustFrameworkSection />
          <PremiumWhySection />
          <PremiumFaqSection />
        </main>

        <footer className="border-t border-white/8 bg-black/40">
          <Container className="py-16">
            <div className="grid grid-cols-2 gap-10 md:grid-cols-[1fr_repeat(4,auto)] md:gap-12">
              <div className="col-span-2 md:col-span-1">
                <div className="mb-5">
                  <Image
                    src="/assets/umailogo_white.png"
                    alt="UMAI"
                    width={120}
                    height={36}
                    className="h-8 w-auto"
                    style={{ width: "auto" }}
                  />
                </div>
                <p className="max-w-[260px] text-base leading-relaxed text-white/38">
                  Enterprise AI governance platform for runtime enforcement, browser
                  governance, and tamper-evident audit evidence.
                </p>
              </div>

              {[
                {
                  heading: "Product",
                  links: [
                    { label: "Platform", href: "/platform" },
                    { label: "Docs", href: "/docs" },
                    { label: "Blog", href: "/blog" },
                  ],
                },
                {
                  heading: "Use Cases",
                  links: [
                    { label: "Apps and Copilots", href: "#products" },
                    { label: "AI Agents", href: "#products" },
                    { label: "Browser AI", href: "#products" },
                    { label: "Compliance & Evidence", href: "#products" },
                    { label: "Any Environment", href: "#products" },
                  ],
                },
                {
                  heading: "Industries",
                  links: [
                    { label: "Public Sector", href: "#solutions" },
                    { label: "Financial Services", href: "#solutions" },
                    { label: "Healthcare", href: "#solutions" },
                    { label: "Insurance", href: "#solutions" },
                    { label: "Manufacturing", href: "#solutions" },
                  ],
                },
                {
                  heading: "Company",
                  links: [
                    { label: "About", href: "/about" },
                    { label: "Contact", href: CONTACT_URL },
                    { label: "Privacy", href: "/privacy" },
                    { label: "Cookie preferences", href: "/cookie-preferences" },
                    { label: "Terms", href: "/terms" },
                  ],
                },
              ].map((column) => (
                <div key={column.heading}>
                  <p className="mb-5 text-[11px] font-bold uppercase tracking-[0.18em] text-white/24">
                    {column.heading}
                  </p>
                  <ul className="space-y-3">
                    {column.links.map((link) => (
                      <li key={link.label}>
                        <Link
                          href={link.href}
                          className="text-base text-white/46 transition-colors hover:text-white"
                        >
                          {link.label}
                        </Link>
                      </li>
                    ))}
                  </ul>
                </div>
              ))}
            </div>

            <div className="mt-14 flex flex-col gap-3 border-t border-white/8 pt-6 text-sm text-white/24 md:flex-row md:items-center md:justify-between">
              <p>Copyright 2026 UMAI. Enterprise AI governance for governed deployment.</p>
              <div className="flex gap-6">
                <Link href="/privacy" className="transition-colors hover:text-white/50">
                  Privacy
                </Link>
                <Link
                  href="/cookie-preferences"
                  className="transition-colors hover:text-white/50"
                >
                  Cookie preferences
                </Link>
                <Link href="/terms" className="transition-colors hover:text-white/50">
                  Terms
                </Link>
                <Link href={CONTACT_URL} className="transition-colors hover:text-white/50">
                  Contact
                </Link>
              </div>
            </div>
          </Container>
        </footer>
      </div>
    </div>
  );
}
