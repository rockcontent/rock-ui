import { Container } from '@chakra-ui/layout';
import * as React from 'react';
import { SkeletonText, SkeletonCircle, Skeleton } from '../';
import { Stack, Box } from '@chakra-ui/react';

export default {
  title: 'Skeleton',
  component: Skeleton,
  subcomponents: {
    SkeletonCircle,
    SkeletonText,
  },
  decorators: [
    (Story: any) => (
      <Container mt="40px">
        <Story />
      </Container>
    ),
  ],
};

export const standalone = () => (
  <Stack>
    <Skeleton height="20px" />
    <Skeleton height="20px" />
    <Skeleton height="20px" />
  </Stack>
);

export const withCircleAndText = () => (
  <Box padding="6" boxShadow="lg" bg="white">
    <SkeletonCircle size="10" />
    <SkeletonText mt="4" noOfLines={4} spacing="4" />
  </Box>
);
