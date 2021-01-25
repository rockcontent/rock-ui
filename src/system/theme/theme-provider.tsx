import React, { FC } from 'react';
import {
  ChakraProvider as BaseThemeProvider,
  ChakraProviderProps as BaseThemeProviderProps,
} from '@chakra-ui/react';
import { GlobalStyles } from './global-styles';

export { BaseThemeProviderProps as ThemeProviderProps };

export const ThemeProvider: FC<BaseThemeProviderProps> = ({
  children,
  ...props
}) => (
  <BaseThemeProvider {...props}>
    <GlobalStyles />
    {children}
  </BaseThemeProvider>
);
