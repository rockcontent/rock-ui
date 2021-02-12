import React from 'react';
import {
  NumberInputField as BaseNumberInputField,
  NumberInputFieldProps as BaseNumberInputFieldProps,
} from '@chakra-ui/react';

export { BaseNumberInputFieldProps as NumberInputFieldProps };

export const NumberInputField = React.forwardRef<
  HTMLInputElement,
  BaseNumberInputFieldProps
>(({ children, ...props }, ref: any) => (
  <BaseNumberInputField {...props} ref={ref}>
    {children}
  </BaseNumberInputField>
));
