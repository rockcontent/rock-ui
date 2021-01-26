import React, { FC } from 'react';
import { ModalFooter as BaseModalFooter } from '@chakra-ui/react';

export const ModalFooter: FC = ({ children, ...props }) => (
  <BaseModalFooter {...props}>{children}</BaseModalFooter>
);
