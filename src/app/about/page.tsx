import type { Metadata } from "next";
import Image from "next/image";
import { UserRound } from "lucide-react";

import { MarketingFooter } from "@/components/layout/MarketingFooter";
import { MarketingHeader } from "@/components/layout/MarketingHeader";
import { Container } from "@/components/ui/Container";
import { buildPageMetadata } from "@/lib/seo";

const TEAM_MEMBERS = [
  {
    name: "Nuri Çelikboy",
    role: "Co-Founder CEO",
    initials: "NÇ",
    area: "Leadership",
    accent: "from-[#0056F9] to-[#0e68bc]",
  },
  {
    name: "Özer Batu Kargılı",
    role: "Co-Founder CTO",
    initials: "ÖK",
    area: "Technology",
    accent: "from-[#0e68bc] to-[#153870]",
  },
  {
    name: "Süleyman Akkum",
    role: "Board Member",
    initials: "SA",
    area: "Board",
    accent: "from-[#153870] to-[#0056F9]",
  },
  {
    name: "Rauf Dilsiz",
    role: "Sales",
    initials: "RD",
    area: "Commercial",
    accent: "from-[#1b2b55] to-[#0079ff]",
  },
  {
    name: "Güneş Bucan",
    role: "Marketing",
    initials: "GB",
    area: "Growth",
    accent: "from-[#0056F9] to-[#38cced]",
  },
];

export const metadata: Metadata = buildPageMetadata({
  path: "/about",
  title: "About",
  description:
    "Learn about UMAI, the company focused on enterprise AI governance, practical deployment, and accountable AI operations.",
});

