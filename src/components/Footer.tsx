import Link from "next/link";
import Phone from "./Phone";
import { church, nav, pastor, standing } from "@/lib/site";
import GreatSeal from "./GreatSeal";
import Motto from "./Motto";

export default function Footer() {
  return (
    <footer className="royal-field-flat text-white/80">
      <div className="border-b border-gold/30">
        <div className="mx-auto flex max-w-6xl flex-col items-center gap-5 px-5 py-12 text-center">
          <div className="gold-orn w-full max-w-xs" aria-hidden="true">
            <i />
          </div>
          <Motto size="lg" />
        </div>
      </div>
      <div className="mx-auto max-w-6xl px-5 py-14">
        <div className="flex flex-col gap-10 sm:flex-row sm:items-start sm:justify-between">
          <div className="flex items-start gap-4">
            <GreatSeal decorative sizes="72px" className="h-20 w-auto shrink-0" />
            <div>
              <p className="display text-xl text-white">HOPE Covenant Kingdom Fellowship International</p>
              <p className="eyebrow pt-2 text-gold-light/80">{church.tagline}</p>
              <p className="pt-4 text-sm leading-relaxed">
                {church.showStreet ? (
                  <>
                    {church.streetNumber} {church.street}
                    <br />
                    {church.city}, {church.stateCode} {church.zip}
                  </>
                ) : (
                  <>South Side · {church.city}, {church.state}</>
                )}
              </p>
              <p className="time pt-3 text-sm">
                <Phone className="underline decoration-gold/50 underline-offset-4 hover:text-gold-light" />
              </p>
              <p className="time pt-2 text-sm">
                <a
                  href={`mailto:${church.email}`}
                  className="break-all underline decoration-gold/50 underline-offset-4 hover:text-gold-light"
                >
                  {church.email}
                </a>
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
        <p className="pt-2 text-xs tracking-wide text-white/45">
          A Religious and Charitable 501(c)(3) Organization · EIN {standing.ein}
        </p>
      </div>
    </footer>
  );
}
