import React from 'react';
import '@testing-library/jest-dom';
import { render, fireEvent } from '@testing-library/react';
import { Radio, RadioGroup } from '../';

describe('Radio', () => {
  it('renders without crashing', () => {
    const component = (
      <RadioGroup value="1">
        <Radio value="1">First</Radio>
        <Radio value="2">Second</Radio>
        <Radio value="3">Third</Radio>
      </RadioGroup>
    );

    const { getByText, unmount } = render(component);

    const radioElement = getByText('Second');

    expect(radioElement).toBeInTheDocument();

    unmount();
  });
  it('call the callback functions', () => {
    const handleChange = jest.fn();
    const component = (
      <RadioGroup onChange={handleChange} value="1">
        <Radio value="1">First</Radio>
        <Radio value="2">Second</Radio>
        <Radio value="3">Third</Radio>
      </RadioGroup>
    );

    const { getByText, unmount } = render(component);

    const radioElement = getByText('Second');

    fireEvent.click(radioElement);

    expect(handleChange).toBeCalledTimes(1);

    unmount();
  });
});
