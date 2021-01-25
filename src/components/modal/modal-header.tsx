import React, { FC } from 'react';
import {
  ModalHeader as BaseModalHeader,
  ModalHeaderProps as BaseModalHeaderProps,
} from '@chakra-ui/react';

export { BaseModalHeaderProps as ModalHeaderProps };

export const ModalHeader: FC<BaseModalHeaderProps> = ({
  children,
  ...props
}) => <BaseModalHeader {...props}>{children}</BaseModalHeader>;
