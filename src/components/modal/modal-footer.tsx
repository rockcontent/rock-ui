import React, { FC } from 'react';
import {
  ModalFooter as BaseModalFooter,
  ModalFooterProps as BaseModalFooterProps,
} from '@chakra-ui/react';

export const ModalFooter: FC<BaseModalFooterProps> = React.forwardRef<
  HTMLElement,
  BaseModalFooterProps
>(({ children, ...props }, ref: any) => (
  <BaseModalFooter {...props} ref={ref}>
    {children}
  </BaseModalFooter>
));
