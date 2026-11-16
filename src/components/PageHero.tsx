import Image from "next/image";

export type Portrait = {
  src: string;
  width: number;
  height: number;
  alt: string;
  /**
   * true for the Bishop's cut-out portraits (transparent PNG): he stands on the
   * velvet, feet at the foot of the header. false for a photo with its own
   * background, which gets a gold frame instead.
   */
  cutout: boolean;
};

/**
 * The crimson header used on every inner page: copy on the left, one of the
 * portraits Bishop Boddie sent standing on the right. On phones the portrait
 * sits under the copy.
 */
export default function PageHero({
  eyebrow,
  title,
  children,
  portrait,
}: {
  eyebrow: React.ReactNode;
  title: React.ReactNode;
  children?: React.ReactNode;
  portrait: Portrait;
}) {
  return (
    <section className="royal-field velvet overflow-hidden text-white">
      <div
        className={`mx-auto grid max-w-6xl gap-8 px-5 pt-14 md:grid-cols-[1.25fr_0.75fr] md:pt-20 ${
          portrait.cutout ? "items-end" : "items-center pb-14 md:pb-20"
        }`}
      >
        <div className={portrait.cutout ? "pb-2 md:pb-20" : ""}>
          <p className="eyebrow text-gold-light/90">{eyebrow}</p>
          <h1 className="display max-w-3xl pt-6 text-[clamp(2rem,6vw,3.4rem)]">{title}</h1>
          <div className="gold-rule mt-8 max-w-sm" />
          {children}
        </div>

        <div className="relative flex justify-center">
          {portrait.cutout ? (
            <>
              <div
                className="pointer-events-none absolute inset-x-0 bottom-0 mx-auto h-[75%] w-full rounded-full bg-[radial-gradient(closest-side,rgba(255,214,130,0.38),rgba(255,214,130,0))]"
                aria-hidden="true"
              />
              <Image
                src={portrait.src}
                alt={portrait.alt}
                width={portrait.width}
                height={portrait.height}
                priority
                sizes="(min-width: 768px) 340px, 64vw"
                className="relative w-[min(64vw,260px)] drop-shadow-[0_20px_36px_rgba(0,0,0,0.45)] md:w-[340px]"
              />
            </>
          ) : (
            <Image
              src={portrait.src}
              alt={portrait.alt}
              width={portrait.width}
              height={portrait.height}
              priority
              sizes="(min-width: 768px) 320px, 70vw"
              className="w-[min(70vw,280px)] rounded-sm border border-gold/60 shadow-[0_0_0_4px_rgba(31,3,5,0.5),0_0_0_5px_rgba(217,165,42,0.5),0_24px_40px_rgba(0,0,0,0.4)] md:w-[320px]"
            />
          )}
        </div>
      </div>
      {portrait.cutout && <div className="gold-rule" />}
    </section>
  );
}
