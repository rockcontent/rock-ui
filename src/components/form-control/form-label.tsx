import React, { FC } from 'react';
import {
  FormLabel as BaseFormLabel,
  FormLabelProps as BaseFormLabelProps,
} from '@chakra-ui/react';

export { BaseFormLabelProps as FormLabelProps };

export const FormLabel: FC<BaseFormLabelProps> = ({ children, ...props }) => (
  <BaseFormLabel {...props}>{children}</BaseFormLabel>
);
