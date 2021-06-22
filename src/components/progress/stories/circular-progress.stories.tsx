import { Box } from '@chakra-ui/layout';
import * as React from 'react';
import { CircularProgress, CircularProgressLabel } from '../index';

export default {
  title: 'Progress/Circular Progress',
  decorators: [
    (story: Function) => (
      <Box maxW="500px" mt="40px" mx="auto">
        {story()}
      </Box>
    ),
  ],
};

export const basic = () => (
  <CircularProgress trackColor="gray.200" size="120px" value={20} />
);

export const withSize = () => <CircularProgress size="120px" value={60} />;

export const withThickness = () => (
  <CircularProgress size="120px" value={60} thickness="3px" />
);

export const withLabel = () => (
  <CircularProgress size="120px" value={60}>
    <CircularProgressLabel>60%</CircularProgressLabel>
  </CircularProgress>
);

export const circularIndeterminate = () => (
  <CircularProgress
    capIsRound
    trackColor="transparent"
    size="50px"
    isIndeterminate
    value={3}
  />
);

export const withZeroValue = () => <CircularProgress value={0} />;
