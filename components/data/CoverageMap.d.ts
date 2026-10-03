import React from "react";

export interface CoverageMapProps {
  center?: [number, number];
  zoom?: number;
  zones?: Array<{ id: string; name: string; polygon: [number, number][]; color: string }>;
  markers?: Array<{ position: [number, number]; popup: string; icon?: string }>;
  readonly?: boolean;
  className?: string;
  onZoneClick?: (zoneId: string) => void;
}

export declare function CoverageMap(props: CoverageMapProps): React.ReactElement;

export default CoverageMap;