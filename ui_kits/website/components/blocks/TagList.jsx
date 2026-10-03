import React from "react";
/** Lista de etiquetas en píldoras (rubros con cuenta activa, cobertura). Solo lectura. */
export function TagList({ items = [], icon, tone = "light", style }) {
  const dark = tone === "dark";
  return <ul style={{ listStyle: "none", margin: 0, padding: 0, display: "flex", flexWrap: "wrap", gap: 10, ...style }}>
    {items.map((t) => <li key={t} style={{ display: "inline-flex", alignItems: "center", gap: 8, padding: "10px 18px", borderRadius: 999, border: "1px solid " + (dark ? "rgba(255,255,255,.25)" : "var(--color-brand-blue-100)"), background: dark ? "rgba(255,255,255,.08)" : "var(--color-white)", color: dark ? "var(--color-white)" : "var(--color-brand-blue-500)", font: "400 16px/1 var(--font-subheading)", letterSpacing: ".05em", textTransform: "uppercase" }}>{icon && <span aria-hidden="true" style={{ display: "inline-flex", color: dark ? "var(--color-brand-yellow-500)" : "var(--color-brand-blue-500)" }}>{icon}</span>}<span style={{ paddingTop: 2 }}>{t}</span></li>)}
  </ul>;
}
