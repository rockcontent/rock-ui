import { CloseButton } from '@chakra-ui/react';
import { Container, Stack } from '@chakra-ui/layout';
import * as React from 'react';
import { Alert, AlertIcon, AlertTitle, AlertDescription } from '../';

export default {
  title: 'Alert',
  decorators: [
    (Story: any) => (
      <Container mt="40px">
        <Story />
      </Container>
    ),
  ],
};

export const descriptionOnly = () => (
  <Stack>
    <Alert status="error">
      <AlertDescription>Error alert.</AlertDescription>
    </Alert>
    <Alert status="warning">
      <AlertDescription>Warning alert.</AlertDescription>
    </Alert>
    <Alert status="success">
      <AlertDescription>Success alert.</AlertDescription>
    </Alert>
    <Alert status="info">
      <AlertDescription>Info alert.</AlertDescription>
    </Alert>
  </Stack>
);

export const titleOnly = () => (
  <Stack>
    <Alert status="error">
      <AlertTitle>Error alert.</AlertTitle>
    </Alert>
    <Alert status="warning">
      <AlertTitle>Warning alert.</AlertTitle>
    </Alert>
    <Alert status="success">
      <AlertTitle>Success alert.</AlertTitle>
    </Alert>
    <Alert status="info">
      <AlertTitle>Info alert.</AlertTitle>
    </Alert>
  </Stack>
);

export const iconAndMessage = () => (
  <Stack>
    <Alert status="error">
      <AlertIcon />
      <AlertTitle>Error alert.</AlertTitle>
    </Alert>
    <Alert status="error">
      <AlertIcon />
      <AlertDescription>Error alert.</AlertDescription>
    </Alert>
    <Alert status="warning">
      <AlertIcon />
      <AlertTitle>Warning alert.</AlertTitle>
    </Alert>
    <Alert status="warning">
      <AlertIcon />
      <AlertDescription>Warning alert.</AlertDescription>
    </Alert>
    <Alert status="success">
      <AlertIcon />
      <AlertTitle>Success alert.</AlertTitle>
    </Alert>
    <Alert status="success">
      <AlertIcon />
      <AlertDescription>Success alert.</AlertDescription>
    </Alert>
    <Alert status="info">
      <AlertIcon />
      <AlertTitle>Info alert.</AlertTitle>
    </Alert>
    <Alert status="info">
      <AlertIcon />
      <AlertDescription>Info alert.</AlertDescription>
    </Alert>
  </Stack>
);

export const variants = () => (
  <Stack spacing={3}>
    <Alert status="success" variant="subtle">
      <AlertIcon />
      <AlertDescription>Description message.</AlertDescription>
    </Alert>

    <Alert status="success" variant="solid">
      <AlertIcon />
      <AlertDescription>Description message.</AlertDescription>
    </Alert>

    <Alert status="success" variant="left-accent">
      <AlertIcon />
      <AlertDescription>Description message.</AlertDescription>
    </Alert>

    <Alert status="success" variant="top-accent">
      <AlertIcon />
      <AlertDescription>Description message.</AlertDescription>
    </Alert>
  </Stack>
);

export const withEverySupportedComponent = () => (
  <Stack spacing="24px">
    <Alert status="success">
      <AlertIcon />
      <AlertTitle mr={2}>Success!</AlertTitle>
      <AlertDescription>Success alert.</AlertDescription>
      <CloseButton position="absolute" right="8px" top="8px" />
    </Alert>
    <Alert status="error">
      <AlertIcon />
      <AlertTitle mr={2}>Error!</AlertTitle>
      <AlertDescription>Error alert.</AlertDescription>
      <CloseButton position="absolute" right="8px" top="8px" />
    </Alert>
    <Alert status="warning">
      <AlertIcon />
      <AlertTitle mr={2}>Warning!</AlertTitle>
      <AlertDescription>Warning alert.</AlertDescription>
      <CloseButton position="absolute" right="8px" top="8px" />
    </Alert>
    <Alert status="info">
      <AlertIcon />
      <AlertTitle mr={2}>Info!</AlertTitle>
      <AlertDescription>Info alert.</AlertDescription>
      <CloseButton position="absolute" right="8px" top="8px" />
    </Alert>
  </Stack>
);

export const customLayout = () => (
  <Alert
    status="success"
    variant="subtle"
    flexDirection="column"
    justifyContent="center"
    textAlign="center"
    height="200px"
  >
    <AlertIcon boxSize="40px" mr={0} />
    <AlertTitle mt={4} mb={1} fontSize="lg">
      Application submitted!
    </AlertTitle>
    <AlertDescription maxWidth="sm">
      Thanks for submitting your application. Our team will get back to you
      soon.
    </AlertDescription>
  </Alert>
);
