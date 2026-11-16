# HOPE Covenant Kingdom Fellowship International — Chicago, IL

Website concept for HOPE Covenant Kingdom Fellowship International, 740 E 43rd St, Chicago, IL 60653.
Bishop Mikal D. Boddie, D.Div., Establishmentarian and Presiding Prelate.
Requested through the Small Church Grant (November 2026). The request form did not name a
particular feature, so the site was built around the three things the fellowship actually does
every week — teaching, gathering, and reaching the neighbourhood — with giving and a prayer line
one tap away.

Preview: https://hopecovenantchicago.elijahdesent.com (hidden from search engines; see "Going live").

## Read this before editing (for people and AI assistants)

- **Next.js 16.2 (App Router) + React 19 + Tailwind CSS v4.** This is NOT Next 13/14:
  - Page `params` and `searchParams` are **Promises**. Write `({ params }: { params: Promise<{ slug: string }> })` and `await` it.
  - Never name a component prop `ref`; it is reserved in React 19.
  - Tailwind v4 has no `tailwind.config.js`. Colours and fonts live in `src/app/globals.css` under `:root` and `@theme inline`. Custom classes go inside `@layer components`.
- **Type curly quotes and apostrophes as the characters themselves (’ “ ”), not as `&rsquo;` / `&ldquo;`.**
- **Deploys:** every push to `main` auto-deploys on Vercel. Run `npm run build` first. If the type-check fails, the live site does not update.
- **Commit email** must be `Elimark1611@gmail.com`, or Vercel blocks the deploy.
- **Fonts are self-hosted** in `src/fonts/` (`bash scripts/get-font.sh "<Family>" <weight>`). Don’t switch to `next/font/google`.
  Playfair Display 700 for display, Cinzel 700 for the wordmark, the seal and the small caps labels, Great Vibes for the “Family of Churches” script, Archivo for everything else.
- **Times are set in the sans** (`.time` class), never in a display serif.

## Where things live

| To change… | Edit |
| --- | --- |
| Service times | `services` in `src/lib/site.ts` (currently empty — see below) |
| A course or event (drops off by itself after `endsOn`) | `events` in `src/lib/site.ts` |
| Online giving / the Zelle details | `giving` in `src/lib/site.ts` |
| Address, phone, Facebook, YouTube | `church` in `src/lib/site.ts` |
| The Bishop | `pastor` in `src/lib/site.ts` |
| The four quarters of the shield | `quarters` in `src/lib/site.ts` |
| The vision statement | `vision` in `src/lib/site.ts` |
| Navigation | `nav` in `src/lib/site.ts` |
| Recent teaching titles on `/` and `/teaching` | the `recent` / `library` arrays in those page files |
| Photos | `public/photos/`. Alt text sits beside each image where it is used |

## How it works

- **The concept is the Great Seal.** The fellowship already has a real coat of arms — it is on
  the Facebook page, the YouTube banner and the course flyers: a pointed oval reading
  THE GREAT SEAL OF HOPE COVENANT KINGDOM FELLOWSHIP, a mitre over a crossed key and crosier,
  the year AD MMXVI, and a shield quartered with an open book, a descending dove, grapes on the
  vine and the globe, with the Chi-Rho over it. **Use the real file, `public/seal.png`, via
  `components/GreatSeal.tsx`.** Bishop Boddie asked for it in writing (Nov 16, 2026: “PLEASE USE
  OUR … EPISCOPAL SEAL”). It is in the header, footer, 404 page, the home quarters section and
  About. Do not swap it for a redrawing; the old SVG redraw (`Seal`, `Shield` in `Seal.tsx`) is
  no longer used.
- **The shield is the site map.** The four charges are the four things the fellowship gives itself
  to: the Word, the Spirit, the Covenant, the World. They are listed in `quarters` in `site.ts`
  and rendered on the home page as a quartered block in the four tinctures, each one a link.
  `Charge` in `Seal.tsx` draws any single charge as a small icon.
- **The Bishop's own heraldry** is in `public/heraldry/`: the purple “Seal of the Bishop” (Est.
  2017 AD) and the “Christus Primus” arms, both on About.
- **The motto is the headline.** “Excellence is our commitment. Integrity is our standard. The
  Kingdom is our assignment.” is printed on the fellowship’s own course flyers. It is the hero.
- **Colours** come from the fellowship graphics Bishop Boddie sent (Nov 16, 2026): crimson velvet `#d0201f`–`#3d0407` with gold, a gold crown, and “Family of Churches” on a gold plaque. The home hero is a live-text rebuild of their cover, not the image. The CSS tokens are still named `royal-*`; they now hold the crimson. (The first draft used the royal violet of their YouTube banner.)
- **Courses expire by themselves.** Each entry in `events` has `endsOn`; the pages re-render hourly
  (`revalidate = 3600` in `layout.tsx`). The Sacraments course is set to drop off after 15 December
  2026 — it disappears from the home page, `/teaching` and `/visit` with no edit. Keep that line.
