import { Container } from '@chakra-ui/layout';
import { HStack } from '@chakra-ui/react';
import * as React from 'react';
import { Clickable } from '../clickable';

export default {
  title: 'Clickable',
  parameters: {
    componentSubtitle:
      'React hook that implements all the interactions of a native button component with support for making it focusable even if it is disabled. It can be used with both native button elements or other elements (like div).',
  },
  component: Clickable,
  decorators: [
    (Story: any) => (
      <Container mt="40px">
        <Story />
      </Container>
    ),
  ],
};

export const basicUsage = () => (
  <HStack spacing={2}>
    <Clickable
      as="div"
      onClick={() => {
        alert('clicked');
      }}
      style={{
        userSelect: 'none',
      }}
      _active={{ bg: 'blue.500', color: 'white' }}
      _disabled={{ opacity: 0.4, pointerEvents: 'none' }}
    >
      Clickable
    </Clickable>

    <Clickable
      isDisabled
      isFocusable
      _disabled={{ opacity: 0.4, pointerEvents: 'none' }}
    >
      Clickable
    </Clickable>

    <button
      onClick={() => {
        alert('clicked');
      }}
    >
      Native Button
    </button>
  </HStack>
);

export const clickable = () => <Clickable>clickable</Clickable>;
