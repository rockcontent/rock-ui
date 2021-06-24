import React from 'react';
import { StatLabel as BaseStatLabel, StatLabelProps } from '@chakra-ui/react';

export { StatLabelProps };

export const StatLabel = React.forwardRef((props, ref) => (
  <BaseStatLabel ref={ref} {...props} />
)) as typeof BaseStatLabel;
