import React, { FC } from 'react';
import {
  InputLeftAddon as BaseInputLeftAddon,
  InputAddonProps as BaseInputLeftAddonProps,
} from '@chakra-ui/react';

export { BaseInputLeftAddonProps as InputLeftAddonProps };

export const InputLeftAddon: FC<BaseInputLeftAddonProps> = props => (
  <BaseInputLeftAddon {...props} />
);
