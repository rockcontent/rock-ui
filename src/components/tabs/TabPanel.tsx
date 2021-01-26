import React from 'react';
import {
  TabPanel as BaseTabPanel,
  TabPanelProps as BaseTabPanelProps,
} from '@chakra-ui/react';

export { BaseTabPanelProps as TabPanelProps };

export const TabPanel: React.FC<BaseTabPanelProps> = ({
  children,
  ...props
}) => <BaseTabPanel {...props}>{children}</BaseTabPanel>;
