import React from "react";

export interface VerticalStep {
  number?: string | number;
  title: string;
  subtitle?: string;
  body?: string;
  detail?: string;
  badge?: string;
}

export interface StepperVerticalProps {
  steps: VerticalStep[];
  currentStep: number;
  onStepClick?: (stepIndex: number) => void;
  className?: string;
}

export declare function StepperVertical(props: StepperVerticalProps): React.ReactElement;

export default StepperVertical;