# poster — integration notes

## _registry.ts
Add `import poster from "./poster/meta";` and append `poster` to the VARIANTS
array.

## og-images/templates.ts
Add `import { renderPoster } from "../../variants/poster/og-template";` and
register `poster: renderPoster` in the TEMPLATES map.

## og-images/fonts.ts
No changes needed. The OG template uses only `JetBrainsMono` (700) and
`Inter` (already loaded). The live page uses `@fontsource/big-shoulders-display`
and `@fontsource/space-mono`, but those aren't needed for OG since satori
falls back gracefully to the registered families.

## package.json
Two new fontsource packages are imported by the live `Layout.astro` — please
install during the integration pass:

```sh
pnpm add @fontsource/big-shoulders-display @fontsource/space-mono
```

(Imported as `@fontsource/big-shoulders-display/700.css`,
`@fontsource/big-shoulders-display/900.css`, `@fontsource/space-mono/400.css`,
and `@fontsource/space-mono/700.css`.)

## Notes for review

- **Placeholder tour dates.** `components/TourDates.astro` ships seven invented
  spring-2026 dates (Memphis → LA routing). Each entry is flagged with
  `placeholder: true` in code and the section has a visible
  "Placeholder routing" disclaimer on the page. Replace these once Steven has
  a real tour collection wired in. The repo has no `tours` schema by design
  — adding one is out of scope per the scaffolding contract.
- **Two-ink overprint via `.po-ink2` utility.** Headings get a `data-text`
  attribute so the two pseudo-element layers (one pink, one ink-blue, each
  multiplied against paper) render the misaligned overprint. If a heading
  is dynamic, make sure `data-text` matches the text node.
- **Registration offset is intentional.** `--po-shift-x: 3px;
  --po-shift-y: -2px;` on `.po`. This is *visual*, not motion, so it stays
  on under `prefers-reduced-motion`.
- **One animation respects reduced motion:** the press-quote marquee in
  `Footer.astro` switches to a static wrapping row, the starburst stops
  rotating, and the video tiles drop their tilt. The pink shadow on every
  card is a static effect.
- **Press quote marquee** pulls from the real `press` collection
  (duplicated once in JS for seamless loop).
- **Reduced motion + halftone**: the halftone pattern is a CSS
  radial-gradient dot grid (`.po-halftone`), so it scales fluidly at 375px.
- **Spotify embeds** use the compact 152px height with `theme=1` (light) so
  the embed reads on the paper background. Apple Music remains a text link
  per repo rules.
