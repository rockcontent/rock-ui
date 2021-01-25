import * as React from 'react';
import { Text, Stack, Radio, RadioGroup } from '@chakra-ui/react';
import { Container } from '@chakra-ui/layout';
import { Textarea } from '../';

export default {
  title: 'Textarea',
  decorators: [
    (Story: any) => (
      <Container mt="40px">
        <Story />
      </Container>
    ),
  ],
};

export const basic = () => (
  <Textarea placeholder="Here is a sample placeholder" />
);

export const disabledTextarea = () => (
  <Textarea isDisabled placeholder="Here is a sample placeholder" />
);

export const invalidTextarea = () => (
  <Textarea isInvalid placeholder="Here is a sample placeholder" />
);

export const ControlledTextarea = () => {
  let [value, setValue] = React.useState('');

  let handleInputChange = (e: any) => {
    let inputValue = e.target.value;
    setValue(inputValue);
  };
  return (
    <>
      <Text mb="8px">Value: {value}</Text>
      <Textarea
        value={value}
        onChange={handleInputChange}
        placeholder="Here is a sample placeholder"
        size="sm"
      />
    </>
  );
};

export const WithResize = () => {
  const [resize, setResize] = React.useState('horizontal');

  return (
    <>
      <RadioGroup defaultValue={resize} onChange={setResize} mb={6}>
        <Stack direction="row" spacing={5}>
          <Radio value="horizontal">Horizontal</Radio>
          <Radio value="vertical">Vertical</Radio>
          <Radio value="none">None</Radio>
        </Stack>
      </RadioGroup>

      <Textarea
        placeholder="Here is a sample placeholder"
        size="sm"
        resize={resize}
      />
    </>
  );
};
