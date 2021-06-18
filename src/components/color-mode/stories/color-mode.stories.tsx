import { MoonIcon, SunIcon } from '@chakra-ui/icons';
import { Box, Button } from '@chakra-ui/react';
import * as React from 'react';
import { useColorModeValue, useColorMode } from '../index';

export default {
  title: 'Color Mode',
  parameters: {
    componentSubtitle:
      'React component that adds support for light mode and dark mode using `localStorage` and `matchMedia`.',
  },
};

export const useColorModeValueExample = () => {
  const Icon = useColorModeValue(MoonIcon, SunIcon);
  return (
    <Box>
      <Icon />
    </Box>
  );
};

export const BasicExample = () => {
  const { colorMode, toggleColorMode } = useColorMode();
  return (
    <header>
      <Button
        _focus={{ outline: 'none' }}
        onClick={toggleColorMode}
        color={colorMode === 'light' ? 'gray.500' : 'white'}
        bg={colorMode === 'light' ? 'whiteAlpha.500' : 'gray.500'}
        colorScheme={colorMode === 'light' ? 'white' : 'black'}
      >
        Toggle {colorMode === 'light' ? 'Dark' : 'Light'}
      </Button>
    </header>
  );
};
