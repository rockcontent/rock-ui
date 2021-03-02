import React from 'react';
import ReactDatePicker, { ReactDatePickerProps } from 'react-datepicker';
import 'react-datepicker/dist/react-datepicker.css';
import 'react-datepicker/dist/react-datepicker-cssmodules.css';
import TemplateInputDatepicker from './template-input-datepicker';
import { StyledBaseReactDatePicker } from './styled';

const Datepicker = React.forwardRef<
  ReactDatePicker | null,
  ReactDatePickerProps
>((props, ref) => (
  <StyledBaseReactDatePicker>
    <ReactDatePicker
      {...props}
      customInput={<TemplateInputDatepicker />}
      ref={ref}
    />
  </StyledBaseReactDatePicker>
));

export { Datepicker, ReactDatePickerProps };
