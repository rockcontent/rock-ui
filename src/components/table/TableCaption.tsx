import React from 'react';
import {
  TableCaption as BaseTableCaption,
  TableCaptionProps as BaseTableCaptionProps,
} from '@chakra-ui/react';

export { BaseTableCaptionProps as TableCaptionProps };

export const TableCaption: React.FC<BaseTableCaptionProps> = ({
  children,
  ...props
}) => <BaseTableCaption {...props}>{children}</BaseTableCaption>;
