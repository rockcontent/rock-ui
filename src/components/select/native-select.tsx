import React, { forwardRef } from 'react';
import {
  Select as BaseSelect,
  SelectProps as BaseSelectProps,
} from '@chakra-ui/react';

type RockUINativeSelectProps = {
  iconSize?: string;
};

type NativeSelectProps = RockUINativeSelectProps & BaseSelectProps;

export { NativeSelectProps };

export const NativeSelect = forwardRef<HTMLSelectElement, NativeSelectProps>(
  (props, ref) => (
    <BaseSelect {...props} ref={ref}>
      {props.children}
    </BaseSelect>
  )
);
