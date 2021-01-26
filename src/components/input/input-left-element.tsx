import React, { FC } from 'react';
import {
  InputLeftElement as BaseInputLeftElement,
  InputElementProps as BaseInputLeftElementProps,
} from '@chakra-ui/react';

export { BaseInputLeftElementProps as InputLeftElementProps };

export const InputLeftElement: FC<BaseInputLeftElementProps> = props => (
  <BaseInputLeftElement {...props} />
);
