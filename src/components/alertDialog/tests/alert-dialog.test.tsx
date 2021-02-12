import React from 'react';
import * as ReactDOM from 'react-dom';
import ReactTestUtils from 'react-dom/test-utils';
import AlertDialogTest from './AlertDialogTest';

describe('Alert Dialog', () => {
  it('renders without crashing', () => {
    // setup a DOM element as a render target
    const container = document.createElement('div');
    // container *must* be attached to document so events work correctly.
    document.body.appendChild(container);

    const component = <AlertDialogTest />;

    ReactTestUtils.act(() => {
      ReactDOM.render(component, container);
    });

    const closeBtn = document.querySelector('.chakra-button');

    expect(closeBtn).toBeTruthy();

    ReactDOM.unmountComponentAtNode(container);
    container.remove();
  });
  it('call the close button callback function', () => {
    // setup a DOM element as a render target
    const container = document.createElement('div');
    // container *must* be attached to document so events work correctly.
    document.body.appendChild(container);

    const component = <AlertDialogTest />;

    ReactTestUtils.act(() => {
      ReactDOM.render(component, container);
    });

    const openBtn = document.querySelector('.chakra-button');

    expect(openBtn).toBeTruthy();

    ReactTestUtils.act(() => {
      openBtn &&
        openBtn.dispatchEvent(new MouseEvent('click', { bubbles: true }));
    });

    const overlay = document.querySelector('.chakra-modal__overlay');
    const content = document.querySelector('.chakra-modal__content');
    const header = document.querySelector('.chakra-modal__header');
    const body = document.querySelector('.chakra-modal__body');
    const footer = document.querySelector('.chakra-modal__footer');

    expect(overlay).toBeTruthy();
    expect(content).toBeTruthy();
    expect(header).toBeTruthy();
    expect(body).toBeTruthy();
    expect(footer).toBeTruthy();

    ReactDOM.unmountComponentAtNode(container);
    container.remove();
  });
});
