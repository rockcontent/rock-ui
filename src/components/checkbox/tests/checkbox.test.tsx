import React from 'react';
import '@testing-library/jest-dom';
import { render, fireEvent } from '@testing-library/react';
import { Checkbox } from '../';

describe('Checkbox', () => {
  it('renders without crashing', () => {
    const component = <Checkbox defaultChecked>Checkbox</Checkbox>;

    const { getByText, unmount } = render(component);

    const checkboxElement = getByText('Checkbox');

    expect(checkboxElement).toBeInTheDocument();

    unmount();
  });
  it('call the callback functions', () => {
    const handleChange = jest.fn();
    const component = (
      <Checkbox defaultChecked onChange={handleChange}>
        Checkbox
      </Checkbox>
    );

    const { getByText, unmount } = render(component);

    const checkboxElement = getByText('Checkbox');

    fireEvent.click(checkboxElement);

    expect(handleChange).toBeCalledTimes(1);

    unmount();
  });
});
