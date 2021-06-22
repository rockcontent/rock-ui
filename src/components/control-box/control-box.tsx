import React from 'react';

import {
  ControlBox as ControlBoxBase,
  ControlBoxProps,
} from '@chakra-ui/react';

export const ControlBox: React.FC<ControlBoxProps> = (
  props: ControlBoxProps
) => <ControlBoxBase {...props} />;
