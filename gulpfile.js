const gulp = require('gulp');
const sass = require('gulp-sass');
const babel = require('gulp-babel');
const uglify = require('gulp-uglify');
const concat = require('gulp-concat');
const sourcemaps = require('gulp-sourcemaps');
const rename = require('gulp-rename');
const browserSync = require('browser-sync').create();

// Configuration
const project = {
  src: './src',
  build: './build',
};

// Compile SCSS files to CSS
gulp.task('styles', function () {
  return gulp
    .src(project.src + '/css/main.scss')
    .pipe(sourcemaps.init())
    .pipe(
      sass({
        outputStyle: 'expanded',
      }).on('error', sass.logError)
    )
    .pipe(sourcemaps.write('.'))
    .pipe(gulp.dest(project.build + '/css'));
});

gulp.task('cssmin', function () {
  return gulp
    .src(project.src + '/css/main.scss')
    .pipe(sourcemaps.init())
    .pipe(
      sass({
        outputStyle: 'compressed',
      }).on('error', sass.logError)
    )
    .pipe(rename('main.min.css'))
    .pipe(gulp.dest(project.build + '/css'));
});

// Watch for SCSS changes
gulp.task('watch', function () {
  gulp.watch(project.src + '/', gulp.parallel('styles', 'scripts')).on('change', browserSync.reload);
});

// Uglify our javascript files into one.
gulp.task('scripts', function () {
  return gulp
    .src(project.src + '/js/app.js')
    .pipe(sourcemaps.init())
    .pipe(babel())
    .pipe(concat('app.bundle.js'))
    .pipe(sourcemaps.write('.'))
    .pipe(gulp.dest(project.build + '/js'));
});
gulp.task('jsmin', function () {
  return gulp
    .src(project.src + '/js/app.js')
    .pipe(sourcemaps.init())
    .pipe(babel())
    .pipe(concat('app.bundle.js'))
    .pipe(uglify())
    .pipe(rename('app.bundle.min.js'))
    .pipe(gulp.dest(project.build + '/js'));
});

// Let's build this sucker, without getting data from online sources
gulp.task('dev', gulp.series('styles', 'cssmin', 'scripts', 'jsmin', 'watch'));

// Let's get the data we need and then build this sucker.
gulp.task('build', gulp.series('styles', 'cssmin', 'scripts', 'jsmin'));
