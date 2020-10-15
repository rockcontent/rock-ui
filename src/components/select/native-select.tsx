import React, { FC } from 'react';
import {
  Select as BaseSelect,
  SelectProps as BaseSelectProps,
} from '@chakra-ui/core';

interface NativeSelectProps extends BaseSelectProps {
  iconSize?: string;
}

export { NativeSelectProps };

export const NativeSelect: FC<NativeSelectProps> = ({ children, ...props }) => (
  <BaseSelect {...props}>{children}</BaseSelect>
);
