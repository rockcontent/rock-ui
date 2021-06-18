import { Box } from 'components/layout';
import React, { useEffect, useState } from 'react';
import { createPortal } from 'react-dom';
import Frame from 'react-frame-component';

import { useEnvironment, EnvironmentProvider } from '..';

export default {
  title: 'Environment',
};

type PortalProps = {
  children?: React.ReactNode;
};

const Portal = ({ children }: PortalProps) => {
  const env = useEnvironment();
  return createPortal(children, env.document.body);
};

export function WithIframe() {
  return (
    <Box className="App">
      <h1>Hello CodeSandbox</h1>
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
}

function useWindow() {
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
}

function WindowSize() {
  const details = useWindow();
  return <pre>{JSON.stringify(details)}</pre>;
}

export function SizeWithinIframe() {
  return (
    <>
      <WindowSize />
      <Frame style={{ background: 'yellow', width: '100%', maxWidth: '300px' }}>
        <EnvironmentProvider>
          <WindowSize />
        </EnvironmentProvider>
      </Frame>
    </>
  );
}
