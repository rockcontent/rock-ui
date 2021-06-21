import { render } from '@testing-library/react';
import * as React from 'react';
import '@testing-library/jest-dom';
import { act, renderHook } from '@testing-library/react-hooks';
import { LiveRegion, LiveRegionOptions, useLiveRegion } from '../index';
describe('LiveRegion', () => {
  it('LiveRegion creates a container and has the proper aria and role attributes', () => {
    render(<div />);

    new LiveRegion();
    const region = document.getElementById('chakra-a11y-live-region');

    expect(region).toHaveAttribute('aria-atomic', 'true');
    expect(region).toHaveAttribute('aria-live', 'polite');
    expect(region).toHaveAttribute('aria-relevant', 'all');
    expect(region).toHaveAttribute('role', 'status');
  });

  it('LiveRegion creates a container using the provided options', () => {
    render(<div />);

    const options: LiveRegionOptions = {
      id: 'some-id',
      role: 'alert',
      'aria-live': 'assertive',
      'aria-relevant': 'removals',
      'aria-atomic': 'false',
    };
    new LiveRegion(options);
    const region = document.getElementById('some-id');

    expect(region).toHaveAttribute('aria-atomic', 'false');
    expect(region).toHaveAttribute('aria-live', 'assertive');
    expect(region).toHaveAttribute('aria-relevant', 'removals');
    expect(region).toHaveAttribute('role', 'alert');
  });

  it('LiveRegion can "speak" by setting its text content', () => {
    render(<div />);

    const liveRegion = new LiveRegion();
    const region = document.getElementById(
      'chakra-a11y-live-region'
    ) as HTMLElement;

    liveRegion.speak('Hello World');
    expect(region.innerText).toEqual('Hello World');
  });

  it('LiveRegion creates a container and has the proper aria and role attributes', () => {
    render(<div />);

    const { result } = renderHook(() => useLiveRegion());
    const region = document.getElementById(
      'chakra-a11y-live-region'
    ) as HTMLElement;

    act(() => result.current.speak('Hello World'));

    expect(region.innerText).toEqual('Hello World');
  });
});
