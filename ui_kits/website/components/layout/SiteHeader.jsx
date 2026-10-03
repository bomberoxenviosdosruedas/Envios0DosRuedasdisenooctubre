import React from "react";
import { Button } from "../core/Button.jsx";
const P = (d, s = 16, extra) => <svg viewBox="0 0 24 24" width={s} height={s} fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true" style={extra}>{d.map((x, i) => <path key={i} d={x} />)}</svg>;
const PHONE = ["M13.832 16.568a1 1 0 0 0 1.213-.303l.355-.465A2 2 0 0 1 17 15h3a2 2 0 0 1 2 2v3a2 2 0 0 1-2 2A18 18 0 0 1 2 4a2 2 0 0 1 2-2h3a2 2 0 0 1 2 2v3a2 2 0 0 1-.8 1.6l-.468.351a1 1 0 0 0-.292 1.233 14 14 0 0 0 6.392 6.384"];
const MENU = ["M4 5h16", "M4 12h16", "M4 19h16"], CLOSE = ["M18 6 6 18", "m6 6 12 12"], CHEV = ["m6 9 6 6 6-6"];
export const DEFAULT_NAV = [{ label: "Inicio", href: "#" }, { label: "Servicios", items: ["Todos los Servicios", "Envíos Express", "Envíos LowCost", "Envíos Flex (MeLi)", "Cuenta Corriente Flexible", "E-commerce 24HS", "E-commerce Same Day"] }, { label: "Nosotros", items: ["Sobre Nosotros", "Preguntas Frecuentes", "Nuestras Redes"] }, { label: "Contacto", href: "#" }];
/** Header fijo azul-500: logo + wordmark Anton bicolor, nav Bebas, teléfono mono, CTA amarillo y menú móvil off-canvas. */
export function SiteHeader({ nav = DEFAULT_NAV, logoSrc = "assets/logo-envios-simplified.webp", phone = "223 660-2699", ctaLabel = "Cotizá tu envío", ctaHref = "#", compact = false, sticky = true, onNavigate, onCta, style }) {
  const [open, setOpen] = React.useState(null);
  const [drawer, setDrawer] = React.useState(false);
  const [grp, setGrp] = React.useState(-1);
  const go = (item) => { setDrawer(false); setOpen(null); onNavigate && onNavigate(item); };
  React.useEffect(() => { if (!drawer) return; const k = (e) => e.key === "Escape" && setDrawer(false); document.addEventListener("keydown", k); return () => document.removeEventListener("keydown", k); }, [drawer]);
  const wordmark = (size) => <span style={{ fontFamily: "var(--font-display)", fontSize: size, letterSpacing: "var(--tracking-tight)", lineHeight: 1, textTransform: "uppercase", display: "flex", gap: 4, userSelect: "none" }}><span style={{ color: "var(--color-white)" }}>Envíos</span><span style={{ color: "var(--color-brand-yellow-500)" }}>DosRuedas</span></span>;
  return <header style={{ position: sticky ? "sticky" : "relative", top: 0, zIndex: 50, width: "100%", background: compact ? "rgba(9,80,246,.95)" : "var(--color-brand-blue-500)", backdropFilter: compact ? "blur(12px)" : undefined, borderBottom: "1px solid " + (compact ? "rgba(255,255,255,.1)" : "transparent"), boxShadow: compact ? "var(--shadow-elevated)" : "none", padding: compact ? "10px 0" : "16px 0", transition: "background-color var(--duration-slow), box-shadow var(--duration-slow), padding var(--duration-slow)", ...style }}>
    <div style={{ maxWidth: "var(--container-page)", margin: "0 auto", padding: "0 var(--page-gutter-lg)", display: "flex", alignItems: "center", justifyContent: "space-between", gap: 16 }}>
      <a href="#" onClick={(e) => { e.preventDefault(); go(nav[0]); }} aria-label="Envíos DosRuedas, inicio" style={{ display: "flex", alignItems: "center", gap: 10, borderRadius: "var(--radius-control)" }}>
        <img src={logoSrc} alt="" width="40" height="40" style={{ width: 40, height: 40, objectFit: "contain" }} />{wordmark("var(--text-3xl)")}
      </a>
      <nav aria-label="Principal" style={{ display: "flex", alignItems: "center", gap: 4 }} className="eds-desktop-nav">
        {nav.map((n) => <div key={n.label} style={{ position: "relative" }} onMouseEnter={() => n.items && setOpen(n.label)} onMouseLeave={() => setOpen(null)}>
          <Button variant="ghost" surface="dark" size="sm" href={n.items ? undefined : n.href} hideIcon={!n.items} icon={n.items ? <span style={{ transform: open === n.label ? "rotate(180deg)" : "none", transition: "transform var(--duration-base)", display: "inline-flex" }}>{P(CHEV)}</span> : undefined} aria-haspopup={n.items ? "menu" : undefined} aria-expanded={n.items ? open === n.label : undefined} onClick={(e) => { if (n.items) setOpen(open === n.label ? null : n.label); else { e && e.preventDefault && e.preventDefault(); go(n); } }}>{n.label}</Button>
          {n.items && open === n.label && <div role="menu" style={{ position: "absolute", left: 0, top: "100%", marginTop: 8, width: 272, background: "var(--color-brand-blue-500)", borderRadius: "var(--radius-2xl)", boxShadow: "var(--shadow-2xl)", border: "1px solid rgba(255,255,255,.15)", padding: 10, display: "flex", flexDirection: "column", gap: 4 }}>
            {n.items.map((it) => <a key={it} role="menuitem" href="#" onClick={(e) => { e.preventDefault(); go({ label: it }); }} style={{ display: "flex", alignItems: "center", gap: 12, padding: "10px 12px", minHeight: 44, borderRadius: "var(--radius-control)", color: "var(--color-white)", fontFamily: "var(--font-subheading)", fontSize: "var(--text-base)", textTransform: "uppercase", letterSpacing: "var(--tracking-wider)", lineHeight: 1 }} onMouseEnter={(e) => { e.currentTarget.style.background = "rgba(255,255,255,.1)"; e.currentTarget.style.color = "var(--color-brand-yellow-500)"; }} onMouseLeave={(e) => { e.currentTarget.style.background = "transparent"; e.currentTarget.style.color = "var(--color-white)"; }}>{it}</a>)}
          </div>}
        </div>)}
      </nav>
      <div style={{ display: "flex", alignItems: "center", gap: 20 }} className="eds-desktop-nav">
        <a href={"tel:+54" + phone.replace(/\D/g, "")} style={{ display: "inline-flex", alignItems: "center", gap: 8, minHeight: 44, color: "var(--color-white)", fontFamily: "var(--font-mono)", fontWeight: 700, fontSize: "var(--text-base)" }}>{P(PHONE, 16, { color: "var(--color-brand-yellow-500)" })}<span>{phone}</span></a>
        <Button size="sm" href={ctaHref} onClick={onCta}>{ctaLabel}</Button>
      </div>
      <div className="eds-mobile-toggle" style={{ display: "none", alignItems: "center", gap: 12 }}>
        <a href={"tel:+54" + phone.replace(/\D/g, "")} aria-label="Llamar" style={{ width: 44, height: 44, borderRadius: "var(--radius-control)", background: "rgba(255,255,255,.1)", color: "var(--color-brand-yellow-500)", display: "inline-flex", alignItems: "center", justifyContent: "center" }}>{P(PHONE, 20)}</a>
        <button type="button" aria-label="Abrir menú" aria-expanded={drawer} aria-controls="eds-mobile-dialog" onClick={() => setDrawer(true)} style={{ width: 44, height: 44, alignItems: "center", justifyContent: "center", display: "inline-flex", borderRadius: "var(--radius-control)", background: "rgba(255,255,255,.1)", color: "var(--color-white)", border: 0, cursor: "pointer" }}>{P(MENU, 24)}</button>
      </div>
    </div>
    {drawer && <>
      <div onClick={() => setDrawer(false)} style={{ position: "fixed", inset: 0, background: "rgba(9,80,246,.7)", backdropFilter: "blur(12px)", zIndex: 99 }}></div>
      <div id="eds-mobile-dialog" role="dialog" aria-modal="true" aria-label="Menú principal" style={{ position: "fixed", top: 0, right: 0, bottom: 0, width: "100%", maxWidth: 320, zIndex: 100, background: "var(--color-brand-blue-500)", borderLeft: "1px solid rgba(255,255,255,.1)", boxShadow: "var(--shadow-2xl)", display: "flex", flexDirection: "column" }}>
        <div style={{ display: "flex", alignItems: "center", justifyContent: "space-between", padding: "16px 20px", borderBottom: "1px solid rgba(255,255,255,.1)", height: 64, boxSizing: "border-box" }}>{wordmark(20)}<button type="button" aria-label="Cerrar menú" onClick={() => setDrawer(false)} style={{ width: 44, height: 44, display: "inline-flex", alignItems: "center", justifyContent: "center", borderRadius: "var(--radius-control)", background: "rgba(255,255,255,.1)", color: "var(--color-white)", border: 0, cursor: "pointer" }}>{P(CLOSE, 20)}</button></div>
        <nav style={{ flex: 1, overflowY: "auto", padding: "24px 20px", display: "flex", flexDirection: "column", gap: 8 }}>
          {nav.map((n, i) => <div key={n.label} style={{ borderBottom: "1px solid rgba(255,255,255,.1)", paddingBottom: 10 }}>
            <button type="button" aria-expanded={n.items ? grp === i : undefined} onClick={() => n.items ? setGrp(grp === i ? -1 : i) : go(n)} style={{ all: "unset", boxSizing: "border-box", width: "100%", minHeight: 48, padding: "10px 12px", display: "flex", alignItems: "center", justifyContent: "space-between", cursor: "pointer", color: "var(--color-white)", font: "400 22px/1 var(--font-subheading)", letterSpacing: ".05em", textTransform: "uppercase", borderRadius: "var(--radius-control)" }}>{n.label}{n.items && <span style={{ color: "var(--color-brand-yellow-500)", transform: grp === i ? "rotate(180deg)" : "none", transition: "transform var(--duration-base)", display: "inline-flex" }}>{P(CHEV, 20)}</span>}</button>
            {n.items && grp === i && <div style={{ padding: "6px 0 0 16px", display: "flex", flexDirection: "column", gap: 4 }}>{n.items.map((it) => <a key={it} href="#" onClick={(e) => { e.preventDefault(); go({ label: it }); }} style={{ minHeight: 44, display: "flex", alignItems: "center", padding: "8px 12px", color: "rgba(255,255,255,.85)", font: "400 18px/1 var(--font-subheading)", letterSpacing: ".05em", textTransform: "uppercase" }}>{it}</a>)}</div>}
          </div>)}
        </nav>
        <div style={{ padding: 20, borderTop: "1px solid rgba(255,255,255,.1)", display: "flex", flexDirection: "column", gap: 12 }}>
          <a href={"tel:+54" + phone.replace(/\D/g, "")} style={{ minHeight: 44, display: "flex", alignItems: "center", justifyContent: "center", borderRadius: "var(--radius-control)", background: "rgba(255,255,255,.1)", border: "1px solid rgba(255,255,255,.05)", color: "var(--color-white)", fontFamily: "var(--font-mono)", fontWeight: 700, fontSize: 14 }}>{phone}</a>
          <Button fullWidth onClick={() => { setDrawer(false); onCta && onCta(); }}>{ctaLabel}</Button>
        </div>
      </div>
    </>}
    <style>{"@media (max-width:1023px){.eds-desktop-nav{display:none!important}.eds-mobile-toggle{display:flex!important}}"}</style>
  </header>;
}
