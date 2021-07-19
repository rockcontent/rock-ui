import '@testing-library/jest-dom';
import { fireEvent, render, waitFor } from '@testing-library/react';
import * as React from 'react';
import {
  PinInputProvider,
  usePinInput,
  usePinInputField,
  UsePinInputProps,
  PinInputDescendantsProvider,
} from '../index';
import userEvent from '@testing-library/user-event';

const Input = (props: any) => {
  const inputProps = usePinInputField(props);
  return <input {...inputProps} />;
};

const Component = (props: UsePinInputProps = {}) => {
  const { descendants, ...context } = usePinInput(props);
  return (
    <PinInputDescendantsProvider value={descendants}>
      <PinInputProvider value={context}>
        <Input data-testid="1" />
        <Input data-testid="2" />
        <Input data-testid="3" />
        <button onClick={() => context.clear()}>Clear</button>
      </PinInputProvider>
    </PinInputDescendantsProvider>
  );
};

describe('PinInput', () => {
  it('has the proper aria attributes', () => {
    const { queryAllByLabelText } = render(<Component />);
    expect(queryAllByLabelText('Please enter your pin code')).toHaveLength(3);
  });
  it('can autofocus the first field', async () => {
    const { getByTestId } = render(<Component autoFocus />);
    await waitFor(() => expect(getByTestId('1')).toHaveFocus());
  });

  it('typing in an input automatically moves focus to the next item', async () => {
    const { getByTestId } = render(<Component />);

    userEvent.type(getByTestId('1'), '1');
    await waitFor(() => expect(getByTestId('2')).toHaveFocus());

    userEvent.type(getByTestId('2'), '2');
    await waitFor(() => expect(getByTestId('3')).toHaveFocus());
  });

  test('pressing backspace moves to the previous input and clears', async () => {
    const { getByTestId } = render(<Component />);

    // type in the first two inputs
    userEvent.type(getByTestId('1'), '1');
    userEvent.type(getByTestId('2'), '2');

    // verify that 3rd input is active
    await waitFor(() => expect(getByTestId('3')).toHaveFocus());

    // send backspace to the 3rd input
    fireEvent.keyDown(getByTestId('3'), { key: 'Backspace' });

    // verify that 2nd input is active and value was cleared
    await waitFor(() => expect(getByTestId('2')).toHaveFocus());
    expect(getByTestId('2')).toHaveValue('');
  });

  test('filling out all inputs calls the complete callback', () => {
    const onComplete = jest.fn();
    const { getByTestId } = render(<Component onComplete={onComplete} />);

    userEvent.type(getByTestId('1'), '1');
    userEvent.type(getByTestId('2'), '2');
    userEvent.type(getByTestId('3'), '3');

    expect(onComplete).toHaveBeenCalledWith('123');
  });

  test('can clear all input', () => {
    const { getByTestId, getByRole } = render(<Component />);

    // fill out the first two
    userEvent.type(getByTestId('1'), '1');
    userEvent.type(getByTestId('2'), '2');

    // click the clear button
    fireEvent.click(getByRole('button'));

    // verify that input values are blank
    expect(getByTestId('1')).toHaveValue('');
    expect(getByTestId('2')).toHaveValue('');
  });

  test('otp flag enables "one-time-code" autocomplete on fields', () => {
    const { getByTestId } = render(<Component otp />);

    expect(getByTestId('1')).toHaveAttribute('autocomplete', 'one-time-code');
    expect(getByTestId('2')).toHaveAttribute('autocomplete', 'one-time-code');
    expect(getByTestId('3')).toHaveAttribute('autocomplete', 'one-time-code');
  });

  test('Replacing last input calls onComplete correctly', () => {
    const onComplete = jest.fn();
    const { getByTestId } = render(<Component onComplete={onComplete} />);

    userEvent.type(getByTestId('1'), '1');
    userEvent.type(getByTestId('2'), '2');
    userEvent.type(getByTestId('3'), '3');

    expect(onComplete).toHaveBeenCalledWith('123');
    onComplete.mockClear();

    userEvent.clear(getByTestId('3'));

    expect(onComplete).not.toHaveBeenCalledWith('123');

    userEvent.type(getByTestId('3'), '3');

    expect(onComplete).toHaveBeenCalledWith('123');
  });
});
