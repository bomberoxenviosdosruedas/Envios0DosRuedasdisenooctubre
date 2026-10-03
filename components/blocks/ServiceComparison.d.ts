import React from "react";

export interface ComparisonRow {
  feature: string;
  express: string;
  lowcost: string;
  flex: string;
  emprendedores?: string;
}

export interface ServiceComparisonProps {
  rows: ComparisonRow[];
  className?: string;
}

export declare function ServiceComparison(props: ServiceComparisonProps): React.ReactElement;

export default ServiceComparison;