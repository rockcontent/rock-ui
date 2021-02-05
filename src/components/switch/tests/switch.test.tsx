import { render } from '@testing-library/react';
import * as React from 'react';
import { Switch } from '../';

test('Spinner renders correctly', () => {
  const { asFragment } = render(<Switch />);
  expect(asFragment()).toMatchSnapshot();
});
