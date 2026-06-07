import { defineCollection, reference, z } from "astro:content";
import { file, glob } from "astro/loaders";

const artist = defineCollection({
  loader: file("src/content/artist/profile.json"),
  schema: ({ image }) =>
    z.object({
      name: z.string(),
      tagline: z.string(),
      origin: z.string(),
      basedIn: z.string(),
      bio: z.string(),
      longBio: z.string().optional(),
      photo: image().optional(),
      spotifyArtistId: z.string(),
      appleMusicArtistId: z.string().optional(),
      socials: z.object({
        spotify: z.string().url(),
        appleMusic: z.string().url(),
        youtube: z.string().url(),
        instagram: z.string().url(),
        facebook: z.string().url().optional(),
        threads: z.string().url().optional(),
        tiktok: z.string().url().optional(),
      }),
    }),
});

const releases = defineCollection({
  loader: glob({ pattern: "**/*.md", base: "./src/content/releases" }),
  schema: ({ image }) =>
    z.object({
      title: z.string(),
      type: z.enum(["single", "ep", "album"]).default("single"),
      releaseDate: z.coerce.date(),
      spotifyId: z.string().optional(),
      spotifyType: z.enum(["track", "album"]).default("track"),
      appleMusicUrl: z.string().url().optional(),
      coverArt: image().optional(),
      featuring: z.array(z.string()).default([]),
      description: z.string().optional(),
      isFeatured: z.boolean().default(false),
    }),
});

const videos = defineCollection({
  loader: glob({ pattern: "**/*.md", base: "./src/content/videos" }),
  schema: z.object({
    title: z.string(),
    youtubeId: z.string().optional(),
    youtubeUrl: z.string().url().optional(),
    releaseDate: z.coerce.date().optional(),
    relatedRelease: reference("releases").optional(),
  }),
});

const press = defineCollection({
  loader: glob({ pattern: "**/*.md", base: "./src/content/press" }),
  schema: z.object({
    quote: z.string(),
    source: z.string(),
    sourceUrl: z.string().url(),
    date: z.coerce.date().optional(),
  }),
});

export const collections = { artist, releases, videos, press };
