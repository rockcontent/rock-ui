import React from 'react';

import { Flex, Text, Box } from '@chakra-ui/react';
import styled from 'styled-components';
import StepProps from './entities/step-props';
import StepBullet from './step-bullet';

const Container = styled(Flex)`
  padding-top: 4px;

  &:before {
    content: '';
    position: absolute;
    top: 12px;
    left: 0;
    right: calc(50% + 16px);
    height: 4px;
    background-color: #edf1f7;
  }

  &:after {
    content: '';
    position: absolute;
    top: 12px;
    right: 0;
    left: calc(50% + 16px);
    height: 4px;
    background-color: #edf1f7;
  }

  &:last-child:after,
  &&:first-child:before {
    background-color: transparent;
  }
`;

const HStep: React.FC<StepProps> = ({
  title,
  type,
  subtitle,
  children,
  index,
  error,
  done,
  current,
}) => (
  <Container
    h="80px"
    minW="160px"
    position="relative"
    direction="column"
    alignItems="center"
  >
    <Flex h="100%" justifyContent="center">
      <StepBullet
        index={index}
        type={type}
        done={done}
        current={current}
        error={error}
      />
    </Flex>

    <Flex direction="column" pl="2" alignItems="center" pt="2">
      <Text
        as="h3"
        fontSize="sm"
        textAlign="center"
        fontWeight="semibold"
        color="gray.900"
      >
        {title}
      </Text>
      <Text
        as="h4"
        fontSize="xs"
        textAlign="center"
        fontWeight="medium"
        color="gray.500"
      >
        {subtitle}
      </Text>
      <Box py="3">{children}</Box>
    </Flex>
  </Container>
);

export default HStep;
