/**
 * OG card for the `verse` variant — 1200x630 satori node tree.
 *
 * Uses the `PlexSerif` font family already registered in
 * `src/integrations/og-images/fonts.ts` (IBM Plex Serif 500 normal +
 * 400 italic) so no font-registration changes are required.
 *
 * Mirrors the shape of `renderParallax` in
 * `src/integrations/og-images/templates.ts` — a small inline node helper +
 * a single default-exported render function.
 */

type Style = Record<string, string | number>;

type Node = {
  type: string;
  key?: string | null;
  props: {
    style?: Style;
    children?: NodeChild | NodeChild[];
  };
};

type NodeChild = Node | string | number;

const el = (
  type: string,
  style: Style,
  children?: NodeChild | NodeChild[],
): Node => ({
  type,
  key: null,
  props: { style, children },
});

const FRAME: Style = {
  display: "flex",
  width: "1200px",
  height: "630px",
  position: "relative",
};

const INK = "#0c0d12";
const BONE = "#e9e3d3";
const BONE_DIM = "rgba(233,227,211,0.62)";
const BONE_FAINT = "rgba(233,227,211,0.32)";
const ACCENT = "#b8a6d1";

export const renderVerse = (): Node =>
  el(
    "div",
    {
      ...FRAME,
      backgroundColor: INK,
      fontFamily: "PlexSerif",
      color: BONE,
      padding: "72px 88px",
      flexDirection: "column",
      justifyContent: "space-between",
    },
    [
      // Top: stage-direction tag
      el(
        "div",
        {
          display: "flex",
          fontFamily: "Inter",
          fontSize: "16px",
          fontWeight: 500,
          letterSpacing: "6px",
          color: BONE_FAINT,
          textTransform: "uppercase",
        },
        "Verse — i. an opening",
      ),

      // Middle: the lyric, set at scale in italic serif
      el(
        "div",
        {
          display: "flex",
          flexDirection: "column",
          paddingTop: "24px",
        },
        [
          el(
            "div",
            {
              display: "flex",
              fontFamily: "PlexSerif",
              fontStyle: "italic",
              fontWeight: 400,
              fontSize: "84px",
              lineHeight: 1.05,
              letterSpacing: "-2px",
              color: BONE,
            },
            "All the lights are off",
          ),
          el(
            "div",
            {
              display: "flex",
              fontFamily: "PlexSerif",
              fontStyle: "italic",
              fontWeight: 400,
              fontSize: "84px",
              lineHeight: 1.05,
              letterSpacing: "-2px",
              color: BONE,
            },
            "but the room still hums,",
          ),
          el(
            "div",
            {
              display: "flex",
              fontFamily: "PlexSerif",
              fontStyle: "italic",
              fontWeight: 400,
              fontSize: "84px",
              lineHeight: 1.05,
              letterSpacing: "-2px",
              color: ACCENT,
              paddingLeft: "64px",
            },
            "you can hear the city.",
          ),
        ],
      ),

      // Bottom: attribution row
      el(
        "div",
        {
          display: "flex",
          width: "100%",
          justifyContent: "space-between",
          alignItems: "baseline",
          paddingTop: "28px",
          borderTop: "1px solid rgba(233,227,211,0.16)",
        },
        [
          el(
            "div",
            {
              display: "flex",
              fontFamily: "PlexSerif",
              fontWeight: 500,
              fontSize: "20px",
              letterSpacing: "0.5px",
              color: BONE,
            },
            "Steven Christopher",
          ),
          el(
            "div",
            {
              display: "flex",
              fontFamily: "Inter",
              fontSize: "13px",
              fontWeight: 500,
              letterSpacing: "5px",
              color: BONE_DIM,
              textTransform: "uppercase",
            },
            "Variant / Verse",
          ),
        ],
      ),
    ],
  );

export default renderVerse;
