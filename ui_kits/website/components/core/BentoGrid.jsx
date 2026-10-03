import React from "react";
import { BezelCard } from "./BezelCard";

/**
 * BentoGrid: layout asimétrico 12-columnas para showcase de servicios (Home, páginas servicio).
 * Mobile-first: todo col-span-1 (full width). Desktop: span según prop.
 */
export function BentoGrid({ children, className = "", gap = "var(--spacing-6) lg:var(--spacing-8)", autoRows = "auto-rows-[minmax(340px,auto)] md:auto-rows-[95]" }) {
  return (
    <div
      style={{
        display: "grid",
        gridTemplateColumns: "repeat(12, 1fr)",
        gap: gap,
        ...(autoRows ? { gridAutoRows: autoRows } : {}),
        width: "100%",
      }}
      className={className}
    >
      {children}
    </div>
  );
}

/**
 * BentoGridItem: item individual del BentoGrid con span semántico.
 * Si doubleBezel=true, envuelve children en BezelCard con variant e innerClassName.
 */
export function BentoGridItem({
  children,
  span = "standard",
  className = "",
  doubleBezel = true,
  variant = "light",
  innerClassName = "",
  style,
  ...props
}) {
  const getSpanStyle = () => {
    if (span === 7 || span === "7" || span === "hero") {
      return { gridColumn: "1 / -1" }; // mobile: full width; handled by media queries
    }
    if (span === 5 || span === "5" || span === "standard") {
      return { gridColumn: "1 / -1" };
    }
    if (span === 12 || span === "12" || span === "full") {
      return { gridColumn: "1 / -1" };
    }
    if (typeof span === "number") {
      return { gridColumn: `span ${Math.min(span, 12)}` };
    }
    return { gridColumn: "1 / -1" };
  };

  const spanStyle = getSpanStyle();

  // Media queries for desktop spans
  const desktopSpanStyle = (() => {
    if (span === 7 || span === "7" || span === "hero") return { gridColumn: "span 7" };
    if (span === 5 || span === "5" || span === "standard") return { gridColumn: "span 5" };
    if (span === 12 || span === "12" || span === "full") return { gridColumn: "span 12" };
    if (typeof span === "number") return { gridColumn: `span ${Math.min(span, 12)}` };
    return { gridColumn: "span 5" };
  })();

  const combinedStyle = {
    display: "flex",
    flexDirection: "column",
    minHeight: "100%",
    ...spanStyle,
    ...style,
  };

  const content = doubleBezel ? (
    <BezelCard variant={variant} innerClassName={`flex-1 flex flex-col ${innerClassName}`} className={className} {...props}>
      {children}
    </BezelCard>
  ) : (
    <div className={`h-full flex flex-col overflow-hidden ${className}`} {...props}>
      {children}
    </div>
  );

  return (
    <>
      <style>{`
        @media (min-width: 768px) {
          .bento-item-${spanStyle.gridColumn || "default"} {
            grid-column: ${desktopSpanStyle.gridColumn} !important;
          }
        }
      `}</style>
      <div style={combinedStyle} className={`bento-item-${spanStyle.gridColumn || "default"}`}>
        {content}
      </div>
    </>
  );
}