import * as React from "react";
/** h1/h2 Anton mayúsculas. h1 clamp(36→72px) leading .92; h2 clamp(30→48px). */
export interface DisplayProps { as?: "h1" | "h2" | "h3"; color?: string; /** texto blanco (sobre azul) */ invert?: boolean; size?: string; children?: React.ReactNode; style?: React.CSSProperties }
export declare function Display(props: DisplayProps): JSX.Element;
