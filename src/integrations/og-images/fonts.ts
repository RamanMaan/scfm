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

  const [inter400, inter500, jetbrainsMono700, plexSerif500, plexSerif400Italic] =
    await Promise.all([
      loadFontFile("@fontsource/inter", "inter-latin-400-normal.woff"),
      loadFontFile("@fontsource/inter", "inter-latin-500-normal.woff"),
      loadFontFile(
        "@fontsource/jetbrains-mono",
        "jetbrains-mono-latin-700-normal.woff",
      ),
      loadFontFile(
        "@fontsource/ibm-plex-serif",
        "ibm-plex-serif-latin-500-normal.woff",
      ),
      loadFontFile(
        "@fontsource/ibm-plex-serif",
        "ibm-plex-serif-latin-400-italic.woff",
      ),
    ]);

  cache = [
    { name: "Inter", data: inter400, weight: 400, style: "normal" },
    { name: "Inter", data: inter500, weight: 500, style: "normal" },
    {
      name: "JetBrainsMono",
      data: jetbrainsMono700,
      weight: 700,
      style: "normal",
    },
    {
      name: "PlexSerif",
      data: plexSerif500,
      weight: 500,
      style: "normal",
    },
    {
      name: "PlexSerif",
      data: plexSerif400Italic,
      weight: 400,
      style: "italic",
    },
  ];

  return cache;
};
