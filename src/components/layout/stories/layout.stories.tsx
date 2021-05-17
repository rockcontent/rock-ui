import * as React from 'react';
import { Image, Text } from '@chakra-ui/react';
import { CheckIcon, PhoneIcon, SettingsIcon } from '@chakra-ui/icons';
import {
  AspectRatio,
  Box,
  Center,
  Circle,
  Container,
  Flex,
  HStack,
  SimpleGrid,
  Spacer,
  Square,
  Stack,
  VStack,
  Wrap,
  StackDivider,
  Grid,
  GridItem,
  ListItem,
  OrderedList,
  UnorderedList,
} from '../';

export default {
  title: 'Layout',
  decorators: [
    (Story: any) => (
      <Container mt="40px">
        <Story />
      </Container>
    ),
  ],
};

export const aspectRatio = () => (
  <Stack spacing="25px">
    <AspectRatio maxW="560px" ratio={1}>
      <Box
        as="iframe"
        title="naruto"
        src="https://www.youtube.com/embed/QhBnZ6NPOY0"
        allowFullScreen
      />
    </AspectRatio>
    <AspectRatio maxW="400px" ratio={4 / 3}>
      <Image src="https://bit.ly/naruto-sage" alt="naruto" objectFit="cover" />
    </AspectRatio>
    <AspectRatio ratio={16 / 9}>
      <Box
        as="iframe"
        src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3963.952912260219!2d3.375295414770757!3d6.5276316452784755!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x103b8b2ae68280c1%3A0xdc9e87a367c3d9cb!2sLagos!5e0!3m2!1sen!2sng!4v1567723392506!5m2!1sen!2sng"
        alt="demo"
      />
    </AspectRatio>
  </Stack>
);

export const box = () => (
  <Stack>
    Simple box
    <Box bg="tomato" w="100%" p={4} color="white">
      This is the Box
    </Box>
    Box as button
    <Box as="button" borderRadius="md" bg="tomato" color="white" px={4} h={8}>
      Box as Button
    </Box>
  </Stack>
);

export const center = () => (
  <Stack>
    <Center bg="tomato" h="100px" color="white">
      This is the Center
    </Center>
    <HStack>
      <Center w="40px" h="40px" bg="tomato" color="white">
        <PhoneIcon />
      </Center>
      <Center w="40px" h="40px" bg="tomato" color="white">
        <Box as="span" fontWeight="bold" fontSize="lg">
          1
        </Box>
      </Center>
    </HStack>
  </Stack>
);

export const circleAndSquare = () => (
  <HStack>
    <Circle size="40px" bg="tomato" color="white">
      <PhoneIcon />
    </Circle>
    <Square size="40px" bg="purple.700" color="white">
      <PhoneIcon />
    </Square>
  </HStack>
);

export const container = () => (
  <Stack>
    <Container>
      There are many benefits to a joint design and development system. Not only
      does it bring benefits to the design team, but it also brings benefits to
      engineering teams. It makes sure that our experiences have a consistent
      look and feel, not just in our design specs, but in production
    </Container>
    <Container maxW="xl" centerContent>
      <Box padding="4" bg="gray.100" maxW="3xl">
        Centered
      </Box>
    </Container>
  </Stack>
);

export const flexAndSpacer = () => (
  <Stack spacing="50px">
    <Flex color="white">
      <Center w="100px" bg="green.500">
        <Text>Box 1</Text>
      </Center>
      <Square bg="blue.500" size="150px">
        <Text>Box 2</Text>
      </Square>
      <Box flex="1" bg="tomato">
        <Text>Box 3</Text>
      </Box>
    </Flex>
    <Flex>
      <Box p="4" bg="red.400">
        Box 1
      </Box>
      <Spacer />
      <Box p="4" bg="green.400">
        Box 2
      </Box>
    </Flex>
  </Stack>
);

export const grid = () => (
  <Grid templateColumns="repeat(5, 1fr)" gap={6}>
    <Box w="100%" h="10" bg="blue.500" />
    <Box w="100%" h="10" bg="blue.500" />
    <Box w="100%" h="10" bg="blue.500" />
    <Box w="100%" h="10" bg="blue.500" />
    <Box w="100%" h="10" bg="blue.500" />
  </Grid>
);

export const simpleGrid = () => (
  <Stack spacing="100px">
    <SimpleGrid columns={2} spacing={10}>
      <Box bg="tomato" height="80px" />
      <Box bg="tomato" height="80px" />
      <Box bg="tomato" height="80px" />
      <Box bg="tomato" height="80px" />
      <Box bg="tomato" height="80px" />
    </SimpleGrid>
    <SimpleGrid columns={[2, null, 3]} spacing="40px">
      <Box bg="tomato" height="80px" />
      <Box bg="tomato" height="80px" />
      <Box bg="tomato" height="80px" />
      <Box bg="tomato" height="80px" />
      <Box bg="tomato" height="80px" />
    </SimpleGrid>
    <SimpleGrid minChildWidth="120px" spacing="40px">
      <Box bg="tomato" height="80px" />
      <Box bg="tomato" height="80px" />
      <Box bg="tomato" height="80px" />
      <Box bg="tomato" height="80px" />
      <Box bg="tomato" height="80px" />
      <Box bg="tomato" height="80px" />
    </SimpleGrid>
    <SimpleGrid columns={2} spacingX="40px" spacingY="20px">
      <Box bg="tomato" height="80px" />
      <Box bg="tomato" height="80px" />
      <Box bg="tomato" height="80px" />
      <Box bg="tomato" height="80px" />
      <Box bg="tomato" height="80px" />
    </SimpleGrid>
  </Stack>
);

