import React from 'react';
import {
  StatNumber as BaseStatNumber,
  StatNumberProps,
} from '@chakra-ui/react';

export { StatNumberProps };

export const StatNumber = React.forwardRef((props, ref) => (
  <BaseStatNumber ref={ref} {...props} />
)) as typeof BaseStatNumber;
