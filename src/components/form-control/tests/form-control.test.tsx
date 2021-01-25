import React from 'react';
import '@testing-library/jest-dom';
import { render } from '@testing-library/react';
import { Input } from '@chakra-ui/react';
import { FormControl, FormHelperText, FormLabel } from '../';

describe('Form Control', () => {
  it('renders without crashing', () => {
    const component = (
      <FormControl id="email">
        <FormLabel>Email address</FormLabel>
        <Input type="email" data-testid="test-input" />
        <FormHelperText>We'll never share your email.</FormHelperText>
      </FormControl>
    );

    const { getByText, getByTestId, unmount } = render(component);

    const label = getByText('Email address');
    const input = getByTestId('test-input');
    const helperText = getByText("We'll never share your email.");

    expect(label).toBeInTheDocument();
    expect(input).toBeInTheDocument();
    expect(helperText).toBeInTheDocument();

    unmount();
  });
});
