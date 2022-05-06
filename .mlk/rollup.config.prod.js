import config from './rollup.config'
import replace from '@rollup/plugin-replace'
import htmlTemplate from 'rollup-plugin-generate-html-template'
import {terser} from 'rollup-plugin-bundleutils'

const {input, plugins} = config

export default {
  input,
  output: {
    file: 'dist/index.js',
    format: 'iife',
    sourcemap: false
  },
  plugins: [
    ...plugins,
    replace({
      'process.env.NODE_ENV': JSON.stringify('production'),
      preventAssignment: true
    }),
    htmlTemplate({
      template: './public/index.html',
    }),
    terser()
  ]
}