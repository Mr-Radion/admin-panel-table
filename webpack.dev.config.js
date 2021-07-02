const path = require('path');

module.exports = {
  mode: 'development', // no need to squeeze
  entry: './src/index.js',
  output: {
    path: path.resolve(__dirname, 'dist'),
    filename: '[name].[hash].js'
  },
};
