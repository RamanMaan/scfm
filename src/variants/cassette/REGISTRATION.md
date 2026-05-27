# cassette — integration notes

## _registry.ts
Add `import cassette from "./cassette/meta";` and append `cassette` to the
VARIANTS array.

## og-images/templates.ts
Add `import { renderCassette } from "../../variants/cassette/og-template";`
and register `cassette: renderCassette` in the TEMPLATES map.

The OG template only uses fonts already loaded by the OG bundle
(JetBrainsMono + PlexSerif). No new OG fonts required.

## og-images/fonts.ts
No changes needed.

## package.json
Two new fontsource packages are imported in `src/variants/cassette/Layout.astro`:

- `@fontsource/courier-prime` — Courier Prime 400 + 700 for technical metadata.
- `@fontsource/reenie-beanie` — Reenie Beanie 400 for hand-marker labels.

Install command:

```
pnpm add @fontsource/courier-prime @fontsource/reenie-beanie
```

(`@fontsource-variable/inter-tight` is already in the lockfile and is reused
for body type — no install needed for it.)

## Notes for review

- **Marker color committed:** sharpie red `#c4302b` (`--cz-marker`). One ink,
  used only for hand-written accents, the registration plate, the form
  shadow, and the stamp.
- **Spool motion:** spools rotate at a constant slow rate (8s & 8.4s, opposite
  directions for a mechanical feel). No JS, no Spotify postMessage wiring —
  the brief allowed either, and constant-spin is the simpler commitment.
  Reduced-motion stops them dead. (Could be wired to Spotify `postMessage`
  later, but that requires `https://open.spotify.com` origin handling and was
  out of scope for this pass.)
- **Tracklist split:** newest releases go to Side A, older to Side B, computed
  by `Math.ceil(releases.length / 2)`. With 5 most-recent releases this gives
  3 / 2.
- **Spotify embeds** are gated behind a `<details>` "Cue track" toggle to keep
  the J-card visually quiet — opening one embeds the compact (152px) player
  inline under the row. Apple Music remains a text link, per the repo rule.
- **Contact form:** ported the same Web3Forms approach used by the parallax
  Footer (same access-key env var, same honeypot, same status pattern). No
  new env vars added.
- **Mobile (375px) check:** the cassette body uses `aspect-ratio: 1.6 / 1` and
  fluid clamps, the tracklist collapses to a single column with a dashed
  divider, sprocket holes / reels scale down via `clamp()`. The spine nav
  drops the catalog number and shrinks `letter-spacing` under 480px so the
  four section links still fit.
- **No new content fields** were added — `catalogNumber` ("SC-001") and tape
  length ("C-XX") are local fabrications, kept out of the content schema on
  purpose since they're cassette-only set dressing.
