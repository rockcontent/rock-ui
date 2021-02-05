import React from 'react';
import { Td as BaseTd, TableCellProps as BaseTdProps } from '@chakra-ui/react';

export { BaseTdProps as TdProps };

export const Td: React.FC<BaseTdProps> = ({ children, ...props }) => (
  <BaseTd {...props}>{children}</BaseTd>
);
