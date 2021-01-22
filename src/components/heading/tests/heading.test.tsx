import React from 'react';
import * as ReactDOM from 'react-dom';
import ReactTestUtils from 'react-dom/test-utils';
import { Heading } from '../heading';

describe('Heading', () => {
  it('renders without crashing', () => {
    // setup a DOM element as a render target
    const container = document.createElement('div');
    // container *must* be attached to document so events work correctly.
    document.body.appendChild(container);
    const component = <Heading>Success</Heading>;

    ReactTestUtils.act(() => {
      ReactDOM.render(component, container);
    });

    const heading = document.querySelector('.chakra-heading');

    expect(heading).toBeTruthy();
    expect(heading && heading.innerHTML).toBe('Success');

    ReactDOM.unmountComponentAtNode(container);
    container.remove();
  });
});
