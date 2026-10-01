import React from "react";
import { Badge } from "../core/Badge.jsx";
import { Button } from "../core/Button.jsx";
/** Tarjeta de tarifa: zona/nivel, rango, precio en Geist Mono, lista de condiciones y CTA. */
export function PricingCard({ title, range, price, unit = "ARS", tag, features = [], note, ctaLabel = "Cotizar", onCta, href, featured = false, style }) {
  const [hover, setHover] = React.useState(false);
  return <article onMouseEnter={() => setHover(true)} onMouseLeave={() => setHover(false)} style={{ position: "relative", display: "flex", flexDirection: "column", gap: 14, height: "100%", boxSizing: "border-box", padding: 24, borderRadius: "var(--radius-card)", background: featured ? "var(--color-brand-blue-50)" : "var(--color-white)", border: featured ? "2px solid var(--color-brand-blue-500)" : "1px solid var(--color-brand-blue-100)", boxShadow: hover ? "var(--shadow-antigravity-deep)" : featured ? "var(--shadow-float)" : "var(--shadow-sm)", transform: hover ? "translateY(-4px)" : "none", transition: "box-shadow var(--duration-slow) var(--ease-spring), transform var(--duration-slow) var(--ease-spring)", color: "var(--color-brand-blue-500)", ...style }}>
    {tag && <span style={{ position: "absolute", top: -14, left: "50%", transform: "translateX(-50%)", whiteSpace: "nowrap" }}><Badge size="sm" rotate={false} style={{ boxShadow: "var(--shadow-md)" }}>{tag}</Badge></span>}
    <div><h3 style={{ margin: 0, font: "400 22px/1.05 var(--font-subheading)", letterSpacing: ".025em", textTransform: "uppercase" }}>{title}</h3>{range && <p style={{ margin: "6px 0 0", font: "400 12px/1.3 var(--font-mono)", letterSpacing: ".1em", textTransform: "uppercase" }}>{range}</p>}</div>
    <p style={{ margin: 0, display: "flex", alignItems: "baseline", gap: 8, fontVariantNumeric: "tabular-nums" }}><span style={{ font: "700 36px/1 var(--font-mono)" }}>{price}</span><span style={{ font: "400 12px/1.3 var(--font-mono)" }}>{unit}</span></p>
    {features.length > 0 && <ul style={{ listStyle: "none", margin: 0, padding: "14px 0 0", borderTop: "1px solid var(--color-brand-blue-100)", display: "flex", flexDirection: "column", gap: 8 }}>{features.map((f) => <li key={f} style={{ display: "flex", gap: 8, font: "400 14px/1.45 var(--font-sans)" }}><svg aria-hidden="true" viewBox="0 0 24 24" width="16" height="16" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" style={{ flexShrink: 0, marginTop: 3 }}><path d="M20 6 9 17l-5-5" /></svg>{f}</li>)}</ul>}
    {note && <p style={{ margin: 0, font: "400 14px/1.5 var(--font-sans)" }}>{note}</p>}
    <div style={{ marginTop: "auto", paddingTop: 6 }}><Button fullWidth size="sm" href={href} onClick={onCta} variant={featured ? "primary" : "secondary"}>{ctaLabel}</Button></div>
  </article>;
}
