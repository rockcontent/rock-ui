import React from 'react';
import {
  TableCaption as BaseTableCaption,
  TableCaptionProps as BaseTableCaptionProps,
  ComponentWithAs,
} from '@chakra-ui/react';

export { BaseTableCaptionProps as TableCaptionProps };

export const TableCaption: ComponentWithAs<
  'caption',
  BaseTableCaptionProps
> = props => <BaseTableCaption {...props}>{props.children}</BaseTableCaption>;
