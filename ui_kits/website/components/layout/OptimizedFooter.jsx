import React from "react";
import { motion, useReducedMotion, AnimatePresence } from "motion/react";
import { Button } from "../core/Button";
import { Badge } from "../core/Badge";

/** Icons */
const ICONS = {
  Phone: () => <svg viewBox="0 0 24 24" width="16" height="16" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true"><path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z"/></svg>,
  MapPin: () => <svg viewBox="0 0 24 24" width="16" height="16" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true"><path d="M20 10c0 4.993-5.539 10.193-7.399 11.799a1 1 0 0 1-1.202 0C9.539 20.193 4 14.993 4 10a8 8 0 0 1 16 0"/><path d="M12 10a3 3 0 1 1-6 0 3 3 0 0 1 6 0"/></svg>,
  Mail: () => <svg viewBox="0 0 24 24" width="16" height="16" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true"><path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z"/><polyline points="22,6 12,13 2,6"/></svg>,
  Clock: () => <svg viewBox="0 0 24 24" width="16" height="16" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true"><circle cx="12" cy="12" r="10"/><polyline points="12 6 12 12 16 14"/></svg>,
  ShieldCheck: () => <svg viewBox="0 0 24 24" width="16" height="16" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true"><path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z"/><path d="M9 12l2 2 4-4"/></svg>,
  ArrowUp: () => <svg viewBox="0 0 24 24" width="16" height="16" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true"><line x1="18" y1="15" x2="12" y2="9"/><line x1="6" y1="9" x2="12" y2="15"/></svg>,
  ArrowUpRight: () => <svg viewBox="0 0 24 24" width="14" height="14" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true"><path d="M7 7h10v10"/><path d="M7 17 17 7"/></svg>,
  Zap: () => <svg viewBox="0 0 24 24" width="16" height="16" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true"><polygon points="13 2 3 14 12 14 11 22 21 10 12 10 13 2"/></svg>,
  TrendingDown: () => <svg viewBox="0 0 24 24" width="16" height="16" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true"><polyline points="23 18 13.5 8.5 8.5 13.5 1 6"/><polyline points="17 18 23 18 23 12"/></svg>,
  Clock: () => <svg viewBox="0 0 24 24" width="16" height="16" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true"><circle cx="12" cy="12" r="10"/><polyline points="12 6 12 12 16 14"/></svg>,
  Building2: () => <svg viewBox="0 0 24 24" width="16" height="16" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true"><rect x="2" y="3" width="20" height="14" rx="2"/><path d="M12 3v14"/><path d="M8 17h8"/><path d="M6 17v-3a2 2 0 0 1 2-2h8a2 2 0 0 1 2 2v3"/></svg>,
  Package: () => <svg viewBox="0 0 24 24" width="16" height="16" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true"><path d="M21 16V8a2 2 0 0 0-1-1.73l-7-4a2 2 0 0 0-2 0l-7 4A2 2 0 0 0 3 8v8a2 2 0 0 0 1 1.73l7 4a2 2 0 0 0 2 0l7-4A2 2 0 0 0 21 16z"/><polyline points="3.27 6.96 12 12.01 20.73 6.96"/><line x1="12" y1="22.08" x2="12" y2="12"/></svg>,
  Store: () => <svg viewBox="0 0 24 24" width="16" height="16" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true"><path d="M20.59 13.41l-7.17 7.17a2 2 0 0 1-2.83 0L2 12V2h10l8.59 8.59a2 2 0 0 1 0 2.82z"/><line x1="7" y1="7" x2="7.01" y2="7"/></svg>,
  Layers: () => <svg viewBox="0 0 24 24" width="16" height="16" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true"><polygon points="12 2 2 7 12 12 22 7 12 2"/><path d="M2 17l10 5 10-5"/><path d="M2 12l10 5 10-5"/></svg>,
  Rocket: () => <svg viewBox="0 0 24 24" width="16" height="16" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true"><path d="M4.5 16.5c-1.5 1.26-2 5-2 5s3.74-.5 5-2c1.26-1.5 5-2 5-2"/><path d="M9 12.5 4 22"/><path d="M12 15.5 19 10"/></svg>,
  WhatsApp: () => <svg viewBox="0 0 24 24" width="16" height="16" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true"><path d="M12 2a10 10 0 0 0-8.6 15.1L2 22l5-1.3A10 10 0 1 0 12 2Zm0 18a8 8 0 0 1-4.1-1.1l-.3-.2-3 .8.8-2.9-.2-.3A8 8 0 1 1 12 20Z"/></svg>,
  Instagram: () => <svg viewBox="0 0 24 24" width="16" height="16" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true"><rect x="2" y="2" width="20" height="20" rx="5" ry="5"/><path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z"/><circle cx="17.5" cy="6.5" r="1"/></svg>,
  Facebook: () => <svg viewBox="0 0 24 24" width="16" height="16" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true"><path d="M18 2h-3a5 5 0 0 0-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 0 1 1-1h3z"/></svg>,
};

