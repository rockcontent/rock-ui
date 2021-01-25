import React, { FC } from 'react';
import {
  Container as BaseContainer,
  ContainerProps as BaseContainerProps,
} from '@chakra-ui/react';

export { BaseContainerProps as ContainerProps };

export const Container: FC<BaseContainerProps> = ({ children, ...props }) => (
  <BaseContainer {...props}>{children}</BaseContainer>
);
