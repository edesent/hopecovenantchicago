/**
 * Everything a pastor or volunteer is likely to change lives in this file:
 * service times, special events, giving, address and links.
 *
 * Sources for HOPE Covenant Kingdom Fellowship International:
 *  - their YouTube channel youtube.com/@HopeCKF — the banner (the Great Seal, the
 *    wordmark, #HOPECKFONLINE), the channel description (vision and mission), and
 *    65 teachings with their titles and scripture references
 *  - their own course flyer for The Sacraments (Tuesdays at 6:00 pm, began Nov 10)
 *    which also carries the motto
 *  - their Facebook page facebook.com/HopeCKF and group facebook.com/groups/hopeckf
 *  - the Google Maps listing for HOPE COVENANT KINGDOM FELLOWSHIP INC.
 *  - uccconline.org (United Covenant Churches of Christ) leaders list
 *  - the Small Church Grant request form, November 2026
 */

export const siteUrl = process.env.NEXT_PUBLIC_SITE_URL || "https://hopecovenantchicago.elijahdesent.com";

/**
 * Preview hosts stay out of search. Once NEXT_PUBLIC_SITE_URL is set to the
 * church's real domain this turns off by itself.
 */
export const isDemo = /(\.dfd\.llc|\.vercel\.app|\.elijahdesent\.com)$/.test(new URL(siteUrl).hostname);

/** The church's own time zone. Every "today" and "next service" is worked out here. */
export const TZ = "America/Chicago";

export const church = {
  name: "HOPE Covenant Kingdom Fellowship International",
  short: "HOPE CKF",
  street: "E 43rd St",
  streetNumber: "740",
  city: "Chicago",
  stateCode: "IL",
  state: "Illinois",
  zip: "60653",
  /** Their own words — the motto printed on their course flyers. */
  welcome: "Excellence is our commitment. Integrity is our standard. The Kingdom is our assignment.",
  /**
   * The church phone, base64'd so it never sits in the HTML for scrapers:
   * `printf 5551234567 | base64`. Rendered by components/Phone.tsx.
   * Never type the digits into a page.
   */
  phoneB64: "NzczNTY5NjU0Ng==",
  mapsUrl: "https://www.google.com/maps/search/?api=1&query=740+E+43rd+St+Chicago+IL+60653",
  facebook: "https://www.facebook.com/HopeCKF",
  facebookGroup: "https://www.facebook.com/groups/hopeckf",
  youtube: "https://www.youtube.com/@HopeCKF",
  /** The year on the Great Seal: AD MMXVI. */
  founded: "2016",
  hashtag: "#HOPECKFONLINE",
};

export const pastor = {
  name: "Mikal D. Boddie",
  title: "Bishop",
  /** Honorific the church itself uses, on every flyer and in the UCCC directory. */
  styled: "Bishop Mikal D. Boddie, D.Div.",
  role: "Establishmentarian and Presiding Prelate",
};

/** Their own name for the weekly teaching broadcast, printed on every sermon flyer. */
export const broadcast = "The Hour of Empowerment";

/** Their vision statement, word for word, from the YouTube channel description. */
export const vision = ["saved", "healed", "set free", "discipled", "equipped", "empowered", "serving"];

/**
 * The regular week. `nth` limits a service to certain weeks of the month
 * (e.g. worship on the first and third Sundays only).
 *
 * Deliberately empty: no Sunday worship time is published anywhere online, and
 * guessing one would be worse than leaving it out. Add it here and it appears
 * on the home page, the Visit page and in "what's next" automatically. Example:
 *   { id: "worship", name: "Sunday Worship", dow: 0, time24: "11:00",
 *     rule: "Every Sunday", note: "Streamed live on Facebook." }
 */
export type Service = {
  id: string;
  name: string;
  /** 0 = Sunday … 6 = Saturday */
  dow: number;
  time24: string;
  nth?: number[];
  rule: string;
  note: string;
};

export const services: Service[] = [];

/**
 * Special events. Give each one a start date and an `endsOn` date; it drops
 * off the site by itself the day after it ends (the layout re-renders hourly).
 * Dates are YYYY-MM-DD.
 */
export type SpecialEvent = {
  id: string;
  title: string;
  start: string;
  endsOn: string;
  /** Shown instead of a time. Leave out when `time24` is set. */
  when?: string;
  time24?: string;
  summary: string;
  href?: string;
};

export const events: SpecialEvent[] = [
  {
    id: "sacraments",
    title: "The Sacraments — Holy Communion • The Lord’s Supper",
    start: "2026-11-10",
    // Six Tuesdays from Nov 10: Nov 10, 17, 24, Dec 1, 8, 15. Off the site on Dec 16.
    endsOn: "2026-12-15",
    when: "Tuesdays at 6:00 pm",
    time24: "18:00",
    summary:
      "A six-week virtual course taught by Bishop Mikal D. Boddie, D.Div. Began Tuesday, November 10.",
    href: "/teaching",
  },
];

/**
 * Online giving. Put their real Cash App / Givelify / Tithe.ly / PayPal link
 * in `url` and the Give page shows a button. Leave `url` empty and the page
 * says how to give and offers to help set one up.
 *
 * They give by Zelle today, but no Zelle handle is published anywhere, so
 * nothing is invented here. Put the Zelle email or phone in `zelle` and the
 * Give page prints it.
 */
export const giving = {
  provider: "Zelle",
  url: "",
  label: "Give online",
  zelle: "",
};

/** Keep labels short: long uppercase labels wrap and break the header on phones. */
export const nav: { href: string; label: string; short: string }[] = [
  { href: "/teaching", label: "Teaching", short: "Teaching" },
  { href: "/visit", label: "Gather With Us", short: "Gather" },
  { href: "/about", label: "About", short: "About" },
  { href: "/give", label: "Give", short: "Give" },
  { href: "/contact", label: "Contact", short: "Contact" },
];

/**
 * The four quarters of the shield on their Great Seal, and what each one
 * stands for in this fellowship. This is the spine of the home page.
 */
export const quarters = [
  {
    id: "word",
    charge: "The open Book",
    title: "The Word",
    blurb:
      "A Bible-centred Reformation. Hour-long teaching, chapter and verse, every week — and a seminary classroom behind it.",
    href: "/teaching",
  },
  {
    id: "spirit",
    charge: "The descending Dove",
    title: "The Spirit",
    blurb:
      "Bishops, apostles, prophets, evangelists, pastors and teachers, equipping believers through impartation and discipleship.",
    href: "/about",
  },
  {
    id: "covenant",
    charge: "The Vine",
    title: "The Covenant",
    blurb:
      "Covenant life at the Lord’s table. Right now the whole fellowship is six weeks deep in The Sacraments.",
    href: "/teaching",
  },
  {
    id: "world",
    charge: "The Globe",
    title: "The World",
    blurb:
      "International is in the name. A family of churches reaching seniors, families and neighbours across Chicago and beyond.",
    href: "/visit",
  },
];
