import { Box, Text } from '@chakra-ui/layout';
import { render } from '@testing-library/react';
import React from 'react';
import { SkipNavContent, SkipNavLink } from '../index';

describe('Skip Nav', () => {
  it('should render correctly', () => {
    const { getByTestId } = render(
      <Box>
        <SkipNavLink data-testid="nav-link">Skip to Content</SkipNavLink>
        <Box>
          <SkipNavContent data-testid="nav-content">
            <Text>Basic</Text>
          </SkipNavContent>
        </Box>
      </Box>
    );

    expect(getByTestId('nav-link').textContent).toContain('Skip to Content');
    expect(getByTestId('nav-content').textContent).toContain('Basic');
  });
});
