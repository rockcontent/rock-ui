import React, { FC } from 'react';
import {
  SimpleGrid as BaseSimpleGrid,
  SimpleGridProps as BaseSimpleGridProps,
} from '@chakra-ui/react';

export { BaseSimpleGridProps as SimpleGridProps };

export const SimpleGrid: FC<BaseSimpleGridProps> = ({ children, ...props }) => (
  <BaseSimpleGrid {...props}>{children}</BaseSimpleGrid>
);
