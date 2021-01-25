import React from 'react';
import { Tab as BaseTab, TabProps as BaseTabProps } from '@chakra-ui/react';

export { BaseTabProps as TabProps };

export const Tab: React.FC<BaseTabProps> = ({ children, ...props }) => (
  <BaseTab {...props}>{children}</BaseTab>
);
