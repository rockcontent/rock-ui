import { render } from '@testing-library/react';
import React from 'react';

import { Kbd } from '../';
import '@testing-library/jest-dom';

describe('KBD', () => {
  it('renders KBD', () => {
    const { getByTestId } = render(<Kbd data-testid="kbd">Shift</Kbd>);

    expect(getByTestId('kbd')).toBeTruthy();
  });
});
