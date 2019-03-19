'use strict';

var gulp = require('gulp'),
    css = require('gulp-sass'),
    livereload = require('gulp-livereload');

gulp.task('html', function () {
    gulp.src('./*.html')
        .pipe(livereload());
});

gulp.task('watch', function () {
    livereload.listen();
    gulp.watch('./*.html', ['html']);
    gulp.watch('css/**/*.scss', ['compile_css']);
    gulp.watch('css/*.css', function(file){
        livereload.changed(file)
    });
});