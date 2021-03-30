import React, { FC } from 'react';
import {
  AccordionItem as BaseAccordionItem,
  AccordionItemProps as BaseAccordionItemProps,
} from '@chakra-ui/react';

export { BaseAccordionItemProps as AccordionItemProps };

export const AccordionItem: FC<BaseAccordionItemProps> = ({
  children,
  ...props
}) => <BaseAccordionItem {...props}>{children}</BaseAccordionItem>;
