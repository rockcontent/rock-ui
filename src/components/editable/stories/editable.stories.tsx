import { Container, Flex, Box } from '@chakra-ui/layout';
import { Button, Input } from '@chakra-ui/react';
import * as React from 'react';
import {
  Editable,
  EditableInput,
  EditablePreview,
  useEditableControls,
  useEditable,
} from '../editable';

export default {
  title: 'Editable',
  parameters: {
    componentSubtitle:
      'React hook that implements all the interactions of a native button component with support for making it focusable even if it is disabled. It can be used with both native button elements or other elements (like div).',
  },
  component: Editable,
  decorators: [
    (Story: any) => (
      <Container mt="40px">
        <Story />
      </Container>
    ),
  ],
};

export const Basic = () => {
  const EditableControls = () => {
    const {
      isEditing,
      getEditButtonProps,
      getSubmitButtonProps,
      getCancelButtonProps,
    } = useEditableControls();

    return (
      <>
        {!isEditing ? (
          <Button
            colorScheme="teal"
            variant="solid"
            mr={2}
            {...getEditButtonProps()}
          >
            Edit
          </Button>
        ) : (
          <Flex mt={3}>
            <Button
              colorScheme="teal"
              variant="solid"
              mr={3}
              {...getSubmitButtonProps()}
            >
              Save
            </Button>
            <Button
              colorScheme="teal"
              variant="outline"
              {...getCancelButtonProps()}
            >
              Cancel
            </Button>
          </Flex>
        )}
      </>
    );
  };

  return (
    <Editable
      defaultValue="Rasengan ⚡️"
      fontSize="xl"
      textAlign="center"
      isPreviewFocusable={false}
      submitOnBlur={false}
      onChange={console.log}
    >
      <Flex>
        <EditablePreview />
      </Flex>
      <Flex>
        <EditableInput />
      </Flex>
      <Flex>
        <EditableControls />
      </Flex>
    </Editable>
  );
};

export const UseEditableHook = () => {
  const {
    getInputProps,
    getPreviewProps,
    getCancelButtonProps,
    getSubmitButtonProps,
    isValueEmpty,
    isEditing,
    onEdit,
  } = useEditable({
    placeholder: 'Title...',
    submitOnBlur: true,
    onCancel: () => console.log('cancel'),
    onSubmit: () => console.log('submit'),
  });

  return (
    <>
      <Input mr={3} {...getInputProps()} w="auto" />

      <Box
        mr={3}
        as="span"
        style={{ opacity: isValueEmpty ? 0.7 : 1 }}
        {...getPreviewProps()}
      />

      {!isEditing && (
        <Button onClick={onEdit} colorScheme="teal" variant="outline">
          Edit
        </Button>
      )}

      {isEditing && (
        <>
          <Button
            {...getSubmitButtonProps()}
            colorScheme="teal"
            variant="solid"
          >
            Save
          </Button>

          <Button
            ml={3}
            colorScheme="teal"
            variant="outline"
            {...getCancelButtonProps({ style: { padding: 10 } })}
          >
            Cancel
          </Button>
        </>
      )}
    </>
  );
};
