import React from 'react';
import '@testing-library/jest-dom';
import { render } from '@testing-library/react';
import { NativeSelect as Select } from '../';

describe('Native Select', () => {
  it('renders without crashing', () => {
    const component = (
      <Select placeholder="Select option" data-testid="test-select">
        <option value="option1" data-testid="test-option">
          Option 1
        </option>
        <option value="option2">Option 2</option>
        <option value="option3">Option 3</option>
      </Select>
    );

    const { getByTestId, unmount } = render(component);

    const selectElement = getByTestId('test-select');
    const optionElement = getByTestId('test-option');

    expect(selectElement).toBeInTheDocument();
    expect(optionElement).toBeInTheDocument();

    unmount();
  });
});
