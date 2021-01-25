import React, { FC } from 'react';
import {
  Wrap as BaseWrap,
  StackProps as BaseWrapProps,
} from '@chakra-ui/react';

export { BaseWrapProps as WrapProps };

export const Wrap: FC<BaseWrapProps> = ({ children, ...props }) => (
  <BaseWrap {...props}>{children}</BaseWrap>
);
