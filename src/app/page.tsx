import Image from "next/image";
import Link from "next/link";
import Seal, { Charge, type QuarterId } from "@/components/Seal";
import { broadcast, church, pastor, quarters, vision } from "@/lib/site";
import { fmtDay, upcoming } from "@/lib/schedule";

const TINT: Record<QuarterId, string> = {
  word: "bg-[#16356f]",
  spirit: "bg-[#2b1a55]",
  covenant: "bg-[#174f2d]",
  world: "bg-[#7d1a18]",
};

const recent = [
  { title: "The Sacraments — Holy Communion • The Lord’s Supper", ref: "A six-week course" },
  { title: "The Spirit of Ichabod in the Church", ref: "1 Samuel 4:21–22" },
  { title: "When Leaders Don’t Want to Be Led", ref: "Hebrews 13:17–20" },
  { title: "The Church Is Not a Democracy; It Is a Theocracy", ref: "Colossians 1:15–18" },
];

export default function Home() {
  const next = upcoming(3);

  return (
    <>
      {/* ── The Great Seal ───────────────────────────────────────────── */}
      <section className="royal-field relative overflow-hidden text-white">
        <div className="mx-auto grid max-w-6xl items-center gap-12 px-5 py-16 md:grid-cols-[1.05fr_0.95fr] md:gap-10 md:py-24">
          <div>
            <p className="eyebrow text-gold-light/90">Chicago, Illinois · AD MMXVI</p>
            <h1 className="display pt-6 text-[clamp(2rem,6.2vw,3.6rem)]">
              Excellence is our commitment.
              <br />
              Integrity is our standard.
              <br />
              <span className="gold-text">The Kingdom is our assignment.</span>
            </h1>
            <div className="gold-rule mt-8 max-w-sm" />
            <p className="max-w-xl pt-7 text-lg leading-relaxed text-white/85">
              HOPE Covenant Kingdom Fellowship International is a non-denominational, Bible-centred
              family of churches in Chicago. We are a network of bishops, apostles, prophets,
              evangelists, pastors and teachers, led by {pastor.styled}.
            </p>
            <div className="flex flex-wrap gap-3 pt-9">
              <Link href="/teaching" className="btn-gold">
                This week’s teaching
              </Link>
              <Link href="/visit" className="btn-outline">
                Gather with us
              </Link>
            </div>
          </div>

          <div className="flex justify-center md:justify-end">
            <Seal uid="hero" className="w-[clamp(240px,70vw,400px)] drop-shadow-[0_18px_40px_rgba(0,0,0,0.45)]" />
          </div>
        </div>
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

      {/* ── The four quarters of the shield ──────────────────────────── */}
      <section className="royal-field-flat text-white">
        <div className="mx-auto max-w-6xl px-5 py-16 md:py-24">
          <div className="max-w-2xl" data-reveal>
            <p className="eyebrow text-gold-light/85">The shield is quartered</p>
            <h2 className="display pt-5 text-[clamp(1.75rem,4.5vw,2.75rem)]">
              Four charges. Four things we give ourselves to.
            </h2>
            <p className="pt-5 text-white/80">
              The seal was drawn for this fellowship when it was founded. Everything we do sits in
              one of its four quarters.
            </p>
          </div>

          <div className="mt-12 grid gap-px overflow-hidden rounded-sm bg-gold/60 sm:grid-cols-2">
            {quarters.map((q) => (
              <Link
                key={q.id}
                href={q.href}
                data-reveal
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
          <p className="eyebrow text-gold-deep">Our vision</p>
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
        </div>
      </section>

      {/* ── The Hour of Empowerment ──────────────────────────────────── */}
      <section className="bg-royal-ink text-white">
        <div className="mx-auto grid max-w-6xl gap-12 px-5 py-16 md:grid-cols-[auto_1fr] md:py-24">
          <div className="justify-self-center md:justify-self-start" data-reveal>
            <Image
              src="/photos/bishop-boddie.jpg"
              alt="Bishop Mikal D. Boddie in a teal double-breasted suit, from the Hour of Empowerment broadcast"
              width={360}
              height={720}
              className="w-[220px] rounded-sm border border-gold/40 object-cover sm:w-[280px]"
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
                <li key={t.title} className="border-t border-white/15 py-4">
                  <p className="display text-xl leading-snug">{t.title}</p>
                  <p className="time pt-1 text-sm text-gold-light/80">{t.ref}</p>
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
    </>
  );
}
