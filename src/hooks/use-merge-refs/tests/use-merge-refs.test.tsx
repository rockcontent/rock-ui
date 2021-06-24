import React from 'react';
import * as ReactDOM from 'react-dom';
import { useMergeRefs } from '../';

const App = () => {
  const ref1 = React.useRef(null);
  const ref2 = React.useRef(null);
  const ref3 = React.useRef(null);
  const refs = useMergeRefs(ref1, ref2, ref3);

  return <div ref={refs}>app</div>;
};

describe('useMergeRefs', () => {
  it('renders without crashing', () => {
    const div = document.createElement('div');
    ReactDOM.render(<App />, div);
    ReactDOM.unmountComponentAtNode(div);
  });
});
