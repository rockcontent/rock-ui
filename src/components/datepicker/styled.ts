import styled from 'styled-components';
import { FONT_FAMILY } from '../../system/theme/theme';
import { COLORS } from '../../constants/colors/colors';
import { FONT_SIZES } from '../../constants/font-sizes/font-sizes';

export const StyledBaseReactDatePicker = styled.div`
  .react-datepicker {
    border-radius: 6px;
    background-color: #fff;
    border-color: ${COLORS.GRAY_200};
    font-family: ${FONT_FAMILY.body};
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
    right: 40px;
  }

  .react-datepicker__close-icon::after {
    background-color: ${COLORS.GRAY_500};
  }

  .react-datepicker__day-name {
    font-weight: 600;
    color: ${COLORS.GRAY_500};
  }

  .react-datepicker__day {
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

  .react-datepicker__year,
  .react-datepicker__header.react-datepicker__header--custom {
    margin: 0;
  }

  .react-datepicker__header {
    border-bottom: none;
    background-color: #fff;
    padding-top: 0;
    max-width: 252px;
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

  .react-datepicker__year-text.react-datepicker__year-text--keyboard-selected,
  .react-datepicker__year-text,
  .react-datepicker__month .react-datepicker__month-text,
  .react-datepicker__month .react-datepicker__quarter-text {
    color: ${COLORS.GRAY_900};
    font-size: ${FONT_SIZES.xs};
    font-weight: normal;
    width: 78px;
    padding-top: 11px;
    padding-bottom: 11px;
    background-color: #fff;

    &:focus {
      outline: none;
    }

    &:hover {
      background-color: ${COLORS.BLUE_50};
      color: ${COLORS.BLUE_500};
      font-weight: bold;
    }
  }

  .react-datepicker__year-text.react-datepicker__year-text--keyboard-selected.react-datepicker__year-text--today,
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

  .react-datepicker__day.react-datepicker__day--selected.react-datepicker__day--range-start.react-datepicker__day--in-range {
    background-color: ${COLORS.BLUE_500};
    color: #fff;
  }

  .react-datepicker__day--in-selecting-range,
  .react-datepicker__day.react-datepicker__day--selected.react-datepicker__day--range-end.react-datepicker__day--in-range,
  .react-datepicker__day.react-datepicker__day--in-range {
    background-color: ${COLORS.BLUE_100};
    color: ${COLORS.GRAY_900};
  }

  .react-datepicker-popper {
    margin-top: 4px;
  }

  .react-datepicker__month {
    margin: 0;
  }

  .react-datepicker__month-container {
    float: none;
  }
`;

//DayPicker_transitionContainer DayPicker_transitionContainer_1 DayPicker_transitionContainer__horizontal DayPicker_transitionContainer__horizontal_2
//CalendarMonthGrid_month__horizontal CalendarMonthGrid_month__horizontal_1
export const StyledBaseRangePicker = styled.div`
  .DayPicker {
    border-radius: 6px;
  }

  .CalendarMonth_caption {
    padding-bottom: 58px;
  }

  .CalendarMonth_caption {
    font-size: 14px;
    color: ${COLORS.GRAY_900};
  }

  // .CalendarMonthGrid_month__horizontal:nth-child(2) {
  //   border-right: 1px solid ${COLORS.GRAY_200};
  //   transition: all 0.5s;

  //   // &:before {
  //   //   content: '';
  //   //   position: absolute;
  //   //   top: 16px;
  //   //   bottom: 16px;
  //   //   right: calc(50% - 1px);
  //   //   width: 1px;
  //   //   background-color: ${COLORS.GRAY_200};
  //   //   z-index: 100;
  //   // }
  // }

  .CalendarMonth:first-child {
    // border-right: 1px solid red;
  }

  .DayPicker_weekHeader_li {
    small {
      color: ${COLORS.GRAY_500};
      font-size: 12px;
      font-weight: bold;
    }
  }

  .CalendarDay {
    background-color: #fff;
    border: none;
    font-family: ${FONT_FAMILY.body};
    color: ${COLORS.GRAY_900};
    padding: 2px;

    div {
      display: flex;
      justify-content: center;
      align-items: center;
      width: 32px !important;
      height: 32px !important;
      border-radius: 6px;
    }
  }

  .CalendarDay__default:hover {
    background: #fff;
    border: none;

    div {
      background-color: ${COLORS.BLUE_50};
      color: ${COLORS.BLUE_500};
      font-weight: bold;
    }
  }

  .CalendarDay__today {
    div {
      position: relative;

      &:before {
        content: '';
        position: absolute;
        width: 20px;
        left: calc(50% - 10px);
        bottom: 4px;
        height: 2px;
        border-radius: 1px;
        background-color: ${COLORS.BLUE_300};
      }
    }
  }

  .CalendarDay__selected_start,
  .CalendarDay__selected_start:hover {
    color: #fff;
    font-weight: bold;

    div {
      background-color: ${COLORS.BLUE_500};
      color: #fff;

      &:before {
        background-color: transparent;
      }
    }
  }

  .CalendarDay__selected_end,
  .CalendarDay__selected_end:hover,
  .CalendarDay__hovered_span,
  .CalendarDay__hovered_span:hover,
  .CalendarDay__selected_span,
  .CalendarDay__selected_span:hover {
    div {
      background-color: ${COLORS.BLUE_100};
      color: ${COLORS.GRAY_900};
      font-weight: normal;
    }
  }
`;
