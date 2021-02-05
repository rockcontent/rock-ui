import React from 'react';
import {
  Th as BaseTh,
  TableColumnHeaderProps as BaseThProps,
} from '@chakra-ui/react';

export { BaseThProps as ThProps };

export const Th: React.FC<BaseThProps> = ({ children, ...props }) => (
  <BaseTh {...props}>{children}</BaseTh>
);
