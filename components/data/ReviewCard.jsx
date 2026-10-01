import React from "react";
const Star = () => <svg viewBox="0 0 24 24" width="16" height="16" fill="currentColor" aria-hidden="true"><path d="M11.525 2.295a.53.53 0 0 1 .95 0l2.31 4.679a2.123 2.123 0 0 0 1.595 1.16l5.166.756a.53.53 0 0 1 .294.904l-3.736 3.638a2.123 2.123 0 0 0-.611 1.878l.882 5.14a.53.53 0 0 1-.771.56l-4.618-2.428a2.122 2.122 0 0 0-1.973 0L6.396 21.01a.53.53 0 0 1-.77-.56l.881-5.139a2.122 2.122 0 0 0-.611-1.879L2.16 9.795a.53.53 0 0 1 .294-.906l5.165-.755a2.122 2.122 0 0 0 1.597-1.16z" /></svg>;
/** Reseña de cliente (carrusel social-proof). tone light | dark | accent. */
export function ReviewCard({ name, text, when, title, tone = "light", rating = 5, width = 340, style }) {
  const dark = tone === "dark", acc = tone === "accent";
  const bg = dark ? "var(--color-brand-blue-500)" : acc ? "var(--color-brand-yellow-500)" : "var(--color-white)";
  const fg = dark ? "var(--color-white)" : "var(--color-brand-blue-500)";
  return <article style={{ width, flexShrink: 0, boxSizing: "border-box", display: "flex", flexDirection: "column", padding: 24, borderRadius: 20, background: bg, color: fg, border: "1px solid " + (dark ? "rgba(255,255,255,.15)" : acc ? "var(--color-brand-yellow-400)" : "rgba(255,236,1,.6)"), boxShadow: dark ? "0 20px 80px rgba(9,80,246,.18)" : "var(--shadow-float)", ...style }}>
    <div style={{ display: "flex", justifyContent: "space-between", alignItems: "center", gap: 8, marginBottom: 12 }}>
      <span style={{ display: "flex", color: dark ? "var(--color-brand-yellow-500)" : acc ? "var(--color-brand-blue-500)" : "var(--color-brand-blue-500)" }} role="img" aria-label={rating + " de 5 estrellas"}>{Array.from({ length: rating }).map((_, i) => <Star key={i} />)}</span>
      {when && <span style={{ padding: "2px 10px", borderRadius: 999, border: "1px solid " + (dark ? "var(--color-brand-yellow-500)" : "var(--color-brand-blue-100)"), background: dark ? "var(--color-brand-yellow-500)" : "var(--color-brand-blue-50)", color: "var(--color-brand-blue-500)", font: "700 12px/1.3 var(--font-mono)" }}>{when}</span>}
    </div>
    {title && <h3 style={{ margin: "0 0 10px", font: "400 22px/1.05 var(--font-subheading)", letterSpacing: ".025em", textTransform: "uppercase" }}>{title}</h3>}
    <p style={{ margin: "0 0 20px", font: "400 14px/1.625 var(--font-sans)" }}>{text}</p>
    <div style={{ marginTop: "auto", paddingTop: 16, borderTop: "1px solid " + (dark ? "rgba(255,255,255,.15)" : "rgba(186,206,253,.5)"), display: "flex", alignItems: "center", gap: 10 }}>
      <span aria-hidden="true" style={{ width: 36, height: 36, borderRadius: "50%", flexShrink: 0, display: "inline-flex", alignItems: "center", justifyContent: "center", background: acc ? "var(--color-brand-blue-500)" : dark ? "var(--color-brand-yellow-500)" : "var(--color-brand-blue-500)", color: acc || !dark ? "var(--color-white)" : "var(--color-brand-blue-500)", font: "400 16px/1 var(--font-subheading)", letterSpacing: ".05em" }}>{(name || "?").trim().charAt(0).toUpperCase()}</span>
      <span style={{ font: "700 14px/1.2 var(--font-sans)" }}>{name}</span>
    </div>
  </article>;
}
