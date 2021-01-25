import React, { FC } from 'react';
import {
  BreadcrumbItem as BaseBreadcrumbItem,
  BreadcrumbItemProps as BaseBreadcrumbItemProps,
} from '@chakra-ui/react';

export { BaseBreadcrumbItemProps as BreadcrumbItemProps };

export const BreadcrumbItem: FC<BaseBreadcrumbItemProps> = ({
  children,
  ...props
}) => <BaseBreadcrumbItem {...props}>{children}</BaseBreadcrumbItem>;
