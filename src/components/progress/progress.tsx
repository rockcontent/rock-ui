import React, { FC } from 'react';
import {
  Progress as BaseProgress,
  ProgressProps as BaseProgressProps,
} from '@chakra-ui/react';

export { BaseProgressProps as ProgressProps };

export const Progress: FC<BaseProgressProps> = ({ children, ...props }) => (
  <BaseProgress {...props}>{children}</BaseProgress>
);
