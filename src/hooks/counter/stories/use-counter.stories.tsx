/* eslint-disable react-hooks/rules-of-hooks */
import { Container, Flex, Box } from '@chakra-ui/layout';
import { Button, Code, Input } from '@chakra-ui/react';
import * as React from 'react';
import { useCounter } from '../index';

export default {
  title: 'Counter',
  decorators: [
    (Story: any) => (
      <Container mt="40px">
        <Story />
      </Container>
    ),
  ],
};

export const basic = () => {
  const [val, setVal] = React.useState<any>('8...4,.4');
  const counter = useCounter({
    value: val,
    defaultValue: '8...4,.4',
    max: 10,
    min: 0,
    step: 0.1,
    keepWithinRange: false,
    precision: 4,
    onChange: next => setVal(next),
  });

  return (
    <>
      <Box maxW="xs">
        <Flex mt={3}>
          <Input
            type="text"
            value={counter.value}
            style={{ background: 'transparent' }}
            onChange={e => counter.update(e.target.value)}
          />
        </Flex>

        <Flex>
          <Code p={5} mt={3} w="xs">
            <pre>
              {JSON.stringify(
                {
                  value: counter.value,
                  valueAsNumber: counter.valueAsNumber,
                  outOfRange: counter.isOutOfRange,
                },
                null,
                2
              )}
            </pre>
          </Code>
        </Flex>

        <Flex mt={3}>
          <Button
            w="md"
            mr={2}
            colorScheme="teal"
            variant="solid"
            onClick={() => counter.increment()}
          >
            Increment
          </Button>
          <Button
            w="md"
            colorScheme="teal"
            variant="outline"
            onClick={() => counter.decrement()}
          >
            Decrement
          </Button>
        </Flex>
      </Box>
    </>
  );
};
