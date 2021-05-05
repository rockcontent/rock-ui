import { Skeleton as BaseSkeleton, SkeletonProps } from '@chakra-ui/react';
import React from 'react';

const Skeleton = React.forwardRef<HTMLDivElement, SkeletonProps>(
  ({ children, ...props }) => <BaseSkeleton {...props}>{children}</BaseSkeleton>
);

export { SkeletonProps };

export default Skeleton;
