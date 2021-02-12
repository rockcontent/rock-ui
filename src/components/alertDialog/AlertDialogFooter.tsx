import React, { FC } from 'react';
import {
  AlertDialogFooter as BaseAlertDialogFooter,
  ModalFooterProps as BaseAlertDialogBodyProps,
} from '@chakra-ui/react';

export { BaseAlertDialogBodyProps as AlertDialogFooterProps };

export const AlertDialogFooter: FC<BaseAlertDialogBodyProps> = ({
  children,
  ...props
}) => <BaseAlertDialogFooter {...props}>{children}</BaseAlertDialogFooter>;
