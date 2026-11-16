"use client";

import { useState } from "react";
import type { Video } from "@/lib/videos";

/**
 * A YouTube teaching as a thumbnail; the player only loads when someone taps it,
 * so the page stays fast and nothing from YouTube runs until then.
 */
export default function VideoCard({ v }: { v: Video }) {
  const [playing, setPlaying] = useState(false);
  return (
    <figure className="group">
      <div className="relative aspect-video overflow-hidden rounded-sm border border-gold/50 bg-royal-ink">
        {playing ? (
          <iframe
            src={`https://www.youtube-nocookie.com/embed/${v.id}?autoplay=1&rel=0`}
            title={v.title}
            allow="autoplay; encrypted-media; picture-in-picture; fullscreen"
            allowFullScreen
            className="absolute inset-0 h-full w-full"
          />
        ) : (
          <button
            type="button"
            onClick={() => setPlaying(true)}
            className="absolute inset-0 h-full w-full"
            aria-label={`Play: ${v.title}`}
          >
            {/* eslint-disable-next-line @next/next/no-img-element */}
            <img
              src={`https://i.ytimg.com/vi/${v.id}/hqdefault.jpg`}
              alt=""
              loading="lazy"
              className="h-full w-full object-cover transition-transform duration-500 group-hover:scale-[1.03]"
            />
            <span className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent" aria-hidden="true" />
            <span
              className="absolute left-1/2 top-1/2 flex h-14 w-14 -translate-x-1/2 -translate-y-1/2 items-center justify-center rounded-full bg-[linear-gradient(180deg,#f3d882,#d9a52a_55%,#b8861b)] shadow-[0_6px_18px_rgba(0,0,0,0.4)]"
              aria-hidden="true"
            >
              <svg viewBox="0 0 24 24" className="ml-1 h-6 w-6 fill-[#3a0a06]">
                <path d="M7 4.5v15l13-7.5z" />
              </svg>
            </span>
          </button>
        )}
      </div>
      <figcaption className="pt-3">
        <p className="seal-type text-[15px] leading-snug tracking-[0.04em] text-royal-deep">{v.title}</p>
        {v.sub && <p className="display pt-1 text-sm font-normal italic text-ink/65">{v.sub}</p>}
      </figcaption>
    </figure>
  );
}
