import React from 'react';
import { Button } from '../button';
import { Box, Flex } from '../layout';
import DatePickerMode from './utils/datepicker-mode';

type TContainerDatepicker = {
  className?: string;
  children?: React.ReactNode;
  setDate: (date: Date | null) => void;
  mode: DatePickerMode;
  date: Date | null | undefined;
  goToThisDay: () => void;
  goToThisMonth: () => void;
  goToThisYear: () => void;
};

const ContainerDatepicker: React.FC<TContainerDatepicker> = ({
  className,
  children,
  setDate,
  mode,
  date,
  goToThisDay,
  goToThisMonth,
  goToThisYear,
}): JSX.Element => {
  const gotToThis = () => {
    if (mode === DatePickerMode.day) {
      goToThisDay();
    } else if (mode === DatePickerMode.month) {
      goToThisMonth();
    } else {
      goToThisYear();
    }
  };

  return (
    <Box className={className} px="20px" py="16px" boxShadow="base">
      <Box style={{ position: 'relative' }}>{children}</Box>
      <Flex justifyContent="center" alignItems="center">
        <Button
          size="xs"
          bg="gray.100"
          w="120px"
          mt="5px"
          onClick={() => gotToThis()}
        >
          {mode === DatePickerMode.day && 'Today'}
          {mode === DatePickerMode.month && 'This month'}
          {mode === DatePickerMode.year && 'This year'}
        </Button>
        <Button
          size="xs"
          bg="gray.100"
          w="120px"
          ml="6px"
          mt="5px"
          isDisabled={!date}
          onClick={() => setDate(null)}
        >
          Clear
        </Button>
      </Flex>
    </Box>
  );
};
export default ContainerDatepicker;
