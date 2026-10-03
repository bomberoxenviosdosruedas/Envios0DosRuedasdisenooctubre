import React from "react";
/** Fila de canal de contacto (glass sobre azul): icono 44px, título Bebas, valor mono y acción a la derecha. */
export function ContactRow({ icon, iconBg = "var(--color-brand-yellow-500)", title, value, action, style }) {
  return <li style={{ listStyle: "none", display: "grid", gridTemplateColumns: "44px 1fr auto", alignItems: "center", gap: 12, borderRadius: "var(--radius-card)", border: "1px solid rgba(255,255,255,.15)", background: "rgba(255,255,255,.08)", padding: 12, color: "var(--color-white)", ...style }}>
    <span aria-hidden="true" style={{ width: 44, height: 44, borderRadius: "var(--radius-control)", background: iconBg, color: "var(--color-brand-blue-500)", display: "inline-flex", alignItems: "center", justifyContent: "center" }}>{icon}</span>
    <span style={{ minWidth: 0 }}><span style={{ display: "block", font: "400 18px/1 var(--font-subheading)", letterSpacing: ".06em", textTransform: "uppercase" }}>{title}</span>{value && <span style={{ display: "block", marginTop: 4, font: "400 14px/1.4 var(--font-mono)", color: "rgba(255,255,255,.85)", fontVariantNumeric: "tabular-nums" }}>{value}</span>}</span>
    {action && <span>{action}</span>}
  </li>;
}
