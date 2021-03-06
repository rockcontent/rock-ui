import {
  Textarea as BaseTextarea,
  TextareaProps as BaseTextareaProps,
} from '@chakra-ui/react';
import React from 'react';

export { BaseTextareaProps as TextareaProps };

export const Textarea = React.forwardRef<
  HTMLTextAreaElement,
  BaseTextareaProps
>(({ children, ...props }) => (
  <BaseTextarea {...props}>{children}</BaseTextarea>
));
