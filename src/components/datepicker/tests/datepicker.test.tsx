import React from 'react';
import '@testing-library/jest-dom';
import { render, fireEvent } from '@testing-library/react';
import { Datepicker } from '../';

describe('Datepicker', () => {
  it('Datepicker renders correctly', () => {
    const setState = jest.fn();
    const component = <Datepicker onChange={setState} />;
    const { unmount } = render(component);
    expect(component).toBeTruthy();
    unmount();
  });

  it('Should show empty inputs when no values are provided', () => {
    const setState = jest.fn();
    const { getByTestId, unmount } = render(<Datepicker onChange={setState} />);
    expect(getByTestId('test-datepicker')).toHaveValue('');
    unmount();
  });

  it('Should show filled in inputs when values are provided",', () => {
    const setState = jest.fn();
    const { getByTestId, unmount } = render(
      <Datepicker onChange={setState} value="10/01/2020" />
    );
    expect(getByTestId('test-datepicker')).toHaveValue('10/01/2020');
    unmount();
  });

  it('Should show filled entries when values are provided by onChange', () => {
    const setState = jest.fn();
    const { getByTestId, unmount } = render(<Datepicker onChange={setState} />);
    const inputDatePicker = getByTestId('test-datepicker');
    fireEvent.change(inputDatePicker, { target: { value: '10/01/2021' } });

    expect(inputDatePicker).toHaveValue('10/01/2021');
    unmount();
  });
});
