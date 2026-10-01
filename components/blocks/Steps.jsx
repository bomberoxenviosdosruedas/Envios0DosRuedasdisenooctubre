import React from "react";
import { BezelCard } from "../core/BezelCard.jsx";
/** Pasos numerados (01 · 02 · 03). Contrareembolso, LowCost, Flex. */
export function Steps({ items = [], tone = "light", min = 240, style }) {
  const dark = tone === "dark";
  return <ol style={{ listStyle: "none", margin: 0, padding: 0, display: "grid", gridTemplateColumns: "repeat(auto-fit,minmax(" + min + "px,1fr))", gap: 20, ...style }}>
    {items.map((s, i) => <li key={i}><BezelCard tone={dark ? "dark" : "light"} hoverLift={false} style={{ height: "100%" }}><div style={{ display: "flex", flexDirection: "column", gap: 12 }}>
      <span style={{ width: 44, height: 44, borderRadius: 999, display: "inline-flex", alignItems: "center", justifyContent: "center", background: dark ? "var(--color-brand-yellow-500)" : "var(--color-brand-blue-500)", color: dark ? "var(--color-brand-blue-500)" : "var(--color-brand-yellow-500)", font: "700 16px/1 var(--font-mono)", fontVariantNumeric: "tabular-nums" }}>{String(s.n || i + 1).padStart(2, "0")}</span>
      <h3 style={{ margin: 0, font: "400 22px/1.05 var(--font-subheading)", letterSpacing: ".025em", textTransform: "uppercase" }}>{s.title}</h3>
      <p style={{ margin: 0, font: "400 14px/1.625 var(--font-sans)" }}>{s.body}</p>
    </div></BezelCard></li>)}
  </ol>;
}
