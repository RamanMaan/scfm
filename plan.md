# Variant Handoff Plan — 5 New Directions

Five new variants are being built in parallel, each by a dedicated subagent.
They share the same content layer (`src/content/`), the same `BaseHtml` shell,
and the same Astro plumbing — but no UI. Each agent owns one variant folder
end-to-end.

---

## Why a new wave at all

The current three (`brutalist`, `studio`, `parallax`) all live in the same
*paper-bright / restrained-print / gallery* corner. Mono vs sans vs kinetic,
but the temperament is the same: quiet, designed, image-and-frame.

These five push *against* that shared temperament along five different axes:

| id            | axis pushed against                              | one-line read                                                  |
| ------------- | ------------------------------------------------ | -------------------------------------------------------------- |
| `nightdrive`  | dark / atmospheric (vs paper / structural)       | 2 a.m. Memphis radio — neon-sodium serif over warm grain       |
| `cassette`    | object-as-UI (vs gallery wall)                   | A J-card you unfold; tape spools spin while you listen         |
| `verse`       | words-first (vs image-and-frame)                 | One long verse is the page; releases interleave between lines  |
| `synesthesia` | sound as primary surface (vs sight)              | Audio plays on load; waveform drives color, weight, grain      |
| `poster`      | loud printed ephemera (vs quiet print archive)   | 2-color risograph: hot pink + ink-blue, registration off       |

---

## Variant briefs

Each brief is the *target*, not a spec. Make distinctive choices inside it.

### 1. `nightdrive` — *2 a.m. Memphis radio*

- **Palette:** oxblood `#3a0d12`, cobalt `#0f1d4a`, sodium-neon amber `#ffb14a`,
  warm cream `#f3e7d0`. Page is dark. One dominant + one sharp accent.
- **Type:** a wide, neon-display serif for the hero (Fraunces, GT Sectra-like
  via fontsource, or similar — *not* Inter, *not* Space Grotesk). Body sans is
  designer's call but must contrast the serif heavily.
- **Atmosphere:** warm 35mm-style grain over everything (SVG noise, CSS
  filter, or a tiny static PNG tiled). Slow-drifting radial glows behind the
  hero — no actual video required.
- **Hero focal:** a single oversized lyric card / dedication, not a portrait.
  Portrait, if used, is a secondary inset.
- **Releases:** rendered as glowing FM presets (think dial markers / tuner
  stops). Hover = "tune in" micro.
- **Press:** rolling marquee strip at the bottom of the page (one direction,
  paused on hover / focus).
- **Motion:** slow, ambient, never twitchy. Reduced-motion = static glows.

### 2. `cassette` — *object-as-UI*

- **Conceit:** the page is a cassette J-card you scroll through as if
  unfolding. Spine = nav strip. Side A / Side B = the release tracklist split
  in two. The back panel = bio + press. The cassette body itself = hero.
- **Spools:** two CSS-rotating circles. Spin while a track plays (you can wire
  this to the Spotify embed `postMessage` events, or just spin always at a
  slow constant rate — pick one and commit).
