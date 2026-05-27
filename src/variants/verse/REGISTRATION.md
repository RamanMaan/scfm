# verse — integration notes

## _registry.ts
Add `import verse from "./verse/meta";` and append `verse` to the `VARIANTS`
array.

## og-images/templates.ts
Add `import { renderVerse } from "../../variants/verse/og-template";` and
register `verse: renderVerse` in the `TEMPLATES` map.

## og-images/fonts.ts
No changes needed. The OG card uses `PlexSerif` (IBM Plex Serif 500 normal +
400 italic) which is already registered, plus `Inter` for the small caps
tags which is also already registered.

## package.json
No changes needed. `@fontsource/ibm-plex-serif` is already installed
(`node_modules/@fontsource/ibm-plex-serif`). The variant imports the 400,
400-italic, and 500 stylesheets from it inside `Layout.astro`.

## Notes for review
- **Lyric strategy:** verse-as-section-headers (option B from the brief).
  The page reads as one continuous lyric in four numbered movements
  (i. opening / ii. the work / iii. the picture of it / iv. a way home).
  Releases & videos sit *under* each line, so each line announces what
  follows. Tap-to-reveal inline embeds happen on the release cards via
  native `<details name="vs-rel">` (single-open accordion, zero JS).
- **Placeholder lyric:** marked with `PLACEHOLDER LYRIC` comments in
  `Hero.astro`, `ReleaseList.astro`, `VideoGrid.astro`, and `Footer.astro`.
  Eight lines total. Swap for a real lyric (with clearance) when Steven
  hands one over — no schema change needed; lyric text lives inline in the
  components by design (it's the variant's central artifact).
- **Palette decision:** midnight ink ground `#0c0d12` + warm bone type
  `#e9e3d3` + bruised-lilac accent `#b8a6d1`. Deliberately the opposite
  temperament of `studio`'s off-white paper — quiet but dark, warm but
  not sepia.
- **No nav.** Per the brief — "Chrome: minimum." Sections are linked only
  through reading order and an in-hero Spotify "Listen" affordance.
- **No image hero, no portrait, no frame.** Per the brief.
- **Spotify embeds only**, compact (152px) height, lazy-loaded. Apple
  Music gets a text-link fallback if `spotifyId` is missing.
- **Reduced motion:** all entrance animations + hover transforms collapse
  to ~1ms; static layout still reads correctly.
- **Mobile 375px:** verse type uses `clamp(48px, 11vw, 120px)`, so on a
  375px viewport the hero lines render at ~41px — fits within the column
  without awkward mid-phrase breaks. Tested visually against the
  placeholder lines; if real lyric lines are much longer Steven may want
  to soft-break with explicit line elements.
- **Hung punctuation:** declared on the body via `hanging-punctuation:
  first last;` — Safari only today, but degrades gracefully elsewhere.
- **OG card font:** uses `PlexSerif` italic at 84px for three lyric
  lines + `Inter` for the small caps tags. Both already registered in
  `og-images/fonts.ts`. No new font buffers required.
