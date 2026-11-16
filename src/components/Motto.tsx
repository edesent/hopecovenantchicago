import { motto } from "@/lib/site";

/**
 * The fellowship's motto, in its own three lines, the third in gold:
 *   “Excellence is our commitment.
 *    Integrity is our standard.
 *    The Kingdom is our assignment.”
 * `size` sets the scale; colours assume a dark (crimson) background.
 */
export default function Motto({ size = "md", className = "" }: { size?: "sm" | "md" | "lg" | "hero"; className?: string }) {
  const text =
    size === "hero"
      ? "text-[clamp(1.35rem,5.6vw,2rem)] md:text-[clamp(1.4rem,2.5vw,2rem)] [&>span]:md:whitespace-nowrap"
      : size === "lg"
        ? "text-[clamp(1.5rem,4vw,2.4rem)]"
        : size === "md"
          ? "text-[clamp(1.15rem,2.8vw,1.5rem)]"
          : "text-[clamp(1rem,2.2vw,1.15rem)]";
  return (
    <blockquote className={`display font-normal italic leading-snug ${text} ${className}`}>
      {motto.map((line, i) => (
        <span
          key={line}
          className={`block ${i === motto.length - 1 ? "gold-text not-italic font-bold" : "text-white"}`}
        >
          {i === 0 && "“"}
          {line}
          {i === motto.length - 1 && "”"}
        </span>
      ))}
    </blockquote>
  );
}
