"use strict";

var path = require('path');
var gulp = require('gulp');
var htmlminify = require('gulp-html-minify');

gulp.task('htmlmini' , function(){
    return gulp.src("./server/views/*.html")
        .pipe(htmlminify())
        .pipe(gulp.dest("./server/views/min"))
})

gulp.task('default', ['htmlmini'])
