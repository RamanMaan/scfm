/**
 * Satori-compatible "JSX" object trees for the OG cards. We sidestep an actual
 * React dep by hand-rolling `{ type, props }` nodes; satori accepts these as-is.
 *
 * Each template renders into a 1200x630 frame. Designs intentionally mirror
 * the variant they ship with so previews stay on-brand.
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
          "Variant / Brutalist \u2014 Edition 02",
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
                color: "#000",
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
            el("div", { display: "flex" }, "Paper / Mono / Designed"),
            el("div", { display: "flex" }, "One frame, one focus"),
          ],
        ),
      ],
    ),
  );

export const renderStudio = (): Node =>
  el(
    "div",
    {
      ...FRAME,
      backgroundColor: "#ffffff",
      fontFamily: "Inter",
      color: "#0a0a0a",
      padding: "72px 80px",
      flexDirection: "column",
      justifyContent: "space-between",
    },
    [
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
              fontSize: "16px",
              fontWeight: 500,
              letterSpacing: "1px",
              color: "#0a0a0a",
            },
            "Steven Christopher",
          ),
          el(
            "div",
            {
              display: "flex",
              fontSize: "11px",
              fontWeight: 500,
              letterSpacing: "5px",
              color: "#6f6f6f",
              textTransform: "uppercase",
            },
            "Plate 01",
          ),
        ],
      ),
      el(
        "div",
        {
          display: "flex",
          flexDirection: "column",
          fontFamily: "Inter",
          fontWeight: 500,
          fontSize: "160px",
          lineHeight: 0.92,
          letterSpacing: "-4px",
          color: "#0a0a0a",
        },
        [
          el("div", { display: "flex" }, "Steven"),
          el(
            "div",
            { display: "flex", paddingLeft: "120px" },
            "Christopher",
          ),
        ],
      ),
      el(
        "div",
        {
          display: "flex",
          width: "100%",
          justifyContent: "space-between",
          alignItems: "baseline",
          paddingTop: "20px",
          borderTop: "1px solid rgba(10,10,10,0.08)",
        },
        [
          el(
            "div",
            {
              display: "flex",
              fontSize: "16px",
              fontWeight: 500,
              letterSpacing: "0.5px",
              color: "#0a0a0a",
            },
            "Paper-bright, geometric sans, gallery-catalog.",
          ),
          el(
            "div",
            {
              display: "flex",
              fontSize: "11px",
              fontWeight: 500,
              letterSpacing: "5px",
              color: "#6f6f6f",
              textTransform: "uppercase",
            },
            "Variant / Studio",
          ),
        ],
      ),
    ],
  );

export const renderDefault = (): Node =>
  el(
    "div",
    {
      ...FRAME,
      backgroundColor: "#ffffff",
      fontFamily: "Inter",
      color: "#0a0a0a",
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
              fontFamily: "Inter",
              fontWeight: 500,
              fontSize: "140px",
              lineHeight: 1,
              letterSpacing: "-3px",
              color: "#0a0a0a",
            },
            "Steven Christopher",
          ),
          el(
            "div",
            {
              display: "flex",
              fontSize: "20px",
              fontWeight: 500,
              letterSpacing: "0.5px",
              color: "#6b6b6b",
            },
            "Singer, songwriter, producer.",
          ),
        ],
      ),
      el(
        "div",
        {
          display: "flex",
          fontSize: "13px",
          fontWeight: 500,
          letterSpacing: "5px",
          color: "rgba(10,10,10,0.4)",
          textTransform: "uppercase",
        },
        "Memphis / Los Angeles",
      ),
    ],
  );

export const TEMPLATES: Record<string, () => Node> = {
  default: renderDefault,
  brutalist: renderBrutalist,
  studio: renderStudio,
};
