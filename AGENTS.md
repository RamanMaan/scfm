# Agent Guide

This repo is a prototyping ground for Steven Christopher's website. Multiple
design variants share one content layer; pick a variant at `/`, view it at
`/<variant-id>`.

## Source of truth

- **Artist info, releases, videos, press:** [`src/content/`](src/content/)
  (typed by [`src/content.config.ts`](src/content.config.ts)).
  Never duplicate this data in markdown or component code - query it via
  `getEntry`/`getCollection`.
- **Streaming/social URLs and IDs:** all in
  [`src/content/artist/profile.json`](src/content/artist/profile.json).

## Architecture

```
src/
  content.config.ts        Zod schemas
  content/                 Shared by every variant
  lib/                     Tiny utilities (spotify, dates, socials) - no UI
  layouts/BaseHtml.astro   Minimal HTML shell; takes title/description/ogImage
  variants/
    _types.ts              VariantMeta contract
    _registry.ts           VARIANTS array consumed by the showcase
    <id>/                  Self-contained: Layout.astro, meta.ts, components/
  pages/
    index.astro            Showcase grid
    <id>.astro             Thin wrapper per variant
public/og/                 OG images (referenced by absolute path)
```

## Guardrails

1. **No shared UI across variants.** The whole point is design exploration.
   Each variant rolls its own Hero, ReleaseList, etc. Only the content layer
   and `src/lib/` utilities are shared.
2. **Spotify is the canonical embed.** Apple Music gets a text link, never an
   iframe.
3. **Variant slugs are descriptive vibes**, not numbers (`/brutalist`, not
   `/variant-1`).
4. **Schema changes affect every variant** - add new fields as `optional()`
   whenever possible.
5. **Images** belong in `src/assets/` (so Astro optimizes them), referenced via
   `image()` in the schema. The only exception is OG images: those are
   generated at build time as 1200x630 PNGs into `dist/og/<id>.png` by the
   [`ogImages`](src/integrations/og-images/) integration. To change a card,
   edit [`src/integrations/og-images/templates.ts`](src/integrations/og-images/templates.ts).
6. **Mobile-first, always.** ~99% of traffic is mobile. Design every layout at
   ~375px first; desktop is the upscale. Touch is the primary input — tap
   targets ≥ 44×44px, and never put critical info, state, or actions behind
   `:hover` only. Hover is enhancement, not the interaction.

See [`.cursor/rules/brand.mdc`](.cursor/rules/brand.mdc) for the full UI vibe
rules (color, type, motion, mobile, content) — read it before touching any
variant.

## Adding a new variant

1. Create `src/variants/<id>/` with `Layout.astro`, `meta.ts`, and
   `components/`.
2. Create `src/pages/<id>.astro` - a thin wrapper that queries the shared
   collections and composes the variant's components.
3. Register the meta in
   [`src/variants/_registry.ts`](src/variants/_registry.ts) so it appears on
   the showcase.
4. Add a card template for the new id in
   [`src/integrations/og-images/templates.ts`](src/integrations/og-images/templates.ts)
   and set `ogImage: "/og/<id>.png"` + `ogImageAlt` in `meta.ts`. The PNG is
   generated automatically on `pnpm build`.

## Pending content (TODOs for the user, not for agents)

- Real Spotify track/album IDs for most releases - see `spotifyId:` fields
  across [`src/content/releases/*.md`](src/content/releases/).
- YouTube IDs in [`src/content/videos/`](src/content/videos/).
- Press photos at `src/assets/artist/` + the `photo` field in
  `profile.json`.
- Cover art at `src/assets/releases/` + `coverArt` field per release.

## Deploy

Vercel, already configured. PR branches get preview URLs - share those with
Steven instead of the production link.

# Notes

You are helping build an experimental musician website. The hard part is curation, not generation.

Priorities:
1. Emotional impact
2. Distinctiveness
3. Motion quality
4. Audio-visual cohesion
5. Performance

Avoid:
- startup aesthetics
- generic SaaS layouts
- overused gradients
- template-like sections
- excessive text
- obvious AI-generated visuals

All code should:
- maintain high performance
- support reduced motion
- avoid layout thrashing
- preserve accessibility
- separate animation orchestration cleanly

<frontend_aesthetics>
You tend to converge toward generic, "on distribution" outputs. In frontend design, this creates what users call the "AI slop" aesthetic. Avoid this: make creative, distinctive frontends that surprise and delight.

Focus on:
- Typography: Choose fonts that are beautiful, unique, and interesting. Avoid generic fonts like Arial and Inter; opt instead for distinctive choices that elevate the frontend's aesthetics.
- Color & Theme: Commit to a cohesive aesthetic. Use CSS variables for consistency. Dominant colors with sharp accents outperform timid, evenly-distributed palettes. Draw from IDE themes and cultural aesthetics for inspiration.
- Motion: Use animations for effects and micro-interactions. Prioritize CSS-only solutions for HTML. Use Motion library for React when available. Focus on high-impact moments: one well-orchestrated page load with staggered reveals (animation-delay) creates more delight than scattered micro-interactions.
- Backgrounds: Create atmosphere and depth rather than defaulting to solid colors. Layer CSS gradients, use geometric patterns, or add contextual effects that match the overall aesthetic.

Avoid generic AI-generated aesthetics:
- Overused font families (Inter, Roboto, Arial, system fonts)
- Clichéd color schemes (particularly purple gradients on white backgrounds)
- Predictable layouts and component patterns
- Cookie-cutter design that lacks context-specific character

Interpret creatively and make unexpected choices that feel genuinely designed for the context. Vary between light and dark themes, different fonts, different aesthetics. You still tend to converge on common choices (Space Grotesk, for example) across generations. Avoid this: it is critical that you think outside the box!
</frontend_aesthetics>