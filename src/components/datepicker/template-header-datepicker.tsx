import React, { useState, useEffect } from 'react';
import { Flex, Spacer } from '../layout';
import { Button } from '../button';
import { ChevronLeftOutlineIcon, ChevronRightOutlineIcon } from '../../icons';
import { format } from 'date-fns';
import { DatePickerMode } from './datepicker';

type TTemplateHeaderDatepicker = {
  date: Date;
  decreaseMonth: () => void;
  increaseMonth: () => void;
  decreaseYear: () => void;
  increaseYear: () => void;
  prevMonthButtonDisabled: boolean;
  nextMonthButtonDisabled: boolean;
  prevYearButtonDisabled: boolean;
  nextYearButtonDisabled: boolean;
  mode: DatePickerMode;
  toNextMode: () => void;
};

type TCustomHeaderByModeProps = {
  decreaseDate: () => void;
  increaseDate: () => void;
  onChangeMode?: () => void;
  nextDateButtonDisabled: boolean;
  prevDateButtonDisabled: boolean;
  value: string;
  changeModeDisabled?: boolean;
  className?: string;
};

const CustomHeaderByMode: React.FC<TCustomHeaderByModeProps> = ({
  decreaseDate,
  increaseDate,
  onChangeMode,
  nextDateButtonDisabled,
  prevDateButtonDisabled,
  changeModeDisabled,
  value,
  className,
}) => (
  <>
    <Button
      variant="link"
      onClick={decreaseDate}
      disabled={prevDateButtonDisabled}
      minW="32px"
      minH="32px"
    >
      <ChevronLeftOutlineIcon />
    </Button>
    <Spacer />
    <Button
      className={'react-datepicker__current-month ' + className}
      variant="link"
      disabled={changeModeDisabled}
      onClick={onChangeMode}
      data-testid="test-datepicker-header-button"
    >
      {value}
    </Button>
    <Spacer />
    <Button
      variant="link"
      onClick={increaseDate}
      disabled={nextDateButtonDisabled}
      minW="32px"
      minH="32px"
    >
      <ChevronRightOutlineIcon />
    </Button>
  </>
);

const TemplateHeaderDatepicker: React.FC<TTemplateHeaderDatepicker> = ({
  date,
  decreaseMonth,
  increaseMonth,
  decreaseYear,
  increaseYear,
  prevMonthButtonDisabled,
  nextMonthButtonDisabled,
  prevYearButtonDisabled,
  nextYearButtonDisabled,
  mode,
  toNextMode,
}): JSX.Element => {
  const [period, setPeriod] = useState('');

  useEffect(() => {
    const startYear = 1969;
    const currentYear = date.getFullYear();

    const index = Math.floor((currentYear - startYear) / 12);
    const periodStart = startYear + 12 * index;
    const periodEnd = startYear + 11 + 12 * index;

    setPeriod(`${periodStart} - ${periodEnd}`);
  }, [date]);

  return (
    <Flex justifyContent="center">
      {mode === DatePickerMode.day && (
        <CustomHeaderByMode
          decreaseDate={decreaseMonth}
          increaseDate={increaseMonth}
          value={format(date, 'MMMM yyyy')}
          prevDateButtonDisabled={prevMonthButtonDisabled}
          nextDateButtonDisabled={nextMonthButtonDisabled}
          onChangeMode={toNextMode}
        />
      )}

      {mode === DatePickerMode.month && (
        <CustomHeaderByMode
          decreaseDate={decreaseYear}
          increaseDate={increaseYear}
          value={format(date, 'yyyy')}
          prevDateButtonDisabled={prevYearButtonDisabled}
          nextDateButtonDisabled={nextYearButtonDisabled}
          onChangeMode={toNextMode}
        />
      )}

      {mode === DatePickerMode.year && (
        <CustomHeaderByMode
          decreaseDate={decreaseYear}
          increaseDate={increaseYear}
          value={period}
          prevDateButtonDisabled={prevYearButtonDisabled}
          nextDateButtonDisabled={nextYearButtonDisabled}
          className="react-datepicker__current-month-year"
        />
      )}
    </Flex>
  );
};

export default TemplateHeaderDatepicker;
