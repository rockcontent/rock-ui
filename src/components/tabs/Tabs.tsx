import React from 'react';
import { Tabs as BaseTabs, TabsProps as BaseTabsProps } from '@chakra-ui/react';

export { BaseTabsProps as TabsProps };

export const Tabs: React.FC<BaseTabsProps> = ({ children, ...props }) => (
  <BaseTabs {...props}>{children}</BaseTabs>
);
