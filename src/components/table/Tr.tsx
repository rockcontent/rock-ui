import React from 'react';
import {
  Tr as BaseTr,
  TableRowProps as BaseTrProps,
  ComponentWithAs,
} from '@chakra-ui/react';

export { BaseTrProps as TrProps };

export const Tr: ComponentWithAs<'tr', BaseTrProps> = props => (
  <BaseTr {...props}>{props.children}</BaseTr>
);
