import React from 'react';
import {
  TabList as BaseTabList,
  TabListProps as BaseTabListProps,
} from '@chakra-ui/react';

export { BaseTabListProps as TabListProps };

export const TabList: React.FC<BaseTabListProps> = ({ children, ...props }) => (
  <BaseTabList {...props}>{children}</BaseTabList>
);
