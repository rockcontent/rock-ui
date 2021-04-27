import { Container } from '@chakra-ui/layout';
import * as React from 'react';
import { ProgressIndicator } from '../';
import { Step } from '../step';
import { Text } from '@chakra-ui/react';

export default {
  title: 'Progress Indicator',
  component: ProgressIndicator,
  decorators: [
    (Story: any) => (
      <Container mt="40px">
        <Story />
      </Container>
    ),
  ],
};

export const horizontal = () => (
  <ProgressIndicator mode="horizontal" colorScheme="blue">
    <Step title="Content requested" type="bullet" done />
    <Step title="Ongoing brief" type="bullet" />
    <Step title="Ongoing brief" type="bullet" error />
    <Step
      colorScheme="red"
      title="Brief alterations"
      type="bullet"
      current
      subtitle="Available in 2 days"
    />
  </ProgressIndicator>
);

export const vertical = () => (
  <ProgressIndicator mode="vertical" colorScheme="blue">
    <Step title="Content requested" done />
    <Step title="Content requested" />
    <Step title="Ongoing brief" error disabled />
    <Step title="Brief alterations" subtitle="Available in 2 days" current>
      <Text fontSize="sm" color="gray.600">
        Olá, gostaria de alterar o texto e a imagem do post que você me enviou.
        A imagem está muito corporativa, poderia ser uma mais descontraída. O
        último parágrafo do texto pode sair. Obrigado!
      </Text>
    </Step>
  </ProgressIndicator>
);
