import * as React from 'react';
import { Container, Stack } from '@chakra-ui/layout';
import { AddIcon } from '@chakra-ui/icons';
import { NativeSelect as Select } from '../';

export default {
  title: 'Native Select',
  decorators: [
    (Story: any) => (
      <Container mt="40px">
        <Story />
      </Container>
    ),
  ],
};

export const basic = () => (
  <Select placeholder="Select option">
    <option value="option1">Option 1</option>
    <option value="option2">Option 2</option>
    <option value="option3">Option 3</option>
  </Select>
);

export const withSizes = () => (
  <Stack spacing={3}>
    <Select placeholder="large size" size="lg" />
    <Select placeholder="default size" size="md" />
    <Select placeholder="small size" size="sm" />
  </Stack>
);

export const withVariants = () => (
  <Stack spacing={3}>
    <Select variant="outline" placeholder="Outline" />
    <Select variant="filled" placeholder="Filled" />
    <Select variant="flushed" placeholder="Flushed" />
    <Select variant="unstyled" placeholder="Unstyled" />
  </Stack>
);

export const withCustomIcon = () => (
  <Select icon={<AddIcon />} iconSize={8} placeholder="Woohoo! A new icon" />
);

export const withCustomBackground = () => (
  <Select
    bg="tomato"
    borderColor="tomato"
    color="white"
    placeholder="Woohoo! A new background color!"
  />
);
