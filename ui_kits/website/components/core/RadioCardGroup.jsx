import React from "react";

/** Check icon (Lucide-style, 2px stroke) */
const Check = () => <svg viewBox="0 0 24 24" width="16" height="16" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true"><path d="M20 6 9 17l-5-5"/></svg>;

const ICONS = {
  EXPRESS: () => <svg viewBox="0 0 24 24" width="24" height="24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true"><path d="M15.914 4a1.5 1.5 0 00-2.474-1.561l-9 9A1.5 1.5 0 005.5 14h4.002a.5.5 0 01.471.666L8.086 20a1.5 1.5 0 002.475 1.56l9-9A1.5 1.5 0 0018.5 10h-3.997a.5.5 0 01-.472-.667z"/></svg>,
  LOW_COST: () => <svg viewBox="0 0 24 24" width="24" height="24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true"><path d="M16 17h6v-6"/><path d="M22 17-8.5-8.5-5 5L2 7"/></svg>,
  FLEX: () => <svg viewBox="0 0 24 24" width="24" height="24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true"><path d="M12 6v6l4 2"/><path d="M22 12a10 10 0 1 1-20 0 10 10 0 0 1 20 0"/></svg>,
};

/** RadioCardGroup: selector de servicio interactivo (Express/LowCost/Flex) con estados checked diferenciados por tipo. */
export function RadioCardGroup({
  options,
  value,
  onChange,
  name = "service-selector",
  className = "",
  gridCols = "grid-cols-1 md:grid-cols-3",
}) {
  return (
    <div
      role="radiogroup"
      aria-label="Selector de servicio"
      style={{
        display: "grid",
        gap: "var(--spacing-6)",
        width: "100%",
        gridTemplateColumns: "1fr",
      }}
      className={className}
    >
      <style>{`
        @media (min-width: 768px) {
          .rcg-grid { grid-template-columns: repeat(3, 1fr) !important; }
        }
      `}</style>
      {options.map((opt) => {
        const isChecked = value === opt.id;
        const type = (opt.serviceType || opt.id).toUpperCase();
        const Icon = ICONS[type] || ICONS.EXPRESS;

        // Checked styles per service type (DESIGN.md §4.4, 4.1)
        const getCheckedStyles = () => {
          if (type.includes("EXPRESS")) {
            return {
              tone: "dark",
              borderColor: "var(--color-brand-blue-500)",
              badgeTone: "accent",
              iconBg: "rgba(255,255,255,.2)",
              iconColor: "var(--color-white)",
              checkBg: "var(--color-brand-yellow-500)",
              checkBorder: "var(--color-brand-yellow-500)",
              checkColor: "var(--color-brand-blue-500)",
              titleColor: "var(--color-white)",
              descColor: "rgba(255,255,255,.7)",
              labelColor: "rgba(255,255,255,.7)",
              priceColor: "var(--color-brand-yellow-500)",
            };
          }
          if (type.includes("LOW")) {
            return {
              tone: "light",
              borderColor: "var(--color-brand-blue-200)",
              badgeTone: "muted",
              iconBg: "var(--color-brand-blue-50)",
              iconColor: "var(--color-brand-blue-500)",
              checkBg: "var(--color-brand-blue-500)",
              checkBorder: "var(--color-brand-blue-500)",
              checkColor: "var(--color-white)",
              titleColor: "var(--color-brand-blue-500)",
              descColor: "var(--color-brand-blue-500)",
              labelColor: "var(--color-brand-blue-500)",
              priceColor: "var(--color-brand-blue-500)",
            };
          }
          if (type.includes("FLEX")) {
            return {
              tone: "light",
              borderColor: "var(--color-brand-yellow-200)",
              badgeTone: "accent",
              iconBg: "var(--color-brand-yellow-50)",
              iconColor: "var(--color-brand-blue-500)",
              checkBg: "var(--color-brand-blue-500)",
              checkBorder: "var(--color-brand-blue-500)",
              checkColor: "var(--color-white)",
              titleColor: "var(--color-brand-blue-500)",
              descColor: "var(--color-brand-blue-500)",
              labelColor: "var(--color-brand-blue-500)",
              priceColor: "var(--color-brand-blue-500)",
            };
          }
          return {
            tone: "dark",
            borderColor: "var(--color-brand-blue-500)",
            badgeTone: "accent",
            iconBg: "rgba(255,255,255,.2)",
            iconColor: "var(--color-white)",
            checkBg: "var(--color-brand-yellow-500)",
            checkBorder: "var(--color-brand-yellow-500)",
            checkColor: "var(--color-brand-blue-500)",
            titleColor: "var(--color-white)",
            descColor: "rgba(255,255,255,.7)",
            labelColor: "rgba(255,255,255,.7)",
            priceColor: "var(--color-brand-yellow-500)",
          };
        };

        const uncheckedStyles = {
          tone: "light",
          borderColor: "var(--color-brand-blue-100)",
          badgeTone: "muted",
          iconBg: "var(--color-brand-blue-50)",
          iconColor: "var(--color-brand-blue-500)",
          checkBg: "var(--color-white)",
          checkBorder: "var(--color-brand-blue-200)",
          checkColor: "transparent",
          titleColor: "var(--color-brand-blue-500)",
          descColor: "var(--color-brand-blue-500)",
          labelColor: "var(--color-brand-blue-500)",
          priceColor: "var(--color-brand-blue-500)",
        };

        const s = isChecked ? getCheckedStyles() : uncheckedStyles;

        const handleClick = () => {
          if (!opt.disabled) onChange(opt.id);
        };

        const handleKeyDown = (e) => {
          if ((e.key === " " || e.key === "Enter") && !opt.disabled) {
            e.preventDefault();
            onChange(opt.id);
          }
        };

        return (
          <label
            key={opt.id}
            role="radio"
            aria-checked={isChecked}
            aria-disabled={opt.disabled}
            tabIndex={opt.disabled ? -1 : 0}
            onClick={handleClick}
            onKeyDown={handleKeyDown}
            style={{
              position: "relative",
              display: "flex",
              flexDirection: "column",
              justifyContent: "space-between",
              padding: "var(--spacing-6)",
              borderRadius: "var(--radius-card-inner)",
              border: "2px solid",
              borderColor: s.borderColor,
              cursor: opt.disabled ? "not-allowed" : "pointer",
              userSelect: "none",
              transition: "transform var(--duration-base) var(--ease-default), background-color var(--duration-base) var(--ease-default), border-color var(--duration-base) var(--ease-default), box-shadow var(--duration-base) var(--ease-default)",
              opacity: opt.disabled ? 0.5 : 1,
              pointerEvents: opt.disabled ? "none" : "auto",
            }}
            onMouseEnter={(e) => {
              if (!opt.disabled) {
                e.currentTarget.style.transform = "translateY(-4px)";
                e.currentTarget.style.boxShadow = "var(--shadow-antigravity-deep)";
              }
            }}
            onMouseLeave={(e) => {
              e.currentTarget.style.transform = "";
              e.currentTarget.style.boxShadow = "";
            }}
            onMouseDown={(e) => {
              if (!opt.disabled) e.currentTarget.style.transform = "scale(0.98)";
            }}
            onMouseUp={(e) => {
              if (!opt.disabled) e.currentTarget.style.transform = "translateY(-4px)";
            }}
          >
            <input
              type="radio"
              name={name}
              value={opt.id}
              checked={isChecked}
              onChange={() => { if (!opt.disabled) onChange(opt.id); }}
              disabled={opt.disabled}
              style={{ position: "absolute", opacity: 0, width: "100%", height: "100%", cursor: opt.disabled ? "not-allowed" : "pointer" }}
            />

            <div style={{ display: "flex", flexDirection: "column", flex: 1 }}>
              <div style={{ display: "flex", alignItems: "flex-start", justifyContent: "space-between", marginBottom: "var(--spacing-4)" }}>
                <div
                  style={{
                    width: 48,
                    height: 48,
                    borderRadius: "var(--radius-control)",
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "center",
                    background: s.iconBg,
                    color: s.iconColor,
                    border: "1px solid var(--color-brand-blue-100)",
                    transition: "background-color var(--duration-base) var(--ease-default), color var(--duration-base) var(--ease-default)",
                  }}
                >
                  <Icon />
                </div>

                <div style={{ display: "flex", alignItems: "center", gap: "var(--spacing-2)" }}>
                  {opt.badge && (
                    <span
                      style={{
                        padding: "4px 12px",
                        borderRadius: "var(--radius-button)",
                        border: "1px solid",
                        fontFamily: "var(--font-subheading)",
                        fontSize: "var(--text-xs)",
                        textTransform: "uppercase",
                        letterSpacing: "var(--tracking-wider)",
                        fontWeight: 400,
                        lineHeight: 1.25,
                        ...(s.badgeTone === "accent"
                          ? { background: "var(--color-brand-yellow-500)", color: "var(--color-brand-blue-500)", borderColor: "var(--color-brand-yellow-500)", boxShadow: "var(--shadow-accent-sm)" }
                          : { background: "var(--color-brand-blue-50)", color: "var(--color-brand-blue-500)", borderColor: "var(--color-brand-blue-100)" }),
                      }}
                    >
                      {opt.badge}
                    </span>
                  )}

                  <div
                    style={{
                      width: 24,
                      height: 24,
                      borderRadius: "var(--radius-full)",
                      border: "2px solid",
                      borderColor: s.checkBorder,
                      background: s.checkBg,
                      color: s.checkColor,
                      display: "flex",
                      alignItems: "center",
                      justifyContent: "center",
                      transition: "all var(--duration-base) var(--ease-default)",
                    }}
                  >
                    {isChecked && <Check />}
                  </div>
                </div>
              </div>

              <h3
                style={{
                  margin: 0,
                  fontFamily: "var(--font-subheading)",
                  fontSize: "var(--text-xl)",
                  fontWeight: 400,
                  textTransform: "uppercase",
                  letterSpacing: "var(--tracking-wide)",
                  lineHeight: 1.2,
                  color: s.titleColor,
                }}
              >
                {opt.label}
              </h3>

              {opt.description && (
                <p
                  style={{
                    margin: "var(--spacing-2) 0 0",
                    fontFamily: "var(--font-sans)",
                    fontSize: "var(--text-sm)",
                    lineHeight: "var(--leading-relaxed)",
                    color: s.descColor,
                  }}
                >
                  {opt.description}
                </p>
              )}
            </div>

            {opt.price && (
              <div
                style={{
                  marginTop: "var(--spacing-4)",
                  paddingTop: "var(--spacing-3)",
                  borderTop: "1px solid currentColor",
                  opacity: 0.1,
                  display: "flex",
                  alignItems: "baseline",
                  justifyContent: "space-between",
                }}
              >
                <span
                  style={{
                    fontFamily: "var(--font-subheading)",
                    fontSize: "var(--text-xs)",
                    textTransform: "uppercase",
                    letterSpacing: "var(--tracking-wider)",
                    fontWeight: 400,
                    color: s.labelColor,
                  }}
                >
                  DESDE
                </span>
                <span
                  style={{
                    fontFamily: "var(--font-mono)",
                    fontSize: "var(--text-lg)",
                    fontWeight: 700,
                    fontVariantNumeric: "tabular-nums",
                    color: s.priceColor,
                  }}
                >
                  {opt.price}
                </span>
              </div>
            )}
          </label>
        );
      })}
    </div>
  );
}