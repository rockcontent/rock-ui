import React, { forwardRef } from 'react';
import {
  Button as BaseButton,
  ButtonProps as BaseButtonProps,
} from '@chakra-ui/react';

export { BaseButtonProps as ButtonProps };

export const Button = forwardRef<HTMLButtonElement, BaseButtonProps>(
  (props, ref) => (
    <BaseButton {...props} ref={ref}>
      {props.children}
    </BaseButton>
  )
);
