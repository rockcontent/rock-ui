import React from 'react';
import * as ReactDOM from 'react-dom';
import ReactTestUtils from 'react-dom/test-utils';
import { Icon } from '../Icon';

describe('Heading', () => {
  it('renders without crashing', () => {
    // setup a DOM element as a render target
    const container = document.createElement('div');
    // container *must* be attached to document so events work correctly.
    document.body.appendChild(container);
    const component = (
      <Icon viewBox="0 0 200 200" color="red.500">
        <path
          fill="currentColor"
          d="M 100, 100 m -75, 0 a 75,75 0 1,0 150,0 a 75,75 0 1,0 -150,0"
        />
      </Icon>
    );

    ReactTestUtils.act(() => {
      ReactDOM.render(component, container);
    });

    const icon = document.querySelector('.chakra-icon');

    expect(icon).toBeTruthy();
    expect(icon && icon.getElementsByTagName('path')).toBeTruthy();

    ReactDOM.unmountComponentAtNode(container);
    container.remove();
  });
});
