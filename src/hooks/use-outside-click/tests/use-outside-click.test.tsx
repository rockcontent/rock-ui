import React from 'react';
import { useOutsideClick } from '../';
import '@testing-library/jest-dom';
import { render, screen, fireEvent } from '@testing-library/react';
import { Box, Text, Button } from '@chakra-ui/react';

const App = () => {
  const ref = React.useRef(null);
  const [isModalOpen, setIsModalOpen] = React.useState(false);
  useOutsideClick({
    ref: ref,
    handler: () => setIsModalOpen(false),
  });

  return (
    <>
      {isModalOpen ? (
        <Box ref={ref}>
          <Text color="black">
            Hey, I'm a modal. Click anywhere outside of me to close.
          </Text>
        </Box>
      ) : (
        <Button
          onClick={() => setIsModalOpen(true)}
          colorScheme="teal"
          variant="outline"
        >
          Open Modal
        </Button>
      )}
    </>
  );
};

describe('useOutsideClick', () => {
  it('renders without crashing', () => {
    const { getByText } = render(<App />);
    expect(getByText('Open Modal')).toBeTruthy();
  });

  it('render after click', () => {
    render(<App />);
    const button = screen.getByText('Open Modal');

    fireEvent.click(button);
    expect(
      screen.getByText(
        "Hey, I'm a modal. Click anywhere outside of me to close."
      )
    ).toBeTruthy();
  });
});
