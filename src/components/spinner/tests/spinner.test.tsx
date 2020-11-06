import { render } from '@testing-library/react';
import * as React from 'react';
import { Spinner } from '../';

test('Spinner renders correctly', () => {
  const { asFragment } = render(<Spinner />);
  expect(asFragment()).toMatchSnapshot();
});
