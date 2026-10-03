import React from "react";

export interface GuideStep {
  step: number;
  title: string;
  description: string;
  icon?: React.ReactNode;
}

export interface QuoteGuideProps {
  steps?: GuideStep[];
  currentStep: number;
  orientation?: "horizontal" | "vertical";
  className?: string;
}

export declare function QuoteGuide(props: QuoteGuideProps): React.ReactElement;

export default QuoteGuide;