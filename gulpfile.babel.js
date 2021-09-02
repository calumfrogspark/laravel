const {series, parallel, src, dest, watch} = require('gulp');
const gulp = require('gulp');
const sass = require('gulp-sass');
const concat = require('gulp-concat');
const sourcemaps = require('gulp-sourcemaps');
const uglify = require('gulp-uglify-es').default;
const notify = require('gulp-notify');
const rename = require('gulp-rename');
const cleanCSS = require('gulp-clean-css');
const browserSync = require('browser-sync');
const plumber = require('gulp-plumber');
const source = require('vinyl-source-stream');
const buffer = require('vinyl-buffer');
const browserify = require('browserify');
const through = require('through2');
const globby = require('globby');
const log = require('gulplog');
const autoprefixer = require('gulp-autoprefixer');

const server = browserSync.create();

const proxyURL = 'http://laravel.test';

const resourceURL = 'resources/assets/';
const publishURL = 'public/'

let javascript = () => {
  var bundledStream = through();

  bundledStream
    .pipe(source(`app.min.js`))
    .pipe(buffer())
    .pipe(sourcemaps.init({ loadMaps:true }))
      .pipe(uglify())
      .on('error', log.error)
    .pipe(sourcemaps.write('./'))
    .pipe(gulp.dest(`${publishURL}js/`))
    .pipe(server.stream());

  globby([`${resourceURL}js/app.js`]).then((entries) => {
    let b = browserify({
      entries: entries, 
      debug: true, 
      insertGlobals: true
    }).transform("babelify", {
      presets: ["@babel/preset-env"]
    });

    b.bundle().pipe(bundledStream);
  }).catch((err) => {
    bundledStream.emit('error', err);
  });

  return bundledStream;
}

function styles() {
  const onError = (err) => {
    notify({
      title: 'Gulp Task Error',
      message: 'Gulp Task errored, check console',
    }).write(err);
    console.log(err.toString());
  };

  server.notify('Compiling SCSS');

  return src(`${resourceURL}sass/app.scss`)
    .pipe(concat('bundle.min.scss'))
    .pipe(plumber({ errorHandler: onError }))
    .pipe(sourcemaps.init())
    .pipe(sass())
    .pipe(sourcemaps.write())
    .pipe(cleanCSS())
    .pipe(autoprefixer())
    .pipe(rename('bundle.min.css'))
    .pipe(dest(`${publishURL}/css`))
    .pipe(server.stream());
}

function fonts() {
  src(`${resourceURL}fonts/*`)
    .pipe(dest(`${publishURL}/fonts`))
  
  return src('node_modules/@fortawesome/fontawesome-pro/webfonts/*')
    .pipe(dest(`${publishURL}/webfonts`));
};

function browsersync() {
  server.init({
    proxy: proxyURL,
  });

  watch(`${resourceURL}sass/**/*.scss`, styles);
  watch(`${resourceURL}js/**/*.js`, javascript);
  watch(`app/**/*.php`).on('change', server.reload);
  watch(`resources/**/*.php`).on('change', server.reload);
  watch(`routes/**/*.php`).on('change', server.reload);
}

const development = series(fonts, styles, javascript, browsersync);
const production = parallel(fonts, styles, javascript);

exports.production = production;
exports.default = development;