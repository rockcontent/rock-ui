import React from 'react';
import { Stack } from '../stack';
import { Input, InputRightElement, InputGroup, InputProps } from '../input';
import { IconButton } from '../button';
import { CalendarOutlineIcon } from '../../icons';

type TTemplateInputDatepicker = InputProps & {
  onClick?: () => void;
  isDisabled: boolean | undefined;
};

const TemplateInputDatepicker = React.forwardRef<any, TTemplateInputDatepicker>(
  ({ onClick, isDisabled, ...props }, ref: any) => (
    <Stack>
      <InputGroup>
        <InputRightElement>
          <IconButton
            disabled={isDisabled}
            borderRadius="2px"
            size="sm"
            variant="ghost"
            aria-label="Open calendar"
            onClick={onClick}
            icon={
              <CalendarOutlineIcon
                color="gray.800"
                w="16px"
                h="16px"
                title="Open calendar"
                alt="Open calendar"
              />
            }
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
