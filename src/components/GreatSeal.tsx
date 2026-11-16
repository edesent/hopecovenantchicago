import Image from "next/image";

/**
 * The fellowship's own episcopal seal, as Bishop Boddie sent it (Nov 16, 2026,
 * "PLEASE USE OUR … EPISCOPAL SEAL"). This is the full-resolution copy (1254px on
 * black), cut out of its background.
 * Use this everywhere the seal appears. Do not redraw it.
 */
export default function GreatSeal({
  className = "",
  sizes = "240px",
  priority = false,
  decorative = false,
}: {
  className?: string;
  /** The rendered width, for next/image to pick a file size. */
  sizes?: string;
  priority?: boolean;
  /** true when the fellowship's name is already printed beside it. */
  decorative?: boolean;
}) {
  return (
    <Image
      src="/seal.png"
      width={809}
      height={1154}
      sizes={sizes}
      priority={priority}
      alt={
        decorative
          ? ""
          : "The Great Seal of HOPE Covenant Kingdom Fellowship, AD MMXVI: the Chi-Rho over a mitre, a crossed key and crosier, and a shield quartered with an open Bible, a dove, grapes on the vine and the globe"
      }
      className={className}
    />
  );
}
