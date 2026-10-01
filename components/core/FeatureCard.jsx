import React from "react";
import { BezelCard } from "./BezelCard.jsx";
/** Tarjeta de característica/servicio: ícono en píldora, título Bebas, texto, tag mono y pie opcional. */
export function FeatureCard({ icon, title, body, tag, tone = "light", footer, bg, onClick, style }) {
  const dark = tone === "dark";
  return <BezelCard tone={tone} padding={0} onClick={onClick} style={{ cursor: onClick ? "pointer" : undefined, height: "100%", ...style }} innerStyle={{ display: "flex", flexDirection: "column" }}>
    {bg && <div style={{ height: 112, backgroundImage: "url(" + bg + ")", backgroundSize: "cover", backgroundPosition: "center" }}></div>}
    <div style={{ padding: 24, display: "flex", flexDirection: "column", gap: 12, flex: 1 }}>
      <div style={{ display: "flex", justifyContent: "space-between", alignItems: "center", gap: 8 }}>
        {icon && <span style={{ width: 40, height: 40, borderRadius: 999, display: "inline-flex", alignItems: "center", justifyContent: "center", background: dark ? "var(--color-brand-yellow-500)" : "var(--color-brand-blue-500)", color: dark ? "var(--color-brand-blue-500)" : "var(--color-brand-yellow-500)" }}>{icon}</span>}
        {tag && <span style={{ padding: "2px 10px", borderRadius: 999, border: "1px solid " + (dark ? "var(--color-brand-yellow-500)" : "var(--color-brand-blue-100)"), background: dark ? "var(--color-brand-yellow-500)" : "var(--color-brand-blue-50)", color: "var(--color-brand-blue-500)", font: "700 12px/1.3 var(--font-mono)" }}>{tag}</span>}
      </div>
      <h3 style={{ margin: 0, font: "400 22px/1.05 var(--font-subheading)", letterSpacing: ".025em", textTransform: "uppercase" }}>{title}</h3>
      {body && <p style={{ margin: 0, font: "400 14px/1.625 var(--font-sans)", opacity: 1 }}>{body}</p>}
      {footer && <div style={{ marginTop: "auto", paddingTop: 12, borderTop: "1px solid " + (dark ? "rgba(255,255,255,.15)" : "var(--color-brand-blue-100)") }}>{footer}</div>}
    </div>
  </BezelCard>;
}
