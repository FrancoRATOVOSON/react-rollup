import fs from 'fs'
import path from 'path'
import {swc} from "rollup-plugin-swc3"
import {nodeResolve} from "@rollup/plugin-node-resolve"
import commonjs from '@rollup/plugin-commonjs'
import svgr from '@svgr/rollup'
import postcss from 'rollup-plugin-postcss'

const swcrc = JSON.parse(fs.readFileSync(path.resolve(__dirname, '.swcrc')))

export default {
  input: './src/index.tsx',
  plugins: [
    svgr(),
    postcss({
      extensions: [".css"],
      modules: true,
      config: {
        path: path.resolve(__dirname,'../postcss.config.js')
      }
    }),
    nodeResolve({ extensions: [".js", ".jsx", ".ts", ".tsx"] }),
    swc({
      include: /\.[jt]sx?$/,
      tsconfig: 'tsconfig.json',
      ...swcrc
    }),
    commonjs(),
  ]
}