import * as React from 'react';
import { Container } from '@chakra-ui/layout';
import { Link } from '../';
import { Icon } from '../../icon';
import { Text } from '../../text';

export default {
  title: 'Link',
  decorators: [
    (Story: any) => (
      <Container mt="40px">
        <Story />
      </Container>
    ),
  ],
};

export const basic = () => <Link>Simple link</Link>;

export const externalLink = () => (
  <Link href="https://rockcontent.com/" isExternal>
    Link pra site da Rock Content
  </Link>
);

export const inlineWithText = () => (
  <Text>
    Did you know that{" "}
    <Link color="teal.500" href="#">
      links can live inline with text
    </Link>
  </Text>
);