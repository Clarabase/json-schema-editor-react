import typescript from '@rollup/plugin-typescript';
import postcss from 'rollup-plugin-postcss';
import babel from '@rollup/plugin-babel';
import resolve from '@rollup/plugin-node-resolve';
import commonjs from '@rollup/plugin-commonjs';

export default {
  input: 'src/index.ts',
  output: {
    file: 'dist/bundle.js',
    format: 'cjs',
    exports: 'default'
  },
  plugins: [
    typescript({
      tsconfig: './tsconfig.json',
      sourceMap: true
    }),
    postcss({
      extract: true,
      minimize: true,
      plugins: [require('tailwindcss'), require('autoprefixer')]
    }),
    resolve(),
    commonjs(),
    babel({ babelHelpers: 'bundled', exclude: 'node_modules/**' })
  ],
  external: ['react', 'react-dom', 'prop-types']
};