import { mkdir, writeFile } from "node:fs/promises";

import type { AstroIntegration } from "astro";
import { Resvg } from "@resvg/resvg-js";
import satori from "satori";

import { VARIANTS } from "../../variants/_registry";
import { loadFonts } from "./fonts";
import { TEMPLATES } from "./templates";

const WIDTH = 1200;
const HEIGHT = 630;

/**
 * Variants that are no longer in the showcase registry but whose pages still
 * resolve (e.g. sunset directions kept around so previously-shared preview
 * links don't 404). Their OG images are still generated.
 */
const ARCHIVED_VARIANT_IDS = ["midnight"] as const;

/**
 * Astro integration that generates one PNG per variant (plus a `default`
 * fallback) under `dist/og/<id>.png` during `astro build`. The PNGs are real
 * 1200x630 raster images so iMessage / Slack / Twitter / Facebook / LinkedIn /
 * WhatsApp all render link previews.
 *
 * @example
 * ```ts
 * // astro.config.mjs
 * import ogImages from "./src/integrations/og-images";
 * export default defineConfig({ integrations: [ogImages()] });
 * ```
 */
export default function ogImages(): AstroIntegration {
  return {
    name: "og-images",
    hooks: {
      "astro:build:done": async ({ dir, logger }) => {
        const fonts = await loadFonts();
        const cardIds = [
          "default",
          ...VARIANTS.map((v) => v.id),
          ...ARCHIVED_VARIANT_IDS,
        ];

        const ogDir = new URL("og/", dir);
        await mkdir(ogDir, { recursive: true });

        for (const id of cardIds) {
          const render = TEMPLATES[id];
          if (!render) {
            logger.warn(`no template for "${id}", skipping`);
            continue;
          }

          const svg = await satori(render(), {
            width: WIDTH,
            height: HEIGHT,
            fonts,
          });

          const png = new Resvg(svg, {
            fitTo: { mode: "width", value: WIDTH },
          })
            .render()
            .asPng();

          await writeFile(new URL(`${id}.png`, ogDir), png);
          logger.info(`wrote og/${id}.png (${WIDTH}x${HEIGHT})`);
        }
      },
    },
  };
}
