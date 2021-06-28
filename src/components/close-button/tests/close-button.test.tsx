import React from 'react';
import * as ReactDOM from 'react-dom';
import ReactTestUtils from 'react-dom/test-utils';
import { CloseButton } from '../close-button';

describe('CloseButton', () => {
  it('renders without crashing', () => {
    const container = document.createElement('div');
    document.body.appendChild(container);
    const component = <CloseButton />;

    ReactTestUtils.act(() => {
      ReactDOM.render(component, container);
    });

    const closeButton = document.querySelector('.closeButtonChakra');

    expect(closeButton).toBeTruthy();

    ReactDOM.unmountComponentAtNode(container);
    container.remove();
  });
});
