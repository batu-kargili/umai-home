import Link from "next/link";
import { AlignLeft } from "lucide-react";
import { DOC_SECTIONS } from "@/lib/docs-data";

const ALL_ITEMS = DOC_SECTIONS.flatMap((s) => s.items);

export function DocsOnThisPage() {
  return (
    <aside className="sticky top-14 hidden h-[calc(100vh-3.5rem)] w-[220px] shrink-0 overflow-y-auto border-l border-white/8 bg-[#1a1a1a] xl:block">
      <div className="px-5 py-6">
        <div className="mb-4 flex items-center gap-2 text-[11px] font-semibold uppercase tracking-[0.14em] text-white/40">
          <AlignLeft className="h-3.5 w-3.5" />
          On this page
        </div>
        <ul className="space-y-0.5">
          {ALL_ITEMS.map((item) => (
            <li key={item.id}>
              <Link
                href={`/docs${item.anchor}`}
                className="block border-l-2 border-transparent py-1 pl-3 text-[13px] text-white/45 transition-colors hover:border-white/20 hover:text-white/70"
              >
                {item.label}
              </Link>
            </li>
          ))}
        </ul>
      </div>
    </aside>
  );
}
