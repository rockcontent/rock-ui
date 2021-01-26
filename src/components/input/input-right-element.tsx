import React, { FC } from 'react';
import {
  InputRightElement as BaseInputRightElement,
  InputElementProps as BaseInputRightElementProps,
} from '@chakra-ui/react';

export { BaseInputRightElementProps as InputRightElementProps };

export const InputRightElement: FC<BaseInputRightElementProps> = props => (
  <BaseInputRightElement {...props} />
);
