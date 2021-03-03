import React, { useState } from 'react';
import { Container } from '../../layout';
import { Datepicker } from '../datepicker';

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
      placeholderText="Start Date"
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

Clear.story = {
  parameters: {
    docs: {
      storyDescription:
        'Add the attribute "isClearable" so that the clear button appears in the input.',
    },
  },
};
