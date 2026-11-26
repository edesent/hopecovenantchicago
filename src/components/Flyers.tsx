"use client";

import Image from "next/image";
import { useEffect, useState } from "react";
import { createPortal } from "react-dom";
import type { Flyer } from "@/lib/site";

/**
 * His flyers in a row (a swipeable strip on phones). Tap one to see it full
 * size; tap again, or press Escape, to close.
 */
export default function Flyers({ items }: { items: Flyer[] }) {
  const [open, setOpen] = useState<Flyer | null>(null);

  useEffect(() => {
    if (!open) return;
    const onKey = (e: KeyboardEvent) => e.key === "Escape" && setOpen(null);
    document.addEventListener("keydown", onKey);
    document.body.style.overflow = "hidden";
    return () => {
      document.removeEventListener("keydown", onKey);
      document.body.style.overflow = "";
    };
  }, [open]);

  return (
    <>
      <ul className="-mx-5 flex snap-x snap-mandatory gap-5 overflow-x-auto px-5 pb-4 md:mx-0 md:grid md:grid-cols-3 md:gap-8 md:overflow-visible md:px-0">
        {items.map((f) => {
          const media = (
            <>
              <span className="block overflow-hidden rounded-sm border border-gold/60 bg-royal-ink shadow-[0_14px_30px_rgba(0,0,0,0.35)]">
                <Image
                  src={f.src}
                  alt={f.alt}
                  width={f.width}
                  height={f.height}
                  sizes="(min-width: 768px) 360px, 78vw"
                  className="aspect-[4/5] w-full object-contain transition-transform duration-500 group-hover:scale-[1.03]"
                />
              </span>
              <span className="seal-type block pt-4 text-[15px] leading-snug tracking-[0.06em] text-white">
                {f.title}
              </span>
              {f.note && <span className="time block pt-1 text-sm text-gold-light/85">{f.note}</span>}
            </>
          );
          return (
            <li key={f.id} className="w-[78%] shrink-0 snap-center sm:w-[46%] md:w-auto">
              {f.href ? (
                <a
                  href={f.href}
                  target="_blank"
                  rel="noreferrer"
                  className="group block w-full text-left"
                  aria-label={`${f.title} — opens ${f.href}`}
                >
                  {media}
                </a>
              ) : (
                <button
                  type="button"
                  onClick={() => setOpen(f)}
                  className="group block w-full text-left"
                  aria-label={`View full size: ${f.title}`}
                >
                  {media}
                </button>
              )}
            </li>
          );
        })}
      </ul>

      {open &&
        createPortal(
        <div
          role="dialog"
          aria-modal="true"
          aria-label={open.title}
          onClick={() => setOpen(null)}
          className="fixed inset-0 z-[60] flex items-center justify-center bg-black/85 p-4"
        >
          <Image
            src={open.src}
            alt={open.alt}
            width={open.width}
            height={open.height}
            sizes="(min-width: 768px) 80vh, 95vw"
            className="max-h-[90vh] w-auto max-w-full rounded-sm object-contain"
          />
          <button
            type="button"
            onClick={() => setOpen(null)}
            className="eyebrow absolute right-4 top-4 rounded-sm border border-gold/60 px-3 py-2 text-gold-light"
          >
            Close
          </button>
        </div>,
          document.body,
        )}
    </>
  );
}
