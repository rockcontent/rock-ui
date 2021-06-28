import {
  Slider as BaseSlider,
  SliderMark as BaseSliderMark,
  SliderMarkProps as BaseSliderMarkProps,
  SliderProps as BaseSliderProps,
  SliderFilledTrack as BaseSliderFilledTrack,
  SliderInnerTrackProps as BaseSliderFilledTrackProps,
  SliderTrack as BaseSliderTrack,
  SliderTrackProps as BaseSliderTrackProps,
  SliderThumb as BaseSliderThumb,
  SliderThumbProps as BaseSliderThumbProps,
} from '@chakra-ui/slider';
import React, { forwardRef } from 'react';

export { BaseSliderProps as SliderProps };

export const Slider = forwardRef<HTMLDivElement, BaseSliderProps>(
  (props, ref) => (
    <BaseSlider {...props} ref={ref}>
      {props.children}
    </BaseSlider>
  )
);

export { BaseSliderMarkProps as SliderMarkProps };

export const SliderMark = forwardRef<HTMLDivElement, BaseSliderMarkProps>(
  (props, ref) => <BaseSliderMark {...props} ref={ref} />
);

export { BaseSliderFilledTrackProps as SliderFilledTrackProps };

export const SliderFilledTrack = forwardRef<
  HTMLDivElement,
  BaseSliderFilledTrackProps
>((props, ref) => <BaseSliderFilledTrack {...props} ref={ref} />);

export { BaseSliderTrackProps as SliderTrackProps };

export const SliderTrack = forwardRef<HTMLDivElement, BaseSliderTrackProps>(
  (props, ref) => <BaseSliderTrack {...props} ref={ref} />
);

export { BaseSliderThumbProps as SliderThumbProps };

export const SliderThumb = forwardRef<HTMLDivElement, BaseSliderThumbProps>(
  (props, ref) => <BaseSliderThumb {...props} ref={ref} />
);
