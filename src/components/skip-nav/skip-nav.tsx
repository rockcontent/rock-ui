import {
  SkipNavContent as BaseSkipNavContent,
  SkipNavContentProps as BaseSkipNavContentProps,
  SkipNavLink as BaseSkipNavLink,
  SkipNavLinkProps as BaseSkipNavLinkProps,
} from '@chakra-ui/skip-nav';
import React, { forwardRef } from 'react';

export { BaseSkipNavContentProps as SkipNavContentProps };

export const SkipNavContent = forwardRef<
  HTMLDivElement,
  BaseSkipNavContentProps
>((props, ref) => (
  <BaseSkipNavContent ref={ref} {...props}>
    {props.children}
  </BaseSkipNavContent>
));

export { BaseSkipNavLinkProps as SkipNavLinkProps };

export const SkipNavLink = forwardRef<HTMLAnchorElement, BaseSkipNavLinkProps>(
  (props, ref) => (
    <BaseSkipNavLink ref={ref} {...props}>
      {props.children}
    </BaseSkipNavLink>
  )
);
