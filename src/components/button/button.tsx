import React from 'react';
import {
  Button as BaseButton,
  ButtonProps as BaseButtonProps,
  ComponentWithAs,
} from '@chakra-ui/react';

export { BaseButtonProps as ButtonProps };

export const Button: ComponentWithAs<'button', BaseButtonProps> = props => (
  <BaseButton {...props} ref={props.ref}>
    {props.children}
  </BaseButton>
);
