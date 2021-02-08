import React from 'react';
import { PopoverTrigger as BasePopoverTrigger } from '@chakra-ui/react';

export const PopoverTrigger: React.FC = ({ children, ...props }) => (
  <BasePopoverTrigger {...props}>{children}</BasePopoverTrigger>
);
