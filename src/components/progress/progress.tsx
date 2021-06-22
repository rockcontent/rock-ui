import React, { FC } from 'react';
import {
  Progress as BaseProgress,
  ProgressProps as BaseProgressProps,
  ProgressLabelProps as BaseProgressLabelProps,
  ProgressLabel as BaseProgressLabel,
  ProgressFilledTrackProps as BaseProgressFilledTrackProps,
  ProgressTrackProps as BaseProgressTrackProps,
} from '@chakra-ui/react';

export { BaseProgressProps as ProgressProps };

export const Progress: FC<BaseProgressProps> = ({ children, ...props }) => (
  <BaseProgress {...props}>{children}</BaseProgress>
);

export { BaseProgressLabelProps as ProgressLabelProps };

export const ProgressLabel: FC<BaseProgressLabelProps> = ({
  children,
  ...props
}) => <BaseProgressLabel {...props}>{children}</BaseProgressLabel>;

export { BaseProgressFilledTrackProps as ProgressFilledTrackProps };
export { BaseProgressTrackProps as ProgressTrackProps };
