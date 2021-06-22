import React from 'react';
import { render } from '@testing-library/react';
import { DarkMode } from '../index';
import { DummyComponent, getColorModeButton } from '../utils';
import userEvent from '@testing-library/user-event';
import '@testing-library/jest-dom';

describe('<DarkMode />', () => {
  test('is always dark', () => {
    render(
      <DarkMode>
        <DummyComponent />
      </DarkMode>
    );

    const button = getColorModeButton();

    expect(button).toHaveTextContent('dark');

    userEvent.click(button);

    expect(getColorModeButton()).toHaveTextContent('dark');
  });
});
