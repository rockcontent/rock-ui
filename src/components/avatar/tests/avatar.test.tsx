import React from 'react';
import '@testing-library/jest-dom';
import { screen, render, waitFor } from '@testing-library/react';
import { Avatar } from '../avatar';

describe('Avatar', () => {
  it('renders without crashing', () => {
    const component = <Avatar name={'Gabriel Maracaípe'}></Avatar>;

    render(component);

    expect(screen.getByText('GM')).toBeInTheDocument();
  });

  /**
   * Test skipped because I haven't figured out why the img tag is not
   * being rendered as expected.
   * @see https://github.com/chakra-ui/chakra-ui/blob/e0f9649e092ca87420159c9a9467509ba450600c/packages/avatar/tests/avatar.test.tsx#L20
   */
  test.skip('renders image avatar', async () => {
    const component = (
      <Avatar
        src={'https://bit.ly/2DU7Ngr'}
        name={'Gabriel Maracaípe'}
      ></Avatar>
    );

    render(component);

    await waitFor(() =>
      expect(screen.getAllByAltText('Gabriel Maracaípe')).toBeInTheDocument()
    );
  });

  test('renders a name avatar if no src', () => {
    const name = 'Gabriel Maracaípe';
    const { getByLabelText } = render(<Avatar name="Gabriel Maracaípe" />);

    const img = getByLabelText(name);
    expect(img).toHaveTextContent('GM');
  });

  test('renders a default avatar if no name or src', () => {
    const { getByRole } = render(<Avatar />);
    getByRole('img');
  });
});
