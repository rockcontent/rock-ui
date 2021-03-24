import React, { FC } from 'react';
import {
  Accordion as BaseAccordion,
  AccordionProps as BaseAccordionProps,
} from '@chakra-ui/react';

export { BaseAccordionProps as AccordionProps };

export const Accordion: FC<BaseAccordionProps> = ({ children, ...props }) => (
  <BaseAccordion {...props}>{children}</BaseAccordion>
);
