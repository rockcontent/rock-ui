import {
  SkeletonCircle as BaseSkeletonCircle,
  SkeletonProps,
} from '@chakra-ui/react';
import React from 'react';

const SkeletonCircle = React.forwardRef<HTMLDivElement, SkeletonProps>(
  ({ children, ...props }) => (
    <BaseSkeletonCircle {...props}>{children}</BaseSkeletonCircle>
  )
);

export default SkeletonCircle;
