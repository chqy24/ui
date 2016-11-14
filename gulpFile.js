var gulp = require('gulp');
var connect = require('gulp-connect');
var sass = require('gulp-sass');

gulp.task('connect', function() {
    connect.server({
        root: 'src',
        livereload: true
    });
});

gulp.task('sass', function() {
    gulp.src('./src/sass/main.scss')
        .pipe(sass().on('error', sass.logError))
        .pipe(gulp.dest('./src/css/'))
        .pipe(connect.reload());
});

gulp.task('html', function() {
    gulp.src('./src/**/*.html')
        .pipe(connect.reload());
});

gulp.task('watch', function() {
    gulp.watch(['./src/**/*.html', './src/**/*.js'], ['html']);
    gulp.watch('./src/sass/**/*.scss', ['sass']);
});

gulp.task('default', ['connect', 'watch']);
