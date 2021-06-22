import * as React from 'react';
import { render, screen, fireEvent } from '@testing-library/react';
import { Clickable } from '../index';

describe('clickable', () => {
  it('should render correctly', () => {
    render(<Clickable>clickable</Clickable>);

    expect(screen.getByText('clickable')).toMatchInlineSnapshot(`
    <button
      class="chakra-button css-5c2176"
      type="button"
    >
      clickable
    </button>
  `);
  });

  it('should render when disabled and focusable', () => {
    render(
      <Clickable isDisabled isFocusable>
        clickable
      </Clickable>
    );

    expect(screen.getByText('clickable')).toMatchInlineSnapshot(`
    <button
      aria-disabled="true"
      class="chakra-button css-5c2176"
      type="button"
    >
      clickable
    </button>
  `);
  });

  it('should click correctly', () => {
    const fn = jest.fn();
    render(<Clickable onClick={fn}>clickable</Clickable>);

    const clickable = screen.getByText('clickable');

    expect(fn).toHaveBeenCalledTimes(0);
    fireEvent.click(clickable);
    expect(fn).toHaveBeenCalledTimes(1);
  });

  it('should not click if disabled', () => {
    const fn = jest.fn();
    render(
      <Clickable onClick={fn} isDisabled>
        clickable
      </Clickable>
    );

    const clickable = screen.getByText('clickable');

    fireEvent.click(clickable);
    expect(fn).toHaveBeenCalledTimes(0);
  });

  it('non-native: should click on press `space` or `enter`', () => {
    const fn = jest.fn();
    render(
      <Clickable as="div" onClick={fn}>
        clickable
      </Clickable>
    );

    const clickable = screen.getByText('clickable');

    fireEvent.keyDown(clickable, { key: 'Enter' });
    expect(fn).toHaveBeenCalledTimes(1);

    fireEvent.keyDown(clickable, { key: ' ' });
    fireEvent.keyUp(clickable, { key: ' ' });

    expect(fn).toHaveBeenCalledTimes(2);
  });
});
