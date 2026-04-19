import Link from "next/link";
import {
  ArrowRight,
  Database,
  FileCheck2,
  ShieldCheck,
} from "lucide-react";
import {
  AUDIT_LEDGER_EVIDENCE_FLOW,
  AUDIT_LEDGER_EVIDENCE_ITEMS,
} from "@/components/home/premium-landing-content";
import { Container } from "@/components/ui/Container";

const CARD_ICONS = {
  audit: ShieldCheck,
  ledger: Database,
  evidence: FileCheck2,
};

export function PremiumAuditLedgerEvidenceSection() {
  return (
    <section id="audit-ledger-evidence" className="relative overflow-hidden py-20 md:py-24">
      <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(circle_at_18%_20%,rgba(0,86,249,0.18),transparent_24%),radial-gradient(circle_at_82%_18%,rgba(109,74,255,0.14),transparent_22%),linear-gradient(180deg,#050913_0%,#02050b_100%)]" />

      <Container className="relative">
        <div className="overflow-hidden rounded-[34px] border border-white/8 bg-[linear-gradient(180deg,rgba(17,26,39,0.90)_0%,rgba(8,12,18,0.96)_100%)] shadow-[0_24px_72px_rgba(0,0,0,0.34)]">
          <div className="grid gap-10 p-7 md:p-10 lg:grid-cols-[0.88fr_1.12fr] lg:items-center">
            <div className="max-w-[460px]">
              <p className="inline-flex items-center gap-2 text-[11px] font-semibold uppercase tracking-[0.22em] text-[#bfd3ff]">
                <span className="rounded-full bg-white/8 px-2.5 py-1 text-[10px] text-[#8FB3FF]">
                  Brief
                </span>
                Audit ledger evidence
              </p>
              <h2 className="mt-5 text-[32px] font-black leading-[1.06] tracking-[-0.03em] text-white md:text-[42px]">
                Audit, ledger, evidence in one clean chain.
              </h2>
              <p className="mt-4 max-w-[420px] text-base leading-relaxed text-white/60">
                UMAI turns governed AI activity into a hash-linked trail that
                moves cleanly from runtime decision to exportable proof.
              </p>
              <Link
                href="/platform"
                className="mt-7 inline-flex items-center gap-2 text-sm font-semibold text-[#8FB3FF] transition-colors hover:text-white"
              >
                Explore compliance controls <ArrowRight className="h-4 w-4" />
              </Link>
            </div>

            <div className="grid gap-4 md:grid-cols-3">
              {AUDIT_LEDGER_EVIDENCE_ITEMS.map((item) => {
                const Icon = CARD_ICONS[item.id as keyof typeof CARD_ICONS] ?? ShieldCheck;

                return (
                  <article
                    key={item.id}
                    className="rounded-[26px] border border-white/8 bg-white/[0.04] p-5 backdrop-blur-sm transition-colors hover:border-white/14 hover:bg-white/[0.06]"
                  >
                    <div className="flex h-11 w-11 items-center justify-center rounded-2xl border border-white/10 bg-white/[0.04] text-[#8FB3FF]">
                      <Icon className="h-5 w-5" />
                    </div>
                    <p className="mt-5 text-[10px] font-semibold uppercase tracking-[0.18em] text-white/38">
                      {item.label}
                    </p>
                    <h3 className="mt-2 text-[18px] font-semibold leading-snug text-white">
                      {item.title}
                    </h3>
                    <p className="mt-3 text-sm leading-relaxed text-white/58">
                      {item.body}
                    </p>
                  </article>
                );
              })}
            </div>
          </div>

          <div className="border-t border-white/8 bg-black/20 px-7 py-4 md:px-10">
            <div className="flex flex-wrap items-center gap-3">
              {AUDIT_LEDGER_EVIDENCE_FLOW.map((item) => (
                <span
                  key={item}
                  className="rounded-full border border-white/10 bg-white/[0.03] px-3.5 py-2 text-[10px] font-semibold uppercase tracking-[0.18em] text-white/64"
                >
                  {item}
                </span>
              ))}
            </div>
          </div>
        </div>
      </Container>
    </section>
  );
}
