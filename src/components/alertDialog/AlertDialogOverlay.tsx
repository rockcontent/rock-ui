import React, { FC } from 'react';
import {
  AlertDialogOverlay as BaseAlertDialogOverlay,
  ModalOverlayProps as BaseAlertDialogOverlayProps,
} from '@chakra-ui/react';

export { BaseAlertDialogOverlayProps as AlertDialogOverlayProps };

export const AlertDialogOverlay: FC<BaseAlertDialogOverlayProps> = ({
  children,
  ...props
}) => <BaseAlertDialogOverlay {...props}>{children}</BaseAlertDialogOverlay>;
