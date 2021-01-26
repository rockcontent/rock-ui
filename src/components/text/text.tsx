import React, { FC } from 'react';
import { Text as BaseText, TextProps as BaseTextProps } from '@chakra-ui/react';

export { BaseTextProps as TextProps };

export const Text: FC<BaseTextProps> = ({ children, ...props }) => (
  <BaseText {...props}>{children}</BaseText>
);
