/**
 * The Great Seal of HOPE Covenant Kingdom Fellowship, redrawn.
 *
 * Their own seal (it is on their Facebook page, their YouTube banner and their
 * flyers) is a pointed oval carrying the legend "THE GREAT SEAL OF HOPE COVENANT
 * KINGDOM FELLOWSHIP" and the year AD MMXVI, with a mitre over a crossed key and
 * crosier, above a shield quartered with an open book, a descending dove, grapes
 * on the vine and the globe. This is that drawing, rebuilt as clean SVG in the
 * same colours — same concept, same charges, sharp at any size.
 *
 * Every instance needs its own `uid`: two copies of an inline SVG on one page
 * cannot share gradient ids.
 */

const TINCTURE = {
  word: "#1b3f8f",
  spirit: "#f3ead3",
  covenant: "#1d6b3b",
  world: "#a8221f",
} as const;

export type QuarterId = keyof typeof TINCTURE;

/** The four charges, drawn on a 120×120 field so they can be reused at any size. */
export function Charge({ id, className = "" }: { id: QuarterId; className?: string }) {
  const gold = "#f1cf6f";
  return (
    <svg viewBox="0 0 120 120" className={className} aria-hidden="true">
      {id === "word" && (
        <g>
          {/* An open book: two pages meeting at the spine. */}
          <path
            d="M60 36 C52 30 38 27 24 29 L24 85 C38 83 52 86 60 92 Z"
            fill="#ffffff"
            stroke={gold}
            strokeWidth="2.5"
            strokeLinejoin="round"
          />
          <path
            d="M60 36 C68 30 82 27 96 29 L96 85 C82 83 68 86 60 92 Z"
            fill="#ffffff"
            stroke={gold}
            strokeWidth="2.5"
            strokeLinejoin="round"
          />
          <g stroke="#9bb0d6" strokeWidth="2" strokeLinecap="round">
            <path d="M33 44h18M33 54h18M33 64h18" />
            <path d="M69 44h18M69 54h18M69 64h18" />
          </g>
          <path d="M60 36v56" stroke={gold} strokeWidth="2.5" strokeLinecap="round" />
        </g>
      )}

      {id === "spirit" && (
        <g fill="#ffffff" stroke="#8a6412" strokeWidth="2.4" strokeLinejoin="round">
          {/* A dove descending: wings spread, head below. */}
          <path d="M56 50 C40 44 21 30 8 11 C33 15 50 27 61 42 Z" />
          <path d="M64 50 C80 44 99 30 112 11 C87 15 70 27 59 42 Z" />
          <path d="M60 34 C72 43 76 61 72 79 C69 91 51 91 48 79 C44 61 48 43 60 34 Z" />
          <circle cx="60" cy="88" r="11" />
          <path d="M60 97 l9 13 l-18 0 Z" fill="#d9a52a" />
        </g>
      )}

      {id === "covenant" && (
        <g fill={gold} stroke="#8a6412" strokeWidth="1.2">
          {/* Grapes on the vine. */}
          <path d="M60 30 C66 24 76 22 84 26" fill="none" stroke={gold} strokeWidth="3.5" strokeLinecap="round" />
          <path
            d="M84 26 C94 22 102 28 98 38 C94 46 82 46 78 38 C76 32 79 27 84 26 Z"
            fill="#2f8a4e"
            stroke="#1d6b3b"
          />
          <circle cx="44" cy="46" r="9" />
          <circle cx="62" cy="46" r="9" />
          <circle cx="53" cy="61" r="9" />
          <circle cx="71" cy="61" r="9" />
          <circle cx="36" cy="61" r="9" />
          <circle cx="62" cy="76" r="9" />
          <circle cx="44" cy="76" r="9" />
          <circle cx="53" cy="91" r="9" />
        </g>
      )}

      {id === "world" && (
        <g>
          {/* The globe, surmounted by a cross. */}
          <path d="M60 10v18M52 18h16" stroke={gold} strokeWidth="5" strokeLinecap="round" />
          <circle cx="60" cy="68" r="32" fill={gold} stroke="#8a6412" strokeWidth="2" />
          <g fill="none" stroke="#8a6412" strokeWidth="2">
            <path d="M28 68h64" />
            <ellipse cx="60" cy="68" rx="14" ry="32" />
            <path d="M33 52 C45 58 75 58 87 52" />
            <path d="M33 84 C45 78 75 78 87 84" />
          </g>
        </g>
      )}
    </svg>
  );
}

