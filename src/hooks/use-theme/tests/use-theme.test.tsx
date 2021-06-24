import { Code, Flex } from '@chakra-ui/layout';
import { ChakraProvider } from '@chakra-ui/react';
import { render } from '@testing-library/react';
import React from 'react';
import { useTheme } from '../index';

export const UseTheme = () => {
  const theme = useTheme();

  return (
    <Flex>
      <Code p={5} mt={3} w="xs">
        <pre data-testid="render-theme">{JSON.stringify(theme, null, 2)}</pre>
      </Code>
    </Flex>
  );
};

describe('useTheme', () => {
  it('should return all props of theme object without data', () => {
    const { getByTestId } = render(<UseTheme />);

    expect(getByTestId('render-theme').textContent).toEqual('{}');
  });

  it('should return all props of theme object with data', () => {
    const { getByTestId } = render(
      <ChakraProvider cssVarsRoot>
        <UseTheme />
      </ChakraProvider>
    );

    expect(getByTestId('render-theme').textContent).not.toEqual('{}');
  });
});
