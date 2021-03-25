import React, { useState } from 'react';
import { Container } from '../../layout';
import { Datepicker } from '../datepicker';
import { Flex } from '@chakra-ui/react';
import { RangePicker } from '../range';

export default {
  title: 'Date Picker',
  parameters: {
    componentSubtitle: 'A simple and reusable datepicker component for React.',
  },
  decorators: [
    (Story: any) => (
      <Container mt="40px">
        <Story />
      </Container>
    ),
  ],
};

export const Basic = () => {
  const [startDate, setStartDate] = useState<Date | null>(null);
  return (
    <Datepicker
      onChange={setStartDate}
      selected={startDate}
      placeholderText="Single date"
    />
  );
};

export const Clear = () => {
  const [startDate, setStartDate] = useState<Date | null | undefined>(
    new Date()
  );
  return (
    <Flex>
      <Datepicker
        onChange={setStartDate}
        selected={startDate}
        placeholderText="I have been cleared!"
        isClearable
      />
    </Flex>
  );
};
Clear.parameters = {
  docs: {
    storyDescription:
      'Add the attribute "isClearable" so that the clear button appears in the input.',
  },
};

export const Range = () => {
  const [startDate, setStartDate] = useState<moment.Moment>(null);
  const [endDate, setEndDate] = useState<moment.Moment>(null);
  return (
    <Flex>
      <RangePicker
        startDate={startDate}
        endDate={endDate}
        onChangeStartDate={setStartDate}
        onChangeEndDate={setEndDate}
      />
    </Flex>
  );
};
Range.parameters = {
  docs: {
    storyDescription:
      'Add the attribute "selectsStart" in the first date picker and add the attribute "selectsEnd" in the last date picker',
  },
};
export const MonthPicker = () => {
  const [startDate, setStartDate] = useState<Date | null>(null);
  return (
    <Datepicker
      onChange={setStartDate}
      selected={startDate}
      placeholderText="Month Picker"
      dateFormat="MM/yyyy"
      showMonthYearPicker={true}
    />
  );
};
MonthPicker.parameters = {
  docs: {
    storyDescription:
      'Add the attribute "showMonthYearPicker" in the date picker.',
  },
};
export const YearPicker = () => {
  const [startDate, setStartDate] = useState<Date | null>(null);
  return (
    <Datepicker
      onChange={setStartDate}
      selected={startDate}
      placeholderText="Year Picker"
      dateFormat="yyyy"
      showYearPicker={true}
    />
  );
};
YearPicker.parameters = {
  docs: {
    storyDescription: 'Add the attribute "showYearPicker" in the date picker.',
  },
};
export const DateRangeWithDisabled = () => {
  const [startDate, setStartDate] = useState<Date | null>(null);
  return (
    <Datepicker
      onChange={setStartDate}
      selected={startDate}
      placeholderText="Date Range with disabled"
      minDate={new Date()}
      maxDate={new Date(new Date().setMonth(new Date().getMonth() + 5))}
      showDisabledMonthNavigation
    />
  );
};
DateRangeWithDisabled.parameters = {
  docs: {
    storyDescription:
      'Add the "showDisabledMonthNavigation" attribute to disable navigation for a certain period.',
  },
};

export const DisableDatepicker = () => {
  const [startDate, setStartDate] = useState<Date | null>(null);
  return (
    <Datepicker
      onChange={setStartDate}
      selected={startDate}
      placeholderText="Disable datepicker"
      disabled
    />
  );
};
DisableDatepicker.parameters = {
  docs: {
    storyDescription:
      'Add the "disabled" attribute to disable navigation for a certain period.',
  },
};
