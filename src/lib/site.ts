/**
 * Everything a pastor or volunteer is likely to change lives in this file:
 * service times, special events, giving, address and links.
 *
 * Sources for HOPE Covenant Kingdom Fellowship International:
 *  - their YouTube channel youtube.com/@HopeCKF — the banner (the Great Seal, the
 *    wordmark, #HOPECKFONLINE), the channel description (vision and mission), and
 *    65 teachings with their titles and scripture references
 *  - their own course flyers for The Sacraments (Tuesdays at 6:00 pm, began Nov 10),
 *    including the Nov 17 Sacraments II / Holy Communion flyer
 *  - their Facebook page facebook.com/HopeCKF and group facebook.com/groups/hopeckf
 *  - the Google Maps listing for HOPE COVENANT KINGDOM FELLOWSHIP INC.
 *  - the Small Church Grant request form, November 2026
 *  - documents Bishop Boddie sent on Nov 16, 2026: the formal "Vision and Mission"
 *    statement, the "History of HCKF" biography, the Illinois certificate of good
 *    standing (incorporated Oct 13, 2016), the IRS 501(c)(3) determination letter
 *    (effective Aug 15, 2025) and EIN notice (82-4217790, Jan 30, 2018), and the
 *    Illinois sales tax exemption certificate. The documents themselves are NOT
 *    published: they print a home address and an exemption number.
 *
 * Do NOT use anything from uccconline.org (United Covenant Churches of Christ):
 * no text, photos, logos or affiliation. The Bishop asked for this on Nov 16, 2026.
 * Exceptions, each one sent by him and approved by Eli: his UCCC Education Department –
 * Illinois flyer on /teaching; the Nov 29, 2026 Midwest Regional Gathering flyer; and
 * the Nov 29, 2026 "ELEVATION" Education Department Illinois Liaisons Meet & Greet
 * flyer, sent 17 Nov 2026 with Eli's go-ahead to add it. The last two are `events`
 * entries and drop off after the date. Nothing else.
 */

/** Live on its own domain since Nov 16, 2026 (www is the main address; the bare domain and the old demo address redirect here). */
export const siteUrl = process.env.NEXT_PUBLIC_SITE_URL || "https://www.hopeckf-international.org";

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
  /** Official fellowship email supplied by Bishop Boddie on Nov 17, 2026. */
  email: "hopeckf@gmail.com",
  mapsUrl: "https://www.google.com/maps/search/?api=1&query=740+E+43rd+St+Chicago+IL+60653",
  facebook: "https://www.facebook.com/HopeCKF",
  facebookGroup: "https://www.facebook.com/groups/hopeckf",
  /** HOPE COVENANT MEDIA MARKETING MINISTRY — the group on their grant form. */
  facebookMedia: "https://www.facebook.com/groups/hopeckfmediamministry",
  youtube: "https://www.youtube.com/@HopeCKF",
  /**
   * Off until the Bishop confirms where the fellowship meets. The only street
   * address on record (from the grant form) is 740 E 43rd St Apt. 1410, a
   * residence, so the site says "South Side of Chicago, call ahead" instead of
   * printing it with a map. Set true once a meeting place is confirmed.
   */
  showStreet: false,
  /** "Established in January of 2018" — their own Vision and Mission statement. */
  founded: "2018-01",
  /** Incorporated in Illinois as a not-for-profit, Oct 13, 2016: the AD MMXVI on the seal. */
  incorporated: "2016-10-13",
  /** The line under the title on their formal Vision and Mission statement. */
  tagline: "Kingdom Growth • Covenant Life",
  hashtag: "#HOPECKFONLINE",
};

export const pastor = {
  name: "Mikal D. Boddie",
  title: "Bishop",
  /** Honorific the church itself uses on every flyer and on its own documents. */
  styled: "Bishop Mikal D. Boddie, D.Div.",
  role: "Establishmentarian and Presiding Prelate",
  /** From their "History of HCKF" document. */
  honors: [
    { when: "Sept 2019", what: "Honorary Doctorate of Divinity" },
    { when: "March 2023", what: "Certificate in Chaplaincy, Chicago Chaplain Division" },
    { when: "Aug 2024", what: "Honorary Doctorate of Religious Education" },
  ],
};

