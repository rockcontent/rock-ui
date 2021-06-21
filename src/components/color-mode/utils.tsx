import React from 'react';
import { screen } from '@testing-library/react';
import { ColorModeOptions } from './index';
import theme from '@chakra-ui/theme';

export const DummyComponent = () => {
  const { useColorMode } = require('./index');
  const { colorMode, toggleColorMode } = useColorMode();

  return (
    <button type="button" onClick={toggleColorMode}>
      {colorMode}
    </button>
  );
};

export const getColorModeButton = () => screen.getByRole('button');

export const defaultThemeOptions = theme.config as Required<ColorModeOptions>;

export const mockIsBrowser = (isBrowser: boolean) => {
  jest.mock('@chakra-ui/utils', () => {
    const actual = jest.requireActual('@chakra-ui/utils');

    return {
      ...actual,
      isBrowser,
    };
  });
};
