import type { Metadata } from "next";
import Link from "next/link";

import { SiteLogo } from "@/components/layout/SiteLogo";
import { Container } from "@/components/ui/Container";
import { buildPageMetadata } from "@/lib/seo";

export const metadata: Metadata = buildPageMetadata({
  path: "/terms",
  title: "Terms",
  description: "Terms and engagement information for UMAI website visitors and enterprise buyers.",
});

export default function TermsPage() {
  return (
    <div className="min-h-screen bg-[#040404] text-white">
      <header className="border-b border-white/10 bg-black/80">
        <Container className="flex h-20 items-center justify-between">
          <SiteLogo />
          <Link href="/" className="text-sm font-medium text-white/66 transition-colors hover:text-white">
            Back to home
          </Link>
        </Container>
      </header>

      <main className="py-16 md:py-20">
        <Container className="max-w-4xl">
          <p className="text-[11px] font-semibold uppercase tracking-[0.32em] text-white/42">
            Terms
          </p>
          <h1 className="mt-5 text-[2.6rem] font-semibold tracking-[-0.05em] text-white md:text-[3.4rem]">
            Terms and evaluation notice
          </h1>
          <div className="mt-8 space-y-8 text-[1rem] leading-8 text-white/64">
            <p>
              UMAI sells to enterprises through direct evaluation, pilot, and procurement processes. Commercial terms, security commitments, and deployment responsibilities are shared during that process based on the selected deployment model.
            </p>
            <p>
              For pilot, procurement, or legal review requests, contact{" "}
              <Link href="mailto:contact@umaisolutions.com" className="text-white underline underline-offset-4">
                contact@umaisolutions.com
              </Link>
              . We can provide the current terms package alongside security, compliance, and deployment documentation.
            </p>
            <p>
              This page is a temporary public placeholder until the full website terms are published. It is intentionally minimal and avoids implying unsupported self-serve commercial terms.
            </p>
          </div>
        </Container>
      </main>
    </div>
  );
}
