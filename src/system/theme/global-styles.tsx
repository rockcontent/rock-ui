import React from 'react';
import { Global } from '@emotion/react';

export const GlobalStyles = () => (
  <Global
    styles={`
                @import url('https://fonts.googleapis.com/css2?family=Manrope:wght@200;400;600;700&family=Inter:wght@200;400;500;600&display=swap');
            `}
  ></Global>
);
