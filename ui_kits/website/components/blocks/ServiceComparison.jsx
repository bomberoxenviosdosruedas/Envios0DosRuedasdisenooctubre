import React from "react";
import { BezelCard } from "../core/BezelCard";

/** Check/Cross icons */
const Check = () => <svg viewBox="0 0 24 24" width="16" height="16" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true"><path d="M20 6 9 17l-5-5"/></svg>;
const Cross = () => <svg viewBox="0 0 24 24" width="16" height="16" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true"><path d="M18 6 6 18M6 6l12 12"/></svg>;

/**
 * ServiceComparison: tabla comparativa de servicios (cotizador, página servicios).
 * Responsive: mobile → cards apiladas, desktop → <table> semantic.
 */
export function ServiceComparison({ rows, className = "" }) {
  const headers = ["Característica", "Express", "LowCost", "Flex", "Emprendedores"];

  // Detect if value is boolean-like for check/cross rendering
  const renderCell = (value, isHeader = false) => {
    if (isHeader) {
      return (
        <th style={{
          padding: "var(--spacing-3) var(--spacing-4)",
          fontFamily: "var(--font-subheading)",
          fontSize: "var(--text-sm)",
          fontWeight: 400,
          textTransform: "uppercase",
          letterSpacing: "var(--tracking-wider)",
          textAlign: "left",
          color: "var(--color-brand-blue-500)",
          borderBottom: "2px solid var(--color-brand-blue-100)",
          background: "var(--color-brand-blue-50)",
          position: "sticky",
          top: 0,
          zIndex: 1,
        }}>
          {value}
        </th>
      );
    }

    // Boolean-like values
    const str = String(value).toLowerCase().trim();
    const isPositive = ["sí", "si", "yes", "true", "incluido", "incluye", "✓", "✔", "check"].some(x => str.includes(x));
    const isNegative = ["no", "no incluido", "excluido", "✗", "✘", "cross"].some(x => str.includes(x));

    if (isPositive || isNegative) {
      return (
        <td style={{ padding: "var(--spacing-3) var(--spacing-4)", textAlign: "center" }}>
          <span style={{
            display: "inline-flex",
            alignItems: "center",
            justifyContent: "center",
            width: 24,
            height: 24,
            borderRadius: "var(--radius-full)",
            background: isPositive ? "var(--color-success-500)" : "var(--color-error-500)",
            color: "var(--color-white)",
          }}>
            {isPositive ? <Check /> : <Cross />}
          </span>
        </td>
      );
    }

    return (
      <td style={{
        padding: "var(--spacing-3) var(--spacing-4)",
        fontFamily: "var(--font-sans)",
        fontSize: "var(--text-sm)",
        lineHeight: "var(--leading-relaxed)",
        color: "var(--color-brand-blue-500)",
      }}>
        {value}
      </td>
    );
  };

  return (
    <div style={{ overflowX: "auto", ...parseClassName(className) }}>
      <style>{`
        @media (min-width: 768px) {
          .svc-table { display: table; width: 100%; border-collapse: collapse; }
          .svc-row { display: table-row; }
          .svc-cell { display: table-cell; }
          .svc-header { display: table-header-group; }
          .svc-body { display: table-row-group; }
          .svc-mobile-cards { display: none; }
        }
        @media (max-width: 767px) {
          .svc-table { display: block; }
          .svc-header { display: none; }
          .svc-row { display: block; margin-bottom: var(--spacing-6); }
          .svc-cell { display: flex; justify-content: space-between; padding: var(--spacing-2) var(--spacing-3); }
          .svc-cell:first-child { font-weight: 600; color: var(--color-brand-blue-500); }
          .svc-mobile-cards { display: block; }
        }
        .svc-row:nth-child(even) .svc-cell { background: var(--color-brand-blue-50); }
        .svc-row:hover .svc-cell { background: var(--color-brand-blue-50); }
      `}</style>

      {/* Desktop Table */}
      <div className="svc-table" role="table">
        <div className="svc-header" role="row">
          {headers.map((h, i) => renderCell(h, true))}
        </div>
        <div className="svc-body">
          {rows.map((row, rowIdx) => (
            <div key={rowIdx} className="svc-row" role="row">
              {headers.map((h, colIdx) => {
                const value = colIdx === 0 ? row.feature : row[h.toLowerCase().replace(/\s+/g, "")];
                return renderCell(value ?? "");
              })}
            </div>
          ))}
        </div>
      </div>

      {/* Mobile Cards */}
      <div className="svc-mobile-cards" style={{ display: "flex", flexDirection: "column", gap: "var(--spacing-4)" }}>
        {rows.map((row, rowIdx) => (
          <BezelCard key={rowIdx} variant="light" padding={20} hoverLift={false}>
            <div style={{ display: "flex", flexDirection: "column", gap: "var(--spacing-3)" }}>
              <div style={{
                display: "flex",
                justifyContent: "space-between",
                paddingBottom: "var(--spacing-3)",
                borderBottom: "1px solid var(--color-brand-blue-100)",
              }}>
                <span style={{
                  fontFamily: "var(--font-subheading)",
                  fontSize: "var(--text-sm)",
                  textTransform: "uppercase",
                  letterSpacing: "var(--tracking-wider)",
                  color: "var(--color-brand-blue-500)",
                }}>
                  {row.feature}
                </span>
              </div>
              <div style={{ display: "grid", gridTemplateColumns: "repeat(2, 1fr)", gap: "var(--spacing-3)" }}>
                {headers.slice(1).map((h) => {
                  const key = h.toLowerCase().replace(/\s+/g, "");
                  const value = row[key];
                  const str = String(value ?? "").toLowerCase().trim();
                  const isPositive = ["sí", "si", "yes", "true", "incluido", "incluye", "✓", "✔", "check"].some(x => str.includes(x));
                  const isNegative = ["no", "no incluido", "excluido", "✗", "✘", "cross"].some(x => str.includes(x));
                  
                  return (
                    <div key={h} style={{
                      display: "flex",
                      flexDirection: "column",
                      gap: 4,
                      padding: "var(--spacing-2)",
                      background: "var(--color-brand-blue-50)",
                      borderRadius: "var(--radius-control)",
                    }}>
                      <span style={{
                        fontFamily: "var(--font-mono)",
                        fontSize: "11px",
                        textTransform: "uppercase",
                        letterSpacing: "var(--tracking-wider)",
                        color: "var(--color-brand-blue-500)",
                      }}>
                        {h}
                      </span>
                      {isPositive || isNegative ? (
                        <span style={{
                          display: "inline-flex",
                          alignItems: "center",
                          justifyContent: "center",
                          gap: 6,
                          fontFamily: "var(--font-sans)",
                          fontSize: "var(--text-sm)",
                          color: isPositive ? "var(--color-success-500)" : "var(--color-error-500)",
                        }}>
                          {isPositive ? <Check /> : <Cross />}
                          <span>{value}</span>
                        </span>
                      ) : (
                        <span style={{
                          fontFamily: "var(--font-sans)",
                          fontSize: "var(--text-sm)",
                          color: "var(--color-brand-blue-500)",
                        }}>
                          {value}
                        </span>
                      )}
                    </div>
                  );
                })}
              </div>
            </div>
          </BezelCard>
        ))}
      </div>
    </div>
  );
}

function parseClassName(className) {
  return {};
}