import { HStack } from '@chakra-ui/layout';
import * as React from 'react';
import { PinInput, PinInputField } from '../index';

export default {
  title: 'PinInput',
  component: PinInput,
  subComponent: PinInputField,
};

export function ComponentExample() {
  return (
    <PinInput>
      <PinInputField />
      <PinInputField />
      <PinInputField />
    </PinInput>
  );
}

export const Sizes = () => (
  <>
    {['xs', 'sm', 'md', 'lg'].map(size => (
      <HStack spacing={2} key={size} style={{ marginBottom: '1rem' }}>
        <PinInput size={size}>
          <PinInputField />
          <PinInputField />
          <PinInputField />
        </PinInput>
      </HStack>
    ))}
  </>
);

export const Controlled = () => {
  const [value, setValue] = React.useState('');

  const handleChange = (valueChange: string) => {
    setValue(valueChange);
  };

  const handleComplete = (valueComplete: string) => {
    console.log(valueComplete);
  };

  return (
    <PinInput value={value} onChange={handleChange} onComplete={handleComplete}>
      <PinInputField />
      <PinInputField />
      <PinInputField />
    </PinInput>
  );
};
