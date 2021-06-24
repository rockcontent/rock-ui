import { Text } from '@chakra-ui/layout';
import { render } from '@testing-library/react';
import React from 'react';
import { useMediaQuery } from '../index';

const MediaQuery = () => {
  const [isLargerThan768] = useMediaQuery('(min-width: 768px)');

  return (
    <Text data-testid="text">
      {isLargerThan768 ? 'larger than 768px' : 'smaller than 768px'}
    </Text>
  );
};

describe('useMediaQuery', () => {
  beforeEach(() => jest.clearAllMocks());

  it('test the width is smaller than 768px', () => {
    Object.defineProperty(window, 'innerWidth', {
      writable: true,
      configurable: true,
      value: 150,
    });

    window.dispatchEvent(new Event('resize'));

    const { getByTestId } = render(<MediaQuery />);

    expect(getByTestId('text').textContent).toBe('smaller than 768px');
    expect(window.innerWidth).toBe(150);
  });
});
