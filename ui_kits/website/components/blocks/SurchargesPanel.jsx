import React, { useState } from "react";
import { BezelCard } from "../core/BezelCard";
import { Badge } from "../core/Badge";

/** Icons for surcharges */
const ICONS = {
  rain: <svg viewBox="0 0 24 24" width="20" height="20" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true"><path d="M4 14.899A7 7 0 1 1 15.71 8"/><path d="M8 19v2"/><path d="M16 19v2"/><path d="M12 17v4"/></svg>,
  wait: <svg viewBox="0 0 24 24" width="20" height="20" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true"><circle cx="12" cy="12" r="10"/><path d="M12 6v6l4 2"/></svg>,
  stop: <svg viewBox="0 0 24 24" width="20" height="20" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true"><path d="M18 6 7 17l-5-5"/><path d="M22 17 11 6"/></svg>,
  retry: <svg viewBox="0 0 24 24" width="20" height="20" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true"><path d="M21 12a9 9 0 0 0-9-9 9.75 9.75 0 0 0-6.74 2.74L3 8"/><path d="M3 3v5h5"/></svg>,
  periphery: <svg viewBox="0 0 24 24" width="20" height="20" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true"><path d="M20 10c0 4.993-5.539 10.193-7.399 11.799a1 1 0 0 1-1.202 0C9.539 20.193 4 14.993 4 10a8 8 0 0 1 16 0"/><path d="M12 10a3 3 0 1 1-6 0 3 3 0 0 1 6 0"/></svg>,
  bulk: <svg viewBox="0 0 24 24" width="20" height="20" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true"><path d="M11 21.73a2 2 0 0 0 2 0l7-4A2 2 0 0 0 21 16V8a2 2 0 0 0-1-1.73l-7-4a2 2 0 0 0-2 0l-7 4A2 2 0 0 0 3 8v8a2 2 0 0 0 1 1.73z"/><path d="M12 22V12"/><path d="m3.29 7 8.71 5 8.71-5"/><path d="m7.5 4.27 9 5.15"/></svg>,
};

/** Surcharge items from promises.ts */
const SURCHARGES = [
  {
    id: "rain",
    label: "Lluvia",
    value: "50% (Express/LowCost) · 30% (otros)",
    condition: "Aplica cuando hay precipitaciones durante el viaje",
    appliesTo: ["EXPRESS", "LOW_COST", "FLEX", "ECOMMERCE_24HS", "ECOMMERCE_SAME_DAY", "CUENTA_CORRIENTE"],
    icon: ICONS.rain,
  },
  {
    id: "wait",
    label: "Espera en puerta",
    value: "$2.100 c/10 min (desde min 11)",
    condition: "Tolerancia 10 min sin cargo. Se cobra por bloques de 10 min adicionales",
    appliesTo: ["EXPRESS", "LOW_COST", "FLEX"],
    icon: ICONS.wait,
  },
  {
    id: "stop",
    label: "Parada extra",
    value: "+50% sobre tarifa base",
    condition: "Máx 2 km de desvío. Más desvío = envío aparte",
    appliesTo: ["EXPRESS", "LOW_COST", "FLEX"],
    icon: ICONS.stop,
  },
  {
    id: "retry",
    label: "Reintento (destinatario ausente)",
    value: "100% del valor del envío",
    condition: "Segunda visita por destinatario no presente",
    appliesTo: ["EXPRESS", "LOW_COST", "FLEX", "ECOMMERCE_24HS", "ECOMMERCE_SAME_DAY", "CUENTA_CORRIENTE"],
    icon: ICONS.retry,
  },
  {
    id: "periphery",
    label: "Periferia (fuera MDQ)",
    value: "$1.000 / km de ruta",
    condition: "Destinos fuera del ejido urbano (Batán, Sierra de los Padres...). Cotización aparte",
    appliesTo: ["EXPRESS", "LOW_COST", "FLEX", "ECOMMERCE_24HS", "ECOMMERCE_SAME_DAY", "CUENTA_CORRIENTE"],
    icon: ICONS.periphery,
  },
  {
    id: "bulk",
    label: "Bulto extra (>5kg / 40×40cm)",
    value: "Desde $1.950",
    condition: "Monto final varía según servicio. No entra en cálculo automático",
    appliesTo: ["EXPRESS", "LOW_COST", "FLEX", "ECOMMERCE_24HS", "ECOMMERCE_SAME_DAY", "CUENTA_CORRIENTE"],
    icon: ICONS.bulk,
  },
];

const SERVICE_LABELS = {
  EXPRESS: "Express",
  LOW_COST: "LowCost",
  FLEX: "Flex",
  ECOMMERCE_24HS: "E-Commerce 24HS",
  ECOMMERCE_SAME_DAY: "E-Commerce Same Day",
  CUENTA_CORRIENTE: "Cuenta Corriente",
};

/**
 * SurchargesPanel: panel de recargos operativos (cotizador, páginas de servicio).
 */
