import React from 'react';
import { Stack } from '../stack';
import { Input, InputRightElement, InputGroup } from '../input';
import { IconButton } from '../button';
import { CalendarOutlineIcon } from '../../icons';

type TTemplateInputDatepicker = {
  onClick?: () => void;
};

const TemplateInputDatepicker = React.forwardRef<any, TTemplateInputDatepicker>(
  ({ onClick, ...props }, ref: any) => (
    <Stack>
      <InputGroup>
        <InputRightElement>
          <IconButton
            h="2.1rem"
            mr="0.4rem"
            variant="ghost"
            aria-label="Open calendar"
            onClick={onClick}
            icon={<CalendarOutlineIcon color="gray.800" />}
          />
        </InputRightElement>
        <Input {...props} ref={ref} data-testid="test-datepicker" />
      </InputGroup>
    </Stack>
  )
);

export default TemplateInputDatepicker;
