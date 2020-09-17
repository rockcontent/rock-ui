import React from 'react';
import * as ReactDOM from 'react-dom';
import ReactTestUtils from 'react-dom/test-utils';
import { Text } from '../text';

describe('Badge', () => {
  it('renders without crashing', () => {
    // setup a DOM element as a render target
    const container = document.createElement('div');
    // container *must* be attached to document so events work correctly.
    document.body.appendChild(container);
    const component = <Text>Success</Text>;

    ReactTestUtils.act(() => {
      ReactDOM.render(component, container);
    });

    const text = document.querySelector('.chakra-text');

    expect(text).toBeTruthy();
    expect(text && text.innerHTML).toBe('Success');

    ReactDOM.unmountComponentAtNode(container);
    container.remove();
  });
});
