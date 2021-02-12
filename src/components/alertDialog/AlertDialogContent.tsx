import React, { FC } from 'react';
import {
  AlertDialogContent as BaseAlertDialogContent,
  ModalContentProps as BaseAlertDialogContentProps,
} from '@chakra-ui/react';

export { BaseAlertDialogContentProps as AlertDialogContentProps };

export const AlertDialogContent: FC<BaseAlertDialogContentProps> = ({
  children,
  ...props
}) => <BaseAlertDialogContent {...props}>{children}</BaseAlertDialogContent>;
