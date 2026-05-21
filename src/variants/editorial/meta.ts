import type { VariantMeta } from "../_types";

/**
 * Editorial is kept in the repo for reference only — the italic-display-serif
 * direction was rejected in the 2026-05-20 review. It stays in the registry
 * (sitting last) until /studio reaches parity, at which point it can be
 * deleted. See docs/variant-roadmap.md.
 */
const meta: VariantMeta = {
  id: "editorial",
  name: "Editorial",
  tagline: "Earlier iteration. Kept for reference until /studio reaches parity.",
  vibeTags: ["archive", "legacy"],
  ogImage: "/og/editorial.png",
  ogImageAlt:
    "Steven Christopher \u2014 editorial variant (archived). Earlier iteration kept for reference.",
};

export default meta;
