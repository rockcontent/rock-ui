import * as React from 'react';
import { Container, Stack } from '@chakra-ui/layout';
import { Heading } from '../';

export default {
  title: 'Heading',
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
    <Heading fontSize="6xl">(6xl) RockUI Text</Heading>
    <Heading fontSize="5xl">(5xl) RockUI Text</Heading>
    <Heading fontSize="4xl">(4xl) RockUI Text</Heading>
    <Heading fontSize="3xl">(3xl) RockUI Text</Heading>
    <Heading fontSize="2xl">(2xl) RockUI Text</Heading>
    <Heading fontSize="xl">(xl) RockUI Text</Heading>
    <Heading fontSize="lg">(lg) RockUI Text</Heading>
    <Heading fontSize="md">(md) RockUI Text</Heading>
    <Heading fontSize="sm">(sm) RockUI Text</Heading>
    <Heading fontSize="xs">(xs) RockUI Text</Heading>
  </Stack>
);

export const truncated = () => (
  <Heading fontSize="md" isTruncated>
    Lorem ipsum is placeholder text commonly used in the graphic, print, and
    publishing industries for previewing layouts and visual mockups.
  </Heading>
);

export const styled = () => (
  <Stack spacing={2}>
    <Heading color="blue.500" fontSize="30px">
      Custom font-size and color
    </Heading>
    <Heading as="i">Italic</Heading>
    <Heading as="u">Underline</Heading>
    <Heading as="b">Bold</Heading>
    <Heading as="abbr">I18N</Heading>
    <Heading as="cite">Citation</Heading>
    <Heading as="del">Deleted</Heading>
    <Heading as="em">Emphasis</Heading>
    <Heading as="ins">Inserted</Heading>
    <Heading as="kbd">Ctrl + C</Heading>
    <Heading as="mark">Highlighted</Heading>
    <Heading as="s">Strikethrough</Heading>
    <Heading as="samp">Sample</Heading>
    <Heading as="sub">sub</Heading>
    <Heading as="sup">sup</Heading>
  </Stack>
);
