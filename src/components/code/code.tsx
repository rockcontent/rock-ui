import React from 'react';
import { Code as BaseCode, CodeProps as BaseCodeProps } from '@chakra-ui/react';

export { BaseCodeProps as CodeProps };

export const Code = React.forwardRef<HTMLInputElement, BaseCodeProps>(
  ({ children, ...props }) => (
    <BaseCode {...props} className="code-chakra">
      {children}
    </BaseCode>
  )
);
