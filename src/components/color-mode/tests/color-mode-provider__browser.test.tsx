import { render } from '@testing-library/react';
import React from 'react';
import {
  defaultThemeOptions,
  DummyComponent,
  getColorModeButton,
  mockIsBrowser,
} from '../utils';
import '@testing-library/jest-dom';

beforeEach(() => {
  jest.resetAllMocks();
  mockIsBrowser(true);
});

describe('<ColorModeProvider /> localStorage browser', () => {
  test('by default, picks from theme.config.initialColorMode', () => {
    const { ColorModeProvider } = require('../index');

    render(
      <ColorModeProvider options={defaultThemeOptions}>
        <DummyComponent />
      </ColorModeProvider>
    );

    expect(getColorModeButton()).toHaveTextContent(
      defaultThemeOptions.initialColorMode
    );
  });
});
