import Image from "next/image";
import Link from "next/link";
import Crown from "@/components/Crown";
import Flyers from "@/components/Flyers";
import Motto from "@/components/Motto";
import GreatSeal from "@/components/GreatSeal";
import { Charge, type QuarterId } from "@/components/Seal";
import { broadcast, church, flyers, pastor, quarters, vision } from "@/lib/site";
import { fmtDay, nowInChurch, upcoming } from "@/lib/schedule";
import { videos } from "@/lib/videos";

const TINT: Record<QuarterId, string> = {
  word: "bg-[#16356f]",
  spirit: "bg-[#2b1a55]",
  covenant: "bg-[#174f2d]",
  world: "bg-[#7d1a18]",
};

const recent = videos.slice(0, 4);

export default function Home() {
  const next = upcoming(3);
  const today = nowInChurch().date;
  const currentFlyers = flyers.filter((f) => !f.endsOn || f.endsOn >= today);

  return (
    <>
      {/* ── The cover ──────────────────────────────────────────────────
           Their own "Family of Churches" cover, rebuilt as live type: crown,
           gold-and-white wordmark, the gold plaque, the Bishop's name. The
           Bishop stands beside it in choir dress with his crosier. */}
      <section className="royal-field velvet overflow-hidden text-white">
        <div className="mx-auto grid max-w-6xl items-end gap-2 px-5 pt-12 md:grid-cols-[1fr_1fr] md:gap-4 md:pt-10">
          <div className="pb-4 text-center md:pb-20">
            <Crown uid="hero" className="mx-auto w-[clamp(84px,14vw,120px)]" />
            <h1 className="seal-type pt-3 leading-[0.98] tracking-[0.04em]">
              <span className="gold-letter block text-[clamp(3.6rem,13vw,7.25rem)]">HOPE</span>
              <span className="block text-[clamp(2.1rem,7.4vw,4.25rem)] text-white drop-shadow-[0_4px_14px_rgba(0,0,0,0.35)]">
                Covenant
              </span>
              <span className="gold-letter block text-[clamp(2.1rem,7.4vw,4.25rem)]">Kingdom</span>
              <span className="block pt-1 text-[clamp(1.15rem,3.9vw,2.2rem)] tracking-[0.2em] text-white">
                Fellowship
              </span>
              <span className="sr-only"> International</span>
            </h1>
            <div className="gold-orn mx-auto mt-5 max-w-md" aria-hidden="true">
              <i />
            </div>
            <p className="pt-6">
              <span className="plaque script text-[clamp(1.7rem,4.6vw,2.4rem)]">Family of Churches</span>
            </p>
            <p className="seal-type pt-6 text-[clamp(0.8rem,2vw,0.95rem)] tracking-[0.22em] text-gold-light">
              {church.tagline}
            </p>
            <p className="seal-type pt-6 text-[clamp(1rem,2.6vw,1.3rem)] tracking-[0.08em] text-white">
              {pastor.styled}
            </p>
            <p className="display pt-1 text-[clamp(0.95rem,2.2vw,1.1rem)] font-normal italic text-gold-light">
              Establishmentarian and Servant Leader
            </p>
            <Motto size="hero" className="mx-auto pt-7 drop-shadow-[0_3px_10px_rgba(0,0,0,0.35)]" />
            <div className="flex flex-wrap justify-center gap-3 pt-8">
              <Link href="/teaching" className="btn-gold">
                This week’s teaching
              </Link>
              <Link href="/visit" className="btn-outline">
                Gather with us
              </Link>
            </div>
          </div>

          <div className="relative flex justify-center">
            <div
              className="pointer-events-none absolute inset-x-0 bottom-0 mx-auto h-[70%] w-[90%] rounded-full bg-[radial-gradient(closest-side,rgba(255,214,130,0.42),rgba(255,214,130,0))]"
              aria-hidden="true"
            />
            <Image
              src="/photos/bishop-crosier.png"
              alt="Bishop Mikal D. Boddie, D.Div., in choir dress — rochet, scarlet chimere, black tippet and pectoral cross — holding his crosier"
              width={1024}
              height={1536}
              priority
              sizes="(min-width: 1024px) 600px, (min-width: 768px) 46vw, 92vw"
              className="relative w-[min(92vw,430px)] md:w-[min(46vw,600px)] drop-shadow-[0_24px_40px_rgba(0,0,0,0.45)]"
            />
          </div>
        </div>
        <div className="gold-rule" />
      </section>

      {/* ── What is next ─────────────────────────────────────────────── */}
      <section className="bg-royal-ink text-white">
        <div className="mx-auto max-w-6xl px-5 py-14">
          <p className="eyebrow text-gold-light/85">What’s next</p>
          {next.length > 0 ? (
            <ul className="pt-6">
              {next.map((e) => (
                <li
                  key={e.kind + e.date + e.title}
                  className="flex flex-col gap-2 border-t border-white/15 py-6 first:border-t-0 first:pt-0 sm:flex-row sm:items-baseline sm:gap-8"
                >
                  <p className="time shrink-0 text-gold-light sm:w-56">
                    {e.when ?? `${fmtDay(e.date)} · ${e.time24}`}
                  </p>
                  <div>
                    <p className="display text-2xl leading-snug sm:text-3xl">
                      {e.href ? (
                        <Link href={e.href} className="hover:text-gold-light">
                          {e.title}
                        </Link>
                      ) : (
                        e.title
                      )}
                    </p>
                    {e.note && <p className="pt-2 text-white/70">{e.note}</p>}
                  </div>
                </li>
              ))}
            </ul>
          ) : (
            <p className="display pt-6 text-2xl sm:text-3xl">
              {broadcast} — new teaching from {pastor.styled} every week.{" "}
              <Link href="/teaching" className="gold-text underline decoration-gold/50 underline-offset-8">
                Watch it here
              </Link>
              .
            </p>
          )}
        </div>
      </section>

      {/* ── Flyers: his own, newest first; dated ones drop off by themselves ── */}
      {currentFlyers.length > 0 && (
        <section className="royal-field velvet overflow-hidden text-white">
          <div className="mx-auto max-w-6xl px-5 py-16 md:py-20">
            <div className="flex flex-wrap items-end justify-between gap-4">
              <div>
                <p className="eyebrow text-gold-light/85">Flyers</p>
                <h2 className="display pt-4 text-[clamp(1.75rem,4.5vw,2.75rem)]">Coming up, and how to take part.</h2>
              </div>
              <p className="text-sm text-white/70">Tap a flyer to see it full size.</p>
            </div>
            <div className="pt-10">
              <Flyers items={currentFlyers} />
            </div>
          </div>
        </section>
      )}

      {/* ── The four quarters of the shield ──────────────────────────── */}
      <section className="royal-field-flat text-white">
        <div className="mx-auto max-w-6xl px-5 py-16 md:py-24">
          <div className="grid items-center gap-10 md:grid-cols-[1fr_auto]" data-reveal>
            <div className="max-w-2xl">
              <p className="eyebrow text-gold-light/85">The Great Seal · AD MMXVI</p>
              <h2 className="display pt-5 text-[clamp(1.75rem,4.5vw,2.75rem)]">
                Four charges. Four things we give ourselves to.
              </h2>
              <p className="pt-5 text-white/80">
                The seal carries AD MMXVI, the year the fellowship was incorporated in Illinois.
                Everything we do sits in one of its four quarters.
              </p>
            </div>
            <GreatSeal
              sizes="(min-width: 768px) 260px, 56vw"
              className="mx-auto w-[clamp(200px,56vw,260px)] drop-shadow-[0_14px_30px_rgba(0,0,0,0.45)]"
            />
          </div>

          <div className="mt-12 grid gap-px overflow-hidden rounded-sm bg-gold/60 sm:grid-cols-2" data-reveal>
            {quarters.map((q) => (
              <Link
                key={q.id}
                href={q.href}
                className={`${TINT[q.id as QuarterId]} group flex gap-5 p-8 transition-colors hover:brightness-125 sm:p-10`}
              >
                <Charge id={q.id as QuarterId} className="h-14 w-14 shrink-0 sm:h-16 sm:w-16" />
                <div>
                  <p className="eyebrow text-gold-light/85">{q.charge}</p>
                  <h3 className="display pt-3 text-3xl">{q.title}</h3>
                  <p className="pt-4 leading-relaxed text-white/80">{q.blurb}</p>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* ── The vision statement, word for word ──────────────────────── */}
      <section className="bg-cream">
        <div className="mx-auto max-w-5xl px-5 py-16 text-center md:py-24" data-reveal>
          <p className="eyebrow text-gold-deep">What we aspire to be · Our vision</p>
          <p className="display pt-6 text-[clamp(1.4rem,3.4vw,2rem)] text-royal">
            To see people
          </p>
          <ul className="flex flex-wrap items-baseline justify-center gap-x-4 gap-y-2 pt-5">
            {vision.map((w, i) => (
              <li key={w} className="display text-[clamp(1.6rem,5vw,3.25rem)] text-royal-deep">
                {w}
                {i < vision.length - 1 && <span className="px-3 text-gold">·</span>}
              </li>
            ))}
          </ul>
          <p className="mx-auto max-w-2xl pt-8 text-lg leading-relaxed text-ink/80">
            We are committed to perfecting and empowering people for the Kingdom, serving the
            community through faith-sharing, and growing together in God.
          </p>
        </div>
      </section>

      {/* ── The Hour of Empowerment ──────────────────────────────────── */}
      <section className="bg-royal-ink text-white">
        <div className="mx-auto grid max-w-6xl gap-12 px-5 py-16 md:grid-cols-[auto_1fr] md:py-24">
          <div className="justify-self-center md:justify-self-start" data-reveal>
            <Image
              src="/photos/bishop-green-plaid.png"
              alt="Bishop Mikal D. Boddie, D.Div., smiling, in a green windowpane double-breasted suit with a red and gold polka-dot tie"
              width={512}
              height={640}
              sizes="(min-width: 640px) 300px, 240px"
              className="w-[240px] rounded-sm border border-gold/60 shadow-[0_0_0_4px_rgba(31,3,5,0.6),0_0_0_5px_rgba(217,165,42,0.45)] sm:w-[300px]"
              priority={false}
            />
          </div>
          <div data-reveal>
            <p className="eyebrow text-gold-light/85">{broadcast}</p>
            <h2 className="display pt-5 text-[clamp(1.75rem,4.5vw,2.75rem)]">
              An hour of the Word, every week.
            </h2>
            <p className="max-w-2xl pt-5 leading-relaxed text-white/80">
              {pastor.styled}, {pastor.role}, teaches straight through a text — an hour at a time,
              chapter and verse. Sixty-five of them are online already, and a new one goes up most
              weeks.
            </p>
            <ul className="pt-8">
              {recent.map((t) => (
                <li key={t.id} className="border-t border-white/15 py-4">
                  <a
                    href={`https://www.youtube.com/watch?v=${t.id}`}
                    target="_blank"
                    rel="noreferrer"
                    className="seal-type block text-[17px] leading-snug tracking-[0.04em] hover:text-gold-light"
                  >
                    {t.title}
                  </a>
                  {t.sub && <p className="display pt-1 text-sm font-normal italic text-gold-light/80">{t.sub}</p>}
                </li>
              ))}
            </ul>
            <div className="flex flex-wrap gap-3 pt-8">
              <Link href="/teaching" className="btn-gold">
                All the teaching
              </Link>
              <a href={church.youtube} target="_blank" rel="noreferrer" className="btn-outline">
                YouTube
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* ── Give / pray ──────────────────────────────────────────────── */}
      <section className="bg-paper">
        <div className="mx-auto grid max-w-6xl gap-px bg-royal/20 px-0 py-0 sm:grid-cols-2">
          <Link href="/give" className="bg-paper p-10 transition-colors hover:bg-cream sm:p-14" data-reveal>
            <p className="eyebrow text-gold-deep">Give</p>
            <h3 className="display pt-4 text-3xl text-royal-deep">Sow into the Kingdom</h3>
            <p className="pt-4 leading-relaxed text-ink/75">
              Offerings keep the teaching free, the courses running and the outreach moving.
            </p>
          </Link>
          <Link href="/contact" className="bg-paper p-10 transition-colors hover:bg-cream sm:p-14" data-reveal>
            <p className="eyebrow text-gold-deep">Prayer</p>
            <h3 className="display pt-4 text-3xl text-royal-deep">Send us a prayer request</h3>
            <p className="pt-4 leading-relaxed text-ink/75">
              Write it down and it goes straight to the Bishop. Nothing is posted anywhere.
            </p>
          </Link>
        </div>
      </section>

      {/* ── The 2027 theme (the Bishop's own seal, sent Nov 16, 2026) ── */}
      <section className="relative overflow-hidden bg-royal-ink text-white">
        <div
          aria-hidden="true"
          className="pointer-events-none absolute inset-0 bg-[radial-gradient(60%_70%_at_50%_42%,rgba(217,165,42,0.32)_0%,rgba(156,15,22,0.38)_38%,transparent_72%)] md:bg-[radial-gradient(42%_80%_at_30%_50%,rgba(217,165,42,0.32)_0%,rgba(156,15,22,0.38)_40%,transparent_74%)]"
        />
        <div className="relative mx-auto grid max-w-6xl items-center gap-10 px-5 py-16 md:grid-cols-[minmax(0,5fr)_minmax(0,6fr)] md:gap-16 md:py-24">
          <div className="justify-self-center" data-reveal>
            <Image
              src="/theme-2027.webp"
              alt="Seal of Hope Covenant Kingdom Fellowship International for 2027: a bishop’s mitre and two swords over a globe and an open Bible, with the banner “The Year of Revival, Soul Winning, and Kingdom Expansion.”"
              width={967}
              height={1000}
              sizes="(min-width: 768px) 460px, 82vw"
              className="h-auto w-[min(82vw,460px)] drop-shadow-[0_24px_50px_rgba(0,0,0,0.6)]"
            />
          </div>
          <div className="text-center md:text-left" data-reveal>
            <p className="eyebrow text-gold-light/85">Our theme for 2027</p>
            <h2 className="display pt-5 text-[clamp(2rem,5.2vw,3.5rem)] leading-[1.08]">
              The Year of Revival, <span className="text-gold-light">Soul Winning,</span> and
              Kingdom Expansion.
            </h2>
            <div className="gold-orn mx-auto mt-8 w-full max-w-xs md:mx-0" aria-hidden="true">
              <i />
            </div>
            <p className="display pt-6 text-lg font-normal italic text-gold-light/90">
              {church.name}
            </p>
          </div>
        </div>
      </section>
    </>
  );
}
