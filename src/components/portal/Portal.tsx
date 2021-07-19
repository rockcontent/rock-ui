import React, { FC } from 'react';
import {
  Portal as BasePortal,
  PortalProps as BasePortalProps,
} from '@chakra-ui/react';

export { BasePortalProps as PortalProps };

export const Portal: FC<BasePortalProps> = props => (
  <BasePortal {...props}>{props.children}</BasePortal>
);
