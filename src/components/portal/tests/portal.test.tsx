import { render, screen } from '@testing-library/react';

import * as React from 'react';
import { Portal, PortalManager } from '../';

test('should render portal', async () => {
  const { asFragment } = render(
    <Portal>
      <>This is a portal 1</>
      <Portal>This is a portal 2</Portal>
    </Portal>
  );

  expect(asFragment()).toMatchSnapshot();
});

test('should render in a different node', () => {
  render(
    <PortalManager>
      <div data-testid="parent">
        <h1 data-testid="child-1">Foo</h1>
        <Portal>
          <h1 data-testid="child-2">Foo</h1>
        </Portal>
      </div>
    </PortalManager>
  );

  const parent = screen.getByTestId('parent');

  const child1 = screen.getByTestId('child-1');
  const child2 = screen.getByTestId('child-2');

  expect(parent).toContainElement(child1);
  expect(parent).not.toContainElement(child2);
});

test('should render into a custom container', () => {
  const Custom = () => {
    const ref = React.useRef<any>(null);
    return (
      <PortalManager>
        <div data-testid="container" ref={ref} />
        <Portal containerRef={ref}>
          <h1 data-testid="heading">Hello world</h1>
        </Portal>
      </PortalManager>
    );
  };

  const tools = render(<Custom />);

  const heading = tools.getByTestId('heading');
  const container = tools.getByTestId('container');

  expect(container).toContainElement(heading);
});
