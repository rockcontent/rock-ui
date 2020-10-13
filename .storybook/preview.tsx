import { CSSReset, RockUITheme, ThemeProvider } from '../src/system/theme';
import { addDecorator } from '@storybook/react';
import * as React from 'react';

const withRockUI = (StoryFn: Function) => (
  <ThemeProvider theme={RockUITheme}>
    <CSSReset />
    <div id="story-wrapper" style={{ minHeight: '100vh' }}>
      <StoryFn />
    </div>
  </ThemeProvider>
);

addDecorator(withRockUI);