/** The quartered shield on its own — the small mark used in the header and footer. */
export function Shield({ uid, className = "" }: { uid: string; className?: string }) {
  const clip = `shield-${uid}`;
  const gold = `shieldgold-${uid}`;
  const outline = "M7 7 H153 V86 C153 127 120 151 80 163 C40 151 7 127 7 86 Z";
  return (
    <svg viewBox="0 0 160 170" className={className} aria-hidden="true">
      <defs>
        <linearGradient id={gold} x1="0" y1="0" x2="0" y2="1">
          <stop offset="0%" stopColor="#f6e09b" />
          <stop offset="48%" stopColor="#d9a52a" />
          <stop offset="100%" stopColor="#8f6610" />
        </linearGradient>
        <clipPath id={clip}>
          <path d={outline} />
        </clipPath>
      </defs>
      <g clipPath={`url(#${clip})`}>
        <rect x="0" y="0" width="80" height="85" fill={TINCTURE.word} />
        <rect x="80" y="0" width="80" height="85" fill={TINCTURE.spirit} />
        <rect x="0" y="85" width="80" height="85" fill={TINCTURE.covenant} />
        <rect x="80" y="85" width="80" height="85" fill={TINCTURE.world} />
        <svg x="18" y="18" width="46" height="46" viewBox="0 0 120 120">
          <Charge id="word" />
        </svg>
        <svg x="96" y="18" width="46" height="46" viewBox="0 0 120 120">
          <Charge id="spirit" />
        </svg>
        <svg x="18" y="92" width="46" height="46" viewBox="0 0 120 120">
          <Charge id="covenant" />
        </svg>
        <svg x="96" y="92" width="46" height="46" viewBox="0 0 120 120">
          <Charge id="world" />
        </svg>
        <path d="M80 0 V170 M0 85 H160" stroke={`url(#${gold})`} strokeWidth="4" />
      </g>
      <path d={outline} fill="none" stroke={`url(#${gold})`} strokeWidth="6" strokeLinejoin="round" />
    </svg>
  );
}

