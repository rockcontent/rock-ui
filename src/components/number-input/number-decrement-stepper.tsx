import React from 'react';
import {
  NumberDecrementStepper as BaseNumberDecrementStepper,
  NumberDecrementStepperProps as BaseNumberDecrementStepperProps,
} from '@chakra-ui/react';

export { BaseNumberDecrementStepperProps as NumberDecrementStepperProps };

export const NumberDecrementStepper = React.forwardRef<
  HTMLDivElement,
  BaseNumberDecrementStepperProps
>(({ children, ...props }, ref: any) => (
  <BaseNumberDecrementStepper {...props} ref={ref}>
    {children}
  </BaseNumberDecrementStepper>
));
