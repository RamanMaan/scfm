export type SpotifyEntityType = "track" | "album" | "artist" | "playlist";

export interface SpotifyEmbedArgs {
  type: SpotifyEntityType;
  id: string;
  /** Use Spotify's compact 152px-tall embed instead of the 352px full player. */
  compact?: boolean;
  /** Set to 0 for dark, 1 for light. Defaults to 0 (dark). */
  theme?: 0 | 1;
}

export const SPOTIFY_EMBED_HEIGHT = {
  full: 232,
  compact: 152,
} as const;

/**
 * Build a Spotify embed iframe URL for a track, album, artist, or playlist.
 *
 * @example
 * const src = getSpotifyEmbedUrl({ type: "track", id: "519M5ENfx47lFz9WLjSPE5" });
 * // <iframe src={src} width="100%" height={SPOTIFY_EMBED_HEIGHT.full} />
 */
export function getSpotifyEmbedUrl({
  type,
  id,
  theme = 0,
}: SpotifyEmbedArgs): string {
  const params = new URLSearchParams({
    utm_source: "generator",
    theme: String(theme),
  });
  return `https://open.spotify.com/embed/${type}/${id}?${params.toString()}`;
}

/**
 * Build the public open.spotify.com URL for a track, album, or artist.
 *
 * @example
 * spotifyOpenUrl("artist", "7ysgZtHvQHnmLyONKF4TTY")
 */
export function spotifyOpenUrl(type: SpotifyEntityType, id: string): string {
  return `https://open.spotify.com/${type}/${id}`;
}
