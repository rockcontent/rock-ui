/* eslint-disable @typescript-eslint/no-unused-vars */
import * as React from 'react';
import { createDescendantContext } from '../index';
import { Input } from '@chakra-ui/react';

export default {
  title: 'Descendants / NumberInput',
  parameters: {
    componentSubtitle:
      'Keep track of descendant components and their relative indices. A descendant index solution for better accessibility support in compound components.',
  },
};

export const WithNumberInput = () => {
  const [
    DescendantsProvider,
    useDescendantsContext,
    useDescendants,
    useDescendant,
  ] = createDescendantContext<HTMLInputElement, { value?: string }>();
  function NumberInput({ children }: { children?: React.ReactNode }) {
    const descendants = useDescendants();

    React.useEffect(() => {
      descendants.first()?.node.focus();
    }, [descendants]);

    return (
      <DescendantsProvider value={descendants}>{children}</DescendantsProvider>
    );
  }
  function CustomInput() {
    const [focused, setFocused] = React.useState(false);
    const { register, index, descendants } = useDescendant();

    return (
      <Input
        width="50px"
        height="50px"
        margin={5}
        textAlign="center"
        type="number"
        maxLength={2}
        placeholder={focused ? '' : '-'}
        onFocus={() => setFocused(true)}
        onBlur={() => setFocused(false)}
        ref={register}
        onKeyDown={event => {
          if (event.key === 'ArrowRight') {
            descendants.next(index)?.node.focus();
          }
        }}
      />
    );
  }
  return (
    <NumberInput>
      <CustomInput />
      <CustomInput />
      <CustomInput />
    </NumberInput>
  );
};
