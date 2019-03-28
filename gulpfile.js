var gulp = require('gulp');
gulp.task('message', function() {
  return new Promise(function(resolve, reject) {
    console.log('HTTP Server Started');
    resolve();
  });
});
