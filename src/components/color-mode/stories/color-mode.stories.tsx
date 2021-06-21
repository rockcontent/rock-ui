import { MoonIcon, SunIcon } from '@chakra-ui/icons';
import { Box, Button } from '@chakra-ui/react';
import * as React from 'react';
import {
  useColorModeValue,
  useColorMode,
  ColorModeProvider,
  ColorModeOptions,
} from '../index';

export default {
  title: 'Color Mode',
  parameters: {
    componentSubtitle:
      'React component that adds support for light mode and dark mode using `localStorage` and `matchMedia`.',
  },
};

export const useColorModeValueExample = () => {
  const Icon = useColorModeValue(MoonIcon, SunIcon);
  const options: ColorModeOptions = {
    initialColorMode: 'light',
  };
  return (
    <ColorModeProvider options={options}>
      <Box bg="gray.500" maxWidth="max-content" p={6}>
        <Icon />
      </Box>
    </ColorModeProvider>
  );
};

export const BasicExample = () => {
  const Icon = useColorModeValue(MoonIcon, SunIcon);
  const { colorMode, toggleColorMode } = useColorMode();
  const options: ColorModeOptions = {
    initialColorMode: 'dark',
  };
  return (
    <header>
      <ColorModeProvider options={options}>
        <Button
          _focus={{ outline: 'none' }}
          onClick={toggleColorMode}
          rightIcon={<Icon />}
          color={colorMode === 'light' ? 'gray.500' : 'blue.500'}
        >
          Toggle {colorMode === 'light' ? 'Dark' : 'Light'}
        </Button>
      </ColorModeProvider>
    </header>
  );
};
