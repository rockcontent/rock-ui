import React from 'react';
import {
  PortalManager as BasePortalManager,
  PortalManagerProps as BasePortalManagerProps,
} from '@chakra-ui/react';

export { BasePortalManagerProps as PortalManagerProps };

export const PortalManager: React.FC<BasePortalManagerProps> = ({
  children,
  ...props
}) => <BasePortalManager {...props}>{children}</BasePortalManager>;
