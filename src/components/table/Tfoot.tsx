import React from 'react';
import {
  Tfoot as BaseTfoot,
  TableFooterProps as BaseTfootProps,
} from '@chakra-ui/react';

export { BaseTfootProps as TfootProps };

export const Tfoot: React.FC<BaseTfootProps> = ({ children, ...props }) => (
  <BaseTfoot {...props}>{children}</BaseTfoot>
);
