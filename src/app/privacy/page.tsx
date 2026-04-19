import type { Metadata } from "next";
import Link from "next/link";
import {
  ChevronRight,
  Cookie,
  Database,
  Globe2,
  Mail,
  Scale,
  ShieldCheck,
} from "lucide-react";

import { MarketingFooter } from "@/components/layout/MarketingFooter";
import { MarketingHeader } from "@/components/layout/MarketingHeader";
import { Container } from "@/components/ui/Container";
import { buildPageMetadata } from "@/lib/seo";

export const metadata: Metadata = buildPageMetadata({
  path: "/privacy",
  title: "Privacy",
  description:
    "Read the UMAI website privacy statement covering contact requests, website usage data, cookies, retention, and individual rights.",
});

const SECTION_LINKS = [
  { id: "introduction", label: "Introduction" },
  { id: "information-we-collect", label: "Information we collect" },
  { id: "how-we-use-information", label: "How we use information" },
  { id: "cookies-and-tracking", label: "Cookies and tracking" },
  { id: "sharing-and-processors", label: "Sharing and processors" },
  { id: "retention-and-security", label: "Retention and security" },
  { id: "international-transfers", label: "International transfers" },
  { id: "rights-and-choices", label: "Rights and choices" },
  { id: "contact-us", label: "Contact us" },
];

