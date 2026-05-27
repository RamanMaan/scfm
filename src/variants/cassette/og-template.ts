/**
 * OG card for the cassette variant. Satori-compatible node tree at 1200x630.
 *
 * Constraints:
 * - Uses only fonts already registered in src/integrations/og-images/fonts.ts
 *   (JetBrainsMono + Inter + PlexSerif). The "hand-marker" face used in the
 *   live page is not loaded for OG to keep the build light; instead, the OG
 *   card leans into the mono / cataloging side of the cassette identity.
 * - Mirrors the shape of renderParallax: header strip + paneled body, with
 *   one stamped accent in sharpie red.
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

const STOCK = "#efe7d2";
const STOCK_SHADE = "#e6dcc0";
const TAPE = "#2a2118";
const INK = "#16110b";
const INK_SOFT = "#4a3d2c";
const MARKER = "#c4302b";

export const renderCassette = (): Node =>
  el(
    "div",
    {
      ...FRAME,
      backgroundColor: STOCK,
      fontFamily: "JetBrainsMono",
      color: INK,
      flexDirection: "column",
    },
    [
      // SPINE / runner head
      el(
        "div",
        {
          display: "flex",
          width: "1200px",
          height: "72px",
          backgroundColor: TAPE,
          color: STOCK,
          alignItems: "center",
          justifyContent: "space-between",
          padding: "0 56px",
          borderBottom: `3px solid ${MARKER}`,
        },
        [
          el(
            "div",
            {
              display: "flex",
              alignItems: "center",
              fontFamily: "JetBrainsMono",
              fontSize: "18px",
              fontWeight: 700,
              letterSpacing: "5px",
              textTransform: "uppercase",
            },
            "Steven Christopher  /  SC-001",
          ),
          el(
            "div",
            {
              display: "flex",
              fontFamily: "JetBrainsMono",
              fontSize: "16px",
              fontWeight: 700,
              letterSpacing: "4px",
              color: STOCK,
              textTransform: "uppercase",
            },
            "Cassette J-Card",
          ),
        ],
      ),
      // BODY
      el(
        "div",
        {
          display: "flex",
          width: "1200px",
          height: "558px",
          padding: "56px 80px",
          flexDirection: "column",
          justifyContent: "space-between",
          backgroundColor: STOCK,
        },
        [
          // Edition strip
          el(
            "div",
            {
              display: "flex",
              fontFamily: "JetBrainsMono",
              fontSize: "16px",
              fontWeight: 700,
              letterSpacing: "5px",
              color: INK_SOFT,
              textTransform: "uppercase",
            },
            "Edition / 2026  ·  Type II  ·  Memphis → Los Angeles",
          ),
          // Big stacked name + cassette body
          el(
            "div",
            {
              display: "flex",
              alignItems: "flex-end",
              justifyContent: "space-between",
              gap: "40px",
            },
            [
              el(
                "div",
                {
                  display: "flex",
                  flexDirection: "column",
                  fontFamily: "PlexSerif",
                  fontWeight: 500,
                  fontSize: "144px",
                  lineHeight: 0.92,
                  letterSpacing: "-2px",
                  color: MARKER,
                },
                [
                  el(
                    "div",
                    {
                      display: "flex",
                      transform: "rotate(-2deg)",
                      transformOrigin: "0 50%",
                    },
                    "Steven",
                  ),
                  el(
                    "div",
                    {
                      display: "flex",
                      paddingLeft: "60px",
                      transform: "rotate(-1deg)",
                      transformOrigin: "0 50%",
                    },
                    "Christopher",
                  ),
                ],
              ),
              // Mini cassette body — two reels
              el(
                "div",
                {
                  display: "flex",
                  width: "320px",
                  height: "200px",
                  backgroundColor: TAPE,
                  borderRadius: "8px",
                  padding: "20px 24px",
                  flexDirection: "column",
                  justifyContent: "space-between",
                  alignItems: "center",
                  boxShadow: "0 12px 28px rgba(0,0,0,0.25)",
                },
                [
                  el(
                    "div",
                    {
                      display: "flex",
                      width: "100%",
                      justifyContent: "space-between",
                      color: STOCK,
                      fontFamily: "JetBrainsMono",
                      fontSize: "14px",
                      fontWeight: 700,
                      letterSpacing: "3px",
                    },
                    [
                      el("div", { display: "flex" }, "SIDE A"),
                      el("div", { display: "flex" }, "SIDE B"),
                    ],
                  ),
                  el(
                    "div",
                    {
                      display: "flex",
                      width: "100%",
                      justifyContent: "space-between",
                      alignItems: "center",
                      padding: "0 12px",
                    },
                    [
                      el(
                        "div",
                        {
                          display: "flex",
                          width: "80px",
                          height: "80px",
                          borderRadius: "40px",
                          backgroundColor: "#5a4a36",
                          border: `4px solid ${TAPE}`,
                          boxShadow: "inset 0 0 0 14px #2a2118",
                        },
                      ),
                      el(
                        "div",
                        {
                          display: "flex",
                          width: "80px",
                          height: "80px",
                          borderRadius: "40px",
                          backgroundColor: "#5a4a36",
                          border: `4px solid ${TAPE}`,
                          boxShadow: "inset 0 0 0 14px #2a2118",
                        },
                      ),
                    ],
                  ),
                  el(
                    "div",
                    {
                      display: "flex",
                      width: "100%",
                      justifyContent: "center",
                      color: STOCK,
                      fontFamily: "JetBrainsMono",
                      fontSize: "12px",
                      letterSpacing: "3px",
                    },
                    "C-30  ·  TYPE II",
                  ),
                ],
              ),
            ],
          ),
          // Foot strip
          el(
            "div",
            {
              display: "flex",
              width: "100%",
              justifyContent: "space-between",
              alignItems: "center",
              paddingTop: "20px",
              borderTop: `1px solid rgba(22,17,11,0.2)`,
            },
            [
              el(
                "div",
                {
                  display: "flex",
                  fontFamily: "JetBrainsMono",
                  fontSize: "16px",
                  fontWeight: 700,
                  letterSpacing: "3px",
                  color: INK,
                  textTransform: "uppercase",
                },
                "Object-as-UI  ·  Sharpie red on cream stock",
              ),
              el(
                "div",
                {
                  display: "flex",
                  fontFamily: "JetBrainsMono",
                  fontSize: "14px",
                  fontWeight: 700,
                  letterSpacing: "5px",
                  color: MARKER,
                  textTransform: "uppercase",
                  backgroundColor: STOCK_SHADE,
                  padding: "8px 14px",
                  borderRadius: "2px",
                  border: `2px dashed ${MARKER}`,
                },
                "Variant / Cassette",
              ),
            ],
          ),
        ],
      ),
    ],
  );

export default renderCassette;
