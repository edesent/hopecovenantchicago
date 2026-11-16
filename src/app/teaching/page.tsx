import type { Metadata } from "next";
import PageHero from "@/components/PageHero";
import Phone from "@/components/Phone";
import VideoCard from "@/components/VideoCard";
import { videos } from "@/lib/videos";
import Link from "next/link";
import { Charge } from "@/components/Seal";
import { broadcast, church, events, pastor } from "@/lib/site";
import { fmtDay, nowInChurch } from "@/lib/schedule";

export const metadata: Metadata = {
  title: "Teaching",
  description:
    "The Hour of Empowerment — weekly Bible teaching from Bishop Mikal D. Boddie, D.Div., and the courses running now at HOPE Covenant Kingdom Fellowship International.",
};

export default function Teaching() {
  const today = nowInChurch().date;
  const running = events.filter((e) => e.endsOn >= today);

  return (
    <>
      <PageHero
        eyebrow={broadcast}
        title="An hour of the Word, chapter and verse."
        portrait={{ src: "/photos/bishop-study.png", width: 427, height: 640, cutout: false, alt: "Bishop Mikal D. Boddie, D.Div., in a navy double-breasted suit in his study, shelves of books and a globe behind him" }}
      >
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
      </PageHero>

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
                    {e.registerB64 && (
                      <p className="time pt-5 text-ink/80">
                        To register, call{" "}
                        <Phone
                          b64={e.registerB64}
                          fallback="the church"
                          className="font-semibold text-royal underline decoration-gold underline-offset-4"
                        />
                        .
                      </p>
                    )}
                    <p className="pt-6">
                      <Link href="/contact" className="btn-royal">
                        Ask for the Zoom link
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
        <div className="mx-auto max-w-6xl px-5 py-16 md:py-20">
          <p className="eyebrow text-gold-deep">Recent teaching</p>
          <h2 className="display pt-4 text-[clamp(1.6rem,4vw,2.4rem)] leading-tight text-royal-deep">
            Watch it here.
          </h2>
          <div className="grid gap-x-6 gap-y-10 pt-10 sm:grid-cols-2 lg:grid-cols-3">
            {videos.map((v) => (
              <VideoCard key={v.id} v={v} />
            ))}
          </div>
          <p className="pt-12">
            <a href={church.youtube} target="_blank" rel="noreferrer" className="btn-royal">
              Subscribe on YouTube · @HopeCKF
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
