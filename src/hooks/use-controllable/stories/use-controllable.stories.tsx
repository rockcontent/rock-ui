/* eslint-disable react-hooks/rules-of-hooks */
import { Box, Container, Text, Input } from '@chakra-ui/react';
import * as React from 'react';
import { useControllableState } from '../index';

export default {
  title: 'useControllable',
  decorators: [
    (Story: any) => (
      <Container mt="40px">
        <Story />
      </Container>
    ),
  ],
};

export const BasicUsage = () => {
  const [value, setValue] = React.useState(0);
  const onChange = (next: number) => {
    setValue(value + next);
  };

  const Controllable = ({
    valueControllable,
    onChangeControllable,
  }: {
    valueControllable: number;
    onChangeControllable: (next: number) => void;
  }) => {
    const [state, setState] = useControllableState({
      value: valueControllable,
      onChange: onChangeControllable,
    });

    return (
      <Box>
        <Text>{value}</Text>
        <Input
          type="text"
          value={state}
          onChange={e => setState(Number(e.target.value))}
        />
      </Box>
    );
  };

  return (
    <Controllable valueControllable={value} onChangeControllable={onChange} />
  );
};
