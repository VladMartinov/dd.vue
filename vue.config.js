const path = require('path');
const { defineConfig } = require('@vue/cli-service');

module.exports = defineConfig({
  transpileDependencies: true,

  pluginOptions: {
    svgSprite: {
      dir: './src/assets/icons',
      test: /\.svg$/,
      loaderOptions: {
        extract: false
      }
    },
    'style-resources-loader': {
      preProcessor: 'scss',
      patterns: [
        path.resolve(__dirname, './styles/**/*.scss'),
      ]
    },
  },

  chainWebpack: config => {
    config.module
      .rule('svg-sprite')
      .use('svg-sprite-loader')
      .loader('svg-sprite-loader');
  },
});