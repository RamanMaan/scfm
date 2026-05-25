import type { VariantMeta } from "./_types";
import brutalist from "./brutalist/meta";
import parallax from "./parallax/meta";
import studio from "./studio/meta";

/**
 * Showcase order matters. Brutalist leads as the primary direction; studio is
 * the light-background challenger; parallax tests a hero-first kinetic layout
 * built on the studio palette.
 */
export const VARIANTS: VariantMeta[] = [brutalist, studio, parallax];

export type { VariantMeta };
