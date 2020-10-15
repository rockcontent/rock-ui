import * as React from 'react';
import { Container } from '@chakra-ui/layout';
import { AsyncSelect } from '../';
import { colourOptions } from '../constants';

const filterColors = (inputValue: any) => {
  return colourOptions.filter(i =>
    i.label.toLowerCase().includes(inputValue.toLowerCase())
  );
};

const loadOptions = (inputValue: any, callback: any) => {
  setTimeout(() => {
    callback(filterColors(inputValue));
  }, 1000);
};

const promiseOptions = (inputValue: string) =>
  new Promise(resolve => {
    setTimeout(() => {
      resolve(filterColors(inputValue));
    }, 1000);
  });

export default {
  title: 'Async Select',
  decorators: [
    (Story: any) => (
      <Container mt="40px">
        <Story />
      </Container>
    ),
  ],
};

export const withCallback = () => {
  const handleInputChange = (newValue: string) => newValue.replace(/\W/g, '');
  return (
    <>
      <div>Start typing in the select</div>
      <AsyncSelect
        cacheOptions
        loadOptions={loadOptions}
        defaultOptions
        onInputChange={handleInputChange}
      />
    </>
  );
};

export const withPromises = () => (
  <>
    <pre>Start typing in the select</pre>
    <AsyncSelect cacheOptions defaultOptions loadOptions={promiseOptions} />
  </>
);
