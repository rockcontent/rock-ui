import { Container, HStack } from '@chakra-ui/layout';
import * as React from 'react';
import { CloseButton } from '../index';

export default {
  title: 'CloseButton',
  component: CloseButton,
  decorators: [
    (Story: any) => (
      <Container mt="40px">
        <Story />
      </Container>
    ),
  ],
};

export const basic = () => <CloseButton />;

export const withColor = () => (
  <HStack>
    <CloseButton color="green" />
    <CloseButton color="red" />
    <CloseButton color="purple" />
  </HStack>
);

export const WithFontSize = () => (
  <HStack spacing="24px">
    <CloseButton size="sm" />
    <CloseButton size="md" />
    <CloseButton size="lg" />
  </HStack>
);

export const IsDisabled = () => (
  <HStack spacing="24px">
    <CloseButton isDisabled />
  </HStack>
);
