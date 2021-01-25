import React, { FC } from 'react';
import {
  NumberInputField as BaseNumberInputField,
  NumberInputFieldProps as BaseNumberInputFieldProps,
} from '@chakra-ui/react';

export { BaseNumberInputFieldProps as NumberInputFieldProps };

export const NumberInputField: FC<BaseNumberInputFieldProps> = ({
  children,
  ...props
}) => <BaseNumberInputField {...props}>{children}</BaseNumberInputField>;
