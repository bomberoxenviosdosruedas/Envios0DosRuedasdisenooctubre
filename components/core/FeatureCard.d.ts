import * as React from "react";
/** Tarjeta de servicio / ventaja con ícono, título y texto (sobre BezelCard). */
export interface FeatureCardProps { icon?: React.ReactNode; title: string; body?: string; tag?: string; tone?: "light" | "dark" | "accent"; footer?: React.ReactNode; /** URL de imagen de cabecera (assets/cards/fondo_*.webp) */ bg?: string; onClick?: () => void; style?: React.CSSProperties }
export declare function FeatureCard(props: FeatureCardProps): JSX.Element;
