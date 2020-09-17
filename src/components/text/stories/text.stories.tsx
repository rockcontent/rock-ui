import * as React from 'react';
import { Container, Stack } from '@chakra-ui/layout';
import { Text } from '../';

export default {
  title: 'Text',
  decorators: [
    (Story: any) => (
      <Container mt="40px">
        <Story />
      </Container>
    ),
  ],
};

export const basic = () => (
  <Stack spacing={3}>
    <Text fontSize="6xl">(6xl) RockUI Text</Text>
    <Text fontSize="5xl">(5xl) RockUI Text</Text>
    <Text fontSize="4xl">(4xl) RockUI Text</Text>
    <Text fontSize="3xl">(3xl) RockUI Text</Text>
    <Text fontSize="2xl">(2xl) RockUI Text</Text>
    <Text fontSize="xl">(xl) RockUI Text</Text>
    <Text fontSize="lg">(lg) RockUI Text</Text>
    <Text fontSize="md">(md) RockUI Text</Text>
    <Text fontSize="sm">(sm) RockUI Text</Text>
    <Text fontSize="xs">(xs) RockUI Text</Text>
  </Stack>
);

export const truncated = () => (
  <Text fontSize="md" isTruncated>
    Lorem ipsum is placeholder text commonly used in the graphic, print, and
    publishing industries for previewing layouts and visual mockups.
  </Text>
);

export const styled = () => (
  <Stack spacing={2}>
    <Text color="blue.500" as="i">
      Italic
    </Text>
    <Text color="blue.500" as="u">
      Underline
    </Text>
    <Text color="blue.500" as="b">
      Bold
    </Text>
    <Text color="blue.500" as="abbr">
      I18N
    </Text>
    <Text color="blue.500" as="cite">
      Citation
    </Text>
    <Text color="blue.500" as="del">
      Deleted
    </Text>
    <Text color="blue.500" as="em">
      Emphasis
    </Text>
    <Text color="blue.500" as="ins">
      Inserted
    </Text>
    <Text color="blue.500" as="kbd">
      Ctrl + C
    </Text>
    <Text color="blue.500" as="mark">
      Highlighted
    </Text>
    <Text color="blue.500" as="s">
      Strikethrough
    </Text>
    <Text color="blue.500" as="samp">
      Sample
    </Text>
    <Text color="blue.500" as="sub">
      sub
    </Text>
    <Text color="blue.500" as="sup">
      sup
    </Text>
  </Stack>
);
