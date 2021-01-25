import React from 'react';
import * as ReactDOM from 'react-dom';
import ReactTestUtils from 'react-dom/test-utils';
import { CloseButton } from '@chakra-ui/react';
import { Alert, AlertDescription, AlertTitle, AlertIcon } from '../';

describe('Alert', () => {
  it('renders without crashing', () => {
    // setup a DOM element as a render target
    const container = document.createElement('div');
    // container *must* be attached to document so events work correctly.
    document.body.appendChild(container);
    const component = (
      <Alert status="success">
        <AlertIcon />
        <AlertTitle mr={2}>Success!</AlertTitle>
        <AlertDescription>Success alert.</AlertDescription>
        <CloseButton position="absolute" right="8px" top="8px" id="close-btn" />
      </Alert>
    );

    ReactTestUtils.act(() => {
      ReactDOM.render(component, container);
    });

    const icon = document.querySelector('.chakra-alert__icon');
    const title = document.querySelector('.chakra-alert__title');
    const description = document.querySelector('.chakra-alert__desc');
    const closeBtn = document.querySelector('#close-btn');

    expect(icon).toBeTruthy();
    expect(title).toBeTruthy();
    expect(description).toBeTruthy();
    expect(closeBtn).toBeTruthy();

    ReactDOM.unmountComponentAtNode(container);
    container.remove();
  });
  it('call the close button callback function', () => {
    // setup a DOM element as a render target
    const container = document.createElement('div');
    // container *must* be attached to document so events work correctly.
    document.body.appendChild(container);
    const onClick = jest.fn();
    const component = (
      <Alert status="success">
        <AlertIcon />
        <AlertTitle mr={2}>Success!</AlertTitle>
        <AlertDescription>Success alert.</AlertDescription>
        <CloseButton
          onClick={onClick}
          position="absolute"
          right="8px"
          top="8px"
          id="close-btn"
        />
      </Alert>
    );

    ReactTestUtils.act(() => {
      ReactDOM.render(component, container);
    });

    const closeBtn = document.querySelector('#close-btn');

    expect(closeBtn).toBeTruthy();

    ReactTestUtils.act(() => {
      if (closeBtn) {
        closeBtn.dispatchEvent(new MouseEvent('click', { bubbles: true }));
      }
    });

    expect(onClick).toHaveBeenCalledTimes(1);

    ReactDOM.unmountComponentAtNode(container);
    container.remove();
  });
});
