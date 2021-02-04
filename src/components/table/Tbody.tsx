import React from 'react';
import {
  Tbody as BaseTbody,
  TableBodyProps as BaseTbodyProps,
  ComponentWithAs,
} from '@chakra-ui/react';

export { BaseTbodyProps as TbodyProps };

export const Tbody: ComponentWithAs<'tbody', BaseTbodyProps> = props => (
  <BaseTbody {...props}>{props.children}</BaseTbody>
);
