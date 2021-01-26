import React, { FC } from 'react';
import {
  FormHelperText as BaseFormHelperText,
  HelpTextProps as BaseFormHelperTextProps,
} from '@chakra-ui/react';

export { BaseFormHelperTextProps as FormHelperTextProps };

export const FormHelperText: FC<BaseFormHelperTextProps> = ({
  children,
  ...props
}) => <BaseFormHelperText {...props}>{children}</BaseFormHelperText>;
