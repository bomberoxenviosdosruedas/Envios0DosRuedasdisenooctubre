import * as React from "react";
/** Tarjeta de doble bisel (double-bezel-outer/inner), el contenedor principal del sitio. */
export interface BezelCardProps extends React.HTMLAttributes<HTMLDivElement> {
  /** light = panel blanco; dark = panel azul-500; accent = marco amarillo con glow */
  tone?: "light" | "dark" | "accent";
  /** hover: borde azul-300, sombra antigravity-deep, -4px (default true) */
  hoverLift?: boolean;
  /** padding del panel interior en px (default 24) */
  padding?: number;
  innerStyle?: React.CSSProperties;
  children?: React.ReactNode;
}
export declare function BezelCard(props: BezelCardProps): JSX.Element;
