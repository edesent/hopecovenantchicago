import type { Metadata } from "next";
import Link from "next/link";
import Phone from "@/components/Phone";
import { church, events, pastor, services } from "@/lib/site";
import { fmtTime, nowInChurch } from "@/lib/schedule";

export const metadata: Metadata = {
  title: "Gather With Us",
  description:
    "How to gather with HOPE Covenant Kingdom Fellowship International in Chicago — online, in the weekly course, and in person.",
};

const address = `${church.streetNumber} ${church.street}, ${church.city}, ${church.stateCode} ${church.zip}`;
const embed = `https://www.google.com/maps?q=${encodeURIComponent(address)}&output=embed`;

export default function Visit() {
  const today = nowInChurch().date;
  const running = events.filter((e) => e.endsOn >= today);

  return (
    <>
      <section className="royal-field text-white">
        <div className="mx-auto max-w-5xl px-5 py-16 md:py-24">
          <p className="eyebrow text-gold-light/90">Gather with us</p>
          <h1 className="display max-w-3xl pt-6 text-[clamp(2rem,6vw,3.4rem)]">
            There is room for you here.
          </h1>
          <div className="gold-rule mt-8 max-w-sm" />
          <p className="max-w-2xl pt-7 text-lg leading-relaxed text-white/85">
            We are a small fellowship with a wide reach. Some of us are in the room, some are on the
            broadcast, and some are pastors in other cities who belong to this family of churches.
            All three are welcome.
          </p>
        </div>
      </section>

      <section className="bg-paper">
        <div className="mx-auto max-w-5xl px-5 py-16 md:py-20">
          <p className="eyebrow text-gold-deep">The week</p>

          <ul className="pt-8">
            {services.map((s) => (
              <li key={s.id} className="flex flex-col gap-2 border-t border-royal/15 py-6 sm:flex-row sm:gap-10">
                <p className="time shrink-0 font-semibold text-royal sm:w-56">
                  {s.rule} · {fmtTime(s.time24)}
                </p>
                <div>
                  <p className="display text-2xl text-royal-deep">{s.name}</p>
                  {s.note && <p className="pt-2 text-ink/70">{s.note}</p>}
                </div>
              </li>
            ))}

            <li className="flex flex-col gap-2 border-t border-royal/15 py-6 sm:flex-row sm:gap-10">
              <p className="time shrink-0 font-semibold text-royal sm:w-56">Sundays</p>
              <div>
                <p className="display text-2xl text-royal-deep">Worship, streamed live</p>
                <p className="pt-2 text-ink/70">
                  Sunday services go out live on our Facebook page.{" "}
                  <a
                    href={church.facebook}
                    target="_blank"
                    rel="noreferrer"
                    className="underline decoration-gold underline-offset-4"
                  >
                    Follow us there
                  </a>{" "}
                  and you will see it start. Call or write if you would like to come in person —
                  we will tell you exactly where and when to meet us.
                </p>
              </div>
            </li>

            {running.map((e) => (
              <li key={e.id} className="flex flex-col gap-2 border-t border-royal/15 py-6 sm:flex-row sm:gap-10">
                <p className="time shrink-0 font-semibold text-royal sm:w-56">{e.when}</p>
                <div>
                  <p className="display text-2xl leading-snug text-royal-deep">{e.title}</p>
                  <p className="pt-2 text-ink/70">{e.summary}</p>
                  <p className="pt-2">
                    <Link href="/teaching" className="underline decoration-gold underline-offset-4">
                      About the course
                    </Link>
                  </p>
                </div>
              </li>
            ))}
          </ul>
        </div>
      </section>

      <section className="bg-cream">
        <div className="mx-auto grid max-w-5xl gap-10 px-5 py-16 md:grid-cols-2 md:py-20">
          <div>
            <p className="eyebrow text-gold-deep">Where to find us</p>
            <p className="display pt-5 text-3xl leading-tight text-royal-deep">
              {church.streetNumber} {church.street}
              <br />
              {church.city}, {church.stateCode} {church.zip}
            </p>
            <p className="pt-5 leading-relaxed text-ink/75">
              This is the fellowship’s address on the South Side. Before you set out, call ahead —
              a small fellowship moves, and we would rather meet you at the door than have you
              standing outside it.
            </p>
            <p className="time pt-5 text-lg">
              <Phone className="font-semibold text-royal underline decoration-gold underline-offset-4" />
            </p>
            <div className="flex flex-wrap gap-3 pt-8">
              <a href={church.mapsUrl} target="_blank" rel="noreferrer" className="btn-royal">
                Directions
              </a>
              <Link href="/contact" className="btn-royal">
                Write to us
              </Link>
            </div>
          </div>
          <div className="overflow-hidden rounded-sm border border-royal/20">
            <iframe
              src={embed}
              title={`Map to ${church.name}`}
              className="h-[340px] w-full md:h-full"
              referrerPolicy="no-referrer-when-downgrade"
            />
          </div>
        </div>
      </section>

      <section className="royal-field-flat text-white">
        <div className="mx-auto max-w-5xl px-5 py-16 md:py-20" data-reveal>
          <p className="eyebrow text-gold-light/85">What to expect</p>
          <div className="grid gap-10 pt-8 sm:grid-cols-3">
            <div>
              <h2 className="display text-2xl">Come as you are</h2>
              <p className="pt-3 leading-relaxed text-white/80">
                Some dress up, some don’t. Nobody is going to look you over at the door.
              </p>
            </div>
            <div>
              <h2 className="display text-2xl">Expect the Word</h2>
              <p className="pt-3 leading-relaxed text-white/80">
                {pastor.title} {pastor.name} teaches from an open Bible. Bring one, or borrow ours.
              </p>
            </div>
            <div>
              <h2 className="display text-2xl">You won’t be singled out</h2>
              <p className="pt-3 leading-relaxed text-white/80">
                No offering pressure, no standing up in front of everyone. Sit, listen, and talk to
                us afterwards if you want to.
              </p>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
