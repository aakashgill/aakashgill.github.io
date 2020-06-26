var gulp = require('gulp');
var acss = require('gulp-atomizer');
const { watch } = require('gulp');

gulp.task('acss', function() {
  return gulp.src(['./index.html', './work.html'])
    .pipe(acss({
      outfile: 'atomic.css',
      acssConfig: require('./acssConf.js')
    }))
    .pipe(gulp.dest('src/css'));
});

gulp.task('watch', function() {
  gulp.watch(['./index.html', './work.html'], gulp.series('acss'));
})
