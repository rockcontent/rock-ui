import styled from 'styled-components';
import { FONT_FAMILY } from '../../system/theme/theme';
import { COLORS } from '../../constants/colors/colors';

//`react-datepicker__day react-datepicker__day--002 react-datepicker__day--today`;

export const StyledBaseReactDatePicker = styled.div`
  .react-datepicker {
    border-radius: 6px;
    background-color: #fff;
    border-color: ${COLORS.GRAY_200};
  }

  .react-datepicker-popper[data-placement^='bottom']
    .react-datepicker__triangle {
    border-bottom-color: #fff;
  }

  .react-datepicker-popper[data-placement^='bottom']
    .react-datepicker__triangle::before {
    border-bottom-color: ${COLORS.GRAY_200};
  }

  .react-datepicker__close-icon {
    right: 37px;
  }

  .react-datepicker__close-icon::after {
    background-color: ${COLORS.GRAY_500};
  }

  .react-datepicker__day-name {
    font-weight: 600;
    color: ${COLORS.GRAY_500};
    font-family: ${FONT_FAMILY.body};
  }

  .react-datepicker__day {
    font-family: ${FONT_FAMILY.body};
    color: ${COLORS.GRAY_900};
    outline: none;

    &:hover:not(.react-datepicker__day--selected):not(.react-datepicker__day--outside-month) {
      background-color: ${COLORS.BLUE_50};
      color: ${COLORS.BLUE_500};
      font-weight: bold;
    }
  }

  .react-datepicker__day--outside-month {
    color: ${COLORS.GRAY_500};
  }

  .react-datepicker__day--today {
    position: relative;

    &:before {
      content: '';
      position: absolute;
      bottom: 0;
      width: 20px;
      left: calc(50% - 10px);
      height: 2px;
      border-radius: 1px;
      background-color: ${COLORS.BLUE_300};
    }
  }

  .react-datepicker__day--keyboard-selected {
    background-color: #fff;
  }

  .react-datepicker__day--selected {
    color: #fff;
    background-color: ${COLORS.BLUE_500};
  }

  .react-datepicker__header {
    border-bottom: none;
    background-color: #fff;
  }
`;
