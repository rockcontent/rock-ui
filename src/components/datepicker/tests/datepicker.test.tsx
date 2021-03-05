import React from 'react';
import '@testing-library/jest-dom';
import { render } from '@testing-library/react';
import { Datepicker } from '../';

// FUNCIONA
// describe('Datepicker', () => {
//   let component;
//   const setState = jest.fn();
//   const useStateSpy = jest.spyOn(React, 'useState');
//   useStateSpy.mockImplementation(() => [null, setState]);

//   afterEach(() => {
//     jest.clearAllMocks();
//   });

//   it('Datepicker renders correctly', () => {
//     component = <Datepicker onChange={setState} />;
//     const { unmount } = render(component);
//     expect(component).toBeTruthy();
//     unmount();
//   });
// });

describe('Datepicker', () => {
  it('Datepicker renders correctly', () => {
    const setState = jest.fn();
    const component = <Datepicker onChange={setState} />;
    const { unmount } = render(component);
    expect(component).toBeTruthy();
    unmount();
  });
});
