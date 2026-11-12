# Invariants, Tech Stack & File Map

## Tech Stack
- Framework: Next.js 16.2.9, App Router, React 19 + React DOM 19, TypeScript 5.
- Styling: Tailwind CSS v4 (`@tailwindcss/postcss`). Fonts via
  `next/font/google`: **Lora** (headlines, exposed as `--font-bm-serif`) and
  **Inter** (body/UI). No icon font — all icons are inline SVG.
- Design system: **Editorial Bloom** (2026-07-21), recoloured to a
  gold/platinum/silver luxury palette on 2026-07-29. Palette is cream
  `#F2EFE9`, ink `#141414`, gold `#C5A059` (labels, underlines, small accent
  dots, and — inside `HowWeWork` only — the motion-graphic fills/nodes),
  platinum `#C0C7D0` (button fills, default underline colour), plus a
  chrome/platinum `.text-emphasis-gradient` utility used for every
  `BrandHeadline` emphasis word. No blue or coral remain anywhere except the
  frozen `LogoWordmark` (see [[subsystem-notes]]). Tokens defined in
  `src/app/globals.css`. Original spec:
  `docs/superpowers/specs/2026-07-21-editorial-bloom-identity-redesign.md`
  (colour values in that doc are now superseded).
- Testing: Vitest (`npm run test:unit`) for pure logic, Playwright
  (`npm run test:e2e`) for page smoke + visual checks.
- Hosting: Vercel (`vercel.json`), `npm run dev|build|start` map to
  `next dev|build|start`.
- No backend/DB in this repo — it's a marketing landing page + a contact form
  (`src/components/ContactForm.tsx`) and an external product (Anril) linked in.

## Hard Invariants
- `vercel.json` permanently redirects `/anril`, `/anril/:path*`, `/aira` and
  `/aira/:path*` to the Anril app's own domain `https://www.anrilaitech.com`
  (decided 2026-11-12: the app dropped its `/anril` basePath, so the old
  proxy rewrite to `anrilai.vercel.app/anril` 404'd). Do not reinstate a
  rewrite/proxy: the app's canonical is anrilaitech.com and its root-level
  `/_next` assets would collide with this app's.
- `vercel.json` also 301-redirects host `bloommatrix.in` → `https://www.bloommatrix.in`
  as a safety net (the Vercel domain setting does the primary redirect).
- `tsconfig.json` strict mode must stay on.
- The `src/app` Next.js app is the tracked, real implementation. Do not treat
  the untracked root-level `index.html` / `style.css` / `script.js` / `assets/`
  as the live site — see [[subsystem-notes]] for why they exist.

## File Map
- `src/app/layout.tsx` — root layout, fonts, global metadata.
- `src/app/page.tsx` — homepage (hero + 3-step strip, positioning, services,
  products, "Selected international engagements" — keep as is — FAQ, CTA).
  Organization JSON-LD lives here only.
- Other routes: `/services`, `/products`, `/products/anril` (SoftwareApplication
  JSON-LD), `/about`, `/contact`, `/privacy`, `/terms`, `/insights` +
  `/insights/[slug]` (posts in `src/lib/content/insights.ts`), and country
  pages `/uae` `/uk` `/malaysia` `/singapore` (copy in
  `src/lib/content/countries.ts`, layout `src/components/CountryLandingPage.tsx`).
- `src/lib/site.ts` — single source for email, WhatsApp, GSTIN, LinkedIn, URLs.
- Every page sets `alternates.canonical`; `src/app/sitemap.ts` holds a real
  per-page lastModified date — bump it when a page's content changes.
- `FAQAccordion` uses native `<details>` so answers are in server HTML, and
  emits FAQPage JSON-LD itself.
- `src/components/SiteHeader.tsx` / `SiteFooter.tsx` — shared chrome.
- `src/components/brand/` — the brand primitives. `BrandFlower` is the single
  source of the flower (the "one-flower rule"); `LogoMark` (Cutout tile),
  `LogoWordmark` (frozen Bracket wordmark — never restyle), `LogoLockup`,
  and `BrandHeadline` (BM Serif + seeded-o / coral-tittle marks).
- `src/hooks/useSpinningFlower.ts` + `src/lib/spin.ts` — hero flower momentum.
- `src/components/ContactForm.tsx` — contact form panel; `src/app/api/contact/route.ts`
  sends via Resend to contact@bloommatrix.in and falls back to the Gmail inbox
  if Resend rejects it (unverified sender domain). Env: `RESEND_API_KEY`,
  optional `CONTACT_FROM_EMAIL` (needs bloommatrix.in verified in Resend),
  optional `CONTACT_RECIPIENT`.
- `src/app/icon.tsx` / `src/app/opengraph-image.tsx` — generated favicon and OG
  card. Both draw the flower unrotated and rotate via CSS: the OG renderer
  ignores SVG group transforms, and it cannot parse variable fonts (hence the
  static `src/app/_fonts/Lora-Regular.ttf`).
- `public/images/` — static image assets referenced by the Next app
  (e.g. `/images/logo.png`).
- Root-level `index.html`, `style.css`, `script.js`, `assets/`, `web` —
  untracked, not part of the live app. See [[subsystem-notes]].
