import * as React from "react";
/**
 * Botón / CTA único de Envíos DosRuedas (reemplaza cta-nested-pill, nav links, skip-link y botones sociales).
 */
export interface ButtonProps extends Omit<React.HTMLAttributes<HTMLElement>, "style"> {
  /** primary = amarillo sobre azul (igual en ambas superficies); secondary = contorno; ghost = sin borde (nav); social = azul-500 sólido */
  variant?: "primary" | "secondary" | "ghost" | "social";
  /** light = sobre blanco; dark = sobre brand-blue-500 */
  surface?: "light" | "dark";
  /** sm 44px · md 48px · lg 52px (alto mínimo táctil) */
  size?: "sm" | "md" | "lg";
  fullWidth?: boolean;
  /** target=_blank + rel=noopener noreferrer + aviso sr-only "(abre en una pestaña nueva)" + icono arrow-up-right */
  external?: boolean;
  /** aria-busy, spinner en lugar del icono, sin interacción */
  loading?: boolean;
  disabled?: boolean;
  /** Icono a la derecha; por defecto arrow-right (Lucide) */
  icon?: React.ReactNode;
  hideIcon?: boolean;
  /** Si se pasa, renderiza <a> */
  href?: string;
  type?: "button" | "submit" | "reset";
  style?: React.CSSProperties;
  children?: React.ReactNode;
}
export declare function Button(props: ButtonProps): JSX.Element;
