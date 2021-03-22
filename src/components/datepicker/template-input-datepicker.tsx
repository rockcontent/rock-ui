import React from 'react';
import { Stack } from '../stack';
import { Input, InputRightElement, InputGroup } from '../input';
import { IconButton } from '../button';
import { CalendarOutlineIcon } from '../../icons';

const TemplateInputDatepicker = React.forwardRef((props, ref: any) => (
  <Stack>
    <InputGroup>
      <InputRightElement>
        <IconButton
          h="2.1rem"
          mr="0.4rem"
          onClick={props.onClick}
          variant="ghost"
          aria-label="Open calendar"
          icon={<CalendarOutlineIcon color="gray.800" />}
        />
      </InputRightElement>
      <Input {...props} ref={ref} data-testid="test-datepicker" />
    </InputGroup>
  </Stack>
));

export default TemplateInputDatepicker;
