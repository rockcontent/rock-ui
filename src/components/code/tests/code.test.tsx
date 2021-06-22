import React from 'react';
import { Code } from '../index';
import * as ReactDOM from 'react-dom';
import ReactTestUtils from 'react-dom/test-utils';

describe('Code', () => {
  it('renders without crashing', () => {
    // setup a DOM element as a render target
    const container = document.createElement('div');
    // container *must* be attached to document so events work correctly.
    document.body.appendChild(container);
    const component = <Code colorScheme="green">import React from react</Code>;

    ReactTestUtils.act(() => {
      ReactDOM.render(component, container);
    });

    const code = document.querySelector('.code-chakra');

    expect(code).toBeTruthy();
    expect(code && code.innerHTML).toBe('import React from react');

    ReactDOM.unmountComponentAtNode(container);
    container.remove();
  });
});
