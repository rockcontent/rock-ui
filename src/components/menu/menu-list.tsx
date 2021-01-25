import React, { FC } from 'react';
import {
  MenuList as BaseMenuList,
  MenuListProps as BaseMenuListProps,
} from '@chakra-ui/react';

export { BaseMenuListProps as MenuListProps };

export const MenuList: FC<BaseMenuListProps> = ({ children, ...props }) => (
  <BaseMenuList {...props}>{children}</BaseMenuList>
);
