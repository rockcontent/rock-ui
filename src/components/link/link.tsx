import React, { FC } from 'react';
import { Link as BaseLink, LinkProps as BaseLinkProps } from '@chakra-ui/react';

export { BaseLinkProps as LinkProps };

export const Link: FC<BaseLinkProps> = ({ children, ...props }) => (
  <BaseLink {...props}>{children}</BaseLink>
);
