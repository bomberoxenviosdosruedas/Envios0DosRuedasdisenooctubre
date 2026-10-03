import React, { useState, useEffect, useRef } from "react";
import { motion, AnimatePresence, useReducedMotion } from "motion/react";
import { MobileNav } from "./MobileNav";
import { Button } from "../core/Button";

/** NavItem type */
const NAV_ITEMS = [
  { label: "Inicio", href: "/", icon: "Home" },
  {
    label: "Servicios",
    icon: "Bike",
    dropdownItems: [
      { label: "Todos los Servicios", href: "/servicios", icon: "LayoutGrid" },
      { label: "Envíos Express", href: "/servicios/envios-express", icon: "Zap" },
      { label: "Envíos LowCost", href: "/servicios/envios-lowcost", icon: "TrendingDown" },
      { label: "Envíos Flex (MeLi)", href: "/servicios/enviosflex", icon: "Clock" },
      { label: "Cuenta Corriente Flexible", href: "/servicios/empresas-cuenta-corriente", icon: "Building2" },
      { label: "E-commerce 24HS", href: "/servicios#ecommerce-24hs", icon: "Package" },
      { label: "E-commerce Same Day", href: "/servicios/deposito-fulfillment", icon: "Store" },
    ],
  },
  {
    label: "Nosotros",
    icon: "Info",
    dropdownItems: [
      { label: "Sobre Nosotros", href: "/nosotros/sobre-nosotros", icon: "Info" },
      { label: "Preguntas Frecuentes", href: "/nosotros/preguntas-frecuentes", icon: "HelpCircle" },
      { label: "Nuestras Redes", href: "/nosotros/nuestras-redes", icon: "Share2" },
    ],
  },
  { label: "Contacto", href: "/contacto", icon: "Mail" },
];

/** Icon components */
const ICONS = {
  Home: () => <svg viewBox="0 0 24 24" width="16" height="16" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true"><path d="M3 9l9-7 9 7v11a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2z"/><polyline points="9 22 9 12 15 12 15 22"/></svg>,
  Bike: () => <svg viewBox="0 0 24 24" width="16" height="16" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true"><path d="M15.914 4a1.5 1.5 0 00-2.474-1.561l-9 9A1.5 1.5 0 005.5 14h4.002a.5.5 0 01.471.666L8.086 20a1.5 1.5 0 002.475 1.56l9-9A1.5 1.5 0 0018.5 10h-3.997a.5.5 0 01-.472-.667z"/></svg>,
  Info: () => <svg viewBox="0 0 24 24" width="16" height="16" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true"><circle cx="12" cy="12" r="10"/><path d="M12 16v-4"/><path d="M12 8h.01"/></svg>,
  Mail: () => <svg viewBox="0 0 24 24" width="16" height="16" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true"><path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z"/><polyline points="22,6 12,13 2,6"/></svg>,
  Phone: () => <svg viewBox="0 0 24 24" width="16" height="16" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true"><path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z"/></svg>,
  Menu: () => <svg viewBox="0 0 24 24" width="24" height="24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true"><line x1="3" y1="12" x2="21" y2="12"/><line x1="3" y1="6" x2="21" y2="6"/><line x1="3" y1="18" x2="21" y2="18"/></svg>,
  X: () => <svg viewBox="0 0 24 24" width="24" height="24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true"><line x1="18" y1="6" x2="6" y2="18"/><line x1="6" y1="6" x2="18" y2="18"/></svg>,
  ChevronDown: () => <svg viewBox="0 0 24 24" width="14" height="14" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true"><polyline points="6 9 12 15 18 9"/></svg>,
  LayoutGrid: () => <svg viewBox="0 0 24 24" width="16" height="16" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true"><rect x="3" y="3" width="7" height="7" rx="1"/><rect x="14" y="3" width="7" height="7" rx="1"/><rect x="3" y="14" width="7" height="7" rx="1"/><rect x="14" y="14" width="7" height="7" rx="1"/></svg>,
  Zap: () => <svg viewBox="0 0 24 24" width="16" height="16" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true"><polygon points="13 2 3 14 12 14 11 22 21 10 12 10 13 2"/></svg>,
  TrendingDown: () => <svg viewBox="0 0 24 24" width="16" height="16" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true"><polyline points="23 18 13.5 8.5 8.5 13.5 1 6"/><polyline points="17 18 23 18 23 12"/></svg>,
  Clock: () => <svg viewBox="0 0 24 24" width="16" height="16" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true"><circle cx="12" cy="12" r="10"/><polyline points="12 6 12 12 16 14"/></svg>,
  Package: () => <svg viewBox="0 0 24 24" width="16" height="16" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true"><path d="M21 16V8a2 2 0 0 0-1-1.73l-7-4a2 2 0 0 0-2 0l-7 4A2 2 0 0 0 3 8v8a2 2 0 0 0 1 1.73l7 4a2 2 0 0 0 2 0l7-4A2 2 0 0 0 21 16z"/><polyline points="3.27 6.96 12 12.01 20.73 6.96"/><line x1="12" y1="22.08" x2="12" y2="12"/></svg>,
  Store: () => <svg viewBox="0 0 24 24" width="16" height="16" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true"><path d="M20.59 13.41l-7.17 7.17a2 2 0 0 1-2.83 0L2 12V2h10l8.59 8.59a2 2 0 0 1 0 2.82z"/><line x1="7" y1="7" x2="7.01" y2="7"/></svg>,
  Building2: () => <svg viewBox="0 0 24 24" width="16" height="16" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true"><rect x="2" y="3" width="20" height="14" rx="2"/><path d="M12 3v14"/><path d="M8 17h8"/><path d="M6 17v-3a2 2 0 0 1 2-2h8a2 2 0 0 1 2 2v3"/></svg>,
  Share2: () => <svg viewBox="0 0 24 24" width="16" height="16" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true"><circle cx="18" cy="5" r="3"/><circle cx="6" cy="12" r="3"/><circle cx="18" cy="19" r="3"/><line x1="8.59" y1="13.51" x2="15.42" y2="6.68"/><line x1="15.41" y1="6.51" x2="8.59" y2="13.48"/></svg>,
  HelpCircle: () => <svg viewBox="0 0 24 24" width="16" height="16" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true"><circle cx="12" cy="12" r="10"/><path d="M9.09 9a3 3 0 0 1 5.83 1c0 2-3 3-3 3"/><line x1="12" y1="17" x2="12.01" y2="17"/></svg>,
};

