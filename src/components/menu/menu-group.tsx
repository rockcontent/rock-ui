import React, { FC } from 'react';
import {
  MenuGroup as BaseMenuGroup,
  MenuGroupProps as BaseMenuGroupProps,
} from '@chakra-ui/react';

export { BaseMenuGroupProps as MenuGroupProps };

export const MenuGroup: FC<BaseMenuGroupProps> = ({ children, ...props }) => (
  <BaseMenuGroup {...props}>{children}</BaseMenuGroup>
);
