const path = require('path');
const TerserPlugin = require('terser-webpack-plugin');

const terser = new TerserPlugin({
  terserOptions: {
    ecma: '2016',
  },
});

console.log(terser);

module.exports = {
  mode: 'production',
  devtool: 'source-map',
  entry: {
    app: './src/index.js',
  },
  output: {
    path: path.join(__dirname, '/dist'),
  },
  resolve: {},
  module: {},
  plugins: [],

  optimization: {
    minimize: true,
    minimizer: [terser],
  },
};
