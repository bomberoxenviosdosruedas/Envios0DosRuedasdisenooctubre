import * as React from "react";
/** Cifras clave de un hero: [valor, rótulo][]. Solo datos que existan en el sitio. */
export interface StatListProps { items: [string, string][]; invert?: boolean; style?: React.CSSProperties }
export declare function StatList(props: StatListProps): JSX.Element;
