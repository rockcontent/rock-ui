import {
  CircularProgressProps as BaseCircularProgressProps,
  CircularProgress as BaseCircularProgress,
  CircularProgressLabel as BaseCircularProgressLabel,
  CircularProgressLabelProps as BaseCircularProgressLabelProps,
} from '@chakra-ui/react';

import React, { FC } from 'react';

export { BaseCircularProgressProps as CircularProgressProps };

export const CircularProgress: FC<BaseCircularProgressProps> = ({
  children,
  ...props
}) => <BaseCircularProgress {...props}>{children}</BaseCircularProgress>;

export { BaseCircularProgressLabelProps as CircularProgressLabelProps };

export const CircularProgressLabel: FC<BaseCircularProgressLabelProps> = ({
  children,
  ...props
}) => (
  <BaseCircularProgressLabel {...props}>{children}</BaseCircularProgressLabel>
);
