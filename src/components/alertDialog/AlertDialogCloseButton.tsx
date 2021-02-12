import React, { FC } from 'react';
import {
  AlertDialogCloseButton as BaseAlertDialogCloseButton,
  CloseButtonProps as BaseAlertDialogCloseButtonProps,
} from '@chakra-ui/react';

export { BaseAlertDialogCloseButtonProps as AlertDialogCloseButtonProps };

export const AlertDialogCloseButton: FC<BaseAlertDialogCloseButtonProps> = ({
  children,
  ...props
}) => (
  <BaseAlertDialogCloseButton {...props}>{children}</BaseAlertDialogCloseButton>
);
