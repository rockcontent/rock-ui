import React from 'react';
import {
  PopoverBody as BasePopoverBody,
  PopoverBodyProps as BasePopoverBodyProps,
} from '@chakra-ui/react';

export { BasePopoverBodyProps as PopoverBodyProps };

export const PopoverBody: React.FC<BasePopoverBodyProps> = ({
  children,
  ...props
}) => <BasePopoverBody {...props}>{children}</BasePopoverBody>;
