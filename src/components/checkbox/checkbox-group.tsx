import React, { FC } from 'react';
import {
  CheckboxGroup as BaseCheckboxGroup,
  CheckboxGroupProps as BaseCheckboxGroupProps,
} from '@chakra-ui/core';

export { BaseCheckboxGroupProps as CheckboxGroupProps };

export const CheckboxGroup: FC<BaseCheckboxGroupProps> = ({
  children,
  ...props
}) => <BaseCheckboxGroup {...props}>{children}</BaseCheckboxGroup>;
