import React, { FC } from 'react';
import {
  VStack as BaseVStack,
  StackProps as BaseVStackProps,
} from '@chakra-ui/react';

export { BaseVStackProps as VStackProps };

export const VStack: FC<BaseVStackProps> = ({ children, ...props }) => (
  <BaseVStack {...props}>{children}</BaseVStack>
);
