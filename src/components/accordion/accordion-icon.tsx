import React, { FC } from 'react';
import { AccordionIcon as BaseAccordionIcon } from '@chakra-ui/react';

export const AccordionIcon: FC = ({ children, ...props }) => (
  <BaseAccordionIcon {...props}>{children}</BaseAccordionIcon>
);
