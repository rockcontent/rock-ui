import React, { FC } from 'react';
import {
  MenuDivider as BaseMenuDivider,
  MenuDividerProps as BaseMenuDividerProps,
} from '@chakra-ui/react';

export { BaseMenuDividerProps as MenuDividerProps };

export const MenuDivider: FC<BaseMenuDividerProps> = ({
  children,
  ...props
}) => <BaseMenuDivider {...props}>{children}</BaseMenuDivider>;
