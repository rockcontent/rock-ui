import styled from 'styled-components';
import { FONT_FAMILY } from '../../system/theme/theme';
import { COLORS } from '../../constants/colors/colors';
import { FONT_SIZES } from '../../constants/font-sizes/font-sizes';

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

  .react-datepicker__current-month {
    text-transform: capitalize;
    color: ${COLORS.GRAY_900};
    padding: 2px 3px;

    &:hover {
      background-color: ${COLORS.BLUE_50};
      color: ${COLORS.BLUE_500};
      text-decoration: none;
    }
  }

  .react-datepicker__year-text,
  .react-datepicker__month .react-datepicker__month-text,
  .react-datepicker__month .react-datepicker__quarter-text {
    color: ${COLORS.GRAY_900};
    font-size: ${FONT_SIZES.xs};
    font-weight: normal;
    width: 80px;
    padding-top: 11px;
    padding-bottom: 11px;

    &:focus {
      outline: none;
    }

    &:hover {
      background-color: ${COLORS.BLUE_50};
      color: ${COLORS.BLUE_500};
      font-weight: bold;
    }
  }

  .react-datepicker__year-text.react-datepicker__year-text--keyboard-selected,
  .react-datepicker__year-text--today.react-datepicker__year-text.react-datepicker__year-text--selected,
  .react-datepicker__year-text.react-datepicker__year-text--selected,
  .react-datepicker__month-text.react-datepicker__month-text--keyboard-selected {
    font-weight: bold;
    color: #fff;
    border-bottom-color: ${COLORS.GRAY_200};
    background-color: ${COLORS.BLUE_500};
  }

  .react-datepicker__day--today,
  .react-datepicker__year-text--today {
    position: relative;

    &:before {
      content: '';
      position: absolute;
      width: 20px;
      left: calc(50% - 10px);
      height: 2px;
      border-radius: 1px;
      background-color: ${COLORS.BLUE_300};
    }
  }

  .react-datepicker__day--today {
    &:before {
      bottom: 4px;
    }
  }

  .react-datepicker__year-text--today {
    &:before {
      bottom: 10px;
    }
  }

  .react-datepicker__year-wrapper {
    max-width: 252px;
  }

  .react-datepicker__year-text {
    flex-grow: 1;
  }

  .react-datepicker__year-text--disabled,
  .react-datepicker__month--disabled,
  .react-datepicker__day--disabled {
    color: ${COLORS.GRAY_500};
    border-radius: 6px;
    opacity: 40%;
    background-color: ${COLORS.GRAY_100};

    &[role='button']:hover {
      cursor: default;
      color: ${COLORS.GRAY_500};
    }
  }
`;
