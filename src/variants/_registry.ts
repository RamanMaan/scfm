import type { VariantMeta } from "./_types";
import atelier from "./atelier/meta";
import brutalist from "./brutalist/meta";
import editorial from "./editorial/meta";
import studio from "./studio/meta";

/**
 * Showcase order matters. Lead with the directions we want Steven on first:
 * brutalist (primary), studio + atelier (the two light-background challengers,
 * each testing a different "designed, not templated" hypothesis). Editorial
 * stays in the repo and on the registry until those reach parity; it sits
 * last so the showcase reads as the new direction.
 *
 * Midnight has been sunset (see docs/variant-roadmap.md, Path A) — its page
 * still resolves at /midnight, but it is intentionally absent from this list
 * so the showcase no longer surfaces it.
 */
export const VARIANTS: VariantMeta[] = [brutalist, studio, atelier, editorial];

export type { VariantMeta };
