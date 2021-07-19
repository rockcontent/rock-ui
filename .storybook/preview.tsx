import React from "react";
import { RockUITheme, ThemeProvider } from '../src'
const { addDecorator } = require('@storybook/react');
const { withPropsTable } = require('storybook-addon-react-docgen');

addDecorator(withPropsTable);

export const decorators = [
  (Story) => (
    <ThemeProvider resetCSS theme={RockUITheme}>
      <Story />
    </ThemeProvider>
  ),
];