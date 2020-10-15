import React from 'react';
import '@testing-library/jest-dom';
import { render } from '@testing-library/react';
import { AsyncCreatableSelect } from '../';
import { colourOptions } from '../constants';

const filterColors = (inputValue: string) => {
  return colourOptions.filter(i =>
    i.label.toLowerCase().includes(inputValue.toLowerCase())
  );
};

const promiseOptions = (inputValue: string) =>
  new Promise(resolve => {
    setTimeout(() => {
      resolve(filterColors(inputValue));
    }, 1000);
  });

describe('Async Creatable Select', () => {
  it('renders without crashing', () => {
    const component = (
      <AsyncCreatableSelect
        cacheOptions
        defaultOptions
        loadOptions={promiseOptions}
      />
    );

    const { getByText, unmount } = render(component);

    const selectedValue = getByText('Select...');

    expect(selectedValue).toBeInTheDocument();

    unmount();
  });
  it('calls the callback functions', () => {
    const handleLoad = jest.fn();
    const component = (
      <AsyncCreatableSelect
        cacheOptions
        defaultOptions
        loadOptions={handleLoad}
      />
    );

    const { unmount } = render(component);

    expect(handleLoad).toBeCalledTimes(1);

    unmount();
  });
});
