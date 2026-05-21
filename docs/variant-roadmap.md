# Variant Roadmap — Post 2026-05-20 Review

Steven ranked the three variants in this review:

1. **Brutalist** — clear winner; *"feels designed, not like a template."*
2. Editorial — *"basic."*
3. Midnight — *"stock template."*

Three variants was the exploration ground. Going forward we converge to **two
refined directions** that test *different* hypotheses about the same brand.
The full meeting record is in
[`.cursor/skills/steven-christopher-brand/decisions.md`](../.cursor/skills/steven-christopher-brand/decisions.md).

---

## `/brutalist` — REFINE & EXTEND (primary direction)

**Hypothesis:** the brand is best expressed as *designed, monospace,
paper-bright, structurally composed.*

**Survival call:** keep, refine, extend. This is the lead direction we present
next round.

### What stays

- Paper-bright background (`--br-bg: #ffffff`).
- Monospace as the primary type voice.
- Black ink, hard rules, no rounded corners.
- One-page, dense-but-deliberate composition.

### What changes

1. **Cut every "origin / based / discipline / field-note" label** from
   `src/variants/brutalist/components/Hero.astro`. Steven, twice unprompted:
   *"don't need the origin/brand stuff — cut out."* The hero should be name +
   one focal asset. Nothing else.
2. **Replace the placeholder hero with a real focal image.** Two validated
   visual targets exist (see
   [`.cursor/skills/steven-christopher-brand/references.md`](../.cursor/skills/steven-christopher-brand/references.md)):
   the *"drums on white, monochrome"* first frame, and the black-and-white
   leather-and-berets group portrait Steven named as the opening of his
   music video. Both live in the same world (high-key white seamless,
   monochrome, modernist props). Until shoot-ready Steven assets exist, ship
   a single monochrome still that aligns with that lineage — not a
   typographic-only hero, and not anything candid or atmospheric. Reserve
   hero proportions for a **wide horizontal image** so either composition
   fits without cropping.
3. **Reconsider the red accent** (`--br-accent: #ff2400`). Bright red is the
   loudest thing on the site and the only saturated color in the brand. Test
   variants with: (a) red kept but reduced to selection / focus only, (b) red
   replaced by a *desaturated* accent (deep muted red, faded steel blue), (c)
   no accent — pure black on paper. Bring all three to next review.
4. **Pull the typography one notch more deliberate.** The current `ui-monospace`
   stack is functional but defaults too readily to system Menlo / Cascadia.
   Ship a real licensed mono (JetBrains Mono, IBM Plex Mono, GT America Mono,
   or Söhne Mono) so the page feels *authored* the moment it loads.
5. **Match the `whatszep` model.** One strong hero image, minimal nav, links
   out. Push releases / videos / press *below the fold or behind a link*, not
   stacked into the homepage as feature blocks.
6. **Audit motion.** No springy, attention-grabbing animation. Slow, deliberate
   transitions only — even for hover and tap states.

### What it tests next round

- Does the *futuristic-and-retro* tension hold once real imagery enters the
  hero?
- Does paper-bright still feel like Steven, or does adding a real subject
  pull us back toward wanting a darker treatment?
- Does removing the red accent strengthen or weaken the design?

---

## `/editorial` — KILL the current iteration; REPLACE with a "studio" variant

**Hypothesis (current iteration):** fashion-editorial, italic display serif,
ivory paper-stock — *rejected.*

**Survival call:** kill the current type and layout system. Do not iterate on
the italic-display-serif identity — Steven called it *"squirly squiggly round"*
and *"a basic template."* That direction is dead.

### What we salvage

- **The light background instinct.** Steven validated paper-stock backgrounds
  generally; the editorial ivory was the only specific element he kept.

### What we replace it with — the new `/studio` variant

The slot becomes a second light-background variant that tests a *different*
hypothesis from brutalist:

> Can we be designed, light, and minimal — without going zine / monospace?
> A gallery-catalog feel: stark geometric sans, generous white, single
> hero image, almost no UI.

This keeps a meaningful contrast on the showcase: brutalist (mono, dense,
zine-archival) vs. studio (sans, sparse, gallery-curated). Both designed,
both light, testing *which kind* of designed Steven responds to.

### Steps

