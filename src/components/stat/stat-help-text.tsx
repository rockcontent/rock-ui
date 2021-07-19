import React from 'react';
import {
  StatHelpText as BaseStatHelpText,
  StatHelpTextProps,
} from '@chakra-ui/react';

export { StatHelpTextProps };

export const StatHelpText = React.forwardRef((props, ref) => (
  <BaseStatHelpText ref={ref} {...props} />
)) as typeof BaseStatHelpText;
