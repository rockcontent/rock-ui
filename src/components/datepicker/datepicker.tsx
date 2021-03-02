import React from 'react';
import ReactDatePicker, { ReactDatePickerProps } from 'react-datepicker';
import 'react-datepicker/dist/react-datepicker.css';
import 'react-datepicker/dist/react-datepicker-cssmodules.css';
import TemplateInputDatepicker from './template-input-datepicker';
import { StyledBaseReactDatePicker, Teste } from './styled';
// import './default.css';

const Datepicker = React.forwardRef<
  ReactDatePicker | null,
  ReactDatePickerProps
>((props, ref) => {
  console.log('---');
  console.log(StyledBaseReactDatePicker);
  return (
    <>
      <Teste>Oii</Teste>
      <StyledBaseReactDatePicker
        {...props}
        customInput={<TemplateInputDatepicker />}
        ref={ref}
      />
    </>
  );
});

export { Datepicker, ReactDatePickerProps };
