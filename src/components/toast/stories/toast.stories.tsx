import { Container, Wrap, WrapItem } from '@chakra-ui/layout';
import { createStandaloneToast, ToastPosition } from '@chakra-ui/react';
import * as React from 'react';
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

CustomComponent.parameters = {
  docs: {
    description: {
      story: 'Display a custom component instead of the default Toast UI.',
    },
  },
};

export const Status = () => {
  const toast = useToast();
  type TStatusToast = 'info' | 'warning' | 'success' | 'error' | undefined;
  const statusList: TStatusToast[] = ['success', 'error', 'warning', 'info'];

  return (
    <Wrap>
      {statusList.map((status, i) => (
        <WrapItem key={i}>
          <Button
            onClick={() =>
              toast({
                title: `${status} toast`,
                status: status,
                isClosable: true,
              })
            }
          >
            Show {status} toast
          </Button>
        </WrapItem>
      ))}
    </Wrap>
  );
};

Status.parameters = {
  docs: {
    description: {
      story: 'You can use status to change the color of your toasts.',
    },
  },
};

export const Variants = () => {
  const toast = useToast();
  const variants = ['solid', 'subtle', 'left-accent', 'top-accent'];

  return (
    <Wrap>
      {variants.map((variant, i) => (
        <WrapItem key={i}>
          <Button
            onClick={() =>
              toast({
                title: `${variant} toast`,
                variant: variant,
                isClosable: true,
              })
            }
          >
            Show {variant} toast
          </Button>
        </WrapItem>
      ))}
    </Wrap>
  );
};

Variants.parameters = {
  docs: {
    description: {
      story: 'Toast uses the same variants as the Alert component.',
    },
  },
};

export const ChangingTheToastPosition = () => {
  const toast = useToast();
  const positions: ToastPosition[] = [
    'top',
    'top-right',
    'top-left',
    'bottom',
    'bottom-right',
    'bottom-left',
  ];

  return (
    <Wrap>
      {positions.map((position, i) => (
        <WrapItem key={i}>
          <Button
            onClick={() =>
              toast({
                title: `${position} toast`,
                position: position,
                isClosable: true,
              })
            }
          >
            Show {position} toast
          </Button>
        </WrapItem>
      ))}
    </Wrap>
  );
};

ChangingTheToastPosition.parameters = {
  docs: {
    description: {
      story:
        'Using the position prop you can adjust where your toast will be popup from.',
    },
  },
};

export const PreventingDuplicateToast = () => {
  const toast = useToast();
  const id = 'test-toast';
  return (
    <Button
      onClick={() => {
        if (!toast.isActive(id)) {
          toast({
            id,
            title: 'Hey! You can create a duplicate toast',
          });
        }
      }}
    >
      Click me!
    </Button>
  );
};

PreventingDuplicateToast.parameters = {
  docs: {
    description: {
      story:
        'In some cases you might need to prevent duplicate of specific toasts. To achieve you need to pass an id and use the toast.isActive method to determine when to call toast(...).',
    },
  },
};

export const StandaloneToasts = () => {
  const toast = createStandaloneToast();
  // const customToast = createStandaloneToast({ theme: yourCustomTheme })
  return (
    <Button
      onClick={() =>
        toast({
          title: 'An error occurred.',
          description: 'Unable to create user account.',
          status: 'error',
          duration: 9000,
          isClosable: true,
        })
      }
    >
      Standalone Toasts
    </Button>
  );
};

StandaloneToasts.parameters = {
  docs: {
    description: {
      story:
        'Use createStandaloneToast to create toasts from outside of your React Components.',
    },
  },
};
