import React, { FC } from 'react';
import {
  MenuButton as BaseMenuButton,
  MenuButtonProps as BaseMenuButtonProps,
} from '@chakra-ui/react';

export { BaseMenuButtonProps as MenuButtonProps };

export const MenuButton: FC<BaseMenuButtonProps> = ({ children, ...props }) => (
  <BaseMenuButton {...props}>{children}</BaseMenuButton>
);
