import * as React from 'react';

import { render } from '@testing-library/react';
import { ControlBox } from '../';
import { Box } from '../../layout';
import { Checkbox } from '../../checkbox';

test('should render control box', async () => {
  const { getByTestId } = render(
    <Box>
      <Checkbox />
      <ControlBox data-test defaultChecked data-testid="control-box" />
    </Box>
  );

  const controlBox = getByTestId('control-box');

  expect(controlBox).not.toBeNull();
});
