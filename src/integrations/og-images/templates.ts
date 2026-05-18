/**
 * Satori-compatible "JSX" object trees for the OG cards. We sidestep an actual
 * React dep by hand-rolling `{ type, props }` nodes; satori accepts these as-is.
 *
 * Each template renders into a 1200x630 frame. Designs intentionally mirror
 * the prior hand-written SVGs in `public/og/*.svg` so previews stay on-brand
 * across variants.
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

const el = (type: string, style: Style, children?: NodeChild | NodeChild[]): Node => ({
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

export const renderMidnight = (): Node =>
  el(
    "div",
    {
      ...FRAME,
      backgroundColor: "#07080b",
      backgroundImage:
        "radial-gradient(circle at 70% 30%, rgba(170,190,210,0.18) 0%, rgba(170,190,210,0) 60%)",
      fontFamily: "Inter",
      color: "#e8e9ec",
      padding: "80px",
      flexDirection: "column",
      justifyContent: "space-between",
    },
    [
      el(
        "div",
        {
          display: "flex",
          fontSize: "22px",
          fontWeight: 500,
          letterSpacing: "8px",
          color: "rgba(232,233,236,0.4)",
          textTransform: "uppercase",
        },
        "Variant / Midnight",
      ),
      el(
        "div",
        {
          display: "flex",
          flexDirection: "column",
          fontFamily: "Cormorant",
          fontStyle: "italic",
          fontWeight: 400,
          fontSize: "180px",
          lineHeight: 0.95,
          letterSpacing: "-2px",
          color: "#e8e9ec",
        },
        [
          el("span", { display: "flex" }, "Steven"),
          el("span", { display: "flex" }, "Christopher"),
        ],
      ),
      el(
        "div",
        {
          display: "flex",
          fontSize: "18px",
          fontWeight: 500,
          letterSpacing: "6px",
          color: "#7a8b9c",
          textTransform: "uppercase",
        },
        "Dark / Cinematic / Photographic",
      ),
    ],
  );

export const renderBrutalist = (): Node =>
  el(
    "div",
    {
      ...FRAME,
      backgroundColor: "#ffffff",
      fontFamily: "JetBrainsMono",
      color: "#000000",
      padding: "40px",
    },
    el(
      "div",
      {
        display: "flex",
        flexDirection: "column",
        width: "100%",
        height: "100%",
        border: "4px solid #000",
        padding: "32px 24px",
        justifyContent: "space-between",
      },
      [
        el(
          "div",
          {
            display: "flex",
            fontSize: "22px",
            fontWeight: 700,
            letterSpacing: "4px",
            paddingBottom: "24px",
            borderBottom: "2px solid #000",
          },
          "Variant / Brutalist \u2014 Edition 01",
        ),
        el(
          "div",
          {
            display: "flex",
            flexDirection: "column",
            flex: 1,
            justifyContent: "center",
            gap: "8px",
          },
          [
            el(
              "div",
              {
                display: "flex",
                fontSize: "140px",
                fontWeight: 700,
                lineHeight: 1,
                letterSpacing: "-4px",
                color: "#000",
              },
              "STEVEN",
            ),
            el(
              "div",
              {
                display: "flex",
                fontSize: "140px",
                fontWeight: 700,
                lineHeight: 1,
                letterSpacing: "-4px",
                color: "#ff2400",
                justifyContent: "flex-end",
              },
              "CHRISTOPHER",
            ),
          ],
        ),
        el(
          "div",
          {
            display: "flex",
            justifyContent: "space-between",
            fontSize: "20px",
            fontWeight: 700,
            letterSpacing: "3px",
            paddingTop: "24px",
            borderTop: "2px solid #000",
          },
          [
            el("div", { display: "flex" }, "Raw / Monospace / Swiss / Zine"),
            el("div", { display: "flex" }, "Memphis \u2014 Los Angeles"),
          ],
        ),
      ],
    ),
  );

export const renderDefault = (): Node =>
  el(
    "div",
    {
      ...FRAME,
      backgroundColor: "#f4f3ef",
      fontFamily: "Inter",
      color: "#111111",
      padding: "96px 80px",
      flexDirection: "column",
      justifyContent: "space-between",
    },
    [
      el(
        "div",
        {
          display: "flex",
          fontSize: "13px",
          fontWeight: 500,
          letterSpacing: "5px",
          color: "#6b6b6b",
          textTransform: "uppercase",
        },
        "Steven Christopher",
      ),
      el(
        "div",
        {
          display: "flex",
          flexDirection: "column",
          gap: "24px",
        },
        [
          el(
            "div",
            {
              display: "flex",
              fontFamily: "Cormorant",
              fontStyle: "italic",
              fontWeight: 400,
              fontSize: "140px",
              lineHeight: 1,
              letterSpacing: "-3px",
              color: "#111111",
            },
            "Steven Christopher",
          ),
          el(
            "div",
            {
              display: "flex",
              fontSize: "28px",
              fontWeight: 500,
              letterSpacing: "6px",
              color: "#6b6b6b",
              textTransform: "uppercase",
            },
            "R&B Singer-Songwriter",
          ),
        ],
      ),
      el(
        "div",
        {
          display: "flex",
          fontSize: "16px",
          fontWeight: 500,
          letterSpacing: "4px",
          color: "rgba(17,17,17,0.4)",
          textTransform: "uppercase",
        },
        "Memphis / Los Angeles",
      ),
    ],
  );

export const TEMPLATES: Record<string, () => Node> = {
  default: renderDefault,
  midnight: renderMidnight,
  brutalist: renderBrutalist,
};