- **Ink:** one hand-marker accent color (sharpie red `#c4302b` or marker blue
  `#1f3aa6` — designer's call). Use it for handwriting accents only.
- **Type:** Courier (or a fontsource monospace) for technical metadata
  (catalog numbers, durations, dates). A hand-marker / brush display face for
  side labels and the cassette title. Neutral grotesque for body.
- **Tactility:** real shadows on the cassette body, paper edge on the J-card,
  visible printing registration. Not skeuomorphic kitsch — the *idea* of a
  cassette translated into web type & layout.
- **Mobile-first:** the unfold should work on 375px width. Don't require
  horizontal scroll.

### 3. `verse` — *lyrics as the page*

- **No image hero.** No portrait, no frame. The first thing the user sees is
  words at scale.
- **The page is one verse / interlude** (you pick which release's lyric — or
  write a 6–10 line placeholder if no lyric data exists). Set in a display
  serif at clamp(48px → 120px), generous leading, hung punctuation if
  feasible.
- **Type:** display serif from fontsource (Fraunces, Source Serif 4, EB
  Garamond, IBM Plex Serif — *not* Times, *not* Playfair Display). One
  family, one weight axis. Body, if any, is the same family at small size.
- **Releases / videos / press** are revealed *between* lines of the verse,
  inline. Tap a line → that line shifts up and the related release embed
  appears below it, then collapses. Or: each section header is itself a line
  of the verse. Pick one and execute cleanly.
- **Chrome:** minimum. A single small "listen" affordance, page-bottom
  attribution. No nav.
- **Palette:** designer's call — but it must be the *opposite* temperament
  from `studio`. Don't ship another off-white background.

### 4. `synesthesia` — *audio drives the visual*

- **Audio plays.** Use one of:
  - A short `<audio>` preview file (no asset exists in repo yet; embed a
    placeholder silent-with-tone audio if needed and leave a clear TODO for
    Steven to drop a real preview MP3 at `src/assets/preview.mp3`).
  - Or Spotify oEmbed (no Web Playback SDK — that needs Premium auth and is
    out of scope).
- **Web Audio API:** `AudioContext` → `AnalyserNode` → `requestAnimationFrame`
  loop reading `getByteFrequencyData`. Throttle visual updates to ~30fps.
  Tear it all down on `pagehide`.
- **What the analyser drives:**
  - Background color hue (slow follow, not jittery).
  - The hero typeface's variable weight axis (use a variable font: Inter
    Tight Variable already loads, but consider Recursive Variable or Fraunces
    Variable for more drama).
  - Grain / noise density on the background.
- **Idle state (no audio playing yet):** still alive. Generative analog noise,
  slow color drift. Do *not* render a flat color while waiting.
- **One monumental typeface.** No nav, no chrome beyond a play affordance and
  release list.
- **Reduced motion / autoplay blocked:** the page must look intentional
  *without* audio. Static snapshot of a "moment" in the live state.

### 5. `poster` — *gig flyer maximalism*

- **2-color riso print.** Hot pink `#ff3366` + ink-blue `#0a1f4a` over
  off-white `#f4ef e2`-ish. Use CSS `mix-blend-mode: multiply` to fake the
  ink overprint where the two colors overlap (gets you a muddy purple — keep
  it).
- **Registration deliberately off.** Each colored layer is offset 2–4px from
  perfect alignment. This is *not* a bug.
- **Halftone treatment.** Either an SVG halftone pattern over imagery, or a
  CSS `radial-gradient` dot grid. The portrait, if used, should be one-color
  knockout (single ink, halftoned).
- **Type:** condensed slab or display for the hero (Big Shoulders Display,
  Bungee, Anton, or similar from fontsource — *not* Bebas, too cliche). Stack
  the name in giant blocks: `STEVEN` / `CHRISTOPHER` / `TOUR` / `2026`.
- **Spine of the page:** a tour-date list / venue stack, even if dates are
  invented placeholders. Releases sit as poster sub-cards.
- **No restraint.** The other variants are quiet. This one is loud.

---

## Scaffolding contract — read carefully

Each subagent does **all** of the following inside its own variant folder,
and **none** of it outside.

### Files each subagent OWNS (create / edit freely)

```
src/variants/<id>/
  Layout.astro
  meta.ts
  components/
    Hero.astro
    ReleaseList.astro
    VideoGrid.astro
    Footer.astro
    Nav.astro              (optional — only if the variant uses one)
    <anything-else>.astro  (sub-components welcome)
  og-template.ts           (a Satori node tree — see "OG card" below)
  REGISTRATION.md          (handoff notes for the integration pass)
src/pages/<id>.astro       (thin page wrapper — see "Page wrapper" below)
```

### Files each subagent MUST NOT TOUCH

These are *overlap* files that the integration pass will edit once at the
end. Editing them in parallel = merge collisions.

- `src/variants/_registry.ts`
- `src/integrations/og-images/templates.ts`
- `src/integrations/og-images/fonts.ts`
- `src/content.config.ts`
- `src/content/**`              (content is shared, don't add fields)
- `src/layouts/BaseHtml.astro`
- `src/pages/index.astro`       (the showcase grid)
- `package.json`, `astro.config.mjs`, `biome.jsonc`, `tsconfig.json`
- Any other variant's folder (don't read for "consistency" — that defeats the
  point).

