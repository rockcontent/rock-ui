import React from 'react';
import ReactDatePicker, { ReactDatePickerProps } from 'react-datepicker';
import 'react-datepicker/dist/react-datepicker.css';
import 'react-datepicker/dist/react-datepicker-cssmodules.css';
import TemplateInputDatepicker from './template-input-datepicker';

const Datepicker = React.forwardRef<
  ReactDatePicker | null,
  ReactDatePickerProps
>((props, ref) => (
  <ReactDatePicker
    {...props}
    customInput={<TemplateInputDatepicker />}
    ref={ref}
  />
));

export { Datepicker, ReactDatePickerProps };
