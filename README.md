# TODO(demo) Church name, Town, State

Website concept for TODO(demo) church name, street address. TODO(demo) pastor.
Requested through the Small Church Grant (TODO(demo) month year). TODO(demo) what they asked for, in their words.

Preview: https://SLUG.elijahdesent.com (hidden from search engines; see "Going live").

## Read this before editing (for people and AI assistants)

- **Next.js 16.2 (App Router) + React 19 + Tailwind CSS v4.** This is NOT Next 13/14:
  - Page `params` and `searchParams` are **Promises**. Write `({ params }: { params: Promise<{ slug: string }> })` and `await` it.
  - Never name a component prop `ref`; it is reserved in React 19.
  - Tailwind v4 has no `tailwind.config.js`. Colours and fonts live in `src/app/globals.css` under `:root` and `@theme inline`. Custom classes go inside `@layer components`.
- **Type curly quotes and apostrophes as the characters themselves (’ “ ”), not as `&rsquo;` / `&ldquo;`.**
- **Deploys:** every push to `main` auto-deploys on Vercel. Run `npm run build` first. If the type-check fails, the live site does not update.
- **Commit email** must be `Elimark1611@gmail.com`, or Vercel blocks the deploy.
- **Fonts are self-hosted** in `src/fonts/` (`bash scripts/get-font.sh "<Family>" <weight>`). Don’t switch to `next/font/google`.
- **Times are set in the sans** (`.time` class), never in a display serif.

## Where things live

| To change… | Edit |
| --- | --- |
| Service times | `services` in `src/lib/site.ts` |
| A special event (drops off by itself after `endsOn`) | `events` in `src/lib/site.ts` |
| Online giving | `giving.url` in `src/lib/site.ts` |
| Address, phone, Facebook | `church` in `src/lib/site.ts` |
| Pastor | `pastor` in `src/lib/site.ts` |
| Navigation | `nav` in `src/lib/site.ts` |
| Photos | `public/photos/`. Alt text sits beside each image where it is used |

## How it works

TODO(demo) the concept in two or three bullets: what it is, where it came from in the church’s own material, and which component draws it.

- **Events expire by themselves.** Each event has `endsOn`; the pages re-render hourly (`revalidate = 3600` in `layout.tsx`). Keep that line.
- **Forms** post to `/api/form`, which sends to the Slack/Teams webhook in `FORM_WEBHOOK_URL`. Until that env var is set, the form tells people to call the church. Spam defences: signed load-time token, honeypot, rate limit, no links in free text.

## Confirm with the church

TODO(demo) every fact that came from one source only, conflicts between sources, and every blank (service times, phone, giving link, event dates, photos of people who are not identified).

## Rules that keep the site honest

- Real church photos only. No stock photos and no AI images.
- No “Watch live” button unless they really stream.
- The phone number is stored base64 (`phoneB64`) and assembled in the browser by `src/components/Phone.tsx`. Never type the digits into a page.
- No raw email addresses on the site. Link to `/contact`.

## Going live

Set `NEXT_PUBLIC_SITE_URL` to the real domain in Vercel. That turns off the noindex robots rule and fixes canonicals and JSON-LD in one move. **Delete the two demo-tracking lines in `src/app/layout.tsx`** (the comment and the `demo.js` script) when the church pays or goes live.
