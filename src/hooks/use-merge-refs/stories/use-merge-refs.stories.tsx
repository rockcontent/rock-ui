/* eslint-disable react-hooks/rules-of-hooks */
import { Container } from '@chakra-ui/layout';
import {
  Box,
  Button,
  Text,
  useDisclosure,
  useOutsideClick,
  usePopper,
} from '@chakra-ui/react';
import * as React from 'react';
import { useMergeRefs } from '../index';

export default {
  title: 'useMergeRefs',
  decorators: [
    (Story: any) => (
      <Container mt="40px">
        <Story />
      </Container>
    ),
  ],
};

export const basic = () => {
  const ref1 = React.useRef(null);
  const ref2 = React.useRef(null);
  const ref3 = React.useRef(null);
  const refs = useMergeRefs(ref1, ref2, ref3);

  return (
    <Box ref={refs}>
      <Text color="black">A div with multiple refs.</Text>
    </Box>
  );
};

export const combiningWithAnotherHooks = () => {
  const outsideRef = React.useRef(null);
  const { isOpen, onOpen, onClose } = useDisclosure();
  const { popperRef, referenceRef } = usePopper();

  useOutsideClick({
    ref: outsideRef,
    handler: () => isOpen && onClose(),
  });

  const buttonEl = useMergeRefs(outsideRef, referenceRef);

  return (
    <>
      <Button
        ref={buttonEl}
        onClick={onOpen}
        colorScheme="teal"
        variant="outline"
      >
        Click me to see the popover
      </Button>
      {isOpen && (
        <Box ref={popperRef} bg="green" p={1} borderRadius={1}>
          <Text color="white">Click outside to close me</Text>
        </Box>
      )}
    </>
  );
};
