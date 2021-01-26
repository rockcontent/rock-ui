import React from 'react';
import {
  TabPanels as BaseTabPanels,
  TabPanelsProps as BaseTabPanelsProps,
} from '@chakra-ui/react';

export { BaseTabPanelsProps as TabPanelsProps };

export const TabPanels: React.FC<BaseTabPanelsProps> = ({
  children,
  ...props
}) => <BaseTabPanels {...props}>{children}</BaseTabPanels>;
