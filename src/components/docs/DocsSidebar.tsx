import Link from "next/link";
import { DOC_SECTIONS } from "@/lib/docs-data";

export function DocsSidebar() {
  return (
    <aside className="sticky top-14 hidden h-[calc(100vh-3.5rem)] w-[240px] shrink-0 overflow-y-auto border-r border-white/8 bg-[#1a1a1a] lg:block">
      <nav className="px-3 py-6">
        {DOC_SECTIONS.map((section) => (
          <div key={section.id} className="mb-5">
            <p className="mb-1 px-3 text-[11px] font-bold uppercase tracking-[0.14em] text-white/40">
              {section.label}
            </p>
              <ul>
                {section.items.map((item) => {
                  return (
                    <li key={item.id}>
                      <Link
                        href={`/docs${item.anchor}`}
                        className="flex items-center justify-between rounded-md px-3 py-1.5 text-sm text-white/55 transition-colors hover:bg-white/[0.04] hover:text-white/80"
                      >
                        {item.label}
                      </Link>
                    </li>
                  );
                })}
            </ul>
          </div>
        ))}

        <div className="mt-6 border-t border-white/8 pt-5">
          <div className="rounded-md bg-[#0056F9]/10 px-3 py-3">
            <p className="text-[11px] font-semibold text-[#6aaeff]">Need rollout help?</p>
            <p className="mt-1 text-xs leading-relaxed text-white/45">
              Work with UMAI on deployment design, policy mapping, and rollout readiness.
            </p>
            <Link
              href="/contact"
              className="mt-2 inline-block text-xs font-semibold text-[#6aaeff] hover:underline"
            >
              Contact UMAI
            </Link>
          </div>
        </div>
      </nav>
    </aside>
  );
}
