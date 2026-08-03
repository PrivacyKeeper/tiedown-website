# TieDown.pro — Website

Marketing site for the TieDown.pro mobile app. Built to the same pattern as
the other Rodeo Apps sites (BullRider.pro, BreakawayRoping.pro, TeamRope.pro):
Next.js App Router, Tailwind v4, Resend for the waitlist, no database and no
auth.

## Commands

- `npm run dev` — development server (http://localhost:3000)
- `npm run build` — production build
- `npm start` — serve the production build
- `npx eslint .` — lint

## Stack

Next.js 16 (App Router, Turbopack), React 19, TypeScript, Tailwind CSS v4,
Resend. Path alias `@/*` maps to `./src/*`.

## Required assets

`public/logo.png` is referenced by the header, the hero, and the OG/Twitter
card, and is **not** in the repo yet. Drop the TieDown crest in before
deploying or those three places render a broken image.

`public/cross.jpg` and `public/backgrounds/arena-1.jpg` / `arena-2.jpg` are
already here, carried over from the other Rodeo Apps sites.

## Environment

| Variable | Purpose |
| --- | --- |
| `RESEND_API_KEY` | Waitlist confirmation + team notification email |

Without it, `POST /api/waitlist` returns 503 and the form shows an error. The
build and every other page work fine without it.

## Structure

```
src/app/
  page.tsx                  Landing — 14 feature groups, segment strip, pricing
  rules/                    Full tie-down rules reference (SEO + authority)
  events/                   Formats, draws, calves, producer console
  blog/                     8 SEO posts; index reads from blog/posts.ts
  support/                  Support topics
  terms/ privacy/ refund/   Legal
  api/waitlist/route.ts     Resend handler
  robots.ts  sitemap.ts     SEO
  components/
    SchemaMarkup.tsx        JSON-LD: SoftwareApplication, WebSite, FAQPage
    CrossQuote.tsx          Rotating verse, matches the other sites
    Footer.tsx
  data/quotes.json
```

## Brand

Per the build map: **burnt orange on dust black**. Defined in
`src/app/globals.css` — `--brand` `#e2701f`, `--cream` `#f4ead9`, on
`--ink` `#12100e`. The secondary `--brand-2` is a pale rope tan `#d8be8f`, so
the two read as fire and hemp rather than as unrelated hues.

Token names (`--brand`, `--brand-deep`, `--brand-2`, `--ink*`) are identical
across all six Rodeo Apps sites — only the values differ. That is deliberate:
the sites should diff cleanly against each other.

## Positioning

Two decisions drive the copy, and they apply across the portfolio:

**Everything-app.** This is the social platform for the tie-down community
first, and a measurement tool second. Social & Community leads the feature
list because it is what people open daily. The landing page states the bar
outright: if you tie down, you should not need another app.

**Amateur audience.** Users are weekend jackpot ropers, junior and youth
rodeo, high school and college — not PRCA professionals. So the copy speaks to
them, AI analysis is framed as coaching for people who cannot afford a coach,
and progress is measured against your own baseline rather than a
professional's.

## Rules content, and why it is tagged by association

Most tie-down rules are consistent everywhere. Two are not — **the loop count**
(one at pro rodeos, frequently two at amateur, youth and jackpot ropings) and
**the jerk-down rule** (a no time under PRCA, a fine in some associations,
unenforced in others). Those are exactly the two that catch amateur ropers out
when they rope somewhere new.

`/rules` tags both with the `.assoc-tag` pill rather than asserting a single
answer. Keep that convention when editing.

The segment model on the landing page comes from the build map's §3, which
identifies it as the app's core differentiator.

## Adding a blog post

1. Create `src/app/blog/<slug>/page.tsx` with a `metadata` export and an
   `<article className="prose-arena">` body.
2. Add the entry to `src/app/blog/posts.ts` (drives the index).
3. Add the slug to `blogSlugs` in `src/app/sitemap.ts`.
