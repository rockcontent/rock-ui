import React from 'react';
import {
  Table as BaseTable,
  TableProps as BaseTableProps,
} from '@chakra-ui/react';

export { BaseTableProps as TableProps };

export const Table: React.FC<BaseTableProps> = ({ children, ...props }) => (
  <BaseTable {...props}>{children}</BaseTable>
);
