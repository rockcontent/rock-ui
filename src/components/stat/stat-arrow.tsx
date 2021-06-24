import React from 'react';
import { StatArrow as BaseStatArrow, StatArrowProps } from '@chakra-ui/react';

export { StatArrowProps };

export const StatArrow: React.FC<StatArrowProps> = props => (
  <BaseStatArrow {...props} />
);
