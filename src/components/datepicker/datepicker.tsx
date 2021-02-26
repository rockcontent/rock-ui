import React from 'react';
import ReactDatePicker, { ReactDatePickerProps } from 'react-datepicker';
import 'react-datepicker/dist/react-datepicker.css';
import 'react-datepicker/dist/react-datepicker-cssmodules.css';
import TemplateInputDatepicker from './template-input-datepicker';

const Datepicker: React.FC<ReactDatePickerProps> = props => (
  <ReactDatePicker {...props} customInput={<TemplateInputDatepicker />} />
);

export { Datepicker, ReactDatePickerProps };
