import React from "react";
const TONES = {
  accent: { background: "var(--color-brand-yellow-500)", color: "var(--color-brand-blue-500)", borderColor: "var(--color-brand-yellow-500)", boxShadow: "var(--shadow-accent-sm)" },
  invert: { background: "var(--color-brand-blue-500)", color: "var(--color-white)", borderColor: "var(--color-brand-blue-500)" },
  muted: { background: "var(--color-brand-blue-50)", color: "var(--color-brand-blue-500)", borderColor: "var(--color-brand-blue-100)" },
  outline: { background: "transparent", color: "var(--color-brand-yellow-500)", borderColor: "rgba(255,236,1,.6)" },
};
/** Etiqueta/eyebrow en píldora, Bebas Neue mayúsculas, opcionalmente rotada -1° como en los heroes. */
export function Badge({ tone = "accent", size = "md", rotate = true, mono = false, icon, children, style, ...rest }) {
  const sz = size === "sm" ? { padding: "4px 12px", fontSize: "var(--text-xs)" } : { padding: "6px 16px", fontSize: "var(--text-sm)" };
  return <span style={{ display: "inline-flex", alignItems: "center", gap: 6, borderRadius: "var(--radius-button)", border: "1px solid", fontFamily: mono ? "var(--font-mono)" : "var(--font-subheading)", fontWeight: mono ? 700 : 400, textTransform: "uppercase", letterSpacing: "var(--tracking-wider)", lineHeight: 1.25, userSelect: "none", fontVariantNumeric: "tabular-nums", transform: rotate ? "rotate(-1deg)" : undefined, ...sz, ...TONES[tone], ...style }} {...rest}>{icon && <span style={{ display: "inline-flex", flexShrink: 0 }}>{icon}</span>}<span style={{ paddingTop: mono ? 0 : 1 }}>{children}</span></span>;
}
