import React, { FC } from 'react';
import { Flex, FlexProps } from '@chakra-ui/react';
import { ProgressMode } from './entities/progress-mode';

export interface ProgressIndicatorProps extends FlexProps {
  children: JSX.Element[] | JSX.Element;
  mode?: ProgressMode;
}

export const ProgressIndicator: FC<ProgressIndicatorProps> = ({
  mode,
  children,
  ...props
}) => {
  const childList: JSX.Element[] = Array.isArray(children)
    ? (children as JSX.Element[])
    : [children];

  return (
    <Flex direction={mode === 'horizontal' ? 'row' : 'column'} {...props}>
      {childList.map((child, index) =>
        React.cloneElement(child, { index: index + 1, mode })
      )}
    </Flex>
  );
};
