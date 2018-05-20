const gulp = require('gulp');
const sass = require('gulp-sass');
const minCss = require('gulp-cssmin');

gulp.task('sass', function() {
    return gulp.src(['sass//**/*.sass'])
        .pipe(sass())
        .pipe(minCss())
        .pipe(gulp.dest("css/"))
});