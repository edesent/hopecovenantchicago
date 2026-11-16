"use client";

import { useEffect, useState } from "react";

/**
 * A giving handle (PayPal email, Zelle number) put together in the browser so it
 * never sits in the HTML for scrapers, with a Copy button.
 */
export default function CopyValue({ b64, fallback = "Shown when the page loads" }: { b64: string; fallback?: string }) {
  const [value, setValue] = useState<string | null>(null);
  const [copied, setCopied] = useState(false);

  useEffect(() => setValue(atob(b64)), [b64]);

  if (!value) return <span className="text-ink/50">{fallback}</span>;

  return (
    <span className="inline-flex flex-wrap items-center gap-3">
      <span className="time break-all text-lg font-semibold text-royal-deep">{value}</span>
      <button
        type="button"
        onClick={async () => {
          try {
            await navigator.clipboard.writeText(value);
            setCopied(true);
            setTimeout(() => setCopied(false), 1800);
          } catch {
            /* clipboard blocked: the value is on screen to copy by hand */
          }
        }}
        className="eyebrow rounded-sm border border-gold/70 px-3 py-1.5 text-gold-deep hover:bg-gold/10"
      >
        {copied ? "Copied" : "Copy"}
      </button>
    </span>
  );
}
