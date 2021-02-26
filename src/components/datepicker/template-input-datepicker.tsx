import React from 'react';
import { Stack } from '../stack';
import { Input, InputLeftElement, InputGroup } from '../input';
import { CalendarIcon } from '@chakra-ui/icons';

const TemplateInputDatepicker = React.forwardRef((props, ref: any) => (
  <Stack>
    <InputGroup>
      <InputLeftElement pointerEvents="none">
        <CalendarIcon color="gray.300" />
      </InputLeftElement>
      <Input {...props} ref={ref} />
    </InputGroup>
  </Stack>
));

export default TemplateInputDatepicker;
