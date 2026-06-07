import { mkdir, writeFile } from "node:fs/promises";

import type { AstroIntegration } from "astro";
import { Resvg } from "@resvg/resvg-js";
import satori from "satori";

import { loadFonts } from "./fonts";
import { TEMPLATES } from "./templates";

const WIDTH = 1200;
const HEIGHT = 630;

/**
 * Astro integration that generates the site OG card as `dist/og/default.png`
 * during `astro build`. The PNG is a real 1200x630 raster image so iMessage /
 * Slack / Twitter / Facebook / LinkedIn / WhatsApp all render link previews.
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
        const cardIds = ["default"];

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
