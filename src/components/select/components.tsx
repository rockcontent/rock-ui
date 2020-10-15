import * as React from 'react';
import { ChevronDownIcon, SmallCloseIcon } from '@chakra-ui/icons';

const ClearIndicator = (props: any) => {
  const {
    children = (
      <SmallCloseIcon
        boxSize="18px"
        style={{ cursor: 'pointer', display: 'block' }}
      />
    ),
    innerProps: { ref, ...restInnerProps },
  } = props;
  return (
    <div {...restInnerProps} ref={ref}>
      <div style={{ width: '18px', height: '18px' }}>{children}</div>
    </div>
  );
};

export const components = {
  DropdownIndicator: () => <ChevronDownIcon boxSize="20px" />,
  IndicatorSeparator: null,
  ClearIndicator,
};
