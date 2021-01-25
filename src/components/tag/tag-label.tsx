import React, { FC } from 'react';
import {
  TagLabel as BaseTagLabel,
  TagLabelProps as BaseTagLabelProps,
} from '@chakra-ui/react';

export { BaseTagLabelProps as TagLabelProps };

export const TagLabel: FC<BaseTagLabelProps> = ({ children, ...props }) => (
  <BaseTagLabel {...props}>{children}</BaseTagLabel>
);
