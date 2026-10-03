import React from "react";
import { BezelCard } from "../core/BezelCard";
import { Badge } from "../core/Badge";
import { StepperHorizontal } from "../core/StepperHorizontal";

/** Icons for guide steps */
const ICONS = {
  pin: <svg viewBox="0 0 24 24" width="24" height="24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true"><path d="M20 10c0 4.993-5.539 10.193-7.399 11.799a1 1 0 0 1-1.202 0C9.539 20.193 4 14.993 4 10a8 8 0 0 1 16 0"/><path d="M12 10a3 3 0 1 1-6 0 3 3 0 0 1 6 0"/></svg>,
  bike: <svg viewBox="0 0 24 24" width="24" height="24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true"><path d="M15.914 4a1.5 1.5 0 00-2.474-1.561l-9 9A1.5 1.5 0 005.5 14h4.002a.5.5 0 01.471.666L8.086 20a1.5 1.5 0 002.475 1.56l9-9A1.5 1.5 0 0018.5 10h-3.997a.5.5 0 01-.472-.667z"/></svg>,
  check: <svg viewBox="0 0 24 24" width="24" height="24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true"><path d="M20 6 9 17l-5-5"/></svg>,
};

/** Default guide steps for cotizador */
const DEFAULT_STEPS = [
  { step: 1, title: "Origen y destino", description: "Elegí dónde retiramos y a dónde entregamos. Usá el autocompletado de barrios.", icon: ICONS.pin },
  { step: 2, title: "Servicio", description: "Seleccioná Express, LowCost o Flex según urgencia y presupuesto.", icon: ICONS.bike },
  { step: 3, title: "Confirmá y listo", description: "Revisá el resumen, cargá los datos y confirmá. Te contactamos por WhatsApp.", icon: ICONS.check },
];

/**
 * QuoteGuide: guía paso a paso del cotizador (pasos laterales o superior).
 */
export function QuoteGuide({ steps = DEFAULT_STEPS, currentStep = 0, orientation = "horizontal", className = "" }) {
  // Convert to StepperHorizontal format if horizontal
  const horizontalSteps = steps.map(s => ({ title: s.title, subtitle: s.description }));

  if (orientation === "horizontal") {
    return (
      <div style={{ ...parseClassName(className) }}>
        <StepperHorizontal steps={horizontalSteps} currentStep={currentStep} />
      </div>
    );
  }

  // Vertical orientation: lista numerada con BezelCard
  return (
    <div style={{ display: "flex", flexDirection: "column", gap: "var(--spacing-4)", ...parseClassName(className) }}>
      {steps.map((step, idx) => {
        const isCompleted = idx < currentStep;
        const isActive = idx === currentStep;
        const isPending = idx > currentStep;

        return (
          <BezelCard
            key={step.step}
            variant={isActive ? "accent" : isCompleted ? "dark" : "light"}
            hoverLift={false}
            padding={20}
          >
            <div style={{ display: "flex", alignItems: "flex-start", gap: "var(--spacing-4)" }}>
              {/* Step number circle */}
              <div style={{
                flexShrink: 0,
                width: "var(--tap-min)",
                height: "var(--tap-min)",
                borderRadius: "var(--radius-full)",
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
                fontFamily: "var(--font-mono)",
                fontSize: "var(--text-base)",
                fontWeight: 700,
                fontVariantNumeric: "tabular-nums",
                ...(isCompleted
                  ? { background: "var(--color-brand-yellow-500)", color: "var(--color-brand-blue-500)", border: "2px solid var(--color-white)", boxShadow: "0 0 0 4px rgba(255,236,1,.3)" }
                  : isActive
                  ? { background: "var(--color-brand-blue-500)", color: "var(--color-white)", border: "2px solid var(--color-white)", boxShadow: "0 0 0 4px rgba(9,80,246,.2)" }
                  : { background: "var(--color-brand-blue-100)", color: "var(--color-brand-blue-500)", border: "2px solid var(--color-white)" }),
              }}>
                {isCompleted ? "✓" : (step.step < 10 ? `0${step.step}` : step.step)}
              </div>

              <div style={{ flex: 1, minWidth: 0 }}>
                <div style={{ display: "flex", alignItems: "center", gap: "var(--spacing-3)", marginBottom: "var(--spacing-2)" }}>
                  <span style={{
                    flexShrink: 0,
                    width: 48,
                    height: 48,
                    borderRadius: "var(--radius-control)",
                    background: isActive ? "rgba(255,236,1,.2)" : "var(--color-brand-blue-50)",
                    border: `1px solid ${isActive ? "var(--color-brand-yellow-500)" : "var(--color-brand-blue-100)"}`,
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "center",
                    color: isActive ? "var(--color-brand-blue-500)" : "var(--color-brand-blue-500)",
                  }}>
                    {step.icon}
                  </span>
                  <div>
                    <h3 style={{
                      margin: 0,
                      fontFamily: "var(--font-subheading)",
                      fontSize: "var(--text-lg)",
                      fontWeight: 400,
                      textTransform: "uppercase",
                      letterSpacing: "var(--tracking-wider)",
                      color: isActive ? "var(--color-brand-blue-500)" : "var(--color-brand-blue-500)",
                    }}>
                      {step.title}
                    </h3>
                    {isActive && (
                      <Badge tone="accent" size="sm" mono rotate={false}>Paso actual</Badge>
                    )}
                  </div>
                </div>
                <p style={{
                  margin: 0,
                  fontFamily: "var(--font-sans)",
                  fontSize: "var(--text-sm)",
                  lineHeight: "var(--leading-relaxed)",
                  color: "var(--color-brand-blue-500)",
                  opacity: isPending ? 0.6 : 1,
                }}>
                  {step.description}
                </p>
              </div>
            </div>
          </BezelCard>
        );
      })}
    </div>
  );
}

function parseClassName(className) {
  return {};
}