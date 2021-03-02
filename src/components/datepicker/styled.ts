import ReactDatePicker from 'react-datepicker';
import styled from 'styled-components';
import { COLORS } from '../../constants/colors/colors';

export const StyledBaseReactDatePicker = styled(ReactDatePicker)`
  &.oi {
    background-color: red;
  }

  &#root > div > div > div > button {
    right: 32px;
  }

  &#root > div > div > div > button {
    &:after {
      background-color: ${COLORS.GRAY_100};
    }
  }
`;

export const Teste = styled.p`
  color: red;
`;
