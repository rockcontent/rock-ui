import { Box, Code } from '@chakra-ui/layout';
import { useToken } from '../index';
import React from 'react';
import { render } from '@testing-library/react';

const UseToken = () => {
  const [red100, blue200] = useToken(
    // the key within the theme, in this case `theme.colors`
    'colors',
    // the subkey(s), resolving to `theme.colors.red.100`
    ['red.100', 'blue.200']
    // a single fallback or fallback array matching the length of the previous arg
  );

  return (
    <Box
      data-testid="use-token"
      p={4}
      boxShadow={`inset 0 4px 0 ${red100}, 0 0 8px ${blue200}`}
    >
      You can utilize <Code>useToken</Code> to create a <Code>boxShadow</Code>{' '}
      with colors from your theme.
    </Box>
  );
};

describe('useToken', () => {
  it('should render correctly', () => {
    const { getByTestId } = render(<UseToken />);

    expect(getByTestId('use-token')).toBeTruthy();
  });
});
