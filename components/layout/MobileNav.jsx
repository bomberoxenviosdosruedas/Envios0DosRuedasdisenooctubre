import React from "react";
import { motion, AnimatePresence, useReducedMotion } from "motion/react";
import { Button } from "../core/Button";

/** MobileNav: navegación móvil off-canvas (usado por OptimizedHeader) */
export function MobileNav({ isOpen, onClose, navItems, activeDropdown, onDropdownToggle, className = "" }) {
  const prefersReducedMotion = useReducedMotion();

  const handleOverlayClick = (e) => {
    if (e.target === e.currentTarget) onClose();
  };

  const handleKeyDown = (e) => {
    if (e.key === "Escape") onClose();
  };

  React.useEffect(() => {
    document.addEventListener("keydown", handleKeyDown);
    return () => document.removeEventListener("keydown", handleKeyDown);
  }, []);

  if (!isOpen) return null;

  return (
    <AnimatePresence mode="wait">
      <motion.div
        initial={prefersReducedMotion ? { opacity: 1 } : { opacity: 0 }}
        animate={{ opacity: 1 }}
        exit={prefersReducedMotion ? { opacity: 0 } : { opacity: 0 }}
        transition={{ duration: 0.2, ease: "easeInOut" }}
        style={{
          position: "fixed",
          inset: 0,
          zIndex: 99,
          background: "rgba(9,80,246,.7)",
          backdropFilter: "blur(12px)",
          WebkitBackdropFilter: "blur(12px)",
        }}
        onClick={handleOverlayClick}
        aria-hidden="true"
      />
      <motion.div
        initial={prefersReducedMotion ? { x: 0 } : { x: "100%" }}
        animate={{ x: 0 }}
        exit={prefersReducedMotion ? { x: 0 } : { x: "100%" }}
        transition={{ type: "spring", stiffness: 320, damping: 28 }}
        style={{
          position: "fixed",
          top: 0,
          right: 0,
          bottom: 0,
          width: "100%",
          maxWidth: 320,
          zIndex: 100,
          background: "var(--color-brand-blue-500)",
          borderLeft: "1px solid rgba(255,255,255,.1)",
          display: "flex",
          flexDirection: "column",
          overflowY: "auto",
        }}
        className={className}
      >
        {/* Drawer Header */}
        <div style={{ display: "flex", alignItems: "center", justifyContent: "space-between", padding: "var(--spacing-4) var(--spacing-6)", borderBottom: "1px solid rgba(255,255,255,.1)" }}>
          <span style={{
            fontFamily: "var(--font-display)",
            fontSize: "var(--text-xl)",
            fontWeight: 400,
            textTransform: "uppercase",
            letterSpacing: "var(--tracking-tight)",
            color: "var(--color-white)",
          }}>
            Envíos <span style={{ color: "var(--color-brand-yellow-500)" }}>DosRuedas</span>
          </span>
          <button
            onClick={onClose}
            style={{
              width: 44,
              height: 44,
              borderRadius: "var(--radius-full)",
              background: "rgba(255,255,255,.1)",
              color: "var(--color-white)",
              border: "none",
              cursor: "pointer",
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
              transition: "all var(--duration-base) var(--ease-default)",
            }}
            onMouseEnter={(e) => { e.currentTarget.style.background = "rgba(255,255,255,.15)"; e.currentTarget.style.color = "var(--color-brand-yellow-500)"; }}
            onMouseLeave={(e) => { e.currentTarget.style.background = "rgba(255,255,255,.1)"; e.currentTarget.style.color = "var(--color-white)"; }}
            aria-label="Cerrar menú"
          >
            <svg viewBox="0 0 24 24" width="24" height="24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true"><line x1="18" y1="6" x2="6" y2="18"/><line x1="6" y1="6" x2="18" y2="18"/></svg>
          </button>
        </div>

        {/* Nav Items */}
        <nav style={{ padding: "var(--spacing-4) var(--spacing-6)", display: "flex", flexDirection: "column", gap: "var(--spacing-1)" }}>
          {navItems.map((item) => {
            const isActive = activeDropdown === item.label;
            const hasDropdown = item.dropdownItems && item.dropdownItems.length > 0;

            return (
              <div key={item.label} style={{ position: "relative" }}>
                {item.href ? (
                  <a
                    href={item.href}
                    onClick={onClose}
                    style={{
                      display: "flex",
                      alignItems: "center",
                      padding: "12px 16px",
                      borderRadius: "var(--radius-control)",
                      fontFamily: "var(--font-subheading)",
                      fontSize: "clamp(20px, 2.5vw, 24px)",
                      fontWeight: 400,
                      textTransform: "uppercase",
                      letterSpacing: "var(--tracking-wider)",
                      color: "var(--color-white)",
                      textDecoration: "none",
                      background: "transparent",
                      transition: "all var(--duration-base) var(--ease-default)",
                      minHeight: 48,
                    }}
                    onMouseEnter={(e) => { e.currentTarget.style.background = "rgba(255,255,255,.1)"; e.currentTarget.style.color = "var(--color-brand-yellow-500)"; }}
                    onMouseLeave={(e) => { e.currentTarget.style.background = "transparent"; e.currentTarget.style.color = "var(--color-white)"; }}
                  >
                    {item.label}
                  </a>
                ) : (
                  <button
                    onClick={() => onDropdownToggle(item.label)}
                    style={{
                      display: "flex",
                      alignItems: "center",
                      justifyContent: "space-between",
                      width: "100%",
                      padding: "12px 16px",
                      borderRadius: "var(--radius-control)",
                      fontFamily: "var(--font-subheading)",
                      fontSize: "clamp(20px, 2.5vw, 24px)",
                      fontWeight: 400,
                      textTransform: "uppercase",
                      letterSpacing: "var(--tracking-wider)",
                      color: "var(--color-white)",
                      background: "transparent",
                      border: "none",
                      cursor: "pointer",
                      transition: "all var(--duration-base) var(--ease-default)",
                      minHeight: 48,
                    }}
                    onMouseEnter={(e) => { e.currentTarget.style.background = "rgba(255,255,255,.1)"; e.currentTarget.style.color = "var(--color-brand-yellow-500)"; }}
                    onMouseLeave={(e) => { e.currentTarget.style.background = "transparent"; e.currentTarget.style.color = "var(--color-white)"; }}
                  >
                    {item.label}
                    <svg
                      viewBox="0 0 24 24"
                      width="20"
                      height="20"
                      fill="none"
                      stroke="currentColor"
                      strokeWidth="2"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      aria-hidden="true"
                      style={{
                        transition: "transform var(--duration-base) var(--ease-default)",
                        transform: isActive ? "rotate(180deg)" : "",
                        flexShrink: 0,
                      }}
                    >
                      <polyline points="6 9 12 15 18 9" />
                    </svg>
                  </button>
                )}

                {/* Submenu */}
                <AnimatePresence>
                  {hasDropdown && isActive && (
                    <motion.div
                      initial={prefersReducedMotion ? { opacity: 1, height: "auto" } : { opacity: 0, height: 0 }}
                      animate={{ opacity: 1, height: "auto" }}
                      exit={prefersReducedMotion ? { opacity: 0, height: 0 } : { opacity: 0, height: 0 }}
                      transition={{ type: "spring", stiffness: 300, damping: 25 }}
                      style={{ overflow: "hidden", marginLeft: 16, marginTop: 4 }}
                    >
                      <div style={{ display: "flex", flexDirection: "column", gap: 4 }}>
                        {item.dropdownItems.map((subItem) => (
                          <a
                            key={subItem.href}
                            href={subItem.href}
                            onClick={onClose}
                            style={{
                              display: "flex",
                              alignItems: "center",
                              gap: 12,
                              padding: "11px 16px",
                              borderRadius: "var(--radius-control)",
                              color: "rgba(255,255,255,.85)",
                              textDecoration: "none",
                              fontSize: "var(--text-sm)",
                              fontFamily: "var(--font-subheading)",
                              fontWeight: 400,
                              textTransform: "uppercase",
                              letterSpacing: "var(--tracking-wider)",
                              minHeight: 44,
                              background: "transparent",
                              transition: "all var(--duration-base) var(--ease-default)",
                            }}
                            onMouseEnter={(e) => { e.currentTarget.style.background = "rgba(255,255,255,.1)"; e.currentTarget.style.color = "var(--color-brand-yellow-500)"; e.currentTarget.style.transform = "translateX(4px)"; }}
                            onMouseLeave={(e) => { e.currentTarget.style.background = "transparent"; e.currentTarget.style.color = "rgba(255,255,255,.85)"; e.currentTarget.style.transform = "translateX(0)"; }}
                          >
                            {subItem.icon && <subItem.icon style={{ color: "rgba(255,255,255,.5)" }} />}
                            {subItem.label}
                          </a>
                        ))}
                      </div>
                    </motion.div>
                  )}
                </AnimatePresence>
              </div>
            );
          })}
        </nav>

        {/* Drawer Footer */}
        <div style={{ padding: "var(--spacing-6)", borderTop: "1px solid rgba(255,255,255,.1)", marginTop: "auto" }}>
          <a
            href="tel:+542236602699"
            style={{
              display: "flex",
              alignItems: "center",
              gap: 12,
              padding: "12px 16px",
              borderRadius: "var(--radius-control)",
              fontFamily: "var(--font-mono)",
              fontSize: "var(--text-lg)",
              fontWeight: 700,
              color: "var(--color-white)",
              textDecoration: "none",
              background: "rgba(255,255,255,.1)",
              minHeight: 44,
              transition: "all var(--duration-base) var(--ease-default)",
            }}
            onMouseEnter={(e) => { e.currentTarget.style.background = "rgba(255,255,255,.15)"; e.currentTarget.style.color = "var(--color-brand-yellow-500)"; }}
            onMouseLeave={(e) => { e.currentTarget.style.background = "rgba(255,255,255,.1)"; e.currentTarget.style.color = "var(--color-white)"; }}
          >
            <svg viewBox="0 0 24 24" width="20" height="20" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true" style={{ color: "var(--color-brand-yellow-500)" }}><path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z"/></svg>
            <span>223 660-2699</span>
          </a>
          <Button
            variant="primary"
            fullWidth
            size="lg"
            style={{ marginTop: "var(--spacing-4)" }}
            href="/cotizar"
          >
            Cotizá tu envío
          </Button>
        </div>
      </motion.div>
    </AnimatePresence>
  );
}