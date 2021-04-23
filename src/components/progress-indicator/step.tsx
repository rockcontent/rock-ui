import React from 'react';
import { Flex, Text, Box } from '@chakra-ui/react';
import styled from 'styled-components';
import StepProps from './entities/step-props';
import StepBullet from './step-bullet';
import { useColorscheme } from '../../utils/hooks/use-colorscheme';

const Container = styled(Flex)`
  padding-top: 4px;

  &:not(.progress-step--disabled):hover {
    .progress-step__title {
      color: ${({ accentColor }) => accentColor};
    }
  }

  &.progress-step--completed:not(.progress-step--disabled):hover {
    .progress-step__bullet {
      background-color: ${({ baseColor }) => baseColor};
    }

    .progress-step__icon {
      fill: ${({ accentColor }) => accentColor};
    }
  }

  &.progress-step__v-container {
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
  }

  &.progress-step__h-container {
    min-width: 160px;
    flex-direction: column;
    align-items: center;

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
    &:first-child:before {
      background-color: transparent;
    }
  }
`;

const Step: React.FC<StepProps> = ({
  index,
  type,
  title,
  done,
  error,
  current,
  subtitle,
  disabled,
  mode,
  colorScheme = 'blue',
  children,
}) => {
  const containerClass =
    mode === 'vertical'
      ? 'progress-step__v-container'
      : 'progress-step__h-container';

  const disabledClass = disabled ? 'progress-step--disabled' : '';
  const completedClass = done ? 'progress-step--completed' : '';
  const colors = useColorscheme(colorScheme);

  return (
    <Container
      cursor={disabled ? 'not-allowed' : ''}
      h="80px"
      accentColor={colors.accent}
      baseColor={colors.base}
      position="relative"
      className={`${containerClass} ${disabledClass} ${completedClass}`}
    >
      <Flex h="100%" justifyContent="center">
        <StepBullet
          index={index}
          type={type}
          done={done}
          current={current}
          error={error}
          disabled={disabled}
          colorScheme={colorScheme}
        />
      </Flex>

      <Flex
        direction="column"
        pl="2"
        pt={mode === 'vertical' ? 0 : '2'}
        alignItems={mode === 'vertical' ? 'flex-start' : 'center'}
      >
        <Text
          as="h3"
          fontSize="sm"
          className="progress-step__title"
          textAlign={mode === 'vertical' ? 'initial' : 'center'}
          fontWeight={current ? 'bold' : 'semibold'}
          color={current && !disabled ? colors.accent : 'gray.900'}
          opacity={disabled ? 0.4 : 1}
        >
          {title}
        </Text>
        <Text
          as="h4"
          fontSize="xs"
          fontWeight="medium"
          color="gray.500"
          textAlign={mode === 'vertical' ? 'initial' : 'center'}
          opacity={disabled ? 0.4 : 1}
        >
          {subtitle}
        </Text>
        <Box py="3">{children}</Box>
      </Flex>
    </Container>
  );
};

export default Step;
