import * as React from 'react';
import {
  Slider,
  SliderTrack,
  SliderFilledTrack,
  SliderThumb,
  Flex,
} from '@chakra-ui/react';
import { Container, Stack } from '@chakra-ui/layout';
import {
  NumberInput,
  NumberInputField,
  NumberInputStepper,
  NumberDecrementStepper,
  NumberIncrementStepper,
} from '../';

export default {
  title: 'Number Input',
  decorators: [
    (Story: any) => (
      <Container mt="40px">
        <Story />
      </Container>
    ),
  ],
};

export const basic = () => (
  <NumberInput>
    <NumberInputField />
    <NumberInputStepper>
      <NumberIncrementStepper />
      <NumberDecrementStepper />
    </NumberInputStepper>
  </NumberInput>
);

export const withMinMax = () => (
  <NumberInput defaultValue={15} min={10} max={20}>
    <NumberInputField />
    <NumberInputStepper>
      <NumberIncrementStepper />
      <NumberDecrementStepper />
    </NumberInputStepper>
  </NumberInput>
);

export const withCustomStep = () => (
  <NumberInput step={5} defaultValue={15} min={10} max={30}>
    <NumberInputField />
    <NumberInputStepper>
      <NumberIncrementStepper />
      <NumberDecrementStepper />
    </NumberInputStepper>
  </NumberInput>
);

export const withCustomPrecision = () => (
  <NumberInput defaultValue={15} precision={2} step={0.2}>
    <NumberInputField />
    <NumberInputStepper>
      <NumberIncrementStepper />
      <NumberDecrementStepper />
    </NumberInputStepper>
  </NumberInput>
);

export const withoutClampedValue = () => (
  <NumberInput defaultValue={15} max={30} clampValueOnBlur={false}>
    <NumberInputField />
    <NumberInputStepper>
      <NumberIncrementStepper />
      <NumberDecrementStepper />
    </NumberInputStepper>
  </NumberInput>
);

export const allowOutOfRange = () => (
  <NumberInput
    defaultValue={15}
    max={10}
    keepWithinRange={false}
    clampValueOnBlur={false}
  >
    <NumberInputField />
    <NumberInputStepper>
      <NumberIncrementStepper />
      <NumberDecrementStepper />
    </NumberInputStepper>
  </NumberInput>
);

export const WithFormattedValue = () => {
  const format = (val: any) => `$` + val;
  const parse = (val: any) => val.replace(/^\$/, '');

  const [value, setValue] = React.useState('1.53');

  return (
    <NumberInput
      onChange={valueString => setValue(parse(valueString))}
      value={format(value)}
      max={50}
    >
      <NumberInputField />
      <NumberInputStepper>
        <NumberIncrementStepper />
        <NumberDecrementStepper />
      </NumberInputStepper>
    </NumberInput>
  );
};

export const withSizes = () => (
  <Stack spacing={4}>
    <NumberInput size="sm" defaultValue={15} min={10}>
      <NumberInputField />
      <NumberInputStepper>
        <NumberIncrementStepper />
        <NumberDecrementStepper />
      </NumberInputStepper>
    </NumberInput>

    <NumberInput size="md" defaultValue={15} min={10}>
      <NumberInputField />
      <NumberInputStepper>
        <NumberIncrementStepper />
        <NumberDecrementStepper />
      </NumberInputStepper>
    </NumberInput>

    <NumberInput size="lg" defaultValue={15} min={10}>
      <NumberInputField />
      <NumberInputStepper>
        <NumberIncrementStepper />
        <NumberDecrementStepper />
      </NumberInputStepper>
    </NumberInput>
  </Stack>
);

export const withCustomStyling = () => (
  <NumberInput size="sm" defaultValue={15} min={10}>
    <NumberInputField focusBorderColor="red.200" />
    <NumberInputStepper>
      <NumberIncrementStepper
        bg="green.200"
        _active={{ bg: 'green.300' }}
        children="+"
      />
      <NumberDecrementStepper
        bg="pink.200"
        _active={{ bg: 'pink.300' }}
        children="-"
      />
    </NumberInputStepper>
  </NumberInput>
);

export const WithSlider = () => {
  const [value, setValue] = React.useState(0);
  const handleChange = (value: any) => setValue(value);

  return (
    <Flex>
      <NumberInput maxW="100px" mr="2rem" value={value} onChange={handleChange}>
        <NumberInputField />
        <NumberInputStepper>
          <NumberIncrementStepper />
          <NumberDecrementStepper />
        </NumberInputStepper>
      </NumberInput>
      <Slider flex="1" value={value} onChange={handleChange}>
        <SliderTrack>
          <SliderFilledTrack />
        </SliderTrack>
        <SliderThumb fontSize="sm" boxSize="32px" children={value} />
      </Slider>
    </Flex>
  );
};
