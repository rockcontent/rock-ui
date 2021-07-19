import React from 'react';
import {
  PopoverContent as BasePopoverContent,
  PopoverContentProps as BasePopoverContentProps,
} from '@chakra-ui/react';

export { BasePopoverContentProps as PopoverContentProps };

export const PopoverContent: React.FC<BasePopoverContentProps> = ({
  children,
  ...props
}) => (
  <BasePopoverContent background={props.background || 'white'} {...props}>
    {children}
  </BasePopoverContent>
);
