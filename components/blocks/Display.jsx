import React from "react";
export function Display({ as = "h2", color, invert, size, children, style, ...rest }) {
  const Tag = as, h1 = as === "h1";
  return <Tag style={{ margin: 0, fontFamily: "var(--font-display)", fontWeight: 400, fontSize: size || (h1 ? "clamp(2.25rem,6vw,4.5rem)" : "clamp(1.875rem,4vw,3rem)"), lineHeight: h1 ? .92 : 1.1, letterSpacing: h1 ? "-.03em" : "-.025em", textTransform: "uppercase", color: color || (invert ? "var(--color-white)" : "var(--color-brand-blue-500)"), textWrap: "balance", ...style }} {...rest}>{children}</Tag>;
}
