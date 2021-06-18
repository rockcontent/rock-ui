import { Container, Flex } from '@chakra-ui/layout';
import { Button } from '@chakra-ui/react';
import * as React from 'react';
import {
  Editable,
  EditableInput,
  EditablePreview,
  useEditableControls,
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

export const Basic = () => (
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
      <EditableInput w="xs" />
    </Flex>
    <Flex>
      <EditableControls />
    </Flex>
  </Editable>
);
