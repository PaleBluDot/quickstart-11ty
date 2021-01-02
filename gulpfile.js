const gulp = require('gulp');
const clean = require('gulp-clean');
const sass = require('gulp-sass');
const uglify = require('gulp-uglify');
const concat = require('gulp-concat');
const pump = require('pump');
const browserSync = require('browser-sync').create();

// Configuration
const project = {
	src: './src',
	build: './build'
};

// cleanup the build output
gulp.task('clean', function() {
	return gulp.src(project.build, { read: false }).pipe(clean());
});

// Compile SCSS files to CSS
gulp.task('styles', function() {
	return gulp
		.src(project.src + '/_includes/assets/css/main.scss')
		.pipe(
			sass({
				outputStyle: 'expanded'
			}).on('error', sass.logError)
		)
		.pipe(gulp.dest(project.build + '/css'));
});

// Watch for SCSS changes
gulp.task('watch', function() {
	gulp
		.watch(
			project.src + '/_includes/assets/',
			gulp.parallel('styles', 'scripts')
		)
		.on('change', browserSync.reload);
});

// Uglify our javascript files into one.
// Use pump to expose errors more usefully.
gulp.task('scripts', function(done) {
	pump(
		[
			gulp.src(project.src + '/_includes/assets/js/**/*.js'),
			concat('app.js'),
			uglify(),
			gulp.dest(project.build + '/js')
		],
		done()
	);
});

// Compile the assets to the correct destination
gulp.task('assets', gulp.parallel('styles', 'scripts'));

// Let's build this sucker, without getting data from online sources
gulp.task('dev', gulp.series('assets', 'watch'));

// Let's gwt the data we need and then build this sucker.
gulp.task('build', gulp.series('assets'));
