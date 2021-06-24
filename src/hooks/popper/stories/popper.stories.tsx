import { Container } from '@chakra-ui/layout';
import { Box, Button, useDisclosure } from '@chakra-ui/react';
import { motion, Variants } from 'framer-motion';
import React from 'react';
import { usePopper } from '../';

export default {
  title: 'Popper',
  decorators: [
    (Story: any) => (
      <Container mt="40px">
        <Story />
      </Container>
    ),
  ],
};

export const Basic = () => {
  const { isOpen, onToggle } = useDisclosure();

  const { referenceRef, popperRef } = usePopper({
    placement: 'bottom-start',
    matchWidth: true,
  });

  return (
    <>
      <Button ref={referenceRef} style={{ margin: 400 }} onClick={onToggle}>
        Reference Tooltip Trigger
      </Button>

      {isOpen && (
        <Box
          ref={popperRef}
          w={250}
          bg="red"
          p={15}
          borderRadius={6}
          style={{
            '--popper-arrow-bg': 'red',
          }}
        >
          Popper
          <Box data-popper-arrow="">
            <Box data-popper-arrow-inner="" />
          </Box>
        </Box>
      )}
    </>
  );
};

export const WithTransition = () => {
  const { isOpen, onToggle } = useDisclosure();

  const { referenceRef, popperRef } = usePopper({
    placement: 'bottom-start',
  });

  const slide: Variants = {
    exit: { y: -2, opacity: 0 },
    enter: { y: 0, opacity: 1 },
  };

  const bg = 'red';

  return (
    <>
      <Button ref={referenceRef} onClick={onToggle}>
        Toggle
      </Button>
      <Box ref={popperRef} style={{ '--popper-arrow-bg': 'red' }}>
        <motion.div
          transition={{
            duration: 0.15,
            easings: 'easeInOut',
          }}
          variants={slide}
          initial={false}
          animate={isOpen ? 'enter' : 'exit'}
          style={{
            background: bg,
            width: 200,
            transformOrigin: 'var(--popper-transform-origin)',
            borderRadius: 4,
          }}
        >
          Testing
          <Box data-popper-arrow="">
            <Box data-popper-arrow-inner="" />
          </Box>
        </motion.div>
      </Box>
    </>
  );
};
