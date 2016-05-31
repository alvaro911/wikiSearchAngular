'use strict';

var gulp = require('gulp');
var sass = require('gulp-sass');
var styles = './styles/**/*.scss';

gulp.task('sass', function(){
	return gulp.src(styles)
	.pipe(sass().on('error', sass.logError))
	.pipe(gulp.dest('./css'));
});

gulp.task('sass-watch', function(){
	gulp.watch(styles, ['sass']);
});