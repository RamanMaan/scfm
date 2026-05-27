/**
 * Poster OG card — 1200x630 satori tree.
 *
 * Mirrors the `renderParallax` shape (hand-rolled `{ type, props }` nodes —
 * see `src/integrations/og-images/templates.ts`).
 *
 * Sticks to JetBrainsMono + Inter (the only fonts registered in
 * `src/integrations/og-images/fonts.ts`) — JetBrainsMono 700 stands in for
 * the chunky condensed display face used in the live variant. Hot pink +
 * ink-blue palette + faux-misregistered name block.
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

const PAPER = "#f4efe2";
const PINK = "#ff3366";
const INK = "#0a1f4a";

export const renderPoster = (): Node =>
  el(
    "div",
    {
      ...FRAME,
      backgroundColor: PAPER,
      fontFamily: "Inter",
      color: INK,
      flexDirection: "column",
      padding: "48px 56px",
      justifyContent: "space-between",
      overflow: "hidden",
    },
    [
      // Pink bleed in the corner — fake registration overflow.
      el("div", {
        position: "absolute",
        top: "-40px",
        right: "-60px",
        width: "560px",
        height: "260px",
        backgroundColor: PINK,
        transform: "rotate(-4deg)",
        opacity: 0.85,
      }),

      // Top strip: ticket stub.
      el(
        "div",
        {
          display: "flex",
          alignItems: "center",
          justifyContent: "space-between",
          padding: "12px 20px",
          backgroundColor: INK,
          color: PAPER,
          fontFamily: "JetBrainsMono",
          fontSize: "16px",
          letterSpacing: "6px",
          fontWeight: 700,
        },
        [
          el("div", { display: "flex" }, "★ STEVEN CHRISTOPHER"),
          el("div", { display: "flex" }, "TOUR 2026"),
        ],
      ),

      // Main stack: STEVEN / CHRISTOPHER / TOUR — two-ink offset on each line.
      el(
        "div",
        {
          display: "flex",
          flexDirection: "column",
          gap: "8px",
          flex: 1,
          justifyContent: "center",
          marginTop: "20px",
        },
        [
          // STEVEN row — pink under, ink over, offset.
          el(
            "div",
            {
              display: "flex",
              position: "relative",
              height: "150px",
              alignItems: "center",
            },
            [
              el(
                "div",
                {
                  position: "absolute",
                  display: "flex",
                  fontFamily: "JetBrainsMono",
                  fontWeight: 700,
                  fontSize: "180px",
                  lineHeight: 1,
                  letterSpacing: "-6px",
                  color: PINK,
                  top: "-4px",
                  left: "6px",
                },
                "STEVEN",
              ),
              el(
                "div",
                {
                  position: "absolute",
                  display: "flex",
                  fontFamily: "JetBrainsMono",
                  fontWeight: 700,
                  fontSize: "180px",
                  lineHeight: 1,
                  letterSpacing: "-6px",
                  color: INK,
                  top: "0px",
                  left: "0px",
                },
                "STEVEN",
              ),
            ],
          ),

          // CHRISTOPHER row.
          el(
            "div",
            {
              display: "flex",
              position: "relative",
              height: "150px",
              alignItems: "center",
            },
            [
              el(
                "div",
                {
                  position: "absolute",
                  display: "flex",
                  fontFamily: "JetBrainsMono",
                  fontWeight: 700,
                  fontSize: "150px",
                  lineHeight: 1,
                  letterSpacing: "-6px",
                  color: PINK,
                  top: "-4px",
                  left: "6px",
                },
                "CHRISTOPHER",
              ),
              el(
                "div",
                {
                  position: "absolute",
                  display: "flex",
                  fontFamily: "JetBrainsMono",
                  fontWeight: 700,
                  fontSize: "150px",
                  lineHeight: 1,
                  letterSpacing: "-6px",
                  color: INK,
                  top: "0px",
                  left: "0px",
                },
                "CHRISTOPHER",
              ),
            ],
          ),
        ],
      ),

      // Bottom strip: tag + variant id, with a dashed rule above.
      el(
        "div",
        {
          display: "flex",
          width: "100%",
          justifyContent: "space-between",
          alignItems: "center",
          paddingTop: "20px",
          borderTop: `3px dashed ${INK}`,
        },
        [
          el(
            "div",
            {
              display: "flex",
              fontFamily: "JetBrainsMono",
              fontWeight: 700,
              fontSize: "20px",
              letterSpacing: "4px",
              color: INK,
              padding: "6px 12px",
              border: `3px solid ${INK}`,
              backgroundColor: PAPER,
            },
            "RISO / 2-COLOR / LIVE 2026",
          ),
          el(
            "div",
            {
              display: "flex",
              fontFamily: "JetBrainsMono",
              fontSize: "16px",
              fontWeight: 700,
              letterSpacing: "6px",
              color: PINK,
              textTransform: "uppercase",
            },
            "Variant / Poster",
          ),
        ],
      ),
    ],
  );
