import React, { FC } from 'react';
import {
  AlertIcon as BaseAlertIcon,
  AlertIconProps as BaseAlertIconProps,
} from '@chakra-ui/react';

export { BaseAlertIconProps as AlertIconProps };

export const AlertIcon: FC<BaseAlertIconProps> = ({ children, ...props }) => (
  <BaseAlertIcon {...props}>{children}</BaseAlertIcon>
);
