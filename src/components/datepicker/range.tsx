import React, { useEffect, useRef, useState } from 'react';

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
  <IconButton
    position="absolute"
    right={right}
    left={left}
    aria-label="Next month"
    onClick={onClick}
    icon={<Icon />}
    size="md"
    top="13px"
    variant="ghost"
    bg="transparent"
    _hover={{ bg: 'transparent' }}
  />
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

    const containerRef = useRef<HTMLDivElement>(null);

    useEffect(() => {
      if (containerRef) {
      }
    }, [containerRef]);

    const [focusedInput, setFocusedInput] = useState<
      'startDate' | 'endDate' | null
    >(null);

    useEffect(() => {
      const listener = (event: MouseEvent) => {
        if (!containerRef) return;

        const clickOutside = !containerRef?.current?.contains(
          event?.target as Node
        );

        if (clickOutside) setFocusedInput(null);
      };

      document.addEventListener('mousedown', listener);

      return () => document.removeEventListener('mousedown', listener);
    }, []);

    const changeFocus = (newFocus: 'startDate' | 'endDate' | null) => {
      if (newFocus === 'endDate' && !startDate) {
        return setFocusedInput('startDate');
      }

      setFocusedInput(newFocus);
    };

    const onClear = () => {
      onChangeStartDate(null);
      onChangeEndDate(null);
    };

    return (
      <Box ref={containerRef}>
        <Flex pb="1">
          <Box pr="2">
            <TemplateInputDatepicker
              w="281px"
              onFocus={() => changeFocus('startDate')}
              value={startDate?.format(dateFormat || 'DD/MM/YYYY') || ''}
              isReadOnly
              onChange={e => onChangeStartDate(moment(e.target.value))}
              onClick={() => changeFocus('startDate')}
              clearButton={!!startDate}
              onClear={onClear}
            />
          </Box>

          <Box pl="2">
            <TemplateInputDatepicker
              w="281px"
              onFocus={() => changeFocus('endDate')}
              value={endDate?.format(dateFormat || 'DD/MM/YYYY') || ''}
              isReadOnly
              onChange={e => onChangeEndDate(moment(e.target.value))}
              onClick={() => changeFocus('endDate')}
              clearButton={!!endDate}
              onClear={onClear}
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
              daySize={36}
              renderNavNextButton={({ onClick }) => (
                <ChevronButton
                  onClick={onClick}
                  right="16px"
                  Icon={ChevronRightOutlineIcon}
                />
              )}
              renderNavPrevButton={({ onClick }) => (
                <ChevronButton
                  onClick={onClick}
                  left="16px"
                  Icon={ChevronLeftOutlineIcon}
                />
              )}
              hideKeyboardShortcutsPanel
              renderDayContents={date => (
                <Box key={date.milliseconds()} fontSize="xs">
                  {date.date()}
                </Box>
              )}
              focusedInput={focusedInput}
              onFocusChange={setFocusedInput}
              initialVisibleMonth={() =>
                startDate || initialVisibleMonth || moment()
              }
            />
          </StyledBaseRangePicker>
        )}
      </Box>
    );
  }
);

export { RangePicker, RangePickerProps };
