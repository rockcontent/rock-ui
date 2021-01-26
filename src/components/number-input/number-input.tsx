import React, { FC } from 'react';
import {
  NumberInput as BaseNumberInput,
  NumberInputProps as BaseNumberInputProps,
} from '@chakra-ui/react';

export { BaseNumberInputProps as NumberInputProps };

export const NumberInput: FC<BaseNumberInputProps> = ({
  children,
  ...props
}) => <BaseNumberInput {...props}>{children}</BaseNumberInput>;
