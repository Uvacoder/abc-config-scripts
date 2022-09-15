# ⚡ @mrmartineau/scripts

> Shareable config scripts

```sh
yarn add --dev @mrmartineau/scripts
```

<details>
  <summary>Table of contents</summary>

<!-- START doctoc generated TOC please keep comment here to allow auto update -->
<!-- DON'T EDIT THIS SECTION, INSTEAD RE-RUN doctoc TO UPDATE -->


- [Babel](#babel)
- [ESLint](#eslint)
  - [Base `.eslintrc`](#base-eslintrc)
  - [React `.eslintrc`](#react-eslintrc)
  - [Typescript `.eslintrc`](#typescript-eslintrc)
  - [Typescript and React `.eslintrc`](#typescript-and-react-eslintrc)
- [Jest](#jest)
    - [Using the default config](#using-the-default-config)
    - [Overriding the default config](#overriding-the-default-config)
  - [Jest + Typescript](#jest--typescript)
- [Prettier](#prettier)
- [Rollup](#rollup)
  - [Add extra Rollup plugins](#add-extra-rollup-plugins)
- [Stylelint](#stylelint)
- [TSLint](#tslint)
  - [Base `tslint.json`](#base-tslintjson)
  - [React `tslint.json`](#react-tslintjson)
- [TypeScript](#typescript)
    - [Single package repo](#single-package-repo)
  - [Mono repo](#mono-repo)

<!-- END doctoc generated TOC please keep comment here to allow auto update -->

</details>

## Babel

To use this config, create an `.babelrc` file in the root of your package and add:

```json
{
  "extends": "@mrmartineau/scripts/babel"
}
```

This babel config excludes some EcmaScript features, so you may need a polyfill for them:

```
https://polyfill.io/v3/polyfill.min.js?flags=gated&callback=init&features=default%2CArray.prototype.includes%2CArray.prototype.findIndex%2CArray.prototype.find%2CFunction.prototype.name
```

or

```html
<script
  crossorigin="anonymous"
  src="https://polyfill.io/v3/polyfill.min.js?flags=gated&callback=init&features=default%2CArray.prototype.includes%2CArray.prototype.findIndex%2CArray.prototype.find%2CFunction.prototype.name"
></script>
```

## ESLint

There are four eslint configs available:

- **Base**: for general purpose usage
- **React**: extends the base, for use with React
- **Typescript**: extends the base, for use with Typescript
- **Typescript + React**: extends the base, for use with Typescript and React

To use this config, create an `.eslintrc` file in the root of your package and reference one of the mentioned config options.

### Base `.eslintrc`

```json
{
  "extends": ["@mrmartineau/scripts/eslint"]
}
```

### React `.eslintrc`

```json
{
  "extends": ["@mrmartineau/scripts/eslint/react"]
}
```

### Typescript `.eslintrc`

```json
{
  "extends": ["@mrmartineau/scripts/eslint/typescript"]
}
```

### Typescript and React `.eslintrc`

```json
{
  "extends": ["@mrmartineau/scripts/eslint/typescript-react"]
}
```

## Jest

This config assumes you're using jest, more specifically, that you use `ts-jest`.

To use this config, create an `jest.config.js` file in the root of your package and add:

#### Using the default config

```js
module.exports = require('@mrmartineau/scripts/jest')
```

#### Overriding the default config

If you need to add or override this config, use this:

```js
const jestConfig = require('@mrmartineau/scripts/jest')

module.exports = Object.assign(jestConfig, {
  // your overrides here
  testPathIgnorePatterns: ['/dist/', '/node_modules/']
})
```

### Jest + Typescript

```js
module.exports = require('@mrmartineau/scripts/jest/typescript')
```

## Prettier

To use this config, create an `.prettierrc.js` file in the root of your package and add:

```js
module.exports = require('@mrmartineau/scripts/prettier')
```

## Rollup

At the moment, this config only provides the Rollup plugins that your package should use. See how it is used below:

To use this config, create an `rollup.config.js` file in the root of your package and add:

```js
import { plugins } from '@mrmartineau/scripts/rollup'

import pkg from './package.json'

export default {
  input: 'src/index.ts',
  output: [
    {
      file: pkg.main,
      format: 'cjs',
      exports: 'named',
      sourcemap: true
    },
    {
      file: pkg.module,
      format: 'esm',
      exports: 'named',
      sourcemap: true
    }
  ],

  plugins
}
```

### Add extra Rollup plugins

```js
import { plugins } from '@mrmartineau/scripts/rollup'
import pkg from './package.json'

// Add this plugin
let graph = require('rollup-plugin-graph')
let graphOptions = { prune: true }

const newPlugins = plugins.push(graph(graphOptions))

export default {
  input: 'src/index.ts',
  output: [
    {
      file: pkg.main,
      format: 'cjs',
      exports: 'named',
      sourcemap: true
    },
    {
      file: pkg.module,
      format: 'esm',
      exports: 'named',
      sourcemap: true
    }
  ],

  plugins: newPlugins
}
```

## Stylelint

To use this config, create an `stylelint.config.js` file in the root of your package and add:

```js
module.exports = require('@mrmartineau/scripts/stylelint')
```

## TSLint

There are two types of tslint configs available for use:

- **Base**: for general purpose usage
- **React**: enhanced for tslint, extends from the base one

To use this configuration you need to create a `tslint.json` file in the root of your package and reference one of the mentioned config options.

### Base `tslint.json`

```json
{
  "extends": ["@mrmartineau/scripts/tslint/base"]
}
```

### React `tslint.json`

```json
{
  "extends": ["@mrmartineau/scripts/tslint/react"]
}
```

## TypeScript

`tsconfig.json` allows extensions via the `extends` key, but doesn't support module resolution (i.e. a node module), thus making it quite restrictive when it comes to referencing the path to a parent config file. Paths specified must be relative or absolute, absolute paths being of no use to us in the context of a shared code base.

Importing the shared config from `./node_modules/@mrmartineau/scripts` is our only option.

#### Single package repo

To use this config, create an `tsconfig.js` file in the root of your repo and add:

```json
{
  "extends": "./node_modules/@mrmartineau/scripts/tsconfig/tsconfig.base.json",
  ...
}
```

### Mono repo

To use this config, create an `tsconfig.js` file in the root of your specific package (e.g. `./packages/?`) and add:

```json
{
  "extends": "../../node_modules/@mrmartineau/scripts/tsconfig/tsconfig.base.json",
  ...
}
```

> Made by [ZΛNDΞR ⚡](https://github.com/mrmartineau/)
