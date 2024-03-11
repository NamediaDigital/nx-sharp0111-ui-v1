const { NxWebpackPlugin } = require('@nx/webpack');
const { NxReactWebpackPlugin } = require('@nx/react');
const { join } = require('path');

module.exports = {
  output: {
    path: join(__dirname, './dist/nx-sharp0111-ui-v1'),
  },
  plugins: [
    new NxWebpackPlugin({
      tsConfig: './tsconfig.json',
      compiler: 'babel',
      main: './src/index.ts',
      // index: './src/index.html',
      // baseHref: '/',
      // assets: ['./src/favicon.ico', './src/assets'],
      // styles: ['./src/styles.scss'],
      outputHashing: process.env['NODE_ENV'] === 'production' ? 'all' : 'none',
      optimization: process.env['NODE_ENV'] === 'production',
      deleteOutputPath: true,
      generateIndexHtml: false
    }),
    new NxReactWebpackPlugin({
      // Uncomment this line if you don't want to use SVGR
      // See: https://react-svgr.com/
      // svgr: false
    }),
  ],
};
