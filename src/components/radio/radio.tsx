import React, { FC } from 'react';
import {
  Radio as BaseRadio,
  RadioProps as BaseRadioProps,
} from '@chakra-ui/core';

export { BaseRadioProps as RadioProps };

export const Radio: FC<BaseRadioProps> = ({ children, ...props }) => (
  <BaseRadio {...props}>{children}</BaseRadio>
);