/**
 * Leadership exactly as listed at the foot of their Vision and Mission statement
 * and their History document. (An older flyer and a pasted draft also name
 * Sister Sharnay J. Taylor, International Executive Secretary; both formal
 * documents leave her off, so she is not listed until they confirm.)
 */
export const leaders = [
  { name: "Bishop Mikal D. Boddie, D.Div.", role: "Establishmentarian and Presiding Prelate", bishop: true },
  { name: "Bishop Thabugha Moses", role: "Presiding Prelate of the Uganda Eastern Africa Jurisdiction", bishop: true },
  { name: "Pastor Ben Bakal", role: "International Secretary General", bishop: false },
];

/**
 * Their own wording from the Vision and Mission statement. The EIN is the one on
 * both IRS letters (their History document has a typo, 82-4217990).
 * Never publish the Illinois sales tax exemption number.
 */
export const standing = {
  statement:
    "Hope Covenant Kingdom Fellowship International is a Religious and Charitable 501(c)(3) Organization.",
  deductible: "Contributions are tax-deductible as provided by law.",
  ein: "82-4217790",
  irsEffective: "August 15, 2025",
  ilFile: "7097-089-9",
};

/**
 * The motto, in the Bishop's own three lines (Nov 16, 2026: "use this across the
 * site"). Rendered by components/Motto.tsx in the home hero, the footer of every
 * page, and on About. Keep his wording and capitals exactly.
 */
export const motto = [
  "Excellence is our commitment.",
  "Integrity is our standard.",
  "The Kingdom is our assignment.",
];

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
  /** "course" shows on /teaching with the Zoom details; "event" only on / and /visit. */
  kind?: "course" | "event";
  /** Where it is, when it isn't with us. */
  place?: string;
  /** Their own flyer for it, in public/photos. */
  flyer?: { src: string; width: number; height: number; alt: string };
  /** A number to call to register, base64'd like the church phone. */
  registerB64?: string;
};

