import React from 'react';
import '@testing-library/jest-dom';
import { render, fireEvent } from '@testing-library/react';
import { CreatableSelect } from '../';
import { colourOptions } from '../constants';

describe('Creatable Select', () => {
  it('renders without crashing', () => {
    const component = <CreatableSelect />;

    const { getByText, unmount } = render(component);

    const selectedValue = getByText('Select...');

    expect(selectedValue).toBeInTheDocument();

    unmount();
  });
  it('calls the callback functions', () => {
    const handleChange = jest.fn();
    const handleCreate = jest.fn();
    const component = (
      <CreatableSelect
        options={colourOptions}
        defaultMenuIsOpen
        defaultInputValue="testvalue"
        onCreateOption={handleCreate}
        onChange={handleChange}
      />
    );

    const utils = render(component);

    const input = utils.getByDisplayValue('testvalue') as HTMLInputElement;

    expect(input).toBeInTheDocument();

    fireEvent.change(input, { target: { value: 'anothervalue' } });

    expect(input.value).toBe('anothervalue');

    const createNewOptionButton = utils.getByText('Create "anothervalue"');

    expect(createNewOptionButton).toBeInTheDocument();

    fireEvent.click(createNewOptionButton);

    expect(handleCreate).toBeCalledTimes(1);

    utils.unmount();
  });
});
