const path = require('path');
const { CleanWebpackPlugin } = require('clean-webpack-plugin'); // removes unused assembly elements after reassembly
const HTMLWebpackPlugin = require('html-webpack-plugin'); // working with html in assembly

module.exports = {
  mode: 'development',
  entry: ['@babel/polyfill', './src/index.jsx'], // @babel/polyfill - for jsx
  output: {
    path: path.resolve(__dirname, 'dist'),
    filename: '[name].[hash].js',
  },
  devServer: {
    port: 3000,
    contentBase: './dist',
  },
  resolve: {
    extensions: ['.js', '.jsx', '.json'], // so that when importing not to write js, json or jsx at the end, and file processing priority
  },
  plugins: [
    new HTMLWebpackPlugin({
      template: './public/index.html',
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
        test: /\.(jpg|jpeg|png|svg|gif)$/i,
        use: ['file-loader'],
      },
      {
        test: /\.m?js$/,
        exclude: /node_modules/,
        use: {
          loader: 'babel-loader',
          options: {
            presets: [
              '@babel/preset-env', // transpiles es2015+ -> es5
            ],
          },
        },
      },
      {
        test: /\.m?jsx$/,
        exclude: /node_modules/,
        use: {
          loader: 'babel-loader',
          options: {
            presets: [
              '@babel/preset-env', // transpiles es2015+ -> es5
              '@babel/preset-react', // jsx -> js
            ],
          },
        },
      },
    ],
  },
};
