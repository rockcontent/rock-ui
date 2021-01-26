import React, { FC } from 'react';
import { Box as BaseBox, BoxProps as BaseBoxProps } from '@chakra-ui/react';

export { BaseBoxProps as BoxProps };

export const Box: FC<BaseBoxProps> = ({ children, ...props }) => (
  <BaseBox {...props}>{children}</BaseBox>
);
