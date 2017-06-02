import resolve from 'rollup-plugin-node-resolve';
import babel from 'rollup-plugin-babel';
import uglify from 'rollup-plugin-uglify';

export default {
  entry: 'index.js',
  dest: 'dist/piano.min.js',
  format: 'umd',
  moduleName: 'Piano',
  plugins: [ 
    resolve(),
    babel({
      exclude: 'node_modules/**'
    }),
    uglify(),
  ],
};