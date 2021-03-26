import React from 'react';
import { Stack } from '../stack';
import { Input, InputRightElement, InputGroup, InputProps } from '../input';
import { IconButton } from '../button';
import { CalendarOutlineIcon } from '../../icons';

type TTemplateInputDatepicker = InputProps & {
  onClick?: () => void;
};

const TemplateInputDatepicker = React.forwardRef<any, TTemplateInputDatepicker>(
  ({ onClick, ...props }, ref: any) => (
    <Stack>
      <InputGroup>
        <InputRightElement>
          <IconButton
            borderRadius="2px"
            size="sm"
            variant="ghost"
            aria-label="Open calendar"
            onClick={onClick}
            icon={<CalendarOutlineIcon color="gray.800" />}
          />
        </InputRightElement>
        <Input
          {...props}
          borderWidth="2px"
          ref={ref}
          data-testid="test-datepicker"
        />
      </InputGroup>
    </Stack>
  )
);

export default TemplateInputDatepicker;
