import React, { FC } from 'react';
import { Menu as BaseMenu, MenuProps as BaseMenuProps } from '@chakra-ui/react';

export { BaseMenuProps as MenuProps };

export const Menu: FC<BaseMenuProps> = ({ children, ...props }) => (
  <BaseMenu {...props}>{children}</BaseMenu>
);
