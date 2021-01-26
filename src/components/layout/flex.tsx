import React, { FC } from 'react';
import { Flex as BaseFlex, FlexProps as BaseFlexProps } from '@chakra-ui/react';

export { BaseFlexProps as FlexProps };

export const Flex: FC<BaseFlexProps> = ({ children, ...props }) => (
  <BaseFlex {...props}>{children}</BaseFlex>
);
