import * as React from 'react';
import { Container } from '@chakra-ui/layout';
import { AsyncCreatableSelect } from '../';
import { colourOptions } from '../constants';

const filterColors = (inputValue: string) => {
  return colourOptions.filter(i =>
    i.label.toLowerCase().includes(inputValue.toLowerCase())
  );
};

const promiseOptions = (inputValue: string) =>
  new Promise(resolve => {
    setTimeout(() => {
      resolve(filterColors(inputValue));
    }, 1000);
  });

export default {
  title: 'Async Creatable Select',
  decorators: [
    (Story: any) => (
      <Container mt="40px">
        <Story />
      </Container>
    ),
  ],
};

export const withPromise = () => (
  <>
    <pre>Start typing in the select</pre>
    <AsyncCreatableSelect
      cacheOptions
      defaultOptions
      loadOptions={promiseOptions}
    />
  </>
);
