import React, { FC } from 'react';
import {
  Tag as BaseTag,
  TagProps as BaseTagProps,
  TagLeftIcon as BaseTagLeftIcon,
  TagRightIcon as BaseTagRightIcon,
} from '@chakra-ui/react';
import { IconProps } from '../icon';

export { BaseTagProps as TagProps };

export const Tag: FC<BaseTagProps> = ({ children, ...props }) => (
  <BaseTag {...props}>{children}</BaseTag>
);

export const TagLeftIcon: FC<IconProps> = ({ children, ...props }) => (
  <BaseTagLeftIcon {...props}>{children}</BaseTagLeftIcon>
);

export const TagRightIcon: FC<IconProps> = ({ children, ...props }) => (
  <BaseTagRightIcon {...props}>{children}</BaseTagRightIcon>
);
