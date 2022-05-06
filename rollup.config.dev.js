import serve from "rollup-plugin-serve"
import livereload from 'rollup-plugin-livereload-universal'
import memfs from 'rollup-plugin-memory-fs'
import replace from '@rollup/plugin-replace'
import config from './rollup.config'

const memfsPlugin = memfs()
const livereloadPlugin = livereload({ reloadEmitter: memfsPlugin })

const {input, plugins} = config

export default {
  input,
  output: {
    dir: 'node_modules/.cache',
    format: 'iife',
    sourcemap: true
  },
  plugins: [
    ...plugins,
    replace({
      'process.env.NODE_ENV': JSON.stringify('development'),
      preventAssignment: true
    }),
    serve({
      open: false,
      verbose: true,
      contentBase: ["public","node_modules/.cache"],
      host: "localhost",
      port: "3000"
    }),
    memfsPlugin,
    livereloadPlugin
  ]
}