import React, { FC } from 'react';
import {
  InputRightAddon as BaseInputRightAddon,
  InputAddonProps as BaseInputRightAddonProps,
} from '@chakra-ui/react';

export { BaseInputRightAddonProps as InputRightAddonProps };

export const InputRightAddon: FC<BaseInputRightAddonProps> = props => (
  <BaseInputRightAddon {...props} />
);
