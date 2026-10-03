import React, { useState, useEffect } from "react";
import { BezelCard } from "../core/BezelCard";
import { Button } from "../core/Button";
import { Badge } from "../core/Badge";

/** FilterChips inline (simplified) */
function FilterChips({ label, options, value, onChange }) {
  return (
    <div style={{ display: "flex", flexWrap: "wrap", gap: "var(--spacing-2)", alignItems: "center" }}>
      <span style={{ fontFamily: "var(--font-subheading)", fontSize: "var(--text-xs)", textTransform: "uppercase", letterSpacing: "var(--tracking-wider)", color: "var(--color-brand-blue-500)" }}>
        {label}
      </span>
      {options.map((opt) => (
        <button
          key={opt}
          type="button"
          onClick={() => onChange(opt)}
          style={{
            padding: "6px 12px",
            borderRadius: "var(--radius-button)",
            border: `1px solid ${value === opt ? "var(--color-brand-blue-500)" : "var(--color-brand-blue-100)"}`,
            background: value === opt ? "var(--color-brand-blue-500)" : "var(--color-white)",
            color: value === opt ? "var(--color-white)" : "var(--color-brand-blue-500)",
            fontFamily: "var(--font-subheading)",
            fontSize: "var(--text-xs)",
            textTransform: "uppercase",
            letterSpacing: "var(--tracking-wider)",
            fontWeight: 400,
            cursor: "pointer",
            transition: "all var(--duration-base) var(--ease-default)",
            minHeight: "36px",
          }}
        >
          {opt}
        </button>
      ))}
    </div>
  );
}

/** QuantityStepper inline */
function QuantityStepper({ value, onChange, label, min = 1, max = 1000 }) {
  return (
    <div style={{ display: "flex", alignItems: "center", gap: "var(--spacing-3)", flexWrap: "wrap" }}>
      <button
        type="button"
        onClick={() => onChange(Math.max(min, value - 1))}
        disabled={value <= min}
        style={{
          width: "var(--control-sm)",
          height: "var(--control-sm)",
          borderRadius: "var(--radius-full)",
          border: "2px solid var(--color-brand-blue-300)",
          background: "var(--color-white)",
          color: "var(--color-brand-blue-500)",
          fontSize: "var(--text-xl)",
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          cursor: value <= min ? "not-allowed" : "pointer",
          opacity: value <= min ? 0.4 : 1,
          transition: "all var(--duration-base) var(--ease-default)",
        }}
        aria-label="Disminuir"
      >
        −
      </button>
      <input
        type="number"
        value={value}
        onChange={(e) => onChange(Math.min(max, Math.max(min, parseInt(e.target.value) || min)))}
        min={min}
        max={max}
        style={{
          width: "80px",
          height: "var(--control-sm)",
          borderRadius: "var(--radius-control)",
          border: "2px solid var(--color-brand-blue-300)",
          background: "var(--color-white)",
          color: "var(--color-brand-blue-500)",
          fontFamily: "var(--font-mono)",
          fontSize: "var(--text-base)",
          fontVariantNumeric: "tabular-nums",
          textAlign: "center",
          outline: "none",
          padding: "0 var(--spacing-3)",
        }}
        aria-label={label}
      />
      <button
        type="button"
        onClick={() => onChange(Math.min(max, value + 1))}
        disabled={value >= max}
        style={{
          width: "var(--control-sm)",
          height: "var(--control-sm)",
          borderRadius: "var(--radius-full)",
          border: "2px solid var(--color-brand-blue-300)",
          background: "var(--color-white)",
          color: "var(--color-brand-blue-500)",
          fontSize: "var(--text-xl)",
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          cursor: value >= max ? "not-allowed" : "pointer",
          opacity: value >= max ? 0.4 : 1,
          transition: "all var(--duration-base) var(--ease-default)",
        }}
        aria-label="Aumentar"
      >
        +
      </button>
    </div>
  );
}

/**
 * DropoffCalculator: calculadora interactiva DropOFF -20% (EmprendedoresScreen).
 */
export function DropoffCalculator({
  basePrice = 2400,
  discountPercent = 20,
  initialValue = 120,
  onCalculate,
  className = "",
}) {
  const [shipments, setShipments] = useState(initialValue);
  const [savings, setSavings] = useState(0);

  useEffect(() => {
    const calculated = Math.round(basePrice * discountPercent / 100) * shipments;
    setSavings(calculated);
    onCalculate?.(shipments, calculated);
  }, [shipments, basePrice, discountPercent, onCalculate]);

  const savingsPerShipment = Math.round(basePrice * discountPercent / 100);

  return (
    <BezelCard tone="light" hoverLift={false} padding={24} style={{ ...parseClassName(className) }}>
      <div style={{ display: "flex", flexDirection: "column", gap: "var(--spacing-5)" }}>
        <span style={{ fontFamily: "var(--font-subheading)", fontSize: "var(--text-sm)", textTransform: "uppercase", letterSpacing: "var(--tracking-wider)", color: "var(--color-brand-blue-500)" }}>
          Envíos por mes
        </span>

        <QuantityStepper
          value={shipments}
          onChange={setShipments}
          label="Cantidad de envíos por mes"
          min={1}
          max={1000}
        />

        <input
          type="range"
          min="1"
          max="1000"
          value={shipments}
          onChange={(e) => setShipments(Number(e.target.value))}
          aria-label="Cantidad de envíos por mes"
          style={{
            width: "100%",
            accentColor: "var(--color-brand-blue-500)",
            height: 6,
            borderRadius: 3,
          }}
        />

        <FilterChips
          label="Atajos"
          options={["25", "100", "250", "500"]}
          value={String(shipments)}
          onChange={(v) => setShipments(Number(v))}
        />

        <div style={{ borderTop: "1px solid var(--color-brand-blue-100)", paddingTop: "var(--spacing-4)" }}>
          <span style={{ fontFamily: "var(--font-subheading)", fontSize: "var(--text-sm)", textTransform: "uppercase", letterSpacing: "var(--tracking-wider)", color: "var(--color-brand-blue-500)" }}>
            Ahorro estimado
          </span>
          <div style={{ display: "flex", alignItems: "baseline", gap: "var(--spacing-2)", marginTop: "var(--spacing-2)" }}>
            <span style={{ fontFamily: "var(--font-mono)", fontSize: "clamp(32px, 5vw, 44px)", fontWeight: 700, fontVariantNumeric: "tabular-nums", color: "var(--color-brand-blue-500)" }}>
              ${savings.toLocaleString("es-AR")}
            </span>
            <span style={{ fontFamily: "var(--font-mono)", fontSize: "var(--text-xs)", color: "var(--color-brand-blue-500)" }}>
              / mes
            </span>
          </div>
          <p style={{ margin: "var(--spacing-2) 0 0", fontFamily: "var(--font-mono)", fontSize: "11px", lineHeight: "1.4", color: "var(--color-brand-blue-500)" }}>
            Base: ${basePrice.toLocaleString("es-AR")} por envío − {discountPercent}% (cifra de ejemplo del sitio).
          </p>
        </div>

        <Button
          fullWidth
          external
          href={`https://wa.me/542236602699?text=${encodeURIComponent(`Hola! Manejo aprox. ${shipments} envíos por mes y quiero activar DropOFF (${discountPercent}% off) en Mar del Plata.`)}`}
        >
          Activar DropOFF
        </Button>
      </div>
    </BezelCard>
  );
}

function parseClassName(className) {
  return {};
}