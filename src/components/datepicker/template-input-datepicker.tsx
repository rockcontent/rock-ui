import React from 'react';
import { Stack } from '../stack';
import { Input, InputRightElement, InputGroup } from '../input';
import { CalendarOutlineIcon } from '../../icons';

const TemplateInputDatepicker = React.forwardRef((props, ref: any) => (
  <Stack>
    <InputGroup>
      <InputRightElement pointerEvents="none">
        <CalendarOutlineIcon color="gray.800" />
      </InputRightElement>
      <Input {...props} ref={ref} data-testid="test-datepicker" />
    </InputGroup>
  </Stack>
));

export default TemplateInputDatepicker;
