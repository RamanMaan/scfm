export type SocialPlatform =
  | "spotify"
  | "appleMusic"
  | "youtube"
  | "instagram"
  | "facebook"
  | "threads"
  | "linktree";

export const SOCIAL_LABEL: Record<SocialPlatform, string> = {
  spotify: "Spotify",
  appleMusic: "Apple Music",
  youtube: "YouTube",
  instagram: "Instagram",
  facebook: "Facebook",
  threads: "Threads",
  linktree: "Linktree",
};

export const PLATFORM_ORDER: SocialPlatform[] = [
  "spotify",
  "appleMusic",
  "youtube",
  "instagram",
  "facebook",
  "threads",
  "linktree",
];

/**
 * Take a socials object from the artist profile and return an ordered, typed
 * list of `{ platform, label, url }` entries, skipping any platforms with no URL.
 *
 * @example
 * const links = orderedSocials(artist.data.socials);
 * links.map(({ platform, url }) => <a href={url}>{platform}</a>)
 */
export function orderedSocials(
  socials: Partial<Record<SocialPlatform, string | undefined>>,
): { platform: SocialPlatform; label: string; url: string }[] {
  const out: { platform: SocialPlatform; label: string; url: string }[] = [];
  for (const platform of PLATFORM_ORDER) {
    const url = socials[platform];
    if (url) {
      out.push({ platform, label: SOCIAL_LABEL[platform], url });
    }
  }
  return out;
}

/**
 * Build the standard YouTube embed URL from a video ID.
 *
 * @example
 * youtubeEmbedUrl("dQw4w9WgXcQ")
 */
export function youtubeEmbedUrl(youtubeId: string): string {
  return `https://www.youtube-nocookie.com/embed/${youtubeId}`;
}
