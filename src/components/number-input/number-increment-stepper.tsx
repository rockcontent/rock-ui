import React from 'react';
import {
  NumberIncrementStepper as BaseNumberIncrementStepper,
  NumberIncrementStepperProps as BaseNumberIncrementStepperProps,
} from '@chakra-ui/react';

export { BaseNumberIncrementStepperProps as NumberIncrementStepperProps };

export const NumberIncrementStepper = React.forwardRef<
  HTMLDivElement,
  BaseNumberIncrementStepperProps
>(({ children, ...props }, ref: any) => (
  <BaseNumberIncrementStepper ref={ref} {...props}>
    {children}
  </BaseNumberIncrementStepper>
));
