import React from 'react';
import { CSSReset as BaseCSSReset, Global } from '@chakra-ui/core';
import { COLORS } from '../../constants/colors/colors';
import { RockUITheme } from './theme';

export const CSSReset = () => (
  <>
    <Global
      styles={`
                @import url('https://fonts.googleapis.com/css2?family=Manrope:wght@200;400;600&family=Inter:wght@200;400;500;600&display=swap');

                * {
                    border-color: ${COLORS.GRAY_200};
                }
                
                body {
                    font-family: ${RockUITheme.fonts.body};
                }
            `}
    ></Global>
    <BaseCSSReset />
  </>
);
