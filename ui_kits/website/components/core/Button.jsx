import React from "react";

const ArrowRight = () => <svg viewBox="0 0 24 24" width="16" height="16" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true"><path d="M5 12h14"/><path d="m12 5 7 7-7 7"/></svg>;
const ArrowUpRight = () => <svg viewBox="0 0 24 24" width="16" height="16" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true"><path d="M7 7h10v10"/><path d="M7 17 17 7"/></svg>;
const Spinner = () => <svg viewBox="0 0 24 24" width="16" height="16" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" aria-hidden="true" style={{animation:"spin .8s linear infinite"}}><path d="M21 12a9 9 0 1 1-6.219-8.56"/></svg>;

const SIZES = {
  sm: { minHeight: "var(--control-sm)", padding: "8px 20px", fontSize: "var(--text-sm)", icon: 28 },
  md: { minHeight: "var(--control-md)", padding: "10px 24px", fontSize: "var(--text-base)", icon: 32 },
  lg: { minHeight: "var(--control-lg)", padding: "12px 32px", fontSize: "var(--text-base)", icon: 32 },
};

// variant × surface → { rest, hover, iconHover }
const SKINS = {
  primary: {
    light: { rest: { background: "var(--color-brand-yellow-500)", color: "var(--color-brand-blue-500)", borderColor: "var(--color-brand-yellow-500)", boxShadow: "var(--shadow-accent-sm)" }, hover: { background: "var(--color-brand-yellow-400)", boxShadow: "var(--shadow-cta-glow)" }, iconHover: { background: "var(--color-brand-blue-500)", color: "var(--color-brand-yellow-500)" } },
  },
  secondary: {
    light: { rest: { background: "var(--color-white)", color: "var(--color-brand-blue-500)", borderColor: "var(--color-brand-blue-500)", borderWidth: 2 }, hover: { background: "var(--color-brand-blue-50)" }, iconHover: { background: "var(--color-brand-blue-500)", color: "var(--color-white)" } },
    dark: { rest: { background: "transparent", color: "var(--color-white)", borderColor: "rgba(255,255,255,.4)", borderWidth: 2 }, hover: { background: "rgba(255,255,255,.1)", borderColor: "var(--color-white)" }, iconHover: { background: "var(--color-white)", color: "var(--color-brand-blue-500)" } },
  },
  ghost: {
    light: { rest: { background: "transparent", color: "var(--color-brand-blue-500)", borderColor: "transparent" }, hover: { background: "var(--color-brand-blue-50)" }, iconHover: { background: "var(--color-brand-blue-500)", color: "var(--color-white)" } },
    dark: { rest: { background: "transparent", color: "var(--color-white)", borderColor: "transparent" }, hover: { background: "rgba(255,255,255,.1)", color: "var(--color-brand-yellow-500)" }, iconHover: { background: "var(--color-brand-yellow-500)", color: "var(--color-brand-blue-500)" } },
  },
  social: {
    light: { rest: { background: "var(--color-brand-blue-500)", color: "var(--color-white)", borderColor: "var(--color-brand-blue-500)", boxShadow: "var(--shadow-md)" }, hover: { boxShadow: "var(--shadow-elevated)", transform: "translateY(-1px)" }, iconHover: { background: "var(--color-white)", color: "var(--color-brand-blue-500)" } },
    dark: { rest: { background: "var(--color-white)", color: "var(--color-brand-blue-500)", borderColor: "var(--color-white)", boxShadow: "var(--shadow-md)" }, hover: { background: "var(--color-brand-blue-50)" }, iconHover: { background: "var(--color-brand-blue-500)", color: "var(--color-white)" } },
  },
};
SKINS.primary.dark = SKINS.primary.light; // el primario es amarillo en ambas superficies (verificado: header azul y hero blanco)

