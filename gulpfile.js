'use strict';

var gulp = require('gulp');
var sass = require('gulp-sass');
var sourcemaps = require('gulp-sourcemaps');
var uglify = require('gulp-uglify');
var postcss = require('gulp-postcss');
var autoprefixer = require('autoprefixer');

var paths = {
    scripts: 'src/js/*.js',
    sass: 'src/sass/*.scss'
};

function scriptsTask(done) {
    gulp.src(paths.scripts)
        .pipe(uglify())
        .pipe(gulp.dest('dist'));

    done();
}

function sassTask(done) {
    gulp.src(paths.sass)
        .pipe(sourcemaps.init())
        .pipe(sass({
            outputStyle: 'compressed'
        }).on('error', sass.logError))
        .pipe(postcss([autoprefixer()]))
        .pipe(sourcemaps.write('.'))
        .pipe(gulp.dest('dist'));

    done();
}

function watch(done) {
    gulp.watch(paths.scripts, scriptsTask);
    gulp.watch(paths.sass, sassTask);

    done();
}

exports.scripts = scriptsTask;
exports.sass = sassTask;
exports.watch = watch;
exports.default = gulp.series(scriptsTask, sassTask);