import React from "react";

export interface HorizontalStep {
  title: string;
  subtitle?: string;
}

export interface StepperHorizontalProps {
  steps: HorizontalStep[];
  currentStep: number;
  onStepClick?: (stepIndex: number) => void;
  className?: string;
}

export declare function StepperHorizontal(props: StepperHorizontalProps): React.ReactElement;

export default StepperHorizontal;