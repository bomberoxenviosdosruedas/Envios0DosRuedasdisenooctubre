import * as React from "react";
/** Cinta infinita horizontal (logos, testimonios). */
export interface MarqueeProps { direction?: "left" | "right"; /** segundos por vuelta (36 izquierda, 42 derecha en el sitio) */ duration?: number; gap?: number; pauseOnHover?: boolean; children?: React.ReactNode; style?: React.CSSProperties }
export declare function Marquee(props: MarqueeProps): JSX.Element;
