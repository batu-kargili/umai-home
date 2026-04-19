import { Search } from "lucide-react";
import { MarketingNavigation } from "@/components/layout/MarketingNavigation";

export function DocsHeader() {
  return (
    <header className="sticky top-0 z-50 border-b border-white/10 bg-[#111111]">
      <MarketingNavigation
        accent="blue"
        theme="dark"
        desktopUtilitySlot={
          <div className="hidden items-center gap-2 rounded-md border border-white/12 bg-white/[0.04] px-3 py-1.5 text-sm text-white/40 lg:flex">
            <Search className="h-3.5 w-3.5" />
            <span>Search docs</span>
            <kbd className="ml-4 rounded border border-white/10 px-1.5 py-0.5 text-[10px] text-white/30">
              Ctrl K
            </kbd>
          </div>
        }
      />
    </header>
  );
}
