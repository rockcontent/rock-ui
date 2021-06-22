import { Container, Stack } from '@chakra-ui/layout';
import * as React from 'react';
import { Progress, ProgressLabel } from '../';
import { extendTheme, useTheme, ThemeProvider } from '@chakra-ui/react';

export default {
  title: 'Progress/Linear Progress',
  decorators: [
    (Story: any) => (
      <Container mt="40px">
        <Story />
      </Container>
    ),
  ],
};

export const basic = () => <Progress value={80} />;

export const withStripes = () => (
  <Stack spacing="24px">
    <Progress value={20} hasStripe />
    <Progress value={40} hasStripe />
    <Progress value={60} hasStripe />
    <Progress value={80} hasStripe />
  </Stack>
);

export const withColorScheme = () => (
  <Stack>
    <Progress value={20} hasStripe colorScheme="pink" />
    <Progress value={40} hasStripe colorScheme="red" />
    <Progress value={60} hasStripe colorScheme="purple" />
    <Progress value={80} hasStripe colorScheme="yellow" />
  </Stack>
);

export const WithDifferentSizes = () => (
  <Stack spacing="24px">
    <Progress color="green" size="sm" value={20} />
    <Progress color="green" size="md" value={20} />
    <Progress color="green" size="lg" value={20} />
    <Progress color="green" height="32px" value={20} />
  </Stack>
);

export const WithAnimationCustom = () => {
  const initialValues = {
    first: 20,
    second: 40,
    third: 60,
    fourth: 80,
  };

  const [values, setValues] = React.useState(initialValues);

  React.useEffect(() => {
    setTimeout(() => {
      setValues({
        first: 40,
        second: 60,
        third: 80,
        fourth: 100,
      });
    }, 500);
  }, []);

  return (
    <Stack spacing="24px">
      <Progress value={values.first} isAnimated />
      <Progress value={values.second} isAnimated />
      <Progress value={values.third} isAnimated />
      <Progress value={values.fourth} isAnimated />
    </Stack>
  );
};

export const indeterminate = () => (
  <Progress margin="20px" colorScheme="cyan" size="xs" isIndeterminate />
);

export const withLabel = () => (
  <Stack spacing="24px">
    <Progress value={60} height="32px">
      <ProgressLabel fontSize="medium">60%</ProgressLabel>
    </Progress>
    <Progress value={60} height="24px">
      <ProgressLabel fontSize="medium">60%</ProgressLabel>
    </Progress>
  </Stack>
);

export const withAnimation = () => (
  <Progress colorScheme="green" hasStripe isAnimated value={20} />
);

export const withCustomBorderRadius = () => (
  <Progress value={20} borderRadius="4px" />
);

export const WithThemeBorderRadiusOverride = () => {
  const theme = useTheme();
  const extendedTheme = extendTheme(
    {
      components: {
        Progress: {
          baseStyle: {
            track: {
              borderRadius: 'md',
            },
          },
        },
      },
    },
    theme as any
  );

  return (
    <ThemeProvider theme={extendedTheme}>
      <Progress value={50} />
    </ThemeProvider>
  );
};
