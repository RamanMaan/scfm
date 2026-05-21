# Steven Christopher — Decision Log

A running, dated record of design reviews with Steven and the decisions that
came out of them. Read this *before* making directional changes — it is the
canonical record of what Steven has actually said, not what we paraphrased.

Newest entries on top.

---

## 2026-05-20 — Atelier added (third light-background test)

After the references in
[`references.md`](references.md) were promoted to canonical (Marc Jacobs
group portrait + monochrome-berets cantilever-chair music-video opener), a
third variant was added so we present *two* light-background challengers
against `/brutalist` rather than one.

### Decision

Add **`/atelier`** alongside `/studio`. Same paper-bright, light, sparse
register; *different* hypothesis tested.

| | `/studio` | `/atelier` |
|---|---|---|
| Hero subject | solo (drum-still SVG) | group on cantilever chairs (music-video-opener SVG) |
| Type display | Inter Tight (geometric sans) | IBM Plex Serif (stark structural slab serif) |
| Type body | Inter Tight | Inter Tight |
| Layout | gallery-catalog list | editorial monograph plates (roman numerals, alternating indents) |
| Section motif | ruled lines | cantilever-chair side-profile, in line |
| Accent | faded steel blue (`#5f7a90`) | dusty oxblood (`#5a3a3a`) |

Both variants test "designed and light without going zine / monospace,"
but each leans into a different reference and a different typographic
register — the test is not "studio vs atelier," it is "geometric sans
gallery vs structural serif monograph, both pulling from the same
validated imagery."

### Files added / changed

- `src/variants/atelier/{Layout.astro,meta.ts}` and components
  `Hero.astro`, `Nav.astro`, `ReleaseList.astro`, `VideoGrid.astro`,
  `Footer.astro`, `Divider.astro`
- `src/pages/atelier.astro`
- `src/variants/_registry.ts` — `atelier` inserted between `studio` and
  `editorial`
- `src/integrations/og-images/templates.ts` — `renderAtelier` template
- `src/integrations/og-images/fonts.ts` — IBM Plex Serif 500 + 400-italic
  added for OG card
- `package.json` — `@fontsource/ibm-plex-serif` added

### What it tests next round

- Whether the same validated imagery (cantilever-chair group / drums-on-
  white) reads more powerfully in a *structural-serif monograph* than in
  a *geometric-sans gallery catalog*. Both variants ship the same
  composition lineage in the hero so the contrast is purely typographic
  + layout-system.
- Whether a stark structural serif (IBM Plex Serif) holds the
  *futuristic-and-retro* tension as well as monospace does — without
  slipping back into the decorative-italic territory Steven killed.

### What this does NOT change

- `/brutalist` is still primary.
- The "no bio / origin / hover-only critical UI / decorative serif" rules
  all still apply globally — atelier uses IBM Plex Serif because it is
  *stark and structural*, not decorative; this is explicitly allowed by
  `SKILL.md` (Typography Direction).
- Profile data, content collections, and the showcase grid are untouched.

---

## 2026-05-20 — Roadmap execution (post-review)

Acting on [`docs/variant-roadmap.md`](../../../docs/variant-roadmap.md).

### Decisions locked in

1. **Midnight — sunset (Path A).** Removed from `src/variants/_registry.ts` so
   it no longer surfaces on the showcase. `src/variants/midnight/` and
   `src/pages/midnight.astro` are intentionally kept so any previously-shared
   preview link still resolves; the OG integration explicitly preserves
   `/og/midnight.png` via an `ARCHIVED_VARIANT_IDS` list.
2. **Editorial — kept, demoted, slated for deletion.** Not in the lead pair
   anymore; reordered last in the registry and its meta tagline + OG card now
   read "Archived — see /brutalist + /studio." It will be deleted once
   `/studio` is on parity with the rest of the catalog (per roadmap).
3. **Brutalist — refined, not redesigned.**
   - Hero stripped of every origin / based / discipline / field-note label —
     name and one focal frame only.
   - Real focal asset: shipped as a hand-built monochrome SVG composition
     suggesting the *drums-on-white* concept Steven described. To be swapped
     for the real still / video once it exists.
   - Accent test: shipped option **(a)** — kept a deep muted red (`#6a1a14`)
     but reserved it for `::selection` and `:focus-visible` only. Removed red
     from the hero word color. (b) desaturated-only and (c) no-accent variants
     can be A/B'd next round by flipping `--br-accent`.
   - Typography locked: real licensed mono — `@fontsource/jetbrains-mono`
     400/700, imported per variant. No more system-stack fallback.
   - Below-the-fold structure: hero owns the viewport; releases / videos /
     press flow under it. Minimal in-hero nav (Music / Video / Contact),
     matching the whatszep model.
4. **Studio — new variant created.** Tests the second light-background
   hypothesis: paper-bright, stark geometric sans (`Inter Tight Variable`),
   gallery-catalog composition, generous negative space, one focal frame,
   three-link nav. Same content layer as every other variant. Lives at
   [`src/variants/studio/`](../../../src/variants/studio/) and
   [`src/pages/studio.astro`](../../../src/pages/studio.astro).
5. **Typography locked at the dep level.** Mono: JetBrains Mono. Sans: Inter
   Tight (variable). `@fontsource/cormorant-garamond` removed — no surface
   uses decorative serifs anymore.
6. **Profile data untouched.** `bio` / `origin` / `basedIn` / `longBio` stay
   in `src/content/artist/profile.json` so press-kit surfaces can still query
   them. The "no bio on homepage" rule is enforced at the component layer.
7. **OG cards refreshed.** New `studio` template; `brutalist` template lost
   the red accent and updated its bottom rule; `editorial` and `midnight`
   cards now read as archived.

### What we present next round

