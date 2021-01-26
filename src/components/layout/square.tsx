import React, { FC } from 'react';
import {
  Square as BaseSquare,
  SquareProps as BaseSquareProps,
} from '@chakra-ui/react';

export { BaseSquareProps as SquareProps };

export const Square: FC<BaseSquareProps> = ({ children, ...props }) => (
  <BaseSquare {...props}>{children}</BaseSquare>
);
