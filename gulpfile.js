var gulp = require('gulp'),
watch = require('gulp-watch');

gulp.task('default', function() {
  console.log("you created a Gulp task.");
});

gulp.task('html', function() {
  console.log("watching html files.");
});

gulp.task('styles', function() {
  console.log("watching Sass or PostCSS files.");
});

gulp.task('watch', function() {

  watch('./app/index.html', function() {
    gulp.start('html');
  }); 

  watch('./app/assets/styles/**/*.css', function() {
    gulp.start('styles');
  })

}); 