/**
 * The gold crown that heads every one of the fellowship's own graphics
 * (the "Family of Churches" cover and the leadership flyer). Five points,
 * a pearl on each, a cross on the centre point, jewels on the band.
 * Each instance needs its own `uid` for the gradient ids.
 */
export default function Crown({ uid, className = "" }: { uid: string; className?: string }) {
  const g = `crown-gold-${uid}`;
  const glow = `crown-glow-${uid}`;
  return (
    <svg viewBox="0 0 140 96" className={className} aria-hidden="true">
      <defs>
        <linearGradient id={g} x1="0" y1="0" x2="0" y2="1">
          <stop offset="0%" stopColor="#fff3c4" />
          <stop offset="35%" stopColor="#f0cf70" />
          <stop offset="70%" stopColor="#cf9a22" />
          <stop offset="100%" stopColor="#8f6610" />
        </linearGradient>
        <radialGradient id={glow} cx="50%" cy="55%" r="50%">
          <stop offset="0%" stopColor="#ffe7a3" stopOpacity="0.55" />
          <stop offset="100%" stopColor="#ffe7a3" stopOpacity="0" />
        </radialGradient>
      </defs>
      <ellipse cx="70" cy="56" rx="68" ry="40" fill={`url(#${glow})`} />
      {/* the points */}
      <path
        d="M22 74 L14 34 L40 54 L52 22 L70 46 L88 22 L100 54 L126 34 L118 74 Z"
        fill={`url(#${g})`}
        stroke="#8a6412"
        strokeWidth="1.6"
        strokeLinejoin="round"
      />
      {/* the band */}
      <rect x="20" y="70" width="100" height="14" rx="2" fill={`url(#${g})`} stroke="#8a6412" strokeWidth="1.6" />
      <path d="M22 73.5 H118" stroke="#fff3c4" strokeOpacity="0.7" strokeWidth="1" />
      {/* pearls */}
      <g fill="#fffaf0" stroke="#8a6412" strokeWidth="1.2">
        <circle cx="14" cy="32" r="4.2" />
        <circle cx="52" cy="20" r="4.2" />
        <circle cx="88" cy="20" r="4.2" />
        <circle cx="126" cy="32" r="4.2" />
      </g>
      {/* the cross on the centre point */}
      <g fill={`url(#${g})`} stroke="#8a6412" strokeWidth="1.2">
        <rect x="67" y="18" width="6" height="26" rx="1" />
        <rect x="60" y="24" width="20" height="6" rx="1" />
      </g>
      {/* jewels on the band */}
      <g stroke="#5a0a0d" strokeWidth="0.8">
        <ellipse cx="44" cy="77" rx="4" ry="3.2" fill="#b3121b" />
        <ellipse cx="70" cy="77" rx="5" ry="3.6" fill="#1f4fae" />
        <ellipse cx="96" cy="77" rx="4" ry="3.2" fill="#b3121b" />
      </g>
      <g fill="#fff3c4">
        <circle cx="31" cy="77" r="1.6" />
        <circle cx="57" cy="77" r="1.6" />
        <circle cx="83" cy="77" r="1.6" />
        <circle cx="109" cy="77" r="1.6" />
      </g>
    </svg>
  );
}
