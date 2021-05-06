import { Divider as BaseDivider, DividerProps } from '@chakra-ui/react';
import React from 'react';

const Divider = React.forwardRef<HTMLHRElement, DividerProps>(
  ({ children, ...props }, ref) => (
    <BaseDivider ref={ref} {...props}>
      {children}
    </BaseDivider>
  )
);

export { DividerProps };

export default Divider;
