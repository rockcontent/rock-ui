import React from 'react';
import '@testing-library/jest-dom';
import { render } from '@testing-library/react';
import { AsyncSelect } from '../';
import { colourOptions } from '../constants';

const filterColors = (inputValue: any) => {
  return colourOptions.filter(i =>
    i.label.toLowerCase().includes(inputValue.toLowerCase())
  );
};

const loadOptions = (inputValue: any, callback: any) => {
  setTimeout(() => {
    callback(filterColors(inputValue));
  }, 1000);
};

describe('Async Select', () => {
  it('renders without crashing', () => {
    const component = (
      <AsyncSelect cacheOptions loadOptions={loadOptions} defaultOptions />
    );

    const { getByText, unmount } = render(component);

    const selectedValue = getByText('Select...');

    expect(selectedValue).toBeInTheDocument();

    unmount();
  });
  it('calls the callback functions', () => {
    const handleLoad = jest.fn();
    const component = (
      <AsyncSelect cacheOptions loadOptions={handleLoad} defaultOptions />
    );

    const { unmount } = render(component);

    expect(handleLoad).toBeCalledTimes(1);

    unmount();
  });
});
