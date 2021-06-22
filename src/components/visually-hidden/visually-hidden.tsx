import React from 'react';
import {
  ChakraProps,
  VisuallyHidden as VisuallyHiddenBase,
} from '@chakra-ui/react';

export const VisuallyHidden = React.forwardRef<any, ChakraProps>(
  (props, ref) => <VisuallyHiddenBase {...props} ref={ref} />
) as typeof VisuallyHiddenBase;
