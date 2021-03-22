import React, { useState } from 'react';
import { Container } from '../../layout';
import { Datepicker } from '../datepicker';
import { Flex } from '@chakra-ui/react';

export default {
  title: 'Datepicker',
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
  const [startDate, setStartDate] = useState<Date | null>(new Date());
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
  const [startDate, setStartDate] = useState(new Date('2014/02/08'));
  const [endDate, setEndDate] = useState(new Date('2014/02/20'));
  return (
    <Flex>
      <Datepicker
        selected={startDate}
        onChange={date => setStartDate(date)}
        selectsStart
        startDate={startDate}
        endDate={endDate}
      />
      <Datepicker
        selected={endDate}
        onChange={date => setEndDate(date)}
        selectsEnd
        startDate={startDate}
        endDate={endDate}
        minDate={startDate}
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
      showMonthYearPicker
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
      showYearPicker
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
