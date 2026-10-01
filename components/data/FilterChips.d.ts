import * as React from "react";
/** Chips de filtro de selección única. */
export interface FilterChipsProps { options: string[]; value: string; onChange?: (v: string) => void; label?: string; surface?: "light" | "dark"; style?: React.CSSProperties }
export declare function FilterChips(props: FilterChipsProps): JSX.Element;
