import React, { FC } from 'react';
import {
  BreadcrumbSeparator as BaseBreadcrumbSeparator,
  BreadcrumbSeparatorProps as BaseBreadcrumbSeparatorProps,
} from '@chakra-ui/react';

export { BaseBreadcrumbSeparatorProps as BreadcrumbSeparatorProps };

export const BreadcrumbSeparator: FC<BaseBreadcrumbSeparatorProps> = ({
  children,
  ...props
}) => <BaseBreadcrumbSeparator {...props}>{children}</BaseBreadcrumbSeparator>;
