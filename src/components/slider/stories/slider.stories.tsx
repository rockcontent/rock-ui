import { Box } from '@chakra-ui/layout';
import * as React from 'react';
import {
  Slider,
  SliderMark,
  SliderThumb,
  SliderTrack,
  SliderFilledTrack,
} from '../index';

export default {
  title: 'Slider',
  decorators: [
    (story: Function) => (
      <Box maxWidth="400px" height="300px" mx="auto" mt="40px">
        {story()}
      </Box>
    ),
  ],
};

export const SliderBug = () => {
  return (
    <Slider
      defaultValue={10}
      min={0}
      max={20}
      step={5}
      onChangeStart={console.log}
      onChangeEnd={console.log}
    >
      <SliderTrack bg="red.100">
        <SliderFilledTrack bg="tomato" />
      </SliderTrack>
      <SliderThumb boxSize={6} />
    </Slider>
  );
};

export const SliderOnChangeBug = () => {
  const [value, setValue] = React.useState(10);
  const [counter, setCounter] = React.useState(0);

  return (
    <Box>
      <Slider
        min={0}
        max={20}
        step={5}
        value={value}
        onChange={changedValue => {
          setCounter(c => c + 1);
          setValue(changedValue);
        }}
      >
        <SliderTrack bg="red.100">
          <SliderFilledTrack bg="tomato" />
        </SliderTrack>
        <SliderThumb boxSize={6} />
      </Slider>
      <Box mt="10px">Value: {value}</Box>
      <Box mt="10px">Change Count: {counter}</Box>
    </Box>
  );
};

export const HorizontalSlider = () => {
  const [value, setValue] = React.useState(10);
  return (
    <Slider
      value={value}
      colorScheme="red"
      onChange={changedValue => {
        setValue(changedValue);
      }}
    >
      <SliderTrack>
        <SliderFilledTrack />
      </SliderTrack>
      <SliderThumb />
      <SliderMark value={value} top="20px">
        $ {value.toFixed(2)}
      </SliderMark>
    </Slider>
  );
};

export const VerticalSlider = () => {
  const [value, setValue] = React.useState(10);
  return (
    <Slider
      value={value}
      colorScheme="red"
      isReversed
      orientation="vertical"
      onChange={changedValue => {
        setValue(changedValue);
      }}
    >
      <SliderTrack>
        <SliderFilledTrack />
      </SliderTrack>
      <SliderThumb />
      <SliderMark value={value} children={`${value}%`} left="40px" />
    </Slider>
  );
};

export const RockUIHorizontalSlider = () => {
  return (
    <Slider colorScheme="blue" defaultValue={40}>
      <SliderTrack>
        <SliderFilledTrack />
      </SliderTrack>
      <SliderThumb children="#" boxSize="30px" color="black" />
    </Slider>
  );
};

export const SteppedHorizontalSlider = () => {
  const [value, setValue] = React.useState<number>(1);
  return (
    <Slider value={value} onChange={setValue} min={1} max={7} step={2}>
      <SliderTrack>
        <SliderFilledTrack />
      </SliderTrack>
      <SliderThumb children={value} boxSize="30px" color="black" />
    </Slider>
  );
};
