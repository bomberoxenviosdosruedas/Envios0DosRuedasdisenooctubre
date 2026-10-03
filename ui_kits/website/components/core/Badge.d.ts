import * as React from "react";
/** Eyebrow / etiqueta en píldora. */
export interface BadgeProps extends React.HTMLAttributes<HTMLSpanElement> {
  /** accent = amarillo (hero), invert = azul, muted = azul-50, outline = contorno amarillo sobre azul */
  tone?: "accent" | "invert" | "muted" | "outline";
  size?: "sm" | "md";
  /** rotate(-1deg) como en los heroes (default true) */
  rotate?: boolean;
  /** Geist Mono bold tabular (datos: "< 2 MIN") */
  mono?: boolean;
  icon?: React.ReactNode;
  children?: React.ReactNode;
}
export declare function Badge(props: BadgeProps): JSX.Element;
