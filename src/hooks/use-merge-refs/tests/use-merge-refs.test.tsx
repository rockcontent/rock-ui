import React from 'react';
import { useMergeRefs } from '../';
import '@testing-library/jest-dom';
import { render } from '@testing-library/react';

const App = () => {
  const ref1 = React.useRef(null);
  const ref2 = React.useRef(null);
  const ref3 = React.useRef(null);
  const refs = useMergeRefs(ref1, ref2, ref3);

  return <div ref={refs}>app</div>;
};

describe('useMergeRefs', () => {
  it('renders without crashing', () => {
    const { getByText } = render(<App />);

    expect(getByText('app')).toBeTruthy();
  });
});
