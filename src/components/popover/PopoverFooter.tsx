import React from 'react';
import {
  PopoverFooter as BasePopoverFooter,
  PopoverFooterProps as BasePopoverFooterProps,
} from '@chakra-ui/react';

export { BasePopoverFooterProps as PopoverFooterProps };

export const PopoverFooter: React.FC<BasePopoverFooterProps> = ({
  children,
  ...props
}) => <BasePopoverFooter {...props}>{children}</BasePopoverFooter>;
