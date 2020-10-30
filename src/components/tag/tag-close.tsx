import React, { FC } from 'react';
import {
  TagCloseButton as BaseTagCloseButton,
  TagCloseButtonProps as BaseTagCloseButtonProps,
} from '@chakra-ui/core';

export { BaseTagCloseButtonProps as TagCloseButtonProps };

export const TagCloseButton: FC<BaseTagCloseButtonProps> = ({
  children,
  ...props
}) => <BaseTagCloseButton {...props}>{children}</BaseTagCloseButton>;
