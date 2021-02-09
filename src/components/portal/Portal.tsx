import React from 'react';
import {
  Portal as BasePortal,
  PortalProps as BasePortalProps,
} from '@chakra-ui/react';

export { BasePortalProps as PortalProps };

export const Portal: React.FC<BasePortalProps> = ({ children, ...props }) => (
  <BasePortal {...props}>{children}</BasePortal>
);
