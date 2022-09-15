const babel = require('rollup-plugin-babel')
const commonjs = require('rollup-plugin-commonjs')
const resolve = require('rollup-plugin-node-resolve')
const autoExternal = require('rollup-plugin-auto-external')
const bundleSize = require('rollup-plugin-bundle-size')
const json = require('rollup-plugin-json')
const { terser } = require('rollup-plugin-terser')
const typescript = require('rollup-plugin-typescript2')

const extensions = ['.tsx', '.ts', '.js', '.jsx']

export const plugins = [
  typescript(),
  resolve({ extensions }),
  commonjs(),
  autoExternal(),
  json(),
  babel({ extensions, include: ['src/**/*'], runtimeHelpers: true }),
  terser(),
  bundleSize()
]
