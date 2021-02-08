import React, { forwardRef } from 'react';
import {
  Portal as BasePortal,
  PortalProps as BasePortalProps,
} from '@chakra-ui/react';

export { BasePortalProps as PortalProps };

export const Portal = forwardRef<any, BasePortalProps>((props, children) => (
  <BasePortal {...props}>{children}</BasePortal>
));
