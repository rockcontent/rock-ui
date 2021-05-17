import React from 'react';
import {
  Switch as BaseSwitch,
  SwitchProps as BaseSwitchProps,
} from '@chakra-ui/react';

export { BaseSwitchProps as SwitchProps };

export const Switch = React.forwardRef<HTMLInputElement, BaseSwitchProps>(
  ({ children, ...props }) => <BaseSwitch {...props}>{children}</BaseSwitch>
);