export const events: SpecialEvent[] = [
  {
    id: "sacraments",
    title: "Apostolic Summit 2026 — The Sacraments",
    start: "2026-11-10",
    // Six Tuesdays from Nov 10: Nov 10, 17, 24, Dec 1, 8, 15. Off the site on Dec 16.
    endsOn: "2026-12-15",
    when: "Tuesdays at 6:00 pm",
    time24: "18:00",
    summary:
      "A six-week virtual course taught by Bishop Mikal D. Boddie, D.Div. Tuesdays at 6:00 pm via Facebook Live. Week 2 covers Baptism, with the replay available on YouTube.",
    href: "/teaching",
    kind: "course",
    flyer: {
      src: "/photos/sacraments-week-2-communion-2026.webp",
      width: 1670,
      height: 941,
      alt: "The Sacraments II: Holy Communion and the Lord's Supper, Tuesday, November 17 at 6:00 pm. Six-week virtual course from HOPE Covenant Kingdom Fellowship International, taught by Bishop Mikal D. Boddie, D.Div.",
    },
    /** The registration line printed on their own course flyer (773.595.2500), base64'd. */
    registerB64: "NzczNTk1MjUwMA==",
  },
  {
    // The Bishop sent this UCCC flyer and Eli approved putting it on (Nov 16, 2026).
    id: "uccc-midwest-gathering",
    title: "United Covenant Churches of Christ — Midwest Regional Gathering Service",
    start: "2026-11-29",
    endsOn: "2026-11-29",
    when: "Sunday, Nov 29 · 5:00 pm",
    time24: "17:00",
    summary: "Honoring Our Leaders. Strengthening Our Region. Advancing God’s Kingdom.",
    place: "Vernon Baptist Church, 10201 S. Ewing Ave., Chicago, IL 60617",
    href: "/visit",
    kind: "event",
    flyer: {
      src: "/photos/uccc-midwest-gathering-2026.png",
      width: 1254,
      height: 1254,
      alt: "Save the Date: United Covenant Churches of Christ Midwest Regional Gathering Service, Sunday, November 29, 2026, 5:00 p.m., Vernon Baptist Church, 10201 S. Ewing Ave., Chicago, IL 60617. Bishops Warner J. Pitts, Anthony Goffin, H. Levi McClendon III, Andrew Gibson and G. E. Livingston.",
    },
  },
  {
    // The Bishop sent this UCCC flyer directly to Eli to add (17 Nov 2026).
    id: "uccc-education-illinois-meet-greet",
    title: "ELEVATION — Department of Education, Illinois Liaisons Meet & Greet",
    start: "2026-11-29",
    endsOn: "2026-11-29",
    when: "Sunday, Nov 29 · 3:00–4:00 pm",
    time24: "15:00",
    summary: "United Covenant Churches of Christ, Midwest Regional Gathering. Before the evening service, the Department of Education's Illinois liaisons meet and greet.",
    place: "Vernon Church, 10201 S. Ewing Ave., Chicago, IL 60617",
    href: "/visit",
    kind: "event",
    flyer: {
      src: "/photos/uccc-education-illinois-meet-greet-2026.jpg",
      width: 492,
      height: 640,
      alt: "United Covenant Churches of Christ, Midwest Regional Gathering: ELEVATION. Department of Education - Illinois Liaisons Meet & Greet, with Bishop G.E. Livingston (Presiding Prelate), Bishop A.D. Gibson (Regional Prelate), Bishop Mikal D. Boddie (State Director of Education - Illinois) and Overseer Staci R. Bennett (National Director of Education). November 29, 2026, 3-4 pm, Vernon Church, 10201 S. Ewing Ave., Chicago, Illinois 60617.",
    },
  },
];

/**
 * Giving platforms, in the order Bishop Boddie listed them (Nov 16, 2026).
 * `url` gets a "Give securely" button. `b64` values (the PayPal email and the
 * Zelle number) are put together in the browser so scrapers can't harvest them,
 * with a Copy button; encode with `printf 'value' | base64`.
 */
export type GivingPlatform = {
  name: string;
  /** Who the gift goes to, as the platform shows it. */
  payee?: string;
  url?: string;
  /** Shown as the handle when there is no b64 value, e.g. a Cash App $cashtag. */
  handle?: string;
  b64?: string;
  how: string;
};

export const givingPlatforms: GivingPlatform[] = [
  {
    name: "Givebutter",
    url: "https://givebutter.com/HopeCKFGiveCampaign",
    how: "Give securely online, by card or bank.",
  },
  {
    name: "Givelify",
    payee: "Hope Covenant Kingdom Fellowship",
    url: "https://giv.li/79ra1g",
    how: "Give in the Givelify app or online.",
  },
  {
    name: "PayPal",
    b64: "aG9wZWNrZkBnbWFpbC5jb20=",
    how: "Send to this address from your PayPal account.",
  },
  {
    name: "Zelle",
    b64: "NzczLTU2OS02NTQ2",
    how: "Send from your own bank’s app to this number.",
  },
  {
    name: "Cash App",
    handle: "$Hopeckf",
    url: "https://cash.app/$Hopeckf",
    how: "Send to this $Cashtag from Cash App.",
  },
];

/**
 * The flyers section on the home page, newest first. Put the image in
 * public/photos/. Give a flyer an `endsOn` date (YYYY-MM-DD) and it drops off
 * the site by itself the day after; leave it out to keep a flyer up.
 */
export type Flyer = {
  id: string;
  src: string;
  width: number;
  height: number;
  title: string;
  /** One short line under the title, e.g. the date. */
  note?: string;
  alt: string;
  endsOn?: string;
  /** If set, the flyer links out to this URL instead of opening full size. */
  href?: string;
};

