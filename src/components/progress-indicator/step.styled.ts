import styled from 'styled-components';
import { Flex } from '@chakra-ui/react';

export const StepContainer = styled(Flex)`
  padding-top: 4px;

  &:not(.progress-step--disabled):hover {
    .progress-step__title {
      color: ${({ accentColor }) => accentColor};
    }

    .progress-step__bullet--incomplete {
      border-color: ${({ baseColor }) => baseColor} !important;

      p {
        color: ${({ accentColor }) => accentColor} !important;
      }
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
