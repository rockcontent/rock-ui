import React from 'react';
import {
  Th as BaseTh,
  TableColumnHeaderProps as BaseThProps,
  ComponentWithAs,
} from '@chakra-ui/react';

export { BaseThProps as ThProps };

export const Th: ComponentWithAs<'th', BaseThProps> = props => (
  <BaseTh {...props}>{props.children}</BaseTh>
);
