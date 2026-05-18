export interface VariantMeta {
  /** URL slug, e.g. "midnight" -> /midnight */
  id: string;
  /** Display name shown on the showcase, e.g. "Midnight" */
  name: string;
  /** One-sentence vibe / pitch for this variant */
  tagline: string;
  /** Short adjectives used as filter chips on the showcase */
  vibeTags: string[];
  /** Public path to a 1200x630 OG image; defaults to /og/default.png if omitted */
  ogImage?: string;
  /** Accessible alt text for the OG image, surfaced in og:image:alt + twitter:image:alt */
  ogImageAlt?: string;
  /** Optional path to a small preview image for the showcase card */
  thumbnail?: string;
}
