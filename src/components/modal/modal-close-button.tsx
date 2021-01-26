import React, { FC } from 'react';
import { ModalCloseButton as BaseModalCloseButton } from '@chakra-ui/react';

export const ModalCloseButton: FC = ({ children, ...props }) => (
  <BaseModalCloseButton {...props}>{children}</BaseModalCloseButton>
);
