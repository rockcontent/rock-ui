import { Box, Text } from '@chakra-ui/layout';
import * as React from 'react';
import { SkipNavContent, SkipNavLink } from '../index';

export default {
  title: 'Skip Nav',
  parameters: {
    componentSubtitle:
      'Skip navigation link for screen reader and keyboard users. Because the main content is not usually the first thing in the document, it is valuable to provide a shortcut for keyboard and screen reader users to skip to the content.',
  },
};

export const Basic = () => (
  <Box>
    <SkipNavLink>Skip to Content</SkipNavLink>
    <Box>
      <SkipNavContent>
        <Text>Basic</Text>
      </SkipNavContent>
    </Box>
  </Box>
);
export const UsageExample = () => {
  const Navbar = () => (
    <Box>
      <Text>Navbar</Text>
    </Box>
  );

  return (
    <Box>
      {/* 👇🏻 put the link at the top of your app */}
      <SkipNavLink>Skip to content</SkipNavLink>
      <Box>
        <Navbar />
        {/* 👇🏻 and the content next to your main content */}
        <SkipNavContent>
          <Text>Basic</Text>
        </SkipNavContent>
      </Box>
    </Box>
  );
};
