import { Box } from '@chakra-ui/layout';
import '@testing-library/jest-dom';
import { render } from '@testing-library/react';
import React from 'react';

import { CircularProgress, CircularProgressLabel } from '../index';

describe('Circular Progress', () => {
  it('CircularProgress: should render correctly', () => {
    const { getByTestId } = render(
      <Box>
        <CircularProgress
          data-testid="circular-progress-1"
          aria-label="Account Usage"
          size="60px"
          value={20}
        />
        <CircularProgress
          aria-label="Account Example"
          size="120px"
          trackColor="transparent"
          thickness={10}
          value={60}
          data-testid="circular-progress-2"
        />
      </Box>
    );

    const component = getByTestId('circular-progress-1');
    const componentTwo = getByTestId('circular-progress-2');

    expect(component).toHaveAttribute('aria-label', 'Account Usage');
    expect(componentTwo).toHaveAttribute('aria-label', 'Account Example');
  });

  it('CircularProgress: should render correctly with label', () => {
    const { getByTestId } = render(
      <Box>
        <CircularProgress
          data-testid="circular-progress"
          aria-label="Account Usage"
          size="60px"
          value={20}
        >
          <CircularProgressLabel data-testid="label-circular-progress">
            50%
          </CircularProgressLabel>
        </CircularProgress>
      </Box>
    );

    const component = getByTestId('circular-progress');
    const labelComponent = getByTestId('label-circular-progress');

    expect(component).toBeTruthy();
    expect(component).toHaveAttribute('aria-label', 'Account Usage');
    expect(labelComponent).toBeTruthy();
    expect(labelComponent.textContent).toContain('50%');
  });

  it('CircularProgress: has the proper aria, data, and role attributes', () => {
    const props = {
      trackColor: 'transparent',
      valueText: 'value',
      thickness: 10,
      value: 20,
    };
    const utils = render(<CircularProgress {...props} />);

    let progress = utils.getByRole('progressbar');

    expect(progress).not.toHaveAttribute('data-indeterminate');
    expect(progress).toHaveAttribute('aria-valuemax', '100');
    expect(progress).toHaveAttribute('aria-valuemin', '0');
    expect(progress).toHaveAttribute('aria-valuenow', '20');
    expect(progress).toHaveAttribute('aria-valuetext', 'value');

    // rerender as indeterminate
    utils.rerender(<CircularProgress {...props} isIndeterminate />);

    progress = utils.getByRole('progressbar');

    expect(progress).toHaveAttribute('data-indeterminate');
    expect(progress).not.toHaveAttribute('aria-valuenow');

    // rerender with getValueText function
    utils.rerender(
      <CircularProgress
        {...props}
        getValueText={(value, percent) => `${value} (${percent}%)`}
      />
    );

    progress = utils.getByRole('progressbar');

    expect(progress).toHaveAttribute('aria-valuetext', '20 (20%)');
  });
});
