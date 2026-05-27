/**
 * Satori node tree for the nightdrive OG card.
 *
 * Mirrors the shape of renderParallax in
 * src/integrations/og-images/templates.ts — a small `el` helper, a single
 * 1200x630 frame, hand-rolled `{ type, props }` objects.
 *
 * Fonts used here (Inter + PlexSerif) are already registered in
 * src/integrations/og-images/fonts.ts; no new font load required.
 *
 * The Node type is inlined per plan.md guidance ("if it isn't already
 * exported, just inline the shape; the integration pass will reconcile types").
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

const OXBLOOD = "#3a0d12";
const OXBLOOD_DEEP = "#1d0709";
const COBALT = "#0f1d4a";
const AMBER = "#ffb14a";
const CREAM = "#f3e7d0";
const CREAM_DIM = "rgba(243, 231, 208, 0.62)";

export const renderNightdrive = (): Node =>
  el(
    "div",
    {
      ...FRAME,
      // Base layer: dark oxblood field with cobalt cooling the lower-right
      // corner and an amber glow up top-left — same palette logic as the
      // live page.
      backgroundColor: OXBLOOD_DEEP,
      backgroundImage:
        "radial-gradient(540px 360px at 22% 28%, rgba(255,177,74,0.32) 0%, rgba(255,177,74,0) 70%), radial-gradient(620px 420px at 80% 78%, rgba(15,29,74,0.62) 0%, rgba(15,29,74,0) 70%), linear-gradient(160deg, #3a0d12 0%, #1d0709 100%)",
      fontFamily: "Inter",
      color: CREAM,
      padding: "56px 64px",
      flexDirection: "column",
      justifyContent: "space-between",
    },
    [
      // Top eyebrow — call sign + tag.
      el(
        "div",
        {
          display: "flex",
          width: "100%",
          justifyContent: "space-between",
          alignItems: "center",
          fontFamily: "JetBrainsMono",
          fontSize: "20px",
          fontWeight: 700,
          letterSpacing: "5px",
          textTransform: "uppercase",
          color: AMBER,
        },
        [
          el(
            "div",
            { display: "flex", alignItems: "center", gap: "16px" },
            [
              el(
                "div",
                {
                  display: "flex",
                  width: "14px",
                  height: "14px",
                  borderRadius: "9999px",
                  backgroundColor: AMBER,
                  boxShadow: "0 0 16px rgba(255,177,74,0.85)",
                },
              ),
              el(
                "div",
                { display: "flex", paddingLeft: "12px" },
                "ON AIR · 102.7 FM · MEMPHIS",
              ),
            ],
          ),
          el(
            "div",
            {
              display: "flex",
              fontSize: "18px",
              color: "rgba(243,231,208,0.55)",
              letterSpacing: "5px",
            },
            "VARIANT / NIGHTDRIVE",
          ),
        ],
      ),

      // Hero — italic neon serif lyric, the accent line in sodium amber.
      el(
        "div",
        {
          display: "flex",
          flexDirection: "column",
          gap: "4px",
          fontFamily: "PlexSerif",
          fontStyle: "italic",
          fontWeight: 400,
          fontSize: "92px",
          lineHeight: 1.02,
          letterSpacing: "-2px",
          color: CREAM,
        },
        [
          el("div", { display: "flex" }, "It’s 2 a.m.,"),
          el(
            "div",
            {
              display: "flex",
              color: AMBER,
              textShadow: "0 0 32px rgba(255,177,74,0.55)",
            },
            "the city’s still warm,",
          ),
          el("div", { display: "flex", color: CREAM_DIM }, "singing your name."),
        ],
      ),

      // Foot — name + side label, separated by an amber rule.
      el(
        "div",
        {
          display: "flex",
          flexDirection: "column",
          gap: "16px",
        },
        [
          el("div", {
            display: "flex",
            width: "120px",
            height: "2px",
            backgroundColor: AMBER,
            boxShadow: "0 0 12px rgba(255,177,74,0.85)",
          }),
          el(
            "div",
            {
              display: "flex",
              width: "100%",
              justifyContent: "space-between",
              alignItems: "baseline",
            },
            [
              el(
                "div",
                {
                  display: "flex",
                  fontFamily: "Inter",
                  fontSize: "30px",
                  fontWeight: 500,
                  letterSpacing: "0.5px",
                  color: CREAM,
                },
                "Steven Christopher",
              ),
              el(
                "div",
                {
                  display: "flex",
                  fontFamily: "JetBrainsMono",
                  fontSize: "18px",
                  fontWeight: 700,
                  letterSpacing: "5px",
                  color: "rgba(243,231,208,0.55)",
                  textTransform: "uppercase",
                },
                "SIDE A / 01 · SLOW SONGS UNTIL SUNRISE",
              ),
            ],
          ),
        ],
      ),
    ],
  );

// Constants reference (silences unused-var warnings if any tooling complains):
export const _palette = { OXBLOOD, COBALT };
