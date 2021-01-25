import React, { FC } from 'react';
import {
  Tooltip as BaseTooltip,
  TooltipProps as BaseTooltipProps,
} from '@chakra-ui/react';

export { BaseTooltipProps as TooltipProps };

export const Tooltip: FC<BaseTooltipProps> = ({ children, ...props }) => (
  <BaseTooltip {...props}>{children}</BaseTooltip>
);
