import React, { useState } from 'react';
import ReactDatePicker, { ReactDatePickerProps } from 'react-datepicker';
import 'react-datepicker/dist/react-datepicker.css';
import 'react-datepicker/dist/react-datepicker-cssmodules.css';
import TemplateInputDatepicker from './template-input-datepicker';
import TemplateHeaderDatepicker from './template-header-datepicker';
import { StyledBaseReactDatePicker } from './styled';

const Datepicker = React.forwardRef<
  ReactDatePicker | null,
  ReactDatePickerProps
>((props, ref) => {
  let [monthYearPicker, setMonthYearPicker] = useState<boolean>(false);
  let [yearPicker, setYearPicker] = useState<boolean>(false);
  let [closeOnSelect, setCloseOnSelect] = useState<boolean>(false);

  const changeTypeCalendar = (event: any) => {
    const classElement = event.target.className;
    const day = classElement.indexOf('react-datepicker__day') !== -1;
    const month = classElement.indexOf('react-datepicker__month-text') !== -1;

    if (day) {
      setCloseOnSelect(true);
    } else if (month) {
      setYearPicker(false);
      setMonthYearPicker(false);
    } else {
      setYearPicker(false);
      setMonthYearPicker(true);
    }
  };

  return (
    <StyledBaseReactDatePicker>
      <ReactDatePicker
        {...props}
        ref={ref}
        customInput={<TemplateInputDatepicker />}
        tabIndex={1}
        fixedHeight
        onSelect={(date, event) => changeTypeCalendar(event)}
        shouldCloseOnSelect={closeOnSelect}
        renderCustomHeader={props => (
          <TemplateHeaderDatepicker
            {...props}
            setShowMonthYearPicker={setMonthYearPicker}
            setShowYearPicker={setYearPicker}
            monthYearPicker={monthYearPicker}
            yearPicker={yearPicker}
          />
        )}
        showMonthYearPicker={monthYearPicker || props.showMonthYearPicker}
        showYearPicker={yearPicker || props.showYearPicker}
        todayButton="Today"
        clearButtonTitle="Clear"
      />
    </StyledBaseReactDatePicker>
  );
});

export { Datepicker, ReactDatePickerProps };
