# lodestonemaps.com

Single-page site for Lodestone Market Maps. React + Vite + TypeScript, plain CSS,
static output, no server.

```
npm install
cp .env.example .env      # add the Web3Forms key
npm run dev               # http://localhost:5173
npm run build             # → dist/
npm run preview           # serve dist/ locally
```

## Before you go live

### 1. Confirm the figures

**Every number on the site is unverified.** All of them came from
`brandbook_v2.pdf`, which is a design deck — the values in it may be
illustrative rather than production counts. The voice guide (p.12) rules out
"round claims with no number behind them", so none of these should ship
unchecked.

All copy and figures live in one file, `src/site-data.ts`. Nothing else needs
editing to correct them.

| Where | Value | Source |
| --- | --- | --- |
| `method.steps[2]` | 70+ sources | deck |
| `coverage.release` | 2026.03 | deck |
| `coverage.figures` | 19,042 · 14,318 · 9,704 · 6,155 · 70+ | deck |
| `coverage.extract.rows` | three redacted sample rows | deck, illustrative |

### 2. Add the Web3Forms key

Get one free at <https://web3forms.com>, then set `VITE_WEB3FORMS_KEY` in `.env`
and in the Cloudflare project's environment variables.

The key is public by design — the form POSTs straight from the browser, which is
what keeps the site fully static. Spam is handled by the hidden `botcheck`
honeypot field in `src/components/Contact.tsx`, not by keeping the key secret.
If spam becomes a problem, Web3Forms also supports hCaptcha.

### 3. Set the contact email

`site.email` in `src/site-data.ts` is empty, so the "Or write to …" line under
the contact heading is hidden. Fill it in to show it.

## Deploying to Cloudflare

Cloudflare Pages, connected to the git repo:

- Build command: `npm run build`
- Output directory: `dist`
- Environment variable: `VITE_WEB3FORMS_KEY`

`public/_headers` sets the security headers and a one-year immutable cache on
`/assets/*` and `/fonts/*`. It is copied into `dist/` at build time and read by
Pages automatically.

There is no router and no server function, so no SPA fallback or Worker is
needed. Workers static assets would also serve this fine if you prefer it over
Pages; it would just need a `wrangler.toml`.

## Design system

Colour, type, spacing and frame tokens are in `src/styles/tokens.css`, copied
from `brandbook_v2.pdf` pages 13 and 14. The brandbook and the hero reference
image are not committed; page references below are provenance for the values,
not links to files in this repo. Treat them as fixed — a new colour or
step is a brandbook change first.

Fonts are self-hosted in `public/fonts/` (latin and latin-ext subsets of Spectral
300/400/600, Libre Franklin 400/500, IBM Plex Mono 400 — 240 KB total). The
brandbook specifies loading them from Google Fonts; self-hosting removes the
third-party request and lets them be cached with the rest of the assets.

### Two deliberate divergences from the brandbook

**1. `--rail` is renamed to `--rail-w`.** The brandbook defines `--rail` twice:
as a colour (`#333A3E`, p.13) and as a width (`168px`, p.14). Pasting both
blocks as instructed silently overwrites the colour with the width. The colour
keeps the original name; the width is `--rail-w`.

**2. The hero.** It follows the supplied reference image, not brandbook pattern
A. It fills the viewport (`100svh`), drops the side rail, and puts a wine wash
with compass rings behind the type. This contradicts three stated rules: "no
gradients", "no wine on large surfaces — it stays a band, never a page", and
"one wine band per screen".

The wash peaks at roughly `#581919` over the asphalt ground, so it never gets
brighter than the brand wine `#5F1616`. The brandbook's wine stat band is not
used at all, so the hero is the only wine surface on the page.

`--rule-dark` and `--rail-w` are therefore unreferenced. They are kept because
`tokens.css` mirrors the brandbook rather than only what the site happens to
use today.

Everything else follows the brandbook: square corners throughout
(`border-radius` is set to `var(--radius)`, which is `0`, on every element),
structure drawn with 1px rules rather than filled cards, and no drop shadows.

## Layout

One page, anchor navigation. Sections in order:

`Hero` (full viewport) → `RowAnatomy` (#rows) → `Method` (#method) →
`Coverage` (#coverage) → `Contact` (#contact) → `Footer`

The hero closes with a hairline, so the first section's `border-top` is
suppressed to avoid a double rule.

Breakpoints, per brandbook p.14: at 900px the layout goes single-column; at
640px display type drops to 40px and page padding to 24px.