1. Create `src/variants/studio/` mirroring the existing variant structure.
2. Type system: licensed stark geometric sans (Söhne / Suisse Int'l /
   GT America / Inter Tight) for everything; no serif, no mono.
3. Layout: single full-bleed wide-horizontal hero image (sized for Steven's
   validated reference imagery — Marc Jacobs group portrait,
   monochrome-berets music-video opener), name + single line, three-link
   nav, content sections lower with extreme negative space.
4. Background: paper-bright `#ffffff`. Floor-shadow treatment under any
   subject imagery, otherwise the world dissolves to white — match the
   environment in the reference images literally.
5. Register in `src/variants/_registry.ts` and add an OG-image template in
   `src/integrations/og-images/templates.ts`.
6. Delete `src/variants/editorial/` *after* the studio variant is on parity,
   so we do not lose a slot mid-iteration. Until then, leave editorial in
   place but unlinked from the showcase header by reordering it last in
   `_registry.ts`.

### What it tests next round

- *Light + designed* without the brutalist density — does it still feel like
  Steven, or does removing the structural rigor make it slip back toward
  template?
- Whether the validated imagery (Marc Jacobs group portrait, monochrome
  music-video-opener) reads more powerfully inside a sparse gallery layout
  than inside the brutalist zine layout. Both variants will receive the
  same hero asset for the next review so the comparison is purely about
  container, not content.

---

## `/midnight` — SUNSET (or hold for a future dark study)

**Hypothesis (current iteration):** dark, photo-led, soft-serif, late-night
atmosphere — *rejected.*

**Survival call:** sunset for the next review. The current implementation
combines the *two* things Steven called out as wrong (rounded soft serif +
template feel), and the imagery references he sent post-meeting are *all*
high-key white — none dark. The case for keeping a dark variant is now
weaker than it was during the call. Recommendation has hardened toward
Path A below.

### Two paths — pick one before next review

**Path A — Remove from showcase.** Cleanest. Take midnight off the registry,
keep the source in the repo for archival. Present *brutalist* and *studio*
as the two refined directions. Recommended if we want a focused next review.

**Path B — Re-conceive as a "dark brutalist" study.** Steven left the door
open: *"not against dark backgrounds, but in this case I like [the light
one]."* If we want a true A/B on background tone, we rebuild midnight as the
ink-black mirror of brutalist — same monospace system, same designed-not-
templated rigor, just inverted. *Same* hypothesis as brutalist, *different*
treatment. Risk: it dilutes the experimental ground; reward: gives Steven a
direct dark-vs-light comparison on a treatment he already likes.

**Recommendation:** Path A unless Steven explicitly asks to see a dark
treatment. We have one clear winner; spending cycles on a hedge dilutes the
next review.

### Steps (Path A)

1. Remove `midnight` from `src/variants/_registry.ts`.
2. Leave `src/variants/midnight/` and `src/pages/midnight.astro` in the
   repo so the URL still resolves (avoid breaking any preview links already
   shared with Steven), but stop linking to it from the showcase.
3. Note the sunset in `decisions.md` so the call is recorded.

---

## Cross-cutting work (applies to whichever variants survive)

These are not variant-specific — they apply globally and should land before
the next review.

- **Update `src/variants/_registry.ts` taglines** so the showcase reads as
  the new direction, not the old one. Drop "fashion-editorial" / "ivory" /
  "late-night R&B atmosphere" framing.
- **Cut bio / origin copy at the data layer** if any of it lives in
  `src/content/artist/profile.json`, so no variant accidentally renders it.
  (Audit before deleting — some fields may legitimately power press kits.)
- **Lock typography choices.** Pick the licensed mono and the licensed
  geometric sans now, wire them in once via `src/layouts/BaseHtml.astro` or a
  per-variant import, and stop relying on system stacks.
- **Refresh OG images** in `src/integrations/og-images/templates.ts` for any
  variant whose tagline / look has changed.

---

## Sequencing for next review

1. Land cross-cutting work (typography, copy cut, registry).
2. Ship brutalist refinements (hero re-cut, real focal image, accent test).
3. Stand up `/studio` to feature parity.
4. Decide on midnight (Path A vs Path B) before showing.
5. Present **two** directions to Steven with a single question:
   *"Which of these feels more like the record?"*
