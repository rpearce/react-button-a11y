import { dirname } from 'path'

import React from 'react'
import ReactDOM from 'react-dom'
import propTypes from 'prop-types'

import babel from 'rollup-plugin-babel'
import commonjs from '@rollup/plugin-commonjs'
import resolve from '@rollup/plugin-node-resolve'
import pkg from './package.json'

const plugins = [
  resolve(),
  commonjs({
    include: /node_modules/,

    // https://github.com/rollup/rollup-plugin-commonjs/issues/407#issuecomment-527837831
    namedExports: {
      react: Object.keys(React),
      'react-dom': Object.keys(ReactDOM),
      'prop-types': Object.keys(propTypes)
    }
  }),
  babel({
    configFile: './babel.config.js',
    only: ['./source'],
    runtimeHelpers: true,
    sourceMaps: 'inline'
  })
]

const config = [
  {
    input: './source/index.js',
    output: [
      {
        dir: dirname(pkg.module),
        exports: 'named',
        format: 'esm',
        name: 'rba-esm',
        sourcemap: true
      },
      {
        dir: dirname(pkg.main),
        exports: 'named',
        format: 'cjs',
        name: 'rba-cjs',
        sourcemap: true
      }
    ],
    plugins,
    external: ['react', 'react-with-forwarded-ref']
  },
  {
    input: './source/index.js',
    output: [
      {
        file: pkg.browser,
        exports: 'named',
        format: 'umd',
        name: 'rba-umd',
        sourcemap: true
      }
    ],
    plugins
  }
]

export default config
