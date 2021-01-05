const gulp = require('gulp');
const clean = require('gulp-clean');
const sass = require('gulp-sass');
const babel = require('gulp-babel');
const uglify = require('gulp-uglify');
const concat = require('gulp-concat');
const sourcemaps = require('gulp-sourcemaps');
const browserSync = require('browser-sync').create();

// Configuration
const project = {
  src: './src',
  build: './build',
};

// cleanup the build output
gulp.task('clean', function () {
  return gulp.src(project.build, { read: false }).pipe(clean());
});

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
    .pipe(uglify())
    .pipe(sourcemaps.write('.'))
    .pipe(gulp.dest(project.build + '/js'));
});

// Compile the assets to the correct destination
gulp.task('assets', gulp.parallel('styles', 'scripts'));

// Let's build this sucker, without getting data from online sources
gulp.task('dev', gulp.series('assets', 'watch'));

// Let's get the data we need and then build this sucker.
gulp.task('build', gulp.series('assets'));
