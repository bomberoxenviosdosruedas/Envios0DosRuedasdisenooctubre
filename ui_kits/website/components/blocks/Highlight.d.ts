import * as React from "react";
/** Palabra clave del titular en píldora rotada -1°: yellow (sobre azul) o blue (sobre amarillo). */
export interface HighlightProps { tone?: "yellow" | "blue"; children?: React.ReactNode }
export declare function Highlight(props: HighlightProps): JSX.Element;
