import React from 'react';
import {
  PopoverHeader as BasePopoverHeader,
  PopoverHeaderProps as BasePopoverHeaderProps,
} from '@chakra-ui/react';

export { BasePopoverHeaderProps as PopoverHeaderProps };

export const PopoverHeader: React.FC<BasePopoverHeaderProps> = ({
  children,
  ...props
}) => <BasePopoverHeader {...props}>{children}</BasePopoverHeader>;