- **Forms** post to `/api/form`, which sends to the Slack/Teams webhook in `FORM_WEBHOOK_URL`. Until
  that env var is set, the form tells people to call the church. Spam defences: signed load-time
  token, honeypot, rate limit, no links in free text.

## Confirm with the church

Everything below went onto the site from one source, or is missing. Please check it.

1. **Sunday worship time — missing.** No service time is published anywhere online, so none is
   stated. `/visit` says only what we could verify: that Sunday services go out live on the
   Facebook page. Add the real time to `services` in `site.ts` and it appears on the home page,
   `/visit` and in “what’s next” automatically:
   `{ id: "worship", name: "Sunday Worship", dow: 0, time24: "11:00", rule: "Every Sunday", note: "Streamed live on Facebook." }`
2. **Where the fellowship physically gathers.** Google Maps and the chamber-of-commerce listing
   give **740 E 43rd St, Chicago, IL 60653**, which matches the address on the grant form (the form
   adds “Apt. 1410”). MapQuest and Yelp still carry an older **820 E 75th St, Chicago, IL 60619**.
   Because the form’s “Apt. 1410” makes it a residence, the street is hidden (`church.showStreet:
   false`): `/visit`, `/contact` and the footer say “South Side of Chicago, call ahead”, with no map.
   Put the real meeting place in `church` and set `showStreet: true` once the Bishop confirms it.
3. **Phone.** Three numbers are in circulation: (773) 569-6546 (on the grant form, and in the
   fellowship’s own media-ministry post), (773) 234-7585 (on the business listings) and
   (773) 595-2500 (the registration line on their own Sacraments flyer, shown on `/teaching` as the
   course’s `registerB64`). The site
   uses the first. It is stored base64 in `church.phoneB64`.
4. **Zelle.** No Zelle handle is published anywhere, so none was invented. `/give` says offerings
   are received by Zelle and asks people to call or write for the details. Put the real Zelle email
   or phone in `giving.zelle` and the page prints it.
5. **The Sacraments course.** The flyer says “6 Week Virtual Course”, “Tuesdays at 6:00 pm”,
   beginning Tuesday 10 November. That was read as six consecutive Tuesdays ending 15 December, and
   `endsOn` is set to that date. The platform (Zoom, Facebook Live, conference line) is not stated
   anywhere, so `/teaching` invites people to ask for the link instead of naming one. Correct
   `events` in `site.ts` if either is wrong.
6. **Photographs.** There are no photographs of the building, the congregation or a service
   anywhere online. Bishop Boddie sent portraits by email on Nov 16, 2026: choir dress with the
   crosier (`bishop-crosier.png`, home hero and `og.png`; cut out of its white background here),
   cassock and mozzetta (`bishop-mozzetta.png`, About), gold-embroidered navy jacket
   (`bishop-embroidered.png`, About header; cut out here), green plaid (`bishop-green-plaid.png`,
   home broadcast section), his study (`bishop-study.png`, Teaching), cream suit
   (`bishop-cream-suit.png`, Visit), navy Greek-key jacket (`bishop-navy-greek-key.png`, Give) and
   teal suit (`bishop-teal-suit.png`, Contact). Cut-outs stand in the crimson header via
   `components/PageHero.tsx` (`cutout: true`). Not used: a tan suit at a pool table, his flyers
   (their wording is rebuilt as live text instead: the vision and mission on About and the home
   page, the Zoom course and registration line on Teaching), and a YouTube QR graphic.
   Photographs of the congregation or a service still go straight in. Nothing here is stock.
7. **Founding dates.** Their own Vision and Mission statement says “established in January of
   2018” (the IRS EIN notice is dated Jan 30, 2018). The Illinois not-for-profit corporation dates
   from Oct 13, 2016, which is the AD MMXVI on the seal. The site says both, each for what it is.
   Leadership, the bio, core values and the 501(c)(3) wording are taken word for word from the
   documents he sent on Nov 16, 2026 (see the header of `src/lib/site.ts`). Sister Sharnay J.
   Taylor is on an older flyer but not on either formal document, so she is not listed yet.
8. **The FAM Institute Bible College & Seminary** is mentioned on `/teaching` on the strength of a
   single post about its 2026 graduating class. Confirm the relationship before it goes live.
9. **Teaching titles** on `/` and `/teaching` were transcribed from the YouTube channel. They are
   not yet linked to the individual videos — add the links when convenient.

## Rules that keep the site honest

- Real church photos only. No stock photos and no AI images.
- No “Watch live” button unless they really stream. The fellowship does stream Sunday services to
  Facebook, so `/visit` points there — but it does not promise a time we could not verify.
- The phone number is stored base64 (`phoneB64`) and assembled in the browser by
  `src/components/Phone.tsx`. Never type the digits into a page.
- No raw email addresses on the site. Link to `/contact`.

## Going live

Set `NEXT_PUBLIC_SITE_URL` to the real domain in Vercel. That turns off the noindex robots rule and
fixes canonicals and JSON-LD in one move. **Delete the two demo-tracking lines in
`src/app/layout.tsx`** (the comment and the `demo.js` script) when the church pays or goes live.
