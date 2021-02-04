import React from 'react';
import {
  Table as BaseTable,
  TableProps as BaseTableProps,
  ComponentWithAs,
} from '@chakra-ui/react';

export { BaseTableProps as TableProps };

export const Table: ComponentWithAs<'table', BaseTableProps> = props => (
  <BaseTable {...props}>{props.children}</BaseTable>
);
