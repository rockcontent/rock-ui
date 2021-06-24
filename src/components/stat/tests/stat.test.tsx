import React from 'react';
import '@testing-library/jest-dom';
import { render } from '@testing-library/react';
import {
  StatGroup,
  Stat,
  StatLabel,
  StatNumber,
  StatHelpText,
  StatArrow,
} from '..';

describe('Stat', () => {
  it('should renders correctly', () => {
    const { findByTestId } = render(
      <StatGroup data-testid="group">
        <Stat>
          <StatLabel>Sent</StatLabel>
          <StatNumber>345,670</StatNumber>
          <StatHelpText>
            <StatArrow type="increase" />
            23.36%
          </StatHelpText>
        </Stat>

        <Stat>
          <StatLabel>Clicked</StatLabel>
          <StatNumber>45</StatNumber>
          <StatHelpText>
            <StatArrow type="decrease" />
            9.05%
          </StatHelpText>
        </Stat>
      </StatGroup>
    );
    expect(findByTestId('group')).toBeTruthy();
  });
});