export function SurchargesPanel({ items = SURCHARGES, serviceFilter = "ALL", className = "" }) {
  const [activeFilter, setActiveFilter] = useState(serviceFilter);

  const filteredItems = items.filter(item =>
    activeFilter === "ALL" || item.appliesTo.includes(activeFilter)
  );

  return (
    <BezelCard tone="light" hoverLift={false} padding={24} style={{ ...parseClassName(className) }}>
      <div style={{ display: "flex", flexDirection: "column", gap: "var(--spacing-5)" }}>
        {/* Header + Filter chips */}
        <div style={{ display: "flex", flexWrap: "wrap", alignItems: "center", justifyContent: "space-between", gap: "var(--spacing-3)" }}>
          <div style={{ display: "flex", alignItems: "center", gap: "var(--spacing-3)" }}>
            <Badge tone="accent" size="sm" rotate={false}>Recargos operativos</Badge>
            <span style={{ fontFamily: "var(--font-mono)", fontSize: "var(--text-xs)", color: "var(--color-brand-blue-500)" }}>
              Informativos · No entran en cálculo automático
            </span>
          </div>
          <div style={{ display: "flex", flexWrap: "wrap", gap: "var(--spacing-2)" }}>
            {["ALL", "EXPRESS", "LOW_COST", "FLEX", "ECOMMERCE_24HS", "ECOMMERCE_SAME_DAY", "CUENTA_CORRIENTE"].map((filter) => (
              <button
                key={filter}
                type="button"
                onClick={() => setActiveFilter(filter)}
                style={{
                  padding: "6px 12px",
                  borderRadius: "var(--radius-button)",
                  border: `1px solid ${activeFilter === filter ? "var(--color-brand-blue-500)" : "var(--color-brand-blue-100)"}`,
                  background: activeFilter === filter ? "var(--color-brand-blue-500)" : "var(--color-white)",
                  color: activeFilter === filter ? "var(--color-white)" : "var(--color-brand-blue-500)",
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
                {filter === "ALL" ? "Todos" : SERVICE_LABELS[filter] || filter}
              </button>
            ))}
          </div>
        </div>

        {/* Grid 2 cols mobile, 4 cols desktop */}
        <div style={{
          display: "grid",
          gridTemplateColumns: "1fr",
          gap: "var(--spacing-4)",
        }}>
          <style>{`
            @media (min-width: 640px) { .surcharge-grid { grid-template-columns: repeat(2, 1fr); } }
            @media (min-width: 1024px) { .surcharge-grid { grid-template-columns: repeat(4, 1fr); } }
          `}</style>
          
          <div className="surcharge-grid" style={{ display: "contents" }}>
            {filteredItems.map((item) => (
              <div key={item.id} style={{
                display: "flex",
                flexDirection: "column",
                gap: "var(--spacing-3)",
                padding: "var(--spacing-4)",
                background: "var(--color-brand-blue-50)",
                border: "1px solid var(--color-brand-blue-100)",
                borderRadius: "var(--radius-control)",
                transition: "border-color var(--duration-base) var(--ease-default), box-shadow var(--duration-base) var(--ease-default)",
              }}
              onMouseEnter={(e) => { e.currentTarget.style.borderColor = "var(--color-brand-blue-300)"; e.currentTarget.style.boxShadow = "var(--shadow-sm)"; }}
              onMouseLeave={(e) => { e.currentTarget.style.borderColor = "var(--color-brand-blue-100)"; e.currentTarget.style.boxShadow = "none"; }}
              >
                <div style={{ display: "flex", alignItems: "flex-start", gap: "var(--spacing-3)" }}>
                  <span style={{
                    flexShrink: 0,
                    width: 40,
                    height: 40,
                    borderRadius: "var(--radius-control)",
                    background: "var(--color-white)",
                    border: "1px solid var(--color-brand-blue-100)",
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "center",
                    color: "var(--color-brand-blue-500)",
                  }}>
                    {item.icon}
                  </span>
                  <div style={{ flex: 1, minWidth: 0 }}>
                    <span style={{
                      fontFamily: "var(--font-subheading)",
                      fontSize: "var(--text-xs)",
                      textTransform: "uppercase",
                      letterSpacing: "var(--tracking-wider)",
                      color: "var(--color-brand-blue-500)",
                      display: "block",
                      marginBottom: 2,
                    }}>
                      {item.label}
                    </span>
                    <span style={{
                      fontFamily: "var(--font-mono)",
                      fontSize: "var(--text-sm)",
                      fontWeight: 700,
                      fontVariantNumeric: "tabular-nums",
                      color: "var(--color-brand-blue-500)",
                      display: "block",
                      marginBottom: 2,
                    }}>
                      {item.value}
                    </span>
                  </div>
                </div>
                <p style={{
                  margin: 0,
                  fontFamily: "var(--font-sans)",
                  fontSize: "var(--text-xs)",
                  lineHeight: "var(--leading-relaxed)",
                  color: "var(--color-brand-blue-500)",
                  opacity: 0.8,
                }}>
                  {item.condition}
                </p>
                <div style={{
                  display: "flex",
                  flexWrap: "wrap",
                  gap: 4,
                  marginTop: "var(--spacing-2)",
                }}>
                  {item.appliesTo.map((svc) => (
                    <Badge key={svc} tone="muted" size="sm" mono rotate={false}>
                      {SERVICE_LABELS[svc] || svc}
                    </Badge>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>

        {filteredItems.length === 0 && (
          <div style={{
            textAlign: "center",
            padding: "var(--spacing-8)",
            color: "var(--color-brand-blue-500)",
            fontFamily: "var(--font-sans)",
            fontSize: "var(--text-sm)",
          }}>
            No hay recargos configurados para este servicio.
          </div>
        )}
      </div>
    </BezelCard>
  );
}

function parseClassName(className) {
  return {};
}