import type { Metadata } from "next";
import PageHero from "@/components/PageHero";
import Phone from "@/components/Phone";
import { ContactForm, PrayerForm } from "@/components/Forms";
import { church, pastor } from "@/lib/site";

export const metadata: Metadata = {
  title: "Contact",
  description:
    "Send a prayer request or a message to HOPE Covenant Kingdom Fellowship International, Chicago.",
};

export default function Contact() {
  return (
    <>
      <PageHero
        eyebrow="Contact"
        title="Say something. Somebody here will read it."
        portrait={{ src: "/photos/bishop-teal-suit.png", width: 525, height: 640, cutout: true, alt: "Bishop Mikal D. Boddie, D.Div., in a teal double-breasted suit with gold buttons" }}
      >
          <p className="max-w-2xl pt-7 text-lg leading-relaxed text-white/85">
            This is a small fellowship, so messages do not disappear into a queue. They reach{" "}
            {pastor.title} {pastor.name}.
          </p>
          <p className="time pt-6 text-lg">
            <Phone className="text-gold-light underline decoration-gold/60 underline-offset-4" />
            <span className="px-3 text-white/40">·</span>
            <Phone
              text
              label="Text us"
              className="text-gold-light underline decoration-gold/60 underline-offset-4"
            />
          </p>
      </PageHero>

      <section className="bg-cream">
        <div className="mx-auto max-w-3xl px-5 py-16 md:py-20" data-reveal>
          <p className="eyebrow text-gold-deep">Prayer</p>
          <h2 className="display pt-4 text-[clamp(1.6rem,4vw,2.2rem)] text-royal-deep">
            Let us carry it with you.
          </h2>
          <p className="pt-4 leading-relaxed text-ink/75">
            Nothing you write here is posted anywhere. Leave your name off if you would rather.
          </p>
          <PrayerForm />
        </div>
      </section>

      <section className="bg-paper">
        <div className="mx-auto max-w-3xl px-5 py-16 md:py-20" data-reveal>
          <p className="eyebrow text-gold-deep">Everything else</p>
          <h2 className="display pt-4 text-[clamp(1.6rem,4vw,2.2rem)] text-royal-deep">
            Courses, visiting, giving — or your church joining the fellowship.
          </h2>
          <ContactForm />
        </div>
      </section>

      <section className="royal-field-flat text-white">
        <div className="mx-auto max-w-3xl px-5 py-14">
          <p className="eyebrow text-gold-light/85">Also here</p>
          <ul className="flex flex-wrap gap-x-10 gap-y-3 pt-5">
            <li>
              <a href={church.youtube} target="_blank" rel="noreferrer" className="underline decoration-gold/60 underline-offset-4">
                YouTube — {church.hashtag}
              </a>
            </li>
            <li>
              <a href={church.facebook} target="_blank" rel="noreferrer" className="underline decoration-gold/60 underline-offset-4">
                Facebook page
              </a>
            </li>
            <li>
              <a href={church.facebookGroup} target="_blank" rel="noreferrer" className="underline decoration-gold/60 underline-offset-4">
                Facebook group
              </a>
            </li>
          </ul>
          <p className="pt-8 text-sm text-white/65">
            {church.streetNumber} {church.street}, {church.city}, {church.stateCode} {church.zip}
          </p>
        </div>
      </section>
    </>
  );
}
