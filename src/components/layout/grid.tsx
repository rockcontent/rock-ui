import React, { FC } from 'react';
import {
  Grid as BaseGrid,
  GridProps as BaseGridProps,
  GridItem as BaseGridItem,
  GridItemProps as BaseGridItemProps,
} from '@chakra-ui/react';

export { BaseGridProps as GridProps };
export { BaseGridItemProps as GridItemProps };

export const Grid: FC<BaseGridProps> = ({ children, ...props }) => (
  <BaseGrid {...props}>{children}</BaseGrid>
);

export const GridItem: FC<BaseGridItemProps> = ({ children, ...props }) => (
  <BaseGridItem {...props}>{children}</BaseGridItem>
);
