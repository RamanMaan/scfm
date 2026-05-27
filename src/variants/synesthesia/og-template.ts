/**
 * OG card for the `synesthesia` variant.
 *
 * A static "frozen moment" of the live audio-reactive state: deep violet
 * field with two off-axis chromatic pools, a monumental name stack, and a
 * small live-signal eyebrow. Uses only the fonts registered in
 * `og-images/fonts.ts` (Inter / JetBrainsMono) so no font additions are
 * required for OG. The hero face's variable-weight feel is approximated
 * with `fontWeight: 700` on Inter (Satori does not load variable axes).
 */

// Inline Satori node shape — the real `Node` type is internal to
// `og-images/templates.ts` and not exported. The integration pass will
// reconcile.
type Style = Record<string, string | number>;
type Node = {
  type: string;
  key?: string | null;
  props: { style?: Style; children?: NodeChild | NodeChild[] };
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

export const renderSynesthesia = (): Node =>
  el(
    "div",
    {
      ...FRAME,
      // Layered radial pools faked with stacked gradients on the root —
      // Satori supports CSS background gradients.
      backgroundColor: "#0a0710",
      backgroundImage:
        "radial-gradient(900px 600px at 12% 18%, rgba(218,60,210,0.55) 0%, rgba(218,60,210,0) 60%), radial-gradient(800px 600px at 88% 82%, rgba(60,140,230,0.42) 0%, rgba(60,140,230,0) 65%), radial-gradient(640px 500px at 50% 110%, rgba(255,90,140,0.35) 0%, rgba(255,90,140,0) 70%)",
      fontFamily: "Inter",
      color: "#f4ecde",
      padding: "64px 80px",
      flexDirection: "column",
      justifyContent: "space-between",
    },
    [
      // Eyebrow row — live signal marker
      el(
        "div",
        {
          display: "flex",
          justifyContent: "space-between",
          width: "100%",
          fontSize: "16px",
          fontWeight: 500,
          letterSpacing: "5px",
          textTransform: "uppercase",
          color: "rgba(244,236,222,0.55)",
        },
        [
          el(
            "div",
            { display: "flex", alignItems: "center", gap: "12px" },
            "Side A  -  live signal",
          ),
          el("div", { display: "flex" }, "Synesthesia"),
        ],
      ),

      // Monumental name stack — approximates the variable-weight hero.
      el(
        "div",
        {
          display: "flex",
          flexDirection: "column",
          fontFamily: "Inter",
          fontWeight: 700,
          fontSize: "172px",
          lineHeight: 0.86,
          letterSpacing: "-7px",
          color: "#f4ecde",
        },
        [
          el(
            "div",
            {
              display: "flex",
              textShadow: "0 0 48px rgba(255,140,220,0.45)",
            },
            "Steven",
          ),
          el(
            "div",
            {
              display: "flex",
              paddingLeft: "120px",
              fontWeight: 500,
              textShadow: "0 0 60px rgba(120,180,255,0.4)",
            },
            "Christopher",
          ),
        ],
      ),

      // Foot row — tagline + variant tag
      el(
        "div",
        {
          display: "flex",
          width: "100%",
          justifyContent: "space-between",
          alignItems: "baseline",
          paddingTop: "20px",
          borderTop: "1px solid rgba(244,236,222,0.18)",
        },
        [
          el(
            "div",
            {
              display: "flex",
              fontSize: "20px",
              fontWeight: 500,
              letterSpacing: "0.3px",
              color: "rgba(244,236,222,0.85)",
              fontStyle: "italic",
            },
            "Audio drives the visual.",
          ),
          el(
            "div",
            {
              display: "flex",
              fontSize: "13px",
              fontWeight: 500,
              letterSpacing: "5px",
              color: "rgba(244,236,222,0.5)",
              textTransform: "uppercase",
            },
            "Variant / Synesthesia",
          ),
        ],
      ),
    ],
  );
