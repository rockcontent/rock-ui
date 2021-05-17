import { Box, Stack } from '@chakra-ui/layout';
import * as React from 'react';
import { Image } from '..';

export default {
  title: 'Image',
};

export const BasicExample = () => (
  <Box boxSize="sm">
    <Image src="https://bit.ly/sage-adebayo" alt="Segun Adebayo" />
  </Box>
);

export const Size = () => (
  <Stack direction="row">
    <Image
      boxSize="100px"
      objectFit="cover"
      src="https://bit.ly/sage-adebayo"
      alt="Segun Adebayo"
    />
    <Image
      boxSize="150px"
      objectFit="cover"
      src="https://bit.ly/dan-abramov"
      alt="Dan Abramov"
    />
    <Image boxSize="200px" src="https://bit.ly/dan-abramov" alt="Dan Abramov" />
  </Stack>
);

Size.parameters = {
  docs: {
    description: {
      story: 'The size of the image can be adjusted using the boxSize prop.',
    },
  },
};

export const ImageWithBorderRadius = () => (
  <Image
    borderRadius="full"
    boxSize="150px"
    src="https://bit.ly/sage-adebayo"
    alt="Segun Adebayo"
  />
);

ImageWithBorderRadius.parameters = {
  docs: {
    description: {
      story:
        'The border radius of the image can be adjusted using the borderRadius prop.',
    },
  },
};

export const FallbackSupport = () => (
  <Image src="gibbresh.png" fallbackSrc="https://via.placeholder.com/150" />
);

FallbackSupport.parameters = {
  docs: {
    description: {
      story:
        'You can provide a fallback image for when there is an error loading the src of the image. You can also opt out of this behavior by passing the ignoreFallback prop.',
    },
  },
};
