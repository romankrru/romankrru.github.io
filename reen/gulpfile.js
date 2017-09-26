var gulp = require('gulp');
var less = require('gulp-less');
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

gulp.task('less', function() {
  return gulp.src('source/less/style.less')
  .pipe(less())
  .pipe(csscomb())
  .pipe(gcmq())
  .pipe(gulp.dest('source/css'))
  .pipe(cssnano({
    discardComments: {
      removeAll: true
    }
  }))
  .pipe(rename({
    suffix: '.min'
  }))
  .pipe(gulp.dest('source/css'))
  .pipe(browserSync.reload({ stream: true }));
});

gulp.task('scripts', function () {
  return gulp.src([ 
    'source/libs/tap/dist/tap.min.js',
    'source/js/slider.js',
    'source/js/menu.js'
  ])
  .pipe(concat('script.min.js'))
  .pipe(uglify()) 
  .pipe(gulp.dest('source/js'))
  .pipe(browserSync.reload({ stream: true }));
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

gulp.task('watch', ['browser-sync', 'less', 'scripts'], function () {
  gulp.watch('source/less/**/*.less', ['less']);
  gulp.watch('source/*.html', ['html']);
  gulp.watch('source/js/**/*.js', ['scripts']); 
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

gulp.task('build', ['less', 'scripts', 'img'] ,function() {
  var buildCss = gulp.src([
    'source/css/style.css',
    'source/css/style.min.css' 
  ])
  .pipe(gulp.dest('build/css'));

  var buildJs = gulp.src('source/js/**/*')
  .pipe(gulp.dest('build/js'));

  var buildHtml = gulp.src('source/*.html')
  .pipe(htmlmin({ collapseWhitespace: true }))
  .pipe(gulp.dest('build'));
});

gulp.task('default', ['watch']);