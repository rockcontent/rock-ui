import React, { useEffect, useRef, useState } from 'react';
import ReactDatePicker, { ReactDatePickerProps } from 'react-datepicker';
import 'react-datepicker/dist/react-datepicker.css';
import 'react-datepicker/dist/react-datepicker-cssmodules.css';
import TemplateInputDatepicker from './template-input-datepicker';
import TemplateHeaderDatepicker from './template-header-datepicker';
import ContainerDatepicker from './container-datepicker';
import { StyledBaseReactDatePicker } from './styled';

export enum DatePickerMode {
  year = 'year',
  month = 'month',
  day = 'day',
}

const Datepicker = React.forwardRef<ReactDatePicker, ReactDatePickerProps>(
  (props, ref: any) => {
    const {
      showYearPicker = false,
      shouldCloseOnSelect = false,
      showMonthYearPicker = false,
    } = props;

    const [userSelectedMode, setUserSelectedMode] = useState<
      DatePickerMode | undefined
    >();
    const [mode, setMode] = useState<DatePickerMode>(DatePickerMode.day);
    const [date, setDate] = useState(props.selected);
    const datepickerRef = useRef<ReactDatePicker | null>();

    useEffect(() => {
      if (!showYearPicker && !showMonthYearPicker) {
        setMode(DatePickerMode.day);
        setUserSelectedMode(DatePickerMode.day);
      }

      if (showMonthYearPicker) {
        setMode(DatePickerMode.month);
        setUserSelectedMode(DatePickerMode.month);
      }

      if (showYearPicker) {
        setMode(DatePickerMode.year);
        setUserSelectedMode(DatePickerMode.year);
      }
    }, [showMonthYearPicker, showYearPicker]);

    const onSelect = (newDate: Date) => {
      setDate(newDate);
      if (userSelectedMode !== mode) toPrevMode();
    };

    const goToThisDay = () => {
      datepickerRef?.current?.setOpen(false);
      setDate(new Date());
    };

    const goToThisMonth = () => {
      setDate(new Date());
      setMode(DatePickerMode.day);
      datepickerRef?.current?.setOpen(false);
      setTimeout(() => {
        datepickerRef?.current?.setOpen(true);
      });
    };

    const goToThisYear = () => {
      setDate(new Date());
      setMode(DatePickerMode.month);
      datepickerRef?.current?.setOpen(false);
      setTimeout(() => {
        datepickerRef?.current?.setOpen(true);
      });
    };

    const toPrevMode = () => {
      if (mode === DatePickerMode.month) setMode(DatePickerMode.day);
      if (mode === DatePickerMode.year) setMode(DatePickerMode.month);
    };

    const toNextMode = () => {
      if (mode === DatePickerMode.day) setMode(DatePickerMode.month);
      if (mode === DatePickerMode.month) setMode(DatePickerMode.year);

      if (mode === DatePickerMode.year && userSelectedMode) {
        setMode(userSelectedMode);
      }

      if (mode === DatePickerMode.year && !userSelectedMode) {
        setMode(DatePickerMode.day);
      }
    };

    const closeOnSelect =
      shouldCloseOnSelect ||
      userSelectedMode === mode ||
      mode === DatePickerMode.day;

    return (
      <StyledBaseReactDatePicker>
        <ReactDatePicker
          {...props}
          ref={componentRef => {
            datepickerRef && (datepickerRef.current = componentRef);
            ref && (ref.current = componentRef);
          }}
          customInput={<TemplateInputDatepicker />}
          tabIndex={1}
          fixedHeight
          onSelect={onSelect}
          selected={date}
          shouldCloseOnSelect={closeOnSelect}
          renderCustomHeader={props => (
            <TemplateHeaderDatepicker
              {...props}
              mode={mode}
              toNextMode={toNextMode}
            />
          )}
          showMonthYearPicker={mode === DatePickerMode.month}
          showYearPicker={mode === DatePickerMode.year}
          clearButtonTitle="Clear"
          calendarContainer={props => (
            <ContainerDatepicker
              {...props}
              goToThisDay={goToThisDay}
              goToThisMonth={goToThisMonth}
              goToThisYear={goToThisYear}
              setDate={setDate}
              mode={mode}
              date={date}
            />
          )}
        />
      </StyledBaseReactDatePicker>
    );
  }
);

export { Datepicker, ReactDatePickerProps };
