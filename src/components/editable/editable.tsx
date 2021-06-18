import React from 'react';
import {
  Editable as BaseEditable,
  EditableProps as BaseEditableProps,
  EditablePreview as BaseEditablePreview,
  EditablePreviewProps as BaseEditablePreviewProps,
  EditableInput as BaseEditableInput,
  EditableInputProps as BaseEditableInputProps,
  useEditableState as BaseUseEditableState,
  useEditableControls as BaseUseEditableControls,
  useEditable as BaseUseEditable,
} from '@chakra-ui/react';

export { BaseEditableProps as EditableProps };
export const Editable = React.forwardRef<HTMLInputElement, BaseEditableProps>(
  ({ children, ...props }) => (
    <BaseEditable {...props} className="editableChakra">
      {children}
    </BaseEditable>
  )
);

export { BaseEditablePreviewProps as EditablePreviewProps };
export const EditablePreview = React.forwardRef<
  HTMLInputElement,
  BaseEditablePreviewProps
>(({ children, ...props }) => (
  <BaseEditablePreview {...props} className="editablePreviewChakra">
    {children}
  </BaseEditablePreview>
));

export { BaseEditableInputProps as EditableInputProps };
export const EditableInput = React.forwardRef<
  HTMLInputElement,
  BaseEditableInputProps
>(({ children, ...props }) => (
  <BaseEditableInput {...props} className="editableInputChakra">
    {children}
  </BaseEditableInput>
));

export { BaseUseEditableState as useEditableState };
export { BaseUseEditableControls as useEditableControls };
export { BaseUseEditable as useEditable };
