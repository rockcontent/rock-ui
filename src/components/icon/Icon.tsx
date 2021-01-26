import React, { FC } from 'react';
import { Icon as BaseIcon, IconProps as BaseIconProps } from '@chakra-ui/react';

export { BaseIconProps as IconProps };

export const Icon: FC<BaseIconProps> = ({ children, ...props }) => (
  <BaseIcon {...props}>{children}</BaseIcon>
);
