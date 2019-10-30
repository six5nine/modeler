let mix = require('laravel-mix');

mix.webpackConfig({

    externals: {
    },

    resolve: {
        alias: {
            '@processmaker/modeler': path.resolve(__dirname, 'dist/modeler.common.js')
        }
    }
    
}).setPublicPath('public')
    .js('resources/js/index.js', 'js')
    .js('resources/js/initialLoad.js', 'js')
    .copy("dist/img", "public/js/img");