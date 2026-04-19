import type { Metadata } from "next";
import Link from "next/link";
import { ChevronRight, ShieldCheck } from "lucide-react";

import { CookieConsentProvider } from "@/components/cookies/CookieConsentProvider";
import { CookiePreferencesPanel } from "@/components/cookies/CookiePreferencesPanel";
import { MarketingFooter } from "@/components/layout/MarketingFooter";
import { MarketingHeader } from "@/components/layout/MarketingHeader";
import { Container } from "@/components/ui/Container";
import { COOKIE_CATEGORY_DETAILS, COOKIE_INVENTORY } from "@/lib/cookie-consent";
import { buildPageMetadata } from "@/lib/seo";

export const metadata: Metadata = buildPageMetadata({
  path: "/cookie-preferences",
  title: "Cookie Preferences",
  description:
    "Review UMAI website cookie categories, update your consent choices, and see the cookies used on this website.",
  robots: {
    index: false,
    follow: true,
  },
});

export default function CookiePreferencesPage() {
  return (
    <div className="min-h-screen bg-[#f5f7fb] text-slate-950">
      <MarketingHeader accent="blue" theme="dark" />

      <main>
        <section className="border-b border-slate-200 bg-[radial-gradient(circle_at_12%_12%,rgba(0,86,249,0.12),transparent_24%),radial-gradient(circle_at_82%_10%,rgba(14,104,188,0.12),transparent_22%),linear-gradient(180deg,#ffffff_0%,#f5f7fb_100%)]">
          <Container className="grid gap-10 py-16 lg:grid-cols-[minmax(0,1fr)_320px] lg:items-start lg:py-20">
            <div className="max-w-[52rem]">
              <p className="text-[11px] font-semibold uppercase tracking-[0.3em] text-[#0056f9]">
                Cookie preferences
              </p>
              <h1 className="mt-5 text-[3rem] font-semibold leading-[0.94] tracking-[-0.07em] text-slate-950 md:text-[4.2rem]">
                Choose which optional cookies UMAI may use.
              </h1>
              <p className="mt-6 max-w-[44rem] text-[1.04rem] leading-8 text-slate-600">
                Strictly necessary cookies stay enabled because the site needs
                them to remember your consent decision. All other categories are
                optional and remain disabled until you opt in.
              </p>

              <div className="mt-8 flex flex-wrap gap-3">
                <Link
                  href="/privacy"
                  className="inline-flex items-center gap-2 rounded-full bg-[#0056f9] px-6 py-3 text-sm font-semibold text-white transition-colors hover:bg-[#0044c7]"
                >
                  Read privacy statement
                  <ChevronRight className="h-4 w-4" />
                </Link>
                <Link
                  href="/"
                  className="inline-flex items-center gap-2 rounded-full border border-slate-300 bg-white px-6 py-3 text-sm font-semibold text-slate-700 transition-colors hover:border-slate-400 hover:bg-slate-50"
                >
                  Return to homepage
                </Link>
              </div>
            </div>

            <aside className="rounded-[2rem] border border-slate-200 bg-white/90 p-7 shadow-[0_18px_50px_rgba(15,23,42,0.06)]">
              <div className="flex items-center gap-2 text-slate-950">
                <ShieldCheck className="h-4 w-4 text-[#0056f9]" />
                <p className="text-sm font-semibold">What changes here</p>
              </div>
              <ul className="mt-5 space-y-4 text-sm leading-7 text-slate-600">
                <li>Necessary cookies remain enabled for core site operation.</li>
                <li>Your choice is stored on this device for 180 days.</li>
                <li>You can revisit this page at any time from the site footer.</li>
              </ul>
            </aside>
          </Container>
        </section>

        <section className="py-12 md:py-16">
          <Container className="grid gap-8 lg:grid-cols-[minmax(0,1fr)_320px]">
            <div>
              <CookieConsentProvider>
                <CookiePreferencesPanel />
              </CookieConsentProvider>
            </div>

            <aside className="space-y-5 lg:sticky lg:top-24 lg:self-start">
              <div className="rounded-[1.8rem] border border-slate-200 bg-white p-6 shadow-[0_14px_40px_rgba(15,23,42,0.05)]">
                <p className="text-sm font-semibold text-slate-950">Category guide</p>
                <div className="mt-4 space-y-4">
                  {COOKIE_CATEGORY_DETAILS.map((category) => (
                    <div key={category.key}>
                      <p className="text-sm font-semibold text-slate-900">
                        {category.shortLabel}
                      </p>
                      <p className="mt-1 text-sm leading-6 text-slate-600">
                        {category.required ? "Always on." : "Optional."}{" "}
                        {category.description}
                      </p>
                    </div>
                  ))}
                </div>
              </div>

              <div className="rounded-[1.8rem] border border-[#bfd6ff] bg-[#eef5ff] p-6">
                <p className="text-sm font-semibold text-slate-950">
                  Current optional tools
                </p>
                <p className="mt-3 text-sm leading-6 text-slate-700">
                  UMAI currently sets only the consent cookie listed below. If
                  optional analytics, preference, or marketing tools are enabled
                  later, this page will be updated before those cookies are used.
                </p>
              </div>
            </aside>
          </Container>
        </section>

        <section className="border-t border-slate-200 bg-white py-12 md:py-16">
          <Container className="grid gap-10 lg:grid-cols-[minmax(0,1fr)_320px]">
            <div className="rounded-[2rem] border border-slate-200 p-8 shadow-[0_18px_50px_rgba(15,23,42,0.06)]">
              <p className="text-[11px] font-semibold uppercase tracking-[0.28em] text-[#0056f9]">
                Cookie inventory
              </p>
              <h2 className="mt-4 text-[2rem] font-semibold tracking-[-0.05em] text-slate-950">
                Cookies used on this website
              </h2>
              <div className="mt-8 overflow-x-auto">
                <table className="min-w-full border-separate border-spacing-0 overflow-hidden rounded-[1.4rem] border border-slate-200">
                  <thead className="bg-slate-50">
                    <tr className="text-left text-[11px] font-semibold uppercase tracking-[0.2em] text-slate-500">
                      <th className="px-4 py-4">Cookie</th>
                      <th className="px-4 py-4">Provider</th>
                      <th className="px-4 py-4">Category</th>
                      <th className="px-4 py-4">Duration</th>
                      <th className="px-4 py-4">Purpose</th>
                    </tr>
                  </thead>
                  <tbody>
                    {COOKIE_INVENTORY.map((item) => (
                      <tr key={item.name} className="border-t border-slate-200 align-top">
                        <td className="px-4 py-4 text-sm font-semibold text-slate-950">
                          {item.name}
                        </td>
                        <td className="px-4 py-4 text-sm text-slate-600">{item.provider}</td>
                        <td className="px-4 py-4 text-sm text-slate-600 capitalize">
                          {item.category}
                        </td>
                        <td className="px-4 py-4 text-sm text-slate-600">{item.duration}</td>
                        <td className="px-4 py-4 text-sm leading-6 text-slate-600">
                          {item.purpose}
                        </td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
            </div>

            <aside className="rounded-[2rem] border border-slate-200 bg-slate-50 p-6">
              <p className="text-sm font-semibold text-slate-950">Need more detail?</p>
              <p className="mt-3 text-sm leading-6 text-slate-600">
                The privacy statement explains how website form submissions,
                event registrations, enterprise sales inquiries, and optional
                cookie categories fit into UMAI&apos;s broader data handling
                practices.
              </p>
              <Link
                href="/privacy#cookies-and-tracking"
                className="mt-5 inline-flex items-center gap-2 text-sm font-semibold text-[#0056f9]"
              >
                Jump to cookies in the privacy statement
                <ChevronRight className="h-4 w-4" />
              </Link>
            </aside>
          </Container>
        </section>
      </main>

      <MarketingFooter />
    </div>
  );
}
