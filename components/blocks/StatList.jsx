import React from "react";
/** Cifras de hero (dl): valor Geist Mono 28px + rótulo Bebas. */
export function StatList({ items = [], invert, style }) {
  return <dl style={{ margin: 0, display: "flex", flexWrap: "wrap", gap: 28, fontVariantNumeric: "tabular-nums", color: invert ? "var(--color-white)" : "var(--color-brand-blue-500)", ...style }}>
    {items.map(([v, l]) => <div key={l}><dt style={{ font: "700 28px/1 var(--font-mono)" }}>{v}</dt><dd style={{ margin: "4px 0 0", font: "400 14px/1 var(--font-subheading)", letterSpacing: ".1em", textTransform: "uppercase", color: invert ? "var(--color-brand-yellow-500)" : "var(--color-brand-blue-500)" }}>{l}</dd></div>)}
  </dl>;
}
