import React from 'react';
import {
  NumberInputStepper as BaseNumberInputStepper,
  NumberInputStepperProps as BaseNumberInputStepperProps,
} from '@chakra-ui/react';

export { BaseNumberInputStepperProps as NumberInputStepperProps };

export const NumberInputStepper = React.forwardRef<
  HTMLDivElement,
  BaseNumberInputStepperProps
>(({ children, ...props }, ref: any) => (
  <BaseNumberInputStepper {...props} ref={ref}>
    {children}
  </BaseNumberInputStepper>
));
