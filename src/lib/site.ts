/**
 * Everything a pastor or volunteer is likely to change lives in this file:
 * service times, special events, giving, address and links.
 *
 * Sources: TODO(demo) list where each fact came from (their Facebook page,
 * their old site, the grant request form, Google Maps, a news article...).
 */

// TODO(demo) the demo's own subdomain, e.g. https://gracechapel.elijahdesent.com
export const siteUrl = process.env.NEXT_PUBLIC_SITE_URL || "https://SLUG.elijahdesent.com";

/**
 * Preview hosts stay out of search. Once NEXT_PUBLIC_SITE_URL is set to the
 * church's real domain this turns off by itself.
 */
export const isDemo = /(\.dfd\.llc|\.vercel\.app|\.elijahdesent\.com)$/.test(new URL(siteUrl).hostname);

/** The church's own time zone. Every "today" and "next service" is worked out here. */
export const TZ = "America/New_York"; // TODO(demo)

export const church = {
  name: "TODO(demo) full name, exactly as the church writes it",
  short: "TODO(demo) short name",
  street: "",
  streetNumber: "",
  city: "",
  stateCode: "",
  state: "",
  zip: "",
  /** Their own words: a line from their Facebook intro, sign, flyer or old site. */
  welcome: "",
  /**
   * The church phone, base64'd so it never sits in the HTML for scrapers:
   * `printf 5551234567 | base64`. Rendered by components/Phone.tsx.
   * Never type the digits into a page.
   */
  phoneB64: "",
  mapsUrl: "",
  facebook: "",
  youtube: "",
};

export const pastor = {
  name: "",
  title: "Pastor",
  /** Honorific the church itself uses (Rev., Bishop, Apostle, Elder, Dr.). */
  styled: "",
};

/**
 * The regular week. `nth` limits a service to certain weeks of the month
 * (e.g. worship on the first and third Sundays only).
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

export const events: SpecialEvent[] = [];

/**
 * Online giving. Put their real Cash App / Givelify / Tithe.ly / PayPal link
 * in `url` and the Give page shows a button. Leave `url` empty and the page
 * says how to give in person and offers to help set one up.
 */
export const giving = {
  provider: "",
  url: "",
  label: "Give online",
};

/** Keep labels short: long uppercase labels wrap and break the header on phones. */
export const nav: { href: string; label: string; short: string }[] = [];
