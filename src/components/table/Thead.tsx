import React from 'react';
import {
  Thead as BaseThead,
  TableHeadProps as BaseTheadProps,
} from '@chakra-ui/react';

export { BaseTheadProps as TheadProps };

export const Thead: React.FC<BaseTheadProps> = ({ children, ...props }) => (
  <BaseThead {...props}>{children}</BaseThead>
);
