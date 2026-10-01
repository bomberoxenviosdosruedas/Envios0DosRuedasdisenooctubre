import React from "react";
/** Línea de tiempo vertical con hitos (año en Geist Mono, título Bebas). */
export function Timeline({ items = [], style }) {
  return <ol style={{ listStyle: "none", margin: 0, padding: 0, position: "relative", display: "flex", flexDirection: "column", gap: 28, ...style }}>
    <span aria-hidden="true" style={{ position: "absolute", left: 11, top: 6, bottom: 6, width: 2, background: "var(--color-brand-blue-500)", borderRadius: 2 }}></span>
    {items.map((it, i) => <li key={i} style={{ position: "relative", paddingLeft: 48 }}>
      <span aria-hidden="true" style={{ position: "absolute", left: 0, top: 2, width: 24, height: 24, borderRadius: "50%", background: "var(--color-brand-blue-500)", display: "inline-flex", alignItems: "center", justifyContent: "center" }}><span style={{ width: 10, height: 10, borderRadius: "50%", background: "var(--color-brand-yellow-500)" }}></span></span>
      <div style={{ display: "flex", alignItems: "center", gap: 10, flexWrap: "wrap" }}><span style={{ font: "700 20px/1 var(--font-mono)", fontVariantNumeric: "tabular-nums" }}>{it.year}</span>{it.tag && <span style={{ padding: "2px 10px", borderRadius: 999, border: "1px solid var(--color-brand-blue-100)", background: "var(--color-brand-blue-50)", font: "400 12px/1.3 var(--font-subheading)", letterSpacing: ".1em", textTransform: "uppercase" }}>{it.tag}</span>}</div>
      <h3 style={{ margin: "6px 0 4px", font: "400 24px/1.05 var(--font-subheading)", letterSpacing: ".025em", textTransform: "uppercase" }}>{it.title}</h3>
      <p style={{ margin: 0, font: "400 14px/1.625 var(--font-sans)", maxWidth: "60ch" }}>{it.body}</p>
    </li>)}
  </ol>;
}
