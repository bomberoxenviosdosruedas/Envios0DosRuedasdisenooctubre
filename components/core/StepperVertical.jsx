import React from "react";

/** Check icon (Lucide-style, 2px stroke) */
const Check = () => <svg viewBox="0 0 24 24" width="16" height="16" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true"><path d="M20 6 9 17l-5-5"/></svg>;

/**
 * StepperVertical: stepper vertical alternativo (lista numerada 01·02·03 con cards).
 * Diferencia con Steps.jsx: Steps es para "cómo funciona" (pasos de servicio),
 * StepperVertical es para flujo de UI (progreso de formulario).
 */
export function StepperVertical({ steps, currentStep, onStepClick, className = "" }) {
  return (
    <div style={{ position: "relative", paddingLeft: "var(--spacing-10)", ...parseClassName(className) }}>
      {/* Vertical Connecting Line */}
      <div
        style={{
          position: "absolute",
          top: "var(--spacing-3)",
          bottom: "var(--spacing-3)",
          left: "12px",
          width: "2px",
          background: "var(--color-brand-blue-100)",
          transform: "translateX(-50%)",
          zIndex: 0,
        }}
      />

      {steps.map((step, idx) => {
        const stepNum = step.number !== undefined ? step.number : idx + 1;
        const isCompleted = idx < currentStep;
        const isActive = idx === currentStep;
        const isPending = !isCompleted && !isActive;
        const isClickable = onStepClick && (isCompleted || isActive);

        const numStr = typeof stepNum === "number" && stepNum < 10 ? `0${stepNum}` : String(stepNum);

        const dotStyle = {
          position: "absolute",
          left: "-32px",
          top: "var(--spacing-3)",
          width: "var(--control-md)",
          height: "var(--control-md)",
          borderRadius: "var(--radius-full)",
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          border: "2px solid",
          boxShadow: "var(--shadow-sm)",
          transition: "all var(--duration-slow) var(--ease-spring)",
          zIndex: 1,
          ...(isCompleted
            ? { background: "var(--color-brand-yellow-500)", borderColor: "var(--color-white)", color: "var(--color-brand-blue-500)", boxShadow: "0 0 0 4px rgba(255,236,1,.3), var(--shadow-sm)" }
            : isActive
            ? { background: "var(--color-brand-yellow-500)", borderColor: "var(--color-white)", color: "var(--color-brand-blue-500)", boxShadow: "0 0 0 4px rgba(255,236,1,.3), var(--shadow-sm)", transform: "scale(1.1)" }
            : { background: "var(--color-brand-blue-100)", borderColor: "var(--color-white)", color: "var(--color-brand-blue-500)" }),
          ...(isClickable ? { cursor: "pointer" } : {}),
        };

        const numberStyle = {
          fontFamily: "var(--font-display)",
          fontSize: "var(--text-2xl)",
          fontWeight: 400,
          letterSpacing: "var(--tracking-tight)",
          textTransform: "uppercase",
          lineHeight: "var(--leading-none)",
          color: isPending ? "var(--color-brand-blue-500)" : "var(--color-brand-blue-500)",
        };

        const titleStyle = {
          fontFamily: "var(--font-display)",
          fontSize: "var(--text-xl)",
          fontWeight: 400,
          textTransform: "uppercase",
          letterSpacing: "var(--tracking-wide)",
          lineHeight: "var(--leading-tight)",
          color: "var(--color-brand-blue-500)",
        };

        const descStyle = {
          fontFamily: "var(--font-sans)",
          fontSize: "var(--text-sm)",
          lineHeight: "var(--leading-relaxed)",
          maxWidth: "480px",
          color: "var(--color-brand-blue-500)",
          marginTop: "var(--spacing-1)",
        };

        const detailStyle = {
          fontFamily: "var(--font-mono)",
          fontSize: "11px",
          marginTop: "var(--spacing-2)",
          color: "var(--color-brand-blue-500)",
        };

        const badgeStyle = {
          fontFamily: "var(--font-subheading)",
          fontSize: "var(--text-xs)",
          textTransform: "uppercase",
          letterSpacing: "var(--tracking-wider)",
          fontWeight: 400,
          padding: "4px 8px",
          borderRadius: "var(--radius-button)",
          ...(isActive
            ? { background: "var(--color-brand-yellow-500)", color: "var(--color-brand-blue-500)" }
            : { background: "var(--color-brand-blue-50)", color: "var(--color-brand-blue-500)" }),
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
            style={{ display: "flex", alignItems: "flex-start", gap: "var(--spacing-4)", marginBottom: "var(--spacing-8)", position: "relative" }}
            onClick={handleClick}
            role={isClickable ? "button" : undefined}
            tabIndex={isClickable ? 0 : undefined}
            onKeyDown={handleKeyDown}
            onMouseEnter={(e) => {
              if (isClickable && isActive) {
                const dot = e.currentTarget.querySelector("[data-stepper-dot]");
                if (dot) dot.style.transform = "scale(1.15)";
              }
            }}
            onMouseLeave={(e) => {
              if (isClickable && isActive) {
                const dot = e.currentTarget.querySelector("[data-stepper-dot]");
                if (dot) dot.style.transform = "scale(1.1)";
              }
            }}
          >
            <div style={dotStyle} data-stepper-dot>
              {isCompleted ? <Check style={{ strokeWidth: 3 }} /> : <span style={{ width: 8, height: 8, borderRadius: "var(--radius-full)", background: "currentColor" }} />}
            </div>

            <div style={{ flex: 1, minWidth: 0 }}>
              <div style={{ display: "flex", alignItems: "baseline", gap: "var(--spacing-3)", flexWrap: "wrap" }}>
                <span style={numberStyle}>{numStr}.</span>
                <h3 style={{ margin: 0, ...titleStyle }}>{step.title}</h3>
                {step.badge && <span style={badgeStyle}>{step.badge}</span>}
              </div>
              <p style={descStyle}>{step.description}</p>
              {step.detail && <p style={detailStyle}>{step.detail}</p>}
              {step.body && <p style={{ ...descStyle, fontFamily: "var(--font-sans)" }}>{step.body}</p>}
            </div>
          </div>
        );
      })}
    </div>
  );
}

function parseClassName(className) {
  return {};
}