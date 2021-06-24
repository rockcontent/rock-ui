import React from 'react';
import { Kbd as BaseKbd, ComponentWithAs, KbdProps } from '@chakra-ui/react';

export { KbdProps };

export const Kbd = React.forwardRef<any, KbdProps>((props, ref) => (
  <BaseKbd {...props} ref={ref} />
)) as ComponentWithAs<'kbd', KbdProps>;
