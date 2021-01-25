import React from "react";
import { RockUITheme, ThemeProvider } from '../src'

export const decorators = [
  (Story) => (
    <ThemeProvider resetCSS theme={RockUITheme}>
      <Story />
    </ThemeProvider>
  ),
];