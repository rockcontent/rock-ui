import React from 'react';
import { Flex, Text } from '@chakra-ui/react';
import { StepBulletProps } from './entities/step-bullet-props';

import { CheckOutlineIcon, ExclamationOutlineIcon } from '../../icons';

const stepStyleByStatus = {
  current: {
    bg: 'blue.500',
    borderColor: 'blue.100',
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
  current?: boolean,
  done?: boolean,
  error?: boolean
) => {
  if (done) return stepStyleByStatus.done;
  if (error) return stepStyleByStatus.error;
  if (current) return stepStyleByStatus.current;

  return stepStyleByStatus.incomplete;
};

const StepBullet: React.FC<StepBulletProps> = ({
  index,
  type = 'number',
  current,
  done,
  error,
}) => {
  const stylesByStatus = getStyleByStepStatus(current, done, error);
  const showText = type === 'number' && !done && !error;
  const hideBorder = done || error || (current && type !== 'bullet');

  return (
    <Flex
      borderRadius="full"
      h="24px"
      w="24px"
      boxSizing="border-box"
      borderWidth={type === 'bullet' ? '4px' : '2px'}
      justifyContent="center"
      alignItems="center"
      {...stylesByStatus}
      borderColor={hideBorder ? 'transparent' : stylesByStatus.borderColor}
    >
      {showText && (
        <Text
          fontSize="sm"
          lineHeight="4"
          fontWeight="medium"
          color={stylesByStatus.color}
        >
          {index}
        </Text>
      )}

      {(() => {
        if (done) {
          return <CheckOutlineIcon color={stylesByStatus.color} w="12px" />;
        }

        if (error) {
          return (
            <ExclamationOutlineIcon color={stylesByStatus.color} w="12px" />
          );
        }

        return '';
      })()}
    </Flex>
  );
};

export default StepBullet;
