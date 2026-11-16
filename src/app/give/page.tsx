import type { Metadata } from "next";
import Link from "next/link";
import Phone from "@/components/Phone";
import { Charge } from "@/components/Seal";
import { church, giving } from "@/lib/site";

export const metadata: Metadata = {
  title: "Give",
  description:
    "How to give to HOPE Covenant Kingdom Fellowship International, Chicago — a 501(c)(3) religious and charitable organisation.",
};

export default function Give() {
  return (
    <>
      <section className="royal-field velvet text-white">
        <div className="mx-auto max-w-5xl px-5 py-16 md:py-24">
          <p className="eyebrow text-gold-light/90">Give</p>
          <h1 className="display max-w-3xl pt-6 text-[clamp(2rem,6vw,3.4rem)]">
            Sow into the Kingdom.
          </h1>
          <div className="gold-rule mt-8 max-w-sm" />
          <p className="max-w-2xl pt-7 text-lg leading-relaxed text-white/85">
            Every offering goes into the same three things: keeping the teaching free, keeping the
            courses running, and reaching the neighbourhood with real help.
          </p>
        </div>
      </section>

      <section className="bg-paper">
        <div className="mx-auto max-w-3xl px-5 py-16 md:py-20">
          <div className="flex items-start gap-6 border-l-4 border-gold pl-6 sm:pl-8" data-reveal>
            <Charge id="covenant" className="hidden h-16 w-16 shrink-0 rounded-sm bg-royal-deep p-2 sm:block" />
            <div>
              <p className="eyebrow text-gold-deep">{giving.provider}</p>
              <h2 className="display pt-3 text-[clamp(1.6rem,4vw,2.2rem)] text-royal-deep">
                We receive offerings by {giving.provider}.
              </h2>
              {giving.zelle ? (
                <p className="time pt-5 text-xl font-semibold text-royal">{giving.zelle}</p>
              ) : (
                <p className="pt-5 leading-relaxed text-ink/80">
                  Call or write and we will send you the {giving.provider} details, or you can give
                  by hand when we gather.
                </p>
              )}
              <p className="time pt-5 text-lg">
                <Phone className="font-semibold text-royal underline decoration-gold underline-offset-4" />
              </p>
              <div className="flex flex-wrap gap-3 pt-7">
                <Link href="/contact" className="btn-royal">
                  Ask for the details
                </Link>
                {giving.url && (
                  <a href={giving.url} target="_blank" rel="noreferrer" className="btn-royal">
                    {giving.label}
                  </a>
                )}
              </div>
            </div>
          </div>

          <div className="mt-14 border-t border-royal/15 pt-10" data-reveal>
            <h2 className="display text-2xl text-royal-deep">Giving online</h2>
            <p className="pt-4 leading-relaxed text-ink/80">
              {giving.provider} works well for people who already bank with it. If the fellowship
              would also like a giving page that anyone can use from a phone — Cash App, Givelify or
              Tithe.ly — we can set one up and link it here. Nothing changes about how {giving.provider}{" "}
              works today.
            </p>
          </div>

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
                <span className="font-semibold text-royal-deep">The neighbourhood.</span> Food
                assistance, prayer gatherings, youth and senior outreach on the South Side.
              </li>
            </ul>
            <p className="time pt-8 text-sm text-ink/60">
              HOPE Covenant Kingdom Fellowship, Inc. is a 501(c)(3) religious and charitable
              organisation. {church.city}, {church.state}.
            </p>
          </div>
        </div>
      </section>
    </>
  );
}
