import React from 'react';

import {
  CloseButton as BaseCloseButton,
  CloseButtonProps as BaseCloseButtonProps,
} from '@chakra-ui/react';

export { BaseCloseButtonProps as CloseButtonProps };

export const CloseButton = React.forwardRef<
  HTMLInputElement,
  BaseCloseButtonProps
>(({ children, ...props }) => (
  <BaseCloseButton {...props} className="closeButtonChakra">
    {children}
  </BaseCloseButton>
));
