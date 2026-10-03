import React from "react";
import { BezelCard } from "../core/BezelCard";

/**
 * TeamGrid: grid de estadísticas/equipo (NosotrosScreen).
 */
export function TeamGrid({ stats, className = "" }) {
  return (
    <div style={{
      display: "grid",
      gridTemplateColumns: "repeat(auto-fit, minmax(240px, 1fr))",
      gap: "var(--spacing-6)",
      ...parseClassName(className),
    }}>
      {stats.map((stat, idx) => (
        <BezelCard key={idx} tone="dark" hoverLift={false} padding={24}>
          <div style={{ display: "flex", flexDirection: "column", gap: "var(--spacing-3)", alignItems: "flex-start" }}>
            <span style={{
              fontFamily: "var(--font-subheading)",
              fontSize: "var(--text-sm)",
              textTransform: "uppercase",
              letterSpacing: "var(--tracking-wider)",
              color: "var(--color-brand-yellow-500)",
            }}>
              {stat.label}
            </span>
            <div style={{ fontFamily: "var(--font-mono)", fontSize: "clamp(36px, 5vw, 48px)", fontWeight: 700, fontVariantNumeric: "tabular-nums", lineHeight: 1.1, color: "var(--color-white)" }}>
              {stat.value}
            </div>
            <h3 style={{
              margin: 0,
              fontFamily: "var(--font-subheading)",
              fontSize: "clamp(18px, 2.5vw, 24px)",
              fontWeight: 400,
              textTransform: "uppercase",
              letterSpacing: "var(--tracking-wider)",
              lineHeight: 1.2,
              color: "var(--color-white)",
            }}>
              {stat.title}
            </h3>
            <p style={{
              margin: 0,
              fontFamily: "var(--font-sans)",
              fontSize: "var(--text-sm)",
              lineHeight: "var(--leading-relaxed)",
              color: "rgba(255,255,255,.85)",
            }}>
              {stat.body}
            </p>
          </div>
        </BezelCard>
      ))}
    </div>
  );
}

/** Default TEAM data from NosotrosScreen */
export const DEFAULT_TEAM_STATS = [
  {
    value: "+20",
    label: "Repartidores en calle",
    title: "Flota propia",
    body: "Cadetes capacitados y uniformados. Flota 100% propia sin tercerización. Cada repartidor lleva equipamiento de seguridad y comunicación GPS.",
  },
  {
    value: "100%",
    label: "Base operativa en MDQ",
    title: "Hub Chauvín",
    body: "Depósito central en Friuli 1972, Mar del Plata. Almacenaje, picking, packing y despacho desde un único hub logístico.",
  },
  {
    value: "< 2 h",
    label: "Tiempo promedio Express",
    title: "Máxima velocidad",
    body: "Servicio prioritario punto a punto. Franja horaria de 3 hs a elección con corte 15:00 hs para entrega same-day.",
  },
  {
    value: "+7",
    label: "Años de trayectoria",
    title: "Confianza local",
    body: "Compromiso ininterrumpido desde 2017. Crecimiento orgánico conectando comercios y clientes en Mar del Plata.",
  },
];

function parseClassName(className) {
  return {};
}