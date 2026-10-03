import React from "react";
import { BezelCardProps } from "./BezelCard";

export interface BentoGridProps {
  children: React.ReactNode;
  className?: string;
  gap?: string;
  autoRows?: string;
}

export interface BentoGridItemProps extends React.HTMLAttributes<HTMLDivElement> {
  children: React.ReactNode;
  span: "7" | "5" | "12" | "hero" | "standard" | "full" | number;
  className?: string;
  doubleBezel?: boolean;
  variant?: "light" | "dark" | "accent";
  innerClassName?: string;
}

export declare function BentoGrid(props: BentoGridProps): React.ReactElement;
export declare function BentoGridItem(props: BentoGridItemProps): React.ReactElement;

export default { BentoGrid, BentoGridItem };