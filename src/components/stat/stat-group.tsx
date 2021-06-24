import React from 'react';
import {
  StatGroup as BaseStatGroup,
  HTMLChakraProps,
  ComponentWithAs,
} from '@chakra-ui/react';

export type StatGroupProps = HTMLChakraProps<'div'>;

export const StatGroup = React.forwardRef((props, ref: any) => (
  <BaseStatGroup {...props} ref={ref} />
)) as ComponentWithAs<'div', StatGroupProps>;
