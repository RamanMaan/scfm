import type { VariantMeta } from "./_types";
import brutalist from "./brutalist/meta";
import editorial from "./editorial/meta";
import studio from "./studio/meta";

/**
 * Showcase order matters. Lead with the directions we want Steven on first:
 * brutalist (primary), studio (second light-background hypothesis). Editorial
 * stays in the repo and on the registry until studio reaches parity; it sits
 * last so the showcase reads as the new direction.
 *
 * Midnight has been sunset (see docs/variant-roadmap.md, Path A) — its page
 * still resolves at /midnight, but it is intentionally absent from this list
 * so the showcase no longer surfaces it.
 */
export const VARIANTS: VariantMeta[] = [brutalist, studio, editorial];

export type { VariantMeta };