/** OptimizedFooter: Footer con scroll-reveal, spring hover, float loop */
export function OptimizedFooter({ year = 2026, className = "" }) {
  const prefersReducedMotion = useReducedMotion();

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: prefersReducedMotion ? "auto" : "smooth" });
  };

  // Animation variants
  const FOOTER_CONTAINER = {
    hidden: {},
    visible: { transition: { staggerChildren: 0.12, delayChildren: 0.1 } },
  };

  const FOOTER_COL = {
    hidden: { opacity: 0, y: 28 },
    visible: { opacity: 1, y: 0, transition: { type: "spring", stiffness: 280, damping: 24 } },
  };

  const BANNER_VARIANT = {
    hidden: { opacity: 0, y: 40 },
    visible: { opacity: 1, y: 0, transition: { type: "spring", stiffness: 260, damping: 22, delay: 0.08 } },
  };

  const SOCIAL_HOVER = { y: -4, scale: 1.12 };
  const SOCIAL_SPRING = { type: "spring", stiffness: 480, damping: 18 };

  return (
    <footer
      id="optimized-footer"
      style={{
        background: "var(--color-brand-blue-500)",
        color: "var(--color-white)",
        borderTop: "1px solid rgba(255,255,255,.1)",
        position: "relative",
        overflow: "hidden",
        fontFamily: "var(--font-sans)",
        ...parseClassName(className),
      }}
    >
      {/* Decorative top yellow accent bar */}
      <div style={{ height: "6px", background: "var(--color-brand-yellow-500)", boxShadow: "0 4px 12px rgba(255,236,1,.3)" }} />

      {/* Atmospheric backgrounds */}
      <div style={{ position: "absolute", inset: 0, pointerEvents: "none", background: "radial-gradient(circle at 50% 0%, rgba(255,236,1,.08), transparent 50%)" }} />
      <div style={{ position: "absolute", inset: 0, pointerEvents: "none", background: "radial-gradient(circle at 10% 90%, rgba(9,80,246,.5), transparent 40%)" }} />
      <div style={{ position: "absolute", inset: 0, pointerEvents: "none", opacity: 0.05, backgroundImage: "linear-gradient(to right, #fff 1px, transparent 1px), linear-gradient(to bottom, #fff 1px, transparent 1px)", backgroundSize: "32px 32px" }} />

      <div style={{ maxWidth: "var(--container-page)", margin: "0 auto", padding: "var(--section-y-lg) var(--page-gutter-lg)", position: "relative", zIndex: 10 }}>

        {/* TOP CTA BANNER — slides up on scroll reveal */}
        <motion.div
          variants={prefersReducedMotion ? {} : BANNER_VARIANT}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-60px" }}
          style={{
            borderRadius: "var(--radius-2xl)",
            background: "rgba(9,80,246,.9)",
            border: "1px solid rgba(255,255,255,.15)",
            padding: "var(--spacing-6) var(--spacing-8)",
            boxShadow: "var(--shadow-2xl)",
            display: "flex",
            flexDirection: "column",
            alignItems: "center",
            justifyContent: "space-between",
            gap: "var(--spacing-6)",
            marginBottom: "var(--spacing-14)",
          }}
        >
          <div style={{ textAlign: "center", display: "flex", flexDirection: "column", gap: "var(--spacing-2)" }}>
            <div style={{ display: "inline-flex", alignItems: "center", gap: 8, padding: "8px 14px", borderRadius: "var(--radius-button)", background: "rgba(255,236,1,.15)", border: "1px solid rgba(255,236,1,.3)", color: "var(--color-brand-yellow-500)", fontFamily: "var(--font-subheading)", fontSize: "var(--text-xs)", fontWeight: 700, textTransform: "uppercase", letterSpacing: "var(--tracking-wider)" }}>
              <span style={{ width: 8, height: 8, borderRadius: "var(--radius-full)", background: "var(--color-brand-yellow-500)", animation: prefersReducedMotion ? "none" : "ping 1.5s cubic-bezier(0, 0, 0.2, 1) infinite" }} />
              Operaciones Activas Mar del Plata 2026
            </div>
            <h3 style={{ margin: 0, fontFamily: "var(--font-display)", fontSize: "clamp(1.5rem, 3vw, 2.25rem)", fontWeight: 400, textTransform: "uppercase", letterSpacing: "var(--tracking-tight)", lineHeight: "var(--leading-display)", color: "var(--color-white)" }}>
              ¿Tenés envíos para hoy? <span style={{ color: "var(--color-brand-yellow-500)" }}>Los entregamos a tiempo.</span>
            </h3>
            <p style={{ margin: 0, fontFamily: "var(--font-sans)", fontSize: "var(--text-sm)", fontWeight: 300, lineHeight: "var(--leading-relaxed)", color: "rgba(230,238,254,.7)", maxWidth: "480px" }}>
              Cotizá online en segundos o coordiná directo con nuestro equipo logístico por WhatsApp.
            </p>
          </div>

          <div style={{ display: "flex", flexDirection: "column", alignItems: "center", gap: "var(--spacing-3)", width: "100%" }}>
            <style>{`@media (min-width: 768px) { .footer-cta-row { flex-direction: row; width: auto; justify-content: center; } }`}</style>
            <div className="footer-cta-row" style={{ display: "flex", flexDirection: "column", alignItems: "center", gap: "var(--spacing-3)", width: "100%" }}>
              <Button
                variant="primary"
                size="lg"
                href="/cotizar"
                icon={<ICONS.ArrowUpRight />}
              >
                Cotizá tu Envío
              </Button>
              <Button
                variant="secondary"
                surface="dark"
                size="lg"
                external
                href="https://wa.me/542236602699?text=Hola%20Env%C3%ADos%20DosRuedas!%20Quiero%20hacer%20una%20consulta%20de%20env%C3%ADos"
              >
                <ICONS.WhatsApp /> Chateá con Nosotros
              </Button>
            </div>
          </div>
        </motion.div>

        {/* MID SECTION: 3 columns with stagger reveal */}
        <motion.div
          variants={prefersReducedMotion ? {} : FOOTER_CONTAINER}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-60px" }}
          style={{
            display: "grid",
            gridTemplateColumns: "1fr",
            gap: "var(--spacing-10)",
          }}
        >
          <style>{`
            @media (min-width: 768px) { .footer-grid { grid-template-columns: repeat(12, 1fr); } }
            @media (min-width: 1024px) { .footer-grid { grid-template-columns: repeat(12, 1fr); } }
          `}</style>

          {/* COLUMN 1: Brand + Socials (4 cols) */}
          <motion.div variants={prefersReducedMotion ? {} : FOOTER_COL} style={{ gridColumn: "1 / -1" }}>
            <style>{`@media (min-width: 1024px) { .col-brand { grid-column: span 4; } }`}</style>
            <div className="col-brand" style={{ display: "flex", flexDirection: "column", gap: "var(--spacing-6)" }}>
              <a href="/" style={{ display: "flex", alignItems: "center", gap: 14, textDecoration: "none", width: "fit-content", borderRadius: "var(--radius-xl)", padding: "8px" }}>
                <div style={{ position: "relative", width: 44, height: 44, background: "rgba(255,255,255,.1)", border: "1px solid rgba(255,255,255,.15)", borderRadius: "var(--radius-xl)", display: "flex", alignItems: "center", justifyContent: "center", flexShrink: 0, transition: "transform var(--duration-slow) var(--ease-spring)" }}>
                  <img src="/assets/logo-envios-simplified.webp" alt="Logo Envíos DosRuedas" width={32} height={32} style={{ objectFit: "contain" }} />
                </div>
                <div style={{ display: "flex", flexDirection: "column", lineHeight: 1 }}>
                  <span style={{ fontFamily: "var(--font-display)", fontSize: "clamp(1.5rem, 3vw, 2rem)", fontWeight: 400, textTransform: "uppercase", letterSpacing: "var(--tracking-tight)", color: "var(--color-white)" }}>
                    Envíos <span style={{ color: "var(--color-brand-yellow-500)" }}>DosRuedas</span>
                  </span>
                  <span style={{ fontFamily: "var(--font-mono)", fontSize: "10px", letterSpacing: "var(--tracking-widest)", textTransform: "uppercase", color: "var(--color-brand-blue-100)", marginTop: 4 }}>
                    Tu solución confiable · Mar del Plata
                  </span>
                </div>
              </a>

              <p style={{ margin: 0, fontFamily: "var(--font-sans)", fontSize: "var(--text-sm)", fontWeight: 300, lineHeight: "var(--leading-relaxed)", color: "rgba(230,238,254,.7)", maxWidth: "320px" }}>
                Con más de 7 años de trayectoria en Mar del Plata, transformamos el despacho de tus productos en un motor de crecimiento para emprendedores, PyMEs y comercios locales con flota propia y compromiso humano.
              </p>

              <div style={{ display: "flex", flexDirection: "column", gap: "var(--spacing-3)", paddingTop: "var(--spacing-2)" }}>
                <span style={{ fontFamily: "var(--font-subheading)", fontSize: "var(--text-xs)", fontWeight: 700, textTransform: "uppercase", letterSpacing: "var(--tracking-widest)", color: "var(--color-brand-yellow-500)" }}>
                  Canales Oficiales
                </span>
                <div style={{ display: "flex", flexWrap: "wrap", gap: "var(--spacing-3)" }}>
                  {[
                    { icon: ICONS.Instagram, href: "/nosotros/nuestras-redes", label: "Instagram", bg: "rgba(255,255,255,.1)", hoverBg: "var(--color-brand-yellow-500)", hoverText: "var(--color-brand-blue-500)", border: "rgba(255,255,255,.15)", iconColor: "var(--color-white)" },
                    { icon: ICONS.Facebook, href: "/nosotros/nuestras-redes", label: "Facebook", bg: "rgba(255,255,255,.1)", hoverBg: "var(--color-brand-yellow-500)", hoverText: "var(--color-brand-blue-500)", border: "rgba(255,255,255,.15)", iconColor: "var(--color-white)" },
                    { icon: ICONS.WhatsApp, href: "https://wa.me/542236602699", external: true, label: "WhatsApp", bg: "var(--color-brand-yellow-500)", hoverBg: "var(--color-brand-yellow-400)", hoverText: "var(--color-brand-blue-500)", border: "var(--color-brand-yellow-500)", iconColor: "var(--color-brand-blue-500)" },
                  ].map((social, i) => (
                    <motion.a
                      key={social.label}
                      href={social.href}
                      target={social.external ? "_blank" : undefined}
                      rel={social.external ? "noopener noreferrer" : undefined}
                      whileHover={prefersReducedMotion ? {} : SOCIAL_HOVER}
                      transition={SOCIAL_SPRING}
                      style={{
                        width: 40,
                        height: 40,
                        borderRadius: "var(--radius-xl)",
                        background: social.bg,
                        color: social.hoverText,
                        display: "flex",
                        alignItems: "center",
                        justifyContent: "center",
                        transition: "all var(--duration-base) var(--ease-default)",
                        border: `1px solid ${social.border}`,
                        boxShadow: "var(--shadow-sm)",
                      }}
                      onMouseEnter={(e) => {
                        e.currentTarget.style.background = social.hoverBg;
                        e.currentTarget.style.color = social.hoverText;
                        e.currentTarget.style.borderColor = social.hoverBg;
                      }}
                      onMouseLeave={(e) => {
                        e.currentTarget.style.background = social.bg;
                        e.currentTarget.style.color = social.iconColor;
                        e.currentTarget.style.borderColor = social.border;
                      }}
                      title={social.label}
                      aria-label={social.label}
                    >
                      {social.icon}
                    </motion.a>
                  ))}
                </div>

                <div style={{ display: "flex", alignItems: "center", gap: 8, padding: "10px 14px", borderRadius: "var(--radius-xl)", background: "rgba(255,255,255,.1)", border: "1px solid rgba(255,255,255,.15)", fontFamily: "var(--font-mono)", fontSize: "11px", color: "var(--color-white)" }}>
                  <ICONS.ShieldCheck style={{ color: "var(--color-brand-yellow-500)", flexShrink: 0 }} />
                  <span>Centro de Depósito y Logística Local · Friuli 1972</span>
                </div>
              </div>
            </div>
          </motion.div>

          {/* COLUMN 2: Services (4 cols) */}
          <motion.div variants={prefersReducedMotion ? {} : FOOTER_COL} style={{ gridColumn: "1 / -1" }}>
            <style>{`@media (min-width: 1024px) { .col-services { grid-column: span 4; } }`}</style>
            <div className="col-services" style={{ display: "flex", flexDirection: "column", gap: "var(--spacing-5)" }}>
              <h4 style={{ margin: 0, fontFamily: "var(--font-subheading)", fontSize: "var(--text-lg)", fontWeight: 700, textTransform: "uppercase", letterSpacing: "var(--tracking-wider)", color: "var(--color-brand-yellow-500)", borderBottom: "1px solid rgba(255,255,255,.1)", paddingBottom: "var(--spacing-2)", display: "flex", alignItems: "center", gap: 8 }}>
                Servicios y Cotizadores
              </h4>
              <div style={{ display: "grid", gridTemplateColumns: "1fr", gap: "var(--spacing-4) var(--spacing-6)" }}>
                <style>{`@media (min-width: 640px) { .services-grid { grid-template-columns: 1fr 1fr; } }`}</style>
                <div className="services-grid" style={{ display: "flex", flexDirection: "column", gap: "var(--spacing-4)" }}>
                  {/* Cotizadores */}
                  <div>
                    <p style={{ margin: "0 0 var(--spacing-2)", fontFamily: "var(--font-subheading)", fontSize: "11px", fontWeight: 700, textTransform: "uppercase", letterSpacing: "var(--tracking-widest)", color: "rgba(230,238,254,.7)" }}>
                      Cotizador online
                    </p>
                    <ul style={{ listStyle: "none", padding: 0, margin: 0, display: "flex", flexDirection: "column", gap: "var(--spacing-2)", fontFamily: "var(--font-sans)", fontSize: "var(--text-sm)" }}>
                      <li>
                        <a href="/cotizar" style={{ display: "flex", alignItems: "center", justifyContent: "space-between", gap: 10, color: "rgba(230,238,254,.7)", textDecoration: "none", transition: "all var(--duration-base) var(--ease-default)" }}>
                          <div style={{ display: "flex", alignItems: "center", gap: 10 }}>
                            <span style={{ color: "var(--color-brand-yellow-500)" }}><ICONS.Zap /></span>
                            <span>Cotizá Express o LowCost</span>
                          </div>
                          <ICONS.ArrowUpRight style={{ opacity: 0, color: "var(--color-brand-yellow-500)", transition: "opacity var(--duration-base) var(--ease-default), transform var(--duration-base) var(--ease-default)" }} />
                        </a>
                      </li>
                    </ul>
                  </div>

                  {/* Servicios y Planes */}
                  <div>
                    <p style={{ margin: "0 0 var(--spacing-2)", fontFamily: "var(--font-subheading)", fontSize: "11px", fontWeight: 700, textTransform: "uppercase", letterSpacing: "var(--tracking-widest)", color: "rgba(230,238,254,.7)" }}>
                      Servicios y planes
                    </p>
                    <ul style={{ listStyle: "none", padding: 0, margin: 0, display: "flex", flexDirection: "column", gap: "var(--spacing-2)", fontFamily: "var(--font-sans)", fontSize: "var(--text-sm)" }}>
                      {[
                        { icon: ICONS.Zap, href: "/servicios/envios-express", label: "Envíos Express" },
                        { icon: ICONS.TrendingDown, href: "/servicios/envios-lowcost", label: "Envíos LowCost" },
                        { icon: ICONS.Clock, href: "/servicios/enviosflex", label: "Mercado Envíos Flex" },
                        { icon: ICONS.Building2, href: "/servicios/empresas-cuenta-corriente", label: "Cuenta Corriente Flexible" },
                        { icon: ICONS.Package, href: "/servicios#ecommerce-24hs", label: "E-commerce 24HS" },
                        { icon: ICONS.Store, href: "/servicios/deposito-fulfillment", label: "E-commerce Same Day" },
                      ].map((svc, i) => (
                        <li key={i}>
                          <a href={svc.href} style={{ display: "flex", alignItems: "center", gap: 10, color: "rgba(230,238,254,.7)", textDecoration: "none", transition: "all var(--duration-base) var(--ease-default)" }}>
                            <span style={{ color: "var(--color-brand-yellow-500)" }}>{svc.icon}</span>
                            <span>{svc.label}</span>
                          </a>
                        </li>
                      ))}
                      <li>
                        <a href="/servicios" style={{ display: "flex", alignItems: "center", gap: 10, color: "var(--color-brand-yellow-500)", fontWeight: 700, textDecoration: "none" }}>
                          <span><ICONS.Layers /></span>
                          <span>Ver todos los servicios</span>
                        </a>
                      </li>
                    </ul>
                  </div>
                </div>
              </div>
            </div>
          </motion.div>

          {/* COLUMN 3: Contact & Hub (4 cols) */}
          <motion.div variants={prefersReducedMotion ? {} : FOOTER_COL} style={{ gridColumn: "1 / -1" }}>
            <style>{`@media (min-width: 1024px) { .col-contact { grid-column: span 4; } }`}</style>
            <div className="col-contact" style={{ display: "flex", flexDirection: "column", gap: "var(--spacing-5)" }}>
              <h4 style={{ margin: 0, fontFamily: "var(--font-subheading)", fontSize: "var(--text-lg)", fontWeight: 700, textTransform: "uppercase", letterSpacing: "var(--tracking-wider)", color: "var(--color-brand-yellow-500)", borderBottom: "1px solid rgba(255,255,255,.1)", paddingBottom: "var(--spacing-2)" }}>
                Base de Operaciones MDQ
              </h4>

              <div style={{ display: "flex", flexDirection: "column", gap: "var(--spacing-3)", fontFamily: "var(--font-sans)", fontSize: "12px", color: "rgba(230,238,254,.7)" }}>
                {[
                  { icon: ICONS.MapPin, title: "Centro de Distribución", lines: ["Friuli 1972, Mar del Plata"] },
                  { icon: ICONS.Phone, title: "Línea Directa y WhatsApp", lines: ["+54 223 660-2699"], mono: true, color: "var(--color-brand-yellow-500)" },
                  { icon: ICONS.Mail, title: "Atención Comercial", lines: ["matiascejas@enviosdosruedas.com"], size: "11px" },
                  {
                    icon: ICONS.Clock,
                    title: "Horarios de Despacho (Base Central)",
                    lines: [
                      { label: "Lunes a Viernes:", value: "09:00 - 18:00 hs" },
                      { label: "Sábados:", value: "10:00 - 15:00 hs" },
                    ],
                    monoValue: true,
                  },
                ].map((item, i) => (
                  <div key={i} style={{ display: "flex", gap: 12, background: "rgba(9,80,246,.8)", padding: "12px", borderRadius: "var(--radius-xl)", border: "1px solid rgba(255,255,255,.15)" }}>
                    <div style={{ padding: 8, background: "rgba(255,255,255,.1)", borderRadius: "var(--radius-lg)", flexShrink: 0, color: "var(--color-brand-yellow-500)" }}>
                      {item.icon}
                    </div>
                    <div>
                      <p style={{ margin: "0 0 4px", fontFamily: "var(--font-subheading)", fontWeight: 700, textTransform: "uppercase", letterSpacing: "var(--tracking-wider)", color: "var(--color-white)", fontSize: "12px" }}>
                        {item.title}
                      </p>
                      <div style={{ display: "flex", flexDirection: "column", gap: 2 }}>
                        {Array.isArray(item.lines[0]) ? item.lines.map((l, j) => (
                          <div key={j} style={{ display: "flex", justifyContent: "space-between", gap: 16 }}>
                            <span style={{ fontSize: "11px" }}>{l.label}</span>
                            <span style={{ fontFamily: item.monoValue ? "var(--font-mono)" : "var(--font-sans)", fontWeight: item.monoValue ? 700 : 400, fontSize: item.monoValue ? "11px" : "12px", color: item.monoValue ? "var(--color-brand-yellow-500)" : "rgba(230,238,254,.7)" }}>
                              {l.value}
                            </span>
                          </div>
                        )) : item.lines.map((l, j) => (
                          <a key={j} href={l.startsWith("+") ? `tel:${l.replace(/\s/g, "")}` : l.includes("@") ? `mailto:${l}` : "#"} style={{ fontFamily: item.mono ? "var(--font-mono)" : "var(--font-sans)", fontWeight: item.mono ? 700 : 400, fontSize: item.size || "12px", color: item.color || "rgba(230,238,254,.7)", textDecoration: "none", transition: "color var(--duration-base) var(--ease-default)" }}>
                            {l}
                          </a>
                        ))}
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </motion.div>
        </motion.div>

        {/* Separator + Scroll to Top */}
        <div style={{ borderTop: "1px solid rgba(255,255,255,.1)", margin: "var(--spacing-10) 0", position: "relative" }}>
          <motion.button
            onClick={scrollToTop}
            style={{
              position: "absolute",
              top: -20,
              right: "var(--spacing-6)",
              width: 44,
              height: 44,
              borderRadius: "var(--radius-full)",
              background: "var(--color-brand-yellow-500)",
              color: "var(--color-brand-blue-500)",
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
              border: "2px solid var(--color-brand-yellow-500)",
              boxShadow: "var(--shadow-accent-md)",
              cursor: "pointer",
              transition: "all var(--duration-base) var(--ease-default)",
              zIndex: 20,
            }}
            animate={prefersReducedMotion ? {} : { y: [0, -5, 0] }}
            transition={prefersReducedMotion ? {} : { duration: 2, ease: "easeInOut", repeat: Infinity }}
            whileTap={{ scale: 0.92 }}
            whileHover={prefersReducedMotion ? {} : { scale: 1.1, y: -7 }}
            title="Volver al inicio"
            aria-label="Volver arriba"
          >
            <ICONS.ArrowUp style={{ fontWeight: 700 }} />
          </motion.button>
        </div>

        {/* BOTTOM SECTION: Legal & Copyright */}
        <div style={{ display: "flex", flexDirection: "column", alignItems: "center", gap: "var(--spacing-6)", fontFamily: "var(--font-sans)", fontSize: "var(--text-xs)", color: "rgba(230,238,254,.7)" }}>
          <style>{`@media (min-width: 768px) { .footer-bottom { flex-direction: row; justify-content: space-between; } }`}</style>
          <div className="footer-bottom" style={{ display: "flex", flexWrap: "wrap", justifyContent: "center", alignItems: "center", gap: "var(--spacing-4) var(--spacing-6)" }}>
            <p style={{ margin: 0, fontWeight: 500, color: "var(--color-white)" }}>© {year} Envíos DosRuedas · Mar del Plata, Argentina.</p>
            <nav style={{ display: "flex", flexWrap: "wrap", gap: "var(--spacing-4) var(--spacing-6)" }}>
              {["Servicios", "Cobertura", "Guía MercadoLibre Flex", "Sobre Nosotros", "Preguntas Frecuentes", "Nuestras Redes"].map((link, i) => (
                <a key={i} href={`/${link.toLowerCase().replace(/\s+/g, "-").replace("guía-mercadolibre-flex", "guias/envios-flex-mar-del-plata").replace("sobre-nosotros", "nosotros/sobre-nosotros").replace("preguntas-frecuentes", "nosotros/preguntas-frecuentes").replace("nuestras-redes", "nosotros/nuestras-redes")}`} style={{ color: "rgba(230,238,254,.7)", textDecoration: "none", transition: "color var(--duration-base) var(--ease-default)" }} onMouseEnter={(e) => e.currentTarget.style.color = "var(--color-brand-yellow-500)"} onMouseLeave={(e) => e.currentTarget.style.color = "rgba(230,238,254,.7)"}>
                  {link}
                </a>
              ))}
            </nav>
          </div>
          <div style={{ display: "flex", flexWrap: "wrap", justifyContent: "center", gap: "var(--spacing-6)" }}>
            <a href="/terminos-y-condiciones" style={{ color: "rgba(230,238,254,.7)", textDecoration: "none", transition: "color var(--duration-base) var(--ease-default)" }} onMouseEnter={(e) => e.currentTarget.style.color = "var(--color-brand-yellow-500)"} onMouseLeave={(e) => e.currentTarget.style.color = "rgba(230,238,254,.7)"}>Términos y Condiciones</a>
            <a href="/politica-de-privacidad" style={{ color: "rgba(230,238,254,.7)", textDecoration: "none", transition: "color var(--duration-base) var(--ease-default)" }} onMouseEnter={(e) => e.currentTarget.style.color = "var(--color-brand-yellow-500)"} onMouseLeave={(e) => e.currentTarget.style.color = "rgba(230,238,254,.7)"}>Política de Privacidad</a>
          </div>
        </div>

      </div>
    </footer>
  );
}

function parseClassName(className) {
  return {};
}