import styled from 'styled-components';
import { COLORS } from '../../constants/colors/colors';

export const StyledBaseReactDatePicker = styled.div`
  .react-datepicker__close-icon {
    right: 37px;
  }

  .react-datepicker__close-icon::after {
    background-color: ${COLORS.GRAY_500};
  }
`;
