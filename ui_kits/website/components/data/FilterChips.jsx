import React from "react";
/** Grupo de chips de filtro (social-proof, categorías). Selección única, role=radiogroup, 44px de alto. */
export function FilterChips({ options = [], value, onChange, label = "Filtrar", surface = "light", style }) {
  const dark = surface === "dark";
  return <div role="radiogroup" aria-label={label} style={{ display: "flex", flexWrap: "wrap", gap: 8, ...style }}>
    {options.map((o) => { const on = value === o; return <button key={o} type="button" role="radio" aria-checked={on} onClick={() => onChange && onChange(o)} style={{ minHeight: 44, padding: "8px 18px", borderRadius: 999, cursor: "pointer", border: "1px solid " + (on ? (dark ? "var(--color-brand-yellow-500)" : "var(--color-brand-blue-500)") : (dark ? "rgba(255,255,255,.4)" : "var(--color-brand-blue-100)")), background: on ? (dark ? "var(--color-brand-yellow-500)" : "var(--color-brand-blue-500)") : (dark ? "transparent" : "var(--color-white)"), color: on ? (dark ? "var(--color-brand-blue-500)" : "var(--color-white)") : (dark ? "var(--color-white)" : "var(--color-brand-blue-500)"), font: "400 16px/1 var(--font-subheading)", letterSpacing: ".05em", textTransform: "uppercase", transition: "background-color var(--duration-base), border-color var(--duration-base)" }}><span style={{ paddingTop: 2, display: "block" }}>{o}</span></button>; })}
  </div>;
}
