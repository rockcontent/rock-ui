import { Container } from '@chakra-ui/layout';
import * as React from 'react';
import { Kbd } from '../';

export default {
  title: 'Kbd',
  component: Kbd,

  decorators: [
    (Story: any) => (
      <Container mt="40px">
        <Story />
      </Container>
    ),
  ],
};

export const basic = () => (
  <span>
    <Kbd>shift</Kbd> + <Kbd>H</Kbd>
  </span>
);

export const withThen = () => (
  <span>
    <Kbd>shift</Kbd> then <Kbd>H</Kbd>
  </span>
);
