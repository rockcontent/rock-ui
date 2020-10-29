import BaseSelect from 'react-select';
import styled from 'styled-components';
import { COLORS } from 'constants/colors/colors';

export const StyledBaseSelect = styled(BaseSelect)`
  border-color: inherit;

  &:hover {
    border-color: ${COLORS.GRAY_300};
  }

  &.rock__control--is-focused {
    border-color: ${COLORS.BLUE_500};
    box-shadow: 0 0 0 1px ${COLORS.BLUE_500};
  }

  .rock__placeholder,
  .select__value-container {
    color: #777;
  }

  .rock__value-container,
  .select__value-container {
    padding-left: 1rem;
  }

  .rock__indicators,
  .select__indicators {
    padding-right: 12px;
  }
`;
