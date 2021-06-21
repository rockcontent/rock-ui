import { Box, Heading } from '@chakra-ui/layout';
import React, { useEffect, useState } from 'react';
import { createPortal } from 'react-dom';
import Frame from 'react-frame-component';

import { useEnvironment, EnvironmentProvider } from '..';

export default {
  title: 'Environment',
  parameters: {
    componentSubtitle:
      'To get it working, you need to wrap your app in EnvironmentProvider and call the useEnvironment hook anywhere in your app to get access to the correct window and document.',
  },
};

type PortalProps = {
  children?: React.ReactNode;
};

const Portal = ({ children }: PortalProps) => {
  const env = useEnvironment();
  return createPortal(children, env.document.body);
};

export const WithIframe = () => {
  return (
    <Box className="App">
      <Heading>Hello CodeSandbox</Heading>
      <h2>Start editing to see some magic happen!</h2>
      <Portal>Outside iframe</Portal>
      <Frame style={{ background: 'yellow' }}>
        <EnvironmentProvider>
          <span>Welcome home</span>
          <Portal>Inside iframe</Portal>
        </EnvironmentProvider>
      </Frame>
    </Box>
  );
};

const useWindow = () => {
  const { window: win } = useEnvironment();
  const [match, setMatch] = useState(false);

  useEffect(() => {
    const mql = win.matchMedia('(min-width: 600px)');
    setMatch(mql.matches);
    mql.addEventListener('change', (query: MediaQueryListEvent) => {
      setMatch(query.matches);
    });
    return () => {
      mql.removeEventListener('change', (query: MediaQueryListEvent) => {
        setMatch(query.matches);
      });
    };
  }, [win]);

  return {
    w: win.innerWidth,
    h: win.innerHeight,
    match,
  };
};

const WindowSize = () => {
  const details = useWindow();
  return <pre>{JSON.stringify(details)}</pre>;
};

export const SizeWithinIframe = () => {
  return (
    <Box>
      <WindowSize />
      <Frame style={{ background: 'yellow', width: '100%', maxWidth: '300px' }}>
        <EnvironmentProvider>
          <WindowSize />
        </EnvironmentProvider>
      </Frame>
    </Box>
  );
};
