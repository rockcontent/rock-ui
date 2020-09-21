import * as React from 'react';
import { Container, Stack, HStack, Box } from '@chakra-ui/layout';
import { Radio, RadioGroup, useRadio, useRadioGroup } from '../';

export default {
  title: 'Radio',
  decorators: [
    (Story: any) => (
      <Container mt="40px">
        <Story />
      </Container>
    ),
  ],
};

export const Basic = () => {
  const [value, setValue] = React.useState('1');
  return (
    <RadioGroup onChange={setValue} value={value}>
      <Stack direction="row">
        <Radio value="1" style={{ borderColor: 'rgb(226, 232, 240)' }}>
          First
        </Radio>
        <Radio value="2" style={{ borderColor: 'rgb(226, 232, 240)' }}>
          Second
        </Radio>
        <Radio value="3" style={{ borderColor: 'rgb(226, 232, 240)' }}>
          Third
        </Radio>
      </Stack>
    </RadioGroup>
  );
};

export const withCustomColors = () => (
  <RadioGroup defaultValue="2">
    <Stack spacing={5} direction="row">
      <Radio
        colorScheme="red"
        value="1"
        style={{ borderColor: 'rgb(226, 232, 240)' }}
      >
        Radio
      </Radio>
      <Radio
        colorScheme="green"
        value="2"
        style={{ borderColor: 'rgb(226, 232, 240)' }}
      >
        Radio
      </Radio>
    </Stack>
  </RadioGroup>
);

export const withSizes = () => (
  <Stack>
    <Radio
      size="sm"
      name="1"
      colorScheme="red"
      style={{ borderColor: 'rgb(226, 232, 240)' }}
    >
      Radio
    </Radio>
    <Radio
      size="md"
      name="1"
      colorScheme="green"
      style={{ borderColor: 'rgb(226, 232, 240)' }}
    >
      Radio
    </Radio>
    <Radio
      size="lg"
      name="1"
      colorScheme="orange"
      defaultChecked
      style={{ borderColor: 'rgb(226, 232, 240)' }}
    >
      Radio
    </Radio>
  </Stack>
);

export const disabled = () => (
  <RadioGroup defaultValue="1">
    <Stack>
      <Radio value="1" isDisabled style={{ borderColor: 'rgb(226, 232, 240)' }}>
        Default Checked
      </Radio>
      <Radio value="2" style={{ borderColor: 'rgb(226, 232, 240)' }}>
        R 2
      </Radio>
      <Radio value="3" style={{ borderColor: 'rgb(226, 232, 240)' }}>
        R 3
      </Radio>
    </Stack>
  </RadioGroup>
);

export const invalid = () => <Radio isInvalid>Radio</Radio>;

export const CustomRadio = () => {
  const options = ['react', 'vue', 'svelte'];

  const { getRootProps, getRadioProps } = useRadioGroup({
    name: 'framework',
    defaultValue: 'react',
    onChange: console.log,
  });

  const group = getRootProps();

  return (
    <HStack {...group}>
      {options.map(value => {
        const radio = getRadioProps({ value });
        return (
          <RadioCard key={value} {...radio}>
            {value}
          </RadioCard>
        );
      })}
    </HStack>
  );
};

function RadioCard(props: any) {
  const { getInputProps, getCheckboxProps } = useRadio(props);

  const input = getInputProps();
  const checkbox = getCheckboxProps();

  return (
    <Box as="label">
      <input {...input} />
      <Box
        {...checkbox}
        cursor="pointer"
        borderWidth="1px"
        borderRadius="md"
        boxShadow="md"
        _checked={{
          bg: 'teal.600',
          color: 'white',
          borderColor: 'teal.600',
        }}
        _focus={{
          boxShadow: 'outline',
        }}
        px={5}
        py={3}
      >
        {props.children}
      </Box>
    </Box>
  );
}
