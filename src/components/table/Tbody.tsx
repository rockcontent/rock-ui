import React from 'react';
import {
  Tbody as BaseTbody,
  TableBodyProps as BaseTbodyProps,
} from '@chakra-ui/react';

export { BaseTbodyProps as TbodyProps };

export const Tbody: React.FC<BaseTbodyProps> = ({ children, ...props }) => (
  <BaseTbody {...props}>{children}</BaseTbody>
);
