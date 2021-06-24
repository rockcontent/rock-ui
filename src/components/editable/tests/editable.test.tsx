import { fireEvent, render, screen } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import '@testing-library/jest-dom';
import React from 'react';
import { Editable, EditableInput, EditablePreview } from '../index';

describe('Editable', () => {
  it('matches snapshot', () => {
    render(
      <Editable defaultValue="testing">
        <EditablePreview data-testid="preview" />
        <EditableInput data-testid="input" />
      </Editable>
    );

    const preview = screen.getByTestId('preview');
    expect(preview).toHaveTextContent('testing');

    const input = screen.getByTestId('input');
    expect(input).toHaveAttribute('hidden');
  });

  it('uncontrolled: handles callbacks correctly', async () => {
    const onChange = jest.fn();
    const onCancel = jest.fn();
    const onSubmit = jest.fn();
    const onEdit = jest.fn();

    render(
      <Editable
        onChange={onChange}
        onCancel={onCancel}
        onSubmit={onSubmit}
        onEdit={onEdit}
        defaultValue="Hello "
      >
        <EditablePreview data-testid="preview" />
        <EditableInput data-testid="input" />
      </Editable>
    );
    const preview = screen.getByTestId('preview');
    const input = screen.getByTestId('input');

    // calls `onEdit` when preview is focused
    fireEvent.focus(preview);
    expect(onEdit).toHaveBeenCalled();

    // calls `onChange` with input on change
    userEvent.type(input, 'World');
    expect(onChange).toHaveBeenCalledWith('World');

    // calls `onCancel` with previous value when "esc" pressed
    fireEvent.keyDown(input, { key: 'Escape' });
    expect(onCancel).toHaveBeenCalledWith('Hello ');

    fireEvent.focus(preview);

    // calls `onChange` with input on change
    userEvent.type(input, 'World');
    expect(onChange).toHaveBeenCalledWith('World');

    // calls `onSubmit` with previous value when "enter" pressed after cancelling
    fireEvent.keyDown(input, { key: 'Enter' });
    expect(onSubmit).toHaveBeenCalledWith('Hello World');
  });

  it('controlled: handles callbacks correctly', () => {
    const onChange = jest.fn();
    const onCancel = jest.fn();
    const onSubmit = jest.fn();
    const onEdit = jest.fn();

    const Component = () => {
      const [value, setValue] = React.useState('Hello ');
      return (
        <Editable
          onChange={val => {
            setValue(val);
            onChange(val);
          }}
          onCancel={onCancel}
          onSubmit={onSubmit}
          onEdit={onEdit}
          value={value}
        >
          <EditablePreview data-testid="preview" />
          <EditableInput data-testid="input" />
        </Editable>
      );
    };

    render(<Component />);
    const preview = screen.getByTestId('preview');
    const input = screen.getByTestId('input');

    // calls `onEdit` when preview is focused
    fireEvent.focus(preview);
    expect(onEdit).toHaveBeenCalled();

    // calls `onChange` with new input on change
    // since we calld `focus(..)` first, editable will focus and select the text
    // typing will clear the values in input and add the next text.
    userEvent.type(input, 'World');
    expect(onChange).toHaveBeenCalledWith('World');

    // calls `onSubmit` with `value`
    fireEvent.keyDown(input, { key: 'Enter' });
    expect(onSubmit).toHaveBeenCalledWith('World');

    expect(input).not.toBeVisible();
    fireEvent.focus(preview);

    // update the input value
    userEvent.type(input, 'Rasengan');

    // press `Escape`
    fireEvent.keyDown(input, { key: 'Escape' });

    // calls `onCancel` with previous `value`
    expect(onSubmit).toHaveBeenCalledWith('World');
  });

  it('handles preview and input callbacks', () => {
    const onFocus = jest.fn();
    const onBlur = jest.fn();
    const onChange = jest.fn();
    const onKeyDown = jest.fn();

    render(
      <Editable defaultValue="Hello ">
        <EditablePreview onFocus={onFocus} data-testid="preview" />
        <EditableInput
          onBlur={onBlur}
          onChange={onChange}
          onKeyDown={onKeyDown}
          data-testid="input"
        />
      </Editable>
    );
    const preview = screen.getByTestId('preview');
    const input = screen.getByTestId('input');

    // calls `onFocus` when preview is focused
    fireEvent.focus(preview);
    expect(onFocus).toHaveBeenCalled();

    // calls `onChange` when input is changed
    userEvent.type(input, 'World');
    expect(onChange).toHaveBeenCalled();

    // calls `onKeyDown` when key is pressed in input
    fireEvent.keyDown(input, { key: 'Escape' });
    expect(onKeyDown).toHaveBeenCalled();

    expect(input).not.toBeVisible();
  });

  it('has the proper aria attributes', () => {
    const { rerender } = render(
      <Editable defaultValue="">
        <EditablePreview data-testid="preview" />
        <EditableInput data-testid="input" />
      </Editable>
    );
    let preview = screen.getByTestId('preview');
    let input = screen.getByTestId('input');

    // preview and input do not have aria-disabled when `Editable` is not disabled
    expect(preview).not.toHaveAttribute('aria-disabled');
    expect(input).not.toHaveAttribute('aria-disabled');

    rerender(
      <Editable isDisabled defaultValue="">
        <EditablePreview data-testid="preview" />
        <EditableInput data-testid="input" />
      </Editable>
    );

    preview = screen.getByTestId('preview');
    input = screen.getByTestId('input');

    // preview and input have aria-disabled when `Editable` is disabled
    expect(preview).toHaveAttribute('aria-disabled', 'true');
    expect(input).toHaveAttribute('aria-disabled', 'true');
  });

  it('can submit on blur', () => {
    const onSubmit = jest.fn();

    render(
      <Editable submitOnBlur onSubmit={onSubmit} defaultValue="testing">
        <EditablePreview data-testid="preview" />
        <EditableInput data-testid="input" />
      </Editable>
    );

    const input = screen.getByTestId('input');

    fireEvent.blur(input);
    expect(onSubmit).toHaveBeenCalledWith('testing');
  });
});
