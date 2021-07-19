import { render } from '@testing-library/react';
import React from 'react';
import * as ReactDOM from 'react-dom';
import ReactTestUtils from 'react-dom/test-utils';
import { Progress, ProgressLabel } from '../index';
import '@testing-library/jest-dom';
import { Box } from '@chakra-ui/layout';

describe('Progress', () => {
  it('renders without crashing', () => {
    // setup a DOM element as a render target
    const container = document.createElement('div');
    // container *must* be attached to document so events work correctly.
    document.body.appendChild(container);
    const component = <Progress value={80} />;

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

  it('Progress: has the proper aria, data, and role attributes', () => {
    const { getByRole, rerender } = render(
      <Progress color="green" size="sm" value={20} />
    );

    let progress = getByRole('progressbar');

    expect(progress).not.toHaveAttribute('data-indeterminate');
    expect(progress).toHaveAttribute('aria-valuemax', '100');
    expect(progress).toHaveAttribute('aria-valuemin', '0');
    expect(progress).toHaveAttribute('aria-valuenow', '20');
    expect(progress).not.toHaveAttribute('aria-valuetext');

    // rerender as indeterminate
    rerender(<Progress color="green" size="sm" isIndeterminate />);

    progress = getByRole('progressbar');

    expect(progress).toHaveAttribute('data-indeterminate');
    expect(progress).not.toHaveAttribute('aria-valuenow');
  });

  it('Progress: should render correctly with label', () => {
    const { getByTestId } = render(
      <Box>
        <Progress
          data-testid="circular-progress"
          aria-label="Account Usage"
          size="60px"
          value={20}
        >
          <ProgressLabel data-testid="label-circular-progress">
            50%
          </ProgressLabel>
        </Progress>
      </Box>
    );

    const component = getByTestId('circular-progress');
    const labelComponent = getByTestId('label-circular-progress');

    expect(component).toBeTruthy();
    expect(labelComponent).toBeTruthy();
    expect(labelComponent.textContent).toContain('50%');
  });
});
