const path = require('path');
const { CleanWebpackPlugin } = require('clean-webpack-plugin');
const HTMLWebpackPlugin = require('html-webpack-plugin');

module.exports = {
  mode: 'production', // will compress
  entry: './src/index.jsx',
  output: {
    path: path.resolve(__dirname, 'dist'),
    filename: '[name].[hash].js',
  },
  plugins: [
    new HTMLWebpackPlugin({
      template: './src/index.html',
      filename: './index.html',
      // chunks: '',
    }),
    new CleanWebpackPlugin(),
  ],
  module: {
    rules: [
      {
        test: /\.(css|less)$/i,
        use: ['style-loader', 'css-loader', 'less-loader'], // right to left compilation order
      },
      {
        test: /\.(jpg|jpeg|png|svg)$/i,
        use: ['file-loader'],
      },
    ],
  },
};
