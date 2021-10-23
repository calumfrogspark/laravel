const mix = require("laravel-mix");

/*
 |--------------------------------------------------------------------------
 | Mix Asset Management
 |--------------------------------------------------------------------------
 |
 | Mix provides a clean, fluent API for defining some Webpack build steps
 | for your Laravel applications. By default, we are compiling the CSS
 | file for the application as well as bundling up all the JS files.
 |
 */

mix.webpackConfig({
    stats: {
        warnings: false,
    },
});

mix.vue();

mix.js("resources/assets/js/app.js", "public/js/app.min.js").js(
    "resources/assets/js/nova.js",
    "public/vendor/nova/js/nova.min.js"
);

mix.sass(
    "resources/assets/sass/nova.scss",
    "public/vendor/nova/css/nova.min.css"
)
    .options({
        processCssUrls: false,
    })
    .sass("resources/assets/sass/app.scss", "public/css/bundle.min.css")
    .options({
        processCssUrls: false,
    });

// mix.copyDirectory('resources/assets/fonts', 'public/fonts');

// if we are not in production then we run the browsersync proxy for dev purposes
if (!mix.inProduction()) {
    mix.browserSync({
        proxy: "james-retail.test",
        watch: true,
    });
}
