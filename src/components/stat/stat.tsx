import React from 'react';
import { Stat as BaseStat, StatProps } from '@chakra-ui/react';

export { StatProps };

export const Stat = React.forwardRef((props, ref) => (
  <BaseStat ref={ref} {...props} />
)) as typeof BaseStat;
