import React, { useState } from 'react';
import { Container } from '../../layout';
import { Datepicker } from '../datepicker';

export default {
  title: 'Datepicker',
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
      isClearable
    />
  );
};
