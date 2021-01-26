import React, { FC } from 'react';
import {
  AlertTitle as BaseAlertTitle,
  AlertTitleProps as BaseAlertTitleProps,
} from '@chakra-ui/react';

export { BaseAlertTitleProps as AlertTitleProps };

export const AlertTitle: FC<BaseAlertTitleProps> = ({ children, ...props }) => (
  <BaseAlertTitle {...props}>{children}</BaseAlertTitle>
);
