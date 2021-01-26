import React, { FC } from 'react';
import {
  NumberInputStepper as BaseNumberInputStepper,
  NumberInputStepperProps as BaseNumberInputStepperProps,
} from '@chakra-ui/react';

export { BaseNumberInputStepperProps as NumberInputStepperProps };

export const NumberInputStepper: FC<BaseNumberInputStepperProps> = ({
  children,
  ...props
}) => <BaseNumberInputStepper {...props}>{children}</BaseNumberInputStepper>;
