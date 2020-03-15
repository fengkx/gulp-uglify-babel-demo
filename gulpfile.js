const gulp = require('gulp');
const rename = require('gulp-rename');
const uglify = require('gulp-uglify');
const babel = require('gulp-babel');
const browserify = require('browserify');

gulp.task('js', () => {
    return browserify("main.js")
    .transform("babelify", {
        presets: [
            ['@babel/preset-env', { useBuiltIns: 'usage', corejs: 3 }]
        ],
    })
    .bundle()
    .pipe(uglify())
    .pipe(rename({suffix: '.min'}))
    .pipe(gulp.dest('.'));
})

gulp.task('default', gulp.parallel('js'));