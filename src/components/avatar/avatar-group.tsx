import React, { FC } from 'react';
import {
  AvatarGroup as BaseAvatarGroup,
  AvatarGroupProps as BaseAvatarGroupProps,
} from '@chakra-ui/react';

export { BaseAvatarGroupProps as AvatarGroupProps };

export const AvatarGroup: FC<BaseAvatarGroupProps> = ({
  children,
  ...props
}) => <BaseAvatarGroup {...props}>{children}</BaseAvatarGroup>;
