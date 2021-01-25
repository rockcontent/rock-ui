import React, { FC, ReactElement } from 'react';
import {
  AvatarBadge as BaseAvatarBadge,
  AvatarBadgeProps as BaseAvatarBadgeProps,
} from '@chakra-ui/react';

export interface AvatarBadgeProps extends BaseAvatarBadgeProps {
  icon?: ReactElement;
}

export const AvatarBadge: FC<AvatarBadgeProps> = ({ children, ...props }) => (
  <BaseAvatarBadge {...props}>{props.icon || children}</BaseAvatarBadge>
);
