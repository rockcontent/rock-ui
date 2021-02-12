import React from 'react';
import {
  NumberInput as BaseNumberInput,
  NumberInputProps as BaseNumberInputProps,
} from '@chakra-ui/react';

export { BaseNumberInputProps as NumberInputProps };

export const NumberInput = React.forwardRef<
  HTMLDivElement,
  BaseNumberInputProps
>(({ children, ...props }, ref: any) => (
  <BaseNumberInput ref={ref} {...props}>
    {children}
  </BaseNumberInput>
));
