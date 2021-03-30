import * as React from 'react';
import { Text } from '@chakra-ui/react';
import { Container, Stack } from '@chakra-ui/layout';
import { PhoneIcon, CheckIcon } from '@chakra-ui/icons';
import { Button } from '../../button';
import {
  Input,
  InputGroup,
  InputLeftElement,
  InputRightElement,
  InputLeftAddon,
  InputRightAddon,
} from '../';

export default {
  title: 'Input',
  decorators: [
    (Story: any) => (
      <Container mt="40px">
        <Story />
      </Container>
    ),
  ],
};

export const basic = () => <Input placeholder="Basic usage" />;

export const disabled = () => <Input placeholder="Basic usage" disabled />;

export const withSizes = () => (
  <Stack spacing={3}>
    <Input placeholder="large size" size="lg" />
    <Input placeholder="default size" size="md" />
    <Input placeholder="small size" size="sm" />
  </Stack>
);

export const withVariants = () => (
  <Stack spacing={3}>
    <Input variant="outline" placeholder="Outline" />
    <Input variant="filled" placeholder="Filled" />
    <Input variant="flushed" placeholder="Flushed" />
    <Input variant="unstyled" placeholder="Unstyled" />
  </Stack>
);

export const withAddons = () => (
  <Stack spacing={4}>
    <InputGroup>
      <InputLeftAddon children="+234" />
      <Input type="phone" borderLeftRadius="0" placeholder="phone number" />
    </InputGroup>
    <InputGroup size="sm">
      <InputLeftAddon children="https://" />
      <Input borderRadius="0" placeholder="mysite" />
      <InputRightAddon children=".com" />
    </InputGroup>
    <InputGroup>
      <InputLeftElement children={<PhoneIcon color="gray.300" />} />
      <Input type="phone" placeholder="Phone number" padding="0 40px" />
    </InputGroup>
    <InputGroup>
      <InputLeftElement color="gray.300" fontSize="1.2em" children="$" />
      <Input placeholder="Enter amount" padding="0 40px" />
      <InputRightElement children={<CheckIcon color="green.500" />} />
    </InputGroup>
  </Stack>
);

export const WithPassword = () => {
  const [show, setShow] = React.useState(false);
  const handleClick = () => setShow(!show);

  return (
    <InputGroup size="md">
      <Input
        pr="4.5rem"
        type={show ? 'text' : 'password'}
        placeholder="Enter password"
      />
      <InputRightElement width="4.5rem">
        <Button h="1.75rem" size="sm" onClick={handleClick}>
          {show ? 'Hide' : 'Show'}
        </Button>
      </InputRightElement>
    </InputGroup>
  );
};

export const ControlledInputWithHooks = () => {
  const [value, setValue] = React.useState('');
  const handleChange = (event: any) => setValue(event.target.value);

  return (
    <>
      <Text mb="8px">Value: {value}</Text>
      <Input
        value={value}
        onChange={handleChange}
        placeholder="Here is a sample placeholder"
        size="sm"
      />
    </>
  );
};

export const withValidation = () => (
  <Stack spacing={3}>
    <Input focusBorderColor="lime" placeholder="Here is a sample placeholder" />
    <Input
      focusBorderColor="pink.400"
      placeholder="Here is a sample placeholder"
    />
    <Input
      isInvalid
      errorBorderColor="red.300"
      placeholder="Here is a sample placeholder"
    />
    <Input
      isInvalid
      errorBorderColor="crimson"
      placeholder="Here is a sample placeholder"
    />
  </Stack>
);
