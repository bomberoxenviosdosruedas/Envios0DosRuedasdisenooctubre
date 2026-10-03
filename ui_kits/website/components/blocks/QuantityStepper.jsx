import React from "react";
const Ic = ({ d }) => <svg viewBox="0 0 24 24" width="16" height="16" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" aria-hidden="true">{d.map((x, i) => <path key={i} d={x} />)}</svg>;
/** Selector numérico − [n] + (calculadora DropOFF). Botones de 44px, valor en Geist Mono. */
export function QuantityStepper({ value, onChange, min = 1, max = 1000, label = "Cantidad", style }) {
  const set = (v) => onChange(Math.min(max, Math.max(min, Math.round(v) || min)));
  const btn = (aria, d, p) => <button type="button" aria-label={aria} disabled={(d < 0 && value <= min) || (d > 0 && value >= max)} onClick={() => set(value + d)} style={{ width: 44, height: 44, borderRadius: "50%", border: "2px solid var(--color-brand-blue-500)", background: "var(--color-white)", color: "var(--color-brand-blue-500)", cursor: "pointer", display: "inline-flex", alignItems: "center", justifyContent: "center", opacity: ((d < 0 && value <= min) || (d > 0 && value >= max)) ? .5 : 1 }}><Ic d={p} /></button>;
  return <div style={{ display: "flex", alignItems: "center", gap: 12, ...style }}>{btn("Restar uno", -1, ["M5 12h14"])}<input aria-label={label} type="number" min={min} max={max} value={value} onChange={(e) => onChange(+e.target.value)} onBlur={() => set(value)} style={{ width: 120, height: 56, textAlign: "center", border: 0, background: "transparent", color: "var(--color-brand-blue-500)", font: "700 32px/1 var(--font-mono)", fontVariantNumeric: "tabular-nums", outline: "none" }} />{btn("Sumar uno", 1, ["M5 12h14", "M12 5v14"])}</div>;
}
