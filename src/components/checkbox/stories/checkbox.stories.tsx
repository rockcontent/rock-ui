import * as React from 'react';
import { Container, Stack, HStack } from '@chakra-ui/layout';
import { Checkbox, CheckboxGroup } from '../';

export default {
  title: 'Checkbox',
  decorators: [
    (Story: any) => (
      <Container mt="40px">
        <Story />
      </Container>
    ),
  ],
};

export const basic = () => (
  <Checkbox defaultIsChecked style={{ borderColor: 'rgb(226, 232, 240)' }}>
    Checkbox
  </Checkbox>
);

export const disabled = () => (
  <Stack spacing={10} direction="row">
    <Checkbox isDisabled style={{ borderColor: 'rgb(226, 232, 240)' }}>
      Checkbox
    </Checkbox>
    <Checkbox
      isDisabled
      defaultIsChecked
      style={{ borderColor: 'rgb(226, 232, 240)' }}
    >
      Checkbox
    </Checkbox>
  </Stack>
);

export const withCustomColor = () => (
  <Stack spacing={10} direction="row">
    <Checkbox
      colorScheme="red"
      defaultIsChecked
      style={{ borderColor: 'rgb(226, 232, 240)' }}
    >
      Checkbox
    </Checkbox>
    <Checkbox
      colorScheme="green"
      defaultIsChecked
      style={{ borderColor: 'rgb(226, 232, 240)' }}
    >
      Checkbox
    </Checkbox>
  </Stack>
);

export const withSizes = () => (
  <HStack spacing={10} direction="row">
    <Checkbox
      size="sm"
      colorScheme="red"
      defaultIsChecked
      style={{ borderColor: 'rgb(226, 232, 240)' }}
    >
      Checkbox
    </Checkbox>
    <Checkbox
      size="md"
      colorScheme="green"
      defaultIsChecked
      style={{ borderColor: 'rgb(226, 232, 240)' }}
    >
      Checkbox
    </Checkbox>
    <Checkbox
      size="lg"
      colorScheme="orange"
      defaultIsChecked
      style={{ borderColor: 'rgb(226, 232, 240)' }}
    >
      Checkbox
    </Checkbox>
  </HStack>
);

export const invalidCheckbox = () => (
  <Checkbox isInvalid style={{ borderColor: 'rgb(226, 232, 240)' }}>
    Checkbox
  </Checkbox>
);

export const IndeterminateExample = () => {
  const [checkedItems, setCheckedItems] = React.useState([false, false]);

  const allChecked = checkedItems.every(Boolean);
  const isIndeterminate = checkedItems.some(Boolean) && !allChecked;

  return (
    <>
      <Checkbox
        style={{ borderColor: 'rgb(226, 232, 240)' }}
        isChecked={allChecked}
        isIndeterminate={isIndeterminate}
        onChange={e => setCheckedItems([e.target.checked, e.target.checked])}
        children="Parent Checkbox"
      />
      <Stack pl={6} mt={1} spacing={1}>
        <Checkbox
          style={{ borderColor: 'rgb(226, 232, 240)' }}
          isChecked={checkedItems[0]}
          onChange={e => setCheckedItems([e.target.checked, checkedItems[1]])}
          children="Child Checkbox 1"
        />
        <Checkbox
          style={{ borderColor: 'rgb(226, 232, 240)' }}
          isChecked={checkedItems[1]}
          onChange={e => setCheckedItems([checkedItems[0], e.target.checked])}
          children="Child Checkbox 2"
        />
      </Stack>
    </>
  );
};

export const checkboxGroup = () => (
  <CheckboxGroup colorScheme="green" defaultValue={['naruto', 'kakashi']}>
    <HStack>
      <Checkbox value="naruto" style={{ borderColor: 'rgb(226, 232, 240)' }}>
        Naruto
      </Checkbox>
      <Checkbox value="sasuke" style={{ borderColor: 'rgb(226, 232, 240)' }}>
        Sasuke
      </Checkbox>
      <Checkbox value="kakashi" style={{ borderColor: 'rgb(226, 232, 240)' }}>
        kakashi
      </Checkbox>
    </HStack>
  </CheckboxGroup>
);
