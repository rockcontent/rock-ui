import React, { FC } from 'react';
import {
  Textarea as BaseTextarea,
  TextareaProps as BaseTextareaProps,
} from '@chakra-ui/react';

export { BaseTextareaProps as TextareaProps };

export const Textarea: FC<BaseTextareaProps> = ({ children, ...props }) => (
  <BaseTextarea {...props}>{children}</BaseTextarea>
);
