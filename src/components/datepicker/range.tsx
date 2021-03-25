import React, { useEffect, useState } from 'react';

import { StyledBaseRangePicker } from './styled';
import { DayPickerRangeController } from 'react-dates';
import { ChevronLeftOutlineIcon, ChevronRightOutlineIcon } from '../../icons';
import 'react-dates/initialize';
import 'react-dates/lib/css/_datepicker.css';
import moment from 'moment';
import { Box, Flex, IconButton } from '@chakra-ui/react';
import TemplateInputDatepicker from './template-input-datepicker';

export enum DatePickerMode {
  year = 'year',
  month = 'month',
  day = 'day',
}

moment.updateLocale('en', {
  weekdaysMin: ['S', 'M', 'T', 'W', 'T', 'F', 'S'],
});

type RangePickerProps = {
  startDate: moment.Moment | null;
  endDate: moment.Moment | null;
  onChangeStartDate: (date: moment.Moment | null) => void;
  onChangeEndDate: (date: moment.Moment | null) => void;
  initialVisibleMonth?: moment.Moment;
  dateFormat?: string;
};

type ChevronButtonProps = {
  onClick?: (event: React.MouseEvent<Element, MouseEvent>) => void;
  Icon: React.FC<any>;
  right?: string;
  left?: string;
};

const ChevronButton: React.FC<ChevronButtonProps> = ({
  onClick,
  Icon,
  right,
  left,
}) => (
  <Flex
    h="33px"
    alignItems="center"
    justifyContent="center"
    position="absolute"
    right={right}
    left={left}
    top="18px"
  >
    <IconButton
      aria-label="Next month"
      onClick={onClick}
      as={Icon}
      bg="transparent"
      size="16px"
      _hover={{ bg: 'transparent' }}
    />
  </Flex>
);

const RangePicker = React.forwardRef<any | null, RangePickerProps>(
  (props, ref) => {
    const {
      onChangeEndDate,
      onChangeStartDate,
      startDate,
      endDate,
      dateFormat,
      initialVisibleMonth,
    } = props;

    // const momentStartDate = startDate ? moment(startDate) : null;
    // const momentEndDate = endDate ? moment(endDate) : null;

    const [focusedInput, setFocusedInput] = useState<
      'startDate' | 'endDate' | null
    >(null);

    const changeFocus = (newFocus: 'startDate' | 'endDate' | null) => {
      if (newFocus === 'endDate' && !startDate) {
        return setFocusedInput('startDate');
      }

      setFocusedInput(newFocus);
    };

    return (
      <Box>
        <Flex pb="1">
          <Box pr="2">
            <TemplateInputDatepicker
              w="281px"
              onFocus={() => changeFocus('startDate')}
              value={startDate?.format(dateFormat || 'DD/MM/YYYY')}
              isReadOnly
              onChange={e => onChangeStartDate(moment(e.target.value))}
            />
          </Box>

          <Box pl="2">
            <TemplateInputDatepicker
              w="281px"
              onFocus={() => changeFocus('endDate')}
              value={endDate?.format(dateFormat || 'DD/MM/YYYY')}
              isReadOnly
              onChange={e => onChangeEndDate(moment(e.target.value))}
            />
          </Box>
        </Flex>
        {focusedInput && (
          <StyledBaseRangePicker>
            <DayPickerRangeController
              ref={ref}
              startDate={startDate}
              endDate={endDate}
              minDate={moment(0)}
              numberOfMonths={2}
              enableOutsideDays={false}
              isOutsideRange={() => false}
              onDatesChange={({
                startDate: newStartDate,
                endDate: newEndDate,
              }) => {
                onChangeStartDate(newStartDate);
                onChangeEndDate(newEndDate);
              }}
              onNextMonthClick={console.log}
              daySize={36}
              renderNavNextButton={({ onClick }) => (
                <ChevronButton
                  onClick={onClick}
                  right="32px"
                  Icon={ChevronRightOutlineIcon}
                />
              )}
              renderNavPrevButton={({ onClick }) => (
                <ChevronButton
                  onClick={onClick}
                  left="32px"
                  Icon={ChevronLeftOutlineIcon}
                />
              )}
              hideKeyboardShortcutsPanel
              renderDayContents={date => <div>{date.date()}</div>}
              focusedInput={focusedInput}
              onFocusChange={setFocusedInput}
              initialVisibleMonth={() => initialVisibleMonth || moment()}
            />
          </StyledBaseRangePicker>
        )}
      </Box>
    );
  }
);

export { RangePicker, RangePickerProps };
