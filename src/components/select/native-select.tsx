import React, { FC } from 'react';
import {
  Select as BaseSelect,
  SelectProps as BaseSelectProps,
} from '@chakra-ui/react';

type RockUINativeSelectProps = {
  iconSize?: string;
};

type NativeSelectProps = RockUINativeSelectProps & BaseSelectProps;

export { NativeSelectProps };

export const NativeSelect: FC<NativeSelectProps> = ({ children, ...props }) => (
  <BaseSelect {...props}>{children}</BaseSelect>
);
