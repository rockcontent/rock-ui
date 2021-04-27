import React, { FC } from 'react';
import { Flex, FlexProps } from '@chakra-ui/react';
import { ProgressMode } from './entities/progress-mode';

export interface ProgressIndicatorProps extends FlexProps {
  children: JSX.Element[] | JSX.Element;
  /**
   * Defines the orientation of the progress
   */
  mode?: ProgressMode;
  /**
   * Defines the colorscheme of the progress
   */
  colorScheme?: string;
}

export const ProgressIndicator: FC<ProgressIndicatorProps> = ({
  mode = 'horizontal',
  children,
  colorScheme = 'blue',
  ...props
}) => {
  const childList: JSX.Element[] = Array.isArray(children)
    ? (children as JSX.Element[])
    : [children];

  return (
    <Flex direction={mode === 'vertical' ? 'column' : 'row'} {...props}>
      {React.Children.map(childList, (child, index) =>
        React.cloneElement(child, {
          index: index + 1,
          mode,
          colorScheme,
          key: index,
          ...child.props,
        })
      )}
    </Flex>
  );
};
