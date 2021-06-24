/* eslint-disable react-hooks/rules-of-hooks */
import { Container } from '@chakra-ui/layout';
import { Text } from '@chakra-ui/react';
import * as React from 'react';
import { useMediaQuery } from '../index';

export default {
  title: 'useMediaQuery',
  parameters: {
    componentSubtitle:
      'useMediaQuery is a custom hook used to help detect whether a single media query or multiple media queries individually match.',
  },
  decorators: [
    (Story: any) => (
      <Container mt="40px">
        <Story />
      </Container>
    ),
  ],
};

export const usageSimple = () => {
  const [isLargerThan1280] = useMediaQuery('(min-width: 1280px)');

  return (
    <Text>
      {isLargerThan1280 ? 'larger than 1280px' : 'smaller than 1280px'}
    </Text>
  );
};

export const usageWithArray = () => {
  const [isLargerThanHD, isDisplayingInBrowser] = useMediaQuery([
    '(min-width: 1920px)',
    '(display-mode: browser)',
  ]);

  const determineText = () => {
    if (isLargerThanHD) {
      return `high resolution you got there ${
        isDisplayingInBrowser ? 'in your browser' : 'on your screen'
      }`;
    }

    return isDisplayingInBrowser
      ? 'rendering in a browser'
      : 'rendering on something else, e.g. PWA';
  };

  return <Text>{determineText()}</Text>;
};
