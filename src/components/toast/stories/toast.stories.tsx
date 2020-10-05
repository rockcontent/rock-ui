import * as React from 'react';
import { Container } from '@chakra-ui/layout';
import { useToast } from '../';
import { Button } from '../../button';
import { Box } from '../../layout/box';

export default {
  title: 'Toast',
  decorators: [
    (Story: any) => (
      <Container mt="40px">
        <Story />
      </Container>
    ),
  ],
};

export const Basic = () => {
  const toast = useToast();
  return (
    <Button
      onClick={() =>
        toast({
          title: 'Account created.',
          description: "We've created your account for you.",
          status: 'success',
          duration: 5000,
          isClosable: true,
          position: 'top',
        })
      }
      colorScheme="blue"
    >
      Show Toast
    </Button>
  );
};

export const CustomComponent = () => {
  const toast = useToast();
  return (
    <Button
      onClick={() =>
        toast({
          position: 'bottom-left',
          render: () => (
            <Box m={3} color="white" p={3} bg="blue.500">
              Hello World
            </Box>
          ),
        })
      }
    >
      Show Toast
    </Button>
  );
};

export const ErrorToast = () => {
  const toast = useToast();
  return (
    <Button
      onClick={() =>
        toast({
          title: 'An error occurred.',
          description: 'Unable to create user account.',
          status: 'error',
          duration: 9000,
          isClosable: true,
          position: 'top',
        })
      }
    >
      Show Error Toast
    </Button>
  );
};
