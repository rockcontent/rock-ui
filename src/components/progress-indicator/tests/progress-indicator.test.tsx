import React from 'react';
import * as ReactDOM from 'react-dom';
import ReactTestUtils from 'react-dom/test-utils';
import { ProgressIndicator } from '../progress-indicator';

describe('Progress', () => {
  it('renders without crashing', () => {
    // setup a DOM element as a render target
    const container = document.createElement('div');
    // container *must* be attached to document so events work correctly.
    document.body.appendChild(container);
    const component = <ProgressIndicator value={80} />;

    ReactTestUtils.act(() => {
      ReactDOM.render(component, container);
    });

    const progressBar = document.querySelector('[role=progressbar]');
    const completionPercentage =
      progressBar && progressBar.getAttribute('aria-valuenow');

    expect(progressBar).toBeTruthy();
    expect(completionPercentage).toEqual('80');

    ReactDOM.unmountComponentAtNode(container);
    container.remove();
  });
});
