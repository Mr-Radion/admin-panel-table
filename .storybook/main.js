// const custom = require('../config/webpack.dev.config');

module.exports = {
  stories: ['../src/**/*.stories.mdx', '../src/**/*.stories.@(js|jsx|ts|tsx)'],
  addons: ['@storybook/addon-links', '@storybook/addon-essentials'],
  webpackFinal: config => {
    // config.module.rules.push({
    //   test: /\.stories\.jsx$/,
    //   enforce: 'pre',
    //   use: ['source-map-loader'],
    // });
    // config.module.rules.push({
    //   test: /\.stories\.jsx$/,
    //   loaders: [
    //     {
    //       loader: require.resolve('@storybook/source-loader'),
    //       options: { parser: 'javascript' },
    //     },
    //   ],
    //   enforce: 'pre',
    // });
    return {
      ...config,
      // module: { ...config.module, rules: custom.module.rules }, // combining project and storybook webpack settings
    };
  },
};