- `/brutalist` (primary) — paper-bright, mono, one focal frame.
- `/studio` (challenger) — paper-bright, geometric sans, gallery-catalog.

One question for Steven: *"Which of these feels more like the record?"*

---

## 2026-05-20 — First three-variant review

**Variants reviewed:** `/midnight`, `/editorial`, `/brutalist`.

### One-word reactions

| Variant    | Steven's word    |
| ---------- | ---------------- |
| midnight   | "stock template" |
| editorial  | "basic"          |
| brutalist  | "good start"     |

### Ranking

1. **Brutalist** — clear winner.
2. Editorial.
3. Midnight.

> *"Embarrassed to send: editorial and midnight."*

### Verbatim quotes

On **midnight**:
- *"Doesn't jump out to me. Too dark without images, not as eye catching."*
- *"Don't like the font, feels too rounded, too soft."*

On **editorial**:
- *"Doesn't give me the right feeling, looks like a basic template."*
- *"The font is way too squirly squiggly round."*
- Keep: *"the background color is good."*
- *"Remove the origin/based/practice — people know what they're coming for."*

On **brutalist**:
- *"Minimal, feels more masculine, stronger. Feels closer to what I'm trying
  to achieve."*
- *"Feels futuristic and retro at the same time."*
- *"It feels designed, not like a template. I like how light the background
  is vs a dark theme like one. Not against dark backgrounds but in this case
  I like it."*
- *"Don't need the origin/brand stuff — cut out."*

Defining quote (taped above the desk):
> *"I want it to feel curated and designed, not like a template. Special and
> minimal."*

### References Steven gave us

- [whatszep.com](https://www.whatszep.com/) — *"a one page simple landing page
  with links to see more info, the landing page image is strong."*
- [beyonce.com](https://beyonce.com/)

### "First frame of next single"

> *"Me playing the drums, on an all-white background and stage, looking at the
> drums, monochrome."*

This is the visual hypothesis the website should be reverse-engineered from.

### Decisions locked in

1. **Brutalist** is the primary direction. Refine and extend, don't redesign.
2. **Cut all bio / origin / based / discipline / field-note copy** from every
   variant. People know who they're visiting.
3. **Light, paper-bright backgrounds are validated.** Dark is not killed, but
   it is no longer the default.
4. **Decorative serifs are dead.** No rounded, soft, italic, or display-serif
   typography. Mono + stark geometric sans only.
5. The brand carries a *visual* tension in addition to its emotional one:
   **futuristic and retro at the same time; designed and curated, never
   templated.** Promoted to top-level principle.
6. The website is a one-page, hero-image-led experience modeled on the
   `whatszep` / `beyonce` patterns. Everything else lives behind a link.

### Open questions for next review

- Does a **dark variant** survive at all, or do we sunset midnight entirely?
  (Steven left a small door open: *"not against dark backgrounds."*)
- Does brutalist's red accent (`#ff2400`) survive once real imagery enters?
- Is there room for a **second light-background variant** that is designed
  but warmer / less rigid than brutalist (gallery-catalog rather than zine)?
- Does the eventual hero need to be a static image, a video loop, or
  alternating stills from the next single's shoot?

### Addendum — imagery references shared 2026-05-20 (post-meeting)

Steven sent two reference images directly after the call. Both are saved as
canonical assets in [`./references/`](./references/) and described in full
at [`references.md`](references.md).

1. **Marc Jacobs group portrait** — high-key white seamless, group-as-
   subject, controlled dusty palette, layered art-directed styling, direct
   gaze without warmth.
2. **Monochrome leather + berets on tubular chairs** — explicitly named by
   Steven as *"what I visualize for the opening of my music video."* This
   is the strongest visual signal we have. Modernist Breuer-style cantilever
   chairs, uniform wardrobe (black leather + berets), foreground figure
   photographing back at the viewer.

#### What this changes in the brief

These references contradict and replace earlier guidance:

- The previous *"candid / unposed / accidentally captured / film stills"*
  framing for photography is **dropped.** Steven's references are the
  opposite of candid — they are deliberately staged, costumed, and
  art-directed campaign editorial. Intimacy comes from emotional restraint
  (unsmiling, direct gaze, controlled distance), not from moment-capture.
- The visual lineage is **fashion-campaign editorial** — Marc Jacobs / Heaven,
  Wales Bonner, Mowalola, Telfar, Saint Laurent campaign work — *not* film
  stills. A24 stays as atmospheric reference, not photographic lineage.
- The **studio / high-key white seamless** register is promoted from
  secondary to **dominant** for hero / portrait imagery. The nocturnal
  register is now reserved for music-video B-roll and atmosphere shots.
- **Group portraits** are valid compositions. The brief had over-emphasized
  solitary subjects; Steven's references use crowd-as-isolation (everyone
  present, no one warm) just as effectively.
- **Modernist tubular furniture** (Breuer Cesca-style chairs) and similar
  mid-century forms are part of the visual world. They are the
  *futuristic-and-retro* tension expressed as physical objects, and they
  pair naturally with the brutalist site's monospace + paper-bright
  treatment.
- **Wardrobe and styling are storytelling**, not dressing. Black leather +
  beret as a uniform across multiple subjects is a validated direction.

#### What this changes for the variants

- `/brutalist` already lives in the right world (paper-bright, designed,
  structural). Its hero should now plan to receive a **wide horizontal
  monochrome group portrait or single-subject white-seamless still** as the
  primary asset. Reserve hero proportions accordingly.
- `/studio` (the planned replacement for editorial) gains a much more
  concrete brief: high-key white seamless + stark geometric sans + space for
  exactly this kind of campaign image.
- The recommendation to sunset `/midnight` strengthens — none of Steven's
  references are dark.