/** OptimizedHeader: Header con Framer Motion, dropdown animado, CTA contextual */
export function OptimizedHeader({
  pathname = "/",
  navItems = NAV_ITEMS,
  logoSrc = "/assets/logo-envios-simplified.webp",
  phone = "223 660-2699",
  ctaLabel = "Cotizá tu envío",
  ctaHref = "/cotizar",
  onNavigate,
  onCta,
  className = "",
}) {
  const [isOpen, setIsOpen] = useState(false);
  const [activeDropdown, setActiveDropdown] = useState(null);
  const [scrolled, setScrolled] = useState(false);
  const prefersReducedMotion = useReducedMotion();
  const prevPathRef = useRef(pathname);

  // Scroll handler
  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 20);
    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  // Close drawer on route change
  useEffect(() => {
    if (prevPathRef.current !== pathname) {
      prevPathRef.current = pathname;
      if (isOpen || activeDropdown) {
        const id = setTimeout(() => {
          setIsOpen(false);
          setActiveDropdown(null);
        }, 0);
        return () => clearTimeout(id);
      }
    }
  }, [pathname, isOpen, activeDropdown]);

  // Lock scroll when drawer open
  useEffect(() => {
    if (isOpen) {
      const scrollY = window.scrollY;
      document.body.style.position = "fixed";
      document.body.style.top = `-${scrollY}px`;
      document.body.style.width = "100%";
      document.body.style.overflow = "hidden";
      return () => {
        document.body.style.position = "";
        document.body.style.top = "";
        document.body.style.width = "";
        document.body.style.overflow = "";
        window.scrollTo(0, scrollY);
      };
    }
  }, [isOpen]);

  const handleDropdownToggle = (label) => {
    setActiveDropdown(prev => (prev === label ? null : label));
  };

  const isCtaContextual = pathname === "/" || pathname.startsWith("/servicios") || pathname.startsWith("/cotizar");

  return (
    <>
      <header
        id="optimized-header"
        style={{
          position: "fixed",
          top: 0,
          left: 0,
          right: 0,
          zIndex: 50,
          width: "100%",
          transition: "background-color var(--duration-slow) var(--ease-default), border-color var(--duration-slow) var(--ease-default), box-shadow var(--duration-slow) var(--ease-default), padding var(--duration-slow) var(--ease-default)",
          background: scrolled ? "rgba(9,80,246,.95)" : "var(--color-brand-blue-500)",
          borderBottom: scrolled ? "1px solid rgba(255,255,255,.1)" : "none",
          boxShadow: scrolled ? "var(--shadow-elevated)" : "none",
          backdropFilter: scrolled ? "blur(16px)" : "none",
          padding: scrolled ? "8px 0" : "16px 0",
        }}
        className={className}
      >
        <motion.div
          initial={prefersReducedMotion ? false : { opacity: 0, y: -8 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.45, ease: [0.25, 0.8, 0.25, 1] }}
          style={{ maxWidth: "var(--container-page)", margin: "0 auto", padding: "0 var(--page-gutter-lg)" }}
        >
          <div style={{ display: "flex", alignItems: "center", justifyContent: "space-between" }}>
            {/* Logo */}
            <a
              href="/"
              id="nav-logo-opt"
              style={{
                display: "flex",
                alignItems: "center",
                gap: "12px",
                textDecoration: "none",
                borderRadius: "var(--radius-xl)",
                padding: "4px 8px",
              }}
              onMouseEnter={(e) => e.currentTarget.style.background = "rgba(255,255,255,.1)"}
              onMouseLeave={(e) => e.currentTarget.style.background = "transparent"}
            >
              <motion.div
                whileHover={prefersReducedMotion ? {} : { rotate: 12, scale: 1.08 }}
                whileTap={prefersReducedMotion ? {} : { scale: 0.95 }}
                transition={{ type: "spring", stiffness: 500, damping: 18 }}
                style={{ width: 40, height: 40, flexShrink: 0 }}
              >
                <img src={logoSrc} alt="Logo Envíos Dos Ruedas" style={{ width: "100%", height: "100%", objectFit: "contain" }} />
              </motion.div>
              <span style={{
                fontFamily: "var(--font-display)",
                fontSize: "clamp(1.5rem, 3vw, 2rem)",
                fontWeight: 400,
                textTransform: "uppercase",
                letterSpacing: "var(--tracking-tight)",
                lineHeight: 1,
                display: "flex",
                flexDirection: "column",
                gap: 2,
              }}>
                <span style={{ color: "var(--color-white)" }}>Envíos</span>
                <span style={{ color: "var(--color-brand-yellow-500)" }}>DosRuedas</span>
              </span>
            </a>

            {/* Desktop Nav */}
            <nav style={{ display: "none" }}>
              <style>{`@media (min-width: 1024px) { #desktop-nav-opt { display: flex; align-items: center; gap: 8px; } }`}</style>
              <div id="desktop-nav-opt" style={{ display: "flex", alignItems: "center", gap: 8 }}>
                {navItems.map((item) => (
                  <div key={item.label} style={{ position: "relative" }}>
                    {item.href ? (
                      <a
                        href={item.href}
                        style={{
                          padding: "10px 16px",
                          borderRadius: "var(--radius-xl)",
                          fontFamily: "var(--font-subheading)",
                          fontSize: "var(--text-base)",
                          fontWeight: 400,
                          textTransform: "uppercase",
                          letterSpacing: "var(--tracking-wider)",
                          color: "var(--color-white)",
                          textDecoration: "none",
                          transition: "color var(--duration-base) var(--ease-default), background-color var(--duration-base) var(--ease-default)",
                        }}
                        onMouseEnter={(e) => { e.currentTarget.style.color = "var(--color-brand-yellow-500)"; e.currentTarget.style.background = "rgba(255,255,255,.1)"; }}
                        onMouseLeave={(e) => { e.currentTarget.style.color = "var(--color-white)"; e.currentTarget.style.background = "transparent"; }}
                      >
                        {item.label}
                      </a>
                    ) : (
                      <button
                        onClick={() => handleDropdownToggle(item.label)}
                        aria-haspopup="menu"
                        aria-expanded={activeDropdown === item.label}
                        style={{
                          padding: "10px 16px",
                          borderRadius: "var(--radius-xl)",
                          fontFamily: "var(--font-subheading)",
                          fontSize: "var(--text-base)",
                          fontWeight: 400,
                          textTransform: "uppercase",
                          letterSpacing: "var(--tracking-wider)",
                          color: "var(--color-white)",
                          background: "transparent",
                          border: "none",
                          cursor: "pointer",
                          display: "flex",
                          alignItems: "center",
                          gap: 6,
                          transition: "color var(--duration-base) var(--ease-default), background-color var(--duration-base) var(--ease-default)",
                        }}
                        onMouseEnter={(e) => { e.currentTarget.style.color = "var(--color-brand-yellow-500)"; e.currentTarget.style.background = "rgba(255,255,255,.1)"; }}
                        onMouseLeave={(e) => { e.currentTarget.style.color = "var(--color-white)"; e.currentTarget.style.background = "transparent"; }}
                      >
                        {item.label}
                        <ICONS.ChevronDown style={{ transition: "transform var(--duration-base) var(--ease-default)", transform: activeDropdown === item.label ? "rotate(180deg)" : "" }} />
                      </button>
                    )}

                    {/* Dropdown */}
                    <AnimatePresence mode="wait">
                      {item.dropdownItems && activeDropdown === item.label && (
                        <motion.div
                          initial={prefersReducedMotion ? { opacity: 1, y: 0, scale: 1 } : { opacity: 0, y: 8, scale: 0.97 }}
                          animate={{ opacity: 1, y: 0, scale: 1 }}
                          exit={prefersReducedMotion ? { opacity: 0, y: 0, scale: 1 } : { opacity: 0, y: 6, scale: 0.97, transition: { duration: 0.15, ease: "easeIn" } }}
                          transition={{
                            type: "spring",
                            stiffness: 320,
                            damping: 24,
                            staggerChildren: prefersReducedMotion ? 0 : 0.06,
                            delayChildren: 0.02,
                          }}
                          style={{
                            position: "absolute",
                            left: 0,
                            top: "100%",
                            marginTop: "8px",
                            width: 256,
                            background: "var(--color-brand-blue-500)",
                            borderRadius: "var(--radius-2xl)",
                            boxShadow: "var(--shadow-2xl)",
                            border: "1px solid rgba(255,255,255,.15)",
                            padding: "8px",
                            zIndex: 50,
                            overflow: "hidden",
                          }}
                        >
                          <div style={{ display: "flex", flexDirection: "column", gap: 4, padding: 8 }}>
                            {item.dropdownItems.map((subItem) => (
                              <motion.div
                                key={subItem.href}
                                initial={prefersReducedMotion ? { opacity: 1, x: 0 } : { opacity: 0, x: -8 }}
                                animate={{ opacity: 1, x: 0 }}
                                transition={{ type: "spring", stiffness: 400, damping: 28 }}
                              >
                                <a
                                  href={subItem.href}
                                  style={{
                                    display: "flex",
                                    alignItems: "center",
                                    gap: 12,
                                    padding: "10px 12px",
                                    borderRadius: "var(--radius-xl)",
                                    color: "var(--color-white)",
                                    textDecoration: "none",
                                    transition: "color var(--duration-base) var(--ease-default), background-color var(--duration-base) var(--ease-default)",
                                  }}
                                  onMouseEnter={(e) => { e.currentTarget.style.background = "rgba(255,255,255,.1)"; e.currentTarget.style.color = "var(--color-brand-yellow-500)"; }}
                                  onMouseLeave={(e) => { e.currentTarget.style.background = "transparent"; e.currentTarget.style.color = "var(--color-white)"; }}
                                >
                                  <div style={{
                                    padding: "6px 8px",
                                    borderRadius: "var(--radius-lg)",
                                    background: "rgba(255,255,255,.1)",
                                    color: "var(--color-brand-blue-500)",
                                    transition: "all var(--duration-base) var(--ease-default)",
                                  }}>
                                    {ICONS[subItem.icon] || ICONS.ChevronRight}
                                  </div>
                                  <span style={{
                                    fontFamily: "var(--font-subheading)",
                                    fontSize: "var(--text-base)",
                                    fontWeight: 400,
                                    textTransform: "uppercase",
                                    letterSpacing: "var(--tracking-wider)",
                                    lineHeight: 1,
                                  }}>
                                    {subItem.label}
                                  </span>
                                </a>
                              </motion.div>
                            ))}
                          </div>
                        </motion.div>
                      )}
                    </AnimatePresence>
                  </div>
                ))}
              </div>
            </nav>

            {/* Right side: Phone + CTA */}
            <div style={{ display: "flex", alignItems: "center", gap: 12 }}>
              <a
                href={`tel:+54${phone.replace(/\s/g, "")}`}
                style={{
                  display: "flex",
                  alignItems: "center",
                  gap: 8,
                  color: "var(--color-white)",
                  textDecoration: "none",
                  fontFamily: "var(--font-mono)",
                  fontSize: "var(--text-base)",
                  fontWeight: 700,
                  transition: "color var(--duration-base) var(--ease-default)",
                }}
                onMouseEnter={(e) => e.currentTarget.style.color = "var(--color-brand-yellow-500)"}
                onMouseLeave={(e) => e.currentTarget.style.color = "var(--color-white)"}
              >
                <ICONS.Phone style={{ color: "var(--color-brand-yellow-500)" }} />
                <span>{phone}</span>
              </a>

              <div style={{ position: "relative" }}>
                {!isCtaContextual && !prefersReducedMotion && (
                  <motion.span
                    style={{
                      position: "absolute",
                      inset: 0,
                      borderRadius: "var(--radius-full)",
                      background: "rgba(255,236,1,.25)",
                      pointerEvents: "none",
                    }}
                    animate={{ scale: [1, 1.18, 1], opacity: [0.6, 0, 0.6] }}
                    transition={{ duration: 2.4, repeat: Infinity, ease: "easeInOut", repeatDelay: 1.5 }}
                  />
                )}
                <Button
                  variant={isCtaContextual ? "secondary" : "primary"}
                  surface="light"
                  size="md"
                  href={ctaHref}
                  onClick={onCta}
                  style={{
                    borderColor: isCtaContextual ? "rgba(255,255,255,.4)" : undefined,
                    background: isCtaContextual ? "transparent" : undefined,
                    color: isCtaContextual ? "var(--color-white)" : undefined,
                  }}
                >
                  {ctaLabel}
                </Button>
              </div>

              {/* Mobile menu toggle */}
              <div style={{ display: "flex" }}>
                <style>{`@media (min-width: 1024px) { .mobile-only { display: none !important; } }`}</style>
                <a
                  href={`tel:+54${phone.replace(/\s/g, "")}`}
                  className="mobile-only"
                  style={{
                    padding: "10px",
                    borderRadius: "var(--radius-xl)",
                    background: "rgba(255,255,255,.1)",
                    color: "var(--color-white)",
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "center",
                    minWidth: 44,
                    minHeight: 44,
                    transition: "all var(--duration-base) var(--ease-default)",
                  }}
                  onMouseEnter={(e) => { e.currentTarget.style.background = "rgba(255,255,255,.15)"; e.currentTarget.style.color = "var(--color-brand-yellow-500)"; }}
                  onMouseLeave={(e) => { e.currentTarget.style.background = "rgba(255,255,255,.1)"; e.currentTarget.style.color = "var(--color-white)"; }}
                  aria-label="Llamar"
                >
                  <ICONS.Phone style={{ color: "var(--color-brand-yellow-500)" }} />
                </a>
                <button
                  className="mobile-only"
                  onClick={() => setIsOpen(!isOpen)}
                  id="mobile-menu-toggle-opt"
                  style={{
                    padding: "10px",
                    borderRadius: "var(--radius-xl)",
                    background: "rgba(255,255,255,.1)",
                    color: "var(--color-white)",
                    border: "none",
                    cursor: "pointer",
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "center",
                    minWidth: 44,
                    minHeight: 44,
                    transition: "all var(--duration-base) var(--ease-default)",
                  }}
                  aria-label={isOpen ? "Cerrar menú" : "Abrir menú"}
                  aria-expanded={isOpen}
                  aria-controls="mobile-navigation-dialog"
                  onMouseEnter={(e) => { e.currentTarget.style.background = "rgba(255,255,255,.15)"; e.currentTarget.style.color = "var(--color-brand-yellow-500)"; }}
                  onMouseLeave={(e) => { e.currentTarget.style.background = "rgba(255,255,255,.1)"; e.currentTarget.style.color = "var(--color-white)"; }}
                >
                  <AnimatePresence mode="wait" initial={false}>
                    {isOpen ? (
                      <motion.span
                        key="close"
                        initial={prefersReducedMotion ? false : { rotate: -90, opacity: 0 }}
                        animate={{ rotate: 0, opacity: 1 }}
                        exit={prefersReducedMotion ? {} : { rotate: 90, opacity: 0 }}
                        transition={{ duration: 0.18 }}
                      >
                        <ICONS.X />
                      </motion.span>
                    ) : (
                      <motion.span
                        key="menu"
                        initial={prefersReducedMotion ? false : { rotate: 90, opacity: 0 }}
                        animate={{ rotate: 0, opacity: 1 }}
                        exit={prefersReducedMotion ? {} : { rotate: -90, opacity: 0 }}
                        transition={{ duration: 0.18 }}
                      >
                        <ICONS.Menu />
                      </motion.span>
                    )}
                  </AnimatePresence>
                </button>
              </div>
            </div>
          </div>
        </motion.div>
      </header>

      <AnimatePresence>
        {isOpen && <MobileNav isOpen={isOpen} onClose={() => setIsOpen(false)} navItems={navItems} activeDropdown={activeDropdown} onDropdownToggle={handleDropdownToggle} />}
      </AnimatePresence>
    </>
  );
}