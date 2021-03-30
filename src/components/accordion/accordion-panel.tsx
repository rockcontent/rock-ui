import React, { FC } from 'react';
import {
  AccordionPanel as BaseAccordionPanel,
  AccordionPanelProps as BaseAccordionPanelProps,
} from '@chakra-ui/react';

export { BaseAccordionPanelProps as AccordionPanelProps };

export const AccordionPanel: FC<BaseAccordionPanelProps> = ({
  children,
  ...props
}) => <BaseAccordionPanel {...props}>{children}</BaseAccordionPanel>;
