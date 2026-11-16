import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import GreatSeal from "@/components/GreatSeal";
import PageHero from "@/components/PageHero";
import { Charge, type QuarterId } from "@/components/Seal";
import { church, pastor, quarters } from "@/lib/site";

export const metadata: Metadata = {
  title: "About",
  description:
    "HOPE Covenant Kingdom Fellowship International — a non-denominational, Bible-centred family of churches founded in Chicago in 2016, led by Bishop Mikal D. Boddie, D.Div.",
};

export default function About() {
  return (
    <>
      <PageHero
        eyebrow="About the fellowship"
        title="One Church, one doctrine, many local assemblies."
        portrait={{
          src: "/photos/bishop-embroidered.png",
          width: 760,
          height: 829,
          cutout: true,
          alt: "Bishop Mikal D. Boddie, D.Div., in a navy jacket embroidered all over in gold, with a burgundy pocket square",
        }}
      >
        <p className="max-w-2xl pt-7 text-lg leading-relaxed text-white/85">
          HOPE Covenant Kingdom Fellowship International is a non-denominational, Bible-centred
          organisation and reformation, founded in Chicago in {church.founded}. We are a family of
          churches: a network of bishops, apostles, prophets, evangelists, pastors and teachers.
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
              Bishop Boddie founded this fellowship and presides over it. Week by week he carries the
              Word himself — on the sacraments, on the order of the church, on what it costs to lead
              and to be led. He teaches it long and he teaches it plainly, and the teaching is kept
              free.
            </p>
            <blockquote className="mt-8 max-w-2xl border-l-2 border-gold pl-6">
              <p className="display text-[clamp(1.25rem,2.6vw,1.6rem)] font-normal italic leading-snug text-royal-deep">
                “Standing in Apostolic and Episcopal order, preserving sacred tradition, and rejecting
                the instability of passing fads and trends.”
              </p>
            </blockquote>
            <p className="max-w-2xl pt-8 leading-relaxed text-ink/80">
              He also sits among the leaders of the United Covenant Churches of Christ, Midwest
              Region, and pastors in other cities belong to this family of churches with him. The
              fellowship’s international office is kept by Sharnay J. Taylor, International Executive
              Secretary.
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
                shepherded house under episcopal oversight. The year at the foot — <span className="seal-type">AD MMXVI</span> — is
                when the fellowship was established. And the shield is quartered four ways:
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

      {/* ── Vision and mission, word for word from their own flyer ───── */}
      <section className="royal-field velvet text-white">
        <div className="mx-auto grid max-w-5xl gap-14 px-5 py-16 md:grid-cols-2 md:gap-12 md:py-24">
          <div data-reveal>
            <p>
              <span className="plaque seal-type px-6 text-[0.8rem] tracking-[0.14em]">What we aspire to be</span>
            </p>
            <h2 className="seal-type gold-letter pt-7 text-[clamp(2.4rem,6vw,3.6rem)] leading-none tracking-[0.03em]">
              Our Vision
            </h2>
            <p className="display pt-6 text-[clamp(1.25rem,2.6vw,1.6rem)] leading-snug text-gold-light">
              To see people saved, healed, set free, discipled, equipped, empowered and serving.
            </p>
            <p className="pt-5 leading-relaxed text-white/85">
              We are Perfecting and Empowering People for the Kingdom and serving the community
              through Faith Sharing while growing together in God.
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
              HOPE Covenant Kingdom Fellowship International is a Network of Bishops, Apostles,
              Prophets, Evangelists, Pastors, and Teachers that purpose to know God through a personal
              relationship with Jesus Christ, to equip and empower believers through impartation and
              discipleship.
            </p>
            <p className="display pt-5 text-[clamp(1.1rem,2.2vw,1.3rem)] font-normal italic leading-snug text-gold-light">
              Showing God’s love, we strive to reach a hungry world with Jesus Christ through
              obedience to the Great Commission and the Fivefold.
            </p>
          </div>
        </div>
      </section>

      <section className="bg-cream">
        <div className="mx-auto max-w-4xl px-5 py-16 text-center md:py-20" data-reveal>
          <p className="eyebrow text-gold-deep">Where we are going</p>
          <p className="display pt-6 text-[clamp(1.4rem,3.6vw,2.2rem)] leading-snug text-royal-deep">
            “Spiritual support, practical resources, and Kingdom-centred programs” — for seniors,
            families and neighbours across this city.
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
