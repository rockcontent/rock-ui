import React, { useEffect, useRef, useState } from 'react';
import ReactDatePicker, { ReactDatePickerProps } from 'react-datepicker';
import 'react-datepicker/dist/react-datepicker.css';
import 'react-datepicker/dist/react-datepicker-cssmodules.css';
import TemplateInputDatepicker from './template-input-datepicker';
import TemplateHeaderDatepicker from './template-header-datepicker';
import ContainerDatepicker from './container-datepicker';
import { StyledBaseReactDatePicker } from './styled';
import DatePickerMode from './utils/datepicker-mode';

const Datepicker = React.forwardRef<ReactDatePicker, ReactDatePickerProps>(
  (props, ref: any) => {
    const {
      showYearPicker = false,
      shouldCloseOnSelect = false,
      showMonthYearPicker = false,
      onChange,
      selected,
    } = props;

    const [userSelectedMode, setUserSelectedMode] = useState<
      DatePickerMode | undefined
    >();
    const [mode, setMode] = useState<DatePickerMode>(DatePickerMode.day);

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

    const onChangeHandler = (
      date: Date | [Date, Date] | /* for selectsRange */ null,
      event?: React.SyntheticEvent<any> | undefined
    ) => {
      onChange(date, event);
      if (userSelectedMode !== mode) toPrevMode();
    };

    const goToThisDay = () => {
      datepickerRef?.current?.setOpen(false);
      onChangeHandler(new Date());
    };

    const goToThisMonth = () => {
      onChangeHandler(new Date());
      datepickerRef?.current?.setOpen(false);
      if (userSelectedMode !== mode) {
        toPrevMode();
        setTimeout(() => {
          datepickerRef?.current?.setOpen(true);
        });
      }
    };

    const goToThisYear = () => {
      onChangeHandler(new Date());
      datepickerRef?.current?.setOpen(false);
      if (userSelectedMode !== mode) {
        toPrevMode();
        setTimeout(() => {
          datepickerRef?.current?.setOpen(true);
        });
      }
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
          customInput={<TemplateInputDatepicker isDisabled={props.disabled} />}
          tabIndex={1}
          fixedHeight
          isClearable
          selected={selected}
          data-testid="test-datepicker"
          onChange={onChangeHandler}
          shouldCloseOnSelect={closeOnSelect}
          renderCustomHeader={props => (
            <TemplateHeaderDatepicker
              {...props}
              mode={mode}
              data-testid="test-template-header"
              toNextMode={toNextMode}
            />
          )}
          showMonthYearPicker={mode === DatePickerMode.month}
          showYearPicker={mode === DatePickerMode.year}
          clearButtonTitle="Clear"
          formatWeekDay={nameOfDay => nameOfDay.substr(0, 1)}
          calendarContainer={props => (
            <ContainerDatepicker
              {...props}
              goToThisDay={goToThisDay}
              goToThisMonth={goToThisMonth}
              goToThisYear={goToThisYear}
              setDate={onChangeHandler}
              mode={mode}
              date={selected}
            />
          )}
        />
      </StyledBaseReactDatePicker>
    );
  }
);

export { Datepicker, ReactDatePickerProps };
