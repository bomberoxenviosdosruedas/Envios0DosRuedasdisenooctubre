import * as React from "react";
/** Píldoras informativas (no interactivas). */
export interface TagListProps { items: string[]; icon?: React.ReactNode; tone?: "light" | "dark"; style?: React.CSSProperties }
export declare function TagList(props: TagListProps): JSX.Element;