export const flyers: Flyer[] = [
  {
    id: "pre-christmas-coat-giveaway-2026",
    src: "/photos/pre-christmas-coat-giveaway-2026.webp",
    width: 550,
    height: 825,
    title: "Pre-Christmas Coat GiveAWay",
    note: "Sat, Dec 12 · 11am–3pm · Trinity Outreach",
    alt: "Hope Covenant Kingdom Fellowship International Pre-Christmas Coat GiveAWay, Saturday, December 12, 2026, 11:00am to 3:00pm, Trinity Outreach, 5416 South Calumet Ave., Chicago, Illinois 60615. Coats issued first come first serve. Sponsors: Bishop Mikal D. Boddie, D.Div., Overseer Mary Banks-Moore, Elder John Moore.",
    endsOn: "2026-12-13",
  },
  {
    id: "eli-church-website-ad",
    src: "/photos/eli-church-website-ad.webp",
    width: 700,
    height: 905,
    title: "A website that looks like your church",
    note: "$29 a month · Call or text Eli: (401) 486-6714",
    alt: "A website that looks like your church, $29 a month, the rate you start at is the rate you keep. Online giving with Givelify, Cash App or Tithe.ly. Your sermons from YouTube or Facebook. A free design for your church before you pay anything. See the churches: elijahdesent.com/church-websites. Call or text Eli: (401) 486-6714.",
  },
  {
    id: "happy-thanksgiving-bishops-2026",
    src: "/photos/happy-thanksgiving-bishops-2026.webp",
    width: 800,
    height: 1000,
    title: "Happy Thanksgiving",
    note: "From Bishop Boddie and Bishop Moses",
    alt: "Happy Thanksgiving from Hope Covenant Kingdom Fellowship International: Bishop Mikal D. Boddie, D.Div., Establishmentarian and Presiding Prelate, and Bishop Thabugha Moses, Presiding Prelate of the Uganda Eastern Africa Jurisdiction.",
    endsOn: "2026-11-28",
  },
  {
    id: "happy-holidays-bishops-2026",
    src: "/photos/happy-holidays-bishops-2026.webp",
    width: 900,
    height: 1125,
    title: "Happy Holidays",
    note: "From Bishop Boddie and Bishop Moses",
    alt: "Happy Holidays from Hope Covenant Kingdom Fellowship International: Bishop Mikal D. Boddie, D.Div., Establishmentarian and Presiding Prelate, and Bishop Thabugha Moses, Presiding Prelate of the Uganda Eastern Africa Jurisdiction.",
    endsOn: "2027-01-01",
  },
  {
    id: "happy-holidays-campus-pastors-2026",
    src: "/photos/happy-holidays-campus-pastors-2026.webp",
    width: 900,
    height: 917,
    title: "Happy Holidays",
    note: "From our Campus Pastors",
    alt: "Happy Holidays from Hope Covenant Kingdom Fellowship International: Elder John Moore and Overseer Mary Banks-Moore, Campus Pastors.",
    endsOn: "2027-01-01",
  },
  {
    id: "happy-holidays-board-of-directors-2026",
    src: "/photos/happy-holidays-board-of-directors-2026.webp",
    width: 900,
    height: 917,
    title: "Happy Holidays",
    note: "From our Board of Directors",
    alt: "Happy Holidays from the Hope Covenant Kingdom Fellowship International Board of Directors: D. Watson, L. James, F. Washington and S. Taylor.",
    endsOn: "2027-01-01",
  },
  {
    id: "community-outreach-humanitarian-assistance",
    src: "/photos/community-outreach-humanitarian-assistance.webp",
    width: 1024,
    height: 1536,
    title: "Community Outreach & Humanitarian Assistance",
    note: "Food, housing, health, treatment and benefits support",
    alt: "Hope Covenant Kingdom Fellowship International Community Outreach and Humanitarian Assistance Program. Everyone is welcome. Available services and resources include food and meals, mental health counseling, housing support, benefits assistance, substance use treatment, and physical health screenings. Churches, community organizations, and providers are invited to partner. Contact hopeckf@gmail.com.",
  },
  {
    id: "holiday-support-28-families",
    src: "/photos/holiday-support-28-families-2026.webp",
    width: 1024,
    height: 1536,
    title: "Help make the holidays special",
    note: "Supporting 28 local families and seniors",
    alt: "Help make the holidays special for local seniors and families. HOPE Covenant Kingdom Fellowship International is seeking sponsors, wish-list gifts, toys, gift cards and food baskets to support 28 families. Give by Zelle, Cash App or PayPal.",
    endsOn: "2026-12-25",
  },
  {
    id: "sacraments-week-2-communion",
    src: "/photos/sacraments-week-2-communion-2026.webp",
    width: 1670,
    height: 941,
    title: "The Sacraments II — Holy Communion",
    note: "Six-week virtual course · Tuesdays at 6:00 pm",
    alt: "The Sacraments II: Holy Communion and the Lord's Supper, Tuesday, November 17 at 6:00 pm. Six-week virtual course from HOPE Covenant Kingdom Fellowship International, taught by Bishop Mikal D. Boddie, D.Div.",
    endsOn: "2026-12-15",
  },
  {
    id: "uccc-midwest-gathering",
    src: "/photos/uccc-midwest-gathering-2026.png",
    width: 1254,
    height: 1254,
    title: "Midwest Regional Gathering Service",
    note: "Sunday, Nov 29 · 5:00 pm · Vernon Baptist Church",
    alt: "Save the Date: United Covenant Churches of Christ Midwest Regional Gathering Service, Sunday, November 29, 2026, 5:00 p.m., Vernon Baptist Church, 10201 S. Ewing Ave., Chicago, IL 60617.",
    endsOn: "2026-11-29",
  },
  {
    id: "uccc-education-illinois-meet-greet",
    src: "/photos/uccc-education-illinois-meet-greet-2026.jpg",
    width: 492,
    height: 640,
    title: "ELEVATION — Illinois Liaisons Meet & Greet",
    note: "Sunday, Nov 29 · 3:00–4:00 pm · Vernon Church",
    alt: "United Covenant Churches of Christ, Midwest Regional Gathering: ELEVATION. Department of Education - Illinois Liaisons Meet & Greet, with Bishop G.E. Livingston, Bishop A.D. Gibson, Bishop Mikal D. Boddie and Overseer Staci R. Bennett. November 29, 2026, 3-4 pm, Vernon Church, 10201 S. Ewing Ave., Chicago, Illinois 60617.",
    endsOn: "2026-11-29",
  },
  {
    id: "sacraments",
    src: "/photos/flyer-sacraments.png",
    width: 427,
    height: 640,
    title: "The Sacraments — 6-week Zoom course",
    note: "Tuesdays at 6:00 pm · through Dec 15",
    alt: "Flyer: Apostolic Summit 2026 is now open for registration. 6 Week Zoom Course: The Sacraments, Holy Communion and the Lord’s Supper, Tuesdays Nov 10 to Dec 15 at 6:00 pm. Register at 773.595.2500. Bishop Mikal D. Boddie, D.Div., Instructor.",
    endsOn: "2026-12-15",
  },
  {
    id: "uccc-education-illinois",
    src: "/photos/uccc-education-illinois.jpg",
    width: 698,
    height: 957,
    title: "Education Department · Illinois",
    note: "Every church: send us your liaison",
    alt: "Flyer: United Covenant Churches of Christ, Education Department – Illinois. Bishop Mikal D. Boddie, State Director of Education – Illinois, is seeking a liaison from every Illinois church.",
  },
];

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
      "A Bible-centered Reformation. Hour-long teaching, chapter and verse, every week — and a seminary classroom behind it.",
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
      "International is in the name: the Uganda Eastern Africa Jurisdiction, under Bishop Thabugha Moses, and a family of churches reaching seniors, families and neighbors across Chicago.",
    href: "/visit",
  },
];
