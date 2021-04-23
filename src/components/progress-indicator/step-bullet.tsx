import React from 'react';
import { Flex, Text } from '@chakra-ui/react';
import { StepBulletProps } from './entities/step-bullet-props';

import { CheckOutlineIcon, ExclamationOutlineIcon } from '../../icons';
import { ColorScheme, useColorscheme } from '../../utils/hooks/use-colorscheme';

const stepStyleByStatus = {
  current: {
    color: 'white',
  },

  done: {
    bg: 'gray.200',
    borderColor: 'transparent',
    color: 'gray.600',
  },

  error: {
    bg: 'red.100',
    borderColor: 'transparent',
    color: 'red.600',
  },

  incomplete: {
    bg: 'white',
    borderColor: 'gray.300',
    color: 'gray.600',
  },
};

const getStyleByStepStatus = (
  current: boolean | undefined,
  done: boolean | undefined,
  error: boolean | undefined,
  colorScheme: ColorScheme
) => {
  if (done) return stepStyleByStatus.done;
  if (error) return stepStyleByStatus.error;
  if (current)
    return {
      ...stepStyleByStatus.current,
      bg: colorScheme.accent,
      borderColor: colorScheme.base,
    };

  return stepStyleByStatus.incomplete;
};

const StepBullet: React.FC<StepBulletProps> = ({
  index,
  type = 'number',
  current,
  done,
  colorScheme = 'blue',
  error,
  disabled,
}) => {
  const colors = useColorscheme(colorScheme);
  const stylesByStatus = getStyleByStepStatus(current, done, error, colors);
  const showText = type === 'number' && !done && !error;
  const hideBorder =
    !disabled && (done || error || (current && type !== 'bullet'));

  return (
    <Flex
      borderRadius="full"
      h="24px"
      w="24px"
      boxSizing="border-box"
      borderWidth={type === 'bullet' ? '4px' : '2px'}
      justifyContent="center"
      alignItems="center"
      opacity={disabled ? 0.4 : 1}
      {...stylesByStatus}
      borderColor={hideBorder ? 'transparent' : stylesByStatus.borderColor}
      className="progress-step__bullet"
    >
      {showText && (
        <Text
          fontSize="sm"
          lineHeight="4"
          fontWeight={current ? 'bold' : 'medium'}
          color={stylesByStatus.color}
        >
          {index}
        </Text>
      )}

      {done && !error && (
        <CheckOutlineIcon
          fill={stylesByStatus.color}
          className="progress-step__icon"
          w="16px"
        />
      )}

      {error && !done && (
        <ExclamationOutlineIcon
          fill={stylesByStatus.color}
          className="progress-step__icon"
          w="16px"
        />
      )}
    </Flex>
  );
};

export default StepBullet;
