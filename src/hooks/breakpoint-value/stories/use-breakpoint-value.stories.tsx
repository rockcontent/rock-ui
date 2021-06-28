import React from 'react';
import { Container } from '@chakra-ui/layout';
import { EnvironmentProvider } from '@chakra-ui/react-env';
import { useBreakpointValue, useBreakpoint } from '../';
import { Box, Code } from '@chakra-ui/react';
import Frame from 'react-frame-component';

export default {
  title: 'Breakpoint Value',
  decorators: [
    (Story: any) => (
      <Container mt="40px">
        <Story />
      </Container>
    ),
  ],
};

export const BreakpointHook = () => {
  const breakpoint = useBreakpoint();
  const isMobile = breakpoint === 'sm' || breakpoint === 'xs';
  return (
    <Code style={{ fontSize: isMobile ? 15 : 30 }}>
      The current breakpoint is {JSON.stringify(breakpoint, null, 2)}!
    </Code>
  );
};

export const BreakpointValueHook = () => {
  const width = useBreakpointValue({ base: '150px', md: '250px' });
  const color = useBreakpointValue(['red.500', undefined, 'green.500']);
  return (
    <Box bg={color} mx="auto" width={width}>
      I'm {width} wide
    </Box>
  );
};

export const BreakpointHookWithIFrame = () => {
  return (
    <>
      <BreakpointValue />
      <Frame style={{ background: 'yellow', maxWidth: '600px', width: '100%' }}>
        <EnvironmentProvider>
          <BreakpointValue />
        </EnvironmentProvider>
      </Frame>
    </>
  );
};

const BreakpointValue = () => {
  const breakpoint = useBreakpointValue({
    base: 'base',
    sm: 'sm',
    md: 'md',
    lg: 'lg',
    xl: 'xl',
  });
  return <p>Breakpoint: {breakpoint}</p>;
};
