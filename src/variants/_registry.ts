import type { VariantMeta } from "./_types";
import brutalist from "./brutalist/meta";
import cassette from "./cassette/meta";
import nightdrive from "./nightdrive/meta";
import parallax from "./parallax/meta";
import poster from "./poster/meta";
import studio from "./studio/meta";
import synesthesia from "./synesthesia/meta";
import verse from "./verse/meta";

/**
 * Showcase order: the original three (brutalist / studio / parallax) lead;
 * the new wave follows. Each new variant pushes against a different axis of
 * the original three's shared paper-bright print temperament — see plan.md.
 */
export const VARIANTS: VariantMeta[] = [
  brutalist,
  studio,
  parallax,
  nightdrive,
  cassette,
  verse,
  synesthesia,
  poster,
];

export type { VariantMeta };
