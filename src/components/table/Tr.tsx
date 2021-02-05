import React from 'react';
import { Tr as BaseTr, TableRowProps as BaseTrProps } from '@chakra-ui/react';

export { BaseTrProps as TrProps };

export const Tr: React.FC<BaseTrProps> = ({ children, ...props }) => (
  <BaseTr {...props}>{children}</BaseTr>
);
