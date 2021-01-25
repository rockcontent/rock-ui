import React, { FC } from 'react';
import {
  Breadcrumb as BaseBreadcrumb,
  BreadcrumbProps as BaseBreadcrumbProps,
} from '@chakra-ui/react';

export { BaseBreadcrumbProps as BreadcrumbProps };

export const Breadcrumb: FC<BaseBreadcrumbProps> = ({ children, ...props }) => (
  <BaseBreadcrumb {...props}>{children}</BaseBreadcrumb>
);
