import React, { useState, useEffect } from 'react';
import { Flex, Button, Spacer } from '@chakra-ui/react';
import { ChevronLeftOutlineIcon, ChevronRightOutlineIcon } from '../../icons';
import { format } from 'date-fns';

type TTemplateHeaderDatepicker = {
  setShowMonthYearPicker: React.Dispatch<React.SetStateAction<boolean>>;
  setShowYearPicker: React.Dispatch<React.SetStateAction<boolean>>;
  yearPicker: boolean;
  monthYearPicker: boolean;
  date: Date;
  decreaseMonth: () => void;
  increaseMonth: () => void;
  decreaseYear: () => void;
  increaseYear: () => void;
  prevMonthButtonDisabled: boolean;
  nextMonthButtonDisabled: boolean;
  prevYearButtonDisabled: boolean;
  nextYearButtonDisabled: boolean;
};

const TemplateHeaderDatepicker: React.FC<TTemplateHeaderDatepicker> = ({
  setShowMonthYearPicker,
  setShowYearPicker,
  yearPicker,
  monthYearPicker,
  date,
  decreaseMonth,
  increaseMonth,
  decreaseYear,
  increaseYear,
  prevMonthButtonDisabled,
  nextMonthButtonDisabled,
  prevYearButtonDisabled,
  nextYearButtonDisabled,
}): JSX.Element => {
  const [period, setPeriod] = useState<String>('');

  const changePeriod = () => {
    let years = document.getElementsByClassName(
      'react-datepicker__year-wrapper'
    );
    let firstYear = years[0]?.childNodes[0].textContent;
    let lastYear = years[0]?.childNodes[11].textContent;
    let newPeriod = `${firstYear} - ${lastYear}`;
    setPeriod(newPeriod);
  };

  const getCalendarYear = () => {
    setShowMonthYearPicker(false);
    setShowYearPicker(prevState => !prevState);
  };

  const getCalendarDefault = () => {
    setShowMonthYearPicker(false);
    setShowYearPicker(false);
  };

  const getDecreaseYear = () => {
    decreaseYear();
    setTimeout(() => {
      changePeriod();
    });
  };

  const getIncreaseYear = () => {
    increaseYear();
    setTimeout(() => {
      changePeriod();
    });
  };

  useEffect(() => {
    changePeriod();
  }, [yearPicker]);

  return (
    <Flex justifyContent="center">
      {!monthYearPicker && !yearPicker && (
        <>
          <Button
            variant="link"
            onClick={decreaseMonth}
            disabled={prevMonthButtonDisabled}
          >
            <ChevronLeftOutlineIcon />
          </Button>
          <Spacer />
          <Button
            className="react-datepicker__current-month"
            variant="link"
            onClick={() => setShowMonthYearPicker(prevState => !prevState)}
          >
            {format(date, 'MMMM')}
          </Button>
          <Spacer />
          <Button
            variant="link"
            onClick={increaseMonth}
            disabled={nextMonthButtonDisabled}
          >
            <ChevronRightOutlineIcon />
          </Button>
        </>
      )}

      {monthYearPicker && (
        <>
          <Button
            variant="link"
            onClick={decreaseYear}
            disabled={prevMonthButtonDisabled}
          >
            <ChevronLeftOutlineIcon />
          </Button>
          <Spacer />
          <Button
            className="react-datepicker__current-month"
            variant="link"
            onClick={getCalendarYear}
          >
            {format(date, 'yyyy')}
          </Button>
          <Spacer />
          <Button
            variant="link"
            onClick={increaseYear}
            disabled={nextMonthButtonDisabled}
          >
            <ChevronRightOutlineIcon />
          </Button>
        </>
      )}

      {yearPicker && (
        <>
          <Button
            variant="link"
            onClick={getDecreaseYear}
            disabled={prevYearButtonDisabled}
          >
            <ChevronLeftOutlineIcon />
          </Button>
          <Spacer />
          <Button
            className="react-datepicker__current-month"
            variant="link"
            onClick={getCalendarDefault}
          >
            {period}
          </Button>
          <Spacer />
          <Button
            variant="link"
            onClick={getIncreaseYear}
            disabled={nextYearButtonDisabled}
          >
            <ChevronRightOutlineIcon />
          </Button>
        </>
      )}
    </Flex>
  );
};

export default TemplateHeaderDatepicker;
