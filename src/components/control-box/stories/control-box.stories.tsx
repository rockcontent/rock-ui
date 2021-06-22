import * as React from 'react';
import { Container } from '@chakra-ui/layout';
import { ControlBox } from '../';
// import { Text } from '../../text';
import { VisuallyHidden } from '../../visually-hidden';
import { Icon } from '../../icon';
import { Box } from '../../layout';
import { Checkbox } from '../../checkbox';

export default {
  title: 'ControlBox',
  component: ControlBox,
  decorators: [
    (Story: any) => (
      <Container mt="40px">
        <Story />
      </Container>
    ),
  ],
};

export const CustomCheckbox = () => (
  <label>
    {/* This is the sibling input, it's visually hidden */}
    <VisuallyHidden as="input" type="checkbox" defaultChecked />

    {/* This is the control box with a check icon as children */}
    <ControlBox
      borderWidth="1px"
      w="24px"
      h="24px"
      rounded="sm"
      _checked={{ bg: 'green.500', color: 'white', borderColor: 'green.500' }}
      _focus={{ borderColor: 'green.600', boxShadow: 'outline' }}
    >
      <Icon name="check" w="24px" h="24px" />
    </ControlBox>

    {/* You can pass additional text */}
    <Box as="span" verticalAlign="top" ml={3}>
      Checkbox Label
    </Box>
  </label>
);

export const Radio = (props: any) => {
  return (
    <Box as="label" display="flex" alignItems="center" cursor="pointer">
      <VisuallyHidden type="radio" as="input" {...props} />
      <ControlBox
        w="16px"
        h="16px"
        bg="white"
        border="2px"
        rounded="full"
        type="radio"
        borderColor="inherit"
        _focus={{ boxShadow: 'outline' }}
        _hover={{ borderColor: 'gray.300' }}
        _disabled={{ opacity: 0.4 }}
        _checked={{ bg: 'green.500', borderColor: 'green.500' }}
      >
        <Box w="8px" h="8px" bg="white" rounded="full" />
      </ControlBox>
      <Box as="span" ml={2} verticalAlign="center" userSelect="none">
        This is a Radio
      </Box>
    </Box>
  );
};

export const Combined = () => (
  <Box maxWidth="md" mx="auto" mt={9}>
    <Checkbox />
    <br />
    <Radio name="id" />
    <Radio name="id" />
  </Box>
);
