import { Container, Stack } from '@chakra-ui/layout';
import * as React from 'react';
import { Spinner } from '../';

export default {
  title: 'Spinner',
  decorators: [
    (Story: any) => (
      <Container mt="40px">
        <Story />
      </Container>
    ),
  ],
};

export const basic = () => <Spinner />;

export const withColor = () => <Spinner color="red.500" />;

export const differentSizes = () => (
  <Stack direction="row" spacing={4}>
    <Spinner size="xs" />
    <Spinner size="sm" />
    <Spinner size="md" />
    <Spinner size="lg" />
    <Spinner size="xl" />
  </Stack>
);

export const customEmptyColor = () => (
  <Spinner
    thickness="4px"
    speed="0.65s"
    emptyColor="gray.200"
    color="blue.500"
    size="xl"
  />
);
