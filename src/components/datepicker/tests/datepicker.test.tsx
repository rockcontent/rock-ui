import React from 'react';
import '@testing-library/jest-dom';
import { render, fireEvent } from '@testing-library/react';
import { Datepicker } from '../';
import { RangePicker } from '../range';
import moment from 'moment';

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
    expect(getByTestId('test-datepicker-input')).toHaveValue('');
    unmount();
  });

  it('Should show filled in inputs when values are provided",', () => {
    const setState = jest.fn();
    const dateSelected = new Date('August 19, 2020 23:15:30');
    const { getByTestId, unmount } = render(
      <Datepicker onChange={setState} selected={dateSelected} />
    );
    expect(getByTestId('test-datepicker-input')).toHaveValue('08/19/2020');
    unmount();
  });

  it('Should show filled entries when values are provided by onChange', () => {
    const setState = jest.fn();
    const { getByTestId, unmount } = render(<Datepicker onChange={setState} />);
    const inputDatePicker = getByTestId('test-datepicker-input');
    fireEvent.change(inputDatePicker, { target: { value: '10/01/2021' } });

    expect(inputDatePicker).toHaveValue('10/01/2021');
    unmount();
  });

  it('Should change to month picker when clicking on the title', () => {
    const setState = jest.fn();
    const { unmount, getByTestId, baseElement } = render(
      <Datepicker onChange={setState} open />
    );

    const datepickerHeaderButton = getByTestId('test-datepicker-header-button');

    fireEvent.click(datepickerHeaderButton);

    expect(
      baseElement.querySelector('.react-datepicker__month-wrapper')
    ).not.toBeNull();

    unmount();
  });

  it('Should change to year picker when clicking on the title twice', () => {
    const setState = jest.fn();
    const { unmount, getByTestId, baseElement } = render(
      <Datepicker onChange={setState} open />
    );

    [1, 2].forEach(() => {
      fireEvent.click(getByTestId('test-datepicker-header-button'));
    });

    expect(
      baseElement.querySelector('.react-datepicker__year-wrapper')
    ).not.toBeNull();

    unmount();
  });

  it('Should stay the same when clicking on the title three times', () => {
    const setState = jest.fn();
    const { unmount, getByTestId, baseElement } = render(
      <Datepicker onChange={setState} open />
    );

    [1, 2, 3].forEach(() => {
      fireEvent.click(getByTestId('test-datepicker-header-button'));
    });

    expect(
      baseElement.querySelector('.react-datepicker__year-wrapper')
    ).not.toBeNull();

    unmount();
  });

  it('Range picker should open when focus on startDate', () => {
    const setState = jest.fn();

    const { unmount, baseElement, getAllByTestId } = render(
      <RangePicker
        onChangeEndDate={setState}
        onChangeStartDate={setState}
        startDate={moment()}
        endDate={moment()}
      />
    );

    fireEvent.focus(getAllByTestId('test-datepicker-input')[0]);

    expect(baseElement.querySelector('.DayPicker')).not.toBeNull();

    unmount();
  });

  it('Range picker should open when focus on endDate', () => {
    const setState = jest.fn();

    const { unmount, baseElement, getAllByTestId } = render(
      <RangePicker
        onChangeEndDate={setState}
        onChangeStartDate={setState}
        startDate={moment()}
        endDate={moment()}
      />
    );

    fireEvent.focus(getAllByTestId('test-datepicker-input')[1]);

    expect(baseElement.querySelector('.DayPicker')).not.toBeNull();

    unmount();
  });
});
