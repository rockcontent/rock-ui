/* eslint-disable react-hooks/rules-of-hooks */
import { Container } from '@chakra-ui/layout';
import {
  Button,
  Code,
  Heading,
  Flex,
  Box,
  Input,
  FormControl,
  FormLabel,
  FormHelperText,
  Textarea,
} from '@chakra-ui/react';
import * as React from 'react';
import { useClipboard } from '../index';

export default {
  title: 'useClipboard',
  parameters: {
    componentSubtitle:
      'useClipboard is a custom hook that handles copying content to clipboard.',
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
  const [text, setText] = React.useState('Example Text For Copy');
  const { onCopy, hasCopied, value } = useClipboard(text);

  const handleChange = (event: any) => setText(event.target.value);

  return (
    <Box maxW="xs">
      <Heading>useClipboard</Heading>

      <Box my={4}>
        <FormControl id="text_copy">
          <FormLabel>Text for copy</FormLabel>
          <Input
            type="text"
            value={text}
            onChange={handleChange}
            placeholder="Write your text here"
          />
          <FormHelperText>
            Write your text in this input and next press copy
          </FormHelperText>
        </FormControl>
      </Box>

      <Flex>
        <Code p={5} mt={3} w="xs">
          <pre>
            {JSON.stringify(
              {
                value: value,
                hasCopied: hasCopied,
              },
              null,
              2
            )}
          </pre>
        </Code>
      </Flex>

      <Box maxW="xs">
        <Button
          w="full"
          mr={2}
          mt={3}
          colorScheme="teal"
          variant="solid"
          onClick={() => onCopy()}
        >
          Copy
        </Button>
      </Box>

      <FormControl id="text_copy">
        <FormLabel>Paste your copy</FormLabel>
        <Textarea type="text" placeholder="Paste your copy here" />
      </FormControl>
    </Box>
  );
};
