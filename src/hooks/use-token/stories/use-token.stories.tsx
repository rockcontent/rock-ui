import { Box, Code, Container, Heading } from '@chakra-ui/layout';
import * as React from 'react';
import { useToken } from '../index';

export default {
  title: 'useToken',
  parameters: {
    componentSubtitle:
      'useToken is a custom hook used to resolve design tokens from the theme.',
  },
  decorators: [
    (Story: any) => (
      <Container mt="40px">
        <Story />
      </Container>
    ),
  ],
};

export const basic = () => {
  const UseToken = () => {
    const [red100, blue200] = useToken(
      // the key within the theme, in this case `theme.colors`
      'colors',
      // the subkey(s), resolving to `theme.colors.red.100`
      ['red.100', 'blue.200']
      // a single fallback or fallback array matching the length of the previous arg
    );

    return (
      <Box p={4} boxShadow={`inset 0 4px 0 ${red100}, 0 0 8px ${blue200}`}>
        You can utilize <Code>useToken</Code> to create a <Code>boxShadow</Code>{' '}
        with colors from your theme.
      </Box>
    );
  };

  return (
    <Box maxW="xs">
      <Heading>useToken</Heading>

      <Box my={4}>
        <UseToken />
      </Box>
    </Box>
  );
};
