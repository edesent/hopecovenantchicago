import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import GreatSeal from "@/components/GreatSeal";
import Motto from "@/components/Motto";
import PageHero from "@/components/PageHero";
import { Charge, type QuarterId } from "@/components/Seal";
import { church, leaders, pastor, quarters, standing } from "@/lib/site";

export const metadata: Metadata = {
  title: "About",
  description:
    "HOPE Covenant Kingdom Fellowship International, Family of Churches — a Christian, Bible-centered fellowship and organization in Chicago, established January 2018 and led by Bishop Mikal D. Boddie, D.Div. Kingdom Growth • Covenant Life.",
};

export default function About() {
  return (
    <>
      <PageHero
        eyebrow="Family of Churches"
        title={church.tagline}
        portrait={{
          src: "/photos/bishop-embroidered.png",
          width: 760,
          height: 829,
          cutout: true,
          alt: "Bishop Mikal D. Boddie, D.Div., in a navy jacket embroidered all over in gold, with a burgundy pocket square",
        }}
      >
        <p className="max-w-2xl pt-7 text-lg leading-relaxed text-white/85">
          Hope Covenant Kingdom Fellowship International, Family of Churches, established in January
          of 2018, is a Christian, Bible-centered Fellowship and Organization located in Chicago,
          Illinois, USA.
        </p>
      </PageHero>

      <section className="bg-paper">
        <div className="mx-auto grid max-w-5xl gap-12 px-5 py-16 md:grid-cols-[auto_1fr] md:py-20">
          <div className="justify-self-center md:justify-self-start" data-reveal>
            {/* An arch of their crimson, the Bishop standing in it as he sent the photo. */}
            <div className="royal-field relative flex w-[270px] items-end justify-center overflow-hidden rounded-t-full border border-gold/60 pt-10 shadow-[0_0_0_4px_var(--paper),0_0_0_5px_rgba(217,165,42,0.55)] sm:w-[320px]">
              <Image
                src="/photos/bishop-mozzetta.png"
                alt="Bishop Mikal D. Boddie, D.Div., in a magenta cassock and mozzetta with a gold pectoral cross"
                width={474}
                height={526}
                sizes="320px"
                className="relative w-full"
              />
            </div>
          </div>
          <div data-reveal>
            <p className="eyebrow text-gold-deep">The Most Reverend</p>
            <h2 className="display pt-5 text-[clamp(1.7rem,4vw,2.5rem)] leading-tight text-royal-deep">
              {pastor.styled}
            </h2>
            <p className="time pt-3 text-sm uppercase tracking-widest text-ink/60">{pastor.role}</p>
            <p className="max-w-2xl pt-6 leading-relaxed text-ink/80">
              A Pastor, Bishop, Apostle, Chaplain, and Religious Educator for more than 55 years,
              Bishop Boddie is profoundly interested in developing high-quality, Biblically grounded
              Five-Fold leaders. Throughout his ministerial life he has executed the work of the
              ministry in accordance with Ephesians 4:11–14, Perfecting and Empowering People for the
              Kingdom of God, and offering sound Biblical Teaching of the Holy Scripture.
            </p>
            <blockquote className="mt-8 max-w-2xl border-l-2 border-gold pl-6">
              <p className="display text-[clamp(1.25rem,2.6vw,1.6rem)] font-normal italic leading-snug text-royal-deep">
                “Standing in Apostolic and Episcopal order, preserving sacred tradition, and rejecting
                the instability of passing fads and trends.”
              </p>
            </blockquote>
            <ul className="max-w-2xl pt-8 text-ink/80">
              {pastor.honors.map((h) => (
                <li key={h.what} className="flex gap-6 border-t border-royal/15 py-3">
                  <span className="time w-28 shrink-0 text-sm font-semibold text-royal">{h.when}</span>
                  <span>{h.what}</span>
                </li>
              ))}
            </ul>
            <p className="max-w-2xl pt-6 leading-relaxed text-ink/80">
              His overall mission is to demonstrate God’s love and the proclamation of the Gospel of
              Jesus Christ, through obedience to the Great Commission and the maturing of Five-fold
              leadership within the Body of Christ.
            </p>
            <div className="grid max-w-xl grid-cols-2 gap-5 pt-10">
              <figure className="flex flex-col items-center rounded-sm border border-gold/40 bg-white p-4 text-center">
                <Image
                  src="/heraldry/seal-of-the-bishop.png"
                  alt="The Seal of the Bishop, Mikal D. Boddie, D.D.: a purple oval with mitre, keys and crosier over a shield, held by two gold lions, Est. 2017 AD, Jeremiah 1:9 and Isaiah 6:8–9"
                  width={483}
                  height={485}
                  sizes="220px"
                  className="w-full max-w-[200px]"
                />
                <figcaption className="eyebrow pt-3 text-gold-deep">Seal of the Bishop</figcaption>
              </figure>
              <figure className="flex flex-col items-center rounded-sm border border-gold/40 bg-white p-4 text-center">
                <Image
                  src="/heraldry/christus-primus.jpg"
                  alt="The Bishop’s coat of arms under a green galero with tassels, the motto Christus Primus on a gold scroll"
                  width={640}
                  height={640}
                  sizes="220px"
                  className="w-full max-w-[200px]"
                />
                <figcaption className="eyebrow pt-3 text-gold-deep">Christus Primus</figcaption>
              </figure>
            </div>
            <p className="pt-10">
              <Link href="/teaching" className="btn-royal">
                Hear him teach
              </Link>
            </p>
          </div>
        </div>
      </section>

      {/* ── The seal, explained ──────────────────────────────────────── */}
      <section className="royal-field-flat text-white">
        <div className="mx-auto max-w-5xl px-5 py-16 md:py-24">
          <div className="grid gap-12 md:grid-cols-[0.85fr_1.15fr] md:items-start">
            <div className="flex justify-center" data-reveal>
              <GreatSeal sizes="(min-width: 768px) 330px, 60vw" className="w-[clamp(220px,60vw,330px)] drop-shadow-[0_14px_30px_rgba(0,0,0,0.45)]" />
            </div>
            <div data-reveal>
              <p className="eyebrow text-gold-light/85">The Great Seal</p>
              <h2 className="display pt-5 text-[clamp(1.7rem,4vw,2.5rem)]">
                Everything we are, in one mark.
              </h2>
              <p className="pt-5 leading-relaxed text-white/80">
                The Chi-Rho stands over it all. The mitre, the key and the crosier say this is a
                shepherded house under episcopal oversight. The year at the foot —{" "}
                <span className="seal-type">AD MMXVI</span> — is the year the fellowship was
                incorporated in the State of Illinois. And the shield is quartered four ways:
              </p>
              <ul className="pt-8">
                {quarters.map((q) => (
                  <li key={q.id} className="flex items-start gap-5 border-t border-white/15 py-5">
                    <Charge id={q.id as QuarterId} className="h-11 w-11 shrink-0" />
                    <div>
                      <p className="display text-xl">
                        {q.charge} — {q.title}
                      </p>
                      <p className="pt-2 text-sm leading-relaxed text-white/75">{q.blurb}</p>
                    </div>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* ── Vision and mission, word for word from their own statement ─ */}
      <section className="royal-field velvet text-white">
        <div className="mx-auto grid max-w-5xl gap-14 px-5 py-16 md:grid-cols-2 md:gap-12 md:py-24">
          <div data-reveal>
            <p>
              <span className="plaque seal-type px-6 text-[0.8rem] tracking-[0.14em]">What we aspire to be</span>
            </p>
            <h2 className="seal-type gold-letter pt-7 text-[clamp(2.4rem,6vw,3.6rem)] leading-none tracking-[0.03em]">
              Our Vision
            </h2>
            <p className="display pt-6 text-[clamp(1.35rem,2.8vw,1.75rem)] leading-snug text-gold-light">
              To see people saved, healed, set free, discipled, equipped, empowered, and serving.
            </p>
          </div>
          <div data-reveal>
            <p>
              <span className="plaque seal-type px-6 text-[0.8rem] tracking-[0.14em]">Who we are, what we do</span>
            </p>
            <h2 className="seal-type gold-letter pt-7 text-[clamp(2.4rem,6vw,3.6rem)] leading-none tracking-[0.03em]">
              Our Mission
            </h2>
            <p className="pt-6 leading-relaxed text-white/85">
              Hope Covenant Kingdom Fellowship Inc. is a network of Bishops, Apostles, Prophets,
              Evangelists, Pastors, and Teachers who purpose to know God through a personal
              relationship with Jesus Christ; to equip and empower believers through impartation and
              discipleship; and, by demonstrating God’s love, to reach a hungry world with Jesus Christ
              through obedience to the Great Commission and the Fivefold Ministry.
            </p>
          </div>
        </div>
      </section>

      {/* ── About us and core values, from the same statement ──────── */}
      <section className="bg-paper">
        <div className="mx-auto max-w-5xl px-5 py-16 md:py-24">
          <div className="grid gap-12 md:grid-cols-[0.9fr_1.1fr]">
            <div data-reveal>
              <p className="eyebrow text-gold-deep">About us</p>
              <h2 className="display pt-5 text-[clamp(1.7rem,4vw,2.5rem)] leading-tight text-royal-deep">
                Every Christian is called to ministry.
              </h2>
            </div>
            <div className="space-y-5 leading-relaxed text-ink/80" data-reveal>
              <p>
                We believe every Christian is called to ministry and deserves to be fully equipped to
                fulfill that calling. <span className="italic text-royal">(2 Corinthians 4:1–5)</span>
              </p>
              <p>
                We are committed to perfecting and empowering people for the Kingdom, serving the
                community through faith-sharing, and growing together in God.
              </p>
              <p>
                We stand as an accessible covering and networking center in ministry, providing
                training, teaching, equipping, and resources for leaders to empower people throughout
                neighborhoods, communities, and the world.
              </p>
            </div>
          </div>

          <p className="eyebrow pt-16 text-gold-deep" data-reveal>Our core values</p>
          <div className="mt-6 grid gap-px overflow-hidden rounded-sm bg-gold/50 md:grid-cols-3" data-reveal>
            {[
              {
                name: "Christ-Centered",
                text: "We center our faith and worship on the fullest revelation of God in His Son, Jesus Christ, and acknowledge His headship over the Church.",
              },
              {
                name: "Bible-Based",
                text: "We receive the Holy Bible as the divinely inspired Word of God and the ultimate authority for daily living.",
              },
              {
                name: "Spirit-Filled",
                text: "We are committed to living under the guidance of the Holy Spirit, empowered to walk in strength, power, and wisdom through the Holy Ghost.",
              },
            ].map((v) => (
              <div key={v.name} className="bg-cream p-7 sm:p-8">
                <h3 className="seal-type text-lg tracking-[0.08em] text-royal-deep">{v.name}</h3>
                <p className="pt-3 leading-relaxed text-ink/80">{v.text}</p>
              </div>
            ))}
          </div>

          <blockquote className="mx-auto mt-14 max-w-3xl border-l-4 border-gold bg-cream px-7 py-6" data-reveal>
            <p className="eyebrow text-gold-deep">Scriptural foundation — 2 Timothy 3:16–17 (KJV)</p>
            <p className="display pt-4 text-[clamp(1.15rem,2.4vw,1.4rem)] font-normal italic leading-snug text-royal-deep">
              “All scripture is given by inspiration of God, and is profitable for doctrine, for
              reproof, for correction, for instruction in righteousness: That the man of God may be
              perfect, thoroughly furnished unto all good works.”
            </p>
          </blockquote>
        </div>
      </section>

      {/* ── Leadership, as listed on their own documents ──────────────── */}
      <section className="royal-field-flat text-white">
        <div className="mx-auto max-w-5xl px-5 py-16 text-center md:py-20" data-reveal>
          <p className="eyebrow text-gold-light/85">{church.name} · Family of Churches</p>
          <Motto size="md" className="mx-auto mt-8 max-w-xl" />
          <ul className="mt-10 grid gap-px overflow-hidden rounded-sm bg-gold/40 md:grid-cols-3">
            {leaders.map((l) => (
              <li key={l.name} className="bg-royal-ink/60 px-6 py-8">
                <p className="display text-xl leading-snug">
                  {l.bishop && <span className="pr-1.5 text-gold-light">✠</span>}
                  {l.name}
                </p>
                <p className="display pt-2 text-[15px] font-normal italic text-gold-light/90">{l.role}</p>
              </li>
            ))}
          </ul>
          <div className="mx-auto mt-12 max-w-2xl border border-gold/40 px-6 py-5 text-sm leading-relaxed text-white/80">
            <p>{standing.statement}</p>
            <p className="pt-1">
              {standing.deductible} <span className="px-1 text-gold-light/60">|</span> EIN: {standing.ein}
            </p>
          </div>
        </div>
      </section>

      <section className="bg-cream">
        <div className="mx-auto max-w-4xl px-5 py-16 text-center md:py-20" data-reveal>
          <p className="eyebrow text-gold-deep">Where we are going</p>
          <p className="display pt-6 text-[clamp(1.4rem,3.6vw,2.2rem)] leading-snug text-royal-deep">
            “Spiritual support, practical resources, and Kingdom-centered programs” — for seniors,
            families and neighbors across this city.
          </p>
          <p className="mx-auto max-w-2xl pt-6 leading-relaxed text-ink/75">
            Worship, leadership training, youth development, food assistance, prayer gatherings and
            community empowerment. It is a long list for a small fellowship, which is exactly why we
            keep building it.
          </p>
          <div className="flex flex-wrap justify-center gap-3 pt-9">
            <Link href="/give" className="btn-royal">
              Give
            </Link>
            <Link href="/contact" className="btn-royal">
              Get in touch
            </Link>
          </div>
        </div>
      </section>
    </>
  );
}
