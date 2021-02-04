import React from 'react';
import {
  Tfoot as BaseTfoot,
  TableFooterProps as BaseTfootProps,
  ComponentWithAs,
} from '@chakra-ui/react';

export { BaseTfootProps as TfootProps };

export const Tfoot: ComponentWithAs<'tfoot', BaseTfootProps> = props => (
  <BaseTfoot {...props}>{props.children}</BaseTfoot>
);
