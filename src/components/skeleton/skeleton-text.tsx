import {
  SkeletonText as BaseSkeletonText,
  SkeletonTextProps,
} from '@chakra-ui/react';
import React from 'react';

const SkeletonText: React.FC<SkeletonTextProps> = ({ children, ...props }) => (
  <BaseSkeletonText {...props}>{children}</BaseSkeletonText>
);

export { SkeletonTextProps };

export default SkeletonText;
