import Image from "next/image";
import Link from "next/link";
import { ArrowRight } from "lucide-react";

export function CapabilityCenterNode({ active = false }: { active?: boolean }) {
  return (
    <Link
      href="/platform"
      aria-label="UMAI platform overview"
      className={`group relative isolate block w-full max-w-[13.5rem] overflow-hidden rounded-[1.45rem] border bg-[linear-gradient(180deg,rgba(10,10,12,0.98),rgba(5,5,7,1))] px-5 py-5.5 text-left transition-all duration-300 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-white/70 focus-visible:ring-offset-2 focus-visible:ring-offset-[#06070b] motion-reduce:transform-none ${
        active
          ? "border-white/16 shadow-[0_18px_56px_rgba(0,0,0,0.38)]"
          : "border-white/10 shadow-[0_16px_44px_rgba(0,0,0,0.3)] hover:-translate-y-1 hover:border-white/14 hover:shadow-[0_18px_56px_rgba(0,0,0,0.38)]"
      }`}
    >
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_top,rgba(255,255,255,0.035),transparent_44%)]" />
      <div className="absolute inset-x-0 top-0 h-px bg-gradient-to-r from-transparent via-white/16 to-transparent" />

      <div className="relative">
        <span className="inline-flex rounded-full border border-white/12 bg-white/[0.03] px-2.5 py-1 text-[10px] font-semibold uppercase tracking-[0.24em] text-white/64">
          Control core
        </span>
        <div className="mt-5">
          <Image
            src="/assets/umailogo_white.png"
            alt="UMAI"
            width={828}
            height={544}
            className="h-auto w-[6.7rem]"
            sizes="107px"
            priority={false}
            style={{ height: "auto" }}
          />
        </div>
        <p className="mt-4 max-w-[10rem] text-[0.9rem] leading-6 text-white/64">
          AI Governance &amp; Runtime Enforcement Platform
        </p>
        <div className="mt-5 inline-flex items-center gap-2 text-[0.92rem] font-semibold text-white/82">
          Explore platform
          <ArrowRight className="h-4 w-4 transition-transform duration-300 group-hover:translate-x-1" />
        </div>
      </div>
    </Link>
  );
}
