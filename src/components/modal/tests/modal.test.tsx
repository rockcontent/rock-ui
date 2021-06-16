import React from 'react';
import * as ReactDOM from 'react-dom';
import ReactTestUtils from 'react-dom/test-utils';
import Modal from './ModalComponent';

describe('Modal', () => {
  it('renders without crashing', () => {
    // setup a DOM element as a render target
    const container = document.createElement('div');
    // container *must* be attached to document so events work correctly.
    document.body.appendChild(container);
    const component = <Modal />;

    ReactTestUtils.act(() => {
      ReactDOM.render(component, container);
    });

    const openBtn = document.querySelector('#open-modal');

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
    const formGroup = document.querySelector('.chakra-form-control');

    expect(overlay).toBeTruthy();
    expect(content).toBeTruthy();
    expect(header).toBeTruthy();
    expect(body).toBeTruthy();
    expect(footer).toBeTruthy();
    expect(formGroup).toBeTruthy();

    ReactDOM.unmountComponentAtNode(container);
    container.remove();
  });
  it('call the callback functions', (done) => {
    // setup a DOM element as a render target
    const container = document.createElement('div');
    // container *must* be attached to document so events work correctly.
    document.body.appendChild(container);
    const component = <Modal />;

    ReactTestUtils.act(() => {
      ReactDOM.render(component, container);
    });

    const openBtn = document.querySelector('#open-modal');

    expect(openBtn).toBeTruthy();

    ReactTestUtils.act(() => {
      openBtn &&
        openBtn.dispatchEvent(new MouseEvent('click', { bubbles: true }));
    });

    const firstNameInput = document.querySelector('#first-name');
    const closeBtn = document.querySelector('#close-modal');
    expect(firstNameInput).toBeTruthy();

    ReactTestUtils.act(() => {
      closeBtn &&
        closeBtn.dispatchEvent(new MouseEvent('click', { bubbles: true }));
    });

    // using timeout strategy due to async animation
    setTimeout(() => {
      const overlay = document.querySelector('.chakra-modal__overlay');
      expect(overlay).toBeFalsy();
      done();
    }, 2000);

    ReactDOM.unmountComponentAtNode(container);
    container.remove();
  });
});
