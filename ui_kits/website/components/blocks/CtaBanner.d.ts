import * as React from "react";
/** Banda de cierre de página con titular centrado y botones (Button primary / secondary). */
export interface CtaBannerProps { tone?: "blue" | "yellow"; title: React.ReactNode; lead?: string; actions?: React.ReactNode; style?: React.CSSProperties }
export declare function CtaBanner(props: CtaBannerProps): JSX.Element;
