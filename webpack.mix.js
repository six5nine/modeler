const mix = require('laravel-mix');
const path = require('path');

mix.webpackConfig({
  resolve: {
    alias: {
      '@modeler': path.resolve(__dirname, 'dist/modeler.common.js')
    }
  },
  externals: { 'vue': 'Vue', 'vuex': 'Vuex'}
}).setPublicPath('public')
  .js('resources/js/index.js', 'js')
  // .js('resources/js/initialLoad.js', 'js')
  .js('resources/js/test.js', 'js')
  .copyDirectory('dist/img', 'public/js/img');
