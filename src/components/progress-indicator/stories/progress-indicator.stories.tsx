import { Container } from '@chakra-ui/layout';
import * as React from 'react';
import { ProgressIndicator } from '../';
import Step from '../step';
import { Text } from '@chakra-ui/react';

export default {
  title: 'Progress Indicator',
  decorators: [
    (Story: any) => (
      <Container mt="40px">
        <Story />
      </Container>
    ),
  ],
};

export const basic = () => (
  <ProgressIndicator>
    <Step title="Content requested"></Step>
    <Step title="Content requested" current></Step>
    <Step title="Ongoing brief" error></Step>
    <Step title="Brief alterations" subtitle="Available in 2 days" done>
      <Text fontSize="sm" color="gray.600">
        Olá, gostaria de alterar o texto e a imagem do post que você me enviou.
        A imagem está muito corporativa, poderia ser uma mais descontraída. O
        último parágrafo do texto pode sair. Obrigado!
      </Text>
    </Step>
  </ProgressIndicator>
);

export const horizontal = () => (
  <ProgressIndicator mode="horizontal">
    <Step title="Content requested" type="bullet" done></Step>
    <Step title="Ongoing brief" type="bullet" current></Step>
    <Step
      title="Brief alterations"
      type="bullet"
      subtitle="Available in 2 days"
    >
      <Text fontSize="sm" color="gray.600" textAlign="center">
        Olá, gostaria de alterar o texto e a imagem do post que você me enviou.
        A imagem está muito corporativa, poderia ser uma mais descontraída. O
        último parágrafo do texto pode sair. Obrigado!
      </Text>
    </Step>
  </ProgressIndicator>
);

// export const withStripes = () => (
//   <Stack spacing="24px">
//     <ProgressIndicator value={20} hasStripe />
//     <ProgressIndicator value={40} hasStripe />
//     <ProgressIndicator value={60} hasStripe />
//     <ProgressIndicator value={80} hasStripe />
//   </Stack>
// );
//
// export const withColorScheme = () => (
//   <Stack>
//     <ProgressIndicator value={20} hasStripe colorScheme="pink" />
//     <ProgressIndicator value={40} hasStripe colorScheme="red" />
//     <ProgressIndicator value={60} hasStripe colorScheme="purple" />
//     <ProgressIndicator value={80} hasStripe colorScheme="yellow" />
//   </Stack>
// );
//
// export const WithDifferentSizes = () => (
//   <Stack spacing="24px">
//     <ProgressIndicator color="green" size="sm" value={20} />
//     <ProgressIndicator color="green" size="md" value={20} />
//     <ProgressIndicator color="green" size="lg" value={20} />
//     <ProgressIndicator color="green" height="32px" value={20} />
//   </Stack>
// );
//
// export const WithAnimation = () => {
//   const initialValues = {
//     first: 20,
//     second: 40,
//     third: 60,
//     fourth: 80,
//   };
//
//   const [values, setValues] = React.useState(initialValues);
//
//   React.useEffect(() => {
//     setTimeout(() => {
//       setValues({
//         first: 40,
//         second: 60,
//         third: 80,
//         fourth: 100,
//       });
//     }, 500);
//   }, []);
//
//   return (
//     <Stack spacing="24px">
//       <ProgressIndicator value={values.first} isAnimated />
//       <ProgressIndicator value={values.second} isAnimated />
//       <ProgressIndicator value={values.third} isAnimated />
//       <ProgressIndicator value={values.fourth} isAnimated />
//     </Stack>
//   );
// };
