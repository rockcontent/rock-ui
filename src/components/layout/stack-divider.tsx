import React, { FC } from 'react';
import {
  StackDivider as BaseStackDivider,
  StackProps as BaseStackDividerProps,
} from '@chakra-ui/react';

export { BaseStackDividerProps as StackDividerProps };

export const StackDivider: FC<BaseStackDividerProps> = ({
  children,
  ...props
}) => <BaseStackDivider {...props}>{children}</BaseStackDivider>;
