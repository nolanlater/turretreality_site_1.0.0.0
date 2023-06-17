// Sass configuration
var gulp = require('gulp');
var sass = require('gulp-sass')(require('sass'));

gulp.task('sass', function(cb) {
  gulp
    .src('scss/**/*.scss', 'scss/**/layout/**/responsive/**/*.scss')
    .pipe(sass())
    .pipe(gulp.dest('css/'))
    // .pipe(
    //   gulp.dest(function(f) {
    //     return f.base;
    //   })
    // );
  cb();
});

gulp.task(
  'default',
  gulp.series('sass', function(cb) {
    gulp.watch('scss/**/*.scss', gulp.series('sass'));
    cb();
  })
);