import * as React from "react";
/** Teléfono copiable al portapapeles con aviso accesible (aria-live). */
export interface CopyFieldProps { value: string; surface?: "light" | "dark"; okText?: string; failText?: string; style?: React.CSSProperties }
export declare function CopyField(props: CopyFieldProps): JSX.Element;
