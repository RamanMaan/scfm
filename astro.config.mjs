// @ts-check
import { defineConfig } from "astro/config";

import ogImages from "./src/integrations/og-images";

import vercel from "@astrojs/vercel";

const PROD_FALLBACK = "https://stevenchristopher.fm";

/**
 * Resolve the canonical site URL for the current build.
 *
 * On Vercel, preview deploys self-host their OG image so scrapers (iMessage,
 * Slack, opengraph.xyz, etc.) can fetch /og/*.png from the same deployment.
 * Production deploys use VERCEL_PROJECT_PRODUCTION_URL so canonical/og URLs
 * always point at the primary domain (apex if DNS is wired, else .vercel.app).
 * Local dev/builds fall back to the configured prod domain.
 */
const resolveSite = () => {
  const fromEnv = (/** @type {string} */ key) =>
    process.env[key] ? `https://${process.env[key]}` : null;

  if (process.env.VERCEL_ENV === "production") {
    return fromEnv("VERCEL_PROJECT_PRODUCTION_URL") ?? PROD_FALLBACK;
  }
  return fromEnv("VERCEL_BRANCH_URL") ?? fromEnv("VERCEL_URL") ?? PROD_FALLBACK;
};

// https://astro.build/config
export default defineConfig({
  site: resolveSite(),
  integrations: [ogImages()],

  image: {
    domains: ["i.ytimg.com"],
  },

  adapter: vercel({
    imagesConfig: {
      sizes: [320, 640, 1280],
    },
    webAnalytics: {
      enabled: true,
    },
  }),
});
