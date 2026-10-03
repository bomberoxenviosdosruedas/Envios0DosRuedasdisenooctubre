import React from "react";

/** Check icon (Lucide-style, 2px stroke) */
const Check = () => <svg viewBox="0 0 24 24" width="16" height="16" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true"><path d="M20 6 9 17l-5-5"/></svg>;

/**
 * StepperHorizontal: stepper de flujo horizontal para cotizador (pasos: 1. Datos → 2. Servicio → 3. Confirmación).
 */
export function StepperHorizontal({ steps, currentStep, onStepClick, className = "" }) {
  const progress = steps.length > 1 ? (Math.min(currentStep, steps.length - 1) / (steps.length - 1)) * 100 : 0;

  return (
    <div style={{ width: "100%", padding: "var(--spacing-4) 0", ...parseClassName(className) }}>
      <div style={{ position: "relative", display: "flex", alignItems: "center", justifyContent: "space-between", width: "100%" }}>
        {/* Background Step Line */}
        <div
          style={{
            position: "absolute",
            top: "calc(20px + var(--control-md) / 2)",
            left: 0,
            right: 0,
            height: "2px",
            background: "var(--color-brand-blue-100)",
            zIndex: 0,
          }}
        />

        {/* Active Step Progress Line */}
        <div
          style={{
            position: "absolute",
            top: "calc(20px + var(--control-md) / 2)",
            left: 0,
            height: "2px",
            background: "var(--color-brand-yellow-500)",
            width: `${progress}%`,
            transition: "width var(--duration-slow) var(--ease-spring)",
            zIndex: 0,
          }}
        />

        {steps.map((step, idx) => {
          const isCompleted = idx < currentStep;
          const isActive = idx === currentStep;
          const isPending = idx > currentStep;
          const isClickable = onStepClick && (isCompleted || isActive);

          const circleStyle = {
            width: "var(--control-md)",
            height: "var(--control-md)",
            borderRadius: "var(--radius-full)",
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            fontFamily: "var(--font-subheading)",
            fontSize: "var(--text-base)",
            fontWeight: 400,
            border: "2px solid",
            transition: "all var(--duration-base) var(--ease-default)",
            boxSizing: "border-box",
            ...(isCompleted
              ? { background: "var(--color-brand-yellow-500)", borderColor: "var(--color-brand-yellow-500)", color: "var(--color-brand-blue-500)", boxShadow: "var(--shadow-sm)" }
              : isActive
              ? { background: "var(--color-brand-blue-500)", borderColor: "var(--color-brand-blue-500)", color: "var(--color-white)", boxShadow: "0 0 0 4px rgba(9,80,246,.2)", transform: "scale(1.05)" }
              : { background: "var(--color-white)", borderColor: "var(--color-brand-blue-300)", color: "var(--color-brand-blue-500)" }),
            ...(isClickable ? { cursor: "pointer" } : {}),
          };

          const labelStyle = {
            marginTop: "var(--spacing-2)",
            textAlign: "center",
            maxWidth: "120px",
            display: "flex",
            flexDirection: "column",
            gap: 4,
          };

          const titleStyle = {
            display: "block",
            fontFamily: "var(--font-subheading)",
            fontSize: "var(--text-xs)",
            textTransform: "uppercase",
            letterSpacing: "var(--tracking-wider)",
            fontWeight: 400,
            color: "var(--color-brand-blue-500)",
            transition: "color var(--duration-base) var(--ease-default)",
          };

          const subtitleStyle = {
            display: "block",
            fontFamily: "var(--font-mono)",
            fontSize: "11px",
            lineHeight: "var(--leading-tight)",
            color: "var(--color-brand-blue-500)",
          };

          const handleClick = () => {
            if (isClickable) onStepClick(idx);
          };

          const handleKeyDown = (e) => {
            if (isClickable && (e.key === "Enter" || e.key === " ")) {
              e.preventDefault();
              onStepClick(idx);
            }
          };

          return (
            <div
              key={idx}
              style={{ display: "flex", flexDirection: "column", alignItems: "center", position: "relative", zIndex: 1 }}
              onClick={handleClick}
              role={isClickable ? "button" : undefined}
              tabIndex={isClickable ? 0 : undefined}
              onKeyDown={handleKeyDown}
              onMouseEnter={(e) => {
                if (isClickable) e.currentTarget.querySelector("div")?.style.setProperty("transform", "scale(1.1)");
              }}
              onMouseLeave={(e) => {
                if (isClickable) {
                  const circle = e.currentTarget.querySelector("div");
                  if (circle) circle.style.transform = isActive ? "scale(1.05)" : "";
                }
              }}
            >
              <div style={circleStyle}>
                {isCompleted ? <Check style={{ strokeWidth: 3 }} /> : <span>{idx + 1}</span>}
              </div>
              <div style={labelStyle}>
                <span style={titleStyle}>{step.title}</span>
                {step.subtitle && <span style={subtitleStyle}>{step.subtitle}</span>}
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
}

/** Helper simple para parsear className básico a style object (solo para className prop compat) */
function parseClassName(className) {
  const style = {};
  if (!className) return style;
  // Muy básico: solo soportamos py-*, w-full, etc. si se usan
  return style;
}