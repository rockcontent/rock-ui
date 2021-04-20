import React from 'react';

import { Flex, Text, Box } from '@chakra-ui/react';
import styled from 'styled-components';
import StepProps from './entities/step-props';
import StepBullet from './step-bullet';
import { COLORS } from '../../constants/colors/colors';

const Container = styled(Flex)`
  &:hover {
    .progress-step__title--current {
      color: ${COLORS.BLUE_500};
    }
  }
  padding-top: 4px;

  &:before {
    content: '';
    position: absolute;
    top: 32px;
    bottom: 0;
    left: 10px;
    width: 4px;
    background-color: #edf1f7;
  }

  &:last-child:before {
    background-color: transparent;
  }
`;

const VStep: React.FC<StepProps> = ({
  index,
  type,
  title,
  done,
  error,
  current,
  subtitle,
  children,
}) => (
  <Container h="80px" position="relative">
    <Box h="100%">
      <StepBullet
        index={index}
        type={type}
        done={done}
        current={current}
        error={error}
      />
    </Box>

    <Flex direction="column" pl="2">
      <Text
        as="h3"
        fontSize="sm"
        // className={`progress-step__title${current ? '--current' : ''}`}
        fontWeight="semibold"
        color={current ? 'blue.500' : 'gray.900'}
      >
        {title}
      </Text>
      <Text as="h4" fontSize="xs" fontWeight="medium" color="gray.500">
        {subtitle}
      </Text>
      <Box py="3">{children}</Box>
    </Flex>
  </Container>
);

export default VStep;
