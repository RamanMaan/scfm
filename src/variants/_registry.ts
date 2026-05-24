import type { VariantMeta } from "./_types";
import brutalist from "./brutalist/meta";
import studio from "./studio/meta";

/**
 * Showcase order matters. Brutalist leads as the primary direction; studio is
 * the light-background challenger that survived alongside it.
 *
 * Midnight, atelier, and editorial have been sunset. Midnight's page still
 * resolves at /midnight for archival; atelier and editorial have been removed
 * entirely.
 */
export const VARIANTS: VariantMeta[] = [brutalist, studio];

export type { VariantMeta };
