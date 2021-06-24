/* eslint-disable react-hooks/rules-of-hooks */
import { Container } from '@chakra-ui/layout';
import * as React from 'react';
import { usePrefersReducedMotion } from '../index';
import { Image, keyframes } from '@chakra-ui/react';

export default {
  title: 'usePrefersReducedMotion',
  parameters: {
    componentSubtitle:
      'usePrefersReducedMotion is a custom hook used to help detect the users motion preference.',
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
  const spin = keyframes`
  from { transform: rotate(0deg); }
  to { transform: rotate(360deg); }
`;

  const prefersReducedMotion = usePrefersReducedMotion();
  const animation = prefersReducedMotion
    ? undefined
    : `${spin} infinite 20s linear`;
  return (
    <Image
      height={80}
      animation={animation}
      src="https://bit.ly/sage-adebayo"
      fallbackSrc="https://via.placeholder.com/150"
    />
  );
};
