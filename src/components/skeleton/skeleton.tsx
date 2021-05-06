import { Skeleton as BaseSkeleton, SkeletonProps } from '@chakra-ui/react';
import React from 'react';

const Skeleton = React.forwardRef<HTMLDivElement, SkeletonProps>(
  ({ children, ...props }, ref) => (
    <BaseSkeleton ref={ref} {...props}>
      {children}
    </BaseSkeleton>
  )
);

export { SkeletonProps };

export default Skeleton;
