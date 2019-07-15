const
    gulp = require('gulp'),
    pug = require('gulp-pug'),
    sourcemaps = require('gulp-sourcemaps'),
    mmq = require('gulp-merge-media-queries'),
    cleanCSS = require('gulp-clean-css'),
    rename = require("gulp-rename"),
    babel = require('gulp-babel'),
    concat = require('gulp-concat'),
    uglify = require('gulp-uglify');

//- Stage One: task for Pug and watch

gulp.task('pug', function buildHTML() {
    return gulp.src('build/pug/pages/*.pug')
        .pipe(pug({
            pretty: true
        }))
        .pipe(gulp.dest('.'))
})

//- Stage Two: connecting SASS, compile to CSS and use to PUG
//- Use map to create sequential add

gulp.task('sass', () => {
    return gulp.src(['global.css', 'demo.css', '*.css'].map(file => `build/css/${file}`))
        .pipe(sourcemaps.init())
        .pipe(concat('style.css'))
        .pipe(mmq({
            log: true
        }))
        .pipe(cleanCSS()) //- minify css
        .pipe(rename({
            suffix: ".min"
        }))
        .pipe(sourcemaps.write('.'))
        .pipe(gulp.dest('css'))
})

//- Stage Three: concat & minify JavaScript
//- Use map to create sequential add

gulp.task('scripts', () => {
    return gulp.src('build/js/*.js')
        .pipe(sourcemaps.init())
        .pipe(babel({
            presets: ['@babel/preset-env']
        }))
        .pipe(concat('scripts.js'))
        .pipe(uglify()) //- minify js
        .pipe(rename({
            suffix: ".min"
        }))
        .pipe(sourcemaps.write('.'))
        .pipe(gulp.dest('js'))
})

gulp.task('component-assembly', function () {
    gulp.watch('build/pug/pages/*.pug', gulp.series('pug'))
    gulp.watch('build/css/*.css', gulp.series('sass'))
    gulp.watch('build/js/*.js', gulp.series('scripts'))
})

gulp.task('watch', gulp.series(gulp.parallel('pug', 'sass', 'scripts'), 'component-assembly'))