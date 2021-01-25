import React, { FC } from 'react';
import {
  FormControl as BaseFormControl,
  FormControlProps as BaseFormControlProps,
} from '@chakra-ui/react';

export { BaseFormControlProps as FormControlProps };

export const FormControl: FC<BaseFormControlProps> = ({
  children,
  ...props
}) => <BaseFormControl {...props}>{children}</BaseFormControl>;
