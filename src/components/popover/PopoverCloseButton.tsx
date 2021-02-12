import React from 'react';
import {
  PopoverCloseButton as BasePopoverCloseButton,
  PopoverCloseButtonProps as BasePopoverCloseButtonProps,
} from '@chakra-ui/react';

export { BasePopoverCloseButtonProps as PopoverCloseButtonProps };

export const PopoverCloseButton: React.FC<BasePopoverCloseButtonProps> = ({
  children,
  ...props
}) => <BasePopoverCloseButton {...props}>{children}</BasePopoverCloseButton>;
