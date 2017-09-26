var gulp = require('gulp');
var browserSync = require('browser-sync');
var autoprefixer = require('gulp-autoprefixer');
var csscomb = require('gulp-csscomb');
var gcmq = require('gulp-group-css-media-queries');
var cssnano = require('gulp-cssnano');
var rename = require('gulp-rename');
var concat = require('gulp-concat');
var uglify = require('gulp-uglifyjs');
var htmlmin = require('gulp-htmlmin');
var del = require('del');
var imagemin = require('gulp-imagemin');
var pngquant = require('imagemin-pngquant');
var sass = require('gulp-sass');
var wait = require('gulp-wait');
var iconify = require('gulp-iconify');

gulp.task('sass', function() {
  return gulp.src('source/scss/**/*.scss')
  .pipe(wait(500))
  .pipe(sass().on('error', sass.logError))
  .pipe(csscomb())
  .pipe(gcmq())
  .pipe(gulp.dest('source/css'))
  .pipe(autoprefixer({
    browsers: ['last 2 versions'],
    cascade: false
  }))
  .pipe(cssnano({
    discardComments: {
      removeAll: true
    },
    svgo: false
  }))
  .pipe(rename({
    suffix: '.min'
  }))
  .pipe(gulp.dest('source/css'))
  .pipe(browserSync.reload({ stream: true }));
});

gulp.task('scripts', function () {
  return gulp.src(['source/js/swiper.min.js', 'source/js/main.js'])
  .pipe(concat('main.min.js'))
  .pipe(uglify()) 
  .pipe(gulp.dest('source/js'))
  .pipe(browserSync.reload({ stream: true }));
});

gulp.task('default', function () {
  iconify({
    src: 'svg/*.svg',
    styleTemplate: '_icon_gen.scss.mustache',
    scssOutput: './scss',
    cssOutput: './css',
    svgoOptions: {
      enabled: true,
      options: {
        plugins: [
          { removeUnknownsAndDefaults: false },
          { mergePaths: false }
        ]
      }
    },
    svg2pngOptions: {
      scaling: 1.0,
      verbose: true,
      concurrency: null
    }
  });
});

gulp.task('html', function () {
  gulp.src('source/*.html')
    .pipe(browserSync.reload({ stream: true }));
});

gulp.task('browser-sync', function () {
  browserSync({
    server: {
      baseDir: 'source'
    },
    port: 8080,
    open: true,
    notify: false
  });
});

gulp.task('watch', ['browser-sync', 'sass', 'scripts'], function () {
  gulp.watch('source/scss/**/*.scss', ['sass']);
  gulp.watch('source/*.html', ['html']);
  gulp.watch('source/js/main.js', ['scripts']); 
});

gulp.task('clean', function () {
  return del.sync('build');
});

gulp.task('img', function () {
  return gulp.src('source/img/**/*')
    .pipe(imagemin({
      interlaced: true,
      progressive: true,
      svgoPlugins: [{ removeViewBox: false }],
      use: [pngquant()]
    }))
    .pipe(gulp.dest('build/img'));
});

gulp.task('build', ['sass', 'scripts', 'img'] ,function() {
  var buildCss = gulp.src([
    'source/css/style.css',
    'source/css/style.min.css' 
  ])
  .pipe(gulp.dest('build/css'));

  var buildJs = gulp.src('source/js/**/*')
  .pipe(gulp.dest('build/js'));

  var buildHtml = gulp.src('source/*.html')
  .pipe(gulp.dest('build'));

  var buildFonts = gulp.src('source/fonts/**/*')
  .pipe(gulp.dest('build/fonts'));
});

gulp.task('default', ['watch']);