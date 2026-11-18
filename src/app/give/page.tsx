import type { Metadata } from "next";
import Image from "next/image";
import PageHero from "@/components/PageHero";
import Link from "next/link";
import Phone from "@/components/Phone";
import CopyValue from "@/components/CopyValue";
import { givingPlatforms, standing } from "@/lib/site";

export const metadata: Metadata = {
  title: "Give",
  description:
    "How to give to HOPE Covenant Kingdom Fellowship International, Chicago — a religious and charitable 501(c)(3) organization. Contributions are tax-deductible as provided by law.",
};

export default function Give() {
  return (
    <>
      <PageHero
        eyebrow="Give"
        title="Sow into the Kingdom."
        portrait={{ src: "/photos/bishop-navy-greek-key.png", width: 427, height: 640, cutout: true, alt: "Bishop Mikal D. Boddie, D.Div., in a navy jacket with a white Greek-key panel and gold buttons" }}
      >
          <p className="max-w-2xl pt-7 text-lg leading-relaxed text-white/85">
            Every offering goes into the same three things: keeping the teaching free, keeping the
            courses running, and reaching the neighborhood with real help.
          </p>
      </PageHero>

      <section className="royal-field-flat text-white">
        <div className="mx-auto grid max-w-5xl items-center gap-10 px-5 py-16 md:grid-cols-[0.9fr_1.1fr] md:py-20">
          <div className="flex justify-center" data-reveal>
            <Image
              src="/photos/holiday-support-28-families-2026.webp"
              alt="Help make the holidays special for local seniors and families. HOPE Covenant Kingdom Fellowship International is seeking sponsors, wish-list gifts, toys, gift cards and food baskets to support 28 families."
              width={1024}
              height={1536}
              sizes="(min-width: 768px) 400px, 90vw"
              className="w-full max-w-[400px] rounded-sm border border-gold/60 shadow-[0_18px_40px_rgba(0,0,0,0.35)]"
            />
          </div>
          <div data-reveal>
            <p className="eyebrow text-gold-light/85">Holiday outreach</p>
            <h2 className="display pt-5 text-[clamp(1.8rem,4.8vw,2.8rem)] leading-tight">
              Help 28 families experience a joyful holiday.
            </h2>
            <p className="max-w-2xl pt-5 leading-relaxed text-white/80">
              We are welcoming sponsors, wish-list gifts, toys, Walmart or grocery gift cards,
              and food baskets for local seniors and families across Chicago and nearby communities.
            </p>
            <p className="pt-5 leading-relaxed text-white/80">
              Use any giving method below and note <strong className="text-gold-light">Holiday outreach</strong>,
              or call us to arrange a physical donation.
            </p>
            <p className="pt-8">
              <Phone className="font-semibold text-gold-light underline decoration-gold underline-offset-4" />
            </p>
          </div>
        </div>
      </section>

      <section className="bg-paper">
        <div className="mx-auto max-w-3xl px-5 py-16 md:py-20">
          <p className="eyebrow text-gold-deep">Giving platforms</p>
          <h2 className="display pt-3 text-[clamp(1.6rem,4vw,2.2rem)] text-royal-deep">
            Five ways to give.
          </h2>
          <ol className="mt-8 grid gap-4" data-reveal>
            {givingPlatforms.map((g, i) => (
              <li
                key={g.name}
                className="flex flex-col gap-4 rounded-sm border border-gold/50 bg-cream p-6 sm:flex-row sm:items-center sm:justify-between sm:gap-8"
              >
                <div className="flex items-start gap-4">
                  <span className="seal-type flex h-9 w-9 shrink-0 items-center justify-center rounded-full bg-royal-deep text-sm text-gold-light">
                    {i + 1}
                  </span>
                  <div>
                    <h3 className="display text-2xl leading-tight text-royal-deep">{g.name}</h3>
                    {g.payee && <p className="pt-1 text-sm font-semibold text-ink/75">{g.payee}</p>}
                    <p className="pt-1 text-sm text-ink/65">{g.how}</p>
                    {g.b64 && (
                      <p className="pt-3">
                        <CopyValue b64={g.b64} />
                      </p>
                    )}
                    {g.handle && !g.b64 && (
                      <p className="time pt-3 text-lg font-semibold text-royal-deep">{g.handle}</p>
                    )}
                  </div>
                </div>
                {g.url && (
                  <a href={g.url} target="_blank" rel="noreferrer" className="btn-gold shrink-0 self-start sm:self-center">
                    {g.handle ? `Open ${g.name}` : "Give securely"}
                  </a>
                )}
              </li>
            ))}
          </ol>
          <p className="pt-6 text-sm leading-relaxed text-ink/65">
            Questions about a gift? Call <Phone className="font-semibold text-royal underline decoration-gold underline-offset-4" />{" "}
            or <Link href="/contact" className="font-semibold text-royal underline decoration-gold underline-offset-4">write to us</Link>.
          </p>

          <div className="mt-10 border-t border-royal/15 pt-10" data-reveal>
            <h2 className="display text-2xl text-royal-deep">Where it goes</h2>
            <ul className="pt-5 text-ink/80">
              <li className="border-t border-royal/10 py-4">
                <span className="font-semibold text-royal-deep">The teaching.</span> Sixty-five
                sessions online, free to anyone, with more every week.
              </li>
              <li className="border-t border-royal/10 py-4">
                <span className="font-semibold text-royal-deep">The courses.</span> Virtual classes
                like The Sacraments, and the training of leaders.
              </li>
              <li className="border-t border-royal/10 py-4">
                <span className="font-semibold text-royal-deep">The neighborhood.</span> Food
                assistance, prayer gatherings, youth and senior outreach on the South Side.
              </li>
            </ul>
          </div>

          <div className="mt-10 border border-gold/50 bg-cream px-6 py-6 sm:px-8" data-reveal>
            <p className="eyebrow text-gold-deep">Federal and state standing</p>
            <p className="display pt-4 text-xl leading-snug text-royal-deep">{standing.statement}</p>
            <p className="pt-2 text-ink/80">
              {standing.deductible} <span className="px-1 text-gold-deep">|</span> EIN: {standing.ein}
            </p>
            <ul className="pt-5 text-sm leading-relaxed text-ink/75">
              <li className="border-t border-royal/10 py-2.5">
                Recognized by the IRS as a 501(c)(3) public charity, effective {standing.irsEffective}.
              </li>
              <li className="border-t border-royal/10 py-2.5">
                An Illinois not-for-profit corporation, incorporated October 13, 2016, in good standing
                with the Secretary of State (file no. {standing.ilFile}).
              </li>
              <li className="border-t border-royal/10 py-2.5">
                Exempt from Illinois sales tax as a religious organization.
              </li>
            </ul>
          </div>
        </div>
      </section>
    </>
  );
}
