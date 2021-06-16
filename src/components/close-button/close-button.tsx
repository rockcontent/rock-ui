import React, { FC } from 'react';
import {
  CloseButton as BaseCloseButton,
  CloseButtonProps as BaseCloseButtonProps,
} from '@chakra-ui/react';

export { BaseCloseButtonProps as CloseButtonProps };

export const CloseButton: FC<BaseCloseButtonProps> = ({
  children,
  ...props
}) => (
  <BaseCloseButton {...props} className="closeButtonChakra">
    {children}
  </BaseCloseButton>
);
