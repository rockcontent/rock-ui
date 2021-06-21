import React from 'react';

import { render } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import {
  defaultThemeOptions,
  DummyComponent,
  getColorModeButton,
} from '../utils';
import { ColorModeProvider } from '../index';
import '@testing-library/jest-dom';

describe('<ColorModeProvider />', () => {
  test('toggleColorMode changes the color', () => {
    render(
      <ColorModeProvider options={defaultThemeOptions}>
        <DummyComponent />
      </ColorModeProvider>
    );

    const button = getColorModeButton();

    expect(button).toHaveTextContent(defaultThemeOptions.initialColorMode);

    userEvent.click(button);

    expect(getColorModeButton()).not.toHaveTextContent(
      defaultThemeOptions.initialColorMode
    );
  });

  test('is controlled given a value', () => {
    const value = 'dark';

    render(
      <ColorModeProvider options={defaultThemeOptions} value={value}>
        <DummyComponent />
      </ColorModeProvider>
    );

    const button = getColorModeButton();

    expect(button).toHaveTextContent(value);

    userEvent.click(button);

    expect(getColorModeButton()).toHaveTextContent(value);
  });
});
