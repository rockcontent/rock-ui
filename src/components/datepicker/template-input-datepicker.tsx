import React from 'react';
import { Stack } from '../stack';
import { Input, InputRightElement, InputGroup } from '../input';
import { CalendarIcon } from '@chakra-ui/icons';

const TemplateInputDatepicker = React.forwardRef((props, ref: any) => (
  <Stack>
    <InputGroup>
      <InputRightElement pointerEvents="none">
        <CalendarIcon color="gray.800" />
      </InputRightElement>
      <Input {...props} ref={ref} data-testid="test-datepicker" />
    </InputGroup>
  </Stack>
));

export default TemplateInputDatepicker;
