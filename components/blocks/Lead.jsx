import React from "react";
export function Lead({ invert, children, style }) {
  return <p style={{ margin: 0, fontFamily: "var(--font-sans)", fontSize: "var(--text-lg)", lineHeight: 1.625, fontWeight: 300, maxWidth: "56ch", color: invert ? "rgba(255,255,255,.85)" : "var(--color-brand-blue-500)", ...style }}>{children}</p>;
}
