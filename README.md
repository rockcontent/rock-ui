# Rock UI

Rock Content Design System component kit in React

## Using Rockr UI in a react project

Install the kit package in your react project

```
yarn add @rockr/rock-ui
```
or, with npm:
```
npm i -S @rockr/rock-ui
```

In your entry file (e.g `app.tsx`) use the theme provider

```typescript
# app.tsx

import * as React from "react"
import { ThemeProvider, CSSReset, RockUITheme } from "@rockr/rock-ui"

// Use at the root of your app
function App() {
  return (
    <ThemeProvider theme={RockUITheme}>
      <CSSReset />
      <App />
    </ThemeProvider>
  )
}
```

Use any component from the library

```typescript
# MyComponent.tsx
import React from 'react'
import { Button } from '@rockr/rock-ui'

const MyComponent = () => <Button colorScheme="blue">Foobar</Button>
```

## Development

```
npm start # or yarn start
```

This builds to `/dist` and runs the project in watch mode so any edits you save inside `src` causes a rebuild to `/dist`.

### Storybook

Run inside another terminal:

```
yarn storybook
```

This loads the stories from `./src/components/**/stories/*.stories.tsx`.

> NOTE: Stories should reference the components as if using the library, similar to the example playground. This means importing from the root project directory. This has been aliased in the tsconfig and the storybook webpack config as a helper.

## Configuration

Code quality is set up with `prettier`, `husky`, and `lint-staged`. Adjust the respective fields in `package.json` accordingly.

### Jest

Jest tests are set up to run with `npm test` or `yarn test`. This runs the test watcher (Jest) in an interactive mode. By default, runs tests related to files changed since the last commit.

### Rollup

RockUI uses [Rollup v1.x](https://rollupjs.org) as a bundler and generates multiple rollup configs for various module formats and build settings. See [Optimizations](#optimizations) for details.

### TypeScript

`tsconfig.json` is set up to interpret `dom` and `esnext` types, as well as `react` for `jsx`. Adjust according to your needs.

## Named Exports

Per Palmer Group guidelines, [always use named exports.](https://github.com/palmerhq/typescript#exports) Code split inside your React app instead of your React library.

## Publishing to NPM

We use https://github.com/sindresorhus/np to publish to NPM

## Known Issues

1. The progress component preview doesn't seem to work in the official docs examples
https://next.chakra-ui.com/docs/components/progress however, it works fine for us.

2. The checkbox and radio border color is inherited. So if it is not set on a parent, it will
be white. And chances are high for the background to be white as well, so it will
seem that the property is not set.
