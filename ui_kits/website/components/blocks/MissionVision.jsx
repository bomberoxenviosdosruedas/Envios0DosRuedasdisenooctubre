import React from "react";
import { BezelCard } from "../core/BezelCard";
import { Badge } from "../core/Badge";
import { Button } from "../core/Button";

/**
 * MissionVision: bloque Misión / Visión / Compromiso (NosotrosScreen final).
 */
export function MissionVision({
  mission = { title: "Misión", body: "Conectar cada comercio de Mar del Plata con sus clientes mediante una logística de última milla ágil, transparente y humana. Que el envío deje de ser un problema y pase a ser una ventaja competitiva." },
  vision = { title: "Visión", body: "Ser el estándar de logística urbana en Mar del Plata: flota 100% propia, tecnología propia, cobertura total y atención personal. Escalar el modelo a ciudades medias del interior.", badge: "Visión de futuro 2026" },
  commitment = {
    title: "Compromiso",
    body: "Flota propia. Base en Friuli 1972. Tarifas publicadas. Atención < 2 min. Si no cumplimos, nos hacemos cargo.",
    ctaPrimary: { label: "Ver servicios", href: "/servicios" },
    ctaSecondary: { label: "Cotizar ahora", href: "/cotizar" },
  },
  className = "",
}) {
  return (
    <div style={{
      display: "grid",
      gridTemplateColumns: "1fr",
      gap: "var(--spacing-6)",
      ...parseClassName(className),
    }}>
      <style>{`
        @media (min-width: 768px) { .mv-grid { grid-template-columns: repeat(3, 1fr); } }
      `}</style>

      <div className="mv-grid" style={{ display: "contents" }}>
        {/* Misión */}
        <BezelCard tone="light" hoverLift={false} padding={24}>
          <div style={{ display: "flex", flexDirection: "column", gap: "var(--spacing-4)" }}>
            <h3 style={{
              margin: 0,
              fontFamily: "var(--font-subheading)",
              fontSize: "clamp(20px, 3vw, 24px)",
              fontWeight: 400,
              textTransform: "uppercase",
              letterSpacing: "var(--tracking-wider)",
              color: "var(--color-brand-blue-500)",
            }}>
              {mission.title}
            </h3>
            <p style={{
              margin: 0,
              fontFamily: "var(--font-sans)",
              fontSize: "var(--text-sm)",
              lineHeight: "var(--leading-relaxed)",
              color: "var(--color-brand-blue-500)",
            }}>
              {mission.body}
            </p>
          </div>
        </BezelCard>

        {/* Visión */}
        <BezelCard tone="light" hoverLift={false} padding={24}>
          <div style={{ display: "flex", flexDirection: "column", gap: "var(--spacing-4)" }}>
            <h3 style={{
              margin: 0,
              fontFamily: "var(--font-subheading)",
              fontSize: "clamp(20px, 3vw, 24px)",
              fontWeight: 400,
              textTransform: "uppercase",
              letterSpacing: "var(--tracking-wider)",
              color: "var(--color-brand-blue-500)",
            }}>
              {vision.title}
            </h3>
            <p style={{
              margin: 0,
              fontFamily: "var(--font-sans)",
              fontSize: "var(--text-sm)",
              lineHeight: "var(--leading-relaxed)",
              color: "var(--color-brand-blue-500)",
            }}>
              {vision.body}
            </p>
            {vision.badge && (
              <Badge tone="muted" size="sm" mono rotate={false}>
                {vision.badge}
              </Badge>
            )}
          </div>
        </BezelCard>

        {/* Compromiso */}
        <BezelCard tone="accent" hoverLift={false} padding={24}>
          <div style={{ display: "flex", flexDirection: "column", gap: "var(--spacing-4)" }}>
            <h3 style={{
              margin: 0,
              fontFamily: "var(--font-subheading)",
              fontSize: "clamp(20px, 3vw, 24px)",
              fontWeight: 400,
              textTransform: "uppercase",
              letterSpacing: "var(--tracking-wider)",
              color: "var(--color-brand-blue-500)",
            }}>
              {commitment.title}
            </h3>
            <p style={{
              margin: 0,
              fontFamily: "var(--font-sans)",
              fontSize: "var(--text-sm)",
              lineHeight: "var(--leading-relaxed)",
              color: "var(--color-brand-blue-500)",
            }}>
              {commitment.body}
            </p>
            <div style={{ display: "flex", flexWrap: "wrap", gap: "var(--spacing-3)", marginTop: "var(--spacing-2)" }}>
              <Button variant="social" size="sm" href={commitment.ctaPrimary.href}>
                {commitment.ctaPrimary.label}
              </Button>
              <Button variant="secondary" size="sm" href={commitment.ctaSecondary.href}>
                {commitment.ctaSecondary.label}
              </Button>
            </div>
          </div>
        </BezelCard>
      </div>
    </div>
  );
}

function parseClassName(className) {
  return {};
}