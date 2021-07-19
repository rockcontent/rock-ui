import { useInterval } from '@chakra-ui/hooks';
import { Box, ListItem, UnorderedList } from '@chakra-ui/layout';

import * as React from 'react';
import { createDescendantContext } from '../index';

export default {
  title: 'Descendants / Async',
};

export const DescendantsWithInterval = () => {
  const [done, setDone] = React.useState(false);
  const [
    DescendantsProvider,
    // eslint-disable-next-line @typescript-eslint/no-unused-vars
    useDescendantsContext,
    useDescendants,
    useDescendant,
  ] = createDescendantContext<HTMLDivElement, { value?: string }>();

  function Select({ children }: { children?: React.ReactNode }) {
    const descendants = useDescendants();
    const count = descendants.count();

    React.useEffect(() => {
      descendants.last()?.node.focus();
    }, [descendants, count]);

    return (
      <DescendantsProvider value={descendants}>{children}</DescendantsProvider>
    );
  }

  function Option({ value, disabled }: { value?: string; disabled?: boolean }) {
    const { register, index, descendants } = useDescendant({
      disabled,
    });

    return (
      <Box
        ref={register}
        role="button"
        tabIndex={0}
        data-value={value}
        onKeyDown={event => {
          if (event.key === 'ArrowDown') {
            descendants.next(index)?.node.focus();
          }
        }}
      >
        Option {index + 1}
      </Box>
    );
  }

  useInterval(() => {
    setDone(!done);
  }, 3000);

  return (
    <Select>
      <UnorderedList>
        <ListItem>
          <Option value="option 1" />
        </ListItem>
        <ListItem>
          <Option value="option 2" />
        </ListItem>
        <ListItem>
          <Option value="option 3" />
        </ListItem>
        <ListItem>
          <Option value="option 4" />
        </ListItem>
        {done && (
          <Box>
            <ListItem>
              <Option value="option 3" />
            </ListItem>
            <ListItem>
              <Option value="option 4" />
            </ListItem>
          </Box>
        )}
      </UnorderedList>
    </Select>
  );
};
