import type { Metadata } from "next";
import Link from "next/link";
import { Charge } from "@/components/Seal";
import { broadcast, church, events, pastor } from "@/lib/site";
import { fmtDay, nowInChurch } from "@/lib/schedule";

export const metadata: Metadata = {
  title: "Teaching",
  description:
    "The Hour of Empowerment — weekly Bible teaching from Bishop Mikal D. Boddie, D.Div., and the courses running now at HOPE Covenant Kingdom Fellowship International.",
};

/** Titles taken from their own YouTube channel and flyers. */
const library = [
  { title: "The Sacraments I — Holy Communion • The Lord’s Supper", ref: "48 minutes" },
  { title: "The Sacraments II — Holy Communion • The Lord’s Supper", ref: "17 minutes" },
  { title: "The Spirit of Ichabod in the Church", ref: "1 Samuel 4:21–22" },
  { title: "When Leaders Don’t Want to Be Led", ref: "Hebrews 13:17–20" },
  { title: "When God Uses What You Have Left", ref: "Word-Bearer" },
  { title: "The Church Is Not a Democracy; It Is a Theocracy", ref: "Colossians 1:15–18" },
];

export default function Teaching() {
  const today = nowInChurch().date;
  const running = events.filter((e) => e.endsOn >= today);

  return (
    <>
      <section className="royal-field text-white">
        <div className="mx-auto max-w-5xl px-5 py-16 md:py-24">
          <p className="eyebrow text-gold-light/90">{broadcast}</p>
          <h1 className="display max-w-3xl pt-6 text-[clamp(2rem,6vw,3.4rem)]">
            An hour of the Word, chapter and verse.
          </h1>
          <div className="gold-rule mt-8 max-w-sm" />
          <p className="max-w-2xl pt-7 text-lg leading-relaxed text-white/85">
            {pastor.styled} teaches the whole counsel of God — doctrine, order, the sacraments, the
            life of the leader. Sixty-five teachings are online, free, and a new one goes up most
            weeks.
          </p>
          <div className="flex flex-wrap gap-3 pt-9">
            <a href={church.youtube} target="_blank" rel="noreferrer" className="btn-gold">
              Watch on YouTube
            </a>
            <a href={church.facebook} target="_blank" rel="noreferrer" className="btn-outline">
              Facebook
            </a>
          </div>
        </div>
      </section>

      {/* Courses running now. Each one drops off this page by itself after `endsOn`. */}
      {running.length > 0 && (
        <section className="bg-cream">
          <div className="mx-auto max-w-5xl px-5 py-16 md:py-20">
            <p className="eyebrow text-gold-deep">Running now</p>
            {running.map((e) => (
              <article key={e.id} className="pt-8" data-reveal>
                <div className="flex flex-col gap-8 border-l-4 border-gold pl-6 sm:flex-row sm:items-start sm:gap-10 sm:pl-8">
                  <Charge id="covenant" className="h-20 w-20 shrink-0 rounded-sm bg-royal-deep p-2" />
                  <div>
                    <h2 className="display text-[clamp(1.6rem,4vw,2.4rem)] leading-tight text-royal-deep">
                      {e.title}
                    </h2>
                    <p className="time pt-4 text-lg font-semibold text-royal">{e.when}</p>
                    <p className="max-w-2xl pt-4 leading-relaxed text-ink/80">{e.summary}</p>
                    <p className="time pt-4 text-sm text-ink/60">
                      Six sessions, through {fmtDay(e.endsOn, { month: "long", day: "numeric" })}.
                    </p>
                    <p className="pt-6">
                      <Link href="/contact" className="btn-royal">
                        Ask for the link
                      </Link>
                    </p>
                  </div>
                </div>
              </article>
            ))}
          </div>
        </section>
      )}

      <section className="bg-paper">
        <div className="mx-auto max-w-5xl px-5 py-16 md:py-20">
          <p className="eyebrow text-gold-deep">Recent teaching</p>
          <ul className="pt-8" data-reveal>
            {library.map((t) => (
              <li key={t.title} className="border-t border-royal/15 py-5">
                <p className="display text-[clamp(1.2rem,3vw,1.6rem)] leading-snug text-royal-deep">
                  {t.title}
                </p>
                <p className="time pt-2 text-sm text-ink/60">{t.ref}</p>
              </li>
            ))}
          </ul>
          <p className="pt-10">
            <a href={church.youtube} target="_blank" rel="noreferrer" className="btn-royal">
              All 65 on YouTube
            </a>
          </p>
        </div>
      </section>

      <section className="royal-field-flat text-white">
        <div className="mx-auto max-w-5xl px-5 py-16 md:py-20" data-reveal>
          <p className="eyebrow text-gold-light/85">The classroom</p>
          <h2 className="display max-w-3xl pt-5 text-[clamp(1.6rem,4vw,2.5rem)]">
            Equipping and empowering believers through impartation and discipleship.
          </h2>
          <p className="max-w-2xl pt-5 leading-relaxed text-white/80">
            Teaching here is not only for Sunday. Leaders in training sit under the same courses as
            everyone else, and the FAM Institute Bible College &amp; Seminary graduated a class this
            year. If you want to be taught, start with a course and write to us.
          </p>
          <p className="pt-8">
            <Link href="/contact" className="btn-gold">
              Write to the Bishop
            </Link>
          </p>
        </div>
      </section>
    </>
  );
}
