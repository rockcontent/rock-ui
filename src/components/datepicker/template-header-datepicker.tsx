import React, { useState, useEffect } from 'react';
import { Flex, Button, Spacer } from '@chakra-ui/react';
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
  onChangeMode: (newMode: DatePickerMode) => void;
};

type TCustomHeaderByModeProps = {
  decreaseDate: () => void;
  increaseDate: () => void;
  onChangeMode: () => void;
  nextDateButtonDisabled: boolean;
  prevDateButtonDisabled: boolean;
  value: string;
};

const CustomHeaderByMode: React.FC<TCustomHeaderByModeProps> = ({
  decreaseDate,
  increaseDate,
  onChangeMode,
  nextDateButtonDisabled,
  prevDateButtonDisabled,
  value,
}) => (
  <>
    <Button
      variant="link"
      onClick={decreaseDate}
      disabled={prevDateButtonDisabled}
    >
      <ChevronLeftOutlineIcon />
    </Button>
    <Spacer />
    <Button
      className="react-datepicker__current-month"
      variant="link"
      onClick={onChangeMode}
    >
      {value}
    </Button>
    <Spacer />
    <Button
      variant="link"
      onClick={increaseDate}
      disabled={nextDateButtonDisabled}
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
  onChangeMode,
  mode,
}): JSX.Element => {
  const [period, setPeriod] = useState('');

  useEffect(() => {
    const startYear = 1969;
    const currentYear = date.getFullYear();

    const index = Math.floor((currentYear - startYear) / 12);
    const periodStart = startYear + 12 * index;
    const periodEnd = startYear + 11 + 12 * index;

    setPeriod(`${periodStart}-${periodEnd}`);
  }, [date]);

  return (
    <Flex justifyContent="center">
      {mode === DatePickerMode.day && (
        <CustomHeaderByMode
          decreaseDate={decreaseMonth}
          increaseDate={increaseMonth}
          value={format(date, 'MMMM')}
          prevDateButtonDisabled={prevMonthButtonDisabled}
          nextDateButtonDisabled={nextMonthButtonDisabled}
          onChangeMode={() => onChangeMode(DatePickerMode.month)}
        />
      )}

      {mode === DatePickerMode.month && (
        <CustomHeaderByMode
          decreaseDate={decreaseYear}
          increaseDate={increaseYear}
          value={format(date, 'yyyy')}
          prevDateButtonDisabled={prevYearButtonDisabled}
          nextDateButtonDisabled={nextYearButtonDisabled}
          onChangeMode={() => onChangeMode(DatePickerMode.year)}
        />
      )}

      {mode === DatePickerMode.year && (
        <CustomHeaderByMode
          decreaseDate={decreaseYear}
          increaseDate={increaseYear}
          value={period}
          prevDateButtonDisabled={prevYearButtonDisabled}
          nextDateButtonDisabled={nextYearButtonDisabled}
          onChangeMode={() => onChangeMode(DatePickerMode.day)}
        />
      )}
    </Flex>
  );
};

export default TemplateHeaderDatepicker;
