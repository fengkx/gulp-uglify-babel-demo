const gulp = require('gulp');
const rename = require('gulp-rename');
const uglify = require('gulp-uglify');
const babel = require('gulp-babel');

gulp.task('js', () => {
    return gulp.src('main.js')
    .pipe(babel({
        presets: [
            ['@babel/preset-env', { useBuiltIns: 'usage', corejs: 3 }]
        ],
    }))
    .pipe(uglify())
    .pipe(rename({suffix: '.min'}))
    .pipe(gulp.dest('.'));
})

gulp.task('default', gulp.parallel('js'));