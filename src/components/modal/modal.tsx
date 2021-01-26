import React, { FC } from 'react';
import {
  Modal as BaseModal,
  ModalProps as BaseModalProps,
} from '@chakra-ui/react';

export { BaseModalProps as ModalProps };

export const Modal: FC<BaseModalProps> = ({ children, ...props }) => (
  <BaseModal {...props}>{children}</BaseModal>
);
