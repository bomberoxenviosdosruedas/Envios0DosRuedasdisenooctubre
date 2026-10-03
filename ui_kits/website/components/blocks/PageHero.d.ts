import * as React from "react";
/** Hero de página (blue | yellow). aside = imagen / tarjeta de la columna derecha. */
export interface PageHeroProps { tone?: "blue" | "yellow"; id?: string; aside?: React.ReactNode; children?: React.ReactNode; style?: React.CSSProperties }
export declare function PageHero(props: PageHeroProps): JSX.Element;
