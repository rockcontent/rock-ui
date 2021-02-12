import React, { FC } from 'react';
import {
  AlertDialog as BaseAlertDialog,
  AlertDialogProps as BaseAlertDialogProps,
} from '@chakra-ui/react';

export { BaseAlertDialogProps as AlertDialogProps };

export const AlertDialog: FC<BaseAlertDialogProps> = ({
  children,
  ...props
}) => <BaseAlertDialog {...props}>{children}</BaseAlertDialog>;
