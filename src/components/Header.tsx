"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { useEffect, useState } from "react";
import { church, nav } from "@/lib/site";
import GreatSeal from "./GreatSeal";

export default function Header() {
  const [open, setOpen] = useState(false);
  const pathname = usePathname();

  useEffect(() => setOpen(false), [pathname]);

  return (
    <>
      <header className="sticky top-0 z-40 border-b border-gold/25 bg-royal-ink/95 backdrop-blur">
        <div className="mx-auto flex max-w-6xl items-center gap-3 px-5 py-3">
          <Link href="/" className="flex items-center gap-3">
            <GreatSeal decorative priority sizes="40px" className="h-11 w-auto shrink-0" />
            <span className="leading-none">
              <span className="display block text-[15px] text-white sm:text-[17px]">HOPE Covenant</span>
              <span className="block pt-1 text-sm font-semibold tracking-wide text-gold-light/85 sm:text-base">Kingdom Fellowship</span>
            </span>
          </Link>

          <nav className="ml-auto hidden lg:block">
            <ul className="flex items-center gap-7">
              {nav.map((n) => (
                <li key={n.href}>
                  <Link
                    href={n.href}
                    className={`eyebrow transition-colors ${
                      pathname === n.href ? "text-gold-light" : "text-white/80 hover:text-gold-light"
                    }`}
                  >
                    {n.short}
                  </Link>
                </li>
              ))}
            </ul>
          </nav>

          <button
            type="button"
            onClick={() => setOpen((v) => !v)}
            aria-expanded={open}
            aria-controls="phone-menu"
            className="ml-auto inline-flex h-10 w-10 items-center justify-center rounded border border-gold/40 text-gold-light lg:hidden"
          >
            <span className="sr-only">{open ? "Close menu" : "Open menu"}</span>
            <svg viewBox="0 0 24 24" className="h-5 w-5" aria-hidden="true">
              {open ? (
                <path d="M5 5l14 14M19 5L5 19" stroke="currentColor" strokeWidth="2" strokeLinecap="round" />
              ) : (
                <path d="M4 7h16M4 12h16M4 17h16" stroke="currentColor" strokeWidth="2" strokeLinecap="round" />
              )}
            </svg>
          </button>
        </div>
      </header>

      {/* Sibling of the header, never inside it: a backdrop-blur ancestor traps fixed children. */}
      {open && (
        <div id="phone-menu" className="fixed inset-x-0 top-[61px] bottom-0 z-50 royal-field-flat lg:hidden">
          <ul className="flex h-full flex-col gap-1 overflow-y-auto px-6 py-8">
            {nav.map((n) => (
              <li key={n.href}>
                <Link
                  href={n.href}
                  className="display block border-b border-gold/20 py-4 text-3xl text-white"
                >
                  {n.label}
                </Link>
              </li>
            ))}
            <li className="pt-8">
              <a href={church.youtube} className="eyebrow text-gold-light" target="_blank" rel="noreferrer">
                Watch on YouTube
              </a>
            </li>
            <li className="pt-4">
              <a href={church.facebook} className="eyebrow text-gold-light" target="_blank" rel="noreferrer">
                Facebook
              </a>
            </li>
          </ul>
        </div>
      )}
    </>
  );
}
