import React, { FC } from 'react';
import {
  AlertDialogBody as BaseAlertDialogBody,
  ModalBodyProps as BaseAlertDialogBodyProps,
} from '@chakra-ui/react';

export { BaseAlertDialogBodyProps as AlertDialogBodyProps };

export const AlertDialogBody: FC<BaseAlertDialogBodyProps> = ({
  children,
  ...props
}) => <BaseAlertDialogBody {...props}>{children}</BaseAlertDialogBody>;
