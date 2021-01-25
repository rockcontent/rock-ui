import React, { FC } from 'react';
import {
  ModalContent as BaseModalContent,
  ModalContentProps as BaseModalContentProps,
} from '@chakra-ui/react';

export { BaseModalContentProps as ModalContentProps };

export const ModalContent: FC<BaseModalContentProps> = ({
  children,
  ...props
}) => <BaseModalContent {...props}>{children}</BaseModalContent>;
