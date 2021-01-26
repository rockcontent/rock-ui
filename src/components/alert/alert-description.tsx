import React, { FC } from 'react';
import {
  AlertDescription as BaseAlertDescription,
  AlertDescriptionProps as BaseAlertDescriptionProps,
} from '@chakra-ui/react';

export { BaseAlertDescriptionProps as AlertDescriptionProps };

export const AlertDescription: FC<BaseAlertDescriptionProps> = ({
  children,
  ...props
}) => <BaseAlertDescription {...props}>{children}</BaseAlertDescription>;
