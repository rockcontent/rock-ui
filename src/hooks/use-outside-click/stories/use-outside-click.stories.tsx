/* eslint-disable react-hooks/rules-of-hooks */
import { Box, Button, Container, Text } from '@chakra-ui/react';
import * as React from 'react';
import { useOutsideClick } from '../index';

export default {
  title: 'useOutsideClick',
  decorators: [
    (Story: any) => (
      <Container mt="40px">
        <Story />
      </Container>
    ),
  ],
};

export const basic = () => {
  const ref = React.useRef(null);
  const [isModalOpen, setIsModalOpen] = React.useState(false);
  useOutsideClick({
    ref: ref,
    handler: () => setIsModalOpen(false),
  });

  return (
    <>
      {isModalOpen ? (
        <Box ref={ref}>
          <Text color="black">
            Hey, I'm a modal. Click anywhere outside of me to close.
          </Text>
        </Box>
      ) : (
        <Button
          onClick={() => setIsModalOpen(true)}
          colorScheme="teal"
          variant="outline"
        >
          Open Modal
        </Button>
      )}
    </>
  );
};
