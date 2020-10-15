import React from 'react';
import '@testing-library/jest-dom';
import { render, fireEvent } from '@testing-library/react';
import { Select } from '../';
import { colourOptions } from '../constants';

describe('Select', () => {
  it('renders without crashing', () => {
    const component = <Select />;

    const { getByText, unmount } = render(component);

    const selectedValue = getByText('Select...');

    expect(selectedValue).toBeInTheDocument();

    unmount();
  });
  it('calls the callback functions', () => {
    const handleChange = jest.fn();
    const component = (
      <Select
        defaultValue={colourOptions[0]}
        defaultMenuIsOpen
        name="colors"
        options={colourOptions}
        className="basic-multi-select"
        classNamePrefix="select"
        onChange={handleChange}
      />
    );

    const { getByText, unmount } = render(component);

    const selectedValue = getByText('Orange');

    fireEvent.click(selectedValue);

    expect(handleChange).toBeCalledTimes(1);

    unmount();
  });
});
