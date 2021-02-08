import React from 'react';
import {
  Popover as BasePopover,
  PopoverProps as BasePopoverProps,
} from '@chakra-ui/react';

export { BasePopoverProps as PopoverProps };

export const Popover: React.FC<BasePopoverProps> = ({ children, ...props }) => (
  <BasePopover {...props}>{children}</BasePopover>
);