export const stack = () => (
  <Stack spacing="35px">
    <HStack spacing="24px">
      <Box w="40px" h="40px" bg="yellow.200">
        1
      </Box>
      <Box w="40px" h="40px" bg="tomato">
        2
      </Box>
      <Box w="40px" h="40px" bg="pink.100">
        3
      </Box>
    </HStack>
    <Stack direction={['column', 'row']} spacing="24px">
      <Box w="40px" h="40px" bg="yellow.200">
        1
      </Box>
      <Box w="40px" h="40px" bg="tomato">
        2
      </Box>
      <Box w="40px" h="40px" bg="pink.100">
        3
      </Box>
    </Stack>
    <VStack
      divider={<StackDivider borderColor="gray.200" />}
      spacing={4}
      align="stretch"
    >
      <Box h="40px" bg="yellow.200">
        1
      </Box>
      <Box h="40px" bg="tomato">
        2
      </Box>
      <Box h="40px" bg="pink.100">
        3
      </Box>
    </VStack>
  </Stack>
);

export const wrap = () => (
  <Stack spacing="100px">
    <Wrap>
      <Center w="180px" h="80px" bg="red.200">
        inside
      </Center>
      <Center w="180px" h="80px" bg="green.200">
        wrap
      </Center>
      <Center w="180px" h="80px" bg="tomato">
        component
      </Center>
    </Wrap>
    <Wrap spacing="30px">
      <Center w="180px" h="80px" bg="red.200">
        Wrap
      </Center>
      <Center w="180px" h="80px" bg="green.200">
        with
      </Center>
      <Center w="180px" h="80px" bg="tomato">
        custom
      </Center>
      <Center w="180px" h="80px" bg="blue.200">
        spacing
      </Center>
    </Wrap>
    <Wrap spacing="30px" align="center">
      <Center w="180px" h="80px" bg="red.200">
        wrap
      </Center>
      <Center w="180px" h="40px" bg="green.200">
        with
      </Center>
      <Center w="120px" h="80px" bg="tomato">
        custom
      </Center>
      <Center w="180px" h="40px" bg="blue.200">
        align
      </Center>
    </Wrap>
    <Wrap spacing="30px" justify="center">
      <Center w="180px" h="80px" bg="red.200">
        wrap
      </Center>
      <Center w="180px" h="80px" bg="green.200">
        with
      </Center>
      <Center w="120px" h="80px" bg="tomato">
        custom
      </Center>
      <Center w="180px" h="80px" bg="blue.200">
        justify
      </Center>
    </Wrap>
  </Stack>
);

export const UnorderedListExample = () => (
  <UnorderedList>
    <ListItem>Lorem ipsum dolor sit amet</ListItem>
    <ListItem>Consectetur adipiscing elit</ListItem>
    <ListItem>Integer molestie lorem at massa</ListItem>
    <ListItem>Facilisis in pretium nisl aliquet</ListItem>
  </UnorderedList>
);

export const OrderedListExample = () => (
  <OrderedList>
    <ListItem>Lorem ipsum dolor sit amet</ListItem>
    <ListItem>Consectetur adipiscing elit</ListItem>
    <ListItem>Integer molestie lorem at massa</ListItem>
    <ListItem>Facilisis in pretium nisl aliquet</ListItem>
  </OrderedList>
);

export const TemplateColumns = () => (
  <Grid templateColumns="repeat(5, 1fr)" gap={6}>
    <Box w="100%" h="10" bg="blue.500" />
    <Box w="100%" h="10" bg="blue.500" />
    <Box w="100%" h="10" bg="blue.500" />
    <Box w="100%" h="10" bg="blue.500" />
    <Box w="100%" h="10" bg="blue.500" />
  </Grid>
);

TemplateColumns.parameters = {
  docs: {
    description: {
      story:
        "Here's an example of using grid template columns with the grid component, and applying a gap or space between the grid items.",
    },
  },
};

export const SpanningColumns = () => (
  <Grid
    h="200px"
    templateRows="repeat(2, 1fr)"
    templateColumns="repeat(5, 1fr)"
    gap={4}
  >
    <GridItem rowSpan={2} colSpan={1} bg="tomato" />
    <GridItem colSpan={2} bg="papayawhip" />
    <GridItem colSpan={2} bg="papayawhip" />
    <GridItem colSpan={4} bg="tomato" />
  </Grid>
);

SpanningColumns.parameters = {
  docs: {
    description: {
      story:
        'In some layouts, you may need certain grid items to span specific amount of columns or rows instead of an even distribution. To achieve this, you need to pass the colSpan prop to the GridItem component to span across columns and also pass the rowSpan component to span across rows. You also need to specify the templateColumns and templateRows.',
    },
  },
};

export const StartingAndEndingLines = () => (
  <Grid templateColumns="repeat(5, 1fr)" gap={4}>
    <GridItem colSpan={2} h="10" bg="tomato" />
    <GridItem colStart={4} colEnd={6} h="10" bg="papayawhip" />
  </Grid>
);

StartingAndEndingLines.parameters = {
  docs: {
    description: {
      story:
        'Pass the colStart and colEnd prop to GridItem component to make an element start or end at the nth grid position.',
    },
  },
};
