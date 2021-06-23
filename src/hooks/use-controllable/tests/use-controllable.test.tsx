import { act, renderHook } from '@testing-library/react-hooks';
import { useControllableState } from '../index';
import React, { useState } from 'react';
import { render } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import '@testing-library/jest-dom';

describe('useControllable', () => {
  it('should be uncontrolled when defaultValue is passed', () => {
    const { result } = renderHook(() =>
      useControllableState({ defaultValue: 'testing' })
    );
    const [value] = result.current;
    expect(value).toBe('testing');

    act(() => {
      const [, setValue] = result.current;
      setValue('naruto');
    });

    const [next] = result.current;
    expect(next).toBe('naruto');
  });

  it('should be controlled when value is passed', () => {
    const { result } = renderHook(() =>
      useControllableState({ value: 'testing' })
    );
    const [value] = result.current;
    expect(value).toBe('testing');

    act(() => {
      const [, setValue] = result.current;
      setValue('naruto');
    });

    // value shouldn't change since it is controlled
    // we need to connect it to state for it to change
    const [next] = result.current;
    expect(next).toBe('testing');
  });

  test('onChange does not become stale when callback is updated', async () => {
    const Controllable = ({
      value,
      onChange,
    }: {
      value: number;
      onChange: (next: number) => void;
    }) => {
      const [state, setState] = useControllableState({ value, onChange });

      return (
        <div>
          <p data-testid="value">{value}</p>
          <input
            type="text"
            value={state}
            onChange={e => setState(Number(e.target.value))}
          />
        </div>
      );
    };

    const TestComponent = () => {
      const [value, setValue] = useState(0);
      const onChange = (next: number) => {
        setValue(value + next);
      };

      return <Controllable value={value} onChange={onChange} />;
    };

    const { getByTestId, getByRole, findByTestId } = render(<TestComponent />);

    expect(getByTestId('value')).toHaveTextContent('0');

    userEvent.type(getByRole('textbox'), '5');

    expect(await findByTestId('value')).toHaveTextContent('5');

    userEvent.type(getByRole('textbox'), '{selectall}1');

    expect(await findByTestId('value')).toHaveTextContent('6');
  });
});
