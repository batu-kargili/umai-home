import { CopyCodeButton } from "@/components/docs/CopyCodeButton";

interface CodeBlockProps {
  code: string;
  language?: string;
  filename?: string;
}

export function CodeBlock({
  code,
  language = "typescript",
  filename,
}: CodeBlockProps) {
  return (
    <div className="relative my-6 overflow-hidden rounded-[1.4rem] border border-white/10 bg-[#07090d] shadow-[0_20px_60px_rgba(0,0,0,0.32)]">
      <div className="absolute inset-x-0 top-0 h-px bg-gradient-to-r from-transparent via-landing-blue-light/60 to-transparent" />
      <div className="flex items-center justify-between border-b border-white/6 bg-white/[0.03] px-4 py-3">
        <div className="flex items-center gap-2">
          <span className="h-3 w-3 rounded-full bg-[#ff5f57]" />
          <span className="h-3 w-3 rounded-full bg-[#febc2e]" />
          <span className="h-3 w-3 rounded-full bg-[#28c840]" />
          {filename && (
            <span className="ml-3 font-mono text-[11px] text-white/40">
              {filename}
            </span>
          )}
        </div>
        <div className="flex items-center gap-2">
          {language && (
            <span className="text-[10px] uppercase tracking-[0.24em] text-white/30">
              {language}
            </span>
          )}
          <CopyCodeButton code={code} />
        </div>
      </div>

      <pre className="overflow-x-auto px-5 py-5 font-mono text-[13px] leading-7 text-[#edf2f9]">
        <code>{code}</code>
      </pre>
    </div>
  );
}
