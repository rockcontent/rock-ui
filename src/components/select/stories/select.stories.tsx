import * as React from 'react';
import { Container } from '@chakra-ui/layout';
import { Checkbox } from '@chakra-ui/core';
import { Select, makeAnimated } from '../';
import { colourOptions } from '../constants';

export default {
  title: 'Select',
  decorators: [
    (Story: any) => (
      <Container mt="40px">
        <Story />
      </Container>
    ),
  ],
};

const animatedComponents = makeAnimated();

const initialState = {
  isClearable: true,
  isDisabled: false,
  isLoading: false,
  isRtl: false,
  isSearchable: true,
};

export const Basic = () => {
  const [state, setState] = React.useState(initialState);
  const toggleClearable = () =>
    setState({ ...state, isClearable: !state.isClearable });
  const toggleDisabled = () =>
    setState({ ...state, isDisabled: !state.isDisabled });
  const toggleLoading = () =>
    setState({ ...state, isLoading: !state.isLoading });
  const toggleRtl = () => setState({ ...state, isRtl: !state.isRtl });
  const toggleSearchable = () =>
    setState({ ...state, isSearchable: !state.isSearchable });

  return (
    <React.Fragment>
      <Select
        classNamePrefix="select"
        defaultValue={colourOptions[0]}
        isDisabled={state.isDisabled}
        isLoading={state.isLoading}
        isClearable={state.isClearable}
        isRtl={state.isRtl}
        isSearchable={state.isSearchable}
        name="color"
        options={colourOptions}
      />
      <Checkbox
        style={{ marginRight: '15px' }}
        checked={state.isClearable}
        defaultIsChecked={state.isClearable}
        onChange={toggleClearable}
      >
        Clearable
      </Checkbox>
      <Checkbox
        style={{ marginRight: '15px' }}
        checked={state.isSearchable}
        defaultIsChecked={state.isSearchable}
        onChange={toggleSearchable}
      >
        Searchable
      </Checkbox>
      <Checkbox
        style={{ marginRight: '15px' }}
        checked={state.isDisabled}
        defaultIsChecked={state.isDisabled}
        onChange={toggleDisabled}
      >
        Disabled
      </Checkbox>
      <Checkbox
        style={{ marginRight: '15px' }}
        checked={state.isLoading}
        defaultIsChecked={state.isLoading}
        onChange={toggleLoading}
      >
        Loading
      </Checkbox>
      <Checkbox
        style={{ marginRight: '15px' }}
        checked={state.isRtl}
        defaultIsChecked={state.isRtl}
        onChange={toggleRtl}
      >
        RTL
      </Checkbox>
    </React.Fragment>
  );
};

export const multi = () => (
  <Select
    defaultValue={[colourOptions[2], colourOptions[3]]}
    isMulti
    name="colors"
    options={colourOptions}
    className="basic-multi-select"
    classNamePrefix="select"
  />
);

export const withAnimation = () => (
  <Select
    closeMenuOnSelect={false}
    components={animatedComponents}
    defaultValue={[colourOptions[4], colourOptions[5]]}
    isMulti
    options={colourOptions}
  />
);
