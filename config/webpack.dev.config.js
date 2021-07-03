const path = require('path');
const { CleanWebpackPlugin } = require('clean-webpack-plugin'); // removes unused assembly elements after reassembly
const HTMLWebpackPlugin = require('html-webpack-plugin'); // working with html in assembly

const babelOptions = preset => {
  const opts = {
    presets: ['@babel/preset-env'],
    // plugins: ['@babel/plugin-proposal-class-properties'],
  };

  if (preset) {
    opts.presets.push(preset);
  }

  return opts;
};

module.exports = {
  mode: 'development',
  entry: {
    app: ['@babel/polyfill', './src/index.jsx'], // @babel/polyfill - for jsx
    // pageTwo: './src/pages/Workers.js', // for chunks by page
    // pageThree: './src/pages/WorkersAdd.js',
  },
  output: {
    path: path.resolve(__dirname, 'dist'),
    filename: '[name].[hash].js', // [] - for multiple entry points in entry, and name is taken from the names of the entry, default main
    publicPath: '/', // for webpack-dev-server
  },
  devServer: {
    port: 3000,
    contentBase: './dist', // devServer stores the ./dist folder in pc memory, not in our files, so it compiles quickly
    overlay: {
      // to show errors in the browser on black background
      warnings: true,
      errors: true,
    },
  },
  resolve: {
    extensions: ['.js', '.jsx', '.json'], // so that when importing not to write js, json or jsx at the end, and file processing priority /App.[js|jsx|json] -> /App
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
        test: /\.(ttf|woff|woff2|eot)$/,
        use: ['file-loader'],
      },
      {
        test: /\.md$/,
        use: [
          {
            loader: "remark-loader",
          },
        ],
      },
      {
        test: /\.m?js$/,
        exclude: /node_modules/,
        use: {
          loader: 'babel-loader',
          options: {
            presets: [
              babelOptions(), // transpiles es2015+ -> es5 for cross-browser compatibility
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
              babelOptions('@babel/preset-react'), // jsx -> js
            ],
          },
        },
      },
      // {
      //   test: /\.(csv|tsv)$/i,
      //   use: ['csv-loader'],
      // },
      // {
      //   test: /\.xml$/i,
      //   use: ['xml-loader'],
      // },
      // {
      //   test: /\.yaml$/i,
      //   type: 'json',
      //   parser: {
      //     parse: yaml.parse,
      //   },
      // },
      // {
      //   test: /\.ts$/,
      //   exclude: /node_modules/,
      //   loader: {
      //     loader: 'babel-loader',
      //     options: babelOptions('@babel/preset-typescript')
      //   }
      // },
    ],
  },
};
