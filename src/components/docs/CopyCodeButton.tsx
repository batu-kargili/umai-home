"use client";

import { useState } from "react";
import { Check, Copy } from "lucide-react";

interface CopyCodeButtonProps {
  code: string;
}

export function CopyCodeButton({ code }: CopyCodeButtonProps) {
  const [copied, setCopied] = useState(false);

  const copy = async () => {
    await navigator.clipboard.writeText(code);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  return (
    <button
      onClick={copy}
      className="rounded-full border border-white/10 bg-white/[0.03] p-1.5 text-white/40 transition-colors hover:text-white"
      aria-label="Copy code"
      type="button"
    >
      {copied ? (
        <Check className="h-3.5 w-3.5 text-meadow-teal" />
      ) : (
        <Copy className="h-3.5 w-3.5" />
      )}
    </button>
  );
}