/** Botón / CTA único de Envíos DosRuedas. Renderiza <a> si recibe href, si no <button>. */
export function Button({ variant = "primary", surface = "light", size = "md", fullWidth = false, external = false, loading = false, disabled = false, icon, hideIcon = false, href, children, style, onClick, type = "button", ...rest }) {
  const [hover, setHover] = React.useState(false);
  const [active, setActive] = React.useState(false);
  const [focus, setFocus] = React.useState(false);
  const skin = (SKINS[variant] || SKINS.primary)[surface] || SKINS[variant].light;
  const sz = SIZES[size] || SIZES.md;
  const inert = disabled || loading;
  const ring = surface === "dark" ? "var(--focus-ring-on-invert)" : "var(--focus-ring)";
  const offset = surface === "dark" ? "var(--color-brand-blue-500)" : "var(--color-white)";
  const base = {
    display: fullWidth ? "flex" : "inline-flex", width: fullWidth ? "100%" : undefined, alignItems: "center", justifyContent: "space-between", gap: 12, boxSizing: "border-box",
    borderRadius: "var(--radius-button)", borderStyle: "solid", borderWidth: 1,
    fontFamily: "var(--font-subheading)", fontWeight: 400, textTransform: "uppercase", letterSpacing: "var(--tracking-wider)", lineHeight: 1, textDecoration: "none",
    cursor: inert ? (disabled ? "not-allowed" : "progress") : "pointer", userSelect: "none", outline: "none", position: "relative",
    transition: "transform var(--duration-cta) var(--ease-spring), background-color var(--duration-cta) var(--ease-spring), border-color var(--duration-cta) var(--ease-spring), box-shadow var(--duration-cta) var(--ease-spring), color var(--duration-cta) var(--ease-spring)",
    ...sz, icon: undefined,
    ...skin.rest,
    ...(hover && !inert ? skin.hover : null),
    ...(active && !inert ? { transform: "scale(.98) translateY(1px)" } : null),
    ...(focus ? { boxShadow: `0 0 0 2px ${offset}, 0 0 0 4px ${ring}` } : null),
    ...(disabled ? { opacity: .5 } : null),
    ...(loading ? { opacity: .85 } : null),
    ...style,
  };
  delete base.icon;
  const iconStyle = {
    width: sz.icon, height: sz.icon, borderRadius: "var(--radius-full)", display: "inline-flex", alignItems: "center", justifyContent: "center", flexShrink: 0, marginLeft: 4,
    background: "transparent", color: "inherit", transition: "transform var(--duration-cta) var(--ease-spring), background-color var(--duration-cta) var(--ease-spring), color var(--duration-cta) var(--ease-spring)",
    ...(hover && !inert ? { ...skin.iconHover, transform: "translateX(4px)" } : null),
  };
  const glyph = loading ? <Spinner /> : icon !== undefined ? icon : external ? <ArrowUpRight /> : <ArrowRight />;
  const content = <>
    <span style={{ overflow: "hidden", textOverflow: "ellipsis", whiteSpace: "nowrap", paddingTop: 2 }}>{children}{external && <span className="sr-only"> (abre en una pestaña nueva)</span>}</span>
    {!hideIcon && <span aria-hidden="true" style={iconStyle}>{glyph}</span>}
  </>;
  const handlers = {
    onMouseEnter: () => setHover(true), onMouseLeave: () => { setHover(false); setActive(false); },
    onMouseDown: () => setActive(true), onMouseUp: () => setActive(false),
    onFocus: (e) => { if (e.target.matches(":focus-visible")) setFocus(true); }, onBlur: () => setFocus(false),
    onClick: inert ? (e) => e.preventDefault() : onClick,
  };
  if (href) {
    const ext = external ? { target: "_blank", rel: "noopener noreferrer" } : {};
    return <a href={inert ? undefined : href} role={inert ? "link" : undefined} aria-disabled={disabled || undefined} aria-busy={loading || undefined} style={base} {...ext} {...handlers} {...rest}>{content}</a>;
  }
  return <button type={type} disabled={disabled} aria-busy={loading || undefined} style={base} {...handlers} {...rest}>{content}</button>;
}
