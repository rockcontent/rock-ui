import React, { FC } from 'react';
import {
  AlertDialogHeader as BaseAlertDialogHeader,
  ModalHeaderProps as BaseAlertDialogHeaderProps,
} from '@chakra-ui/react';

export { BaseAlertDialogHeaderProps as AlertDialogHeaderProps };

export const AlertDialogHeader: FC<BaseAlertDialogHeaderProps> = ({
  children,
  ...props
}) => <BaseAlertDialogHeader {...props}>{children}</BaseAlertDialogHeader>;