export default function AboutPage() {
  return (
    <div className="min-h-screen text-white umai-page-shell">
      <MarketingHeader accent="blue" />

      <main>
        <section className="relative overflow-hidden border-b border-white/10">
          <div className="absolute inset-0 bg-[radial-gradient(circle_at_50%_0%,rgba(0,86,249,0.18),transparent_32%),radial-gradient(circle_at_78%_18%,rgba(109,74,255,0.10),transparent_20%)]" />

          <Container className="relative py-20 text-center md:py-24 lg:py-28">
            <div className="mx-auto max-w-[56rem]">
              <p className="text-[11px] font-semibold uppercase tracking-[0.3em] text-landing-blue-light">
                About UMAI
              </p>
              <h1 className="mt-6 text-[3rem] font-semibold leading-[0.94] tracking-[-0.07em] text-white md:text-[4.3rem] lg:text-[5rem]">
                Building the company foundation for governed AI deployment.
              </h1>
              <p className="mx-auto mt-8 max-w-[44rem] text-[1.04rem] leading-8 text-white/64 md:text-[1.08rem]">
                UMAI is an enterprise AI governance company for organizations
                that need adoption to come with trust, accountability, and
                operational discipline from the start.
              </p>
            </div>
          </Container>
        </section>

        <section className="border-b border-white/10 py-16 md:py-20 lg:py-24">
          <Container>
            <div className="mx-auto max-w-[50rem] text-center">
              <h2 className="text-[2.2rem] font-semibold leading-[1.04] tracking-[-0.05em] text-white md:text-[3.15rem]">
                A company built where AI adoption meets accountability.
              </h2>
            </div>

            <div className="mx-auto mt-12 grid max-w-[1060px] gap-8 rounded-[2rem] umai-panel p-7 md:p-9 lg:grid-cols-[minmax(0,0.92fr)_minmax(360px,0.82fr)] lg:items-center lg:gap-10">
              <div className="max-w-[33rem]">
                <p className="text-[1rem] leading-8 text-white/64">
                  UMAI began from a clear view of where enterprise AI was
                  heading: once AI moved into production, governance would stop
                  being an abstract policy issue and become a company-wide
                  operating requirement.
                </p>
                <p className="mt-6 text-[1rem] leading-8 text-white/64">
                  The company is focused on helping regulated teams bring AI
                  into real workflows with stronger trust, clearer
                  accountability, and better cross-functional coordination.
                </p>
              </div>

              <div className="relative min-h-[320px] overflow-hidden rounded-[1.75rem] border border-white/10 bg-[linear-gradient(145deg,rgba(0,86,249,0.18)_0%,rgba(14,104,188,0.12)_46%,rgba(6,10,15,0.96)_100%)] p-7">
                <div className="absolute inset-0 bg-[radial-gradient(circle_at_78%_22%,rgba(255,255,255,0.10),transparent_18%),radial-gradient(circle_at_18%_16%,rgba(56,204,237,0.18),transparent_22%)]" />
                <div className="absolute inset-0 opacity-20 [background-image:linear-gradient(rgba(255,255,255,0.12)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,0.12)_1px,transparent_1px)] [background-size:28px_28px]" />

                <div className="relative flex h-full flex-col justify-between">
                  <Image
                    src="/assets/umailogo_white.png"
                    alt="UMAI"
                    width={190}
                    height={120}
                    className="h-auto w-[138px] md:w-[170px]"
                    style={{ height: "auto" }}
                  />

                  <div className="space-y-4">
                    <div className="grid gap-3">
                      {[
                        "Security, compliance, and risk aligned from day one",
                        "Governance introduced as an operating discipline",
                        "Built for regulated enterprise adoption",
                      ].map((item) => (
                        <div
                          key={item}
                          className="rounded-[1rem] border border-white/10 bg-black/25 px-4 py-3 text-sm leading-6 text-white/82 backdrop-blur-sm"
                        >
                          {item}
                        </div>
                      ))}
                    </div>

                    <div className="flex flex-wrap gap-2">
                      {["Trust", "Oversight", "Accountability"].map((item) => (
                        <span
                          key={item}
                          className="rounded-full border border-white/16 bg-white/[0.06] px-3 py-1.5 text-[10px] font-semibold uppercase tracking-[0.18em] text-white/82"
                        >
                          {item}
                        </span>
                      ))}
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </Container>
        </section>

        <section className="py-16 md:py-20 lg:py-24">
          <Container>
            <div className="mx-auto max-w-[50rem] text-center">
              <h2 className="text-[2.2rem] font-semibold leading-[1.04] tracking-[-0.05em] text-white md:text-[3.1rem]">
                Leadership &amp; Team
              </h2>
            </div>

            <div className="mx-auto mt-16 grid max-w-[1320px] gap-8 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-5">
              {TEAM_MEMBERS.map((member) => (
                <div
                  key={member.name}
                  className="rounded-[1.8rem] border border-white/10 bg-[linear-gradient(180deg,rgba(13,19,28,0.94)_0%,rgba(7,10,16,0.98)_100%)] p-7 text-center shadow-[0_18px_44px_rgba(0,0,0,0.24)]"
                >
                  <div className="mx-auto flex h-[118px] w-[118px] items-center justify-center rounded-full border-2 border-white/10 bg-white/[0.02] p-1">
                    <div
                      className={`flex h-full w-full items-center justify-center rounded-full bg-gradient-to-br ${member.accent} text-white`}
                    >
                      <div className="flex flex-col items-center gap-1">
                        <UserRound className="h-5 w-5 text-white/90" />
                        <span className="text-[1.1rem] font-semibold tracking-[0.08em]">
                          {member.initials}
                        </span>
                      </div>
                    </div>
                  </div>

                  <div className="mt-4 flex justify-center">
                    <span className="rounded-full border border-white/12 bg-white/[0.04] px-2.5 py-1 text-[10px] font-semibold uppercase tracking-[0.18em] text-white/62">
                      {member.area}
                    </span>
                  </div>

                  <h3 className="mt-5 text-[1.45rem] font-semibold tracking-[-0.04em] text-white">
                    {member.name}
                  </h3>
                  <p className="mx-auto mt-2 max-w-[15rem] text-sm leading-6 text-white/58">
                    {member.role}
                  </p>
                </div>
              ))}
            </div>
          </Container>
        </section>
      </main>

      <MarketingFooter />
    </div>
  );
}
