import Link from "next/link";
import Phone from "./Phone";
import { church, nav, pastor } from "@/lib/site";
import { Shield } from "./Seal";

export default function Footer() {
  return (
    <footer className="royal-field-flat text-white/80">
      <div className="mx-auto max-w-6xl px-5 py-14">
        <div className="flex flex-col gap-10 sm:flex-row sm:items-start sm:justify-between">
          <div className="flex items-start gap-4">
            <Shield uid="ftr" className="h-16 w-auto shrink-0" />
            <div>
              <p className="display text-xl text-white">HOPE Covenant Kingdom Fellowship</p>
              <p className="eyebrow pt-2 text-gold-light/80">International · Chicago · AD MMXVI</p>
              <p className="pt-4 text-sm leading-relaxed">
                {church.streetNumber} {church.street}
                <br />
                {church.city}, {church.stateCode} {church.zip}
              </p>
              <p className="time pt-3 text-sm">
                <Phone className="underline decoration-gold/50 underline-offset-4 hover:text-gold-light" />
              </p>
            </div>
          </div>

          <nav>
            <ul className="grid grid-cols-2 gap-x-10 gap-y-3 sm:grid-cols-1">
              {nav.map((n) => (
                <li key={n.href}>
                  <Link href={n.href} className="eyebrow text-white/75 hover:text-gold-light">
                    {n.label}
                  </Link>
                </li>
              ))}
              <li>
                <a
                  href={church.youtube}
                  target="_blank"
                  rel="noreferrer"
                  className="eyebrow text-white/75 hover:text-gold-light"
                >
                  YouTube
                </a>
              </li>
              <li>
                <a
                  href={church.facebook}
                  target="_blank"
                  rel="noreferrer"
                  className="eyebrow text-white/75 hover:text-gold-light"
                >
                  Facebook
                </a>
              </li>
            </ul>
          </nav>
        </div>

        <div className="gold-rule mt-12 opacity-50" />
        <p className="pt-6 text-xs tracking-wide text-white/55">
          {pastor.styled} · {pastor.role} · {church.hashtag}
        </p>
      </div>
    </footer>
  );
}
