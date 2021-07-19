import '@testing-library/jest-dom';
import { render } from '@testing-library/react';
import * as React from 'react';
import { press } from '../../../test-utils';
import { Slider, SliderFilledTrack, SliderThumb, SliderTrack } from '../index';

describe('Slider', () => {
  it('should render correctly', () => {
    const { getByTestId } = render(
      <Slider data-testid="slider" aria-label="slider-1" colorScheme="red">
        <SliderTrack>
          <SliderFilledTrack />
        </SliderTrack>
        <SliderThumb />
      </Slider>
    );

    expect(getByTestId('slider')).toBeTruthy();
  });

  it('should move the thumb', () => {
    const defaultValue = 10;
    const { getByRole } = render(
      <Slider
        aria-label="slider-2"
        colorScheme="red"
        defaultValue={defaultValue}
      >
        <SliderTrack>
          <SliderFilledTrack />
        </SliderTrack>
        <SliderThumb />
      </Slider>
    );

    const thumb = getByRole('slider');

    press.ArrowRight(thumb);
    expect(thumb).toHaveAttribute('aria-valuenow', '11');

    press.ArrowRight(thumb);
    expect(thumb).toHaveAttribute('aria-valuenow', '12');

    press.Home(thumb);
    expect(thumb).toHaveAttribute('aria-valuenow', '0');

    press.End(thumb);
    expect(thumb).toHaveAttribute('aria-valuenow', '100');
  });
});
