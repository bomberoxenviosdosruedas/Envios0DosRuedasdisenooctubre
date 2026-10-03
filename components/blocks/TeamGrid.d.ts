import React from "react";

export interface TeamStat {
  value: string;
  label: string;
  title: string;
  body: string;
  icon?: string;
}

export interface TeamGridProps {
  stats?: TeamStat[];
  className?: string;
}

export declare function TeamGrid(props: TeamGridProps): React.ReactElement;

export default TeamGrid;