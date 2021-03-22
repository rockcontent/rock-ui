import React from 'react';
import { Button } from '../button';
import { Box } from '../layout';
import { DatePickerMode } from './datepicker';

type TContainerDatepicker = {
  className?: string;
  children?: React.ReactNode;
  setDate: (date: Date | null) => void;
  mode: DatePickerMode;
};

const ContainerDatepicker: React.FC<TContainerDatepicker> = ({
  className,
  children,
  setDate,
  mode,
}): JSX.Element => {
  return (
    <Box className={className} px="19px" py="16px">
      <Box style={{ position: 'relative' }}>{children}</Box>
      <Button
        size="xs"
        bg="gray.200"
        w="120px"
        mt="5px"
        onClick={() => setDate(new Date())}
      >
        {mode === DatePickerMode.day && 'Today'}
        {mode === DatePickerMode.month && 'This month'}
        {mode === DatePickerMode.year && 'This year'}
      </Button>
      <Button
        size="xs"
        bg="gray.200"
        w="120px"
        ml="8px"
        mt="5px"
        onClick={() => setDate(null)}
      >
        Clear
      </Button>
    </Box>
  );
};
export default ContainerDatepicker;
