import React from "react";

export interface MissionVisionProps {
  mission?: { title: string; body: string };
  vision?: { title: string; body: string; badge?: string };
  commitment?: { title: string; body: string; ctaPrimary: { label: string; href: string }; ctaSecondary: { label: string; href: string } };
  className?: string;
}

export declare function MissionVision(props: MissionVisionProps): React.ReactElement;

export default MissionVision;