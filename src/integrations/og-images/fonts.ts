import { readFile } from "node:fs/promises";
import { createRequire } from "node:module";
import path from "node:path";

import type { SatoriOptions } from "satori";

type SatoriFont = SatoriOptions["fonts"][number];

const require = createRequire(import.meta.url);

const loadFontFile = async (pkg: string, file: string): Promise<Buffer> => {
  const packageRoot = path.dirname(require.resolve(`${pkg}/package.json`));
  return readFile(path.join(packageRoot, "files", file));
};

let cache: SatoriFont[] | null = null;

/**
 * Load the OG-card font set as satori-ready buffers. Cached for the lifetime
 * of the build process so each font file is read from disk at most once.
 */
export const loadFonts = async (): Promise<SatoriFont[]> => {
  if (cache) return cache;

  const jetbrainsMono700 = await loadFontFile(
    "@fontsource/jetbrains-mono",
    "jetbrains-mono-latin-700-normal.woff",
  );

  cache = [
    {
      name: "JetBrainsMono",
      data: jetbrainsMono700,
      weight: 700,
      style: "normal",
    },
  ];

  return cache;
};
