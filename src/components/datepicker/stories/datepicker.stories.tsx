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
    <>
      <Datepicker
        onChange={setStartDate}
        selected={startDate}
        placeholderText="I have been cleared!"
        isClearable
      />
    </>
  );
};

export const Range = () => {
  const [startDate, setStartDate] = useState(new Date('2014/02/08'));
  const [endDate, setEndDate] = useState(new Date('2014/02/10'));
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

Clear.story = {
  parameters: {
    docs: {
      storyDescription:
        'Add the attribute "isClearable" so that the clear button appears in the input.',
    },
  },
};
