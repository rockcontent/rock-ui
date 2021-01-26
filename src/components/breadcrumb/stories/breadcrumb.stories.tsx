import { Icon } from '@chakra-ui/react';
import { Container, Stack } from '@chakra-ui/layout';
import * as React from 'react';
import {
  Breadcrumb,
  BreadcrumbItem,
  BreadcrumbLink,
  BreadcrumbSeparator,
} from '../';
import { ThemeProvider, RockUITheme } from '../../../system/theme';

export default {
  title: 'Breadcrumb',
  decorators: [
    (Story: any) => (
      <ThemeProvider theme={RockUITheme} resetCSS>
        <Container mt="40px">
          <Story />
        </Container>
      </ThemeProvider>
    ),
  ],
};

export const basic = () => (
  <Breadcrumb>
    <BreadcrumbItem>
      <BreadcrumbLink href="#">Home</BreadcrumbLink>
    </BreadcrumbItem>

    <BreadcrumbItem>
      <BreadcrumbLink href="#">Docs</BreadcrumbLink>
    </BreadcrumbItem>

    <BreadcrumbItem isCurrentPage>
      <BreadcrumbLink href="#">Breadcrumb</BreadcrumbLink>
    </BreadcrumbItem>
  </Breadcrumb>
);

export const withCustomSeparators = () => (
  <Stack spacing="24px">
    <Breadcrumb separator="-">
      <BreadcrumbItem>
        <BreadcrumbLink href="#">Home</BreadcrumbLink>
      </BreadcrumbItem>

      <BreadcrumbItem>
        <BreadcrumbLink href="#">About</BreadcrumbLink>
      </BreadcrumbItem>

      <BreadcrumbItem isCurrentPage>
        <BreadcrumbLink href="#">Contact</BreadcrumbLink>
      </BreadcrumbItem>
    </Breadcrumb>
    <Breadcrumb
      spacing="8px"
      separator={<Icon color="gray.500" name="chevron-right" />}
    >
      <BreadcrumbItem>
        <BreadcrumbLink href="#">Home</BreadcrumbLink>
      </BreadcrumbItem>

      <BreadcrumbItem>
        <BreadcrumbLink href="#">About</BreadcrumbLink>
      </BreadcrumbItem>

      <BreadcrumbItem isCurrentPage>
        <BreadcrumbLink href="#">Contact</BreadcrumbLink>
      </BreadcrumbItem>
    </Breadcrumb>
    <Breadcrumb
      spacing="8px"
      separator={
        <BreadcrumbSeparator>
          <div
            style={{ width: '10px', height: '10px', backgroundColor: 'black' }}
          />
        </BreadcrumbSeparator>
      }
    >
      <BreadcrumbItem>
        <BreadcrumbLink href="#">Home</BreadcrumbLink>
      </BreadcrumbItem>

      <BreadcrumbItem>
        <BreadcrumbLink href="#">About</BreadcrumbLink>
      </BreadcrumbItem>

      <BreadcrumbItem isCurrentPage>
        <BreadcrumbLink href="#">Contact</BreadcrumbLink>
      </BreadcrumbItem>
    </Breadcrumb>
  </Stack>
);
