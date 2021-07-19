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
  const [startDate, setStartDate] = useState<Date | null | any>(null);

  return (
    <Datepicker
      onChange={setStartDate}
      selected={startDate}
      placeholderText="Single date"
    />
  );
};

export const Range = () => {
  const [startDate, setStartDate] = useState<moment.Moment | null>(null);
  const [endDate, setEndDate] = useState<moment.Moment | null>(null);
  return (
    <Flex>
      <RangePicker
        startDate={startDate}
        endDate={endDate}
        startDatePlaceholder="Start Date"
        endDatePlaceholder="End Date"
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
  const [startDate, setStartDate] = useState<Date | null | any>(null);
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
  const [startDate, setStartDate] = useState<Date | null | any>(null);
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
export const DateWithDisabledNavigationShown = () => {
  const [startDate, setStartDate] = useState<Date | null | any>(null);
  return (
    <Datepicker
      onChange={setStartDate}
      selected={startDate}
      placeholderText="Date with disabled"
      minDate={new Date()}
      maxDate={new Date(new Date().setMonth(new Date().getMonth() + 5))}
      showDisabledMonthNavigation
    />
  );
};
DateWithDisabledNavigationShown.parameters = {
  docs: {
    storyDescription:
      'Add the "showDisabledMonthNavigation" attribute to disable navigation for a certain period.',
  },
};

export const DisableDatePicker = () => {
  const [startDate, setStartDate] = useState<Date | null | any>(null);
  return (
    <Datepicker
      onChange={setStartDate}
      selected={startDate}
      placeholderText="Disable Date Picker"
      disabled
    />
  );
};
DisableDatePicker.parameters = {
  docs: {
    storyDescription:
      'Add the "disabled" attribute to disable navigation for a certain period.',
  },
};
