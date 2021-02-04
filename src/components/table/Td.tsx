import React from 'react';
import {
  Td as BaseTd,
  TableCaptionProps as BaseTdProps,
  ComponentWithAs,
} from '@chakra-ui/react';

export { BaseTdProps as TdProps };

export const Td: ComponentWithAs<'td', BaseTdProps> = props => (
  <BaseTd {...props}>{props.children}</BaseTd>
);
