import React from 'react';
import {
  Thead as BaseThead,
  TableHeadProps as BaseTheadProps,
  ComponentWithAs,
} from '@chakra-ui/react';

export { BaseTheadProps as TheadProps };

export const Thead: ComponentWithAs<'thead', BaseTheadProps> = props => (
  <BaseThead {...props}>{props.children}</BaseThead>
);