export default function PrivacyPage() {
  return (
    <div className="min-h-screen bg-[#f5f7fb] text-slate-950">
      <MarketingHeader accent="blue" theme="dark" />

      <main>
        <section className="border-b border-slate-200 bg-[radial-gradient(circle_at_12%_10%,rgba(0,86,249,0.12),transparent_24%),radial-gradient(circle_at_84%_14%,rgba(14,104,188,0.10),transparent_20%),linear-gradient(180deg,#ffffff_0%,#f5f7fb_100%)]">
          <Container className="grid gap-10 py-16 lg:grid-cols-[minmax(0,1fr)_320px] lg:items-start lg:py-20">
            <div className="max-w-[56rem]">
              <p className="text-[11px] font-semibold uppercase tracking-[0.3em] text-[#0056f9]">
                Privacy statement
              </p>
              <h1 className="mt-5 text-[3rem] font-semibold leading-[0.94] tracking-[-0.07em] text-slate-950 md:text-[4.2rem] lg:text-[4.7rem]">
                Privacy information for UMAI website visitors and enterprise buyers.
              </h1>
              <p className="mt-6 max-w-[46rem] text-[1.04rem] leading-8 text-slate-600">
                We collect and use information needed to operate this website,
                respond to enterprise inquiries, run events and evaluations, and
                protect the platform and the people who use it. This statement
                applies to the public UMAI website and related marketing pages.
              </p>

              <div className="mt-8 flex flex-wrap gap-3">
                <div className="rounded-full border border-slate-200 bg-white px-4 py-2 text-sm font-medium text-slate-700">
                  Effective 18 April 2026
                </div>
                <div className="rounded-full border border-slate-200 bg-white px-4 py-2 text-sm font-medium text-slate-700">
                  Website scope only
                </div>
                <div className="rounded-full border border-slate-200 bg-white px-4 py-2 text-sm font-medium text-slate-700">
                  Enterprise-first sales model
                </div>
              </div>

              <div className="mt-8 flex flex-wrap gap-3">
                <Link
                  href="/cookie-preferences"
                  className="inline-flex items-center gap-2 rounded-full bg-[#0056f9] px-6 py-3 text-sm font-semibold text-white transition-colors hover:bg-[#0044c7]"
                >
                  Cookie preferences
                  <ChevronRight className="h-4 w-4" />
                </Link>
                <Link
                  href="mailto:contact@umai.ai"
                  className="inline-flex items-center gap-2 rounded-full border border-slate-300 bg-white px-6 py-3 text-sm font-semibold text-slate-700 transition-colors hover:border-slate-400 hover:bg-slate-50"
                >
                  Contact privacy team
                </Link>
              </div>
            </div>

            <aside className="rounded-[2rem] border border-slate-200 bg-white/90 p-7 shadow-[0_18px_50px_rgba(15,23,42,0.06)]">
              <p className="text-sm font-semibold text-slate-950">On this page</p>
              <nav className="mt-5 space-y-3">
                {SECTION_LINKS.map((section) => (
                  <Link
                    key={section.id}
                    href={`#${section.id}`}
                    className="block text-sm text-slate-600 transition-colors hover:text-[#0056f9]"
                  >
                    {section.label}
                  </Link>
                ))}
              </nav>

              <div className="mt-7 rounded-[1.5rem] border border-[#bfd6ff] bg-[#eef5ff] p-5">
                <p className="text-sm font-semibold text-slate-950">
                  Policy update
                </p>
                <p className="mt-3 text-sm leading-6 text-slate-700">
                  This version aligns the privacy statement with the live cookie
                  preference controls now available across the website.
                </p>
              </div>
            </aside>
          </Container>
        </section>

        <section className="py-12 md:py-16">
          <Container className="grid gap-8 lg:grid-cols-[minmax(0,1fr)_320px]">
            <div className="space-y-8">
              <section
                id="introduction"
                className="scroll-mt-28 rounded-[2rem] border border-slate-200 bg-white p-8 shadow-[0_18px_50px_rgba(15,23,42,0.06)]"
              >
                <div className="flex items-center gap-3 text-slate-950">
                  <ShieldCheck className="h-5 w-5 text-[#0056f9]" />
                  <h2 className="text-[1.8rem] font-semibold tracking-[-0.04em]">
                    Introduction
                  </h2>
                </div>
                <div className="mt-5 space-y-5 text-[1rem] leading-8 text-slate-600">
                  <p>
                    UMAI provides enterprise AI governance technology. This
                    public privacy statement explains how we handle information
                    collected through our marketing website, contact forms,
                    event registration flows, and related outreach activities.
                  </p>
                  <p>
                    It does not replace customer-specific contractual terms,
                    product privacy notices, or deployment documentation. When
                    an enterprise customer uses UMAI in its own environment, the
                    customer remains responsible for its end-user disclosures and
                    operational data handling unless our agreement says
                    otherwise.
                  </p>
                </div>
              </section>

              <section
                id="information-we-collect"
                className="scroll-mt-28 rounded-[2rem] border border-slate-200 bg-white p-8 shadow-[0_18px_50px_rgba(15,23,42,0.06)]"
              >
                <div className="flex items-center gap-3 text-slate-950">
                  <Database className="h-5 w-5 text-[#0056f9]" />
                  <h2 className="text-[1.8rem] font-semibold tracking-[-0.04em]">
                    Information we collect
                  </h2>
                </div>
                <div className="mt-6 grid gap-4 md:grid-cols-2">
                  {[
                    {
                      title: "Information you provide",
                      copy:
                        "Business contact details, company name, job title, meeting requests, procurement details, event registrations, and any message content you send through forms or email.",
                    },
                    {
                      title: "Website usage data",
                      copy:
                        "Technical information such as IP-derived region, browser type, device characteristics, referral source, pages viewed, and timestamps generated when you access the website.",
                    },
                    {
                      title: "Communications data",
                      copy:
                        "Records of conversations with our team, webinar attendance, scheduling details, and follow-up notes tied to enterprise sales or partnership discussions.",
                    },
                    {
                      title: "Security and diagnostics",
                      copy:
                        "Logs and signals used to detect abuse, maintain reliability, investigate incidents, and protect the website and related infrastructure.",
                    },
                  ].map((item) => (
                    <div
                      key={item.title}
                      className="rounded-[1.5rem] border border-slate-200 bg-slate-50 p-5"
                    >
                      <h3 className="text-[1.08rem] font-semibold text-slate-950">
                        {item.title}
                      </h3>
                      <p className="mt-3 text-sm leading-7 text-slate-600">
                        {item.copy}
                      </p>
                    </div>
                  ))}
                </div>
              </section>

              <section
                id="how-we-use-information"
                className="scroll-mt-28 rounded-[2rem] border border-slate-200 bg-white p-8 shadow-[0_18px_50px_rgba(15,23,42,0.06)]"
              >
                <div className="flex items-center gap-3 text-slate-950">
                  <Scale className="h-5 w-5 text-[#0056f9]" />
                  <h2 className="text-[1.8rem] font-semibold tracking-[-0.04em]">
                    How we use information
                  </h2>
                </div>
                <ul className="mt-6 space-y-4 text-[1rem] leading-8 text-slate-600">
                  <li>
                    Operate, secure, and improve the website and related
                    services.
                  </li>
                  <li>
                    Respond to product, pricing, pilot, partnership, or support
                    inquiries.
                  </li>
                  <li>
                    Manage webinars, event registrations, and enterprise follow-up.
                  </li>
                  <li>
                    Measure site performance and marketing effectiveness, but
                    only for optional cookies after consent is given.
                  </li>
                  <li>
                    Comply with legal obligations, enforce our terms, and protect
                    UMAI, our users, and our business partners.
                  </li>
                </ul>
              </section>

              <section
                id="cookies-and-tracking"
                className="scroll-mt-28 rounded-[2rem] border border-slate-200 bg-white p-8 shadow-[0_18px_50px_rgba(15,23,42,0.06)]"
              >
                <div className="flex items-center gap-3 text-slate-950">
                  <Cookie className="h-5 w-5 text-[#0056f9]" />
                  <h2 className="text-[1.8rem] font-semibold tracking-[-0.04em]">
                    Cookies and tracking
                  </h2>
                </div>
                <div className="mt-5 space-y-5 text-[1rem] leading-8 text-slate-600">
                  <p>
                    UMAI uses a consent banner and preference center to separate
                    strictly necessary cookies from optional analytics,
                    preference, and marketing categories. Necessary cookies are
                    used to remember your consent selection and keep the website
                    functioning.
                  </p>
                  <p>
                    Non-essential cookies remain disabled unless you opt in. You
                    can review or change your choices at any time on the{" "}
                    <Link
                      href="/cookie-preferences"
                      className="font-semibold text-[#0056f9] underline underline-offset-4"
                    >
                      cookie preferences page
                    </Link>
                    .
                  </p>
                </div>
              </section>

              <section
                id="sharing-and-processors"
                className="scroll-mt-28 rounded-[2rem] border border-slate-200 bg-white p-8 shadow-[0_18px_50px_rgba(15,23,42,0.06)]"
              >
                <div className="flex items-center gap-3 text-slate-950">
                  <ShieldCheck className="h-5 w-5 text-[#0056f9]" />
                  <h2 className="text-[1.8rem] font-semibold tracking-[-0.04em]">
                    Sharing and processors
                  </h2>
                </div>
                <div className="mt-5 space-y-5 text-[1rem] leading-8 text-slate-600">
                  <p>
                    We may share website-related information with service
                    providers that help us host the site, process inquiries,
                    schedule meetings, deliver events, secure infrastructure, or
                    support business operations. Those providers are expected to
                    process information only for authorized purposes.
                  </p>
                  <p>
                    We may also disclose information when required by law, to
                    protect rights and safety, in connection with corporate
                    transactions, or with professional advisers such as legal
                    counsel and auditors.
                  </p>
                </div>
              </section>

              <section
                id="retention-and-security"
                className="scroll-mt-28 rounded-[2rem] border border-slate-200 bg-white p-8 shadow-[0_18px_50px_rgba(15,23,42,0.06)]"
              >
                <div className="flex items-center gap-3 text-slate-950">
                  <ShieldCheck className="h-5 w-5 text-[#0056f9]" />
                  <h2 className="text-[1.8rem] font-semibold tracking-[-0.04em]">
                    Retention and security
                  </h2>
                </div>
                <div className="mt-5 space-y-5 text-[1rem] leading-8 text-slate-600">
                  <p>
                    We keep personal information only as long as needed for the
                    purposes described above, including to respond to requests,
                    maintain records of enterprise discussions, prevent abuse, and
                    meet legal, contractual, and accounting obligations.
                  </p>
                  <p>
                    We use administrative, technical, and organizational
                    safeguards designed to protect the information we hold.
                    However, no website or transmission method is completely
                    risk-free, so we encourage users not to send unnecessary
                    sensitive data through website forms.
                  </p>
                </div>
              </section>

              <section
                id="international-transfers"
                className="scroll-mt-28 rounded-[2rem] border border-slate-200 bg-white p-8 shadow-[0_18px_50px_rgba(15,23,42,0.06)]"
              >
                <div className="flex items-center gap-3 text-slate-950">
                  <Globe2 className="h-5 w-5 text-[#0056f9]" />
                  <h2 className="text-[1.8rem] font-semibold tracking-[-0.04em]">
                    International transfers
                  </h2>
                </div>
                <div className="mt-5 space-y-5 text-[1rem] leading-8 text-slate-600">
                  <p>
                    UMAI works with global infrastructure and enterprise
                    customers. Information collected through the website may be
                    processed in countries other than the one where you are
                    located.
                  </p>
                  <p>
                    Where applicable, we use contractual, technical, or
                    organizational safeguards designed to support lawful
                    cross-border transfers, and we evaluate transfer risks as part of
                    our broader security and compliance process.
                  </p>
                </div>
              </section>

              <section
                id="rights-and-choices"
                className="scroll-mt-28 rounded-[2rem] border border-slate-200 bg-white p-8 shadow-[0_18px_50px_rgba(15,23,42,0.06)]"
              >
                <div className="flex items-center gap-3 text-slate-950">
                  <Scale className="h-5 w-5 text-[#0056f9]" />
                  <h2 className="text-[1.8rem] font-semibold tracking-[-0.04em]">
                    Rights and choices
                  </h2>
                </div>
                <div className="mt-5 space-y-5 text-[1rem] leading-8 text-slate-600">
                  <p>
                    Depending on applicable law, you may have rights to request
                    access to, correction of, deletion of, restriction of, or
                    objection to certain processing of your personal data. You may
                    also have the right to data portability, to withdraw consent
                    where consent is the basis for processing, or to lodge a
                    complaint with a supervisory authority.
                  </p>
                  <p>
                    Cookie choices can be updated at any time through the{" "}
                    <Link
                      href="/cookie-preferences"
                      className="font-semibold text-[#0056f9] underline underline-offset-4"
                    >
                      cookie preferences page
                    </Link>
                    . For other privacy requests, contact us using the details
                    below.
                  </p>
                </div>
              </section>

              <section
                id="contact-us"
                className="scroll-mt-28 rounded-[2rem] border border-slate-200 bg-white p-8 shadow-[0_18px_50px_rgba(15,23,42,0.06)]"
              >
                <div className="flex items-center gap-3 text-slate-950">
                  <Mail className="h-5 w-5 text-[#0056f9]" />
                  <h2 className="text-[1.8rem] font-semibold tracking-[-0.04em]">
                    Contact us
                  </h2>
                </div>
                <div className="mt-5 space-y-5 text-[1rem] leading-8 text-slate-600">
                  <p>
                    For privacy questions, data rights requests, or website data
                    handling concerns, contact{" "}
                    <Link
                      href="mailto:contact@umai.ai"
                      className="font-semibold text-[#0056f9] underline underline-offset-4"
                    >
                      contact@umai.ai
                    </Link>
                    .
                  </p>
                  <p>
                    If your request relates to a customer deployment, include the
                    organization name, deployment context, and any relevant
                    timeframe so we can route the request correctly.
                  </p>
                </div>
              </section>
            </div>

            <aside className="space-y-5 lg:sticky lg:top-24 lg:self-start">
              <div className="rounded-[1.8rem] border border-slate-200 bg-white p-6 shadow-[0_14px_40px_rgba(15,23,42,0.05)]">
                <p className="text-sm font-semibold text-slate-950">Scope at a glance</p>
                <div className="mt-4 space-y-4 text-sm leading-6 text-slate-600">
                  <p>This statement covers the public website and inbound marketing activity.</p>
                  <p>Product deployments are handled under customer agreements and environment-specific documents.</p>
                  <p>Cookie settings are controlled separately through the sitewide preference center.</p>
                </div>
              </div>

              <div className="rounded-[1.8rem] border border-[#bfd6ff] bg-[#eef5ff] p-6">
                <p className="text-sm font-semibold text-slate-950">
                  Looking for cookie controls?
                </p>
                <p className="mt-3 text-sm leading-6 text-slate-700">
                  You can update optional cookie categories without waiting for
                  the banner to reappear.
                </p>
                <Link
                  href="/cookie-preferences"
                  className="mt-5 inline-flex items-center gap-2 text-sm font-semibold text-[#0056f9]"
                >
                  Open cookie preferences
                  <ChevronRight className="h-4 w-4" />
                </Link>
              </div>
            </aside>
          </Container>
        </section>
      </main>

      <MarketingFooter />
    </div>
  );
}
