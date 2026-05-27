# nightdrive — integration notes

## _registry.ts
Add `import nightdrive from "./nightdrive/meta";` and append `nightdrive` to the
VARIANTS array.

## og-images/templates.ts
Add `import { renderNightdrive } from "../../variants/nightdrive/og-template";`
and register `nightdrive: renderNightdrive` in the TEMPLATES map.

The OG template uses only fonts already loaded (`Inter`, `JetBrainsMono`,
`PlexSerif`) — no font changes needed.

It also inlines its own `Node` / `Style` / `el` helper types because
`templates.ts` does not export them today. When the integration pass wires the
template in, you can either:

- leave the inlined helpers as-is (works — Satori only cares about the runtime
  shape), or
- export `Node` from `templates.ts` and have `og-template.ts` import it. The
  current shape is identical.

## og-images/fonts.ts
No changes needed.

## package.json
**Two new fontsource packages required:**

```bash
pnpm add @fontsource-variable/fraunces @fontsource/dm-sans @fontsource/dm-mono
```

- `@fontsource-variable/fraunces` — wide-axis neon-display serif for the hero
  lyric, section headings, and italic accents. The variable axis (`SOFT`,
  `opsz`, `wght`) is used directly in CSS `font-variation-settings`.
- `@fontsource/dm-sans` (400, 500) — body sans, intentionally warm/geometric to
  contrast the serif. Replaces the "neutral body" slot.
- `@fontsource/dm-mono` (400) — tabular accents (call-sign labels, frequency
  numerals, HUD readouts).

All three are imported from `src/variants/nightdrive/Layout.astro`. None of the
other variants share these imports, so no risk of duplicate loads.

## Notes for review

- **No portrait hero.** The hero focal is a lit "dedication card" with a
  hand-set lyric ("It's 2 a.m., the city's still warm, and somebody's singing
  your name."). The portrait is a small secondary inset to the right (desktop)
  / below (mobile). The lyric is placeholder copy — Steven can swap it for a
  real lyric or dedication at any time without restructuring.
- **Releases as FM presets.** Each release renders on a dial frequency
  (87.5–107.9 MHz, newest at the top of the band). The frequency numerals are
  the visible glow ("MHz" suffix in amber-soft). A glowing dot lights up to
  full amber on hover/focus/open. Click expands to a compact Spotify embed +
  open-in-spotify + apple-music links. The dial strip above is decorative.
- **Press is a rolling marquee.** Pauses on hover OR focus-within (so keyboard
  users can stop it too). Reduced-motion drops the animation entirely and
  switches the viewport to horizontal-overflow scroll so all quotes stay
  reachable.
- **Grain + glow.** A high-frequency SVG `feTurbulence` is tiled at 220px and
  blended `overlay` on top of the page. The radial glows breathe via a slow
  42-second alternating drift (`.nd::before`). Both are killed under
  `prefers-reduced-motion: reduce`.
- **Spotify only.** Apple Music renders as a ghost text-link, never an embed.
- **No new shared utilities.** Everything new is contained in
  `src/variants/nightdrive/`. The page wrapper queries the existing `artist`,
  `releases`, `videos`, and `press` collections via `getEntry`/`getCollection`.
- **Mobile-first.** Verified layout decisions at 375px: hero stacks (lyric
  card → portrait inset → broadcast bar); preset grid collapses to a two-row
  layout (freq+meta on top, title below); marquee unchanged; nav drops its
  "102.7 / Steven" call sign and keeps just the dot + section links.
