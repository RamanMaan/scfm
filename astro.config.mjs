// @ts-check
import { defineConfig } from "astro/config";

import tailwindcss from "@tailwindcss/vite";

import ogImages from "./src/integrations/og-images";

// https://astro.build/config
export default defineConfig({
  site: "https://stevenchristopher.fm",
  integrations: [ogImages()],
  vite: {
    plugins: [tailwindcss()],
  },
});
