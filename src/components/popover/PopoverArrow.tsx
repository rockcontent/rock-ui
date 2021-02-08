import React from 'react';
import {
  PopoverArrow as BasePopoverArrow,
  PopoverArrowProps as BasePopoverArrowProps,
} from '@chakra-ui/react';

export { BasePopoverArrowProps as PopoverArrowProps };

export const PopoverArrow: React.FC<BasePopoverArrowProps> = ({
  children,
  ...props
}) => <BasePopoverArrow {...props}>{children}</BasePopoverArrow>;
