import * as React from 'react';

import { render } from '@testing-library/react';
import { VisuallyHidden } from '../';
import { Input } from '../../input';

test('should render a visually hidden input', async () => {
  const { getByTestId } = render(
    <VisuallyHidden defaultChecked>
      <Input type="checkbox" data-testid="input" defaultChecked />
    </VisuallyHidden>
  );

  const input = getByTestId('input');

  expect(input).toBeInstanceOf(HTMLInputElement);
});
