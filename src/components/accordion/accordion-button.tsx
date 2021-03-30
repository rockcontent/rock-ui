import React, { FC } from 'react';
import {
  AccordionButton as BaseAccordionButton,
  AccordionButtonProps as BaseAccordionButtonProps,
} from '@chakra-ui/react';

export { BaseAccordionButtonProps as AccordionButtonProps };

export const AccordionButton: FC<BaseAccordionButtonProps> = ({
  children,
  ...props
}) => <BaseAccordionButton {...props}>{children}</BaseAccordionButton>;
