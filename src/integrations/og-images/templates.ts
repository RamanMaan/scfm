/**
 * Satori-compatible "JSX" object trees for the OG card. We sidestep an actual
 * React dep by hand-rolling `{ type, props }` nodes; satori accepts these as-is.
 *
 * Renders into a 1200x630 frame matching the site's brutalist look.
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

export const renderDefault = (): Node =>
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
          "Steven Christopher",
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

export const TEMPLATES: Record<string, () => Node> = {
  default: renderDefault,
};