/** The full Great Seal. */
export default function Seal({ uid, className = "" }: { uid: string; className?: string }) {
  const gold = `sg-${uid}`;
  const clip = `sc-${uid}`;
  const band = `sb-${uid}`;
  return (
    <svg viewBox="0 0 360 480" className={className} role="img" aria-label="The Great Seal of HOPE Covenant Kingdom Fellowship, AD MMXVI">
      <defs>
        <linearGradient id={gold} x1="0" y1="0" x2="0" y2="1">
          <stop offset="0%" stopColor="#fdf2c6" />
          <stop offset="28%" stopColor="#f0cf70" />
          <stop offset="58%" stopColor="#cf9a22" />
          <stop offset="100%" stopColor="#8f6610" />
        </linearGradient>
        <clipPath id={clip}>
          <path d="M180 44 C272 112 314 180 314 240 C314 300 272 368 180 436 C88 368 46 300 46 240 C46 180 88 112 180 44 Z" />
        </clipPath>
        {/*
         * Baseline for the legend: up the left side, over the top, down the right.
         * The two control points either side of the apex share the apex's y, so the
         * tangent is horizontal there — otherwise the corner opens a gap mid-word.
         */}
        <path id={band} d="M30 338 C14 250 62 26 180 26 C298 26 346 250 330 338" fill="none" />
      </defs>

      {/* Outer rim and the white band that carries the legend. */}
      <path
        d="M180 6 C290 86 354 168 354 240 C354 312 290 394 180 474 C70 394 6 312 6 240 C6 168 70 86 180 6 Z"
        fill="#ffffff"
        stroke="#141414"
        strokeWidth="5"
      />

      <text
        fill="#141414"
        fontSize="14"
        className="seal-type"
        style={{ letterSpacing: "0.04em" }}
      >
        <textPath href={`#${band}`} startOffset="50%" textAnchor="middle">
          THE GREAT SEAL OF HOPE COVENANT KINGDOM FELLOWSHIP
        </textPath>
      </text>

      {/* The black field. */}
      <path
        d="M180 44 C272 112 314 180 314 240 C314 300 272 368 180 436 C88 368 46 300 46 240 C46 180 88 112 180 44 Z"
        fill="#0d0d12"
        stroke={`url(#${gold})`}
        strokeWidth="3"
      />

      <g clipPath={`url(#${clip})`}>
        {/* Key, dexter, and crosier, sinister — crossed behind the mitre. */}
        <g stroke={`url(#${gold})`} fill="none" strokeLinecap="round">
          <circle cx="104" cy="120" r="14" strokeWidth="7" />
          <path d="M112 133 L152 218" strokeWidth="7" />
          <path d="M131 174 l-17 8 M140 192 l-17 8" strokeWidth="6" />

          <path d="M208 218 L246 132" strokeWidth="7" />
          <path d="M246 132 C257 108 239 92 225 101 C214 108 215 123 227 127" strokeWidth="7" />
        </g>

        {/* Lappets hanging from the mitre, behind the shield. */}
        <g fill={`url(#${gold})`}>
          <rect x="152" y="206" width="12" height="54" rx="2" />
          <rect x="196" y="206" width="12" height="54" rx="2" />
        </g>

        {/* The mitre. */}
        <g>
          <path
            d="M180 92 C208 126 224 166 224 200 L224 212 L136 212 L136 200 C136 166 152 126 180 92 Z"
            fill={`url(#${gold})`}
            stroke="#8f6610"
            strokeWidth="2"
            strokeLinejoin="round"
          />
          <path d="M136 196 H224" stroke="#8f6610" strokeWidth="3" />
          <path d="M180 100 V212" stroke="#8f6610" strokeWidth="3" />
          <circle cx="180" cy="130" r="6" fill="#4a1070" />
          <circle cx="180" cy="152" r="6" fill="#8e1726" />
          <circle cx="180" cy="174" r="6" fill="#4a1070" />
          <path d="M180 66 V90 M170 76 H190" stroke={`url(#${gold})`} strokeWidth="5" strokeLinecap="round" />
        </g>

        {/* The quartered shield. */}
        <g>
          <defs>
            <clipPath id={`sh-${uid}`}>
              <path d="M104 214 H256 V296 C256 338 222 364 180 378 C138 364 104 338 104 296 Z" />
            </clipPath>
          </defs>
          <g clipPath={`url(#sh-${uid})`}>
            <rect x="104" y="214" width="76" height="82" fill={TINCTURE.word} />
            <rect x="180" y="214" width="76" height="82" fill={TINCTURE.spirit} />
            <rect x="104" y="296" width="76" height="82" fill={TINCTURE.covenant} />
            <rect x="180" y="296" width="76" height="82" fill={TINCTURE.world} />

            <svg x="118" y="224" width="50" height="50" viewBox="0 0 120 120">
              <Charge id="word" />
            </svg>
            <svg x="194" y="224" width="50" height="50" viewBox="0 0 120 120">
              <Charge id="spirit" />
            </svg>
            <svg x="118" y="300" width="50" height="50" viewBox="0 0 120 120">
              <Charge id="covenant" />
            </svg>
            <svg x="194" y="300" width="50" height="50" viewBox="0 0 120 120">
              <Charge id="world" />
            </svg>

            <path d="M180 214 V378 M104 296 H256" stroke={`url(#${gold})`} strokeWidth="3.5" />
          </g>
          <path
            d="M104 214 H256 V296 C256 338 222 364 180 378 C138 364 104 338 104 296 Z"
            fill="none"
            stroke={`url(#${gold})`}
            strokeWidth="5"
            strokeLinejoin="round"
          />
        </g>

        <text
          x="180"
          y="400"
          textAnchor="middle"
          fill="#f0cf70"
          fontSize="13"
          className="seal-type"
          style={{ letterSpacing: "0.06em" }}
        >
          AD MMXVI
        </text>
      </g>
    </svg>
  );
}
