import { Container } from '@chakra-ui/layout';
import { Heading } from '../../heading';
import { Input } from '../../input';
import { Text } from '../../text';
import * as React from 'react';
import { VisuallyHidden } from '../';

export default {
  title: 'VisuallyHidden',
  component: VisuallyHidden,
  decorators: [
    (Story: any) => (
      <Container mt="40px">
        <Story />
      </Container>
    ),
  ],
};

export const hiddenText = () => (
  <>
    <Heading as="h4">There is a hidden text below</Heading>
    <VisuallyHidden>
      <Text>The is a hidden text below</Text>
    </VisuallyHidden>
  </>
);

export const hiddenInput = () => (
  <>
    <Heading as="h4">There is a hidden input below</Heading>
    <VisuallyHidden>
      <Input placeholder="Hidden from user" />
    </VisuallyHidden>
  </>
);
