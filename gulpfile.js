const 
    gulp = require('gulp'),
    pug = require('gulp-pug'),
    rename = require("gulp-rename");

gulp.task('pug-compile', function buildHTML() {
    return gulp.src('./pug/*.pug')
        .pipe(pug({
            pretty: true
        }))
        .pipe(rename('./index.html'))
        .pipe(gulp.dest('./'))
});