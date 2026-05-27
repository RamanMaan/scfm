# synesthesia — integration notes

## _registry.ts
Add `import synesthesia from "./synesthesia/meta";` and append `synesthesia` to
the VARIANTS array.

## og-images/templates.ts
Add `import { renderSynesthesia } from "../../variants/synesthesia/og-template";`
and register `synesthesia: renderSynesthesia` in the TEMPLATES map.

The `og-template.ts` file inlines its own `Node`/`Style` shape because the
real `Node` type isn't exported from `og-images/templates.ts`. The shape is
structurally identical to `el()` calls in that file — drop-in. If you'd
rather, export `Node` from `og-images/templates.ts` and let the variant
import it; that's a one-line change.

## og-images/fonts.ts
No changes needed. The OG card uses only `Inter` (already registered).
Note: Satori does not load variable font axes, so the OG card approximates
the live hero's reactive weight with `fontWeight: 700` on one line and
`500` on the other to keep the chromatic-contrast feel without needing
Fraunces in the OG renderer.

## package.json
Add a new fontsource package — the variant uses Fraunces Variable as the
monumental serif whose `wght` + `opsz` axes are driven by the audio
analyser:

```
pnpm add @fontsource-variable/fraunces
```

`@fontsource-variable/inter-tight` is already in `package.json` from the
parallax variant and is re-imported here.

## Asset TODO (for Steven, not the integration pass)
The page expects a short preview audio file at **`public/preview.mp3`**
(referenced as `/preview.mp3` from the `<audio>` element). Until that file
exists, the page renders fine — pressing play surfaces a polite "preview
file not yet uploaded" status under the play button, and the page stays in
its idle generative state (slow hue drift, static grain).

Recommended: a 30–45s loudness-normalised excerpt from one of the recent
releases. MP3 at ~128 kbps is plenty.

The audio element has `crossorigin="anonymous"` so the same-origin
`public/` host works fine; if the preview is ever moved to a CDN, that CDN
must serve `Access-Control-Allow-Origin: *` or the AnalyserNode pipeline
will silently produce zeros.

## Notes for review

- **Audio-reactive surface.** `AudioContext` → `MediaElementSource` →
  `AnalyserNode` → `destination`. Single `requestAnimationFrame` loop
  throttled to ~30fps. Each frame computes low/mid/high band energies and
  writes them to CSS custom properties on `<body>` — *no* DOM mutation, no
  layout thrash. The variable-font hero updates via inline
  `font-variation-settings` on a single element. Per-letter Y offset is
  driven by `--sy-l` on each letter span. The graph is torn down on
  `pagehide`; the teardown flag resets on `pageshow` so Safari BFCache
  restores work.

- **Safari quirks handled.**
  - `webkitAudioContext` fallback.
  - `AudioContext` starts `"suspended"` on Safari → we `await ctx.resume()`
    inside the user-gesture handler before `audio.play()`.
  - `pagehide` teardown to avoid leaked contexts in BFCache; `pageshow`
    re-arms the teardown guard.
  - `MediaElementAudioSourceNode` requires CORS to expose data — see
    asset note above.

- **Reduced motion.** When `prefers-reduced-motion: reduce`, the rAF loop
  never starts. Pressing play still plays audio (an explicit user request),
  but the page is frozen at a "loud moment": heavier weight, larger opsz,
  a soft pink glow on the name. The body's idle hue-drift animation also
  collapses to 1ms via the global guard.

- **Autoplay-blocked / no MP3 / errors.** The page is intentional silent:
  generative grain (SVG turbulence) over a 90s violet→magenta→amber→teal
  hue drift via `@property --sy-hue` animation. There is no flat color
  state at any point in the lifecycle.

- **Minimum chrome.** No nav. The play button is the only primary
  affordance above the fold. The footer drops the contact form that
  `parallax` carries — socials only — to honor the "play + release list"
  brief.

- **Spotify only for releases.** `getSpotifyEmbedUrl` is the canonical
  embed; iframes are lazy-injected on `<details toggle>` so the silent
  page never loads any third-party JS. Apple Music is a text link.

- **Mobile-first (375px).** Hero name is `clamp(72px, 22vw, 240px)`,
  flexes to two stacked words. Release row collapses meta under title
  under 560px. All interactive elements ≥ 44px tall.

- **Performance.** No `will-change` on heavy nodes — only `opacity` on the
  grain layer and `font-variation-settings` on the single hero `<h1>`.
  Background gradients use `background-attachment: fixed` so scrolling
  doesn't repaint them. The Spotify iframe is opt-in (per-release).
