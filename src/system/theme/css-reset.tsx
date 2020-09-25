import React from 'react';
import { CSSReset as BaseCSSReset, Global } from '@chakra-ui/core';
import { COLORS } from '../../constants/colors/colors';

export const CSSReset = () => (
  <>
    <Global
      styles={`
                * {
                    border-color: ${COLORS.GRAY_200};
                }
            `}
    ></Global>
    <BaseCSSReset />
  </>
);
