import type { SatoriOptions } from "satori";

type SatoriFont = SatoriOptions["fonts"][number];

const JETBRAINS_MONO_700_URL =
  "https://raw.githubusercontent.com/JetBrains/JetBrainsMono/master/fonts/ttf/JetBrainsMono-Bold.ttf";

let cache: SatoriFont[] | null = null;

const fetchFont = async (url: string): Promise<ArrayBuffer> => {
  const response = await fetch(url);

  if (!response.ok) {
    throw new Error(
      `Failed to load OG font: ${response.status} ${response.statusText}`,
    );
  }

  return response.arrayBuffer();
};

/**
 * Load the OG-card font set as satori-ready buffers. Cached for the lifetime
 * of the build process so each font file is fetched at most once.
 */
export const loadFonts = async (): Promise<SatoriFont[]> => {
  if (cache) return cache;

  const jetbrainsMono700 = await fetchFont(JETBRAINS_MONO_700_URL);

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
