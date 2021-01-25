import React, { FC } from 'react';
import {
  MenuItemOption as BaseMenuItemOption,
  MenuItemOptionProps as BaseMenuItemOptionProps,
} from '@chakra-ui/react';

export { BaseMenuItemOptionProps as MenuItemOptionProps };

export const MenuItemOption: FC<BaseMenuItemOptionProps> = ({
  children,
  ...props
}) => <BaseMenuItemOption {...props}>{children}</BaseMenuItemOption>;