### How fontsource fonts are added

Import them inside your variant's `Layout.astro`:

```astro
---
import "@fontsource-variable/fraunces";
import "@fontsource/courier-prime/400.css";
---
```

The fontsource packages are already in `node_modules` for any font that's
been used before; if you need a new family, **don't** edit `package.json` —
write the install command in your variant's `REGISTRATION.md` instead. The
integration pass will run installs once at the end.

### Page wrapper (`src/pages/<id>.astro`)

Mirror `src/pages/parallax.astro`. Query the shared collections, pass them
into your components. Sort releases by `releaseDate` descending. No business
logic in components — components render what's passed in.

### `meta.ts`

Mirror existing variants. Set:

```ts
const meta: VariantMeta = {
  id: "<id>",
  name: "<Display Name>",
  tagline: "<one sentence vibe>",
  vibeTags: ["...", "..."],            // 3–4 short adjectives
  ogImage: "/og/<id>.png",
  ogImageAlt: "Steven Christopher — <id> variant. <one-line description>",
};
```

### OG card (`og-template.ts`)

Export a single function that returns a Satori-compatible node tree, mirroring
the shape of `renderParallax` in `src/integrations/og-images/templates.ts`
(read that file for reference — do **not** edit it). The tree must render at
1200×630. Use only fonts already registered in
`src/integrations/og-images/fonts.ts` — currently JetBrainsMono and Inter —
unless you note a new font requirement in `REGISTRATION.md`.

```ts
// src/variants/<id>/og-template.ts
import type { Node } from "../../integrations/og-images/templates";
export const renderNightdrive = (): Node => /* ... */;
```

(Yes, `Node` is exported as a type — if it isn't already, just inline the
shape; the integration pass will reconcile types.)

### `REGISTRATION.md` — what to include

A short markdown file with **exactly** these sections:

```markdown
# <id> — integration notes

## _registry.ts
Add `import <id> from "./<id>/meta";` and append `<id>` to the VARIANTS array.

## og-images/templates.ts
Add `import { render<Id> } from "../../variants/<id>/og-template";` and
register `<id>: render<Id>` in the TEMPLATES map.

## og-images/fonts.ts
(only if you used a font not currently loaded — JetBrainsMono + Inter are
already there. Otherwise: "No changes needed.")

## package.json
(only if you used a fontsource package not already installed. Otherwise: "No
changes needed.")

## Notes for review
- <anything the reviewer should know>
```

---

## Shared guardrails (from `AGENTS.md`)

These apply to every variant:

1. **Mobile-first.** Design at ~375px first. Touch targets ≥ 44×44px. Critical
   info never behind `:hover` only.
2. **No shared UI across variants.** Each variant rolls its own components.
3. **Spotify is the canonical embed.** Apple Music gets a text link, never an
   iframe.
4. **Reduced motion respected.** `@media (prefers-reduced-motion: reduce)` —
   collapse all animations to ~1ms.
5. **No mock data.** Query the real content collections via `getEntry` /
   `getCollection`. If a field is missing on a real release (cover art,
   Spotify ID), handle absence gracefully.
6. **Don't add startup / SaaS / generic gradient aesthetics.** No purple
   gradients on white. No Inter as a hero face. No Space Grotesk anywhere.
7. **Performance:** no layout thrash, no JS for things CSS can do, lazy-load
   embeds.

---

## Integration pass (after all 5 land)

The orchestrator will, in one sweep:

1. Read every variant's `REGISTRATION.md`.
2. Edit `_registry.ts` to import + register all 5 metas.
3. Edit `og-images/templates.ts` to import + register all 5 OG renderers.
4. Edit `og-images/fonts.ts` if any variant requires a new font for OG.
5. Run `pnpm add` for any new fontsource packages.
6. Run `pnpm build` to verify all pages compile and all OG PNGs render.
7. Spot-check each `/<id>` route at 375px and desktop.

If your variant breaks one of the integration steps, the orchestrator will
push back rather than fix it — keep `REGISTRATION.md` accurate.
