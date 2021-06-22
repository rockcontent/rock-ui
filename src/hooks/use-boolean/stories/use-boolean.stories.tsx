/* eslint-disable react-hooks/rules-of-hooks */
import { Container } from '@chakra-ui/layout';
import { Button, Code, Text, Flex, Box } from '@chakra-ui/react';
import * as React from 'react';
import { useBoolean } from '../index';

export default {
  title: 'useBoolean',
  decorators: [
    (Story: any) => (
      <Container mt="40px">
        <Story />
      </Container>
    ),
  ],
};

export const basic = () => {
  const [value, { off, on, toggle }] = useBoolean(false);

  return (
    <>
      <Box maxW="xs">
        <Flex mt={3}>
          <Text>useBoolean</Text>
        </Flex>

        <Flex>
          <Code p={5} mt={3} w="xs">
            <pre>
              {JSON.stringify({
                value: value,
              })}
            </pre>
          </Code>
        </Flex>

        <Box maxW="xs">
          <Flex mt={3}>
            <Button
              w="md"
              mr={2}
              colorScheme="teal"
              variant="solid"
              onClick={() => on()}
            >
              on
            </Button>
            <Button
              w="md"
              colorScheme="teal"
              variant="outline"
              onClick={() => off()}
            >
              off
            </Button>
          </Flex>
          <Button
            w="full"
            mr={2}
            mt={3}
            colorScheme="teal"
            variant="solid"
            onClick={() => toggle()}
          >
            toggle
          </Button>
        </Box>
      </Box>
    </>
  );
};
