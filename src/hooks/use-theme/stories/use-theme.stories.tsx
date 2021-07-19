import { Box, Code, Container, Flex, Text } from '@chakra-ui/layout';
import React from 'react';
import { useTheme } from '../index';

export default {
  title: 'useTheme',
  parameters: {
    componentsSubtitle:
      'useTheme is a custom hook used to get the theme object from context. should must be used inside <ThemeProvider/>',
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
  const theme = useTheme();

  return (
    <>
      <Box maxW="xs">
        <Flex mt={3}>
          <Text>useTheme</Text>
        </Flex>

        <Flex>
          <Code p={5} mt={3} w="xs">
            <pre>{JSON.stringify(theme, null, 2)}</pre>
          </Code>
        </Flex>
      </Box>
    </>
  );
};
