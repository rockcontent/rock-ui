import React, { FC } from 'react';
import {
  MenuOptionGroup as BaseMenuOptionGroup,
  MenuOptionGroupProps as BaseMenuOptionGroupProps,
} from '@chakra-ui/react';

export { BaseMenuOptionGroupProps as MenuOptionGroupProps };

export const MenuOptionGroup: FC<BaseMenuOptionGroupProps> = ({
  children,
  ...props
}) => <BaseMenuOptionGroup {...props}>{children}</BaseMenuOptionGroup>;
